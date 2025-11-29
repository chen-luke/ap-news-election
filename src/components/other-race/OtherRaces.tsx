import styled from 'styled-components';
import RaceLegend from './RaceLegend';
import RaceTable from './RaceTable';
import { allRaces } from '../../voting-data';

const StyledWrapper = styled.div``;

const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.875rem;
  padding: 0px 10px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export default function OtherRaces() {
  return (
    <StyledWrapper>
      <h2>More Nov.4 races</h2>
      <RaceLegend />
      <TableContainer>
        <RaceTable data={allRaces} />
        <div style={{ fontSize: '12px', fontWeight: '300' }}>
          Updated Nov 21, 2025, 10:30 AM ET
        </div>
      </TableContainer>
    </StyledWrapper>
  );
}
