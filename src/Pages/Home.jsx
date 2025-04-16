import React, { useState } from "react";
import Hero from "../Components/Hero/Hero";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import Title from "../Components/Title/Title";
import Campus from "../Components/Campus/Campus";
import Marquee from "../Components/Marquee/Marquee";
import Social from "../Components/Social/Social";
import About from "../Components/About/About";
import Programs from "../Components/Programs/Program";
import Faculities from "../Components/Faculities/Faculities";
import ContactForm from "../Components/ContactForm/ContactForm";

const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="home">
      <div>
        <Hero />
        <div className="container">
          <Title subtitle={"Our Services"} title={"What We Offer"} />
          <Programs />
        </div>
        <About setPlayState={setPlayState} />
        <Title subtitle={""} title={"Platform We Use"} />
        <Social />
        <Title subtitle={"Clients"} title={"Our Clients"} />
        <Faculities />
        <Title subtitle={""} title={"More Than 500+ Brands Trust MJ.Media"} />
        <Marquee />
        <Title subtitle={"Contact us"} title={"Get in Touch"} />
        <ContactForm />

        <VideoPlayer setPlayState={setPlayState} playState={playState} />
      </div>
    </div>
  );
};

export default Home;
