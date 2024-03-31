import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeView from './views/HomeView';
import Navbar from './components/navbar/Navbar';
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

function MainLayout() {
 const location = useLocation();

 return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/landing' element={<LandingView />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/login" element={<LoginView/>}/>
        <Route path="/results" element={<ResultsView/>}/>
        <Route path="/termsAndConditions" element={<TermsAndConditionsView/>}/>
        <Route path="/register" element={<RegisterView/>}/>
        <Route path="/gallery" element={<GalleryView/>}/>
        <Route path="/offers" element={<OffersView/>}/>
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
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
