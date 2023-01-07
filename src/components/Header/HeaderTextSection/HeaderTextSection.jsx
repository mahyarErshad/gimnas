import React, { memo } from "react";
import animatedCircles from "../../../lib/context/functions/mouseMoveAnimation";
import InternalNavigationButton from "../../Utils/Buttons/InternalNavigationButton/InternalNavigationButton";
import HeaderTexts from "./HeaderTexts";

function HeaderTextSection() {
  return (
    <div id="HeaderTextSection" onMouseMove={animatedCircles} className="text-white w-full h-full pt-44 overflow-hidden flex justify-start flex-col items-center max-lg:gap-6 lg:gap-8">
      <HeaderTexts />
      <InternalNavigationButton href="#demos" />
    </div>
  );
}
export default memo(HeaderTextSection);
