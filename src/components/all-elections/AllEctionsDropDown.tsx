import styled from 'styled-components';
import {
  USHosueIcon,
  GovernorIcon,
  MayorIcon,
  BallotIcon,
} from './ElectionIcons';
import type { ElectionEvent } from '../../voting-data';
import { usElectionSchedule2025 } from '../../voting-data';

const DropdownContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
const Dropdown = styled.div``;

const getElectionIcon = (type: string | undefined) => {
  //   type?: 'US House' | 'Governor' | 'mayor' | 'ballot measure';
  if (type === 'US House') return <USHosueIcon />;
  if (type === 'Governor') return <GovernorIcon />;
  if (type === 'mayor') return <MayorIcon />;
  if (type === 'ballot measure') return <BallotIcon />;
  return '';
};

const convertDate = (date: string) => {
  const dateObject: Date = new Date(`${date}T00:00:00`); // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    month: 'long', // full name of the month (e.g., "April")
    day: 'numeric', // the day as a number (e.g., "1")
  };
  return dateObject.toLocaleDateString(undefined, options);
};

export default function AllElectionsDropDown() {
  return (
    <DropdownContainer>
      <Dropdown>
        {usElectionSchedule2025.map((item: ElectionEvent) => (
          <div>
            {convertDate(item.date)}
            <hr />
          </div>
        ))}
      </Dropdown>
    </DropdownContainer>
  );
}
