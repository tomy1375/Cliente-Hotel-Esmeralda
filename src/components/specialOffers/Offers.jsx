import React from "react";
import dataOffers from "../../../data/dataOffers";
import { Link } from 'react-router-dom'

const Offers = () => {
  const maxHeight = 540;

  return (
    <div className="container mx-auto mt-20 mb-20 space-y-20">
      {dataOffers.map((offer, index) => (
        <div key={index} className="border-box-style flex items-stretch">
          <div className="w-3/5 flex items-center">
            <img
              src={offer.Url}
              alt={offer.name}
              className="rounded-l-3xl w-full h-full object-cover"
              style={{ maxHeight: `${maxHeight}px` }}
            />
          </div>
          <div
            className="w-2/5 flex flex-col bg-v px-6 text-white rounded-r-3xl mt-10 mb-10"
            style={{ height: `${maxHeight}px` }}
          >
            <h1 className="text-5xl text-center font-bold mt-10 mb-8">
              {offer.name}
            </h1>
            <p className="text-3xl leading-tight mb-8 overflow-auto mt-5">
              {offer.description}
            </p>
            <ul className="list-disc pl-6 mb-8">
              {offer.services.map((service, index) => (
                <li key={index} className="text-2xl">
                  {service}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button className="w-1/4 mx-4 text-xl py-4 font-bold text-white bg-amber-300 rounded-2xl shadow-lg">
                {offer.price}
              </button>
              <Link to={`/reservas/${offer.id}`} className="w-1/4 mx-4">
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
