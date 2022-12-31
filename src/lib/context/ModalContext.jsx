import React, { createContext, useState } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  toggleModal: () => {},
});

export default ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return <ModalContext.Provider value={{ isModalOpen, toggleModal }}>{children}</ModalContext.Provider>;
};
