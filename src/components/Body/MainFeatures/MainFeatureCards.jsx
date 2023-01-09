import React from "react";

function MainFeatureCards(props) {
  return (
    <div className="shadow-md h-[10.75rem] main-feature-card bg-white transition-all duration-500 rounded-[5px] p-6 flex-full-center flex-col text-center max-md:w-[45%] md:w-[23%] hover:bg-primary hover:text-white" data-aos="flip-right" data-aos-duration="1000">
      <div className="w-[5rem] h-[5rem] rounded-[50%] bg-white flex-full-center mb-4">{props.children}</div>
      <h5 className="font-normal text-lg">{props.title}</h5>
    </div>
  );
}

export default MainFeatureCards;
