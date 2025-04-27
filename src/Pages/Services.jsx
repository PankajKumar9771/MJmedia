import React from "react";
import Title from "../Components/Title/Title";
import TeachingMethod from "../Components/TeachingMethod/TeachingMethod";

const Services = () => {
  return (
    <div>
      <Title subtitle={"Our Services"} title={"What We Offer"} />
      {/* <Programs /> */}
     <TeachingMethod/>
    </div>
  );
};

export default Services;
