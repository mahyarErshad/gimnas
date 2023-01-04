import React from "react";

function PageCounterComponent(props) {
  return (
    <div className="lg:p-8 md:p-6 max-md:p-4 max-md:w-full md:w-2/4 lg:w-1/4 flex-col flex-full-center gap-8">
      <h3 className="text-[5rem] font-bold text-primary m-0 leading-4">{props.number}</h3>
      <h4 className="text-xl font-bold m-0">{props.text}</h4>
    </div>
  );
}

export default PageCounterComponent;
