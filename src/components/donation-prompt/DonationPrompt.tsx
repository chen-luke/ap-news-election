import styled from 'styled-components';

const DonationButton = styled.button`
  background-color: #ff322e;
  border: none;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

const DonationPromptContainer = styled.div`
  max-width: 930px;
  box-sizing: border-box;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;
`;

const InnerContainer = styled.div`
  border: 2px solid #eee;
  border-radius: 12px;
  text-align: left;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem;
`;

export default function DonationPrompt() {
  return (
    <DonationPromptContainer>
      <InnerContainer>
        <h2>When the nation waits for results, who do you trust?</h2>
        <p>
          For 177 years, AP has been the steady voice America turns to on
          election night. Our reporters, election analysts and graphics
          journalists simply tell you who won — no spin, no bias, just facts.
          We're not owned by billionaires. We don't have an editorial agenda. We
          just count votes and report results, the same way we've done since
          1848.
        </p>
        <p>
          Democracy itself depends on having one trusted source that puts facts
          above everything else.
        </p>
        <DonationButton>
          <a href=''>DONATE</a>
        </DonationButton>
      </InnerContainer>
    </DonationPromptContainer>
  );
}
