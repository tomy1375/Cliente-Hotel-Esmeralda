import * as React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Password from "../../assets/Password2.png";
import eyedark from "../../assets/EyeDark.png";
import eyedarkopen from "../../assets/EyeDarkOpen.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import changePassword from "../../services/users/password/changePassword";

function ModalSecurity({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    React.useState(false);
  const userInfo = useSelector((state) => state.users.userInfo);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const eyesClosed = eyedark;
  React.useEffect(() => {
    if (!isOpen) {
      setIsPasswordVisible(false);
      setIsNewPasswordVisible(false);
      setIsConfirmPasswordVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  // Simulación de autenticación
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(password, cb) {
      setTimeout(() => {
        if (password === "123456") {
          fakeAuth.isAuthenticated = true;
          cb(true);
        } else {
          fakeAuth.isAuthenticated = false;
          cb(false);
        }
      }, 100);
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordInput = document.getElementById("PasswordInput").value;
    const newPasswordInput = document.getElementById("NewPasswordInput").value;
    const confirmNewPasswordInput = document.getElementById(
      "ConfirmNewPasswordInput"
    ).value;

    if (!passwordInput || !newPasswordInput || !confirmNewPasswordInput) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the fields",
        confirmButtonText: "Ok",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      return;
    }
    if (newPasswordInput !== confirmNewPasswordInput) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The new password and the confirm new password do not match. Please try again",
        confirmButtonText: "Ok",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      return;
    }

    const userId = userInfo?.id ?? user?.id ?? "incognito";

    console.log("userId:", userId);
    console.log("currentPassword:", passwordInput);
    console.log("newPassword:", newPasswordInput);

    try {
      const response = await changePassword(
        passwordInput,
        newPasswordInput,
        userId
      );
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Password changed",
        text: "Your password has been changed successfully",
        confirmButtonText: "Ok",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Password change error",
        text: "The current password is incorrect. Please try again.",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    }
  };

  const handleDeleteAccount = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fcd34d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The user was successfully deleted.",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#fcd34d",
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
        navigate("/");
      }
    });
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center bg-gray-900 bg-opacity-60">
      <div className="relative flex flex-col items-center rounded-lg p-4 w-full max-w-screen-sm sm:max-w-xl md:max-w-2xl lg:max-w-xl overflow-y-hidden z-10">
        <main className="flex items-center justify-center">
          <div className="bg-v w-full max-w-lg p-8 rounded-lg">
            <button
              type="button"
              className=" bg-transparent bg-white bg-opacity-80 hover:text-gray-900 transition-colors rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <header className="text-center">
              <img src={Password} alt="Password" className="mx-auto w-24" />
              <h3 className="text-3xl font-semibold mt-4 text-white">
                Security
              </h3>
            </header>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="PasswordInput"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="PasswordInput"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:border-gray-400 focus:bg-white focus:outline-none"
                  />
                  <img
                    src={isPasswordVisible ? eyedarkopen : eyesClosed}
                    alt="Toggle password visibility"
                    className="absolute top-0 right-0 mt-3 mr-4 w-6 h-6 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="NewPasswordInput"
                  className="block text-sm font-semibold text-gray-600"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={isNewPasswordVisible ? "text" : "password"}
                    id="NewPasswordInput"
                    placeholder="Enter your new password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:border-gray-400 focus:bg-white focus:outline-none"
                  />
                  <img
                    src={isNewPasswordVisible ? eyedarkopen : eyesClosed}
                    alt="Toggle new password visibility"
                    className="absolute top-0 right-0 mt-3 mr-4 w-6 h-6 cursor-pointer"
                    onClick={toggleNewPasswordVisibility}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="ConfirmNewPasswordInput"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    id="ConfirmNewPasswordInput"
                    placeholder="Confirm your new password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border focus:border-gray-400 focus:bg-white focus:outline-none"
                  />
                  <img
                    src={isConfirmPasswordVisible ? eyedarkopen : eyesClosed}
                    alt="Toggle confirm new password visibility"
                    className="absolute top-0 right-0 mt-3 mr-4 w-6 h-6 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full px-40 py-3 bg-red-500 justify-center mt-3 text-white text-clip rounded-lg hover:bg-red-600 transition-colors"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </button>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="ml-4 px-24 py-4 bg-amber-300 rounded-lg font-bold text-b hover:bg-amber-400 focus:outline-none focus:bg-amber-400 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ModalSecurity;
