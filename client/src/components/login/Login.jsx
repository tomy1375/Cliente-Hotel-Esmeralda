import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Login from "../../assets/login.svg";
import loginUser from "../../services/users/requestLogin";
import Cookies from "js-cookie";
import BackToHomeButton from "./BackToHomeButton";
import { SignIn } from "@clerk/clerk-react";
import { login } from "../../redux/users/actions/usersActions";
import { getUserInfo } from "../../services/users/userInfo";


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
      Cookies.set("token", token, { 
        expiresIn: '1h'
       });
      
      let userInfo = null;
      if (token) {
        userInfo = await getUserInfo(); 
      }
  
      dispatch(login(userInfo));
  
      navigate('/');
    } catch (error){ 
      console.error('Error al iniciar sesión:', error);
    }
  };
  return (
    <div className="flex flex-col self-stretch my-auto  max-md:max-w-full">
      <div className="bg-v h-screen">
        <div className="flex flex-col-reverse md:flex-row gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-full md:w-[35%] max-md:w-full">
            <div className="m-2">
              <BackToHomeButton />
            </div>
            <section className="flex flex-col grow px-5 mt-0 text-xl text-white max-md:mt-8">
              <h1 className="self-center text-4xl font-extrabold tracking-tight leading-[52.8px] max-md:text-4xl">
                Login
              </h1>
              <p className="self-center mt-2 text-xl mb-5">
                Your paradise escape starts here!
              </p>

              <form onSubmit={handleLoginSubmit}>
                <label htmlFor="usernameOrEmail" className="sr-only">
                  Username or Email
                </label>
                <div className="flex gap-1.5 px-5 py-3.5 mt-0 font-bold whitespace-nowrap rounded-2xl bg-white bg-opacity-80 text-zinc-900">
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
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="flex gap-1.5 px-5 py-3.5 mt-2 font-bold whitespace-nowrap rounded-2xl bg-white bg-opacity-80 text-zinc-900">
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
                <div className="flex flex-col items-end mt-2 ml-6 max-w-full w-[222px] max-md:ml-2.5">
                  <div className="flex gap-2 self-stretch text-sm">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="shrink-0 bg-white border border-white border-solid h-[15px] w-[15px]"
                    />
                    <label htmlFor="rememberMe" className="flex-auto my-auto">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <button
                    type="submit"
                    className="justify-center m-4 px-6 py-3 mt-8 font-bold text-v bg-amber-300  hover:bg-amber-400 rounded-2xl shadow-lg max-md:px-5 transition-colors"
                  >
                    Login Now
                  </button>

                  <p
                    onClick={handleCreateAccountClick}
                    className="cursor-pointer self-center m-0 mt-7 text-2xl font-extrabold tracking-tight text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    Create Account
                  </p>
                </div>
              </form>
            </section>
              <p className="items-center justify-center ml-60 mt-8 mb-8 ">
                <span className="font-bold text-stone-400">Login</span>{" "}
                <span className="font-bold text-white ">with Others</span>
              </p>
            <div className="flex justify-center mb-6">
              <SignIn afterSignInUrl="/" />
            </div>
          </div>
          <div className="hidden md:flex flex-col w-full md:w-[70%] mx-auto">
            <div className="flex flex-col grow justify-center w-full rounded-none bg-gray-950 bg-opacity-50 max-md:mt-9 max-md:max-w-full">
              <img
                loading="lazy"
                src={Login}
                alt="Decorative image"
                className="w-full h-screen object-cover aspect-[16/9] max-md:mr-2.5 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
