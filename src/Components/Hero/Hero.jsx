import React from "react";
import dark_arrow from "../../assets/dark-arrow.png";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = (e) => {
    e.preventDefault();
    navigate("/explore");
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero min-vh-100 w-100 ">
      <div className="hero-text">
        <h1>THE MJ.MEDIA</h1>
        <h3>Making Your Brand Loud & Clear</h3>
        <br />
        <br />
        <br />
        <h2 className="underline">Why Mj.MEDIA was born</h2>
        <p>
          In 2022 we saw a fundamental problem in the digital marketing industry
          - digital marketing agencies that lacked proper digital marketing
          expertise, tried to hard-sell services to unknowing SMEs, and over
          promised on results. The end result is unhappy clients wasting a lot
          of money and resources.
        </p>
        <button className="btn rgb-border-btn" onClick={handleExploreClick}>
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
