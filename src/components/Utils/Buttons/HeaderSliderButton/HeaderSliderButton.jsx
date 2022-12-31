import React from "react";

function HeaderSliderButton(props) {
  return (
    <button className="flex flex-nowrap items-center z-10 text-xl outline-none border-none w-[10.5rem] h-[3.125rem]">
      <span className="bg-[#232323] text-white flex-grow h-full">{props.title}</span>
      <img className="w-[3.125rem] h-full flip bg-primary" src={props.image} alt={props.title} />
    </button>
  );
}

export default HeaderSliderButton;
