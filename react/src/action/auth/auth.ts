import { Dispatch } from "redux";
import dummies from "../../dummy";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
} from "./types";

export const login =
  ({ username, password }: any) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const users = dummies.users;
    for (let i = 0; i < users.length; i++) {
      console.log(i);
      const user = users[i];
      if (user.username === username) {
        if (user.password === password) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user, msg: { type: "success", text: "Login success", } },
          });
          return;
        } else {
          dispatch({
            type: LOGIN_FAIL,
            payload: {
              user: [],
              msg: { type: "error", text: "Invalid password", field: "password" },
            },
          });
          return;
        }
      }
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: {
        user: [],
        msg: { type: "error", text: "Username not found", field: "username" },
      },
    });
  };

export const register =
  ({ email, password, password2, username }: any) =>
  (dispatch: Dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    const users = dummies.users;
    for (let i = 0; i < users.length; i++) {
      console.log(i);
      const user = users[i];
      if (user.username === username) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user, msg: { type: "success", text: "Login success" } },
        });
        return;
      }
    }
  };
