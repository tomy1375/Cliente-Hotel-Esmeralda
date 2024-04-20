import { LOGIN, LOGOUT, SET_USER_INFO } from "./users";
import Cookies from "js-cookie";
import axios from "axios";

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

export const fetchUserInfo = () => async (dispatch) => {
  try {
    const token = Cookies.get("token");
    if (!token) {
      console.error("No se encontró el token en las cookies");
      return;
    }

    const response = await axios.get('http://localhost:4000/auth/userinfo', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    const userInfo = response.data;
    dispatch(setUserInfo(userInfo)); 
  } catch (error) {
    console.error("Error al obtener información del usuario:", error);
  }
};
