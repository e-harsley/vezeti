import { GET_ERRORS, GET_SUCCESS } from "./types";
// return errors

export const returnErrors = (msg) => {
  return {
    type: GET_ERRORS,
    payload: { msg },
  };
};

export const returnSuccess = (msg) => {
  return {
    type: GET_SUCCESS,
    payload: { msg },
  };
};
