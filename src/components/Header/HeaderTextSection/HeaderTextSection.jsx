import React, { memo } from "react";
import HeaderSliderButton from "../../Utils/Buttons/HeaderSliderButton/HeaderSliderButton";
import HeaderTexts from "./HeaderTexts";

function HeaderTextSection() {
  return (
    <div className="text-white w-full h-full flex justify-start flex-col items-center max-lg:gap-6 lg:gap-8 max-lg:pt-16 lg:pt-36">
      <HeaderTexts />
      <HeaderSliderButton title="پشتیبانی" image="https://img.icons8.com/windows/32/FFFFFF/help.png" top="top-[75%]" />
      <HeaderSliderButton title="خرید قالب" image="https://img.icons8.com/windows/32/FFFFFF/help.png" top="top-[81.5%]" />
    </div>
  );
}

export default memo(HeaderTextSection);
