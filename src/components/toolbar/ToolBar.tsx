import styled from 'styled-components';
import StateDropdown from './StatesDropdown';

const StyledLogo = styled.img`
  width: 100%;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  width: 110px;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
`;

const StyledToolBar = styled.div`
  display: grid;
  height: 3rem;
  background-color: #000;
  padding: 0.5rem 0;
  border-top: 1px solid #696969;
  grid-template-columns: 1fr 3fr 1fr;
`;

const StyledHeaderLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
`;

const StyledLinks = styled.a`
  color: white;
  font-weight: 300;
`;

export default function ToolBar() {
  return (
    <StyledToolBar>
      <StyledLogoContainer>
        <StyledLogo src='./AP_Elections_B2C_2025_logo_small_dbg_RGB.svg'></StyledLogo>
      </StyledLogoContainer>
      <StyledHeaderLinks>
        <StyledLinks>EARLY VOTING</StyledLinks>
        <StyledLinks>LIVE ELECTION UPDATES</StyledLinks>
      </StyledHeaderLinks>
      <StateDropdown />
    </StyledToolBar>
  );
}
