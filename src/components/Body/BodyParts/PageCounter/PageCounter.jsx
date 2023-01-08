import React, { memo, useContext, useState } from "react";
import PageCounterComponent from "./PageCounterComponent";
import HeaderSliderButton from "../../../Utils/Buttons/HeaderSliderButton/HeaderSliderButton"
import ModalContext from "../../../../lib/context/ModalContext";
import ScrollTrigger from "react-scroll-trigger";


function PageCounter() {
  const modalContext = useContext(ModalContext);
  const [counterStart, setCounterStart] = useState(false);
  
  return (
    <section id="page-counter" className="bg-white relative z-10 py-[5.625rem]">
      <HeaderSliderButton onClick={() => {modalContext.setIsModalOpen(true)}} title="پشتیبانی" image="https://img.icons8.com/windows/32/FFFFFF/help.png" top="top-[75%]" />
      <HeaderSliderButton onClick={() => window.open("https://www.rtl-theme.com/gimnas-sport-worpress-theme/", "_blank")} title="خرید قالب" image="https://img.icons8.com/external-creatype-outline-colourcreatype/28/FFFFFF/external-basket-miscellaneous-user-interface-v2-creatype-outline-colourcreatype.png" top="top-[81.5%]" />
    <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
    <div className="flex justify-center items-start max-md:px-4 md:px-8 flex-wrap w-full h-full lg:px-[15%] max-lg:gap-20">
      <PageCounterComponent counterStart={counterStart} number={12} text="تعداد صفحات اصلی" />
      <PageCounterComponent counterStart={counterStart} number={6} text="صفحات اصلی چندگانه" />
      <PageCounterComponent counterStart={counterStart} number={6} text="صفحات اصلی تکی" />
      <PageCounterComponent counterStart={counterStart} plus number={46} text="صفحات داخلی" />
    </div>
    </ScrollTrigger>
    </section>
  );
}

export default memo(PageCounter);
