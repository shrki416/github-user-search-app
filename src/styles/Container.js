import styled from "styled-components/macro";

const Container = styled.div`
  width: 730px;
  height: 586px;

  @media (max-width: 768px) {
    width: 573px;
    height: 648px;
  }

  @media (max-width: 576px) {
    width: 327px;
    height: 667px;
  }
`;

export default Container;
