import { Container, GlobalStyle, Main } from "./styles";
import { darkTheme, lightTheme } from "./styles/Theme";

import API from "./api/api";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { useState } from "react";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    const response = await API.get(`/${search}`);
    setUser(response.data);
    setSearch("");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Container>
          <Main>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Search
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
