import React, { useState, useEffect } from "react";
import LandingPages from "../landing/LandingPage";
import SearchBar from "./SearchBar";
import IconRow from "./Icons.jsx";
import About from "./About.jsx";
import ClientChat from "../chat/ClientChat.jsx";

import "./Home.css";

function Home() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <LandingPages showModal={showModal} setShowModal={setShowModal} />
      <SearchBar />
      <IconRow />
      <About />
      
    </>
  );
}

export default Home;
