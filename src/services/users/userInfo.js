import Cookies from "js-cookie";
import axios from "axios";

export const getUserInfo = async () => {
  try {
    const token = Cookies.get("token");
    if (token) {
      const response = await axios.get('http://localhost:4000/auth/userinfo', {
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
