import React from "react";

function CustomButton(props) {
  const href = props.href || "#";
  const target = props.target || "";
  return (
    <a href={href} target={target}>
      <button className="bg-primary shadow-sm text-white z-40 transition-all hover:opacity-90 max-md:py-3 md:py-4 max-md:px-6 md:px-8 max-md:text-base md:text-lg lg:text-xl font-medium rounded-[1.875rem] text-center">{props.title}</button>
    </a>
  );
}

export default CustomButton;
