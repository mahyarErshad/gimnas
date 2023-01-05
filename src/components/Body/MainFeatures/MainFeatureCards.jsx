import PreviousMap from "postcss/lib/previous-map";
import React from "react";

function MainFeatureCards(props) {
  return (
    <div className="custom-shadow bg-white transition-all rounded-[5px] p-6 mb-8 flex-full-center flex-col max-md:w-full md:w-2/4 lg:w-1/4">
      <img className="w-[3.125rem] h-[3.125rem] mb-[1.5625rem]" src={props.image} alt={props.title} />
      <h5 className="font-normal text-lg">{props.title}</h5>
    </div>
  );
}

export default MainFeatureCards;
