import React from "react";
import CustomButton from "../../Utils/Buttons/CustomButton/CustomButton";

function StartYourSite() {
  return (
    <section className="bg-bgGray flex-full-center flex-col py-24 px-4">
      <h2 className="max-md:text-xl md:text-3xl text-center max-md:mb-4 md:mb-6 font-normal">شروع به طراحی سایت مورد نظر خود کنید</h2>
      <h3 className="max-md:text-xl md:text-3xl text-center font-bold max-md:mb-6 md:mb-8">با جیمناس - تم باشگاهی وردپرس</h3>
      <div className="flex-full-center gap-4 flex-wrap">
        <CustomButton title="مشاهده دموها" />
        <CustomButton href="https://www.rtl-theme.com/gimnas-sport-worpress-theme/" title="خرید نسخه حرفه ایی" />
      </div>
    </section>
  );
}

export default StartYourSite;
