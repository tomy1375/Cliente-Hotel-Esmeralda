import React, { useEffect, useState } from "react";
import requestAllCars from "../../services/cars/requestAllCars";
import { Link, useLocation } from "react-router-dom";
import CarouselPhotos from "../general/CarouselPhotos.jsx";
import ServicesSpa from "../roomServices/ServicesSpa";
import { useNavigate } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [isSpaSectionReady, setIsSpaSectionReady] = useState(false);
  const [isCarSectionReady, setIsCarSectionReady] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await requestAllCars();
        setCars(carsData);
        // Indicar que la sección del auto está lista después de un cierto tiempo (1 segundo en este caso)
        setTimeout(() => {
          setIsCarSectionReady(true);
          setIsSpaSectionReady(true)
        }, 1000);
      } catch (error) {
        console.error("Error al obtener los autos:", error);
      }
    };
    fetchCars();
  }, []);

  const handleBookNowClick = () => {
    // Navega a la página del restaurante y automáticamente desplázate a la sección del formulario de reserva
    navigate('/restaurant#reservation-form');
  };

  const handleDishesowClick = () => {
    // Navega a la página del restaurante y automáticamente desplázate a la sección del formulario de reserva
    navigate('/restaurant#food');
  };

  const location = useLocation();

  
  useEffect(() => {
    // Desplazarse a la sección del auto solo cuando esté lista
    if (isCarSectionReady && location.hash === "#car") {
      const element = document.getElementById("car");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isCarSectionReady, location.hash]);

  
  useEffect(() => {
    // Desplazarse a la sección del spa solo cuando esté lista
    if (isSpaSectionReady && location.hash === "#spa") {
      const element = document.getElementById("spa");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isSpaSectionReady, location.hash]);


  return (
    <div className="container mx-auto mt-4 mb-4 space-y-8">
              <div
          className="flex flex-wrap justify-center items-center" 
          
        >
          <div className="w-full lg:w-1/2 p-4">
            <div className="h-96 overflow-hidden">
              <img src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg" alt="car" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center gap-4">
            <div>
              <h1 className="text-3xl lg:text-6xl text-center font-bold mt-0 mb-6">
                Restaurant
              </h1>
              <p className="text-lg lg:text-3xl leading-relaxed mb-4">
              Experience the finest culinary delights, crafted with love and served with a smile. 😊
              Join us for an evening of exquisite dining, where every bite tells a story. 📖
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-base lg:text-3xl">
                Reserve your table now .
                </li>
                <li className="text-base lg:text-3xl">
                let us pamper you with our exceptional service and mouth-watering dishes. 🍲
                </li>
              </ul>
              <div className="flex justify-center">
 <div className="flex space-x-9"> {/* Añade 'flex' y 'space-x-4' para distribuir los botones */}
    <Link to="/restaurant#reservation-form" className="flex ">
      <button onClick={handleBookNowClick} className="text-xl py- px-3 font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg w-full">
        BOOK A TABLE
      </button>
    </Link>
    <button onClick={handleDishesowClick} className="text-xl py-3 px-5 font-bold text-white bg-v hover:bg-green-950 transition-colors rounded-2xl shadow-lg ">
    VIEW MENU
    </button>
 </div>
</div>

            </div>
          </div>
        </div>
        <div id="spa">

      <ServicesSpa />
        </div>
      {cars.map((car, index) => (
        <div
          className={`flex flex-wrap justify-center items-center ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
          key={index}
        >
          <div className="w-full lg:w-1/2 p-4">
            <div id="car" className="h-96 overflow-hidden">
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
