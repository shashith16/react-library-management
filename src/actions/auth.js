import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./types";

import AuthService from "../services/auth.service";

export const register =
  (user) => async (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
    });
    try {
      const res = await AuthService.register(user);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_ERROR,
        payload: error,
      });
    }
  };

export const login = (loginUser) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    const res = await AuthService.login();
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_ERROR,
      payload: error,
    });
  }
};
