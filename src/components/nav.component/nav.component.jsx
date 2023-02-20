import {
  NavLinksContainer,
  NavLiContainer,
  NavImgContainer,
  ItemCount,
} from "./nav.component.styles";
import logo from "../../assets/sneakers.svg";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import NavImg from "../../assets/Oval.svg";

import CartIcon from "../../assets/Shape.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Nav = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const openCartHandler = () => setIsCartOpen(!isCartOpen);
  return (
    <>
      <NavLinksContainer>
        <NavLiContainer>
          <img src={logo} />
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>Contact</li>
          <NavImgContainer>
            {cartCount ? <ItemCount>{cartCount}</ItemCount> : ""}
            <img src={CartIcon} onClick={openCartHandler} />

            <img src={NavImg} />
          </NavImgContainer>
          {isCartOpen && <CartDropdown />}
        </NavLiContainer>
      </NavLinksContainer>
    </>
  );
};

export default Nav;
