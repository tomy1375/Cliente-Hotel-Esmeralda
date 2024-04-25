import { API_URL } from "../../utils/global";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = API_URL;

const confirmReservation = async (reservation_number) => {
    console.log("Attempting to confirm reservation with number:", reservation_number);
    
    const url = `${baseURL}api/reservations/checkin`;
    try {
        const token = Cookies.get("token");
        if (token) {
            // Asegúrate de enviar un objeto con la clave adecuada en el cuerpo de la solicitud
            const response = await axios.post(url, { reservation_number }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const roomReservations = response.data;
            console.log("Reservation confirmed:", roomReservations);
            return roomReservations;
        } else {
            console.error("No token found, unable to authorize.");
            throw new Error("Authentication token is missing.");
        }
    }
    catch (error) {
        console.error("Error while confirming reservation:", error);
        throw error; // Propagar el error para manejo externo
    }
}

export default confirmReservation;
