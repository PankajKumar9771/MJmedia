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
          <h5>
            Our mission is to save companies from wasteful, ineffective digital
            marketing.
          </h5>
          <br />
          <p>
            By adopting a data-driven approach with an integrated digital
            marketing strategy combined with machine-learning technology, we
            help you get maximum results from your budget.By adopting a
            data-driven approach with an integrated digital marketing strategy
            combined with machine-learning technology, we help you get maximum
            results from your budget.
          </p>
          <br />
          <h5>
            We help companies achieve long-term growth by becoming their
            personal marketing department not as a typical “vendor”
          </h5>

          <h6>
            At MJ.MEDIA, we've developed an exclusive team of certified digital
            experts wit deep expertise in conversion optimization (the science
            of converting visitors into customer from your website)
          </h6>
        </div>
      </div>
    </Fade>
  );
};

export default About;
