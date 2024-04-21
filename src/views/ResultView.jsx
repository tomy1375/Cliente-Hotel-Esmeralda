import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../components/modal/modal";
import DetailModalRoom from "../components/detail/DetailModalRoom";

const Results = () => {
  const location = useLocation();
  const availableRooms = location.state?.availableRooms || [];
  const navigate = useNavigate();

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true); // Open modal when room is selected
  };

  const handleClick = () => {
    navigate("/formulario");
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setIsModalOpen(false); // Close modal when "Cerrar" button is clicked
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Resultados de búsqueda
        </h2>
        {availableRooms.length === 0 ? (
          <div className="text-lg text-gray-600">
            No se encontraron habitaciones disponibles.
          </div>
        ) : (
          availableRooms.map((room) => (
            <div
              className="pl-16 rounded-3xl shadow-sm bg-v max-md:pl-5 w-full lg:w-12/12 m-6 lg:h-[66%]"
              key={room.id}
            >
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                <div className="flex flex-col w-[44%] max-md:ml-8 max-md:w-full lg:h-[66%]">
                  <div className="flex flex-col mt-7 lg:h-[66%]">
                    <div className="flex flex-col items-start  max-md:pl-5 max-md:max-w-full lg:h-[66%] ">
                      <div className=" ">
                        <div className="flex  max-md:flex-col max-md:gap-0 lg:h-[66%]">
                          <div className="flex flex-col  max-md:ml-0 max-w-md ">
                            <div className="mt-5 ml-24 text-2xl font-extrabold text-center text-white lg:h-[66%] ">
                              {room.room_type.name}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12 ml-24 text-base font-semibold text-white max-md:mt-10 max-md:ml-2.5 lg:h-[66%]">
                        Sleeps {room.max_capacity} | 2 King
                      </div>
                    </div>
                    <div className="mt-5 mb-8 text- font-medium text-white ">
                      {room.description}
                    </div>
                    <h4 className="text-white">
                      PRICE FOR NIGHT ${room.price_per_night}
                    </h4>
                    <button
                      className="justify-center items-center px-16 py-4  text-base font-extrabold tracking-normal leading-6 text-white rounded-2xl border border-violet-100 border-solid hover:bg-slate-950 transition-colors max-md:px-5 max-md:max-w-full"
                      onClick={() => handleRoomClick(room)} // Call handleRoomClick when "SEE MORE" is clicked
                    >
                      SEE MORE
                    </button>
                    <button
                      className="mb-7 justify-center items-center px-16 py-4 mt-6 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
                      onClick={handleClick}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[57.5%]  max-md:w-full ">
                  <img
                    loading="lazy"
                    src={room.photo_url}
                    className="grow w-full  rounded-r-3xl "
                    alt={`Habitación ${room.room_number}`}
                  />
                </div>
              </div>
            </div>
          ))
        )}

        {
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <DetailModalRoom room={selectedRoom} />
          </Modal>
        }
      </div>
    </div>
  );
};

export default Results;
