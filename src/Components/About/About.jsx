import React from "react";
import { Fade } from "react-swift-reveal";

import about_img from "../../assets/memePhoto.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";

const About = ({ setPlayState }) => {
  return (
    <Fade>
      <div className="about">
        <div className="about-left">
          <img className="about-img" src={about_img} alt="about_img" />
          <img
            className="play-icon"
            onClick={() => setPlayState(true)}
            src={play_icon}
            alt="play_icon"
          />
        </div>

        <div className="about-right">
          <h3>ABOUT US</h3>
          <h2>Mission</h2>
          <h5> Welcome to MJ Media</h5>
          <br />
          <p>
            Where creativity meets conversion! 🚀 We’re not just another digital
            marketing agency — we’re your growth partners. From viral social
            media campaigns to high-converting ad strategies, we help your brand
            shine in the digital spotlight. Whether you're launching a new
            business or scaling an empire, MJ Media brings bold ideas, smart
            strategies, and real results.
          </p>
          <br />
          <h5>
            MJ Media is a results-driven digital marketing agency dedicated to
            helping brands grow in the online world. We specialize in social
            media marketing, SEO, paid advertising, branding, and content
            creation — all tailored to meet your business goals.
          </h5>

          <h6>
            At MJ Media, we believe in creativity, consistency, and smart
            strategies. Whether you're a startup or an established brand, we
            bring the tools and expertise to boost your online presence and
            drive real results. Let us help you turn clicks into customers, and
            ideas into impact.
          </h6>
        </div>
      </div>
    </Fade>
  );
};

export default About;
