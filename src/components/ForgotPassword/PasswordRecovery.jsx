import * as React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import eye from "../../assets/eye.png";
import Password from "../../assets/Password2.png";
import { jwtDecode } from "jwt-decode"; // Asegúrate de importar la función jwtDecode correctamente
import resetPassword from "../../services/users/password/resetPassword";

function PasswordRecovery() {
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const [tokenExpired, setTokenExpired] = React.useState(false);

  console.log(token);

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleConfirmClick = async () => {
    const newPassword = document.getElementById("newPasswordInput").value;
    const confirmNewPassword = document.getElementById(
      "confirmNewPasswordInput"
    ).value;

    if (newPassword === "" || confirmNewPassword === "") {
      Swal.fire({
        title: "Warning!",
        text: "Please enter both the new password and confirm it.",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } else if (newPassword !== confirmNewPassword) {
      Swal.fire({
        title: "Error!",
        text: "The passwords do not match.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } else {
      // Decodificar el token para verificar la expiración
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          await resetPassword(token, newPassword);
          Swal.fire({
            title: "Success!",
            text: "Password updated successfully.",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#fcd34d",
            customClass: {
              confirmButton: "custom-confirm-button",
            },
          }).then(() => {
            // Aquí puedes redirigir al usuario o realizar otras acciones después de confirmar la contraseña
            navigate("/login"); // Ejemplo de redirección
          });
        } else {
          setTokenExpired(true);
          Swal.fire({
            title: "Error!",
            text: "The reset link has expired. Please request a new password reset link.",
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#fcd34d",
            customClass: {
              confirmButton: "custom-confirm-button",
            },
          });
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while decoding the token. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#fcd34d",
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
      }
    }
  };

  const eyesClosed =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/72ba0781c7e7188017f240c2d37b621fc2106e6ebf9067cf105b9a8f5c228a3f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&";
  return (
    <main className="flex items-center justify-center mt-10">
      <div className="flex flex-col px-20 py-20 shadow-sm bg-v max-w-[685px] max-md:px-5 rounded-lg">
        <header className="self-center font-extrabold tracking-tight text-center text-white leading-[67px] w-[200px] max-md:text-4xl max-md:leading-[px]">
          <img src={Password} alt="" />
        </header>
        <h2 className="mt-10 text-xl font-semibold tracking-tight leading-8 text-white max-md:mt-10 max-md:max-w-full">
          Please Confirm Your New Password to Complete the Process
        </h2>
        {tokenExpired || token == null  ? (
          <div className="text-xl font-bold text-red-500 mt-5">
            The reset link has expired. Please request a new password reset
            link.
          </div>
        ) : (
          <React.Fragment>
            <div className="flex gap-5 px-11 py-6 mt-9 text-2xl font-extrabold tracking-tight leading-8 text-center bg-white bg-opacity-80 rounded-xl border border-solid border-neutral-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-800 text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full mb-6">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="newPasswordInput"
                placeholder="New password"
                className="flex-auto bg-transparent border-0 focus:outline-none w-full "
              />
              <img
                loading="lazy"
                src={isPasswordVisible ? eye : eyesClosed}
                alt="eye"
                className="shrink-0 aspect-square w-[30px] cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="flex gap-5 px-11 py-6 mt-9 text-2xl font-extrabold tracking-tight leading-8 text-center bg-white bg-opacity-80 rounded-xl border border-solid border-neutral-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-800 text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full mb-6">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                id="confirmNewPasswordInput"
                placeholder="Confirm new password"
                className="flex-auto bg-transparent border-0 focus:outline-none w-full"
              />
              <img
                loading="lazy"
                src={isConfirmPasswordVisible ? eye : eyesClosed}
                alt="eye"
                className="shrink-0 aspect-square w-[30px] cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            <div className="flex gap-4 self-end mt-12 text-2xl font-bold tracking-tighter max-md:flex-wrap max-md:mt-10">
              <div className="flex-auto my-auto leading-8 text-right text-white">
                <br />
              </div>
              <button
                onClick={handleConfirmClick}
                className="justify-center px-10 py-8 text-center whitespace-nowrap bg-amber-300 rounded-xl shadow-sm text-neutral-800 max-md:px-5  hover:bg-amber-400 transition-colors mr-36"
              >
                Confirm
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </main>
  );
}

export default PasswordRecovery;
