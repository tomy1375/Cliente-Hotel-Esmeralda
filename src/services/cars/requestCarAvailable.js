import { API_URL } from "../../utils/global";

const baseURL = API_URL;

const requestCarAvailable = async (from, to, passenger) => {
 try {
    const response = await fetch(`${baseURL}api/cars/available?from=${from}&to=${to}&passenger=${passenger}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los autos disponibles");
    }

    const data = await response.json();
    return data;
 } catch (error) {
    console.error("Error en la solicitud fetch:", error.message);
    throw error;
 }
};

export default requestCarAvailable;
