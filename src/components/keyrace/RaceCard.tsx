import type { KeyRacesType } from '../../voting-data';
import styled from 'styled-components';

const RaceCardContainer = styled.div`
  width: 243px;
  display: grid;
  background-color: white;
  padding: 10px 12px 10px;
  gap: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  cursor: pointer;
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
  width: 16px;
`;

const RaceChoice = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.isBold ? '600' : '300')};
  justify-content: space-between;
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
