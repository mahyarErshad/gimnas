import React from "react";

function HeaderSliderButton(props) {
  return (
    <button className="flex flex-row-reverse flex-nowrap items-center">
      <img className="max-w-[3.125rem]" src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </button>
  );
}

export default HeaderSliderButton;
