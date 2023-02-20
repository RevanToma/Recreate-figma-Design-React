import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 99999;
  right: 35%;
  top: 15%;

  @media (max-width: 775px) {
    position: inherit;
  }
`;

export const CloseModal = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
`;
