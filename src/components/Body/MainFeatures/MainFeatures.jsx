import { faChrome, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faFileCode, faLifeRing, faNewspaper, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { faTabletScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
    {
      title: "ویژوال کامپوزر",
      icon: faArrowsUpDownLeftRight,
    },
    {
      title: "پنل ادمین قدرتمند",
      icon: faGear,
    },
    {
      title: "عناصر پویا",
      icon: faPaperPlane,
    },
    {
      title: "بینهایت رنگ",
      icon: faEyeDropper,
    },
    {
      title: "سازگار با سئو",
      icon: faMagnifyingGlass,
    },
    {
      title: "سازگار با میل چیمپ",
      icon: faEnvelope,
    },
    {
      title: "چندین قالب برای وبلاگ",
      icon: faRectangleList,
    },
    {
      title: "کد نویسی تمیز",
      icon: faCode,
    },
    {
      title: "سازگار با مرورگرها",
      icon: faChrome,
    },
    {
      title: "فریم ورک ریداکس",
      icon: faThumbsUp,
    },
    {
      title: "مستندسازی عالی",
      icon: faFileCode,
    },
    {
      title: "پشتیبانی ۲۴/۷",
      icon: faLifeRing,
    },
  ];
  return (
    <section id="features" className="bg-bgGray flex-full-center flex-col pt-24 pb-14 max-md:px-4 md:px-8 lg:px-[10%]">
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
