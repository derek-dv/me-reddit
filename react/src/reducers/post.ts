import { Reducer } from "redux";
import { GET_POSTS, POST_DOWNVOTE, POST_UPVOTE } from "../action/types";
import { Post } from "../dummy";

export const posts: Reducer<any, any> = (state = [], actions) => {
  switch (actions.type) {
    case GET_POSTS:
      return actions.payload;

    case POST_UPVOTE:
      return state.map((post: Post) =>
        post.id === actions.payload ? {...post, votes: post.votes!++} : post
      );

    case POST_DOWNVOTE:
      return state.map((post: Post) =>
        post.id === actions.payload ? {...post, votes: post.votes!--} : post
      );

    default:
      return state;
  }
};
