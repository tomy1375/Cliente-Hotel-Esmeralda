import React from "react";
import EmailInput from "./EmailInput";
import { useState } from "react";
import UsernameInput from "./UsernameInput";
import PasswordInputs from "./PasswordInputs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/users/actions/usersActions";
import BackToHomeButton from "../login/BackToHomeButton";
import registerUser from "../../services/users/requestRegister";
import Cookies from "js-cookie";
import loginUser from "../../services/users/requestLogin";
import { getUserInfo } from "../../services/users/userInfo";

function SignUpForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        return;
      }
      if (!acceptTerms) {
        return;
      }
      const userData = await registerUser(username, email, password);
      onSubmit(userData); // Invoca la función onSubmit con los datos del usuario
      await handleLoginAndRedirect(username, password);
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };

  const handleLoginAndRedirect = async (usernameOrEmail, password) => {
    try {
      const token = await loginUser(usernameOrEmail, password);
      Cookies.set("token", token, { 
        expiresIn: '1h'
       });
      let userInfo = null;
      if (token) {
        userInfo = await getUserInfo();
      }
      dispatch(login(userInfo)); 
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen my-auto max-md:ml-2 ">
      <div>
        <BackToHomeButton />
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
          <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full ">
            <header className="flex flex-col grow px-5 mt-0 text-xl text-white max-md:mt-8 ">
              <h1 className="self-center text-5xl font-extrabold tracking-tight leading-[52.8px] max-md:text-4xl ml-20">
                Sign up
              </h1>
              <p className="mt-4 font-medium">
                If you already have an account register
              </p>
              <p className="mt-3.5 text-white">
                <span className="font-medium">You can </span>
                <button
                  onClick={handleLoginClick}
                  className="font-medium text-stone-400 bg-transparent border-none cursor-pointer focus:outline-none hover:text-amber-400 transition-colors"
                >
                  Login here !
                </button>
              </p>
            </header>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <UsernameInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordInputs
          password={password}
          confirmPassword={confirmPassword}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
        />
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
        <button
          type="submit"
          className="justify-center items-center px-24   py-4 mt-10 ml  text-2xl font-extrabold text-white whitespace-nowrap bg-amber-300  hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full ml-52"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default function Register() {
  const handleSignUp = (data) => {
    console.log("Usuario registrado:", data);
  };

  return (
    <div className="bg-v">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="hidden md:flex flex-col w-full md:w-[70%] mx-auto">
          <div className="flex flex-col grow justify-center w-full rounded-none bg-gray-950 bg-opacity-50 max-md:mt-9 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4cffa6d4db4a3a8887391b8e57ff692b1908a1aaa0a91ca34590f6157d7289e?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
              alt="Sign up background"
              className="w-full h-screen object-cover aspect-[16/9] max-md:mr-2.5 max-md:max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[45%] mx-auto over">
          <SignUpForm onSubmit={handleSignUp} />
        </div>
      </div>
    </div>
  );
}
