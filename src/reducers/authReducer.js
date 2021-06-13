import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../actions/types";
const InitialState = {
  registerResponse: null,
  registerLoading: false,
  loginResponse: null,
  loginLoading: false,
  isLoggedIn: false,
  
};

function authReducer(state = InitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerResponse: null,
        registerLoading: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerLoading: false,
        registerResponse: payload,
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        registerLoading: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        loginLoading: true,
        loginResponse: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginResponse: payload,
        loginLoading: false,
        isLoggedIn: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isLoggedIn: false,
        loginLoading: false,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
