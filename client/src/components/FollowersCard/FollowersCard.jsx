import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import { Followers } from "../../utils/FollowersData";
import { NavLink } from "react-router-dom";
import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      {/* <NavLink to="socialprofile">
        <button className="button-social profile-button">My Profile</button>
      </NavLink> */}
      <h3>People you may know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
