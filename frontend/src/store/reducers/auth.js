import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAILED,
  LOGOUT,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTHENTICATED_FAILED:
      return {
        ...state,
        isAuthenticated: false,
      };

    case LOGIN_FAILED:
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
    case LOAD_USER_FAILED:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
