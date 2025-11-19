import type { KeyRacesType } from '../../voting-data';
import styled from 'styled-components';

const RaceCardContainer = styled.div`
  width: 243px;
  display: grid;
  background-color: white;
  padding: 10px 12px 10px;
  gap: 3px;
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

const VoteCountsBar = styled.div<{ progress: number; color: string }>`
  width: 100%;
  height: 2px;
  border-radius: 3px;
  background: linear-gradient(
    to right,
    ${(props) => props.color} 0%,
    ${(props) => props.color} ${(props) => props.progress}%,
    #e5e7eb ${(props) => props.progress}%,
    #e5e7eb 100%
  );
  margin: 3px 0;
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
        {keyrace.choices.map((choice) => (
          <RaceChoice key={choice.name} isBold={choice.isLeading}>
            {choice.name} {choice.party ? `${choice.party}` : ''}{' '}
            <div>{choice.votePercentage}</div>
          </RaceChoice>
        ))}
        <div>{keyrace.lastUpdated}</div>
      </RaceCardSummary>
    </RaceCardContainer>
  );
};

export default RaceCard;
