import React, { useState, useEffect } from "react";
import LandingPages from "../landing/LandingPage";
import SearchBar from "./SearchBar";
import IconRow from "./Icons.jsx";
import About from "./About.jsx";
import ClientChat from "../chat/ClientChat.jsx";
import { WebChatContainer } from '@ibm-watson/assistant-web-chat-react';
import "./Home.css";
// import { WebChatCustomElement } from '@ibm-watson/assistant-web-chat-react';

function Home() {
  const [showModal, setShowModal] = useState(true);
  const webChatOptions = {
    integrationID: "ce1515f8-1344-49b7-a501-5d44d7f84f56",
    region: "us-south",
    serviceInstanceID: "d3191470-5377-421f-9c8e-d24297a6ffab",
    // Aquí puedes agregar otras opciones de configuración
  };

  return (
    <>
      <LandingPages showModal={showModal} setShowModal={setShowModal} />
      <SearchBar />
      <IconRow />
      <About />\
      <WebChatContainer config={webChatOptions} />
      
    </>
  );
}

export default Home;
