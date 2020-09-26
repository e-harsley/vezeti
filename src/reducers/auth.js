import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  LOGOUT,
} from "../actions/types";

const initialState = {
  userId: localStorage.getItem("userId"),
  orgId: localStorage.getItem("orgId"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        userId: null,
        orgId: null,
        isLoading: false,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("userId", action.payload.userGlobalId);
      localStorage.setItem("orgId", action.payload.orgId);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    default:
      return state;
  }
}
