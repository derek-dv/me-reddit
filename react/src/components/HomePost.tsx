import React from "react";
import { Post } from "../dummy";

const HomePost: React.FC<Post> = (props) => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__vote">^</div>
        <div className="post__title">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="post__mid">
        <p>{props.author}</p>
        {props.createdAt ? <p>{props.createdAt}</p> : <p>August 12</p>}
      </div>
      <div className="post__content">
          {props.content}
      </div>
    </div>
  );
};

export default HomePost;
