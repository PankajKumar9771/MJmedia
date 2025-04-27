import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

import user_1 from "../../assets/client1.jpg";
import user_2 from "../../assets/client2.jpg";
import user_3 from "../../assets/client3.jpg";
import user_4 from "../../assets/client4.jpg";

const Testimonials = () => {
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
    <div className="testimonials">
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
                  <h3>William Johnson</h3>
                  <span>Educity , & UK</span>
                </div>
              </div>
              <p>
                "Working with MJMedia was a game-changer for our business! Their
                team helped us increase our social media presence and drive real
                sales. Super professional and easy to work with!" 
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user_1" />

                <div>
                  <h3>William Johnson</h3>
                  <span>Educity , & UK</span>
                </div>
              </div>
              <p>
                "MJMedia completely transformed our online marketing strategy.
                From Google Ads to SEO, they handled everything smoothly and
                delivered outstanding results. We're seeing more traffic!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user_1" />

                <div>
                  <h3>William Johnson</h3>
                  <span>Educity , & UK</span>
                </div>
              </div>

              <p>
                "We partnered with MJMedia for our song promotion and the
                results were incredible! The team understood our vision and made
                it viral across Instagram and YouTube. Very happy with their
                creative approach!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user_1" />

                <div>
                  <h3>William Johnson</h3>
                  <span>Educity , & UK</span>
                </div>
              </div>
              <p>
                "MJMedia's expertise in website development and digital
                advertising helped us grow our brand online. Their support team
                is always available, and they truly care about client success.
                Thank you for everything!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
