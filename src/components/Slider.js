import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../scss/modules/slider.scss";

function Slider({ banner = [] }) {
  if (!banner.length) return null;
  return (
    <>
      <div className="slider">
        <Swiper loop={true}>
          {banner.map((item, key) => (
            <SwiperSlide key={key}>
              <img className="slider__item" src={item} alt={`slide-${key}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
