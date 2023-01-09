import React, { memo } from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import fullyResponsive from "../../../assets/images/fullyResponsive.png";

function FullyResponsive() {
  return (
    <section className="bg-white flex-full-center flex-col pt-24 pb-14 px-4">
      <h3 className="mb-[4.6875rem] font-semibold text-3xl">[سازگار با انواع نمایشگرها]</h3>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <MouseParallaxChild className="flex-full-center" factorX={0.3} factorY={0.5}>
          <img className="w-[90%]" src={fullyResponsive} alt="Fully Responsive" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </section>
  );
}

export default memo(FullyResponsive);
