

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

    const responseData = await response.json();  // Move this line up to always parse the response

    if (!response.ok) {
      // Including more specific error information
      console.error(`HTTP Error Response: ${response.status} ${response.statusText}`, responseData);
      throw new Error(`No se pudo realizar el pago: ${response.status} ${response.statusText}`);
    }

    return responseData;
  } catch (error) {
    console.error("Error en la solicitud fetch:", error.message);
    // Rethrowing the error might not be necessary unless you want to handle it further up the chain
    throw error;
  }
};

export default payment;
