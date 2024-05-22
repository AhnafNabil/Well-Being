import React from "react";
import "./SocialProfile.css";
import ProfilePage from "../ProfilePage/ProfilePage";

const SocialProfile = () => {
  return (
    <div className="socialProfile">
      <div className="blur" style={{ top: "36%", right: "-8rem" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <ProfilePage />
    </div>
  );
};

export default SocialProfile;
