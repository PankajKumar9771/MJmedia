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
import gallary_11 from "../../assets/urban.jpeg";
import gallary_12 from "../../assets/iplWin.png";
import gallary_13 from "../../assets/chingari.jpeg";
import gallary_14 from "../../assets/googleReviews.png";
import gallary_15 from "../../assets/howzat.jpeg";
import gallary_16 from "../../assets/indiluck.avif";

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
  gallary_11,
  gallary_12,
  gallary_13,
  gallary_14,
  gallary_15,
  gallary_16,
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
