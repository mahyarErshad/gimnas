import React from "react";

function InternalNavigationButton(props) {
  return (
    <a href={props.href || "#"} className="w-7 flex-full-center h-14 border-[1px] rounded-[20px] absolute bottom-[5%]">
      <img src="https://img.icons8.com/ios-filled/18/FFFFFF/double-down.png" alt="arrow" />
    </a>
  );
}

export default InternalNavigationButton;
