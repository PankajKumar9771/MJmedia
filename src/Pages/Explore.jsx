import React from "react";
import Hero from "../Components/Hero/Hero";
import Title from "../Components/Title/Title";
import Banner from "../Components/Banner/Banner";

const Explore = () => {
  return (
    <div>
      <Hero />
      <Title
        subtitle={"Welcome to MJMedia."}
        title={" where we nurture young minds for a brighter Businessess."}
      />
      <Banner />
    </div>
  );
};

export default Explore;
