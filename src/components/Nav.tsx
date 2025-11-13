const Nav = () => {
  return (
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
  );
};

export default Nav;
