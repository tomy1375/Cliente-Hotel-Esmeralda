import React, { useState } from "react";
import BackToHomeButton from "../login/BackToHomeButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/users/actions/usersActions";
import registerUser from "../../services/users/requestRegister";
import Cookies from "js-cookie";
import loginUser from "../../services/users/requestLogin";
import { getUserInfo } from "../../services/users/userInfo";
import Swal from "sweetalert2";
import eye from "../../assets/eye.png";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const eyeIconClosed =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/72ba0781c7e7188017f240c2d37b621fc2106e6ebf9067cf105b9a8f5c228a3f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&";
  const eyeIconOpen = eye;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password || !confirmPassword || !acceptTerms) {
      // Si alguno de los campos está vacío, muestra un mensaje de error
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill in all fields.",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      return;
    }

    if (password !== confirmPassword) {
      // Si las contraseñas no coinciden, muestra un mensaje de error
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "The passwords must match.",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      return;
    }

    try {
      // Intenta registrar al usuario
      const userData = await registerUser(username, email, password);
      handleSignUp(userData); // Llama a la función handleSignUp con los datos del usuario

      // Muestra un mensaje de éxito
      Swal.fire({
        icon: "success",
        title: "Registration successful",
        text: `The user ${username} has been successfully registered. Please confirm your email.`,
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });

      // Inicia sesión automáticamente después del registro exitoso
      await handleLoginAndRedirect(username, password);
    } catch (error) {
      // Maneja errores durante el registro
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This email has already been registered. Please use another email.",
          confirmButtonColor: "#fcd34d",
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
      } else {
        console.error("Error registering user:", error);
      }
    }
  };

  const handleLoginAndRedirect = async (usernameOrEmail, password) => {
    try {
      // Inicia sesión automáticamente después del registro
      const token = await loginUser(usernameOrEmail, password);
      Cookies.set("token", token, {
        expiresIn: "24h",
      });
      let userInfo = null;
      if (token) {
        userInfo = await getUserInfo();
      }
      dispatch(login(userInfo));
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUp = (data) => {
    console.log("User registered:", data);
  };

  return (
    <div className="bg-v">
      <div className="flex flex-col md:flex-row gap-4">
      <div className="hidden md:flex md:w-10/12">
          <div className="hidden md:flex flex-grow justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4cffa6d4db4a3a8887391b8e57ff692b1908a1aaa0a91ca34590f6157d7289e?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
              alt="Sign up background"
              className="w-full h-screen  object-cover "
             
            />
          </div>
        </div>
        <div className="flex flex-col md:w-1/2">
          <div className="flex flex-col min-h-screen my-auto max-md:ml-2">
            <BackToHomeButton />
            <header className="flex flex-col px-5 mt-0 text-xl text-white max-md:mt-8">
            <div className="flex justify-center mb-6">
              <h1 className="self-center text-5xl font-extrabold tracking-tight leading-[52.8px] max-md:text-4xl ml-">
                Sign up
              </h1>
              </div>
              
              <p className="mt-2 font-medium">
                If you already have an account register
              </p>
              <p className="mt-2 text-white">
                <span className="font-medium">You can </span>
                <button
                  onClick={handleLoginClick}
                  className="font-medium text-d bg-transparent border-none cursor-pointer focus:outline-none hover:text-amber-400 transition-colors"
                >
                  Login here !
                </button>
              </p>
            </header>
            
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col px-6 mt-10 text-base text-white max-md:mt-10 max-md:max-w-full">
                <label htmlFor="email" className="font-extrabold">
                  Email
                </label>
                <div className="flex gap-2.5 mt-5 items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b763b9a4ae8865edaef99e6e32f2b6df273d48db6ca654071afdc932b7b7a27?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                    alt=""
                    className="shrink-0 aspect-square w-4"
                  />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-auto bg-transparent border-0 focus:outline-none"
                    style={{ fontSize: "1.125rem", maxWidth: "422px" }}
                  />
                </div>
                <div className="mt-2.5 h-0.5 bg-white max-md:max-w-full" />
              </div>
              <div className="flex flex-col px-6 mt-10 text-base text-white max-md:mt-10 max-md:max-w-full">
                <label
                  htmlFor="username"
                  className="font-extrabold max-md:max-w-full"
                >
                  Username
                </label>
                <div className="flex gap-3 self-start mt-5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d24ad0b8d6df712c8b466347e11499878c8a868bc88d312b7ae1e809db16278?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                    alt=""
                    className="shrink-0 w-4 aspect-square"
                  />
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your User name"
                    className="flex-auto bg-transparent border-0 focus:outline-none w-[422px]"
                    style={{ fontSize: "1.125rem" }}
                  />
                </div>
                <div className="shrink-0 mt-3.5 h-0.5 bg-white max-md:max-w-full" />
              </div>
              <div className="flex flex-col px-6 mt-10 text-base text-white max-md:mt-10 max-md:max-w-full">
                <label htmlFor="password" className="font-extrabold">
                  Password
                </label>
                <div className="flex gap-2.5 mt-5 items-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/561c92496a6bc73d29f322c42048ab8d888bad1de7c90d5f02a294dafb2ecab4?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                    alt=""
                    className="shrink-0 aspect-square w-4"
                  />

                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="flex-auto bg-transparent border-0 focus:outline-none"
                    style={{ fontSize: "1.125rem", maxWidth: "422px" }}
                  />
                  <img
                    src={isPasswordVisible ? eyeIconOpen : eyeIconClosed}
                    alt=""
                    className="shrink-0 aspect-square w-[20px] cursor-pointer ml-20"
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <div className="mt-2.5 h-0.5 bg-white max-md:max-w-full" />
              </div>
              <div className="flex flex-col px-6 mt-10 text-base text-white max-md:mt-10 max-md:max-w-full">
                <label
                  htmlFor="confirmPassword"
                  className="font-extrabold max-md:max-w-full"
                >
                  Confirm Password
                </label>
                <div className="flex gap-3 mt-5 items-center ">
                  <div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/561c92496a6bc73d29f322c42048ab8d888bad1de7c90d5f02a294dafb2ecab4?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                      alt=""
                      className="shrink-0 aspect-square w-[17px]"
                    />
                  </div>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="flex-auto bg-transparent border-0 focus:outline-none"
                    style={{ fontSize: "1.125rem", maxWidth: "422px" }}
                  />
                  <img
                    src={isPasswordVisible ? eyeIconOpen : eyeIconClosed}
                    alt=""
                    className="shrink-0 aspect-square w-[20px] cursor-pointer ml-20"
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <div className="mt-2.5 h-0.5 bg-white max-md:max-w-full" />
              </div>
              <div className="flex gap-3 mt-8 max-md:flex-wrap">
                <div className="flex flex-col justify-center">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="shrink-0 w-6 h-6 bg-white rounded-lg border border-solid border-neutral-200 ml-6"
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="flex-auto text-base leading-6 text-justify text-white"
                >
                  I accept the terms and conditions and privacy policy.
                </label>
              </div>
              <div className="flex justify-center mb-2">
                <button
                  type="submit"
                  className="btna justify-center items-center px-24 py-4 mt-12  text-2xl font-extrabold text-white whitespace-nowrap bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
