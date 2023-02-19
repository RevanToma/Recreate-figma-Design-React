import styled from "styled-components";

export const FirstImg = styled.div`
  img {
    width: 550px;
    height: 550px;
    &:hover {
      opacity: 1;
    }
  }
`;

export const PopUpContainerArrows = styled.div`
  img {
    position: absolute;
    &:nth-child(1) {
      top: 35%;
      left: -5%;
      &:hover {
        opacity: 1;
      }
    }
    &:nth-child(2) {
      top: 35%;
      right: -5%;
      &:hover {
        opacity: 1;
        fill: red;
      }
    }
  }
`;

export const SmallImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
