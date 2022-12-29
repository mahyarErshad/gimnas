import React from "react";

function HeaderNavLinks(props) {
  const color = props.color || "text-white";
  return (
    <li className="relative">
      <a href="#" className={`hover:text-[#bbb] ${color} text-xl px-3 py-2 font-semibold nav-items`}>
        {props.title}
      </a>
    </li>
  );
}

export default HeaderNavLinks;
