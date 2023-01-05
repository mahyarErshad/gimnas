import React from "react";
import fullyResponsive from "../../../assets/images/fullyResponsive.jpg"

function FullyResponsive() {

  return (
    <section className="bg-white flex-full-center flex-col pt-24 pb-14 px-4">
      <h3 className="mb-[4.6875rem] font-semibold text-3xl">[سازگار با انواع نمایشگرها]</h3>
      <img className="w-full" src={fullyResponsive} alt="Fully Responsive" />
    </section>
  );
}

export default FullyResponsive;
