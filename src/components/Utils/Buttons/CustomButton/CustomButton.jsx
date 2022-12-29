import React from "react";

function CustomButton(props) {
    const href = props.href || "#"
  return (
    <a href={href}>
      <button className="bg-primary transition-all hover:opacity-90 max-md:py-3 md:py-4 max-md:px-6 md:px-8 max-md:text-base md:text-lg lg:text-xl font-medium rounded-[1.875rem] text-center">{props.title}</button>
    </a>
  );
}

export default CustomButton;
