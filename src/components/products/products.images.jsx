import {
  ProductImgContainer,
  Overlay,
  LargeShoeImg,
} from "./products.images.styles";
import ImageModal from "../modal-popup/modal-popup-handler/modal-popup/modal-popup.component";
import { useState, Fragment, useEffect } from "react";
const ProductsImages = ({ productData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.screen.width);

    window.addEventListener("resize", () => {
      setWindowSize(window.screen.width);
    });
    return window.removeEventListener("resize", () => {});
  }, []);

  return (
    <ProductImgContainer>
      {windowSize < 775 ? (
        <ImageModal productData={productData} />
      ) : (
        <>
          <div>
            <LargeShoeImg
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
          </div>
        </>
      )}
      {isModalOpen && (
        <Fragment>
          <ImageModal
            productData={productData}
            callback={() => setIsModalOpen(false)}
          />
          <Overlay onClick={() => setIsModalOpen(false)}></Overlay>
        </Fragment>
      )}
    </ProductImgContainer>
  );
};

export default ProductsImages;
