import { API_URL } from "../../utils/global";

const baseURL = API_URL;

const requestSpaAvailable = async (from, to, capacity) => {
    console.log("from", from);
    console.log("to", to);
    console.log("capacity", capacity);
 try {
    const response = await fetch(`${baseURL}api/spa/available?from=${from}&to=${to}&capacity=${capacity}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los servicios de spa ");
    }

    const data = await response.json();
    return data;
 } catch (error) {
    console.error("Error en la solicitud fetch:", error.message);
    throw error;
 }
};

export default requestSpaAvailable;
