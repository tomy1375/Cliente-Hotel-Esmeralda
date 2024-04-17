import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarouselPhotos from "../general/CarouselPhotos.jsx";
import requestAllSpaServices from "../../services/spa/requestAllSpaServices";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await requestAllSpaServices();
        setServices(servicesData);
      } catch (error) {
        console.error("Error al obtener los autos:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="container mx-auto mt-4 mb-4 space-y-8">
      {services.map((service, index) => (
        <div
          className={`flex flex-wrap justify-center items-center ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
          key={index}
        >
          <div className="w-full lg:w-1/2 p-4">
            <div className="h-96 overflow-hidden">
              <CarouselPhotos images={service.photos} altTexts={service.name} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center gap-4">
            <div>
              <h1 className="text-3xl lg:text-6xl text-center font-bold mt-0 mb-6">
                {service.name}
              </h1>
              <p className="text-lg lg:text-3xl leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="list-disc pl-6 mb-6">
                {service.service_type.map((type, typeIndex) => (
                  <li key={typeIndex} className="text-base lg:text-3xl">
                    {type}
                  </li>
                ))}

                <li className="text-base lg:text-3xl">
                    Capacity :{service.max_capacity}
                </li>

              </ul>
              <div className="flex justify-center">
                <Link to="/reservation" className="w-1/4 mx-4">
                  <button className="text-xl py-4 font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg w-full">
                    BOOK
                  </button>
                </Link>

                <span  className="w-1/4 mx-4">
                  <button className="text-xl py-4 font-bold text-white bg-v hover:bg-green-950 transition-colors rounded-2xl shadow-lg w-full">
                  $ {service.price}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
