import { useState } from "react";
import nextImg from "../../../assets/next.svg";
import prevImg from "../../../assets/prev.svg";
import {
  PopUpContainer,
  FirstImg,
  PopUpContainers,
  PopUpContainerArrows,
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
        <img src={images[showCurrentImg]} alt="shoe" />
        <img src={prevImg} onClick={showPrevImage} />
        <img src={nextImg} onClick={showINextImage} />
      </div>
      <div>
        {images.map((image, idx) => (
          <div key={idx} onClick={() => showImage(idx)}>
            <img src={image} alt="shoe" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ModalPopupHandler;
