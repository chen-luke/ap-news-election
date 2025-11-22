interface ChoiceType {
  name: string;
  isLeading: boolean;
  votePercentage: string;
  party?: string;
  partyColor: string;
}

interface KeyRacesType {
  id: number;
  name: string;
  voteEstimated: string;
  choices: ChoiceType[];
  lastUpdated: string;
}

const keyRaces: KeyRacesType[] = [
  {
    id: 1,
    name: 'VIRGINIA GOVERNOR',
    voteEstimated: '99%',
    choices: [
      {
        name: 'Abigail Spanberger',
        isLeading: true,
        votePercentage: '57.5%',
        party: 'DEM',
        partyColor: '#3b82f6',
      },
      {
        name: 'Winsome Earle-Sears',
        isLeading: false,
        votePercentage: '42.3%',
        party: 'GOP',
        partyColor: '#ff5733',
      },
    ],
    lastUpdated: 'Nov 10, 2025, 2:33PM',
  },
  {
    id: 2,
    name: 'NEW JERSEY GOVERNOR',
    voteEstimated: '98%',
    choices: [
      {
        name: 'Mikie Sherrill',
        isLeading: true,
        votePercentage: '56.6%',
        party: 'DEM',
        partyColor: '#3b82f6',
      },
      {
        name: 'Jack Ciattarelli',
        isLeading: false,
        votePercentage: '42.8%',
        party: 'GOP',
        partyColor: '#ff5733',
      },
    ],
    lastUpdated: 'Nov 10, 2025, 2:30PM',
  },
  {
    id: 3,
    name: 'NEW YORK MAYOR',
    voteEstimated: '97%',
    choices: [
      {
        name: 'Zohran Mamdani',
        isLeading: true,
        votePercentage: '50.4%',
        party: 'DEM',
        partyColor: '#3b82f6',
      },
      {
        name: 'Andrew Cuomo',
        isLeading: false,
        votePercentage: '41.6%',
        party: 'OTH',
        partyColor: '#ffd900ff',
      },
    ],
    lastUpdated: 'Nov 10, 2025, 2:25PM',
  },
  {
    id: 4,
    name: 'CALIFORNIA PROPOSITION 50',
    voteEstimated: '96%',
    choices: [
      {
        name: 'Yes',
        isLeading: true,
        votePercentage: '64.3%',
        partyColor: '#4caf50',
      },
      {
        name: 'No',
        isLeading: false,
        votePercentage: '35.7%',
        partyColor: '#f5ad28ff',
      },
    ],
    lastUpdated: 'Nov 10, 2025, 2:20PM',
  },
];

interface AllRaceType {
  id: number;
  race: string;
  leader: string;
  votesCounted: string;
  pollTime: string;
  partyColor: string;
  margin: string;
  raceUrl: '#';
}

const allRaces: AllRaceType[] = [
  {
    id: 1,
    race: 'VA Governor',
    leader: 'Spanberger',
    votesCounted: '99%',
    pollTime: '7 p.m.',
    partyColor: '#0375C9',
    margin: '+15%',
    raceUrl: '#',
  },
  {
    id: 2,
    race: 'VA Lieutenant Governor',
    leader: 'Hashmi',
    votesCounted: '99%',
    pollTime: '7 p.m.',
    partyColor: '#0375C9',
    margin: '+11%',
    raceUrl: '#',
  },
  {
    id: 3,
    race: 'VA Attorney General',
    leader: 'Jones',
    votesCounted: '99%',
    pollTime: '7 p.m.',
    partyColor: '#0375C9',
    margin: '+6%',
    raceUrl: '#',
  },
  {
    id: 4,
    race: 'Cincinnati Mayor',
    leader: 'Pureval',
    votesCounted: '100%',
    pollTime: '7:30 p.m.',
    partyColor: '#F3BB2D',
    margin: '+57%',
    raceUrl: '#',
  },
  {
    id: 5,
    race: 'Atlanta Mayor',
    leader: 'Dickens',
    votesCounted: '100%',
    pollTime: '8 p.m.',
    partyColor: '#F3BB2D',
    margin: '+79%',
    raceUrl: '#',
  },
  {
    id: 6,
    race: 'ME Question 1',
    leader: 'No',
    votesCounted: '100%',
    pollTime: '8 p.m.',
    partyColor: '#E06016',
    margin: '+28%',
    raceUrl: '#',
  },
  {
    id: 7,
    race: 'ME Question 2',
    leader: 'Yes',
    votesCounted: '100%',
    pollTime: '8 p.m.',
    partyColor: '#16A5A3',
    margin: '+26%',
    raceUrl: '#',
  },
  {
    id: 8,
    race: 'Detroit Mayor',
    leader: 'Sheffield',
    votesCounted: '100%',
    pollTime: '8 p.m.',
    partyColor: '#F3BB2D',
    margin: '+55%',
    raceUrl: '#',
  },
  {
    id: 9,
    race: 'NJ Governor',
    leader: 'Sherrill',
    votesCounted: '99%',
    pollTime: '8 p.m.',
    partyColor: '#0375C9',
    margin: '+14%',
    raceUrl: '#',
  },
  {
    id: 10,
    race: 'Jersey City Mayor',
    leader: 'Solomon',
    votesCounted: '99%',
    pollTime: '8 p.m.',
    partyColor: '#9D42BE',
    margin: '+4%',
    raceUrl: '#',
  },
  {
    id: 11,
    race: 'Pittsburgh Mayor',
    leader: "O'Connor",
    votesCounted: '98%',
    pollTime: '8 p.m.',
    partyColor: '#0375C9',
    margin: '+75%',
    raceUrl: '#',
  },
  {
    id: 12,
    race: 'PA Supreme Court - Retain Kevin Dougherty',
    leader: 'Yes',
    votesCounted: '99%',
    pollTime: '8 p.m.',
    partyColor: '#16A5A3',
    margin: '+23%',
    raceUrl: '#',
  },
  {
    id: 13,
    race: 'PA Supreme Court - Retain Christine Donohue',
    leader: 'Yes',
    votesCounted: '99%',
    pollTime: '8 p.m.',
    partyColor: '#16A5A3',
    margin: '+23%',
    raceUrl: '#',
  },
  {
    id: 14,
    race: 'PA Supreme Court - Retain David Wecht',
    leader: 'Yes',
    votesCounted: '99%',
    pollTime: '8 p.m.',
    partyColor: '#16A5A3',
    margin: '+23%',
    raceUrl: '#',
  },
  {
    id: 15,
    race: 'TX U.S. House District 18 Unexpired Term',
    leader: 'Menefee',
    votesCounted: '99%',
    pollTime: '8 p.m.',
    partyColor: '#9D42BE',
    margin: '+3%',
    raceUrl: '#',
  },
  {
    id: 16,
    race: 'CO Proposition MM',
    leader: 'Yes',
    votesCounted: '99%',
    pollTime: '9 p.m.',
    partyColor: '#16A5A3',
    margin: '+19%',
    raceUrl: '#',
  },
  {
    id: 17,
    race: 'Minneapolis Mayor',
    leader: 'Frey',
    votesCounted: '100%',
    pollTime: '9 p.m.',
    partyColor: '#0375C9',
    margin: '+10%',
    raceUrl: '#',
  },
  {
    id: 18,
    race: 'New York City Mayor',
    leader: 'Mamdani',
    votesCounted: '93%',
    pollTime: '9 p.m.',
    partyColor: '#0375C9',
    margin: '+9%',
    raceUrl: '#',
  },
  {
    id: 19,
    race: 'Buffalo Mayor',
    leader: 'Ryan',
    votesCounted: '98%',
    pollTime: '9 p.m.',
    partyColor: '#0375C9',
    margin: '+49%',
    raceUrl: '#',
  },
  {
    id: 20,
    race: 'TX Proposition 15',
    leader: 'For',
    votesCounted: '99%',
    pollTime: '9 p.m.',
    partyColor: '#16A5A3',
    margin: '+40%',
    raceUrl: '#',
  },
  {
    id: 21,
    race: 'TX Proposition 16',
    leader: 'For',
    votesCounted: '99%',
    pollTime: '9 p.m.',
    partyColor: '#16A5A3',
    margin: '+44%',
    raceUrl: '#',
  },
  {
    id: 22,
    race: 'CA Proposition 50',
    leader: 'Yes',
    votesCounted: '99%',
    pollTime: '11 p.m.',
    partyColor: '#16A5A3',
    margin: '+29%',
    raceUrl: '#',
  },
];

export { keyRaces, allRaces };
export type { KeyRacesType, ChoiceType, AllRaceType };
