import Button from "../button/button.component";
import productCart from "../../assets/productCart.svg";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import {
  ProductHandlerContainer,
  CompanyPara,
  ProductTitle,
  ProductDescription,
  DiscountPrice,
  PriceContainer,
  OriginalPrice,
  AddToCartContainer,
  AddToCartHandle,
} from "./product.handler.styles";
const ProductHandler = ({ productData }) => {
  const { company, description, title, originalPrice, discountPrice } =
    productData;
  const { addItemsToCart, removeItemFromCart } = useContext(CartContext);
  const addItemHandler = () => addItemsToCart(productData);
  const removeCartItemHandler = () => removeItemFromCart(productData);

  return (
    <ProductHandlerContainer>
      <CompanyPara>{company.toUpperCase()}</CompanyPara>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <PriceContainer>
        <DiscountPrice>
          ${discountPrice.toFixed(2)}
          <span>{(discountPrice / originalPrice) * 100}%</span>
        </DiscountPrice>
        <OriginalPrice>${originalPrice.toFixed(2)}</OriginalPrice>
      </PriceContainer>
      <AddToCartContainer>
        <AddToCartHandle>
          <span onClick={removeCartItemHandler}>-</span>
          <p>0</p>
          <span onClick={addItemHandler}>+</span>
        </AddToCartHandle>
        <Button icon={productCart}>Add to cart</Button>
      </AddToCartContainer>
    </ProductHandlerContainer>
  );
};
export default ProductHandler;
