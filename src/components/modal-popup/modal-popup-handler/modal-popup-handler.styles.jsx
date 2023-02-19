import styled from "styled-components";

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    &:nth-child(2) {
      position: absolute;
      left: 30%;
      top: 15%;
      cursor: pointer;
      background: white;
      padding: 15px;
      border-radius: 50%;
    }
    &:nth-child(3) {
      position: absolute;
      right: 30%;
      top: 15%;
      cursor: pointer;
      background: white;
      padding: 15px;
      border-radius: 50%;
    }
  }
  gap: 2rem;
  border: 1px solid black;
  padding: 2rem;
`;
export const PopUpContainers = styled.div`
  display: flex;
`;

export const FirstImg = styled.div`
  img {
    width: 200px;
  }
`;

export const PopUpContainerArrows = styled.div`
  position: absolute;
  left: 0;
`;
