import React, { memo, useContext } from "react";
import animatedCircles from "../../../lib/context/functions/mouseMoveAnimation";
import ModalContext from "../../../lib/context/ModalContext";
import InternalNavigationButton from "../../Utils/Buttons/InternalNavigationButton/InternalNavigationButton";
import HeaderTexts from "./HeaderTexts";

function HeaderTextSection() {
  const modalContext = useContext(ModalContext);
  return (
    <div id="HeaderTextSection" onMouseMove={animatedCircles} className="text-white w-full h-full pt-44 overflow-hidden flex justify-start flex-col items-center max-lg:gap-6 lg:gap-8">
      <HeaderTexts />
      <InternalNavigationButton />
    </div>
  );
}
export default memo(HeaderTextSection);
