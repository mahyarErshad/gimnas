import React, { useState } from "react";
import MainBody from "./components/Body/MainBody";
import Footer from "./components/Footer/Footer";
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
        <MainBody />
        <Footer />
      </ModalContext.Provider>
    </>
  );
}

export default App;
