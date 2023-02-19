import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 9999;
  right: 25%;
  top: 25%;
`;

export const ModalItems = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const CloseModal = styled.img`
  border: 1px solid black;
  position: absolute;
  top: 0;
  right: 0;
`;
