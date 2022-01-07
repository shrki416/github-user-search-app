import { Container, GlobalStyle, Main } from "./styles";
import { darkTheme, lightTheme } from "./styles/Theme";

import Header from "./components/Header";
import Search from "./components/Search";
import { ThemeProvider } from "styled-components";
import company from "./assets/icon-company.svg";
import location from "./assets/icon-location.svg";
import octocat from "./assets/octocat.png";
import twitter from "./assets/icon-twitter.svg";
import { useDarkMode } from "./components/useDarkMode";
import website from "./assets/icon-website.svg";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Container>
          <Main>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Search />

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
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil, et.
                </p>
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
          </Main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
