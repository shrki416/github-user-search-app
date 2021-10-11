import styled from "styled-components/macro";

const styledForm = styled.form`
  display: flex;
  align-items: flex-start;
  height: 109px;
  justify-content: flex-end;
  min-width: 730px;
  padding: 14px;
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  margin-top: 20px;

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
    background-color: var(--zircon);
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
`;

export default styledForm;
