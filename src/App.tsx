import './App.css';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <div>
        <Nav />
        <h1>2025 General Election Results</h1>
        <h3>Key races</h3>
        <div>
          <div>
            <p>Virginia Governor</p>
            <hr />
            <p>estimate 99% of votes</p>
            <div>
              <input type='checkbox' />
              <p>Abigail Spanberger</p>
              <p>Winsome Earle-Sears</p>
            </div>
            <div>
              <p>Updated Now 10, 2025, 2:33PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
