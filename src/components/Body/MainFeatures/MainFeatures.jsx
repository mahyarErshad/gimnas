import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MainFeatureCards from "./MainFeatureCards";

function MainFeatures() {
  return (
    <section className="bg-bgGray flex-full-center flex-col pt-24 pb-14 max-md:px-4 md:px-8 lg:px-[10%]">
      <h3 className="mb-[4.6875rem] font-semibold text-3xl">[ویژگی های اصلی]</h3>
      <MainFeatureCards title="وردپرس">
        <FontAwesomeIcon className="w-[3.125rem] h-[3.125rem]" icon={faWordpress} />
      </MainFeatureCards>
    </section>
  );
}

export default MainFeatures;
