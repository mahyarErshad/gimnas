import React, { memo, useContext } from "react";
import animatedCircles from "../../../lib/context/functions/mouseMoveAnimation";
import ModalContext from "../../../lib/context/ModalContext";
import HeaderSliderButton from "../../Utils/Buttons/HeaderSliderButton/HeaderSliderButton";
import InternalNavigationButton from "../../Utils/Buttons/InternalNavigationButton/InternalNavigationButton";
import HeaderTexts from "./HeaderTexts";

function HeaderTextSection() {
  const modalContext = useContext(ModalContext);
  return (
    <div id="HeaderTextSection" onMouseMove={animatedCircles} className="text-white w-full h-full pt-44 overflow-hidden flex justify-start flex-col items-center max-lg:gap-6 lg:gap-8">
      <HeaderTexts />
      <HeaderSliderButton onClick={() => {modalContext.setIsModalOpen(true)}} title="پشتیبانی" image="https://img.icons8.com/windows/32/FFFFFF/help.png" top="top-[75%]" />
      <HeaderSliderButton onClick={() => window.open("https://www.rtl-theme.com/gimnas-sport-worpress-theme/", "_blank")} title="خرید قالب" image="https://img.icons8.com/external-creatype-outline-colourcreatype/28/FFFFFF/external-basket-miscellaneous-user-interface-v2-creatype-outline-colourcreatype.png" top="top-[81.5%]" />
      <InternalNavigationButton />
    </div>
  );
}
export default memo(HeaderTextSection);
