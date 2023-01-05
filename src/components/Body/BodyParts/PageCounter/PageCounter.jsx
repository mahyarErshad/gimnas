import React from "react";
import PageCounterComponent from "./PageCounterComponent";
import HeaderSliderButton from "../../../Utils/Buttons/HeaderSliderButton/HeaderSliderButton"

function PageCounter() {
  return (
    <section id="page-counter" className="bg-white py-[5.625rem] flex justify-center items-center flex-wrap max-md:px-4 md:px-8 lg:px-[15%] max-lg:gap-20">
      <HeaderSliderButton onClick={() => {modalContext.setIsModalOpen(true)}} title="پشتیبانی" image="https://img.icons8.com/windows/32/FFFFFF/help.png" top="top-[75%]" />
      <HeaderSliderButton onClick={() => window.open("https://www.rtl-theme.com/gimnas-sport-worpress-theme/", "_blank")} title="خرید قالب" image="https://img.icons8.com/external-creatype-outline-colourcreatype/28/FFFFFF/external-basket-miscellaneous-user-interface-v2-creatype-outline-colourcreatype.png" top="top-[81.5%]" />
      <PageCounterComponent number="۱۲" text="تعداد صفحات اصلی" />
      <PageCounterComponent number="۰۶" text="صفحات اصلی چندگانه" />
      <PageCounterComponent number="۰۶" text="صفحات اصلی تکی" />
      <PageCounterComponent plus number="۴۶" text="صفحات داخلی" />
    </section>
  );
}

export default PageCounter;
