import React from "react";
import "./GetStarted.css";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Well-Being</span>
          <span className="secondaryText">
            Sign in and find the solution of your problems.
            <br /> Find your positive attributes.
          </span>
          <NavLink to="getstarted">
            <button className="button">Get Started</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
