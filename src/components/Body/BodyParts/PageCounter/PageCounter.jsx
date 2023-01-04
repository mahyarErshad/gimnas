import React from "react";
import PageCounterComponent from "./PageCounterComponent";

function PageCounter() {
  return (
    <section className="bg-bgGray py-[5.625rem] flex justify-center items-center flex-wrap max-md:px-4 md:px-8 lg:px-[15%] max-lg:gap-20">
      <PageCounterComponent number="۱۲" text="تعداد صفحات اصلی" />
      <PageCounterComponent number="۰۶" text="صفحات اصلی چندگانه" />
      <PageCounterComponent number="۰۶" text="صفحات اصلی تکی" />
      <PageCounterComponent number="۴۶" text="صفحات داخلی" />
    </section>
  );
}

export default PageCounter;
