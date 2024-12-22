import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, selectedImage, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={{
        content: {
          maxWidth: "600px",
          margin: "auto",
          padding: "20px",
          height: "fit-content",
        },
      }}
    >
      {selectedImage ? (
        <div>
          <img src={selectedImage.urls.regular} alt="Selected" />
          <button onClick={onRequestClose}>Close</button>
        </div>
      ) : (
        <p>No image selected</p>
      )}
    </Modal>
  );
};

export default ImageModal;
