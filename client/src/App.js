import styled from "styled-components/macro";
import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";

import { GlobalStyle } from "./styles";
import { StyledTitle } from "./styles";
import { StyledForm } from "./styles";

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

      <div>
        <div>
          <img src={octocat} alt="octocat" />
        </div>
        <div>
          <h1>The Octocat</h1>
          <p>Joined 25 jan 2011</p>
          <h3>@octocat</h3>
          <p>This profile has no bio</p>
        </div>
        <div>
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
        <div>
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
      </div>
    </div>
  );
}

export default App;
