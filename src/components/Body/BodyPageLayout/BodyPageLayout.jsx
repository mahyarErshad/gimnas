import React, { memo } from "react";
import BodyPagePhotos from "./BodyPagePhotos";

function BodyPageLayout(props) {
  const bgColor = props.bgColor === "bg-gray" ? "bg-bgGray" : "bg-white";
  return (
    <section className={`${bgColor} flex-full-center flex-col pt-24 pb-14 max-md:px-4 md:px-8 lg:px-[10%]`}>
      <h3 className="mb-[4.6875rem] font-semibold text-3xl">{`[ ${props.title} ]`}</h3>
      <div className="flex-full-center flex-wrap w-full max-md:gap-4 md:gap-6 lg:gap-8">
        {props.data.map((item, index) => {
          return <BodyPagePhotos key={index} image={item.image} title={item.title} href={item.href} />;
        })}
      </div>
    </section>
  );
}

export default memo(BodyPageLayout);
