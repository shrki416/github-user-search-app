import styled from "styled-components/macro";

const CardStyles = styled.div`
  padding: 48px;
  width: 100%;
  height: 419px;
  display: flex;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  background-color: ${({ theme }) => theme.bg};
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row;

  /* card-body section */

  .card-body {
    display: grid;
    grid-column: 2 / span 3;
    align-items: center;
  }

  .user-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-auto-flow: column;
  }

  .card-header {
    font-family: var(--ff);
    font-size: 26px;
    font-weight: 700;
    line-height: 38.51px;
    color: ${({ theme }) => theme.userCardHeader};
    margin-top: 0;
    margin-bottom: 0;
    grid-column: 1 / 1;
  }

  .joined {
    display: grid;
    justify-content: end;
    font-family: var(--ff);
    font-size: 15px;
    line-height: 22px;
    color: ${({ theme }) => theme.text};
  }

  .user-name {
    font-size: 16px;
    line-height: 24px;
    color: var(--blue);
    grid-column: 2 / 1;
  }

  .user-bio {
    display: grid;
    grid-column: span 3;
    align-items: center;
  }

  .user-bio p a {
    font-size: 15px;
    line-height: 25px;
    color: ${({ theme }) => theme.text};
  }

  /* card-image section */
  .card-img {
    display: grid;
    grid-template-columns: minmax(0, 117px);
    grid-row: 1 / span 4;
  }

  .card-img img {
    width: 117px;
    height: 117px;
    border-radius: 50%;
  }

  /* user stats section */

  .user-stats {
    display: grid;
    grid-row: 3;
    grid-column: 2 / span 3;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    background-color: ${({ theme }) => theme.userStatsBg};
    border-radius: 10px;
    padding: 15px 32px;
  }

  .user-stats-header {
    color: ${({ theme }) => theme.text};
    font-size: 13px;
    line-height: 19.25px;
  }

  .user-stats-body {
    color: ${({ theme }) => theme.userCardHeader};
    font-size: 22px;
    line-height: 32.58px;
    font-weight: 700;
  }

  /* social section */

  .social {
    display: grid;
    grid-row: 4;
    grid-column: 2 / span 3;
    grid-template-columns: repeat(2, 1fr);
    margin: 36px 0 0 16px;
    gap: 12px;
  }

  .social > div {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text};
  }

  #location {
    margin-left: 6px;
  }

  .social > div > img {
    margin-right: 16px;
  }

  .social > div > p {
    font-size: 15px;
    line-height: 22px;
  }

  .not-available {
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    width: 573px;
    height: 481px;

    .card-img {
      grid-column: 1 / 1;
      grid-template-rows: minmax(0, 117px);
    }

    .user-info {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
      padding: 4px 32px;
      height: 100px;
    }

    .user-info > * {
      padding: 3px;
    }

    .joined {
      justify-content: start;
    }

    .user-bio {
      grid-column: 1 / span 4;
      grid-row: 2;
    }

    .user-stats {
      grid-column: 1 / span 4;
      grid-row: 3;
    }

    .social {
      grid-column: 1 / span 4;
      grid-row: 4;
    }
  }

  @media screen and (max-width: 576px) {
    width: 327px;
    height: 517px;
    padding: 24px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, auto));
    gap: 24px;

    .card-img {
      grid-column: 1 / 1;
      grid-template-rows: minmax(0, 100px);
      align-items: center;
    }

    .card-img img {
      width: 70px;
      height: 70px;
    }

    .card-body {
      align-content: flex-start;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      height: auto;
    }

    .card-header {
      font-size: 16px;
      line-height: 24px;
    }

    .joined,
    .user-name {
      justify-content: start;
      font-size: 13px;
    }

    .user-bio {
      grid-column: 1 / span 4;
      grid-row: 2;
    }

    .user-bio p {
      font-size: 13px;
      line-height: 25px;
      word-wrap: break-word;
      word-break: break-all;
    }

    .user-stats {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 24px 0;
    }

    .user-stats-header {
      font-size: 11px;
      line-height: 16px;
    }

    .user-stats-body {
      font-size: 16px;
      line-height: 24px;
    }

    .social {
      grid-template-columns: 1fr;
      margin: 0;
    }

    .social > div > p {
      font-size: 13px;
      line-height: 19px;
    }
  }
`;

export default CardStyles;
