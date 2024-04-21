import React, { useState, useEffect } from 'react';
import CardRoom from '../cardRooms/cardRoom';
import { API_URL } from '../../utils/global';
import Loading from '../general/Loading';

const baseURL = API_URL;


const CardsRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}api/rooms`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRooms(data);
        setLoading(false);
        console.log('Habitaciones obtenidas:', data);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='mt-9'>
      <Loading/>
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid 1 gap-9 justify-items-center lg:h-[70%]">
      {rooms.map((room, index) => (
        <CardRoom key={index} room={room} className="lg:h-[70%]" />
      ))}
    </div>
  );
};

export default CardsRooms;
