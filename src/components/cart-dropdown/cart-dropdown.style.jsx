import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 360px;
  height: fit-content;
  display: grid;

  top: 90px;
  right: 150px;
  z-index: 5;

  background: #ffffff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  border-radius: 10px;

  button {
    place-self: center;
    width: 100%;
  }

  @media (max-width: 775px) {
    right: 15px;
  }
`;

export const CartEmptyMsg = styled.span`
  font-size: 16px;
  border-bottom: 1px solid #e4e9f2;
  padding: 24px;
  font-weight: 700;
`;

export const CartItems = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 20px;

  
  button {
    span {
      color: white;
    }
  }
  
  }
  img {
    border-radius: 4px;
  }
`;

export const EmptyCartMsg = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #69707d;
  padding: 100px 80px;
  text-align: center;
`;
