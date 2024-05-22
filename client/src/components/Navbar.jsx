import React from "react";
import "./Header/Header.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flexCenter h-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="expert">Expert</NavLink>
          <NavLink to="ourvalue">Meditation</NavLink>
          <NavLink to="contactus">Contact Us</NavLink>
          <NavLink to="getstarted">Get Started</NavLink>
        </ul>
      </nav>
    </div>
  );
}
