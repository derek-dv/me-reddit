import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { posts } from "./reducers/post";
import { Post } from "./dummy";
import { login } from "./reducers/auth/auth";

export interface DefaultState {
  posts: Post[] | [];
  user: {}
}

const initialState: DefaultState = {
  posts: [],
  user: {}
};

const reducers = combineReducers({ posts, user: login });

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
