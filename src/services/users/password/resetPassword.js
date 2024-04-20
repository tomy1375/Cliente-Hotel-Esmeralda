import axios from "axios";
import { API_URL } from "../../../utils/global";

const baseURL = API_URL;

const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${baseURL}auth/reset-password`, {
      token,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

export default resetPassword;
