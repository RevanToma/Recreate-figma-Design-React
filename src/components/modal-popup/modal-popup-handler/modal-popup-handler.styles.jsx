import styled from "styled-components";

export const FirstImg = styled.div`
  img {
    width: 550px;
    height: 550px;
    &:hover {
      opacity: 1;
    }
    @media (max-width: 775px) {
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 0;
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
      @media (max-width: 775px) {
        top: 30%;
        left: 0px;
      }
    }
    &:nth-child(2) {
      top: 35%;
      right: -5%;
      &:hover {
        opacity: 1;
        fill: red;
      }
      @media (max-width: 775px) {
        top: 30%;
        right: 0px;
        margin: 0;
        padding: 0;
      }
    }
  }
`;

export const SmallImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 775px) {
    display: none;
  }
`;
export const MobileFirstImgContainer = styled.div`
  @media (max-width: 775px) {
    width: 100vw;
  }
`;
