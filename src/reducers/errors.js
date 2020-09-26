import { GET_ERRORS, GET_SUCCESS } from "../actions/types";

const initialState = {
  msg: {},
  success: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
      };
    case GET_SUCCESS:
      return {
        success: action.payload.msg,
      };
    default:
      return state;
  }
}
