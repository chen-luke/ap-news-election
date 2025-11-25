import styled from 'styled-components';

import type {
  ElectionDayFormatted,
  StateElectionGroups,
} from '../../voting-data';
import { v4 as uuidv4 } from 'uuid';
import RaceDropdown from './RaceDropdown';
import type { JSX } from 'react';

const DropdownContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
const Dropdown = styled.div``;

export default function AllElectionsDropDown({
  filteredElections,
  activeFilter,
}: {
  filteredElections: ElectionDayFormatted[];
  activeFilter: string | null;
}): JSX.Element {
  return (
    <DropdownContainer>
      <Dropdown>
        {filteredElections.map((day: ElectionDayFormatted) => (
          <div key={uuidv4()} style={{ marginTop: '10px' }}>
            <span style={{ fontWeight: '300' }}>{day.date}</span>
            <hr style={{ marginBottom: '5px', marginTop: '5px' }} />
            {day.races.map(
              (
                race: StateElectionGroups,
                index: number,
                array: StateElectionGroups[]
              ) => (
                <RaceDropdown
                  key={uuidv4()}
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
