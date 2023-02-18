import {
  CartItemContainer,
  CartItemDetails,
  TotalCartCost,
} from "./cart-items.style";
import TrashIcon from "../../assets/trash.svg";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";

const CartItem = ({ productData }) => {
  const { title, discountPrice, largeShoeImg, quantity } = productData;
  const { removeItemFromCart, cartItems } = useContext(CartContext);

  const removeItemFromCartHandler = () => removeItemFromCart(cartItems);
  return (
    <CartItemContainer>
      <img src={largeShoeImg} alt={title} />
      <CartItemDetails>
        <span>{title}</span>
        <span>
          ${discountPrice.toFixed(2)} x {quantity}
          <TotalCartCost>
            ${(quantity * discountPrice).toFixed(2)}
          </TotalCartCost>
        </span>
        <img onClick={removeItemFromCartHandler} src={TrashIcon} alt="trash" />
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
