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
        </MainContainer>
      </div>
    </>
  );
}

export default App;
