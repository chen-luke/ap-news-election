import type { JSX } from 'react';
import type { StateElectionGroups } from '../../voting-data';
import { v4 as uuidv4 } from 'uuid';
import getRaceIcon from './AllElection.util';

interface RaceTypeIconsProps {
  race: StateElectionGroups;
}

export default function RaceTypeIcons({
  race,
}: RaceTypeIconsProps): JSX.Element {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      {Object.entries(race).map(([key, value]) => {
        if (key === 'state' || !value) return null;

        const IconComponent = getRaceIcon(key);

        if (!IconComponent || !Array.isArray(value)) return null;
        return (
          Array.isArray(value) &&
          value.map(() => <IconComponent key={uuidv4()} />)
        );
      })}
    </div>
  );
}
