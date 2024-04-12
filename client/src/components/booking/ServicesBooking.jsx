import React from 'react';
import { useNavigate } from 'react-router-dom';
import dataServices from '../../../data/dataServices';

const ServicesBooking = () => {
 const navigate = useNavigate();

 const handleBookNow = (service) => {
    navigate('/bookingThree', {
      state: {
        serviceName: service.name,
        servicePrice: service.price,
      },
    });
 };

 return (
    <div className="container mx-auto mt-4 mb-4 space-y-8">
      {dataServices.map((service, index) => {
        if (service.id === 3 || service.name === "Special Offers" || service.name === "Luxury In-Room Services" || service.name === "Rental Cars") {
          return null;
        }

        return (
          <div className={`flex flex-wrap justify-center items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} key={index}>
            <div className="w-full lg:w-1/2 p-4">
              <div className="h-96 overflow-hidden">
                <img src={service.Url} alt={service.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center gap-4">
              <div>
                <h1 className='text-3xl lg:text-6xl text-center font-bold mt-0 mb-6'>{service.name}</h1>
                <p className="text-lg lg:text-3xl leading-relaxed mb-4">{service.description}</p>
                <ul className="list-disc pl-6 mb-6">
                 {service.services.map((serviceItem, index) => (
                    <li key={index} className="text-base lg:text-3xl">{serviceItem}</li>
                  ))}
                </ul>
                <div className="flex justify-center gap-2">
                 <div className="flex justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-v hover:bg-green-950 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
                    USD {service.price}
                 </div>
                 <button
                    className="flex justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
                 
                 >
                    ADD BOOK
                 </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
 );
};

export default ServicesBooking;
