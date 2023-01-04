import React from "react";
import PageCounterComponent from "./PageCounterComponent";

function PageCounter() {
  return (
    <section className="bg-bgGray py-[5.625rem] flex justify-center items-center flex-wrap">
      <PageCounterComponent number="۱۲" text="تعداد صفحات اصلی" />
      <PageCounterComponent number="۰۶" text="صفحات اصلی متعدد" />
      <PageCounterComponent number="۰۶" text="صفحات اصلی تکی" />
      <PageCounterComponent number="۴۶" text="صفحات داخلی" />
    </section>
  );
}

export default PageCounter;
