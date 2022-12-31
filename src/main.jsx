import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CustomContext from "./lib/context/CustomContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomContext.Provider value={{ modalIsOpen: false }}>
      <App />
    </CustomContext.Provider>
  </React.StrictMode>
);
