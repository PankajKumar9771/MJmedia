import React from "react";
import "./Social.css";
import gallary_1 from "../../assets/x.png";
import gallary_2 from "../../assets/facebook.png";
import gallary_3 from "../../assets/linkedIn.png";
import gallary_4 from "../../assets/instagram.png";
import gallary_5 from "../../assets/youtube.png";
import gallary_6 from "../../assets/telegram.webp";
import gallary_7 from "../../assets/whatsapp.jpg";
import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="social">
      <div className="gallerySocial">
        <div className="gallery-item">
          <div
            className="image-bg"
            style={{ backgroundImage: `url(${gallary_1})` }}
          ></div>
          <img className="icon" src={gallary_1} alt="icon" />
        </div>
        <div className="gallery-item">
          <div
            className="image-bg"
            style={{ backgroundImage: `url(${gallary_2})` }}
          ></div>
          <img className="icon" src={gallary_2} alt="icon" />
        </div>
        <div className="gallery-item">
          <div
            className="image-bg"
            style={{ backgroundImage: `url(${gallary_3})` }}
          ></div>
          <img className="icon" src={gallary_3} alt="icon" />
        </div>
        <div className="gallery-item">
          <div
            className="image-bg"
            style={{ backgroundImage: `url(${gallary_4})` }}
          ></div>
          <img className="icon" src={gallary_4} alt="icon" />
        </div>
        <div className="gallery-item">
          <div
            className="image-bg"
            style={{ backgroundImage: `url(${gallary_5})` }}
          ></div>
          <img className="icon" src={gallary_5} alt="icon" />
        </div>

        <div className="gallery-item">
          <div
            className="image-bg"
            style={{ backgroundImage: `url(${gallary_7})` }}
          ></div>
          <img className="icon" src={gallary_7} alt="icon" />
        </div>
        <div className="gallery-item">
          <div
            className="image-bg"
            style={{ backgroundImage: `url(${gallary_6})` }}
          ></div>
          <img className="icon" src={gallary_6} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Social;
