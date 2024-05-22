import React from "react";
import "./RightSide.css";
import Blogs from "../Blogs/Blogs";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        {/* <img src={Home} alt="" /> */}
        <Link to="../getstarted/socialhome">
          <AiTwotoneHome
            style={{ width: "1.8rem", height: "1.8rem", color: "#006666" }}
          />
        </Link>
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <h1 style={{ color: "#006666" }}>Blog Section</h1>
      {/* <TrendCard /> */}
      {/* <button className="button-social r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
      <Blogs />
    </div>
  );
};

export default RightSide;
