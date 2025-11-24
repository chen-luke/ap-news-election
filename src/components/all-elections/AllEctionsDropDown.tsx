import styled from 'styled-components';

import type {
  ElectionDayFormatted,
  RaceDetail,
  StateElectionGroups,
} from '../../voting-data';
import { usElectionSchedule2025 } from '../../voting-data';
import { v4 as uuidv4 } from 'uuid';
import RaceTypeIcons from './RaceTypeIcons';
import { useState } from 'react';

const DropdownContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
const Dropdown = styled.div``;

const ExpandButton = styled.button`
  font-size: 25px;
  font-weight: 700;
  line-height: 0.9;
  background-color: transparent;
  border-radius: 6px;
  transition: background-color 0.15s;
  cursor: pointer;
  height: 28px;
  width: 28px;
  display: flex;
  place-content: center;
  color: black;
  border: 0;
  margin: 0;
  padding: 0;

  &:hover {
    background-color: #c5c5c5ff;
  }
`;

export default function AllElectionsDropDown() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => setIsExpanded(!isExpanded);

  return (
    <DropdownContainer>
      <Dropdown>
        {usElectionSchedule2025.map((day: ElectionDayFormatted) => (
          <div key={uuidv4()}>
            {day.date}
            {day.races.map((race: StateElectionGroups) => (
              <div key={uuidv4()}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    justifyContent: 'space-between',
                  }}
                >
                  <h3
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      margin: '2px 0px 4px',
                    }}
                  >
                    {race.state}
                    <RaceTypeIcons race={race} />
                  </h3>
                  {isExpanded ? (
                    <ExpandButton onClick={toggleDropdown}>-</ExpandButton>
                  ) : (
                    <ExpandButton onClick={toggleDropdown}>+</ExpandButton>
                  )}
                </div>
                <hr />
                <div>
                  {Object.entries(race).map(([key, value]) => {
                    if (key === 'state' || !value) return null;

                    const raceDetails = value as RaceDetail[];

                    return (
                      <div key={uuidv4()}>
                        {isExpanded &&
                          raceDetails.map((detail: RaceDetail) => {
                            return (
                              <div key={uuidv4()}>
                                <a
                                  href=''
                                  style={{ textDecoration: 'underline' }}
                                >
                                  <b>{detail.district}</b>
                                </a>{' '}
                                {detail.description}
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </Dropdown>
    </DropdownContainer>
  );
}
