import React, { useContext } from "react";
import ModalContext from "../../../lib/context/ModalContext";
import "./modal.css";

function Modal() {
  const modalContext = useContext(ModalContext);
  return (
    <div onClick={() => modalContext.setIsModalOpen(false)} className="fixed top-0 right-0 w-full h-full z-20 bg-[#232323] modal-animation opacity-[0.85]">
      <button>
        <img src="" alt="close modal" />
      </button>
    </div>
  );
}

export default Modal;
