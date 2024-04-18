import React, { useState, useEffect } from 'react';
import CardsRooms from '../components/cardsRooms/cardsRooms';

import '../components/home/Home.css'; // Asegúrate de que el CSS para el spinner esté incluido
import ClientChat from '../components/chat/ClientChat';

const Rooms = () => {
  const [showChat, setShowChat] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true); // Mostrar el spinner después de 5 segundos
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);

  const toggleChat = () => {
    setShowChat(!showChat); // Esto togglea el estado de showChat
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 mb-8">
        <h1 className="text-6xl font-extrabold text-center max-w-[548px] text-neutral-800 tracking-[3px] max-md:text-4xl">
          ROOMS AND RATES
        </h1>
        <section className="text-3xl font-medium text-center border-0 border-solid border-blue-950 text-neutral-800 max-w-7xl mx-auto">
          <p className='mt-5 mb-3'>
            Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
            comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented
            by the rich tones of nature's palette as visible from our rooms' sea-view windows and terraces.
          </p>
        </section>
      </div>

      <CardsRooms />

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
        <div className="fixed right-5 bottom-20 w-96 h-[690px] bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-50">
          <ClientChat showChat={showChat} />
        </div>
      )}

    </div>
  );
};

export default Rooms;
