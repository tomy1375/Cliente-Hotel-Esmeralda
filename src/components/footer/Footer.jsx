import React, { useEffect } from "react";
import Logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation(); 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Opcional: para un desplazamiento suave
    });
 };

 useEffect(() => {
  scrollToTop();
}, [location]); // Dependencia: la ubicación actual

  const handleRoom = () => {
    navigate("/rooms");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleServices = () => {
    navigate("/services");
  };
  const handleRestaurant = () => {
    navigate("/restaurant");
  };

  const handleSpecialOffert = () => {
    navigate("/offers");
  };

  const handleGallery = () => {
    navigate("/gallery");
  };

  return (
    <nav className="bg-v text- py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center  text-white">
        <div className="flex flex-col items-center space-y-4">
          <h2>QUICK LINK</h2>
          <button onClick={handleHome}>

          <a className="hover:text-d transition-colors">
            Home
          </a>
          </button>
          <button onClick={handleRoom}>

          <a className="hover:text-d transition-colors">
            Rooms
          </a>
          </button>
          <button onClick={handleServices}>

          <a href="#" className="hover:text-d transition-colors">
            Services
          </a>
          </button>
          <button onClick={handleRestaurant}>

          <a href="#" className="hover:text-d  transition-colors">
            Restaurant
          </a>
          </button>
          <button onClick={handleSpecialOffert}>

          <a href="#" className="hover:text-d  transition-colors">
            Special Offers
          </a>
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4  text-white">
          <a href="/" className="cursor-pointer">
            <img src={Logo} alt="Logo del hotel" className="h-24" />
          </a>
          <p className=" text-white">Buenos Aires,Argentina</p>
          <p>
            <a href="tel:+5411123456789">+54 11 1234-5678</a>
          </p>
          <p>
            <a href="mailto:esmeralda_hotel@mail.com">
              esmeralda_hotel@mail.com
            </a>
          </p>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <form className="flex items-center justify-center border border-yellow-500 p-0 rounded-md  transition-colors">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-white text-center"
            />
            <button className="text-v text-xl bg-yellow-500 hover:bg-yellow-600 border-yellow-500 py-2 px-4 rounded-md  transition-colors">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h2>LEGAL</h2>
          <button onClick={handleGallery}>

          <a className="hover:text-d  transition-colors">
            Gallery
          </a>
          </button>
          <a href="#" className="hover:text-d  transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-d  transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-d  transition-colors">
            Contact Us
          </a>
          <a href="#" className="hover:text-d  transition-colors">
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
