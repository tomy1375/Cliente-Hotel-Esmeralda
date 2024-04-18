import React from 'react'

const ReservationCard = ({ imageSrc, title, nights, checkIn, checkOut,price, status }) => (
    <div className="flex gap-5 py-0.5 pr-7 pl-px mt-16 w-full bg-slate-300 rounded-2xl border border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={imageSrc} alt={title} className="grow w-full rounded-2xl aspect-[1.56] max-md:mt-8" />
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-lg tracking-normal leading-7 text-black max-md:mt-10">
              <div>{title}</div>
              <div className="mt-5">{nights} NIGHTS</div>
              <div className="mt-6">CHECK-IN : {checkIn} <br />CHECK-OUT: {checkOut}</div>
              <div className="mt-5">Total price: ${price}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center self-start px-2.5 py-2.5 mt-6 text-lg tracking-normal leading-7 whitespace-nowrap bg-v rounded-2xl text-white text-opacity-80">
        {status}
      </div>
    </div>
  );
  
  const RestaurantReservationCard = ({ imageSrc, title, reserved }) => (
    <div className="flex gap-5 py-0.5 pr-7 pl-px mt-16 w-full bg-slate-300 rounded-2xl border border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={imageSrc} alt={title} className="grow w-full rounded-2xl aspect-[1.56] max-md:mt-8" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 text-lg tracking-normal leading-7 text-black max-md:mt-10">
              <div>{title}</div>
              <div className="mt-7">Reserved: {reserved}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-auto text-lg tracking-normal leading-7 whitespace-nowrap text-stone-900 text-opacity-80">
        <div className="justify-center px-6 py-2.5 bg-v rounded-2xl max-md:px-5 text-white">Active</div>
        <button>

        <div className="justify-center px-10 py-2.5 mt-3.5 bg-d rounded-[52.49px] hover:bg-amber-400 max-md:px-5 transition-colors">Edit</div>
        </button>
        <button>

        <div className="justify-center px-6 py-2.5 mt-3 bg-red-500 hover:bg-red-600 rounded-2xl max-md:px-5 transition-colors">Cancel</div>
        </button>
      </div>
    </div>
  );
  
  const reservations = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cf8e801c8658a08453f1c20c20108e48b84f992e16aa011c35159b055925f8a?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&",
      title: "Standar King",
      nights: "3",
      checkIn: "03/05/2024",
      checkOut: "05/06/2024",
      price: "120",
      status: "Cancelled",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4e5727f1c51a0ad7e9e9fca7f024ac34ec264dd32fb761eff26da343bfe3abf?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&",
      title: "Junior Suit",
      nights: "3",
      checkIn: "02/05/2024", 
      checkOut: "05/05/2024",
      price: "200",
      status: "Active",
    },
  ];
  
  const restaurantReservations = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d5e5a3cff282f0abbc35248c62cfbdeb956f50a9e66d4e689f5682b582698e5?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&",
      title: "Esmeralda Restaurant",
      reserved: "04/06/2024 22 hs.",
    },
  ];

const ReservationModal = ({ isOpen, onClose }) => {

  if (!isOpen) {
    return null; // No renderiza nada si el modal no está abierto
 }

  return (
    <div className=" flex items-center justify-center mr-80">

    <div className="">
            <div className="flex flex-col self-center items-center justify-center px-7 pt-8 pb-14 mt-1  mb-3 w-full rounded-2xl border border-solid shadow-sm bg-white max-w-[1000px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="items-center justify-center text-6xl font-extrabold tracking-tighter text-black leading-[70.4px] max-md:max-w-full max-md:text-4xl">Reservations</h2>
          {reservations.map((reservation, index) => (
            <ReservationCard key={index} {...reservation} />
          ))}
          {restaurantReservations.map((reservation, index) => (
            <RestaurantReservationCard key={index} {...reservation} />
          ))}
        </div>
        <button onClick={onClose}>Cerrar</button>
    </div>
    </div>
  )
}

export default ReservationModal