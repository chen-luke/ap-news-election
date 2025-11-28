import styled from 'styled-components';

const CreditsContainer = styled.div`
  font-size: 0.875rem;
  line-height: 1.2rem;
  max-width: 930px;
  box-sizing: border-box;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;
  font-weight: 300;
`;

export default function ElectionDataCredits() {
  return (
    <CreditsContainer>
      <p>
        Election results and race calls from The Associated Press. Design and
        development by Ryan Best, Michelle Minkoff Carlson, Chaithra Chandraiah,
        Shelly Cheng, Eunice Esomonu, Linda Gorman, Phil Holm, Dan Kempton,
        Parker Kaufmann, Humera Lodhi, Stephanie Fischer, Lucille Tang, Pablo
        Barria Urenda and Robert Weston. Research and reporting by Chad Day,
        Hannah Fingerhut, Linley Sanders, Maya Sweedler and Robert Yoon. Editing
        by Darrell Allen, Linda Gorman, Amelia Thomson DeVeaux and Emily
        Swanson.
      </p>
    </CreditsContainer>
  );
}
