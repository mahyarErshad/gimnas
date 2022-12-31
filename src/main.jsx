import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ModalContext from "./lib/context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContext.Provider value={{ isModalOpen: false }}>
      <App />
    </ModalContext.Provider>
  </React.StrictMode>
);
