import { API_URL } from "../../utils/global";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = API_URL;

const requestAllUserReservations = async (userId) => {
    // Asegúrate de que userId se está pasando correctamente
    if (!userId) {
        console.error("No user ID provided for fetching reservations.");
        return;
    }

    const url = `${baseURL}api/reservations/userReservations/${userId}`;
    try {
        const token = Cookies.get("token");
        if (token) {
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const userReservations = response.data;
            return userReservations;
        } else {
            console.error("No token found. User might not be logged in.");
            return; 
        }
    } catch (error) {
        console.error("Error al obtener las reservas del usuario:", error);
        throw error;
    }
}

export default requestAllUserReservations;
