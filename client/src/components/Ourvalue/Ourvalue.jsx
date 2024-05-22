import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Ourvalue.module.css";
import data1 from "./data1.json";
import data2 from "./data2.json";
import data3 from "./data3.json";
import data4 from "./data4.json";
import data5 from "./data5.json";
import { sliderSettings } from "../../utils/common";

const Ourvalue = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">
            Need Help Maintaining Your Mental health?
          </span>
          <span className="primaryText">Check these out!</span>
        </div>
        {/* 1 */}
        <div className="orangeText">All you need to fight depression</div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data1.map((card, i) => (
            <SwiperSlide key={i}>
              <div>
                <iframe
                  className="iframe"
                  title={`YouTube Video ${card.videoId}`}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${card.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 2 */}
        <div className="orangeText">All you need to fight anxiety</div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data2.map((card, i) => (
            <SwiperSlide key={i}>
              <div>
                <iframe
                  className="iframe"
                  title={`YouTube Video ${card.videoId}`}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${card.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 3 */}
        <div className="orangeText">All you need to fight panic attacks</div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data3.map((card, i) => (
            <SwiperSlide key={i}>
              <div>
                <iframe
                  className="iframe"
                  title={`YouTube Video ${card.videoId}`}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${card.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 4 */}
        <div className="orangeText">All you need to fight paranoia</div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data4.map((card, i) => (
            <SwiperSlide key={i}>
              <div>
                <iframe
                  className="iframe"
                  title={`YouTube Video ${card.videoId}`}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${card.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 5 */}
        <div className="orangeText">All you need to fight schizofrenia</div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data5.map((card, i) => (
            <SwiperSlide key={i}>
              <div>
                <iframe
                  className="iframe"
                  title={`YouTube Video ${card.videoId}`}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${card.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default Ourvalue;
