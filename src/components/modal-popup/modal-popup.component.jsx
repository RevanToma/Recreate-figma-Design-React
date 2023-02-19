import ModalPopupHandler from "./modal-popup-handler/modal-popup-handler.component";
import { ModalContainer, ModalItems, CloseModal } from "./modal-popup.styles";
import X from "../../assets/X.svg";
const ImageModal = ({ productData, callback }) => {
  const { images } = productData;
  return (
    <ModalContainer>
      <ModalItems>
        <ModalPopupHandler images={images} />
      </ModalItems>
      <CloseModal src={X} onClick={callback} alt="X" />
    </ModalContainer>
  );
};

export default ImageModal;
