import axios from "axios";
import { API_URL } from "../../utils/global";

const baseURL = API_URL;

const requestAllSpaServices = async () => {
  try {
    const response = await axios.get(`${baseURL}api/spa`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los servicios de spa:", error);
    throw error;
  }
};
export default requestAllSpaServices;
