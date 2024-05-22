import React, { useState } from "react";
import { BlogData } from "../../utils/BlogData";
import Blog from "./Blog";
import "./Blogs.css";
const Blogs = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="search-bar_blog">
        <input
          type="text"
          placeholder="Search Topics"
          value={search}
          onChange={handleChange}
        ></input>
      </div>
      <div className="Posts">
        {BlogData.filter((blg, i) => {
          return (
            (search === "" ? blg : blg.topic.includes(search)) ||
            (search.toLocaleLowerCase() === ""
              ? blg
              : blg.topic
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()))
          );
        }).map((blg, i) => {
          return <Blog data={blg} id={i} />;
        })}
      </div>
    </>
  );
};

export default Blogs;
