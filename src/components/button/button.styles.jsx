import styled from "styled-components";

export const ProductButton = styled.button`
  background: #ff7e1b;
  color: white;
  border: none;

  box-shadow: 0px 20px 50px -20px #ff7e1b;
  border-radius: 10px;

  width: 272px;
  height: 56px;
  cursor: pointer;

  &:hover {
    background-color: #ffab6a;
  }

  font-weight: 700;
  span {
    margin: 0 15px;
  }
`;
