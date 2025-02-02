import React from "react";
import { Carousel, Container } from "react-bootstrap";
import explore1 from "../../assets/explore2.jpg";
import meme from "../../assets/explorememe.jpg";
import ad from "../../assets/googleAD.png";
import "./Banner.css";

const Banner = () => {
  return (
    <Container className="mt-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={explore1}
            alt="Personal Branding"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Personal Branding</h3>
            <p> Build a Strong Online Presence</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={meme} alt="Science Exhibition" />
          <Carousel.Caption className="carousel-caption">
            <h3>Meme Marketing</h3>
            <p>The Power of Viral Content 🚀🎭</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ad} alt="Cultural Fest" />
          <Carousel.Caption className="carousel-caption">
            <h3>Google Ads </h3>
            <p>Drive Traffic & Boost Conversions 🚀</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
