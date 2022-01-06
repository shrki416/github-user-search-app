import company from "./assets/icon-company.svg";
import location from "./assets/icon-location.svg";
import moon from "./assets/icon-moon.svg";
import octocat from "./assets/octocat.png";
import search from "./assets/icon-search.svg";
import twitter from "./assets/icon-twitter.svg";
import website from "./assets/icon-website.svg";

function App() {
  return (
    <div className="app">
      <main className="main">
        <header className="header">
          <h1>devfinder</h1>
          <div className="dark-mode">
            <p>DARK</p>
            <img src={moon} alt="dark theme button" />
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <img src={search} alt="magnifying glass" />
            <input type="text" placeholder="Search Github username..." />
          </div>
          <div>
            <button className="search-btn">Search</button>
          </div>
        </div>

        <div className="card">
          <section className="card-img">
            <img src={octocat} alt="octocat" />
          </section>

          <section className="card-body">
            <div className="user-info">
              <h1 className="card-header">The Octocat</h1>
              <p className="user-name">@octocat</p>
              <p className="joined">Joined 25 Jan 2011</p>
            </div>
          </section>

          <section className="user-bio">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestias aliquam sed id aliquid labore debitis illum eveniet error libero.</p>
          </section>

          <section className="user-stats">
            <div>
              <p className="user-stats-header">Repos</p>
              <p className="user-stats-body">8</p>
            </div>
            <div>
              <p className="user-stats-header">Followers</p>
              <p className="user-stats-body">3938</p>
            </div>
            <div>
              <p className="user-stats-header">Following</p>
              <p className="user-stats-body">9</p>
            </div>
          </section>

          <section className="social">
            <div>
              <img src={location} alt="location" />
              <p>San Fransisco</p>
            </div>
            <div>
              <img src={twitter} alt="twitter" />
              <p>Not Available</p>
            </div>
            <div>
              <img src={website} alt="website" />
              <p>https://github.blog</p>
            </div>
            <div>
              <img src={company} alt="company" />
              <p>@github</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
