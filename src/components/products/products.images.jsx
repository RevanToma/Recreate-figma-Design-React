import { ProductImgContainer } from "./products.images.styles";
import ImageModal from "../modal-popup/modal-popup.component";
import { useState } from "react";
const ProductsImages = ({ productData }) => {
  const { isModalOpen, setIsModalOpen } = useState(false);
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
