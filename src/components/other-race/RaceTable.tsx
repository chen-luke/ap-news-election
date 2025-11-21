import type { FlatRace, RaceGroup } from '../../voting-data';
import { useMemo } from 'react';

const MAX_ROWS_PER_TABLE = 11;

const calculateRowSpan = (races: FlatRace[], index: number) => {
  const currentRace = races[index];

  // Look behind: If previous item has same time, this cell is covered.
  if (index > 0 && currentRace.pollTime === races[index - 1].pollTime) {
    return 0;
  }

  // Look ahead: Count how many consecutive items have the same time
  let span = 1;
  for (let i = index + 1; i < races.length; i++) {
    if (currentRace.pollTime === races[i].pollTime) {
      span++;
    } else {
      break;
    }
  }
  return span;
};

const createTable = (races: FlatRace[], tableIndex: number) => {
  return (
    <div>
      <table key={tableIndex}>
        <thead>
          <tr>
            <th>Poll Time</th>
            <th>Race</th>
            <th>Leader</th>
            <th>Votes Counted</th>
          </tr>
        </thead>
        <tbody>
          {races.map((r, i) => {
            const rowSpan = calculateRowSpan(races, i);
            return (
              <tr key={r.id}>
                {rowSpan > 0 && <td rowSpan={rowSpan}>{r.pollTime}</td>}
                <td>{r.race}</td>
                <td>{r.leader}</td>
                <td>{r.votesCounted}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default function RaceTable({ data }: { data: RaceGroup[] }) {
  const tableChunks: FlatRace[][] = useMemo(() => {
    const flattenData: FlatRace[] = data.flatMap((pollGroup: RaceGroup) =>
      pollGroup.races.map((race) => ({
        pollTime: pollGroup.pollTime,
        ...race,
      }))
    );

    if (flattenData.length <= MAX_ROWS_PER_TABLE) {
      return [flattenData];
    }

    const midPoint = Math.ceil(flattenData.length / 2);
    const tableOne = flattenData.slice(0, midPoint);
    const tableTwo = flattenData.slice(midPoint);

    return [tableOne, tableTwo];
  }, [data]);

  return <>{tableChunks.map((chunk, index) => createTable(chunk, index))}</>;
}
