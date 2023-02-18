import Button from "../button/button.component";
import productCart from "../../assets/productCart.svg";
import { useContext, useState } from "react";
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
  const { addItemsToCart } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  const addItemHandler = () => {
    if (!cartCount) return;

    const itemsToAdd = { ...productData, quantity: cartCount };
    addItemsToCart(itemsToAdd);
  };

  const incrementHandler = () => setCartCount(cartCount + 1);
  const decrementHandler = () => {
    if (cartCount === 0) return;

    setCartCount(cartCount - 1);
  };

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
          <span onClick={decrementHandler}>-</span>
          <p>{cartCount}</p>
          <span onClick={incrementHandler}>+</span>
        </AddToCartHandle>
        <Button icon={productCart} callback={addItemHandler}>
          Add to cart
        </Button>
      </AddToCartContainer>
    </ProductHandlerContainer>
  );
};
export default ProductHandler;
