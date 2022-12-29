import React, { memo } from "react";

function HeaderNavLinks(props) {
  const color = props.color || "text-white";
  return (
    <li className="relative max-lg:pt-4">
      <a href="#" className={`hover:text-[#bbb] ${color} text-lg px-3 py-2 font-semibold nav-items whitespace-nowrap`}>
        {props.title}
      </a>
    </li>
  );
}

export default memo(HeaderNavLinks);
