import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #000;
`;
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 106px 1fr 106px;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  height: 55px;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-weight: 500;
  color: white;
  font-size: 0.85rem;
`;

const Logo = styled.img`
  width: 48px;
`;

const DonateButton = styled.a`
  line-height: 0.625rem;
  font-style: normal;
  font-size: 0.875rem;
  font-weight: 550;
  background-color: #eb483b;
  text-transform: uppercase;
  color: #fff;
  border-radius: 4px;
  margin-right: 20px;
  padding: 8px 12px;
  cursor: pointer;
  text-decoration: none;
`;

const Nav = () => {
  return (
    <nav>
      <StyledWrapper>
        <StyledContainer>
          <a href=''>
            <Logo src='public\ap-logo-176-by-208.svg' alt='' />
          </a>
          <StyledUl>
            <li>WORLD</li>
            <li>U.S.</li>
            <li>POLITICS</li>
            <li>ENTERTAINMENT</li>
            <li>SCIENCE</li>
            <li>BUSINESS</li>
            <li>FACT CHECK</li>
            <li>NEWSLETTERS</li>
          </StyledUl>
          <DonateButton>Donate</DonateButton>
        </StyledContainer>
      </StyledWrapper>
    </nav>
  );
};

export default Nav;
