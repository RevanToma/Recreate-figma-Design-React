import styled from "styled-components";

export const ProductImgContainer = styled.div`
  img {
    margin: 5px 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.3;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.8;
`;
