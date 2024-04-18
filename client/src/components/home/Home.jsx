import React, { useState } from "react";
import LandingPages from "../landing/LandingPage";
import SearchBar from "./SearchBar";
import IconRow from "./Icons.jsx";
import About from "./About.jsx";
import ClientChat from "../chat/ClientChat.jsx";

function Home() {
  const [showModal, setShowModal] = useState(true);
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);  // Esto togglea el estado de showChat
  };

  return (
    <>
      <LandingPages showModal={showModal} setShowModal={setShowModal} />
      <SearchBar />
      <IconRow />
      <About />
      <button
        onClick={toggleChat}
        className="fixed right-5 bottom-5 bg-v text-white py-2 px-4 rounded text-lg font-medium cursor-pointer shadow-lg hover:bg-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50"
      >
        Chat
      </button>
      {showChat && (
        <div className="fixed right-5 bottom-20 w-96 h-[690px] bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-50">
          <ClientChat showChat={showChat} />
        </div>
      )}
    </>
  );
}

export default Home;
