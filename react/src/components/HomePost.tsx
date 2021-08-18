import { IconButton } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

const HomePost: React.FC<any> = (props) => {
  const [vote, setVote] = useState(props.votes ? props.votes : 0);
  const [upVote, downVote] = props.handlers;
  useEffect(() => {
    setVote(props.votes);
  }, [props.votes]);
  return (
    <div className="post">
      <div className="post__vote">
        <>
          <IconButton onClick={() => upVote(props.id)} size="small">
            <ArrowUpward fontSize="small" />
          </IconButton>
        </>
        <p>{vote}</p>
        <IconButton size="small" onClick={() => downVote(props.id)}>
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
