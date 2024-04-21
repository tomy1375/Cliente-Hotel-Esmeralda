import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import dataRooms from "../../../data/dataRooms";
import dataHotel from "../../../data/dataHotel";
import dataEvents from "../../../data/dataEvents";

const Gallery = ({ filter }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  let allData = [];

  switch (filter) {
    case 'ROOMS':
      allData = dataRooms;
      break;
    case 'HOTEL':
      allData = dataHotel;
      break;
    case 'EVENTS':
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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="min-h-[500px] grid grid-cols-3 gap-11 mt-5 mb-9">
        {currentPageData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div style={{ width: '500px', height: '280px' }} className="overflow-hidden">
              <img
                src={item.Url}
                alt={item.name}
                className="w-full h-full object-cover"
                onClick={() => openModal(item.Url)}
              />
            </div>
            <p className="text-center text-3xl">{item.name}</p>
            <p className="text-center text-lg">{item.description}</p>
            <p className="text-center text-xl">{item.date}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 absolute inset-0 z-40"></div>
          <div style={{ width: '600px', height: '500px' }} className="relative bg-white p-4 rounded-lg m-auto z-50">
            <img src={selectedImage} alt="Selected" className="w-full h-full object-contain" />
            <button onClick={closeModal} className="absolute top-0 right-0 p-4">
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white z-10 flex justify-center items-center mt-10 py-2 px-4 rounded">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="bg-v hover:text-yellow-500 text-white font-bold py-2 px-4 rounded-l flex items-center justify-center ">
          <FontAwesomeIcon icon={faChevronLeft} className="text-2xl mr-2" />
          Prev
        </button>
        <div className="text-xl mx-4">Page {currentPage}</div>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= allData.length} className="bg-v hover:text-yellow-500 text-white font-bold py-2 px-4 rounded-r flex items-center justify-center">
          Next
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
