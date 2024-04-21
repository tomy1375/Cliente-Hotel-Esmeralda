import React, { useState, useEffect } from 'react';
import CardsRooms from '../components/cardsRooms/cardsRooms';

import '../components/home/Home.css'; // Asegúrate de que el CSS para el spinner esté incluido
import ClientChat from '../components/chat/ClientChat';

const Rooms = () => {


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

    </div>
  );
};

export default Rooms;
