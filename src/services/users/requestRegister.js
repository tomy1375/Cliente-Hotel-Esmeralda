import axios from 'axios';
import { API_URL } from "../../utils/global";

const baseUrl = API_URL; 

const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${baseUrl}auth/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error;
  }
};

export default registerUser;
