import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_SUCCESS,
  LOGIN_FAIL,
} from "./types";
import { returnErrors, returnSuccess } from "./messages";
import history from "../history";

export const getUser = () => (dispatch, getState) => {
  const userId = getState().auth.userId;
  const orgId = getState().auth.orgId;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ZWtob3J1dG9td2VuaGFyc2xleUBnbWFpbC5jb206R3IwVmVXMDBkIzY3Mjgx`,
    },
  };
  if (userId) {
    var body = JSON.stringify({
      orgId,
      userId,
    });
  }

  axios
    .post(
      "https://secure.vezeti.net/test-api/v3/get-user-account-parameters/",
      body,
      config
    )
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data["responseData"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const login = ({
  orgId,
  typeEmailOrPhone,
  email,
  password,
  mobile,
  pin,
}) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ZWtob3J1dG9td2VuaGFyc2xleUBnbWFpbC5jb206R3IwVmVXMDBkIzY3Mjgx`,
    },
  };

  //   REQUEST BODY
  const body = JSON.stringify({
    orgId,
    typeEmailOrPhone,
    email,
    password,
    mobile,
    pin,
  });

  axios
    .post("https://secure.vezeti.net/test-api/v3/login/", body, config)
    .then((res) => {
      if (res.data["responseCode"] === "00") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data["responseData"],
        });
      } else if (res.data["responseCode"] === "01") {
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch(returnErrors(res.data["responseMessage"]));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const changeEmail = ({ orgId, currentEmail, newEmail }) => (
  dispatch,
  getState
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ZWtob3J1dG9td2VuaGFyc2xleUBnbWFpbC5jb206R3IwVmVXMDBkIzY3Mjgx`,
    },
  };
  const userId = getState().auth.userId;

  //   REQUEST BODY
  const body = JSON.stringify({
    orgId,
    userId,
    currentEmail,
    newEmail,
  });

  axios
    .post(
      "https://secure.vezeti.net/test-api/v3/change-user-email/",
      body,
      config
    )
    .then((res) => {
      if (res.data["responseCode"] == "00") {
        dispatch(returnSuccess(res.data["responseMessage"]));
      } else if (res.data["responseCode"] == "01") {
        dispatch(returnErrors(res.data["responseMessage"]));
      }
    });
};

export const register = ({
  orgId,
  firstName,
  lastName,
  mobile,
  email,
  password,
}) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ZWtob3J1dG9td2VuaGFyc2xleUBnbWFpbC5jb206R3IwVmVXMDBkIzY3Mjgx`,
    },
  };

  //   REQUEST BODY
  const body = JSON.stringify({
    orgId,
    firstName,
    lastName,
    mobile,
    email,
    password,
  });

  axios
    .post("https://secure.vezeti.net/test-api/v3/signup/", body, config)
    .then((res) => {
      if (res.data["responseCode"] == "00") {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data["responseData"],
        });
      } else if (res.data["responseCode"] == "01") {
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch(returnErrors(res.data["responseMessage"]));
      }
    });
};

export const passwordReset = ({ orgId, email }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ZWtob3J1dG9td2VuaGFyc2xleUBnbWFpbC5jb206R3IwVmVXMDBkIzY3Mjgx`,
    },
  };

  //   REQUEST BODY
  const body = JSON.stringify({
    orgId,
    email,
  });

  axios
    .post("https://secure.vezeti.net/test-api/v3/forgotpassword/", body, config)
    .then((res) => {
      if (res.data["responseCode"] == "00") {
        dispatch(returnSuccess(res.data["responseMessage"]));
      } else if (res.data["responseCode"] == "01") {
        dispatch(returnErrors(res.data["responseMessage"]));
      }
    });
};

export const pinReset = ({ orgId, mobile }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ZWtob3J1dG9td2VuaGFyc2xleUBnbWFpbC5jb206R3IwVmVXMDBkIzY3Mjgx`,
    },
  };

  //   REQUEST BODY
  const body = JSON.stringify({
    orgId,
    mobile,
  });

  axios
    .post("https://secure.vezeti.net/test-api/v3/forgotpin/", body, config)
    .then((res) => {
      if (res.data["responseCode"] == "00") {
        dispatch(returnSuccess(res.data["responseMessage"]));
      } else if (res.data["responseCode"] == "01") {
        dispatch(returnErrors(res.data["responseMessage"]));
      }
    });
};

// export const userIdConfig = (getState) => {
//   const token = getState().auth.userId;

//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   //   if token add to headers
//   if (userId) {
//     config.headers["Authorization"] = `Token ${token}`;
//   }
//   return config;
// };
