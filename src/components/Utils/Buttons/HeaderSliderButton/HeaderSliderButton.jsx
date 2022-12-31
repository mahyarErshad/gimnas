import React, { memo, useState } from "react";

function HeaderSliderButton(props) {
  const [open, setOpen] = useState(false);
  const right = open ? "right-0" : "right-[-7.375rem]";
  return (
    <button onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className={`flex flex-nowrap items-center z-10 text-xl outline-none border-none w-[10.5rem] h-[3.125rem] absolute ${right} hover:opacity-90 transition-all duration-500 ${props.top}`}>
      <span onClick={props.onClick} className="bg-[#232323] text-white flex-grow h-full flex-full-center">{props.title}</span>
      <div className="h-full bg-primary w-[3.125rem] flex-full-center">
        <img className="flip" src={props.image} alt={props.title} />
      </div>
    </button>
  );
}

export default memo(HeaderSliderButton);
