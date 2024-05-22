import React from "react";
import Collapsible from "react-collapsible";
import "./Blog.css";
// ...

const Blog = ({ data }) => {
  return (
    <>
      <div className="Post">
        <div className="detail">
          <span>
            <b className="title">{data.name}</b>
            <br />
            <br />
            {data.dt}
          </span>
          <br />

          <Collapsible trigger={data.topic} className="clpsbl">
            <div className="content">{data.desc}</div>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default Blog;
