import { createGlobalStyle } from "styled-components/macro";
import fonts from "./fonts";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--ff);
    background-color: #f6f8ff;
  }
`;

export default GlobalStyle;
