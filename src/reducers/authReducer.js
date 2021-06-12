import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../actions/types";
const InitialState = {
  registerData: [],
  registerDataError: null,
  loginData: [],
  isLoggedIn: false,
  loginLoading: false,
  loginDataError: null,
};

function authReducer(state = InitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
      };
    }
    case REGISTER_SUCCESS: {
      return { ...state, registerData: payload };
    }
    case REGISTER_ERROR: {
      return { ...state, registerDataError: payload };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        loginLoading: true,
        loginDataError: null,
        loginData: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginData: payload,
        loginLoading: false,
        isLoggedIn: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginDataError: payload,
        loginData: null,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
