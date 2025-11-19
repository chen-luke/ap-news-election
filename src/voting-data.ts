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

export { keyRaces };
export type { KeyRacesType, ChoiceType };
