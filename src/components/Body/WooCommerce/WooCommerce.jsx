import React, { memo } from "react";
import wooCommerce from "../../../assets/images/wooCommerce.png";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

function WooCommerce() {
  return (
    <section className="bg-white flex-full-center pt-24 pb-14 px-4">
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <MouseParallaxChild className="flex-full-center" factorX={0.3} factorY={0.5}>
          <img className="lg:w-[65.75rem] lg:h-[37.625rem] max-lg:w-full" src={wooCommerce} alt="WooCommerce" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </section>
  );
}

export default memo(WooCommerce);
