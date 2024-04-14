import React, { useState } from 'react';
import Gallery from '../components/gallery/Gallery';

const GalleryView = () => {
  const [filter, setFilter] = useState("ALL");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="min-h-screen flex flex-col relative">  
    <div className="flex justify-center py-4 md:py-2">
      <div className="bg-v text-white py-2 flex justify-center items-center w-full md:w-1/2 rounded-md z-10">
        <button onClick={() => handleFilterChange("ALL")} className="mr-4 px-4 py-2 bg-transparent hover:text-yellow-500 border-transparent rounded-md text-xl transition-colors">ALL</button>
        <button onClick={() => handleFilterChange("ROOMS")} className="mr-4 px-4 py-2 bg-transparent hover:text-yellow-500 border-transparent rounded-md text-xl transition-colors">ROOMS</button>
        <button onClick={() => handleFilterChange("HOTEL")} className="mr-4 px-4 py-2 bg-transparent hover:text-yellow-500 border-transparent rounded-md text-xl transition-colors">HOTEL</button>
        <button onClick={() => handleFilterChange("EVENTS")} className="mr-4 px-4 py-2 bg-transparent hover:text-yellow-500 border-transparent rounded-md text-xl transition-colors">EVENT</button>
      </div>
    </div>
  
    <div className="flex flex-col justify-center items-center py-8 sm:py-10 lg:py-0">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-2"></h2>
      <Gallery filter={filter} />
    </div>
  </div>
  );
};

export default GalleryView;