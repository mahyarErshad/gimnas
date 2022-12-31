import React from "react";
import MainHeader from "./components/Header/MainHeader";
import ModalContext from "./lib/context/ModalContext";

function App() {
  return (
    <>
      <ModalContext>
        <MainHeader />
      </ModalContext>
    </>
  );
}

export default App;
