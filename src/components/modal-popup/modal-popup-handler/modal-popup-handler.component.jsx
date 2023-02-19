import { useState } from "react";
import nextImg from "../../../assets/next.svg";
import prevImg from "../../../assets/prev.svg";

import {
  FirstImg,
  PopUpContainerArrows,
  SmallImages,
} from "./modal-popup-handler.styles";

const ModalPopupHandler = ({ images }) => {
  const [showCurrentImg, setShowCurrentImg] = useState(0);

  const showImage = (idx) => {
    console.log(idx);
    setShowCurrentImg(idx);
  };

  const showPrevImage = () => {
    const prevImg =
      showCurrentImg === 0 ? images.length - 1 : showCurrentImg - 1;

    setShowCurrentImg(prevImg);
  };

  const showINextImage = () => {
    const nextImg =
      showCurrentImg === images.length - 1 ? 0 : showCurrentImg + 1;
    setShowCurrentImg(nextImg);
  };

  return (
    <div>
      <div>
        <FirstImg>
          <img src={images[showCurrentImg]} alt="shoe" />
        </FirstImg>
        <PopUpContainerArrows>
          <img src={prevImg} onClick={showPrevImage} />
          <img src={nextImg} onClick={showINextImage} />
        </PopUpContainerArrows>
      </div>
      <SmallImages>
        {images.map((image, idx) => (
          <div key={idx} onClick={() => showImage(idx)}>
            <img src={image} alt="shoe" />
          </div>
        ))}
      </SmallImages>
    </div>
  );
};
export default ModalPopupHandler;
