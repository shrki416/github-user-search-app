import { css } from "styled-components/macro";

const fonts = css`
  @font-face {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/space-mono-regular.woff2") format("woff2"),
      url("../fonts/space-mono-regular.woff") format("woff");
  }

  @font-face {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    src: url("../fonts/space-mono-700.woff2") format("woff2"),
      url("../fonts/space-mono-700.woff") format("woff");
  }
`;

export default fonts;
