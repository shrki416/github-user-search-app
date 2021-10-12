import styled from "styled-components/macro";

const StyledTitle = styled.div`
  align-items: center;
  display: flex;
  height: 38px;
  min-width: 770px;

  h1 {
    letter-spacing: 0;
    min-height: 38px;
    min-width: 130px;
    font-family: var(--font);
  }

  .toggle-mode {
    display: flex;
    align-items: flex-start;
    margin-left: auto;
    min-width: 78px;
  }

  .mode {
    color: var(--light-gray);
    font-family: var(--font);
    font-size: var(--fs-sm);
    font-weight: bold;
    letter-spacing: 2.5px;
    line-height: 15px;
    margin-left: -2px;
    min-height: 20px;
    min-width: 46px;
    text-align: right;
  }

  .mode-logo {
    height: 20px;
    margin-left: 14px;
    width: 20px;
  }
`;

export default StyledTitle;
