import * as React from "react";

const ReservationCard = ({ reservation }) => {
  return (
    <div className="flex gap-5 py-0.5 pr-7 pl-px mt-16 w-full bg-white rounded-2xl border border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <img
              src={reservation.image}
              alt={reservation.alt}
              className="grow w-full rounded-2xl aspect-[1.56] max-md:mt-8"
            />
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-lg tracking-normal leading-7 text-black max-md:mt-10">
              <div>{reservation.title}</div>
              <div className="mt-5">{reservation.nights} NIGHTS</div>
              <div className="mt-6">CHECK-IN : {reservation.checkIn}</div>
              <div className="mt-5">Total price: ${reservation.price}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center self-start px-2.5 py-2.5 mt-6 text-lg tracking-normal leading-7 whitespace-nowrap bg-red-300 rounded-2xl text-stone-900 text-opacity-80">
        {reservation.status}
      </div>
    </div>
  );
};

const ReservationActions = () => {
  return (
    <div className="flex flex-col my-auto text-lg tracking-normal leading-7 whitespace-nowrap text-stone-900 text-opacity-80">
      <div className="justify-center px-7 py-2.5 bg-emerald-200 rounded-[52.49px] max-md:px-5">
        Active
      </div>
      <div className="justify-center px-10 py-2.5 mt-3.5 bg-orange-300 rounded-[52.49px] max-md:px-5">
        Edit
      </div>
      <div className="justify-center px-6 py-2.5 mt-2.5 bg-red-300 rounded-[52.49px] max-md:px-5">
        Cancel
      </div>
    </div>
  );
};

function RestaurantReservation() {
  const reservations = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cf8e801c8658a08453f1c20c20108e48b84f992e16aa011c35159b055925f8a?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
      alt: "Standard King room",
      title: "Standard King",
      nights: 3,
      checkIn: "03/05/2024",
      price: 120,
      status: "Cancelled",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4e5727f1c51a0ad7e9e9fca7f024ac34ec264dd32fb761eff26da343bfe3abf?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
      alt: "Junior Suite room",
      title: "Junior Suite",
      nights: 3,
      checkIn: "03/06/2024",
      price: 200,
      status: "Active",
    },
  ];


  return (
    <div className="flex flex-col px-7 pt-8 pb-14 rounded-2xl border border-solid shadow-sm border-neutral-800 max-md:px-5">
      <h1 className="text-6xl font-extrabold tracking-tighter text-black leading-[70.4px] max-md:max-w-full max-md:text-4xl">
        Reservations
      </h1>
      {reservations.map((reservation, index) => (
        <div key={index} className="flex gap-5 mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <ReservationCard reservation={reservation} />
          {index === 1 && <ReservationActions />}
        </div>
      ))}
     
    </div>
  );
}

export default RestaurantReservation;