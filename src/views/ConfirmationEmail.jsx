import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { API_URL } from "../utils/global";

const baseUrl =  API_URL;


function EmailConfirmation() {
  const { verificationCode } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [confirmationCompleted, setConfirmationCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Token enviado al backend:", verificationCode);

    const confirmEmail = async () => {
      try {
        const response = await fetch(
          `${baseUrl}auth/confirm/${verificationCode}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("Data:", data);

        if (data.message === "El correo electrónico ya ha sido verificado.") {
          Swal.fire({
            icon: "info",
            title: "Email Already Verified",
            text: "This email address has already been verified.",
          }).then((result) => {
            if (result.isConfirmed) {
              setShowConfirmation(false);
              setConfirmationCompleted(true);
              navigate("/"); 
            }
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Email Confirmed!",
            text: "Your email has been successfully confirmed.",
          }).then((result) => {
            if (result.isConfirmed) {
              setShowConfirmation(false);
              setConfirmationCompleted(true);
              navigate("/"); 
            }
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (verificationCode && !confirmationCompleted) {
      confirmEmail();
    }
  }, [verificationCode, navigate, confirmationCompleted]);

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Email Confirmation</h1>
      {showConfirmation && (
        <p className="text-lg text-center mb-8">Confirming your email address...</p>
      )}
    </div>
  );
}

export default EmailConfirmation;
