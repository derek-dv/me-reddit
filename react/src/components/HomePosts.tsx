import React, { useState } from "react";
import dummies from "../dummy";
import "../styles/HomePosts.css";
import HomePost from "./HomePost";

const HomePosts: React.FC<any> = () => {
  const [posts] = useState(dummies.posts);
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id}>
          <HomePost
            {...post}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePosts;
