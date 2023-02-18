import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemDetails = styled.div`
  display: grid;
  align-items: center;
  span {
    color: #69707d;
    font-size: 15px;
    padding-left: 16px;
    grid-column: 2;
  }
  img {
    grid-column: 3;
  }
`;

export const TotalCartCost = styled.span`
  font-weight: 700 !important;
  color: #1d2026 !important;
`;
