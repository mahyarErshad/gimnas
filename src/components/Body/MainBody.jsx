import React from "react";
import homeMultiPagesData from "../../lib/context/HomePagesData/homeMultipages/homeMultipages";
import BodyPageLayout from "./BodyPageLayout/BodyPageLayout";
import PageCounter from "./BodyParts/PageCounter/PageCounter";

function MainBody() {

  return (
    <>
      <PageCounter />
      <BodyPageLayout title="۰۶ صفحات اصلی چندگانه" data={homeMultiPagesData} />
    </>
  );
}

export default MainBody;
