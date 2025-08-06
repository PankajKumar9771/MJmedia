// SwiperSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import gallary_3 from "../assets/photo3.jpg";
import gallary_4 from "../assets/photo4.jpg";
import gallary_5 from "../assets/g1.jpg";
import gallary_6 from "../assets/g2.jpg";
const SwiperSlider = () => (
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 3000 }}
    loop={true}
    style={{ width: "100%", height: "500px" }}
  >
    <SwiperSlide>
      <img
        src={gallary_3}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src={gallary_4}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src={gallary_5}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src={gallary_6}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </SwiperSlide>
    {/* More slides */}
  </Swiper>
);

export default SwiperSlider;
