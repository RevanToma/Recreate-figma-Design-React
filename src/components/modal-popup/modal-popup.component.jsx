import ModalPopupHandler from "./modal-popup-handler/modal-popup-handler.component";
import { ModalContainer, ModalItems } from "./modal-popup.styles";
const ImageModal = ({ productData, callback }) => {
  const { images } = productData;
  return (
    <ModalContainer>
      <ModalItems>
        <ModalPopupHandler images={images} />
      </ModalItems>
    </ModalContainer>
  );
};

export default ImageModal;
