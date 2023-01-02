import React from "react";
import "./InternalNavigationButton.css";

function InternalNavigationButton(props) {
  return (
    <a href={props.href || "#"} className="w-7 z-40 flex justify-center items-end h-14 border-[1px] rounded-[20px] absolute bottom-[5%] pb-1 transition-all hover:border-2 max-lg:hidden">
      <img className="arrow-animation" src="https://img.icons8.com/ios-filled/18/FFFFFF/double-down.png" alt="arrow" />
    </a>
  );
}

export default InternalNavigationButton;
