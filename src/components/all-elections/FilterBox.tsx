import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: grid;
`;

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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 6px;
  border-radius: 5px;
  padding: 14px 0px;
  background-color: rgb(255, 255, 255);
`;

export default function FilterBox() {
  return (
    <FilterContainer>
      <div>
        <div style={{ margin: '0 24px' }}>Filter</div>
      </div>
      <hr />
      <CategoryContainer>
        <Category>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='7.95592'
              height='7.95592'
              transform='matrix(0.703168 -0.711024 0.703168 0.711024 0.328293 6)'
              fill='#494949'
            ></rect>
          </svg>
          <FilterBoxText>U.S. Senate</FilterBoxText>
        </Category>
        <Category>
          <svg
            width='15'
            height='14'
            viewBox='0 0 15 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z'
              fill='#494949'
            ></path>
          </svg>
          <FilterBoxText>GOVERNOR</FilterBoxText>
        </Category>
        <Category>
          <svg
            width='8'
            height='8'
            viewBox='0 0 8 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='4' cy='4' r='4' fill='#494949'></circle>
          </svg>
          <FilterBoxText>MAYOR</FilterBoxText>
        </Category>
        <Category>
          <svg
            width='8'
            height='8'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='10' height='10' fill='#494949'></rect>
          </svg>
          <FilterBoxText>BALLOT MEASURE</FilterBoxText>
        </Category>
      </CategoryContainer>
    </FilterContainer>
  );
}
