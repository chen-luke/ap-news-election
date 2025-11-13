import './App.css';

function App() {
  return (
    <>
      <div>
        <nav>
          <div className='wrapper'>
            <div>
              <a href=''>
                <picture>
                  <source />
                  <img src='public\ap-logo-176-by-208.svg' alt='' />
                </picture>
              </a>
              <ul>
                <li>World</li>
                <li>U.S.</li>
                <li>Politics</li>
                <li>Entertainment</li>
                <li>Science</li>
                <li>Business</li>
                <li>Fact Check</li>
                <li>Newsletters</li>
              </ul>
              <a>Donate</a>
            </div>
          </div>
        </nav>
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
