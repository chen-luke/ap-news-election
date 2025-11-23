import type { JSX } from 'react';
import styled from 'styled-components';
import FilterBox from './FilterBox';

const AllElectionsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 210px;
  column-gap: 4px;
  align-items: start;
`;

const AllRaceHeader = styled.h2`
  grid-column: span 2;
  margin-bottom: 16px;
  margin: 12px 0px;
`;

export default function AllElections(): JSX.Element {
  return (
    <AllElectionsContainer>
      <AllRaceHeader>All 2025 elections</AllRaceHeader>
      <div>List of Races</div>
      <FilterBox />
    </AllElectionsContainer>
  );
}
