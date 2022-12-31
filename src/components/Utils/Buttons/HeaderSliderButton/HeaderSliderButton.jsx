import React, { useState } from "react";

function HeaderSliderButton(props) {
    const [open, setOpen] = useState(false)
  return (
    <button className={`flex flex-nowrap items-center z-10 text-xl outline-none border-none w-[10.5rem] h-[3.125rem] absolute right-[-7.375rem] hover:opacity-90 transition-all duration-500 ${props.top}`}>
      <span className="bg-[#232323] text-white flex-grow h-full flex-full-center">{props.title}</span>
      <div className="h-full bg-primary w-[3.125rem] flex-full-center">
        <img className="flip" src={props.image} alt={props.title} />
      </div>
    </button>
  );
}

export default HeaderSliderButton;
