import React from "react";
import Logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <nav className="bg-v text- py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex flex-col items-center space-y-4">
          <h2>QUICK LINK</h2>
          <a href="#" className="hover:text-d f">
            Home
          </a>
          <a href="#" className="hover:text-d">
            Rooms
          </a>
          <a href="#" className="hover:text-d">
            Services
          </a>
          <a href="#" className="hover:text-d">
            Restaurant
          </a>
          <a href="#" className="hover:text-d">
            Special Offers
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <a href="/" className="cursor-pointer">
            <img src={Logo} alt="Logo del hotel" className="h-24" />
          </a>
          <p>Buenos Aires,Argentina</p>
          <p>
            <a href="tel:+5411123456789">+54 11 1234-5678</a>
          </p>
          <p>
            <a href="mailto:esmeralda_hotel@mail.com">
              esmeralda_hotel@mail.com
            </a>
          </p>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <form className="flex items-center justify-center border border-yellow-500 p-0 rounded-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-white text-center"
            />
            <button className="text-v text-xl bg-yellow-500 hover:bg-yellow-600 border-yellow-500 py-2 px-4 rounded-md">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h2>LEGAL</h2>
          <a href="#" className="hover:text-d">
            Galerry
          </a>
          <a href="#" className="hover:text-d">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-d">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-d">
            Contact Us
          </a>
          <a href="#" className="hover:text-d">
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
