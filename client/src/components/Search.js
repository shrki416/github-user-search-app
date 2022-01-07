import React from 'react'
import { StyledSearch } from "../styles";
import search from "../assets/icon-search.svg";

function Search() {
  return (
    <StyledSearch>
      <div className="search-input">
        <img src={search} alt="magnifying glass" />
        <input type="text" placeholder="Search Github username..." />
      </div>
      <div>
        <button className="search-btn">Search</button>
      </div>
    </StyledSearch>
  );
}

export default Search
