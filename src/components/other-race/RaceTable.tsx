import type { AllRaceType } from '../../voting-data';
import { useMemo } from 'react';
import styled from 'styled-components';

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

const StyledTD = styled.td`
  vertical-align: top;
  min-width: 35px;
  border-bottom: 1px solid rgba(218, 218, 218, 1);
  padding: 5px 0px;
  font-
`;

const StyledTH = styled.th`
  text-align: left;
  color: rgb(73, 73, 73);
  border-bottom: 1px solid black;
  min-width: 35px;
  padding-left: 0px;
  line-height: 1rem;
  font-size: 0.75rem;
  font-weight: 525;
  text-transform: uppercase;
  width: 15%;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 48%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 12px;
  font-family: Roboto Condensed;
  font-stretch: 50%;
`;

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
      <StyledTable key={tableIndex}>
        <colgroup>
          <col style={{ width: '5%' }} />
          <col style={{ width: '68%' }} />{' '}
          {/* Give the most space to the Race Name */}
          <col style={{ width: '25%' }} />
          <col style={{ width: '5%' }} />
        </colgroup>
        <thead>
          <tr>
            <StyledTH>Poll Close</StyledTH>
            <StyledTH>Race</StyledTH>
            <StyledTH>Leader</StyledTH>
            <StyledTH colSpan={1}>Est. Votes Counted</StyledTH>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => {
            return (
              <tr key={race.id}>
                {race.rowSpan > 0 && (
                  <StyledTD rowSpan={race.rowSpan}>{race.pollTime}</StyledTD>
                )}

                <StyledTD>
                  <a href={race.raceUrl}>{race.race} »</a>
                </StyledTD>

                <StyledTD>
                  {race.leader} {race.margin}
                </StyledTD>

                <StyledTD>{race.votesCounted}</StyledTD>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );

  return <>{tableChunks.map((chunk, i) => renderTable(chunk, i))}</>;
}
