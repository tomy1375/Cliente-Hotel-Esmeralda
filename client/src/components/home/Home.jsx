import React, { useState, useEffect } from "react";
import LandingPages from "../landing/LandingPage";
import SearchBar from "./SearchBar";
import IconRow from "./Icons.jsx";
import About from "./About.jsx";
import ClientChat from "../chat/ClientChat.jsx";

import "./Home.css";

function Home() {
  const [showModal, setShowModal] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);  // Estado para controlar la visibilidad del spinner

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);  // Mostrar el spinner después de 5 segundos
    }, 5000);  // 5000 ms = 5 segundos

    return () => clearTimeout(timer);  // Limpiar el temporizador
  }, []);

  const toggleChat = () => {
    setShowChat(!showChat);  // Esto togglea el estado de showChat
  };

  return (
    <>
      <LandingPages showModal={showModal} setShowModal={setShowModal} />
      <SearchBar />
      <IconRow />
      <About />
      {showSpinner && (
        <div className="spinner" onClick={toggleChat} style={{ cursor: 'pointer', position: 'fixed', right: '20px', bottom: '20px' }}>
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
          <ClientChat showChat={showChat} />
        </div>
      )}
    </>
  );
}

export default Home;
