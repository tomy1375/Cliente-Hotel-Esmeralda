import React, { useEffect, useState } from 'react';
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
import RegisterView from './views/RegisterView';
import Footer from './components/footer/Footer';
import GalleryView from './views/GalleryView';
import ProfileView from './views/ProfileView';
import OffersView from './views/OffersView';
import { getUserInfo } from "./services/users/userInfo";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./redux/users/actions/usersActions";
import Cookies from "js-cookie";
import EmailConfirmation from "./views/ConfirmationEmail";
import ServicesView from "./views/ServicesView";
import ReviewsView from "./views/ReviewsView";
import ClientChat from './components/chat/ClientChat';
import AdministradorChat from './components/chat/AdministradorChat';
import BookNotify from './components/notifications/BookNotify';
import AdministradorNotify from './components/notifications/AdministradorNotify'
import { io } from 'socket.io-client';

function MainLayout({ socket, setSocket }) {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {

    const SOCKET_IO_SERVER_URL = 'http://localhost:8000'; // Dirección del servidor de Socket.IO
    const newSocket = io(SOCKET_IO_SERVER_URL); // ajusta la URL según la configuración del servidor
    setSocket(newSocket);

    return () => newSocket.close(); // cierra la conexión cuando el componente se desmonta
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
            dispatch(setUserInfo(userInfo));
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

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/landing" element={<LandingView />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/login" element={<LoginView/>}/>
        <Route path="/results" element={<ResultsView/>}/>
        <Route path="/termsAndConditions" element={<TermsAndConditionsView/>}/>
        <Route path="/register" element={<RegisterView/>}/>
        <Route path="/gallery" element={<GalleryView/>}/>
        <Route path="/offers" element={<OffersView/>}/>
        <Route path="/services" element={<ServicesView/>}/>
        <Route path="/reviews" element={<ReviewsView socket={socket} />} />
        <Route path="/clientChat/:id" element={<ClientChat socket={socket} />} />
        <Route path="/administradorChat" element={<AdministradorChat socket={socket} />} />
        <Route path="/bookNotify" element={<BookNotify socket={socket} />} />
        <Route path="/administradorNotify" element={<AdministradorNotify socket={socket} />} />
        <Route path="/profile" element={<ProfileView/>}/>
        <Route
          path="/termsAndConditions"
          element={<TermsAndConditionsView />}
        />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route
          path="/email-confirmation/:verificationCode"
          element={<EmailConfirmation />}
        />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
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
