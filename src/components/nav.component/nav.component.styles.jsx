import styled from "styled-components";

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  img {
    @media (max-width: 755px) {
      border: 2px solid black;
    }
  }
`;

export const NavLiContainer = styled.div`
  border-bottom: 1px solid #e4e9f2;
  display: flex;

  width: 80%;
  gap: 32px;

  &:hover img {
    cursor: pointer;
  }

  li {
    padding: 41px 32px;
    margin-left: 46px;
    opacity: 0.7;
    cursor: pointer;
    border-bottom: 4px transparent solid;
    &:hover {
      opacity: 1;
      border-bottom: 4px #ff7e1b solid;
    }
  }

  @media (max-width: 755px) {
    li {
      display: none;
      border-bottom: none;
    }
    border-bottom: none;
  }
`;

export const NavImgContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;

  img {
    margin: 0 32px;
    border: 2px solid transparent;
    &:nth-child(3) {
      &:hover {
        border: 2px solid #ff7e1b;
        border-radius: 50%;
      }
    }
    &:nth-child(2) {
      &:hover {
        filter: brightness(0.4);
      }
    }
  }
  @media (max-width: 755px) {
    img {
      
    }

`;

export const ItemCount = styled.span`
  position: absolute;
  transform: translate(270%, -60%);
  color: #ffffff;
  background: #ff7e1b;
  padding: 2px 5px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 10px;
  z-index: 9999;
`;
