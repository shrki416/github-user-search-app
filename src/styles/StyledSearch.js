import styled from "styled-components/macro";

const StyledSearch = styled.form`
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  margin-top: 36px;

  .search-input {
    display: flex;
    justify-content: center;
  }

  .search-input > svg {
    margin-left: 32px;
  }

  .search-input > input {
    font-family: var(--ff);
    font-size: var(--fs-xl);
    line-height: 25px;
    color: ${({ theme }) => theme.searchText};
    background-color: ${({ theme }) => theme.bg};
    border: none;
    outline: none;
    margin-left: 24px;
    width: 275px;
  }

  .search-btn {
    display: flex;
    justify-content: center;
    padding: 12.5px 24px 13.5px;
    margin: 10px;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 15px;
    font-family: var(--ff);
    font-size: var(--fs-lg);
    line-height: 24px;
    text-align: center;
    border: none;
  }

  .search-btn:hover {
    cursor: pointer;
  }

  .error {
    display: flex;
    align-items: center;
    font-family: var(--ff);
    font-size: var(--fs-md);
    font-weight: 700;
    color: #f74646;
    margin-left: 8rem;
    line-height: 22px;
  }

  @media screen and (max-width: 768px) {
    .error {
      margin-left: 0;
    }
  }

  @media (max-width: 576px) {
    .search-input > svg {
      margin-left: 8px;
    }

    .search-input > input {
      font-size: var(--fs-xs);
      margin-left: 8px;
      width: 184px;
    }

    .search-btn {
      padding: 12.5px 16px;
      margin: 10px;
      border-radius: 10px;
      font-size: var(--fs-sm);
      line-height: 21px;
    }

    .error {
      display: none;
    }
  }
`;

export default StyledSearch;
