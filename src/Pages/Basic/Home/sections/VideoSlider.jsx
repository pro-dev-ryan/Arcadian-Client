import React from "react";
import SwiperCore, { Autoplay, EffectCreative } from "swiper";
import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import "swiper/css";
import g1 from "../../../../assets/Sliders/1.gif";
import g2 from "../../../../assets/Sliders/2.gif";
import g3 from "../../../../assets/Sliders/3.gif";
import g4 from "../../../../assets/Sliders/4.gif";
import g5 from "../../../../assets/Sliders/5.gif";

const VideoSlider = () => {
  const titleVariant = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.7 },
    },
  };

  const sliderVariant = {
    hide: {
      opacity: 0.2,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const slides = [
    {
      image: g1,
      name: "The amazing Spider-Man",
      console: "Playstation-2",
    },
    {
      image: g2,
      name: "Grand theft auto 6",
      console: "X-box Live",
    },
    {
      image: g3,
      name: "NFS World",
      console: "PSP",
    },
    {
      image: g4,
      name: "Modern-Warefare",
      console: "Playstation-3",
    },
    {
      image: g5,
      name: "Street Fighter",
      console: "Playstation-4",
    },
  ];
  SwiperCore.use([Autoplay, EffectCreative]);
  const slider = (
    <Swiper
      modules={[Autoplay, EffectCreative]}
      autoplay={{ delay: 5000 }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      effect="creative"
      grabCursor={true}
      slidesPerView={2}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} slide={slide}>
          <m.div
            variants={sliderVariant}
            initial="hide"
            whileInView="show"
            slide={slide}
          >
            <img src={slide?.image} alt="" />
            <div className="bg-white text-center">
              <h4>Name: {slide?.name}</h4>
              <p>Console: {slide?.console}</p>
            </div>
          </m.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
  return (
    <div className="mx-8 my-16">
      <m.h2 variants={titleVariant} initial="hide" whileInView="show">
        What do you Want to play???
      </m.h2>
      <m.div
        variants={sliderVariant}
        initial="hide"
        whileInView="show"
        className="mt-10"
      >
        {slider}
      </m.div>
    </div>
  );
};

export default VideoSlider;
