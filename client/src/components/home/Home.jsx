import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LandingPages from "../landing/LandingPage";
import IconRow from "./Icons.jsx";
import About from "./About.jsx";

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
