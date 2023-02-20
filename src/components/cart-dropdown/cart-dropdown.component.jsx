import {
  CartDropdownContainer,
  CartItems,
  CartEmptyMsg,
  EmptyCartMsg,
} from "./cart-dropdown.style";

import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import CartItem from "../cart-items/cart-items.component";
import Button from "../button/button.component";
const CartDropdown = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  console.log(cartItems);
  return (
    <CartDropdownContainer>
      <CartEmptyMsg>Cart</CartEmptyMsg>

      {cartCount ? (
        <CartItems>
          {cartItems.map((productData) => (
            <CartItem key={productData.title} productData={productData} />
          ))}
          <Button>Checkout</Button>
        </CartItems>
      ) : (
        <EmptyCartMsg>Your cart is empty</EmptyCartMsg>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
