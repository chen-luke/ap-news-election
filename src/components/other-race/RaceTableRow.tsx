import type { RenderReadyRace } from './RaceTable.util';
import { getMarginColor } from './RaceTable.util';
import styled from 'styled-components';
import { LeadingIndicator } from './RaceLegend';

const StyledTD = styled.td`
  vertical-align: top;
  min-width: 35px;
  border-bottom: 1px solid rgba(218, 218, 218, 1);
  padding: 5px 0px;
`;

export default function RaceTableRow({ races }: { races: RenderReadyRace[] }) {
  return races.map((race) => {
    return (
      <tr key={race.id}>
        {race.rowSpan > 0 && (
          <StyledTD rowSpan={race.rowSpan}>{race.pollTime}</StyledTD>
        )}
        <StyledTD style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <LeadingIndicator
            color={race.partyColor}
            width='12px'
            height='12px'
          ></LeadingIndicator>
          <a href={race.raceUrl}>{race.race} »</a>
        </StyledTD>
        <StyledTD>
          {race.leader}{' '}
          <span style={{ color: getMarginColor(race.partyColor) }}>
            {race.margin}
          </span>
        </StyledTD>
        <StyledTD>{race.votesCounted}</StyledTD>
      </tr>
    );
  });
}
