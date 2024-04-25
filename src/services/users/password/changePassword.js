import axios from "axios";
import { API_URL } from "../../../utils/global";
import Cookies from "js-cookie";

const baseURL = API_URL;

const changePassword = async (currentPassword, newPassword, userId) => {
  try {
    const token = Cookies.get("token");
    if (token) {
      const response = await axios.post(
        `${baseURL}auth/change-password/${userId}`,
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default changePassword;
