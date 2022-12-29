import React, { memo } from "react";
import HeaderTextSection from "./HeaderTextSection/HeaderTextSection";
import Navbar from "./Navbar/Navbar";

function MainHeader() {
  return (
    <header>
      <Navbar />
      <HeaderTextSection />
    </header>
  );
}

export default memo(MainHeader);
