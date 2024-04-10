import React from 'react';
import dataServices from '../../../data/dataServices';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container mx-auto mt-4 mb-4 space-y-8">
      {dataServices.map((service, index) => (
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
              {index === 2 ? (
                <div className="flex justify-center">
                  <Link to='/restaurant' className='w-1/4 mx-4'>
                    <button className="text-xl py-4 font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg w-full">
                      BOOK
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="text-xl py-4 font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg w-1/4 text-center">
                    {service.price}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;