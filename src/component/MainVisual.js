import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

const MainVisual = () => {
  const swiperStyle = {
    width: "100%",
    height: "100vh",
  }

  return (
    <Swiper
    style={swiperStyle}
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  );
};

export default MainVisual;
