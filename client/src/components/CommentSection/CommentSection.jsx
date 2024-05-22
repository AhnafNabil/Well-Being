import React, { useState } from "react";
import "./CommentSection.css";
import { useDispatch, useSelector } from "react-redux";
import { commentPost } from "../../actions/uploadAction";

const CommentSection = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [comments, setComments] = useState(data?.comments);
  const [comment, setComment] = useState("");

  const handleClick = async () => {
    const finalComment = `${user.firstname} ${user.lastname} ---> ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, data._id));
    setComments(newComments);
    setComment("");
  };

  console.log(data);
  return (
    <div>
      <div className="commentpage">
        <div className="comments">
          <input
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="button-social c-button"
            disabled={!comment}
            onClick={handleClick}
          >
            Comment
          </button>
        </div>
        <div>
          <h3>Comments</h3>
          {data?.comments.map((c, i) => (
            <h4 key={i}>{c}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
