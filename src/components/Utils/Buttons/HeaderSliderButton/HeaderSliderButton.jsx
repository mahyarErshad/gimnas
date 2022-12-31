import React from "react";

function HeaderSliderButton(props) {
  return (
    <button className="flex flex-nowrap items-center z-10 text-xl outline-none border-none w-[10.5rem] h-[3.125rem]">
      <span className="bg-[#232323] text-white flex-grow h-full flex items-center justify-center">{props.title}</span>
      <div className="h-full bg-primary w-[3.125rem]">
        <img className="flip" src={props.image} alt={props.title} />
      </div>
    </button>
  );
}

export default HeaderSliderButton;
