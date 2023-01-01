import React, { useContext } from "react";
import ModalContext from "../../../lib/context/ModalContext";
import "./modal.css";
import { ReactComponent as CloseIcon } from "../../../assets/images/closeIcon.svg";

function Modal() {
  const modalContext = useContext(ModalContext);
  return (
    <>
      {ReactDOM.createPortal(
        <div className="fixed flex-full-center flex-col gap-10 top-0 right-0 w-full h-full z-20 bg-[#242423f5] modal-animation__open">
          <button>
            <CloseIcon onClick={() => modalContext.setIsModalOpen(false)} width="3.125rem" color="#fff" className="p-3 absolute right-12 top-12 bg-[#ffffff1a] rounded-[50%] hover:bg-[#ffffff33] hover:text-[#eee] transition-all" />
          </button>
          <h1 className="text-5xl text-white font-semibold opacity-100">نیاز به مشاوره دارید؟</h1>
          <button className="text-white text-3xl font-normal hover:opacity-80 transition-all" onClick={() => window.open("https://www.rtl-theme.com/gimnas-sport-worpress-theme/discussions/", "_blank")}>
            ارتباط با پشتیبانی
          </button>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default Modal;
