import { Container, GlobalStyle, Main } from "./styles";
import { darkTheme, lightTheme } from "./styles/Theme";

import API from "./api/api";
import Card from "./components/card/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { useState } from "react";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!search) return;
      const { data } = await API.get(`/${search}`);
      setUser(data);
      setSearch("");
    } catch (error) {
      error && setError(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Container>
          <Main>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Search
              error={error}
              setError={setError}
              search={search}
              setSearch={setSearch}
              submit={handleFormSubmit}
            />
            <Card user={user} />
          </Main>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
