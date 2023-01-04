import React from "react";
import PageCounterComponent from "./PageCounterComponent";

function PageCounter() {
  return <section className="bg-bgGray py-[5.625rem] flex justify-center items-center flex-wrap">
    <PageCounterComponent number="۱۲" text="تعداد صفحات اصلی" />
  </section>;
}

export default PageCounter;
