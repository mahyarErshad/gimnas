import React, { memo } from "react";

function HeaderNavLinks(props) {
  const href = props.href || "#";
  const color = props.color || "text-white";
  return (
    <li className="relative max-lg:pt-4">
      <a href={href} target={href !== "#" ? "_blank" : ""} className={`hover:text-[#bbb] ${color} text-lg px-3 py-2 font-semibold nav-items whitespace-nowrap max-lg:mr-[13%] max-sm:mr-12`}>
        {props.title}
      </a>
    </li>
  );
}

export default memo(HeaderNavLinks);
