import { API_URL } from '../../utils/global.js';
//se utiliza api_url

export const getUserReservations = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/api/reservations/userReservations/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const reservationsData = await response.json();
    if (!response.ok) {
      console.error('HTTP Error Response:', reservationsData);
      throw new Error(`No se pudo obtener las reservaciones: ${response.status} ${response.statusText}`);
    }

    return reservationsData;
  } catch (error) {
    console.error('Error en la solicitud fetch:', error.message);
    throw error;
  }
};
