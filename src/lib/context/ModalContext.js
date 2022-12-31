import { createContext } from "react";

const modalContext = createContext({
  isModalOpen: false,
  toggleModal: () => {},
});

export default modalContext;
