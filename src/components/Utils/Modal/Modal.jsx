import React, { useContext } from "react";
import ModalContext from "../../../lib/context/ModalContext";
import "./modal.css";
import { ReactComponent as CloseIcon } from "../../../assets/images/closeIcon.svg";

function Modal() {
  const modalContext = useContext(ModalContext);
  return (
    <div onClick={() => modalContext.setIsModalOpen(false)} className="fixed top-0 right-0 w-full h-full z-20 bg-[#232323] modal-animation opacity-[0.85]">
      <button>
        <CloseIcon color="#fff" className="w-10 h-10 p-3 absolute right-12 top-12 bg-[#ffffff1a] rounded-[50%]" />
      </button>
    </div>
  );
}

export default Modal;
