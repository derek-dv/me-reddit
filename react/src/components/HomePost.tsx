import { IconButton } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import { Post } from "../dummy";

const HomePost: React.FC<Post> = (props) => {
  return (
    <div className="post">
      <div className="post__vote">
        <>
          <IconButton onClick={() => alert("hey")} className="spc">
            <ArrowUpward fontSize="small" />
          </IconButton>
        </>
        <p>{props.votes ? props.votes : 0}</p>
        <IconButton>
          <ArrowDownward fontSize="small" />
        </IconButton>
      </div>
      <div className="post__content">
        <div className="post__head">
          <p className="post__info">
            created by <a href="/">{props.author}</a> on{" "}
            {props.createdAt ? props.createdAt : "August 12th"}
          </p>
          <h3>{props.title}</h3>
          <hr />
        </div>
        <div className="post__body">{props.content}</div>
      </div>
    </div>
  );
};

export default HomePost;
