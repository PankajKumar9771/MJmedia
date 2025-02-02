import React, { useRef } from "react";
import "./Faculities.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Faculities = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="faculities">
      <img
        src={next_icon}
        className="next-btn"
        onClick={slideForward}
        alt="next-icon"
      />
      <img
        src={back_icon}
        className="back-btn"
        onClick={slideBackward}
        alt="back-icon"
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user_1" />

                <div>
                  <h3> John Doe</h3>
                  <p>Social Marketing</p>
                  <span>
                    "Incredible impact! Our brand visibility skyrocketed thanks
                    to effective social media strategies!"
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user_1" />

                <div>
                  <h3>Jane Smith</h3>
                  <p>Meme Marketing</p>
                  <span>
                    {" "}
                    Hilarious and engaging memes boosted our reach and made us
                    go viral!
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user_1" />

                <div>
                  <h3> Emily Johnson</h3>
                  <p>Personal Branding</p>
                  <span>
                    Professional and tailored approach helped elevate my online
                    presence and attract opportunities!
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_1" />

                <div>
                  <h3>Michael Brown</h3>
                  <p>Social Media Marketing</p>
                  <span>
                    Boosted our brand visibility and engagement with targeted,
                    creative social media strategies!
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_1" />

                <div>
                  <h3>Sophia Davis </h3>
                  <p>Google ADS</p>
                  <span>
                    Increased traffic and conversions significantly with
                    well-targeted, high-performing Google Ads campaigns!
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_1" />

                <div>
                  <h3>David Wilson</h3>
                  <p>Personal Branding</p>
                  <span>
                    Personal branding transformed my online presence, making me
                    stand out and attracting more professional opportunities!
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Faculities;
