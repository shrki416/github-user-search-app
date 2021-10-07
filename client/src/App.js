import styled from "styled-components/macro";
import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";

import { GlobalStyle } from "./styles";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <div>
        <h1>devfinder</h1>
        <div>
          <div>DARK</div>
          <img src={moon} alt="moon" />
        </div>
      </div>

      <form>
        <img src={search} alt="search" />
        <input type="text" placeholder="Search Github username..." />
        <button type="button">Search</button>
      </form>
    </div>
  );
}

export default App;
