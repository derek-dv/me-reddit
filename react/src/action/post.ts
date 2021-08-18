import { Dispatch } from "redux";
import dummies from "../dummy";
import { GET_POSTS, POST_UPVOTE, POST_DOWNVOTE } from "./types";

export const getPosts = () => (dispatch: Dispatch) => {
  dispatch({
    type: GET_POSTS,
    payload: dummies.posts,
  });
};

export const postUpvote = (id: number) => (dispatch: Dispatch) => {
  
  dispatch({ type: POST_UPVOTE, payload: id });
};

export const postDownvote = (id: number) => (dispatch: Dispatch) => {
  
  dispatch({ type: POST_DOWNVOTE, payload: id });
};

