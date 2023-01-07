import React, { memo } from "react";
import wooCommerce from "../../../assets/images/wooCommerce.png";

function WooCommerce() {
  return (
    <section className="bg-white flex-full-center pt-24 pb-14 px-4">
      <img className="lg:w-[65.75rem] lg:h-[37.625rem] max-lg:w-full" src={wooCommerce} alt="WooCommerce" />
    </section>
  );
}

export default memo(WooCommerce);
