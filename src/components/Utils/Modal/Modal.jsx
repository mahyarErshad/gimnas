import React, { useContext, useState } from "react";
import ModalContext from "../../../lib/context/ModalContext";
import "./modal.css";
import { ReactComponent as CloseIcon } from "../../../assets/images/closeIcon.svg";

function Modal() {
  const modalContext = useContext(ModalContext);
  const [closing, setClosing] = useState(false);
  const animation = closing ? "modal-animation__close" : "modal-animation__open";
  const handleCloseModal = () => {
    setClosing(true);
  };
  return (
    <div className={`fixed top-0 right-0 w-full h-full z-20 bg-[#232323] opacity-[0.85] modal-animation__open ${animation}`}>
      <button>
        <CloseIcon onClick={handleCloseModal} width="3.125rem" color="#fff" className="p-3 absolute right-12 top-12 bg-[#ffffff1a] rounded-[50%] hover:bg-[#ffffff33] hover:text-[#eee] transition-all" />
      </button>
    </div>
  );
}

export default Modal;
