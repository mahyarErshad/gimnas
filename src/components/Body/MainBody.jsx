import React, { memo } from "react";
import homeMultiPagesData from "../../lib/context/HomePagesData/homeMultipages/homeMultipages";
import BodyPageLayout from "./BodyPageLayout/BodyPageLayout";
import PageCounter from "./BodyParts/PageCounter/PageCounter";
import FullyResponsive from "./FullyResponsive/FullyResponsive";
import MainFeatures from "./MainFeatures/MainFeatures";
import WooCommerce from "./WooCommerce/WooCommerce";

function MainBody() {
  return (
    <>
      <PageCounter />
      <BodyPageLayout bgColor="bg-gray" title="صفحات اصلی چندگانه" data={homeMultiPagesData} />
      <FullyResponsive />
      <MainFeatures />
      <WooCommerce />
    </>
  );
}

export default memo(MainBody);
