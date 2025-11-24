import type { JSX } from 'react';
import type { StateElectionGroups } from '../../voting-data';
import { v4 as uuidv4 } from 'uuid';

const HouseElectionIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      {...props}
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='7.95592'
        height='7.95592'
        transform='matrix(0.703168 -0.711024 0.703168 0.711024 0.328293 6)'
        fill='#494949'
      ></rect>
    </svg>
  );
};

const GovernorElectionIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      {...props}
      width='15'
      height='14'
      viewBox='0 0 15 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z'
        fill='#494949'
      ></path>
    </svg>
  );
};

const MayorElectionIcon = (props: JSX.IntrinsicElements['svg']) => (
  <svg
    {...props}
    width='8'
    height='8'
    viewBox='0 0 8 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='4' cy='4' r='4' fill='#494949'></circle>
  </svg>
);

const BallotMeasureIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      {...props}
      width='8'
      height='8'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='10' height='10' fill='#494949'></rect>
    </svg>
  );
};

const getRaceIcon = (raceType: string) => {
  if (raceType === 'houseRace') return HouseElectionIcon;
  if (raceType === 'govRace') return GovernorElectionIcon;
  if (raceType === 'mayorRace') return MayorElectionIcon;
  if (raceType === 'ballotMeasure') return BallotMeasureIcon;
  return null;
};

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
