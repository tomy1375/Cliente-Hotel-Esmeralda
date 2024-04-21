import axios from "axios";
import { API_URL } from "../../utils/global";

const baseURL = API_URL;

const requestAllCars = async () => {
  try {
    const response = await axios.get(`${baseURL}api/cars`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los autos:", error);
    throw error;
  }
};
export default requestAllCars;
