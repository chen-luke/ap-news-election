import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

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
  height: 40px;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledUl = styled.ul<{ $isOpen: boolean }>`
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

  @media (max-width: 1100px) {
    display: ${(props) => (props.$isOpen ? 'grid' : 'none')};
    align-content: start;
    background-color: #ffff;
    position: absolute;
    color: #000;
    font-weight: 600;
    top: 55px;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    z-index: 18;
    max-width: 360px;
    margin: 0;
    box-shadow: #0000003d 0 3px 8px;
  }
`;

const Logo = styled.img`
  width: 34px;
  @media (max-width: 1100px) {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`;

const HamburgerMenuButton = styled.button`
  width: 1rem;
  display: none;
  @media (max-width: 1100px) {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    padding-left: 20px;
    height: 40px;
    background: transparent;
    border: none;
  }
`;

const DonateButton = styled.a`
  line-height: 8px;
  font-style: normal;
  font-size: 12px;
  font-weight: 550;
  background-color: #eb483b;
  text-transform: uppercase;
  color: #fff;
  border-radius: 4px;
  margin-right: 15px;
  padding: 8px 12px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  max-width: 50px;
`;

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <StyledWrapper>
        <StyledContainer>
          <a href='' style={{ maxHeight: '40px' }}>
            <Logo src='./ap-logo-176-by-208.svg' alt='' />
          </a>
          <HamburgerMenuButton
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls='primary-navigation'
          >
            {isMenuOpen ? (
              <IoMdClose size={24} />
            ) : (
              <GiHamburgerMenu size={20} />
            )}
          </HamburgerMenuButton>

          <StyledUl id='primary-navigation' $isOpen={isMenuOpen}>
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
