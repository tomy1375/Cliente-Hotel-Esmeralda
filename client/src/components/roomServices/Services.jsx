import React, { useEffect, useState } from "react";
import requestAllCars from "../../services/cars/requestAllCars";
import { Link } from "react-router-dom";
import CarouselPhotos from "../general/CarouselPhotos.jsx";
import ServicesSpa from "../roomServices/ServicesSpa";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await requestAllCars();
        setCars(carsData);
      } catch (error) {
        console.error("Error al obtener los autos:", error);
      }
    };
    fetchCars();
  }, []);



  return (
    <div className="container mx-auto mt-4 mb-4 space-y-8">
      <ServicesSpa />
      {cars.map((car, index) => (
        <div
          className={`flex flex-wrap justify-center items-center ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
          key={index}
        >
          <div className="w-full lg:w-1/2 p-4">
            <div className="h-96 overflow-hidden">
              <CarouselPhotos images={car.photos} altTexts={car.brands} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center gap-4">
            <div>
              <h1 className="text-3xl lg:text-6xl text-center font-bold mt-0 mb-6">
                {car.brands}
              </h1>
              <p className="text-lg lg:text-3xl leading-relaxed mb-4">
                {car.description}
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-base lg:text-3xl">
                  Transmission: {car.transmision}
                </li>
                <li className="text-base lg:text-3xl">
                  Passenger Capacity: {car.passenger}
                </li>
                <li className="text-base lg:text-3xl">Type: {car.type_car}</li>
                <li className="text-base lg:text-3xl">
                  Price per Day: ${car.price_per_day}
                </li>
              </ul>
              <div className="flex justify-center">
                <Link to="/reservation" className="w-1/4 mx-4">
                  <button className="text-xl py-4 font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg w-full">
                    BOOK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;



