import type { AllRaceType } from '../../voting-data';
import { useMemo } from 'react';
import styled from 'styled-components';
import { parseTimeWeight, calcRowSpan } from './RaceTable.util';
import type { RenderReadyRace } from './RaceTable.util';
import RaceTableRow from './RaceTableRow';

const MAX_ROWS_PER_TABLE = 11;

const StyledTH = styled.th`
  text-align: left;
  color: rgb(73, 73, 73);
  border-bottom: 1px solid black;
  padding-left: 0px;
  line-height: 1rem;
  font-size: 0.75rem;
  font-weight: 525;
  text-transform: uppercase;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 48%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 12px;
  font-stretch: 50%;

  svg {
    flex-shrink: 0;
  }

  /* --- 1. Base Column Styling (Desktop) --- */

  /* Target the <col> elements for Widths */

  col:nth-child(1) {
    width: 60px;
  } /* Poll Close */

  col:nth-child(2) {
    width: auto;
  } /* Race (Flexible) */

  col:nth-child(3) {
    width: 100px;
  } /* Leader */

  col:nth-child(4) {
    width: 70px;
  } /* Est. Votes */

  /* Prevent wrapping on the 2nd to last column (Leader) */
  tbody tr td:nth-last-of-type(2) {
    white-space: nowrap;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 10px; /* Smaller font for mobile */

    /* Shrink fixed columns to give "Race" more room */
    col:nth-child(1) {
      width: 50px;
    } /* Poll Close */
    col:nth-child(3) {
      width: 80px;
    } /* Leader */
    col:nth-child(4) {
      width: 60px;
    } /* Est Votes */

    /* Optional: tightening padding could help here too */
    td,
    th {
      padding-right: 2px;
    }
    th {
      font-size: 0.68rem;
    }
  }
`;

export default function RaceTable({ data }: { data: AllRaceType[] }) {
  // UseMemo to memoize the table chunks calculation so we don't recalculate on every render
  const tableChunks = useMemo(() => {
    // --- STEP 1: BUCKET SORT ---
    const buckets: Record<string, AllRaceType[]> = {};

    // Put each race into a bucket based on its poll time
    data.forEach((race) => {
      if (!buckets[race.pollTime]) buckets[race.pollTime] = [];
      buckets[race.pollTime].push(race);
    });

    // Sort the poll times in ascending order based on time weight.
    const sortedTimes = Object.keys(buckets).sort((a, b) => {
      return parseTimeWeight(a) - parseTimeWeight(b);
    });

    // Use the sorted poll time to sort the races within each bucket.
    const sortedList: AllRaceType[] = [];
    sortedTimes.forEach((time) => {
      sortedList.push(...buckets[time]);
    });

    // --- STEP 2: SPLIT ---
    // Split races into two tables if the total number of races exceeds 11
    // Other wise return one table of 11 races.
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

    // --- STEP 3: Calculate RowSpan ---
    const leftTable = calcRowSpan(leftRaw);
    const rightTable = calcRowSpan(rightRaw);

    return rightTable.length > 0 ? [leftTable, rightTable] : [leftTable];
  }, [data]);

  const renderTable = (races: RenderReadyRace[], tableIndex: number) => (
    <StyledTable key={tableIndex}>
      <colgroup>
        <col /> {/* Poll Close (width set in StyledTable) */}
        <col /> {/* Race (width set in StyledTable) */}
        <col /> {/* Leader (width set in StyledTable) */}
        <col /> {/* Est Votes (width set in StyledTable) */}
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
        <RaceTableRow races={races} />
      </tbody>
    </StyledTable>
  );

  return <>{tableChunks.map((chunk, i) => renderTable(chunk, i))}</>;
}
