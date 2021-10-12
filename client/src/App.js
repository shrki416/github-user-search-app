import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";

import { GlobalStyle, StyledTitle, StyledForm, StyledCard } from "./styles";

import octocat from "./assets/octocat.png";
import location from "./assets/icon-location.svg";
import twitter from "./assets/icon-twitter.svg";
import website from "./assets/icon-website.svg";
import company from "./assets/icon-company.svg";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <StyledTitle>
        <h1>devfinder</h1>
        <div className="toggle-mode">
          <div className="mode">DARK</div>
          <img src={moon} alt="moon" className="mode-logo" />
        </div>
      </StyledTitle>

      <StyledForm>
        <img src={search} alt="search" />
        <input type="text" placeholder="Search Github username..." />
        <button type="button">Search</button>
      </StyledForm>

      <StyledCard>
        <div className="img">
          <img src={octocat} alt="octocat" className="profile-img" />
        </div>
        <div className="bio">
          <h1>The Octocat</h1>
          <p>Joined 25 jan 2011</p>
          <h3>@octocat</h3>
          <p className="bio-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa
            esse laudantium vitae non nobis optio nemo facilis. Quas, vero!
          </p>
        </div>
        <div className="stats">
          <div>
            <h4>Repos</h4>
            <span>8</span>
          </div>
          <div>
            <h4>Followers</h4>
            <span>3938</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>9</span>
          </div>
        </div>
        <div className="social">
          <div>
            <img src={location} alt="location" />
            <p>San Fransico</p>
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
        </div>
      </StyledCard>
    </div>
  );
}

export default App;
