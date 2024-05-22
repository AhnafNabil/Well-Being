import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>
              Discover <br />
              Your-self <br /> in a New Way
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Share your stories with us</span>
            <span className="secondaryText">Acknowledge your positive attributes</span>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={7800} end={8000} duration={4} />
                    <span>+</span>
                </span>
                <span className="secondaryText">Total Users</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={1950} end={2000} duration={4} />
                    <span>+</span>
                </span>
                <span className="secondaryText">Shared Stories</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                    <CountUp end={28} />
                    <span>+</span>
                </span>
                <span className="secondaryText">Acknowledgement</span>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./pic-6.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
