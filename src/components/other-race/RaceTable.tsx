import type { AllRaceType } from '../../voting-data';
import { useMemo } from 'react';

interface RenderReadyRace extends AllRaceType {
  rowSpan: number;
}

const MAX_ROWS_PER_TABLE = 11;

const parseTimeWeight = (timeStr: string): number => {
  const clean = timeStr.toLowerCase().replace(/\./g, '').trim();
  let [time, modifier] = clean.split(' ');
  if (!modifier) modifier = 'pm';

  let [hours, minutes] = time.split(':').map(Number);
  if (!minutes) minutes = 0;

  if (modifier === 'pm' && hours !== 12) hours += 12;
  if (modifier === 'am' && hours === 12) hours = 0;

  return hours * 100 + minutes;
};

const getMarginColor = (partyColor: string) => {
  if (partyColor === '#F3BB2D') return '#91701b';
  if (partyColor === '#E06016') return '#86390d';
  if (partyColor === '#16A5A3') return '#0d6361';
  return '#014678';
};

/**
 * Takes a raw list of races and returns a new list with 'rowSpan' attached.
 */
const calcRowSpan = (list: AllRaceType[]): RenderReadyRace[] => {
  return list.map((item, index) => {
    const isCovered = index > 0 && list[index - 1].pollTime === item.pollTime;
    let rowSpan = 0;

    if (!isCovered) {
      let span = 1;
      for (let i = index + 1; i < list.length; i++) {
        if (list[i].pollTime === item.pollTime) {
          span++;
        } else {
          break;
        }
      }
      rowSpan = span;
    }

    return { ...item, rowSpan };
  });
};

export default function RaceTable({ data }: { data: AllRaceType[] }) {
  const tableChunks = useMemo(() => {
    // --- STEP 1: BUCKET SORT ---
    const buckets: Record<string, AllRaceType[]> = {};

    data.forEach((race) => {
      if (!buckets[race.pollTime]) buckets[race.pollTime] = [];
      buckets[race.pollTime].push(race);
    });

    const sortedTimes = Object.keys(buckets).sort((a, b) => {
      return parseTimeWeight(a) - parseTimeWeight(b);
    });

    const sortedList: AllRaceType[] = [];
    sortedTimes.forEach((time) => {
      sortedList.push(...buckets[time]);
    });

    // --- STEP 2: SPLIT ---
    let leftRaw: AllRaceType[] = [];
    let rightRaw: AllRaceType[] = [];
    const totalItems = sortedList.length;

    if (totalItems <= MAX_ROWS_PER_TABLE) {
      leftRaw = sortedList;
    } else {
      const midPoint = Math.ceil(totalItems / 2);
      leftRaw = sortedList.slice(0, midPoint);
      rightRaw = sortedList.slice(midPoint);
    }

    // --- STEP 3: ENRICH ---
    const leftTable = calcRowSpan(leftRaw);
    const rightTable = calcRowSpan(rightRaw);

    return rightTable.length > 0 ? [leftTable, rightTable] : [leftTable];
  }, [data]);

  const renderTable = (races: RenderReadyRace[], tableIndex: number) => (
    <>
      {/* border=1 added just so you can verify the rowspan visually */}
      <table border={1} key={tableIndex}>
        <thead>
          <tr>
            <th>Poll Close</th>
            <th>Race</th>
            <th>Leader</th>
            <th>Est. Votes</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => {
            return (
              <tr key={race.id}>
                {race.rowSpan > 0 && (
                  <td rowSpan={race.rowSpan}>{race.pollTime}</td>
                )}

                <td>
                  <a href={race.raceUrl}>{race.race} »</a>
                </td>

                <td>
                  {race.leader} ({race.margin})
                </td>

                <td>{race.votesCounted}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  return <>{tableChunks.map((chunk, i) => renderTable(chunk, i))}</>;
}
