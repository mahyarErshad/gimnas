import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

function MainFeatureCards(props) {
  return (
    <div className="shadow-md main-feature-card bg-white transition-all duration-500 rounded-[5px] p-6 mb-8 flex-full-center flex-col max-md:w-full md:w-2/4 lg:w-1/4 hover:bg-primary hover:text-white">
      <div className="w-[5rem] h-[5rem] rounded-[50%] bg-white flex-full-center mb-4">
        <FontAwesomeIcon className="w-[3.125rem] h-[3.125rem]" icon={faWordpress} />
      </div>
      <h5 className="font-normal text-lg">وردپرس</h5>
    </div>
  );
}

export default MainFeatureCards;
