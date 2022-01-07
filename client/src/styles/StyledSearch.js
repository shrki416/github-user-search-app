import styled from "styled-components/macro";

const StyledSearch = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fefefe;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  margin-top: 36px;

  .search-input {
    display: flex;
    justify-content: center;
  }

  .search-input > img {
    margin-left: 32px;
  }

  .search-input > input {
    font-family: var(--ff);
    font-size: 18px;
    line-height: 25px;
    color: #4b6a9b;
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
    background-color: #0079ff;
    color: #ffffff;
    border-radius: 15px;
    font-family: var(--ff);
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    border: none;
  }

  .search-btn:hover {
    cursor: pointer;
  }

  @media (max-width: 576px) {
    .search-input > img {
      margin-left: 8px;
    }

    .search-input > input {
      font-size: 12px;
      margin-left: 8px;
      width: 184px;
    }

    .search-btn {
      padding: 12.5px 16px;
      margin: 10px;
      border-radius: 10px;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export default StyledSearch;
