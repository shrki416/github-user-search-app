import styled from "styled-components/macro";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 38.51px;
    color: ${({ theme }) => theme.h1};
  }

  svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.icon};
  }

  svg:hover {
    cursor: pointer;
  }

  .dark-mode {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  .dark-mode p {
    font-size: var(--fs-sm);
    line-height: 19.25px;
    letter-spacing: 2.5px;
    color: ${({ theme }) => theme.text};
  }
`;

export default StyledHeader;
