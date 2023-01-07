import React from "react";
import CustomButton from "../../Utils/Buttons/CustomButton/CustomButton";

function HeaderTexts() {
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-primary rounded-[50%] w-[12.5rem] h-[12.5rem] relative">
        <span className="text-[5rem] font-black absolute top-[12%]">۱۲</span>
        <span className="text-lg font-black absolute top-[60%]">صفحه اصلی</span>
      </div>
      <div className="flex justify-center items-center px-4">
        <p className="font-bold max-md:text-xl md:text-3xl lg:text-5xl text-center">
          جیمناس - <span className="text-inherit text-primary font-bold">محبوب ترین قالب باشگاهی ورزشی </span> وردپرس
        </p>
      </div>
      <div className="flex justify-center">
        <CustomButton href="#demos" title="مشاهده همه دموها" />
      </div>
    </>
  );
}

export default HeaderTexts;
