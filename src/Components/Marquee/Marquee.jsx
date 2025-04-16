import React from "react";
import "./Marquee.css";
import gallary_1 from "../../assets/Dr.webp";
import gallary_2 from "../../assets/logitech.webp";
import gallary_3 from "../../assets/games.webp";
import gallary_4 from "../../assets/junglee-games.webp";
import gallary_5 from "../../assets/josh.webp";
import gallary_6 from "../../assets/Tradex.webp";
import gallary_7 from "../../assets/PokerStars.webp";
import gallary_8 from "../../assets/infinix.webp";
import gallary_9 from "../../assets/Omen.webp";
import gallary_10 from "../../assets/boat.webp";
import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-router-dom";

const images = [
  gallary_1,
  gallary_2,
  gallary_3,
  gallary_4,
  gallary_5,
  gallary_6,
  gallary_7,
  gallary_8,
  gallary_9,
  gallary_10,
];

const Marquee = () => {
  return (
    <div className="Marquee">
      <div className="marquee-container">
        <div className="marquee">
          {[...images, ...images].map((img, index) => (
            <div className="marquee-item" key={index}>
              <img src={img} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Marquee;
