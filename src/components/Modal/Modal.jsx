import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { ButtonClose } from "./Modal.styled";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
     padding: "0",
    borderRadius: "24px",
    overflowY: "scroll",
    
    
    
  },
  overlay: {
    position:"fixed",
    backgroundColor: "rgba(18, 20, 23, 0.5)",
    },
    
};

export const ModalCard = ({ isOpen, onClose, children }) => {
    
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      onClose={onClose}
      style={customStyles}
      contentLabel="Car card"
    >
      {children}

      <ButtonClose type="button" onClick={onClose}>
        <IoMdClose />
      </ButtonClose>
    </Modal>
  );
};
