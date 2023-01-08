import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function GoToTopButton() {
  function handleScroll() {
    scroll({
      top: 0,
    });
  }
 
  return (
    <>
      <button onClick={handleScroll} className={`cursor-pointer bg-primary rounded-[4px] p-2 flex justify-center items-center border border-white fixed bottom-[5%] left-[5%] transition-all duration-300 w-10 h-10 hover:border-primary hover:bg-white hover:text-primary text-white ${scrollHeight ? "goToTopButton" : ""}`}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </>
  );
}

export default GoToTopButton;
