import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import dataRooms from "../../../data/dataRooms";
import dataHotel from "../../../data/dataHotel";
import dataEvents from "../../../data/dataEvents";

const Gallery = ({ filter }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const [selectedImage, setSelectedImage] = useState(""); // Estado para almacenar la imagen seleccionada

  let allData = [];

  switch (filter) {
    case "ROOMS":
      allData = dataRooms;
      break;
    case "HOTEL":
      allData = dataHotel;
      break;
    case "EVENTS":
      allData = dataEvents;
      break;
    default:
      allData = [...dataRooms, ...dataHotel, ...dataEvents];
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = allData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const openModal = (imageUrl) => {
    setIsModalOpen(true);
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div>
      <div className="min-h-[500px]">
        <div className="grid grid-cols-3 gap-11 mt-5 mb-9">
          {currentPageData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.Url}
                alt={item.name}
                style={{ width: "500px", height: "400px" }}
                className="object-cover mb-7 overflow-auto cursor-pointer"
                onClick={() => openModal(item.Url)}
              />
              <p className="text-center text-3xl">{item.name}</p>
              <div className="overflow-auto flex  justify-center text-lg max-h-[300px]">
                <p className=" text-center w-4/5">{item.description}</p>
              </div>
              <p className="text-center text-xl">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Fondo oscuro */}
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="bg-white p-4 rounded-lg"
              style={{ maxWidth: "90%", maxHeight: "90%" }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto object-contain max-w-full max-h-full"
              />
              <button
                onClick={closeModal}
                className="mt-4 bg-d text-white px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
      {/* Fin Modal */}
      <div
        style={{
          position: "absolute",
          bottom: "-35px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          zIndex: 10,
        }}
        className="flex justify-center items-center mt-10"
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-v hover:text-yellow-500 text-white font-bold py-2 px-4 rounded-l flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-2xl mr-2" />
          Prev
        </button>
        <div className="text-xl mx-4">Page {currentPage}</div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= allData.length}
          className="bg-v hover:text-yellow-500 text-white font-bold py-2 px-4 rounded-r flex items-center justify-center"
        >
          Next
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
