import { LOGIN, LOGOUT, SET_USER_INFO, UPDATE_USER } from "./users";


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


export const updateUser= (userData) => ({
  type: UPDATE_USER,
  payload: userData,
});


export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo
  };
};
