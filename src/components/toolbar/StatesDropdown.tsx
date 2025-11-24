import styled from 'styled-components';

const StyledDropDown = styled.div`
  display: flex;
  justify-content: end;
  padding: 0.5rem 0;
  margin-right: 15px;
`;

const StyledSelect = styled.select`
  background-color: white;
  padding: 0 1rem;
  border-radius: 0.5rem;
  color: #696969;
  text-align: center;
  border-color: white;
  border-right: 1rem solid #ffffffff;
  padding-top: 3px;
`;

export default function StateDropdown() {
  return (
    <StyledDropDown>
      <StyledSelect id='stateSelect' name='selection'>
        <option value='' disabled defaultValue={'Select A State'} hidden>
          Select A State
        </option>
        <option value=''>New York</option>
        <option value=''>Massachusetts</option>
        <option value=''>Texas</option>
        <option value=''>North Carolina</option>
      </StyledSelect>
    </StyledDropDown>
  );
}
