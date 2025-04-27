import React from "react";
import "./Program.css";
import program_1 from "../../assets/personal.jpg";
import program_2 from "../../assets/MemesNewAMa.jpg";
import program_3 from "../../assets/socialMedia.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>PERSONAL BRANDING</p>
          <a href="/personal-branding">
            I help individuals build a strong digital presence by showcasing
            their skills, expertise, and unique strengths.
          </a>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Meme Marketing</p>
          <a href="/meme-marketing">
            Meme marketing uses humor and trends to boost engagement, increase
            brand visibility, and create fun, shareable content that connects
            with audiences. 🚀😄
          </a>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>SOCIAL MEDIA MARKETING</p>
          <a href="/social-media-marketing">
            Social media marketing leverages platforms to increase brand
            awareness, engage audiences, and drive conversions through targeted
            content.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;
