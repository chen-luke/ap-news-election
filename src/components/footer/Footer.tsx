import styled from 'styled-components';
import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';
import { CiShare1 } from 'react-icons/ci';
import { type IconType } from 'react-icons';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #000;
`;

const FooterWrapper = styled.div`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 40px 30px;
  gap: 50px;
`;

const FooterLinkGroup = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  margin-right: 270px;
  gap: 140px;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-right: 0;
  }
`;

const FooterCopyright = styled.div`
  font-size: 14px;
  diplay: flex;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #858585ff;
  padding-top: 20px;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
`;

const FooterLinkGroupColumnBio = styled.div`
  display: grid;
  gap: 10px;
`;

const FooterImage = styled.img`
  width: 240px;
  height: 129px;
  aspect-ratio: auto 240 / 129;
`;

const FooterCopyrightText = styled.div`
  color: #fff;
`;

const FooterNavLinkContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
`;

const FooterNavLinkColumn = styled.ul`
  display: grid;
  row-gap: 20px;
  padding: 0;
  align-content: start;
  margin: 0;
  span {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    text-transform: uppercase;
  }
  li {
    display: flex;
    align-items: baseline;
  }
`;

const FooterNavLink = styled.a`
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  font-weight: 400;

  /* 1. Revert to inline to support text wrapping */
  display: inline;

  svg {
    height: 14px;
    width: 14px;
    margin-left: 0.4em;
    stroke-width: 1;
    flex-shrink: 0;

    /* 2. Keep the icon inline so it flows with the text */
    display: inline-block;

    /* 3. The Magic Fix: specific pixel adjustment */
    /* "middle" aligns to the baseline + x-height, which looks high. */
    /* A negative pixel value pushes it down manually. */
    vertical-align: -2px;
  }
`;

type FooterLink = {
  name: string;
  url?: string;
  IconBase?: IconType;
};

const footerLinks: FooterLink[] = [
  { name: 'FROM AP NEWS' },
  { name: 'ABOUT' },
  { name: 'CONTACT US' },
  { name: 'ACCESSIBILITY STATEMENT' },
  { name: 'TERMS OF USE' },
  { name: 'PRIVACY POLICY' },
  { name: 'YOUR PRIVACY CHOICES' },
  { name: 'DO NOT SELL OR SHARE MY PERSONAL INFORMATION', IconBase: CiShare1 },
  {
    name: 'LIMIT USE AND DISCLOSURE OF SENSITIVE PERSONAL INFORMATION',
    IconBase: CiShare1,
  },
  { name: 'CA NOTICE OF COLLECTION', IconBase: CiShare1 },
];

const footerLinksTwo: FooterLink[] = [
  { name: 'The Associated Press ap.org' },
  { name: 'AP.ORG', IconBase: CiShare1 },
  { name: 'careers', IconBase: CiShare1 },
  { name: 'advertise with us', IconBase: CiShare1 },
  { name: 'ap news values and priorities', IconBase: CiShare1 },
  { name: "ap's role in elections", IconBase: CiShare1 },
  { name: 'ap leads', IconBase: CiShare1 },
  { name: 'ap definitive source blog', IconBase: CiShare1 },
  { name: 'ap images spotlight blog', IconBase: CiShare1 },
  { name: 'ap stylebook', IconBase: CiShare1 },
];

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinkGroup>
          <FooterLinkGroupColumnBio>
            <a href=''>
              <FooterImage src='./footer_logo.webp' alt='' />
            </a>
            <FooterCopyrightText>
              The Associated Press is an independent global news organization
              dedicated to factual reporting. Founded in 1846, AP today remains
              the most trusted source of fast, accurate, unbiased news in all
              formats and the essential provider of the technology and services
              vital to the news business. More than half the world’s population
              sees AP journalism every day.
            </FooterCopyrightText>
          </FooterLinkGroupColumnBio>
          <FooterNavLinkContainer>
            <FooterNavLinkColumn>
              {footerLinks.map((link, index) =>
                index === 0 ? (
                  <span>{link.name}</span>
                ) : (
                  <li key={link.name}>
                    <FooterNavLink href=''>
                      {link.name}
                      {link.IconBase && <link.IconBase />}
                    </FooterNavLink>
                  </li>
                )
              )}
            </FooterNavLinkColumn>
            <FooterNavLinkColumn>
              {footerLinksTwo.map((link, index) =>
                index === 0 ? (
                  <span>{link.name}</span>
                ) : (
                  <li key={link.name}>
                    <FooterNavLink href=''>
                      {link.name}
                      {link.IconBase && <link.IconBase />}
                    </FooterNavLink>
                  </li>
                )
              )}
            </FooterNavLinkColumn>
          </FooterNavLinkContainer>
        </FooterLinkGroup>

        <FooterCopyright>
          <div>Copyright 2025 The Associated Press. All Rights Reserved.</div>
          <StyledUl>
            <li>
              <a href=''>
                <FaXTwitter color='#fff' size={20} />
              </a>
            </li>
            <li>
              <a href=''>
                <FaInstagram color='#fff' size={20} />
              </a>
            </li>
            <li>
              <a href=''>
                <FaFacebook color='#fff' size={20} />
              </a>
            </li>
          </StyledUl>
        </FooterCopyright>
      </FooterWrapper>
    </FooterContainer>
  );
}
