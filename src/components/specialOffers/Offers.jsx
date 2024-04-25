import React from "react";
import dataOffers from "../../../data/dataOffers";
import { Link } from 'react-router-dom';

const Offers = () => {
  const maxHeight = 540;

  return (
    <div className="container mx-auto mt-20 mb-20 space-y-20 px-4">
      {dataOffers.map((offer, index) => (
        <div key={index} className="flex flex-col md:flex-row items-stretch space-y-0 md:space-y-0">
          <div className="w-full md:w-3/5 flex items-center">
            <img
              src={offer.Url}
              alt={offer.name}
              className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none w-full h-auto object-cover"
              style={{ maxHeight: `${maxHeight}px` }}
            />
          </div>
          <div
            className="w-full md:w-2/5 flex flex-col bg-v px-6 text-white rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
            style={{ height: `${maxHeight}px` }}
          >
            <h1 className="text-3xl md:text-5xl text-center font-bold mt-6 md:mt-10 mb-8">
              {offer.name}
            </h1>
            <p className="text-xl md:text-3xl leading-tight mb-8 overflow-auto mt-5">
              {offer.description}
            </p>
            <ul className="list-disc pl-6 mb-8">
              {offer.services.map((service, index) => (
                <li key={index} className="text-xl md:text-2xl">
                  {service}
                </li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="w-full md:w-1/4 text-xl py-4 font-bold text-white bg-amber-300 rounded-2xl shadow-lg">
                {offer.price}
              </button>
              <Link to={`/reservas/${offer.id}`} className="w-full md:w-1/4">
                <button className="text-xl py-4 font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg w-full">
                  BOOK
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
