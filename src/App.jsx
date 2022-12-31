import React, { useState } from "react";
import MainHeader from "./components/Header/MainHeader";
import Modal from "./components/Utils/Modal/Modal";
import ModalContext from "./lib/context/ModalContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        {isModalOpen && <Modal />}
        <MainHeader />
      </ModalContext.Provider>
    </>
  );
}

export default App;
