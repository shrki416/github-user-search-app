import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { StyledHeader } from "../styles";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";

function Header({ theme, toggleTheme }) {
  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <div className="dark-mode">
        <p>{theme === "light" ? "DARK" : "LIGHT"}</p>
        <div onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
