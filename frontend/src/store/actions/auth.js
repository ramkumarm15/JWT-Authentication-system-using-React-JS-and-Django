import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAILED,
  LOGOUT,
} from "../actions/types";

import { API } from "../../axiosInstance";

export const checkAuthentication = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("access") });

    try {
      const result = await API.post("/auth/jwt/verify/", body, config);

      if (result.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
        return true;
      } else {
        dispatch({
          type: AUTHENTICATED_FAILED,
        });
        return false;
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAILED,
      });
      return false;
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAILED,
    });
    return false;
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const result = await API.post("/auth/jwt/create/", body, config);
    const statusCode = result.status;
    console.log(result);

    if (statusCode === 200) {
      const { status, statusText } = result;
      const res = { status, statusText };
      dispatch({
        type: LOGIN_SUCCESS,
        payload: result.data,
      });

      dispatch(loadUser());
      return res;
    } else {
      const { status, statusText, data } = result.response;
      const res = { status, statusText, data };

      dispatch({
        type: LOGIN_FAILED,
      });
      return res;
    }
  } catch (err) {

    const { status, statusText, data } = err.response;

    const res = { status, statusText, data };
    dispatch({
      type: LOGIN_FAILED,
    });
    return res;
  }
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    try {
      const result = await API.get("/auth/users/me/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      });

      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: result.data,
      });
    } catch (err) {
      dispatch({
        type: LOAD_USER_FAILED,
      });
    }
  } else {
    dispatch({
      type: LOAD_USER_FAILED,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
