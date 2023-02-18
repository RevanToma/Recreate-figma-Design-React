import {
  NavLinksContainer,
  NavLiContainer,
  NavImgContainer,
} from "./nav.component.styles";
import logo from "../../assets/sneakers.svg";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import NavImg from "../../assets/Oval.svg";
// import CartIcon from "../cart-icon/cart-icon.component";
import CartIcon from "../../assets/Shape.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Nav = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
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
