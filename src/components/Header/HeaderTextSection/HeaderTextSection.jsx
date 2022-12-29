import React, { memo } from "react";

function HeaderTextSection() {
  return (
    <div className="text-white w-full h-full flex justify-start flex-col items-center max-lg:gap-6 lg:gap-8 max-lg:pt-16 lg:pt-36">
      <div className="flex justify-center items-center flex-col bg-primary rounded-[50%] w-[12.5rem] h-[12.5rem] relative">
        <span className="text-[5rem] font-black absolute top-[12%]">12</span>
        <span className="text-lg font-black absolute top-[60%]">صفحه اصلی</span>
      </div>
      <div className="flex justify-center items-center px-4">
        <p className="font-bold max-md:text-xl md:text-3xl lg:text-5xl text-center">
          جیمناس - <span className="text-inherit text-primary font-bold">محبوب ترین قالب باشگاهی ورزشی </span> وردپرس
        </p>
      </div>
      <div className="flex justify-center">
        <a href="#">
          <button className="bg-primary transition-all hover:opacity-90 max-md:py-3 md:py-4 max-md:px-6 md:px-8 max-md:text-base md:text-lg lg:text-xl font-medium rounded-[1.875rem] text-center">مشاهده همه دموها</button>
        </a>
      </div>
    </div>
  );
}

export default memo(HeaderTextSection);
