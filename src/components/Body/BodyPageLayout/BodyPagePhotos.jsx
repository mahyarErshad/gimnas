import React, { memo } from "react";

function BodyPagePhotos(props) {
  return (
    <a target="_blank" href={props.href} className="pb-4 rounded-md transition-all hover:text-primary" data-aos="fade-up" data-aos-duration="1000">
      <img src={props.image} alt={props.title} className="custom-shadow max-md:w-[35rem] md:w-[21.5625rem] lg:w-[26.625rem]" />
      <h5 className="text-center mt-4 font-medium text-xl">{props.title}</h5>
    </a>
  );
}

export default memo(BodyPagePhotos);
