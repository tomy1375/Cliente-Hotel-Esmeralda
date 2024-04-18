import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';

const AdministradorNotify = ({ socket }) => {
  const [reservas, setReservas] = useState([]);
  const [newReservasCount, setNewReservasCount] = useState(0);
  const [showReservasDetails, setShowReservasDetails] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const handleAdminNotification = (bookingData) => {
      setReservas(prevReservas => [...prevReservas, bookingData]);
      setNewReservasCount(prevCount => prevCount + 1);
    };

    if (socket && isMounted) {
      socket.emit('joinAdministrador');

      socket.on('connect', () => {
        setNewReservasCount(0);
      });

      socket.on('adminNotification', handleAdminNotification);

      return () => {
        isMounted = false;
        socket.off('adminNotification', handleAdminNotification);
      };
    }
  }, [socket]);

  const limpiarReservas = () => {
    setReservas([]);
    setNewReservasCount(0);
    setShowReservasDetails(false);
  };

  const handleCampanitaClick = () => {
    setShowReservasDetails(!showReservasDetails);
    if (newReservasCount > 0) {
      setNewReservasCount(0);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Administrador</h1>
      <div>
        <div className="flex items-center justify-between">
          <div></div>
          <div className="flex items-center relative">
            <FaBell className="text-yellow-500 cursor-pointer text-3xl" onClick={handleCampanitaClick} />
            {newReservasCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute -top-1 -right-1">
                {newReservasCount}
              </span>
            )}
          </div>
        </div>
        {showReservasDetails && (
          <>
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-2">Detalles de Reservas Nuevas</h2>
              {reservas.map((reserva, index) => (
                <div key={index} className="bg-white p-4 rounded shadow mb-4">
                  {Object.entries(reserva).map(([key, value]) => (
                    <div key={key} className="mb-2">
                      <span className="font-bold">{key}:</span> {value}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={limpiarReservas} className="w-40 bg-amber-300 hover:bg-amber-400 transition-colors text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">
                REFRESH BOOKS
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdministradorNotify;
