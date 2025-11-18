import styled from 'styled-components';
import RaceCard from './RaceCard';
import { keyRaces } from '../../voting-data';
import type { KeyRacesType } from '../../voting-data';

const KeyRaceContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const KeyRaceCards = () => {
  return (
    <KeyRaceContainer>
      {keyRaces.map((keyrace: KeyRacesType) => (
        <RaceCard key={keyrace.id} keyrace={keyrace} />
      ))}
    </KeyRaceContainer>
  );
};

export default KeyRaceCards;
