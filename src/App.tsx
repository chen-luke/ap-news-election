import AllElections from './components/all-elections/AllElections';
import DonationPrompt from './components/donation-prompt/DonationPrompt';
import ElectionDataCredits from './components/election-data-credits/ElectionDataCredits';
import Footer from './components/footer/Footer';
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

const ElectionTitle = styled.div`
  font-size: 3.25rem;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 385px;
  margin: 4rem auto;
  @media (max-width: 450px) {
    width: 80%;
  }
`;

function App() {
  return (
    <>
      <div>
        <Nav />
        <ToolBar />
        <MainContainer>
          <ElectionTitle>2025 General Election Results</ElectionTitle>
          <h2>Key races</h2>
          <KeyRaceCards />
          <OtherRaces />
          <AllElections />
          <StyledHr />
          <DonationPrompt />
          <ElectionDataCredits />
        </MainContainer>
      </div>
      <Footer />
    </>
  );
}

export default App;
