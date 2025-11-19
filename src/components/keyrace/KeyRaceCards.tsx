import styled from 'styled-components';
import RaceCard from './RaceCard';
import { keyRaces } from '../../voting-data';
import type { KeyRacesType } from '../../voting-data';
import type { JSX } from 'react';

const KeyRaceContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function KeyRaceCards(): JSX.Element {
  return (
    <KeyRaceContainer>
      {keyRaces.map((race: KeyRacesType) => (
        <RaceCard key={race.id} keyrace={race} />
      ))}
    </KeyRaceContainer>
  );
}
