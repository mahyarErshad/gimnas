import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function MainFeatureCards(props) {
  return (
    <div className="custom-shadow bg-white transition-all rounded-[5px] p-6 mb-8 flex-full-center flex-col max-md:w-full md:w-2/4 lg:w-1/4 hover:text-primary">
      {/* <img className="w-[3.125rem] h-[3.125rem] mb-[1.5625rem] hover:text-primary" src={props.image} alt={props.title} /> */}
      <FontAwesomeIcon icon={faCoffee} />
      <h5 className="font-normal text-lg text-inherit">{props.title}</h5>
    </div>
  );
}

export default MainFeatureCards;
