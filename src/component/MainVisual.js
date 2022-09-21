import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const DB = [
  {
    id: 1,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
  {
    id: 2,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
  {
    id: 3,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
  {
    id: 4,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
  {
    id: 5,
    content: "BUILDING A FUTURE IN\nWHICH\nPEOPLE LIVE IN HARMONY\nWITH NATURE",
    desc: "WWF와 함께 만드는\n사람과 자연이 조화로운 미래",
  },
];


const MainVisual = () => {
  const [idx, setIDX] = useState();
  useEffect(() => {
    setIDX(0);
  }, []);
  const swiperStyle = {
    width: "100%",
  };

  return (
    <section className="MainVisual">
      <Swiper
        style={swiperStyle}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mainVisual"
      >
        {DB.map((slide) => (
          <SwiperSlide>
            <figure className={"item0" + slide.id}>
              <div className="container">
                <div className="visual_text">
                  <h2>{slide.content}</h2>
                  <p>{slide.desc}</p>
                  <span>
                    <a href="/">MORE</a>
                  </span>
                </div>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainVisual;
