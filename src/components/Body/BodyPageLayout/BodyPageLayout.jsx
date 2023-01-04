import React from "react";

function BodyPageLayout(props) {
  const bgColor = props.bgColor === "bg-gray" ? "bg-bgGray" : "bg-white";
  return (
    <section className={`${bgColor} flex-full-center pt-24 pb-14 max-md:px-4 md:px-8 lg:px-[10%]`}>
      <h3 className="mb-[4.6875rem] font-semibold text-3xl">{`[ ${props.title} ]`}</h3>
      {props.children}
    </section>
  );
}

export default BodyPageLayout;
