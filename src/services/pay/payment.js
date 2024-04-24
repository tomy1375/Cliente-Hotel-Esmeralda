

import { API_URL } from "../../utils/global";

const baseURL = API_URL;

const payment = async (paymentData) => {
  try {
    const response = await fetch(`${baseURL}api/payments/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error(`HTTP Error Response: ${response.status} ${response.statusText}`, responseData);
      throw new Error(`No se pudo realizar el pago: ${response.status} ${response.statusText}`);
    }

    return responseData;
  } catch (error) {
    console.error("Error en la solicitud fetch:", error.message);

    throw error;
  }
};

export default payment;
