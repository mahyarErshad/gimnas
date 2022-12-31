import React from "react";
import MainHeader from "./components/Header/MainHeader";
import CustomContext from "./lib/context/ModalContext";

function App() {
  return (
    <>
      <CustomContext>
        <MainHeader />
      </CustomContext>
    </>
  );
}

export default App;
