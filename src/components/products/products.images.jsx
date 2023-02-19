import { ProductImgContainer, Overlay } from "./products.images.styles";
import ImageModal from "../modal-popup/modal-popup.component";
import { useState } from "react";

const ProductsImages = ({ productData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ProductImgContainer>
      <div>
        <img
          src={productData.largeShoeImg}
          alt="large shoe"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div>
        {productData.images.map((image, i) => (
          <img
            onClick={() => setIsModalOpen(true)}
            src={image}
            key={i}
            alt="shoe"
          />
        ))}
        {isModalOpen && (
          <>
            <ImageModal
              productData={productData}
              callback={() => setIsModalOpen(false)}
            />
            <Overlay onClick={() => setIsModalOpen(false)}></Overlay>
          </>
        )}
      </div>
    </ProductImgContainer>
  );
};

export default ProductsImages;
