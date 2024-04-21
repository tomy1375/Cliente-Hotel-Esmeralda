import axios from "axios";
import { API_URL } from "../../../utils/global";

const baseURL = API_URL;

const emailPassword = async (email) => {
  try {
    const response = await axios.post(`${baseURL}auth/request-password-reset`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error al enviar email:", error);
    throw error;
  }
}

export default emailPassword;