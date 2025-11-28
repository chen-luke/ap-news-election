import { useMemo, useState, useCallback, type JSX } from 'react';
import styled from 'styled-components';
import FilterBox from './FilterBox';
import AllElectionsDropDown from './AllEctionsDropDown';
import { usElectionSchedule2025 } from '../../voting-data';

const AllElectionsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 210px;
  column-gap: 36px;
  align-items: start;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
  }
`;

const AllRaceHeader = styled.h2`
  grid-column: span 2;
  margin: 12px 0px;
  @media (max-width: 1250px) {
    grid-column: span 1;
  }
`;

export default function AllElections(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  // filter data
  const handleFilterChange = useCallback((key: string | null) => {
    setActiveFilter((prekey) => (prekey === key ? null : key));
  }, []);

  const filteredElections = useMemo(() => {
    if (!activeFilter) return usElectionSchedule2025;
    return usElectionSchedule2025.filter((day) =>
      day.races.some((race) => {
        if (activeFilter === 'U.S. HOUSE')
          return Array.isArray(race.houseRace) && race.houseRace.length > 0;
        if (activeFilter === 'GOVERNOR')
          return Array.isArray(race.govRace) && race.govRace.length > 0;
        if (activeFilter === 'MAYOR')
          return Array.isArray(race.mayorRace) && race.mayorRace.length > 0;
        if (activeFilter === 'BALLOT MEASURE')
          return Array.isArray(race.ballotRace) && race.ballotRace.length > 0;
        return false;
      })
    );
  }, [activeFilter]);
  return (
    <AllElectionsContainer>
      <AllRaceHeader>All 2025 elections</AllRaceHeader>
      <AllElectionsDropDown
        filteredElections={filteredElections}
        activeFilter={activeFilter}
      />
      <FilterBox onFilterChange={handleFilterChange} />
    </AllElectionsContainer>
  );
}
