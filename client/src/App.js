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
      <div className="main">
        <div className="header">
            <h1>devfinder</h1>
            <div className="dark-mode">
                <p>DARK</p>
                <img src={moon} alt="dark theme button" />
            </div>
        </div>

        <div className="search" id="search-container">
            <img src={search} alt="magnifying glass" />
            <input type="text" id="input" placeholder='Search Github username...'/>
            <div className="search-btn">
                <button id="search">Search</button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
