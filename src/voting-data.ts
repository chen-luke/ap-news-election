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

export type ElectionType =
  | 'Primary'
  | 'General'
  | 'Special Primary'
  | 'Special General'
  | 'Runoff'
  | 'Retention'
  | 'Ballot Measure';

export type OfficeType =
  | 'US House'
  | 'Governor'
  | 'Lt. Governor'
  | 'Attorney General'
  | 'Mayor'
  | 'Supreme Court'
  | 'Proposition'
  | 'Question';

export type PartyAffiliation =
  | 'Republican'
  | 'Democrat'
  | 'Independent'
  | 'Nonpartisan'
  | 'Mixed';

export interface Candidate {
  name: string;
  party?: PartyAffiliation;
  isIncumbent?: boolean;
  notes?: string; // Context like "Trump endorsed", "indicted", etc.
}

export interface Race {
  id: string;
  title: string; // e.g., "1st District Republican Primary"
  office: OfficeType;
  type: ElectionType;
  district?: string; // e.g., "1st District", "Proposition 50"
  description: string; // The narrative text provided
  candidates?: Candidate[]; // Extracted specific candidates mentioned
  isOpenSeat: boolean; // If the text mentions "vacated", "open", or "term-limited"
}

export interface StateElectionData {
  stateName: string;
  races: Race[];
}

export interface ElectionEvent {
  date: string; // ISO Format preferred (2025-MM-DD), or readable string
  locations: StateElectionData[];
}

// The main collection type
type ElectionSchedule = ElectionEvent[];

const usElectionSchedule2025: ElectionSchedule = [
  {
    date: '2025-04-01',
    locations: [
      {
        stateName: 'Florida',
        races: [
          {
            id: 'fl-house-1-rep-prim',
            title: '1st District Republican Primary',
            office: 'US House',
            type: 'Special Primary',
            district: '1st District',
            isOpenSeat: true,
            description:
              'Ten Republicans are competing for the seat vacated by Matt Gaetz. CFO Jimmy Patronis has received Trump’s endorsement and is considered the favorite. The district is the westernmost in Florida and consistently votes Republican.',
            candidates: [
              {
                name: 'Jimmy Patronis',
                party: 'Republican',
                notes: 'Florida Chief Financial Officer, Trump endorsed',
              },
            ],
          },
          {
            id: 'fl-house-1-dem-prim',
            title: '1st District Democratic Primary',
            office: 'US House',
            type: 'Special Primary',
            district: '1st District',
            isOpenSeat: true,
            description:
              'Uncontested primary for the panhandle-based seat. Gay Valimont will advance to the special general election.',
            candidates: [
              {
                name: 'Gay Valimont',
                party: 'Democrat',
                notes: 'Gun control activist',
              },
            ],
          },
          {
            id: 'fl-house-6-rep-prim',
            title: '6th District Republican Primary',
            office: 'US House',
            type: 'Special Primary',
            district: '6th District',
            isOpenSeat: true,
            description:
              'Trump has endorsed state Sen. Randy Fine over two other candidates. The district has historically sent Republicans to Congress.',
            candidates: [
              {
                name: 'Randy Fine',
                party: 'Republican',
                notes: 'State Senator, Trump endorsed',
              },
            ],
          },
          {
            id: 'fl-house-6-dem-prim',
            title: '6th District Democratic Primary',
            office: 'US House',
            type: 'Special Primary',
            district: '6th District',
            isOpenSeat: true,
            description:
              'One of two Democrats will advance to the general election for this coastal Florida district south of Jacksonville.',
            candidates: [
              { name: 'George Selmont', party: 'Democrat', notes: 'Attorney' },
              { name: 'Josh Weil', party: 'Democrat', notes: 'Educator' },
            ],
          },
        ],
      },
      {
        stateName: 'Wisconsin',
        races: [
          {
            id: 'wi-supreme-court',
            title: 'Supreme Court Election',
            office: 'Supreme Court',
            type: 'General',
            isOpenSeat: false,
            description:
              'Though ostensibly nonpartisan, this race will determine whether the state Supreme Court will remain under 4-3 liberal control or flip to a conservative majority.',
          },
        ],
      },
    ],
  },
  {
    date: '2025-06-10',
    locations: [
      {
        stateName: 'New Jersey',
        races: [
          {
            id: 'nj-gov-dem-prim',
            title: 'Democratic Governor Primary',
            office: 'Governor',
            type: 'Primary',
            isOpenSeat: true,
            description:
              'Governor Phil Murphy is term-limited. The crowded field includes two U.S. House members, mayors of Newark and Jersey City, a former state Senate president and the teachers union president.',
          },
          {
            id: 'nj-gov-rep-prim',
            title: 'Republican Governor Primary',
            office: 'Governor',
            type: 'Primary',
            isOpenSeat: true,
            description:
              'Republicans are lining up to lead a state that swung toward Republicans in 2024. Jack Ciattarelli is running again after a close race in 2021.',
            candidates: [
              {
                name: 'Jack Ciattarelli',
                party: 'Republican',
                notes: 'Former state legislator, 2021 nominee',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: '2025-06-24',
    locations: [
      {
        stateName: 'New York',
        races: [
          {
            id: 'ny-nyc-mayor-prim',
            title: 'New York City Mayoral Primary',
            office: 'Mayor',
            type: 'Primary',
            isOpenSeat: false,
            description:
              'Mayor Eric Adams faces a challenge in the Democratic primary. Almost a dozen candidates are running in the ranked-choice primary, including former Gov. Andrew Cuomo.',
            candidates: [
              {
                name: 'Eric Adams',
                party: 'Democrat',
                isIncumbent: true,
                notes: 'Indicted, running as independent in general',
              },
              {
                name: 'Andrew Cuomo',
                party: 'Democrat',
                notes: 'Former Governor',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: '2025-07-15',
    locations: [
      {
        stateName: 'Arizona',
        races: [
          {
            id: 'az-house-7-dem-prim',
            title: '7th District Democratic Primary',
            office: 'US House',
            type: 'Special Primary',
            district: '7th District',
            isOpenSeat: true,
            description:
              'Longtime Rep. Raúl Grijalva died on March 13. This southern Arizona district is among the most Democratic in the state.',
          },
          {
            id: 'az-house-7-rep-prim',
            title: '7th District Republican Primary',
            office: 'US House',
            type: 'Special Primary',
            district: '7th District',
            isOpenSeat: true,
            description:
              'Arizona’s 7th District includes part of Tucson and is majority Hispanic. Safely Democratic.',
          },
        ],
      },
    ],
  },
  {
    date: '2025-09-09',
    locations: [
      {
        stateName: 'Virginia',
        races: [
          {
            id: 'va-house-11-special',
            title: '11th District Special Election',
            office: 'US House',
            type: 'Special General',
            district: '11th District',
            isOpenSeat: true,
            description:
              'Special election to fill the seat held by Rep. Gerry Connolly, who died on May 21. The district is centered in Fairfax and leans Democratic.',
          },
        ],
      },
      {
        stateName: 'Massachusetts',
        races: [
          {
            id: 'ma-boston-mayor-prim',
            title: 'Boston Mayoral Primary',
            office: 'Mayor',
            type: 'Primary',
            isOpenSeat: false,
            description:
              'Incumbent Mayor Michelle Wu seeks a second term. Nonpartisan primary to whittle the field down to two candidates.',
            candidates: [
              { name: 'Michelle Wu', party: 'Nonpartisan', isIncumbent: true },
            ],
          },
        ],
      },
    ],
  },
  {
    date: '2025-09-23',
    locations: [
      {
        stateName: 'Arizona',
        races: [
          {
            id: 'az-house-7-special',
            title: '7th District Special Election',
            office: 'US House',
            type: 'Special General',
            district: '7th District',
            isOpenSeat: true,
            description:
              'Open since March after Rep. Raúl Grijalva died. Historically sends a Democrat to Congress.',
          },
        ],
      },
    ],
  },
  {
    date: '2025-10-07',
    locations: [
      {
        stateName: 'Tennessee',
        races: [
          {
            id: 'tn-house-7-dem-prim',
            title: '7th District Democratic Primary',
            office: 'US House',
            type: 'Special Primary',
            district: '7th District',
            isOpenSeat: true,
            description:
              'Seat vacant following resignation of Rep. Mark Green. Republican-leaning district.',
          },
          {
            id: 'tn-house-7-rep-prim',
            title: '7th District Republican Primary',
            office: 'US House',
            type: 'Special Primary',
            district: '7th District',
            isOpenSeat: true,
            description:
              'Ten candidates seek nomination. Includes Trump-endorsed Matt Van Epps.',
            candidates: [
              {
                name: 'Matt Van Epps',
                party: 'Republican',
                notes: 'Former commissioner, Trump endorsed',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: '2025-11-04',
    locations: [
      {
        stateName: 'New Jersey',
        races: [
          {
            id: 'nj-gov-general',
            title: 'Governor',
            office: 'Governor',
            type: 'General',
            isOpenSeat: true,
            description:
              'Democrat Mikie Sherrill and Republican Jack Ciattarelli face off to succeed term-limited Gov. Phil Murphy.',
            candidates: [
              {
                name: 'Mikie Sherrill',
                party: 'Democrat',
                notes: 'US House member',
              },
              {
                name: 'Jack Ciattarelli',
                party: 'Republican',
                notes: '2021 nominee',
              },
            ],
          },
          {
            id: 'nj-jc-mayor',
            title: 'Jersey City Mayor',
            office: 'Mayor',
            type: 'General',
            isOpenSeat: false,
            description:
              'Seven candidates running in all-party primary. Runoff on Dec 2 if no majority.',
          },
        ],
      },
      {
        stateName: 'Virginia',
        races: [
          {
            id: 'va-gov',
            title: 'Governor',
            office: 'Governor',
            type: 'General',
            isOpenSeat: true,
            description:
              "Democratic Rep. Abigail Spanberger vs. Republican Lt. Gov. Winsome Earle-Sears. Winner will be state's first female governor.",
            candidates: [
              { name: 'Abigail Spanberger', party: 'Democrat' },
              { name: 'Winsome Earle-Sears', party: 'Republican' },
            ],
          },
          {
            id: 'va-lt-gov',
            title: 'Lieutenant Governor',
            office: 'Lt. Governor',
            type: 'General',
            isOpenSeat: true,
            description:
              'Contest includes Democrat Ghazala Hashmi and Republican John Reid.',
            candidates: [
              { name: 'Ghazala Hashmi', party: 'Democrat' },
              { name: 'John Reid', party: 'Republican' },
            ],
          },
          {
            id: 'va-ag',
            title: 'Attorney General',
            office: 'Attorney General',
            type: 'General',
            isOpenSeat: false,
            description:
              'Incumbent Jason Miyares faces challenge from Democrat Jay Jones.',
            candidates: [
              { name: 'Jason Miyares', party: 'Republican', isIncumbent: true },
              { name: 'Jay Jones', party: 'Democrat' },
            ],
          },
        ],
      },
      {
        stateName: 'California',
        races: [
          {
            id: 'ca-prop-50',
            title: 'Proposition 50',
            office: 'Proposition',
            type: 'Ballot Measure',
            district: 'Proposition 50',
            isOpenSeat: false,
            description:
              'Would adopt new congressional maps adding as many as five Democratic-held seats. Response to Texas redrawing maps.',
          },
        ],
      },
      {
        stateName: 'Colorado',
        races: [
          {
            id: 'co-prop-mm',
            title: 'Proposition MM',
            office: 'Proposition',
            type: 'Ballot Measure',
            district: 'Proposition MM',
            isOpenSeat: false,
            description:
              'Raises state income taxes on households earning $300k+ to fund free meals for public school students.',
          },
        ],
      },
      {
        stateName: 'Georgia',
        races: [
          {
            id: 'ga-atl-mayor',
            title: 'Atlanta Mayor',
            office: 'Mayor',
            type: 'General',
            isOpenSeat: false,
            description:
              'Andre Dickens seeks second term. Four candidates qualified.',
            candidates: [
              {
                name: 'Andre Dickens',
                party: 'Nonpartisan',
                isIncumbent: true,
              },
            ],
          },
        ],
      },
      {
        stateName: 'Maine',
        races: [
          {
            id: 'me-q1',
            title: 'Question 1',
            office: 'Question',
            type: 'Ballot Measure',
            district: 'Question 1',
            isOpenSeat: false,
            description:
              'Changes election administration: requires photo ID, shortens absentee period, prohibits phone requests for ballots.',
          },
          {
            id: 'me-q2',
            title: 'Question 2',
            office: 'Question',
            type: 'Ballot Measure',
            district: 'Question 2',
            isOpenSeat: false,
            description:
              'Red Flag law: allows petition to temporarily prohibit dangerous weapons for those deemed a threat.',
          },
        ],
      },
      {
        stateName: 'Michigan',
        races: [
          {
            id: 'mi-detroit-mayor',
            title: 'Detroit Mayor',
            office: 'Mayor',
            type: 'General',
            isOpenSeat: true,
            description:
              'Office open after Mayor Mike Duggan chose not to seek reelection.',
          },
        ],
      },
      {
        stateName: 'Minnesota',
        races: [
          {
            id: 'mn-mpls-mayor',
            title: 'Minneapolis Mayor',
            office: 'Mayor',
            type: 'General',
            isOpenSeat: false,
            description:
              'Incumbent Jacob Frey faces crowded field, including Omar Fateh from his left.',
            candidates: [
              { name: 'Jacob Frey', party: 'Democrat', isIncumbent: true },
              { name: 'Omar Fateh', party: 'Democrat' },
            ],
          },
        ],
      },
      {
        stateName: 'New York',
        races: [
          {
            id: 'ny-nyc-mayor-gen',
            title: 'New York City Mayor',
            office: 'Mayor',
            type: 'General',
            isOpenSeat: false,
            description:
              'Democratic nominee Zohran Mamdani, Republican Curtis Sliwa, and Andrew Cuomo (runner-up) contesting general. Incumbent Eric Adams remains on ballot.',
            candidates: [
              { name: 'Zohran Mamdani', party: 'Democrat' },
              { name: 'Curtis Sliwa', party: 'Republican' },
              { name: 'Andrew Cuomo', party: 'Independent' },
              { name: 'Eric Adams', party: 'Independent', isIncumbent: true },
            ],
          },
        ],
      },
      {
        stateName: 'Ohio',
        races: [
          {
            id: 'oh-cincy-mayor',
            title: 'Cincinnati Mayor',
            office: 'Mayor',
            type: 'General',
            isOpenSeat: false,
            description:
              'Incumbent Aftab Pureval and Cory Bowman (half-brother of VP JD Vance) are running.',
            candidates: [
              {
                name: 'Aftab Pureval',
                party: 'Nonpartisan',
                isIncumbent: true,
              },
              { name: 'Cory Bowman', party: 'Nonpartisan' },
            ],
          },
        ],
      },
      {
        stateName: 'Pennsylvania',
        races: [
          {
            id: 'pa-supreme-court',
            title: 'Supreme Court Retention',
            office: 'Supreme Court',
            type: 'Retention',
            isOpenSeat: false,
            description:
              'Three retention races for Democratic justices. Has implications for 5-2 Democratic majority.',
          },
          {
            id: 'pa-pitt-mayor',
            title: 'Pittsburgh Mayor',
            office: 'Mayor',
            type: 'General',
            isOpenSeat: false, // Technically the seat isn't "open" in the sense of a vacancy, but the incumbent lost the primary.
            description:
              'Democrat Corey O’Connor (who ousted incumbent Ed Gainey in primary) vs Republican Tony Moreno.',
            candidates: [
              { name: "Corey O'Connor", party: 'Democrat' },
              { name: 'Tony Moreno', party: 'Republican' },
            ],
          },
        ],
      },
      {
        stateName: 'Texas',
        races: [
          {
            id: 'tx-house-18-special',
            title: '18th District Special Election',
            office: 'US House',
            type: 'Special General',
            district: '18th District',
            isOpenSeat: true,
            description:
              'Rep. Sylvester Turner died March 5. Special election coincides with general. Top two runoff if no 50%.',
          },
          {
            id: 'tx-prop-15',
            title: 'Proposition 15',
            office: 'Proposition',
            type: 'Ballot Measure',
            district: 'Proposition 15',
            isOpenSeat: false,
            description:
              'Affirms parents as primary decision makers for children.',
          },
          {
            id: 'tx-prop-16',
            title: 'Proposition 16',
            office: 'Proposition',
            type: 'Ballot Measure',
            district: 'Proposition 16',
            isOpenSeat: false,
            description:
              'Adds language explicitly stating people must be US citizens to vote in Texas.',
          },
        ],
      },
    ],
  },
  {
    date: '2025-12-02',
    locations: [
      {
        stateName: 'Tennessee',
        races: [
          {
            id: 'tn-house-7-special-gen',
            title: '7th District Special General',
            office: 'US House',
            type: 'Special General',
            district: '7th District',
            isOpenSeat: true,
            description:
              'Winner will serve remainder of former Rep. Mark Green’s term in Middle Tennessee.',
          },
        ],
      },
    ],
  },
];

export { keyRaces, allRaces, usElectionSchedule2025 };
export type { KeyRacesType, ChoiceType, AllRaceType, ElectionSchedule };
