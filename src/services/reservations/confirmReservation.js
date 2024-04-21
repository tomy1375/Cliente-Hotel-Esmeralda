import { API_URL } from "../../utils/global";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = API_URL;

const confirmReservation = async (reservation_number) => {
    console.log("reservationData", reservation_number);
    
    const url = `${baseURL}api/reservations/checkin`;
    try {
        const token = Cookies.get("token");
        if (token) {
            const response = await axios.post(url, reservation_number, {
                headers: {
                    'Authorization': `Bearer ${token}`
                 }
                })
            const roomReservations = response.data;
            return roomReservations;
        }
    }
    catch (error) {
        console.error("Error al obtener información del usuario:", error);
        throw error;
    }
}


export default confirmReservation;