import {
  CartDropdownContainer,
  CartItems,
  CartEmptyMsg,
} from "./cart-dropdown.style";

import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import CartItem from "../cart-items/cart-items.component";
import Button from "../button/button.component";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <CartDropdownContainer>
      <CartEmptyMsg>Cart</CartEmptyMsg>
      <CartItems>
        {cartItems.map((productData) => (
          <CartItem key={productData.title} productData={productData} />
        ))}
        <Button>Checkout</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
