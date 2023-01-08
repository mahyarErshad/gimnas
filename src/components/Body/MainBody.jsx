import React, { memo } from "react";
import homeMultiPagesData from "../../lib/context/HomePagesData/homeMultipages/homeMultipages";
import GoToTopButton from "../Utils/Buttons/GoToTopButton/GoToTopButton";
import BodyPageLayout from "./BodyPageLayout/BodyPageLayout";
import PageCounter from "./BodyParts/PageCounter/PageCounter";
import FullyResponsive from "./FullyResponsive/FullyResponsive";
import MainFeatures from "./MainFeatures/MainFeatures";
import StartYourSite from "./StartYourSite/StartYourSite";
import WooCommerce from "./WooCommerce/WooCommerce";

function MainBody() {
  return (
    <>
      <GoToTopButton />
      <PageCounter />
      <BodyPageLayout bgColor="bg-gray" title="صفحات اصلی چندگانه" data={homeMultiPagesData} />
      <FullyResponsive />
      <MainFeatures />
      <WooCommerce />
      <StartYourSite />
    </>
  );
}

export default memo(MainBody);
