import { ProductImgContainer } from "./products.images.styles";
const ProductsImages = ({ productData }) => {
  return (
    <ProductImgContainer>
      <div>
        <img src={productData.largeShoeImg} alt="large shoe" />
      </div>
      <div>
        {productData.images.map((image, i) => (
          <img src={image} key={i} alt="shoe" />
        ))}
      </div>
    </ProductImgContainer>
  );
};

export default ProductsImages;
