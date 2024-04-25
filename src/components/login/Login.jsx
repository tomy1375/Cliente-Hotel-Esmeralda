import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import loginUser from "../../services/users/requestLogin";
import Cookies from "js-cookie";
import BackToHomeButton from "./BackToHomeButton";
import { SignIn } from "@clerk/clerk-react";
import { login } from "../../redux/users/actions/usersActions";
import { getUserInfo } from "../../services/users/userInfo";
import Swal from "sweetalert2";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccountClick = () => {
    navigate("/register");
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await loginUser(usernameOrEmail, password);
      Cookies.set("token", token, { expiresIn: "24h" });

      let userInfo = null;
      if (token) {
        userInfo = await getUserInfo();
      }

      dispatch(login(userInfo));
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Swal.fire({
        icon: "error",
        title: "Login error",
        text: "The username/email or password is incorrect. Please try again.",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    }
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgotpassword");
  };

  return (
    <div className="flex flex-col min-h-screen bg-v">
      <div className="flex flex-col-reverse md:flex-row gap-5 w-full">
        <div className="w-full md:w-1/3 flex flex-col p-5">
          <BackToHomeButton />
          <section className="flex flex-col grow text-xl text-white items-center">
            <h1 className="text-4xl font-extrabold tracking-tight leading-snug my-2">
              Login
            </h1>
            <p className="mb-5">Your paradise escape starts here!</p>

            <form
              onSubmit={handleLoginSubmit}
              className="flex flex-col items-center space-y-4 w-full"
            >
              <div className="flex gap-1.5 px-5 py-3.5 font-bold whitespace-nowrap rounded-2xl bg-white bg-opacity-80 text-zinc-900 w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a592f3e6a871ed42db10bc4b9f20d0695722c54d3a3fcd5c1e267f84847048a?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                  alt=""
                  className="shrink-0 w-6 aspect-square"
                />
                <input
                  type="text"
                  id="usernameOrEmail"
                  placeholder="Username or Email"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  className="flex-auto my-auto bg-transparent outline-none"
                />
              </div>
              <div className="flex gap-1.5 px-5 py-3.5 font-bold whitespace-nowrap rounded-2xl bg-white bg-opacity-80 text-zinc-900 w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7ac098f5db87311adb5bb39ad666714d75de6cb890f8468d9b4fea61602d32?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                  alt=""
                  className="shrink-0 w-6 aspect-square"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="flex-auto my-auto bg-transparent outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 font-bold bg-amber-300 hover:bg-amber-400 rounded-2xl shadow-lg transition-colors"
              >
                Login Now
              </button>
              <button
                onClick={handleForgotPasswordClick}
                className="text-amber-300 hover:text-amber-400 transition-colors mt-2"
              >
                Forgot password?
              </button>
            </form>
            <button
              onClick={handleCreateAccountClick}
              className="mt-7 text-2xl font-extrabold tracking-tight text-stone-400 hover:text-amber-400 transition-colors"
            >
              Create Account
            </button>
            <p className="mt-8 mb-6 font-bold text-stone-400">
              Login with Others
            </p>
            <SignIn afterSignInUrl="/" />
          </section>
        </div>
        <div className="hidden md:flex md:w-11/12">
          <img
            src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Decorative image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
