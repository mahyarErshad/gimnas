import React from "react";
import BodyPageLayout from "./BodyPageLayout/BodyPageLayout";
import PageCounter from "./BodyParts/PageCounter/PageCounter";
import homeGymDefault from "../../assets/images/homeMultipages/homeGymDefault.jpg";

function MainBody() {
  return (
    <>
      <PageCounter />
      <BodyPageLayout title="۰۶ صفحات اصلی چندگانه">
        <img src={homeGymDefault} alt="homeGymDefault" className="max-md:w-[35rem] md:w-[21.5625rem] lg:w-[26.625rem]" />
        <h5 className="text-center mt-4 font-medium text-xl">صفحه اصلی ۱ (صفحه پیش فرض)</h5>
      </BodyPageLayout>
    </>
  );
}

export default MainBody;
