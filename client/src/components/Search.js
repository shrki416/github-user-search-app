import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";
import { StyledSearch } from "../styles";

function Search({ search, setSearch, submit }) {
  return (
    <StyledSearch onSubmit={submit}>
      <div className="search-input">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Github username..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div>
        <button className="search-btn">
          Search
        </button>
      </div>
    </StyledSearch>
  );
}

export default Search;
