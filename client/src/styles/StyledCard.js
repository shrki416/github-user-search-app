import styled from "styled-components/macro";

const StyledCard = styled.div`
  height: 484px;
  position: relative;
  width: 770px;
  background-color: var(--white);
  box-shadow: 0px 0px 10px rgba(105, 124, 154, 0.1);
  margin-top: 20px;
  border-radius: 15px;

  .img {
    height: 117px;
    width: 117px;
  }

  .bio-description {
    left: 222px;
    position: absolute;
    line-height: 25px;
    opacitiy: 0.9;
    top: 133px;
    width: 480px;
  }

  .bio > h1 {
    left: 222px;
    position: absolute;
    top: 48px;
  }

  .bio-joined {
    left: 534px;
    line-height: 18px;
    position: absolute;
    text-align: right;
    top: 64px;
  }
`;

export default StyledCard;
