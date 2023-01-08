import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

function GoToTopButton() {
  const [scrollHeight, setScrollHeight] = useState(false);
  const root = document.getElementById("root");
  function handleScroll() {
    root.scroll({
      top: 0,
    });
  }
  useEffect(() => {
    root.addEventListener("scroll", () => {
      if (root.scrollTop > 1000) {
        setScrollHeight(true);
      } else {
        setScrollHeight(false);
      }
    });
  }, [scrollHeight]);

  return (
    <>
      <button onClick={handleScroll} className={`cursor-pointer bg-primary z-30 rounded-[4px] p-2 flex justify-center items-center border border-white fixed bottom-[5%] left-[5%] transition-all duration-300 w-10 h-10 hover:border-primary hover:bg-white hover:text-primary text-white ${scrollHeight ? "goToTopButton" : ""}`}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </>
  );
}

export default GoToTopButton;
