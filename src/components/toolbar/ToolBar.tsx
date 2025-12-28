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
  @media (max-width: 750px) {
    grid-area: 2/1;
  }
`;

const StyledToolBar = styled.div`
  display: grid;
  height: 3rem;
  background-color: #000;
  padding: 0.5rem 0;
  border-top: 1px solid #696969;
  grid-template-columns: 1fr 3fr 1fr;

  @media (max-width: 750px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto 1fr;
    height: auto;
    gap: 1rem;
  }
`;

const StyledHeaderLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  @media (max-width: 750px) {
    grid-area: 1/ 1 / auto / -1;
  }
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
