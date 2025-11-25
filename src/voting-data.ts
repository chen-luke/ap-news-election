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

export type RaceDetail = {
  district: string;
  description: string;
};

export type StateElectionGroups = {
  state: string;
  houseRace?: RaceDetail[];
  govRace?: RaceDetail[];
  mayorRace?: RaceDetail[];
  supremeCourtRace?: RaceDetail[];
  ltGovRace?: RaceDetail[];
  attorneyGeneralRace?: RaceDetail[];
  ballotRace?: RaceDetail[];
  questionRace?: RaceDetail[];
};

export type ElectionDayFormatted = {
  date: string;
  races: StateElectionGroups[];
};

const usElectionSchedule2025: ElectionDayFormatted[] = [
  {
    date: 'April 1st',
    races: [
      {
        state: 'Florida',
        houseRace: [
          {
            district: '1st District',
            description:
              'Ten Republicans are competing for the seat vacated by Matt Gaetz. CFO Jimmy Patronis has received Trump’s endorsement and is considered the favorite. The district is the westernmost in Florida and consistently votes Republican.',
          },
          {
            district: '1st District',
            description:
              'Uncontested primary for the panhandle-based seat. Gay Valimont will advance to the special general election.',
          },
          {
            district: '6th District',
            description:
              'Trump has endorsed state Sen. Randy Fine over two other candidates. The district has historically sent Republicans to Congress.',
          },
          {
            district: '6th District',
            description:
              'One of two Democrats will advance to the general election for this coastal Florida district south of Jacksonville.',
          },
        ],
      },
      {
        state: 'Wisconsin',
        supremeCourtRace: [
          {
            district: 'Supreme Court',
            description:
              'Though ostensibly nonpartisan, this race will determine whether the state Supreme Court will remain under 4-3 liberal control or flip to a conservative majority.',
          },
        ],
      },
    ],
  },
  {
    date: 'June 10th',
    races: [
      {
        state: 'New Jersey',
        govRace: [
          {
            district: 'Governor',
            description:
              'Governor Phil Murphy is term-limited. The crowded field includes two U.S. House members, mayors of Newark and Jersey City, a former state Senate president and the teachers union president.',
          },
          {
            district: 'Governor',
            description:
              'Republicans are lining up to lead a state that swung toward Republicans in 2024. Jack Ciattarelli is running again after a close race in 2021.',
          },
        ],
      },
    ],
  },
  {
    date: 'June 24th',
    races: [
      {
        state: 'New York',
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Mayor Eric Adams faces a challenge in the Democratic primary. Almost a dozen candidates are running in the ranked-choice primary, including former Gov. Andrew Cuomo.',
          },
        ],
      },
    ],
  },
  {
    date: 'July 15th',
    races: [
      {
        state: 'Arizona',
        houseRace: [
          {
            district: '7th District',
            description:
              'Longtime Rep. Raúl Grijalva died on March 13. This southern Arizona district is among the most Democratic in the state.',
          },
          {
            district: '7th District',
            description:
              'Arizona’s 7th District includes part of Tucson and is majority Hispanic. Safely Democratic.',
          },
        ],
      },
    ],
  },
  {
    date: 'September 9th',
    races: [
      {
        state: 'Virginia',
        houseRace: [
          {
            district: '11th District',
            description:
              'Special election to fill the seat held by Rep. Gerry Connolly, who died on May 21. The district is centered in Fairfax and leans Democratic.',
          },
        ],
      },
      {
        state: 'Massachusetts',
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Incumbent Mayor Michelle Wu seeks a second term. Nonpartisan primary to whittle the field down to two candidates.',
          },
        ],
      },
    ],
  },
  {
    date: 'September 23rd',
    races: [
      {
        state: 'Arizona',
        houseRace: [
          {
            district: '7th District',
            description:
              'Open since March after Rep. Raúl Grijalva died. Historically sends a Democrat to Congress.',
          },
        ],
      },
    ],
  },
  {
    date: 'October 7th',
    races: [
      {
        state: 'Tennessee',
        houseRace: [
          {
            district: '7th District',
            description:
              'Seat vacant following resignation of Rep. Mark Green. Republican-leaning district.',
          },
          {
            district: '7th District',
            description:
              'Ten candidates seek nomination. Includes Trump-endorsed Matt Van Epps.',
          },
        ],
      },
    ],
  },
  {
    date: 'November 4th',
    races: [
      {
        state: 'New Jersey',
        govRace: [
          {
            district: 'Governor',
            description:
              'Democrat Mikie Sherrill and Republican Jack Ciattarelli face off to succeed term-limited Gov. Phil Murphy.',
          },
        ],
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Seven candidates running in all-party primary. Runoff on Dec 2 if no majority.',
          },
        ],
      },
      {
        state: 'Virginia',
        govRace: [
          {
            district: 'Governor',
            description:
              "Democratic Rep. Abigail Spanberger vs. Republican Lt. Gov. Winsome Earle-Sears. Winner will be state's first female governor.",
          },
        ],
        ltGovRace: [
          {
            district: 'Lt. Governor',
            description:
              'Contest includes Democrat Ghazala Hashmi and Republican John Reid.',
          },
        ],
        attorneyGeneralRace: [
          {
            district: 'Attorney General',
            description:
              'Incumbent Jason Miyares faces challenge from Democrat Jay Jones.',
          },
        ],
      },
      {
        state: 'California',
        ballotRace: [
          {
            district: 'Proposition 50',
            description:
              'Would adopt new congressional maps adding as many as five Democratic-held seats. Response to Texas redrawing maps.',
          },
        ],
      },
      {
        state: 'Colorado',
        ballotRace: [
          {
            district: 'Proposition MM',
            description:
              'Raises state income taxes on households earning $300k+ to fund free meals for public school students.',
          },
        ],
      },
      {
        state: 'Georgia',
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Andre Dickens seeks second term. Four candidates qualified.',
          },
        ],
      },
      {
        state: 'Maine',
        ballotRace: [
          {
            district: 'Question 1',
            description:
              'Changes election administration: requires photo ID, shortens absentee period, prohibits phone requests for ballots.',
          },
          {
            district: 'Question 2',
            description:
              'Red Flag law: allows petition to temporarily prohibit dangerous weapons for those deemed a threat.',
          },
        ],
      },
      {
        state: 'Michigan',
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Office open after Mayor Mike Duggan chose not to seek reelection.',
          },
        ],
      },
      {
        state: 'Minnesota',
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Incumbent Jacob Frey faces crowded field, including Omar Fateh from his left.',
          },
        ],
      },
      {
        state: 'New York',
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Democratic nominee Zohran Mamdani, Republican Curtis Sliwa, and Andrew Cuomo (runner-up) contesting general. Incumbent Eric Adams remains on ballot.',
          },
        ],
      },
      {
        state: 'Ohio',
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Incumbent Aftab Pureval and Cory Bowman (half-brother of VP JD Vance) are running.',
          },
        ],
      },
      {
        state: 'Pennsylvania',
        supremeCourtRace: [
          {
            district: 'Supreme Court',
            description:
              'Three retention races for Democratic justices. Has implications for 5-2 Democratic majority.',
          },
        ],
        mayorRace: [
          {
            district: 'Mayor',
            description:
              'Democrat Corey O’Connor (who ousted incumbent Ed Gainey in primary) vs Republican Tony Moreno.',
          },
        ],
      },
      {
        state: 'Texas',
        houseRace: [
          {
            district: '18th District',
            description:
              'Rep. Sylvester Turner died March 5. Special election coincides with general. Top two runoff if no 50%.',
          },
        ],
        ballotRace: [
          {
            district: 'Proposition 15',
            description:
              'Affirms parents as primary decision makers for children.',
          },
          {
            district: 'Proposition 16',
            description:
              'Adds language explicitly stating people must be US citizens to vote in Texas.',
          },
        ],
      },
    ],
  },
  {
    date: 'December 2nd',
    races: [
      {
        state: 'Tennessee',
        houseRace: [
          {
            district: '7th District',
            description:
              'Winner will serve remainder of former Rep. Mark Green’s term in Middle Tennessee.',
          },
        ],
      },
    ],
  },
];

export { keyRaces, allRaces, usElectionSchedule2025 };
export type { KeyRacesType, ChoiceType, AllRaceType };
