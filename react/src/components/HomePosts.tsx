import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postUpvote, postDownvote } from "../action/post";
import { Post } from "../dummy";
import "../styles/HomePosts.css";
import HomePost from "./HomePost";

const HomePosts: React.FC<any> = () => {
  const dispatch = useDispatch();
  const temp = useSelector((state: any) => state.posts);
  const [posts, setPosts] = useState(temp);

  const upVote = (id: number) => {
    dispatch(postUpvote(id));
  };

  const downVote = (id: number) => {
    dispatch(postDownvote(id));
    console.log(temp[0]);
  };

  useEffect(()=>{
    dispatch(getPosts())
    console.log('changed')
  }, [])

  useEffect(() => {
    setPosts(temp);
  }, [temp]);
  return (
    <div className="posts">
      {posts.map((post: Post) => (
        <div key={post.id}>
          <HomePost {...post} handlers={[upVote, downVote]} />
        </div>
      ))}
    </div>
  );
};

export default HomePosts;
