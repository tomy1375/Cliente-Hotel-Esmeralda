import Cookies from "js-cookie";
import axios from "axios";
import { API_URL } from "../../utils/global";



const baseUrl =  API_URL;


export const getUserInfo = async () => {
  try {
    const token = Cookies.get("token");
    if (token) {
      const response = await axios.get(`${baseUrl}auth/userinfo`, {
        headers: {
           'Authorization': `Bearer ${token}`
        }
       })
       
      const userInfo = response.data;
      return userInfo;
    } else {
      console.error("No se encontró el token en las cookies");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener información del usuario:", error);
    throw error;
  }
};
