import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeView from "./views/HomeView";
import Navbar from "./components/navbar/Navbar";
import LandingView from "./views/LandingView";
import DetailView from "./views/DetailView";
import Rooms from "./views/RoomsView";
import Restaurant from "./views/Restaurant";
import LoginView from "./views/LoginView";
import TermsAndConditionsView from "./views/TermsAndConditions";
import ResultsView from "./views/ResultView";
import RegisterView from "./views/RegisterView";
import Footer from "./components/footer/Footer";
import GalleryView from "./views/GalleryView";
import ProfileView from "./views/ProfileView";
import OffersView from "./views/OffersView";
import { getUserInfo } from "./services/users/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "./redux/users/actions/usersActions";
import Cookies from "js-cookie";
import EmailConfirmation from "./views/ConfirmationEmail";
import ServicesView from "./views/ServicesView";
import BookingView from "./views/BookingView";
import BookingPartTwoView from "./views/BookingPartTwoView";
import BookingPartThreeView from "./views/BookingPartThreeView";
import BookingPartFourView from "./views/BookingPartFourView";
import ForgotPassword from "./views/ForgotPasswordView";
import ForgotPasswordView from "./views/ForgotPasswordView";
import ForgotPasswordRecoveryView from "./views/ForgotPasswordRecoveryView";
import BookingFailView from "./views/BookingFailView";
import PasswordRecoveryView from "./views/PasswordRecoveryView";
import ReviewsView from "./views/ReviewsView";
import ClientChat from "./components/chat/ClientChat";
import AdministradorChat from "./components/chat/AdministradorChat";
import BookNotify from "./components/notifications/BookNotify";
import AdministradorNotify from "./components/notifications/AdministradorNotify";
import { io } from "socket.io-client";
import Error404 from "./components/error404/Error";

import { Navigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { WebChatContainer } from "@ibm-watson/assistant-web-chat-react";

function MainLayout({ socket, setSocket }) {
  const location = useLocation();
  const dispatch = useDispatch();
  // En MainLayout, calcula clientId basado en la información del usuario:
  const { user } = useClerk();
  const userInfo = useSelector((state) => state.users.userInfo);
  const clientId = userInfo?.username ?? user?.firstName ?? "incognito";

  useEffect(() => {
    // Puedes hacer algo aquí cada vez que clientId cambia si es necesario
    console.log("Client ID has changed:", clientId);
  }, [clientId]);

  const isErrorPage = location.pathname === "/error404";

  const showNavbarAndFooter =
    !isErrorPage &&
    location.pathname !== "/login" &&
    location.pathname !== "/register";

  useEffect(() => {
    const SOCKET_IO_SERVER_URL = "http://localhost:4000"; // Dirección del servidor de Socket.IO
    const newSocket = io(SOCKET_IO_SERVER_URL);
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    const removeModalIndicator = () => {
      localStorage.removeItem("modalShown");
    };
    window.addEventListener("beforeunload", removeModalIndicator);
    return () => {
      window.removeEventListener("beforeunload", removeModalIndicator);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          const userInfo = await getUserInfo();
          if (userInfo) {
            dispatch({
              type: "SET_USER_INFO",
              payload: userInfo,
            });
          }
        } else {
          console.error("No se encontró el token en las cookies");
        }
      } catch (error) {
        console.error("Error al obtener información del usuario:", error);
      }
    };
    fetchData();
  }, []);

  const [showChat, setShowChat] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false); // Estado para controlar la visibilidad del spinner

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true); // Mostrar el spinner después de 5 segundos
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);

  const toggleChat = () => {
    setShowChat(!showChat); // Togglea el estado de showChat
    setShowSpinner(true);
    if (!showChat) {
      setShowSpinner(false); // Oculta el cuadrado giratorio
      setShowChatButton(true); // Muestra el botón "Chat en vivo"
    }
  };
  const [showChatButton, setShowChatButton] = useState(true);

  const toggleChatButton = () => {
    setShowChatButton(false); // Oculta el botón "Chat en vivo"
    setShowSpinner(true); // Muestra el cuadrado giratorio
    toggleChat(); // Abre el chat automáticamente
  };

  const webChatOptions = {
    integrationID: "ce1515f8-1344-49b7-a501-5d44d7f84f56",
    region: "us-south",
    serviceInstanceID: "d3191470-5377-421f-9c8e-d24297a6ffab",
    // Aquí puedes agregar otras opciones de configuración
  };

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <WebChatContainer config={webChatOptions} />
      {showChatButton && (
        <button
          onClick={toggleChatButton}
          className="cursor-pointer mr-36 mb-3 fixed right-0 bottom-0 h-[50px] px-6 bg-amber-300  hover:bg-amber-400 transition-colors rounded-2xl shadow-lg "
        >
          Chat en vivo
        </button>
      )}
      {showSpinner && !showChatButton && (
        <div
          className="spinner"
          onClick={toggleChat}
          style={{
            cursor: "pointer",
            position: "fixed",
            right: "150px",
            bottom: "20px",
          }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {showChat && (
        <div className="fixed right-5 bottom-20 w-96 h-[690px] bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-50 mr-3">
          <ClientChat showChat={showChat} clientId={clientId} socket={socket} />
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/landing" element={<LandingView />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/results" element={<ResultsView />} />
        <Route
          path="/termsAndConditions"
          element={<TermsAndConditionsView />}
        />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route path="/offers" element={<OffersView />} />
        <Route path="/services" element={<ServicesView />} />
        <Route path="/reviews" element={<ReviewsView socket={socket} />} />
        <Route path="/clientChat/" element={<ClientChat socket={socket} />} />
        <Route
          path="/administradorChat"
          element={<AdministradorChat socket={socket} />}
        />
        <Route path="/bookNotify" element={<BookNotify socket={socket} />} />
        <Route
          path="/administradorNotify"
          element={<AdministradorNotify socket={socket} />}
        />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/booking" element={<BookingView />} />
        <Route path="/bookingTwo" element={<BookingPartTwoView />} />
        <Route path="/bookingThree" element={<BookingPartThreeView />} />
        <Route path="/bookingSuccess" element={<BookingPartFourView />} />
        <Route path="/forgotpassword" element={<ForgotPasswordView />} />
        <Route
          path="/forgotPasswordRecovery"
          element={<ForgotPasswordRecoveryView />}
        />
        <Route path="/BookingFail" element={<BookingFailView />} />
        <Route path="/passwordRecovery" element={<PasswordRecoveryView />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/error404" replace />} />

        <Route
          path="/termsAndConditions"
          element={<TermsAndConditionsView />}
        />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route path="/offers" element={<OffersView />} />
        <Route path="/services" element={<ServicesView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route
          path="/email-confirmation/:verificationCode"
          element={<EmailConfirmation />}
        />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  const [socket, setSocket] = useState(null);
  return (
    <Router>
      <MainLayout socket={socket} setSocket={setSocket} />
    </Router>
  );
}

export default App;
