import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
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


function MainLayout() {
  const location = useLocation();
  const dispatch = useDispatch();

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
  });

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
        <Route path="/profile" element={<ProfileView/>}/>
        <Route path="/booking" element={<BookingView/>}/>
        <Route path="/bookingTwo" element={<BookingPartTwoView/>}/>
        <Route path="/bookingThree" element={<BookingPartThreeView/>}/>
        <Route path="/bookingSuccess" element={<BookingPartFourView/>}/>
        <Route path="/forgotpassword" element={<ForgotPasswordView/>}/>
        <Route path="/forgotPasswordRecovery" element={<ForgotPasswordRecoveryView/>}/>
        <Route path="/BookingFail" element={<BookingFailView/>}/>
        <Route path="/passwordRecovery" element={<PasswordRecoveryView/>}/>

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
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
