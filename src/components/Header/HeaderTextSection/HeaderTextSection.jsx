import React, { memo } from "react";

function HeaderTextSection() {
  return (
    <div className="text-white w-full h-full flex justify-center items-start max-lg:pt-16 lg:pt-36">
      <div className="flex justify-center items-center flex-col bg-primary rounded-[50%] w-[12.5rem] h-[12.5rem] relative">
        <span className="text-[5rem] font-black absolute top-[12%]">12</span>
        <span className="text-lg font-black absolute top-[60%]">صفحه اصلی</span>
      </div>
    </div>
  );
}

export default memo(HeaderTextSection);
