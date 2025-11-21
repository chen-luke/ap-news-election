import type { KeyRacesType } from '../../voting-data';
import styled from 'styled-components';

const RaceCardContainer = styled.div`
  width: 243px;
  display: grid;
  background-color: white;
  padding: 10px 12px;
  gap: 3px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 6px;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  // Hover effect to move the card
  &:hover {
    transform: translateY(-5px);
  }
`;

const RaceCardTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const RaceCardSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const RaceCardVoteEstimate = styled.span`
  font-weight: 300;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const APIcon = styled.img`
  width: 12px;
`;

const RaceChoice = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.isBold ? '600' : '300')};
  justify-content: space-between;
`;

const HrStyle = styled.hr`
  width: 100%;
  margin: 3px 0;
  color: #fff;
`;

const VoteProgressMeter = styled.meter<{ color: string }>`
  width: 100%;
  height: 2px;
  border-radius: 3px;
  overflow: hidden;
  background: #e5e7eb;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* --- 1. FIREFOX STYLING --- */
  &::-moz-meter-bar {
    /* Sets the background color of the filled value bar */
    background: ${(props) => props.color};
    border-radius: 3px;
  }

  /* --- 2. WEBKIT STYLING (Chrome, Safari, Edge) --- */
  /* Target the filled value at all potential states (optimum, sub-optimum, etc.) */
  &::-webkit-meter-optimum-value,
  &::-webkit-meter-suboptimum-value,
  &::-webkit-meter-even-less-good-value {
    background: ${(props) => props.color};
  }
`;

const LeadingIndicator = styled.svg`
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  padding-right: 5px;
`;

const LastUpdated = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 0.2rem;
  font-size: 0.75rem;
  font-weight: 300;
  color: #696969;
`;

const RaceCard = (props: { keyrace: KeyRacesType }) => {
  const { keyrace } = props;
  return (
    <RaceCardContainer>
      <RaceCardTitle>{keyrace.name}</RaceCardTitle>
      <RaceCardSummary>
        <RaceCardVoteEstimate>
          <APIcon src='./ap_icon_sm.png' alt='' />
          estimates {keyrace.voteEstimated} of votes counted
        </RaceCardVoteEstimate>
        <HrStyle />

        {keyrace.choices.map((choice) => (
          <div
            key={choice.name}
            style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}
          >
            <RaceChoice isBold={choice.isLeading}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {choice.isLeading && (
                  <LeadingIndicator viewBox='0 0 32 32'>
                    <path fill={choice.partyColor} d='M0 0H32V32H0V0Z'></path>
                    <path
                      fill='white'
                      d='M21.8041 12.0659L15.4647 21.4727C15.419 21.5766 15.3448 21.6656 15.2504 21.7296L14.9909 21.8972C14.9266 21.9394 14.8532 21.9662 14.7766 21.9754C14.6547 22.0082 14.5262 22.0082 14.4044 21.9754C14.14 21.9829 13.8798 21.9087 13.6599 21.7632C13.6043 21.6986 13.5397 21.6421 13.4681 21.5956L10.3774 18.7467C10.1356 18.5042 10 18.1771 10 17.8362C10 17.4954 10.1356 17.1682 10.3774 16.9257C10.6299 16.6834 10.9677 16.5479 11.3193 16.5479C11.6708 16.5479 12.0086 16.6834 12.2611 16.9257L14.0998 18.6685L19.5481 10.6024C19.7419 10.3085 20.0451 10.1025 20.3917 10.0293C20.7382 9.95603 21.1 10.0215 21.398 10.2113C21.6891 10.413 21.8927 10.716 21.968 11.0598C22.0433 11.4036 21.9847 11.7629 21.8041 12.0659Z'
                    ></path>
                  </LeadingIndicator>
                )}
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  {choice.name}
                  <div
                    style={{
                      fontWeight: '300',
                      fontSize: '0.6rem',
                      paddingLeft: '0.4rem',
                    }}
                  >
                    {choice.party ? `${choice.party}` : ''}{' '}
                  </div>
                </div>
              </div>
              <div>{choice.votePercentage}</div>
            </RaceChoice>
            <VoteProgressMeter
              min={0}
              max={100}
              value={parseInt(choice.votePercentage)}
              color={choice.partyColor}
            />
          </div>
        ))}
        <LastUpdated>Updated {keyrace.lastUpdated}</LastUpdated>
      </RaceCardSummary>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '0.3rem',
        }}
      >
        <button
          style={{
            backgroundColor: 'transparent',
            backgroundImage: 'url(./download.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '24px',
            width: '24px',
            border: 'none',
            outline: 'none',
          }}
        ></button>
      </div>
    </RaceCardContainer>
  );
};

export default RaceCard;
export { LeadingIndicator };
