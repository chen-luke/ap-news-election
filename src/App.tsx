import KeyRaceCards from './components/keyrace/KeyRaceCards';
import Nav from './components/nav/Nav';
import ToolBar from './components/toolbar/ToolBar';

function App() {
  return (
    <>
      <div>
        <Nav />
        <ToolBar />
        <main>
          <h1>2025 General Election Results</h1>
          <h3>Key races</h3>
          <KeyRaceCards />
        </main>
      </div>
    </>
  );
}

export default App;
