import AllElections from './components/all-elections/AllElections';
import DonationPrompt from './components/donation-prompt/DonationPrompt';
import ElectionDataCredits from './components/election-data-credits/ElectionDataCredits';
import KeyRaceCards from './components/keyrace/KeyRaceCards';
import Nav from './components/nav/Nav';
import OtherRaces from './components/other-race/OtherRaces';
import ToolBar from './components/toolbar/ToolBar';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: grid;
  margin: 0 auto;
  gap: 0px;
  max-width: 1030px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  background-color: #f1f1f1;
  margin-top: 4rem;
`;

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 385px;
  margin: 4rem auto;
`;

function App() {
  return (
    <>
      <div>
        <Nav />
        <ToolBar />
        <MainContainer>
          <h1>2025 General Election Results</h1>
          <h2>Key races</h2>
          <KeyRaceCards />
          <OtherRaces />
          <AllElections />
          <StyledHr />
          <DonationPrompt />
          <ElectionDataCredits />
        </MainContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
