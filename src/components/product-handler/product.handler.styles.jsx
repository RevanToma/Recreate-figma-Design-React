import styled from "styled-components";

export const ProductHandlerContainer = styled.div`
  width: 445px;
  margin-left: 125px;
  align-self: center;

  @media (max-width: 750px) {
    width: 100%;
    margin-left: 0;

    h2 {
      font-size: 35px;
      width: 100%;
    }
  }

  @media (max-width: 775px) {
    p,
    h2,
    span {
      margin: 0;
      padding: 10px;
    }
  }
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

  @media(max-width: 775px){
    width: 100%;
  }
  
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 775px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
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

  @media (max-width: 775px) {
    flex-direction: column;
    button {
      width: 90%;
    }
  }
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
    font-size: 2rem;
    user-select: none;

    &:hover {
      color: #ffab6a;
    }
  }
  p {
    color: black;
    font-weight: 700;
    user-select: none;
  }
  @media (max-width: 775px) {
    width: 100%;
    margin-right: 0;
  }
`;
