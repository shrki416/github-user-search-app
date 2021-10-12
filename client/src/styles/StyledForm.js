import styled from "styled-components/macro";

const styledForm = styled.form`
  background-color: var(--white);
  display: flex;
  align-items: flex-start;
  height: 109px;
  justify-content: flex-end;
  min-width: 770px;
  padding: 14px;
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(105, 124, 154, 0.1);

  img {
    height: 24px;
    width: 24px;
    margin-left: 13px;
    margin-top: 13px;
  }

  input {
    line-height: 25px;
    margin-left: 24px;
    margin-top: 12px;
    min-height: 25px;
    min-width: 290px;
    white-space: nowrap;
    border: none;
    font-family: var(--font);
    font-size: var(--fs-xl);
  }

  input::placeholder {
    font-family: var(--font);
    font-size: var(--fs-xl);
  }

  input[type="text"] {
    outline: none;
  }

  button {
    display: flex;
    justify-content: flex-end;
    border-radius: 10px;
    font-family: var(--font);
    font-size: var(--fs-lg);
    font-weight: bold;
    background: var(--light-blue);
    color: var(--white);
    min-height: 24px;
    height: 50px;
    line-height: 19px;
    margin-left: auto;
    min-width: 106px;
    padding: 12px 21px;
    border: 0;
  }

  input:hover,
  button:hover {
    cursor: pointer;
  }
`;

export default styledForm;
