// import * as React from "react";

// function YourStayCard({ backgroundImage, checkInTime, guestCount, checkOutTime, totalPrice }) {
//   return (
//     <div className="flex overflow-hidden relative flex-col gap-3 px-10 py-5 text-xl font-extrabold tracking-normal leading-7 border border-solid aspect-[1.7] border-neutral-800 fill-zinc-100 max-w-[406px] stroke-[0.5px] stroke-neutral-800 text-neutral-800">
//       <img src={backgroundImage} alt="" className="object-cover absolute inset-0 size-full" />
//       <div className="flex relative flex-col flex-1">
//         <div className="flex flex-col justify-center font-bold">
//           <div className="flex flex-col justify-center">
//             <h2 className="justify-center">Your Stay</h2>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center mt-8 font-medium">
//           <div className="flex flex-col justify-center">
//             <p className="justify-center">After {checkInTime}</p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center">
//           <div className="flex flex-col justify-center">
//             <p className="justify-center">{guestCount} Adult</p>
//           </div>
//         </div>
//         <div className="justify-center px-10 py-0.5 mt-6 text-center whitespace-nowrap bg-amber-300 rounded-md text-zinc-100">
//           TOTAL
//         </div>
//       </div>
//       <div className="flex relative flex-col flex-1 self-end mt-10">
//         <p>Check-out</p>
//         <p className="mt-3 font-medium">Before {checkOutTime}</p>
//         <p className="self-end mt-16 text-2xl tracking-tight">$ {totalPrice}</p>
//       </div>
//     </div>
//   );
// }

// function CardTotal() {
//   const cardData = [
//     {
//       backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff9db6250c4c76f90950cf6a7c05234e5dcb336591fa5bc5cd90f8f87b596888?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
//       checkInTime: "3:00 PM",
//       guestCount: 2,
//       checkOutTime: "10:00 AM",
//       totalPrice: "0.00",
//     },
//   ];

//   return (
//     <main>
//       {cardData.map((card, index) => (
//         <YourStayCard
//           key={index}
//           backgroundImage={card.backgroundImage}
//           checkInTime={card.checkInTime}
//           guestCount={card.guestCount}
//           checkOutTime={card.checkOutTime}
//           totalPrice={card.totalPrice}
//         />
//       ))}
//     </main>
//   );
// }

// export default CardTotal;