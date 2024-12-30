import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="search-bar r-head flexColStart">
          <input
            type="text"
            placeholder="Search Disorders"
            value={search}
            onChange={handleChange}
          ></input>
        </div>
        <div className="r-head flexColStart">
          <span className="orangeText">Different</span>
          <span className="primaryText">Mental Disorders</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.filter((card) => {
            return (
              (search === "" ? card : card.name.includes(search)) ||
              (search.toLocaleLowerCase() === ""
                ? card
                : card.name.toLocaleLowerCase().includes(search))
            );
          }).length === 0 ? (
            <h2>Sorry! No disorder found</h2>
          ) : (
            data
              .filter((card) => {
                return (
                  (search === "" ? card : card.name.includes(search)) ||
                  (search.toLocaleLowerCase() === ""
                    ? card
                    : card.name.toLocaleLowerCase().includes(search))
                );
              })
              .map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <img src={card.image} alt="home" height={200} />
                    <span className="secondaryText r-price">
                      <span style={{ color: "orange" }}>MENTAL </span>
                      <span>{card.price}</span>
                    </span>
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText">{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
