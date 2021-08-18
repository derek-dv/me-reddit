import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../../action/auth/types";

const initialState = {
  user: null,
  msg: {},
  loading: false,
};

export const login = (state: any = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return {
        user: action.payload.user,
        msg: action.payload.msg,
        loading: false,
      };

    case LOGIN_FAIL:
      return { user: null, msg: action.payload.msg, loading: false };
    default:
      return state;
  }
};

// export const register = (state: any)
