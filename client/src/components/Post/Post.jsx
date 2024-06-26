import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";
import CommentSection from "../CommentSection/CommentSection";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };


  return (
    <div className="Post">
      <div className="detail">
        <span style={{fontSize: "22px", color: "#006666" }}>
          <b>{data.firstname} {data.lastname}</b>
        </span>
        <br />
        <br />
        <span> {data.desc}</span>
      </div>
      <img
        src={ data.image ? import.meta.env.VITE_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />
      <div className="postReact">
        <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike} />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <CommentSection data={data} />
    </div>
  );
};

export default Post;
