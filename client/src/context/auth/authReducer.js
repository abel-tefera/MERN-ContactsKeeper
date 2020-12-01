import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorL: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
