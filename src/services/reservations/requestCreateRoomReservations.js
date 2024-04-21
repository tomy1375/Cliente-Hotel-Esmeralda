import { API_URL } from "../../utils/global";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = API_URL;

const requestCreateRoomReservations = async (roomData) => {
    console.log("roomData", roomData);
    
    const url = `${baseURL}api/reservations`;
    try {
        const token = Cookies.get("token");
        if (token) {
            const response = await axios.post(url, roomData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                 }
                })
            const roomReservations = response.data;
            console.log("sasas",response);
            return roomReservations;
        }
    }
    catch (error) {
        console.error("Error al obtener información del usuario:", error);
        throw error;
    }
}
export default requestCreateRoomReservations;