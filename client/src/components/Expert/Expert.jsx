import React, { useState } from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Expert.css";
import { NavLink } from "react-router-dom";
import Expert1 from "./Expert1"
import data from "./ExpertData";
export default function Expert() {
  const [search, setSearch] = useState("");
  // console.log(search);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="ebody">
      <div className="eheader">
        {/* <Header/> */}
        <h2>Our Experts For You</h2>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Experts"
          value={search}
          onChange={handleChange}
        ></input>
      </div>
      <div className="econtainer">
        {data
          .filter((exp, i) => {
            return (
              (search === "" ? exp : exp.Name.includes(search)) ||
              (search.toLocaleLowerCase() === ""
                ? exp
                : exp.Name.toLocaleLowerCase().includes(
                    search.toLocaleLowerCase()
                  ))
            );        
          })
          .map((exp, i) => {
            return (
              <div className="ecard">
                <div className="eimg">
                  <img src={exp.Image} />
                </div>
                <div className="etop-text">
                  <div className="ename">
                    <NavLink to="expert1"><div className="namee"> {exp.Name}</div></NavLink>
                    <p>{exp.Role}</p>
                  </div>
                  <div className="ebottom-text">
                    <a href="https://facebook.com" target="blank">
                      <BsFacebook
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#3b5998",
                        }}
                      />
                    </a>
                    <a href="https://linkedin.com" target="blank">
                      <BsLinkedin
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#0077b5",
                        }}
                      />
                    </a>
                    <a href="https://twitter.com" target="blank">
                      <BsTwitter
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#00acee",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
