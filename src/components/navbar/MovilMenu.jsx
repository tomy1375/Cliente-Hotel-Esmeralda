import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { useClerk } from "@clerk/clerk-react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/users/actions/usersActions";
import { useSelector } from "react-redux";
import { fetchUserInfo } from "../../redux/users/actions/usersActions";
import { jwtDecode } from "jwt-decode";

const MobileMenu = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCustomAuthenticated, setIsCustomAuthenticated] = useState(false);
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
  const [isOpenSeeMoreMenu, setIsOpenSeeMoreMenu] = useState(false);
  const [showGalleryDescription, setShowGalleryDescription] = useState(false);
  const [token, setToken] = useState(null);

  const userInfo = useSelector((state) => state.users.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signOut, user } = useClerk();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const goToProfile = () => {
    navigate("/profile");
  };

  const toggleProfileMenu = () => {
    setIsOpenProfileMenu(!isOpenProfileMenu);
    setIsOpenSeeMoreMenu(false);
  };

  const toggleSeeMoreMenu = () => {
    setIsOpenSeeMoreMenu(!isOpenSeeMoreMenu);
    setIsOpenProfileMenu(false);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setToken(decodedToken);
        fetchUserInfo();

        const currentTimeInSeconds = Math.floor(Date.now() / 1000);

        if (decodedToken.exp && currentTimeInSeconds > decodedToken.exp) {
          Cookies.remove("token");
          console.log("El token ha expirado. Token eliminado de las cookies.");
          dispatch(logout());
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(fetchUserInfo());
    }
  }, [dispatch]);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsCustomAuthenticated(!!token);
  }, []);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      Cookies.remove("token");
      setIsCustomAuthenticated(false);
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`bg-v p-2 lg:hidden ${
        isOpen ? "h-screen w-screen fixed top-0 left-0 z-20" : ""
      }`}
    >
      <div className="max-w-full px-6 mx-auto flex justify-between items-center lg:max-w-8xl">
        <NavLink to="/" className="text-white text-2xl font-bold">
          <img src={LogoImage} alt="Logo" className="h-20 cursor-pointer" />
        </NavLink>
        <div
          className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center z-50 lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white" // Aseguramos un color contrastante
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white" // Aseguramos un color contrastante
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.4 }}
          className="mobile-menu absolute gap-3 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-20"
        >
          <div className="flex space-x-16 ">
            {isLoading ? (
              <div className="custom-loader"></div>
            ) : (
              <>
                {user || isCustomAuthenticated ? (
                  <div className="font-bold text-white flex items-center justify-center">
                    <button
                      className="flex items-center space-x-2"
                      onClick={toggleProfileMenu}
                    >
                      {user?.imageUrl ? (
                        <img
                          alt="Profile"
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                        />
                      ) : userInfo?.photo_url ? (
                        <img
                          alt="Profile"
                          className="h-8 w-8 rounded-full"
                          src={userInfo.photo_url}
                        />
                      ) : (
                        <img
                          alt="Default Profile"
                          className="h-8 w-8 rounded-full"
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        />
                      )}

                      {user?.firstName ? (
                        <h1 className="ml-2 text-lg">Hi,{user.firstName}</h1>
                      ) : (
                        <h1 className="ml-2 text-lg">
                          Hi, {userInfo?.username}
                        </h1>
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isCustomAuthenticated && isOpenProfileMenu && (
                      <div className="absolute top-28 right-3 bg-white border border-gray-300 rounded shadow-md">
                        <ul className="py-2">
                          <li>
                            <button
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left "
                              onClick={goToProfile}
                            >
                              Manage Account
                            </button>
                          </li>
                          <li>
                            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                              Saved
                            </button>
                          </li>
                          <li>
                            <button
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                              onClick={handleSignOut}
                            >
                              Sign Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <NavLink
                      to="/register"
                      className={`text-white w-full text-center sm:w-40 border-2 border-yellow-500 -900 px-4 py-3 rounded-lg tracking-wider btn ${
                        location.pathname === "/register" ? "active" : ""
                      }`}
                    >
                      REGISTER
                    </NavLink>
                    <NavLink
                      to="/login"
                      className={`text-white items-center text-center w-full sm:w-40 bg-yellow-500 -300 border-2 border-yellow-500  hover:bg-yellow-600 hover:border-yellow-600  -900 px-4 py-3 rounded-lg tracking-wider  ${
                        location.pathname === "/login" ? "active" : ""
                      }`}
                    >
                      LOGIN
                    </NavLink>
                  </>
                )}
              </>
            )}
          </div>
          <NavLink
            exact
            to="/"
            className="menu-item text-b"
            activeClassName="active"
            onClick={toggleMenu}
          >
            HOME
          </NavLink>
          <NavLink
            to="/rooms"
            className="menu-item text-b"
            activeClassName="active"
            onClick={toggleMenu}
          >
            ROOMS
          </NavLink>
          <NavLink
            to="/services"
            className="menu-item text-b"
            activeClassName="active"
            onClick={toggleMenu}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/restaurant"
            className="menu-item text-b"
            activeClassName="active"
            onClick={toggleMenu}
          >
            RESTAURANT
          </NavLink>
          <NavLink
            to="/offers"
            className="menu-item text-b"
            activeClassName="active"
            onClick={toggleMenu}
          >
            SPECIAL OFFERS
          </NavLink>

          <div className="absolute top-28 right-3 bg-white border border-gray-300 rounded shadow-md">
            <ul className="py-2">
              <li>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left "
                  onClick={goToProfile}
                >
                  Manage Account
                </button>
              </li>
              <li>
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                  Saved
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileMenu;
