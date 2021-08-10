import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAILED,
  LOGOUT,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAILED,
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

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
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
    case SIGNUP_FAILED:
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
    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_FAILED:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_CONFIRM_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
