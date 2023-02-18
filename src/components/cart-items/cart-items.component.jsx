import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
} from "./cart-items.style";
import TrashIcon from "../../assets/trash.svg";

const CartItem = ({ productData }) => {
  const { title, discountPrice, largeShoeImg } = productData;

  return (
    <CartItemContainer>
      <img src={largeShoeImg} alt={title} />
      <CartItemDetails>
        <span>{title}</span>
        <span>${discountPrice.toFixed(2)}</span>
        <img src={TrashIcon} alt="trash" />
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
