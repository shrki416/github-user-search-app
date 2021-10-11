import { createGlobalStyle } from "styled-components/macro";
import fonts from "./fonts";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: var(--font);
        background-color: var(--zircon);
    }

    .app {
       display: flex;
       align-items: center;
       height: 900px;
       padding: 144px 0;
       width: 1440px;
       flex-direction: column;
       margin: 0 auto;
    }
`;

export default GlobalStyle;
