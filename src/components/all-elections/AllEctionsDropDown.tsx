import styled from 'styled-components';

import type {
  ElectionDayFormatted,
  StateElectionGroups,
} from '../../voting-data';
import RaceDropdown from './RaceDropdown';
import type { JSX } from 'react';
import React from 'react';

const DropdownContainer = styled.div`
  grid-area: dropdown;
  display: grid;
  gap: 1rem;
`;
const Dropdown = styled.div``;

function AllElectionsDropDown({
  filteredElections,
  activeFilter,
}: {
  filteredElections: ElectionDayFormatted[];
  activeFilter: string | null;
}): JSX.Element {
  return (
    <DropdownContainer>
      <Dropdown>
        {filteredElections.map((day: ElectionDayFormatted, index) => (
          <div key={index} style={{ marginTop: '10px' }}>
            <span style={{ fontWeight: '300' }}>{day.date}</span>
            <hr style={{ marginBottom: '5px', marginTop: '5px' }} />
            {day.races.map(
              (
                race: StateElectionGroups,
                index: number,
                array: StateElectionGroups[]
              ) => (
                <RaceDropdown
                  key={index}
                  race={race}
                  index={index}
                  length={array.length}
                  activeFilter={activeFilter}
                />
              )
            )}
          </div>
        ))}
      </Dropdown>
    </DropdownContainer>
  );
}

export default React.memo(AllElectionsDropDown);
