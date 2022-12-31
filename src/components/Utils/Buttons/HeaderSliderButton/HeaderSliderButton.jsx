import React from "react";

function HeaderSliderButton(props) {
  return (
    <button>
      <img src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </button>
  );
}

export default HeaderSliderButton;
