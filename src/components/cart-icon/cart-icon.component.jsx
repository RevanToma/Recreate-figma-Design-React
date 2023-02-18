import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import Cart from "../../assets/Shape.svg";
import { CartIconContainer } from "./cart-icon-style";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    console.log("isCartOpen before toggling: ", isCartOpen);
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <img src={Cart} />
    </CartIconContainer>
  );
};

export default CartIcon;
