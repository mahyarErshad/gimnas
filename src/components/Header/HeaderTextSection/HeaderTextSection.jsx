import React, { memo } from "react";

function HeaderTextSection() {
  return (
    <div className="text-white w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-2 bg-primary rounded-[50%] w-[12.5rem] h-[12.5rem]">
        <span>12</span>
        <span>Home Pages</span>
      </div>
    </div>
  );
}

export default memo(HeaderTextSection);
