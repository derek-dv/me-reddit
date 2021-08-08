import React, { useState } from "react";
import dummies from "../dummy";
import "../styles/HomePosts.css";
import HomePost from "./HomePost";

const HomePosts: React.FC<any> = () => {
  const [posts, _] = useState(dummies.posts);
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id}>
          <HomePost
            id={post.id}
            author={post.author}
            title={post.title}
            content={post.content}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePosts;
