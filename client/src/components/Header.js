import React from "react";
import { StyledHeader } from '../styles';
import moon from "../assets/icon-moon.svg";

function Header() {
  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <div className="dark-mode">
        <p>DARK</p>
        <img src={moon} alt="dark theme button" />
      </div>
    </StyledHeader>
  );
}

export default Header;
