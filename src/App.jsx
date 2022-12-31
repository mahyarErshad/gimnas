import React, { useContext } from "react";
import MainHeader from "./components/Header/MainHeader";
import Modal from "./components/Utils/Modal/Modal";
import CustomContext from "./lib/context/CustomContext";

function App() {
  const { modalIsOpen } = useContext(CustomContext);
  return (
    <>
      {modalIsOpen && <Modal />}
      <MainHeader />
    </>
  );
}

export default App;
