import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useClerk } from "@clerk/clerk-react";
import { FaComment } from 'react-icons/fa';
import LogoImage from "../../assets/logo.svg";
import lobby from "../../assets/lobby.svg";
import lobby1 from "../../assets/rooms.svg";
import Gallery from "../../assets/gallery.svg";
import dise from "../../assets/dise.png";
import Cookies from "js-cookie";
import "./Navbar.scss";
import { jwtDecode } from "jwt-decode";
import { fetchUserInfo, logout } from "../../redux/users/actions/usersActions";
import { useDispatch } from "react-redux";
import MovilMenu from "./MovilMenu";
import "../Button/Button.css"


function Navbar() {
  const dispatch = useDispatch();
  const { signOut, user } = useClerk();
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
  const [isOpenSeeMoreMenu, setIsOpenSeeMoreMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCustomAuthenticated, setIsCustomAuthenticated] = useState(false);
  const [showGalleryDescription, setShowGalleryDescription] = useState(false);
  const location = useLocation();
  const userInfo = useSelector((state) => state.users.userInfo);
  const [token, setToken] = useState(null);

  

  const [showOffersDescription, setShowOffersDescription] = useState(false);
  const [showServicesDescription, setShowServicesDescription] = useState(false);


  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

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

  useEffect(() => {
    setShowOffersDescription(location.pathname === "/offers");
    setShowGalleryDescription(location.pathname === "/gallery");
    setShowServicesDescription(location.pathname === "/services");
  }, [location.pathname]);

  const reloadPage = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      window.location.href = "/";
    }
  };

  const toggleProfileMenu = () => {
    setIsOpenProfileMenu(!isOpenProfileMenu);
    setIsOpenSeeMoreMenu(false);
  };

  const toggleSeeMoreMenu = () => {
    setIsOpenSeeMoreMenu(!isOpenSeeMoreMenu);
    setIsOpenProfileMenu(false);
  };

  const closeMenu = () => {
    setIsOpenProfileMenu(false);
    setIsOpenSeeMoreMenu(false);
  };

  const getLobbyImage = () => {
    if (location.pathname === "/") {
      return lobby;
    } else if (location.pathname === "/rooms") {
      return lobby1;
    } else if (location.pathname === "/gallery") {
      return dise;
    } else if (location.pathname === "/offers") {
      return "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/77/2016/11/30020601/Vous-Spa-1500x400.jpg";
    } else if (location.pathname === "/services") {
      return "https://www.greenwoodshotel.com/wp-content/uploads/2023/05/Pool-and-massage-banner.jpg";
    } else if (location.pathname === "/restaurant") {
      return Gallery;
    } else {
      return null;
    }
  };

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

  const handleCloseModalChat = () => {
    setShowModalChat(false); 
  };

  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

 

  return (
    <>
    <MovilMenu location={location} />

    <div className="hidden lg:block">
      
      <nav className="bg-v p-2">
        <div className="max-w-full px-6 mx-auto flex flex-wrap justify-around items-center lg:max-w-8xl">
          <img
            src={LogoImage}
            alt="Logo"
            className="h-40 cursor-pointer"
            onClick={reloadPage}
          />
          <NavLink
            exact="true"
            to="/"
            className={`btn text-white hover:text-d  transition-colors${
              location.pathname === "/" ? "active text-d" : ""
            }`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/rooms"
            className={`btn text-white hover:text-d ${
              location.pathname === "/rooms"
                ? "active text-d color transition-colors"
                : ""
            }`}
          >
            ROOMS
          </NavLink>
          <NavLink
            to="/services"
            className={`btn text-white hover:text-d ${
              location.pathname === "/services" ? "active text-d" : ""
            }`}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/restaurant"
            className={`btn text-white hover:text-d ${
              location.pathname === "/restaurant" ? "active text-d" : ""
            }`}
          >
            RESTAURANT
          </NavLink>
          <NavLink
            to="/offers"
            className={`btn text-white hover:text-d transition-colors${
              location.pathname === "/offers" ? "active text-d" : ""
            }`}
          >
            SPECIAL OFFERS
          </NavLink>
          <div className="relative inline-block" onMouseLeave={closeMenu}>
            <button
              onMouseEnter={toggleSeeMoreMenu}
              className={`block px-4 py-2 text-b hover:text-d`}
              style={{ fontSize: "1.25rem" }}
            >
              SEE MORE
            </button>
            {isOpenSeeMoreMenu && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-48 rounded-lg shadow-lg bg-v borde">
                <div className="py-1">
                  <NavLink
                    to="/gallery"
                    className={`block px-4 py-2 text-b hover:text-d`}
                  >
                    GALLERY
                  </NavLink>
                  <NavLink
                    to="/option2"
                    className={`block px-4 py-2 text-b hover:text-d`}
                  >
                    CONTACT
                  </NavLink>
                  <NavLink
                    to="/option3"
                    className={`block px-4 py-2 text-b hover:text-d ${
                      location.pathname === "/option3" ? "active" : ""
                    }`}
                  >
                    FAQs
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-16 ">
            {isLoading ? (
              <div className="custom-loader"></div>
            ) : (
              <>
                {user || isCustomAuthenticated ? (
                  <div className="font-bold text-white flex items-center justify-center "  onMouseLeave={() => setIsOpenProfileMenu(false)}>
                    <button
                      className="flex items-center space-x-2 mt"
                      onClick={toggleProfileMenu}
                    >
                    {user?.imageUrl ? (
                          <img
                              alt="Profile"
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                          />
                          ) : (
                          userInfo?.photo_url ? (
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
                          )
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
                    {isOpenProfileMenu && (
                      <div className="absolute top-24 right-3 bg-white border border-gray-300 rounded shadow-md mr-4">
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
                              onClick={handleSignOut}>
                              Sign Out
                            </button>
                          </li>
                          <li>
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
        </div>
      </nav>
      <header className="flex justify-center items-center">
        <img src={getLobbyImage()} className="w-full" />
      </header>
      {/* DESCRIPCIONES HEADER */}
      {showGalleryDescription && (
        <div
          className="header-description absolute mt-6 left-20 text-white text-left z-10"
          style={{ top: "calc(10% + 100px)" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-normal md:leading-relaxed lg:leading-normal xl:leading-relaxed text-justify w-2/6">
            See the image gallery of the Hotel Esmeralda Resort & Spa and
            discover why we are one of the best hotels in Buenos Aires for
            business and leisure stays
          </p>
        </div>
      )}

      {showOffersDescription && (
        <div
          className="header-description absolute left-20 text-white text-left z-10"
          style={{ top: "calc(10% + 150px)" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Offers
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
            Exclusive hotel offers and deals
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-normal md:leading-relaxed lg:leading-normal xl:leading-relaxed w-1/5 text-justify">
            Esmeralda Resort & Spa is one of the most unique and historic hotels
            in Buenos Aires. A rich, seamless blend of timeless grandeur with
            contemporary style and sophistication
          </p>
        </div>
      )}
      {showServicesDescription && (
        <div className="header-description absolute left-20 text-white text-left z-10 top-1/2 -translate-y-3/4">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our services
          </h1>
        </div>
      )}
    </div>
    </>
  );
}

export default Navbar;
