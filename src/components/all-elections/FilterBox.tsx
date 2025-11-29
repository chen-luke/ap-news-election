import styled from 'styled-components';
import getRaceIcon from './AllElection.util';
import React from 'react';

const CategoryContainer = styled.div`
  display: grid;
`;

const categories = [
  { name: 'U.S. HOUSE', icon: 'houseRace' },
  { name: 'GOVERNOR', icon: 'govRace' },
  { name: 'MAYOR', icon: 'mayorRace' },
  { name: 'BALLOT MEASURE', icon: 'ballotRace' },
];

const Category = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 8px 36px 8px 32px;
  background-color: white;
  &:hover,
  &:focus,
  &:active {
    background-color: #f1f1f1ff;
    outline: none;
  }
  transition: background-color 0.15s;
  border: none;
  border-radius: 0;
  margin: 0;
`;

const FilterBoxText = styled.div`
  color: black;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: start;
`;

const FilterContainer = styled.div`
  grid-area: filter;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 6px;
  border-radius: 5px;
  padding: 14px 0px;
  background-color: rgb(255, 255, 255);
  @media (max-width: 1250px) {
    margin-top: 2rem;
  }
`;

interface FilterBoxProps {
  onFilterChange: (key: string | null) => void;
}

function FilterBox({ onFilterChange }: FilterBoxProps) {
  return (
    <FilterContainer>
      <div>
        <div style={{ margin: '0 24px' }}>Filter</div>
      </div>
      <hr />
      <CategoryContainer>
        {categories.map((category, index) => {
          const IconComponent = getRaceIcon(category.icon);
          return (
            <Category key={index} onClick={() => onFilterChange(category.name)}>
              {IconComponent && <IconComponent />}
              {/* Only render if IconComponent is not null */}
              <FilterBoxText>{category.name}</FilterBoxText>
            </Category>
          );
        })}
      </CategoryContainer>
    </FilterContainer>
  );
}

export default React.memo(FilterBox);
