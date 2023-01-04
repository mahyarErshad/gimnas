import React, { memo } from "react";

function BodyPagePhotos(props) {
  return (
    <a target="_blank" href={props.href}>
      <img src={props.image} alt={props.title} className="max-md:w-[35rem] md:w-[21.5625rem] lg:w-[26.625rem]" />
      <h5 className="text-center mt-4 font-medium text-xl">{props.title}</h5>
    </a>
  );
}

export default memo(BodyPagePhotos);
