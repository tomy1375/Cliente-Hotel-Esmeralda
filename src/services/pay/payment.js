import { API_URL } from "../../utils/global";

const baseURL = API_URL;

const payment = async (data) => {
  try {
    const response = await fetch(`${baseURL}api/payments/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("No se pudo realizar el pago");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error en la solicitud fetch:", error.message);
    throw error;
  }
};

export default payment;
