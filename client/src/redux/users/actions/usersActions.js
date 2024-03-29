import { LOGIN, LOGOUT, SET_USER_INFO } from "./users";


export const login = (token) => {
  return {
    type: LOGIN,
    payload: token
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo
  };
};
