import styled from "styled-components";

export const ProductHandlerContainer = styled.div`
  width: 445px;
  margin-left: 125px;
  align-self: center;
`;

export const CompanyPara = styled.p`
  font-size: 13px;
  color: #ff7e1b;
  font-weight: 700;
`;
export const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 44px;
  Line height: 48px;
width: 445px;
`;

export const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  Line height: 26px;
  width: 445px;
  color: #69707d;
  
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DiscountPrice = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 10px;

  span {
    margin-left: 24px;
    color: #ff7e1b;
    font-size: 16px;
    font-weight: 700;
    padding: 6px;
    background-color: #ffeee2;
    border-radius: 6px;
  }
`;

export const OriginalPrice = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  text-decoration-line: line-through;
  color: #b6bcc8;
`;

export const AddToCartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 32px;
`;

export const AddToCartHandle = styled.div`
  color: #ff7e1b;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 156px;
  height: 56px;
  border-radius: 10px;
  cursor: pointer;

  margin-right: 16px;
  background: #f6f8fd;

  span {
    font-weight: bold;
    font-size: 1.5rem;

    &:hover {
      color: #ffab6a;
    }
  }
  p {
    color: black;
    font-weight: 700;
  }
`;
