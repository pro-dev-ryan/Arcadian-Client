import React from "react";
import SwiperCore, { Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/effect-creative";
import "swiper/css";
import g1 from "../../../../assets/Sliders/1.gif";
import g2 from "../../../../assets/Sliders/2.gif";
import g3 from "../../../../assets/Sliders/3.gif";
import g4 from "../../../../assets/Sliders/4.gif";
import g5 from "../../../../assets/Sliders/5.gif";

const VideoSlider = () => {
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
  return (
    <div className="mx-8 my-16">
      <h2>What do you Want to play???</h2>
      <div className="mt-10">
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
              <div slide={slide}>
                <img src={slide?.image} alt="" />
                <div className="bg-white text-center">
                  <h4>Name: {slide?.name}</h4>
                  <p>Console: {slide?.console}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoSlider;
