const ImageModal = ({ productData, callback }) => {
  const { images, title } = productData;
  return (
    <div>
      <img src={images} alt={title} />
    </div>
  );
};

export default ImageModal;
