import React from "react";

function BodyPagePhotos(props) {
  return (
    <a>
      <img src={homeGymDefault} alt="homeGymDefault" className="max-md:w-[35rem] md:w-[21.5625rem] lg:w-[26.625rem]" />
      <h5 className="text-center mt-4 font-medium text-xl">{props.title}</h5>
    </a>
  );
}

export default BodyPagePhotos;
