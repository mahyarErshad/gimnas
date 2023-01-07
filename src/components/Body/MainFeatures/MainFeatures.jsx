import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faTabletScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";
import MainFeatureCards from "./MainFeatureCards";

function MainFeatures() {
  const data = [
    {
      title: "وردپرس",
      icon: faWordpress,
    },
    {
      title: "۱۲ دمو",
      icon: faNewspaper,
    },
    {
      title: "کاملا واکنشگر",
      icon: faTabletScreenButton,
    },
    {
      title: "اسلایدر روولوشن",
      icon: faArrowsRotate,
    },
  ];
  return (
    <section className="bg-bgGray flex-full-center flex-col pt-24 pb-14 max-md:px-4 md:px-8 lg:px-[10%]">
      <h3 className="mb-[4.6875rem] font-semibold text-3xl">[ویژگی های اصلی]</h3>
      <div className="w-full flex-full-center gap-4 flex-wrap">
        {data.map((item, index) => {
          return (
            <MainFeatureCards key={index} title={item.title}>
              <FontAwesomeIcon className="w-[3.125rem] h-[3.125rem]" icon={item.icon} />
            </MainFeatureCards>
          );
        })}
      </div>
    </section>
  );
}

export default memo(MainFeatures);
