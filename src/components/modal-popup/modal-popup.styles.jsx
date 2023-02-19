import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 9999;
  right: 35%;
  top: 15%;
`;

export const ModalItems = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const CloseModal = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
`;
