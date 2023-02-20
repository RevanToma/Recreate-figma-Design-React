import ModalPopupHandler from "../modal-popup-handler.component";
import { ModalContainer, CloseModal } from "./modal-popup.styles";
import X from "../../../../assets/X.svg";
const ImageModal = ({ productData, callback }) => {
  const { images } = productData;
  return (
    <ModalContainer>
      <div>
        <ModalPopupHandler images={images} />
      </div>
      <CloseModal src={X} onClick={callback} alt="X" />
    </ModalContainer>
  );
};

export default ImageModal;
