import React, { useState } from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";

const CarouselPhotos = ({ images, altTexts }) => {
  // Ensure that images and altTexts are arrays; convert null to empty array
  images = images || [];
  altTexts = altTexts || [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (images.length === 0) {
    return <div>No images available.</div>;
  }

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="h-96 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={altTexts[currentImageIndex] || 'Image'}  
          className="w-full h-full object-cover"
        />
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-md"
        onClick={handlePrevClick}
      >
        <FcPrevious />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-md"
        onClick={handleNextClick}
      >
        <FcNext />
      </button>
    </div>
  );
};

export default CarouselPhotos;
