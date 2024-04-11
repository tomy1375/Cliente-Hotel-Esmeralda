import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dataServices from '../../../data/dataServices';
import { Link } from 'react-router-dom';

const ServicesBooking = () => {
  return (
     <div className="container mx-auto mt-4 mb-4 space-y-8">
       {dataServices.map((service, index) => {

         if (service.id === 3) {

           return null;
         }
         if (service.name === "Special Offers") {
           return null;
         }
         if (service.name === "Luxury In-Room Services") {
           return null;
         }
         if (service.name === "Rental Cars") {  
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
                 {index === 2 ? (
                  <div className="flex justify-center">
                     <Link to='/restaurant' className='w-1/4 mx-4'>
                       <button className="text-xl py-4 font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg w-full">
                         BOOK
                       </button>
                     </Link>
                  </div>
                 ) : (
                  <div className="flex justify-center gap-2">
                     <div className="flex justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-v hover:bg-green-950 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
                      USD {service.price}
                     </div>
                       <button
               className="flex justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
               
             >
               BOOK NOW
             </button>
                  </div>
                 )}
               </div>
             </div>
           </div>
         );
       })}
     </div>
  );
 };

function DateOfStay() {
  return (
    <div className="flex gap-2 self-stretch p-2 rounded-sm mt-2">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 bg-green-700 rounded-[50px] ml-20">
      <span className="flex text-white ">&#10003;</span>
      </div>
      <div className="text-xl font-extrabold tracking-normal leading-7 text-zinc-800 ml">DATES OF STAY</div>
    </div>
  );
}

function Accommodations() {
    const navigate = useNavigate()
    const location = useLocation();
    const { checkInDate, checkOutDate, selectedGuests, selectedChildren ,total, selectedRoomsDetails} = location.state || {};
  
    const handleClickTwo = () => {
      navigate('/bookingTwo', {
          state: {
              checkInDate: checkInDate,
              checkOutDate: checkOutDate,
              selectedGuests: selectedGuests,
              selectedChildren: selectedChildren,
              total: total, // Agrega el total como parte del estado
              selectedRoomsDetails: selectedRoomsDetails 
              
          },
      });
  };
  return (
    <>
    <div className="flex gap-4 self-stretch p-2 rounded-sm" >

      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ff6ee10c3e91ecd77dbca7c59bc5000d5be1b61ea3eae709dc2418717a6ea2b?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-square mr-16" />
      <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 bg-green-700 rounded-[50px]">
      <span className="flex text-white ">&#10003;</span>
      </div>
      <button className="self-stretch my-auto text-xl font-extrabold tracking-normal leading-7 text-zinc-800" onClick={handleClickTwo}>ACCOMMODATIONS</button>
      
    </div>
    </>
  );
}

function EnhanceYourStay() {
  return (
    <>
    <div   className="flex gap-4 self-stretch p-2 rounded-sm ml-8">

      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5012f0bfc14ae2fedc99b5f10e623cd13170d158cb2ff1f52713c714c26265a1?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-square ml-5" />
      <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 text-sm font-bold leading-5 text-center text-white whitespace-nowrap bg-amber-300 rounded-[50px] ml-16">3</div>
      <div className="self-stretch my-auto text-xl font-extrabold tracking-normal  text-zinc-800 leading-7">ENHANCE YOUR STAY</div>
    </div>
    </>
  );
}

function Total() {
  return (
    <>
    <div  className="flex gap-14 self-stretch p-2 rounded-sm ml-8">

      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cfd75e2fe2da4c4d0e8ac988237a9c31b87f75f2ad3ddecf1b5d6801bdde474?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-square" />
      <div className="flex gap-2 self-stretch p-2 whitespace-nowrap rounded-sm">
        <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">4</div>
        <div className="text-xl font-extrabold tracking-normal leading-7 ">PAY</div>
      </div>
    </div>
    </>
  );
}

function SpaAndBeauty() {
  return (
    <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a6cb475de5c585675a9c47295fb6b162aa71a88acbd9321e0f87c37f9b8ec6d?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="Spa and beauty" className="mt-14 w-full shadow-sm aspect-[1.25] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}

function SpaAndBeautyDetails() {
  return (
    <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-16 font-medium max-md:mt-10">
        <h2 className="self-center text-3xl text-neutral-800">Spa and Beauty</h2>
        <p className="mt-5 text-xl text-black">
          Celebrate a birthday, anniversary or absolutely nothing at all. This package includes:
          <br />
          Focused massages
          Facial spa (cleansing, exfoliation, mask and hydration)
          <br />
          Massages for 2 people
          <br />
          Scottish shower
        </p>
        <div className="shrink-0 mt-9 ml-5 rounded-2xl border border-black border-solid h-[42px] w-[146px] max-md:ml-2.5" />
      </div>
    </div>
  );
}

function YourStay() {
  const location = useLocation();
  const { checkInDate, checkOutDate, selectedGuests, selectedChildren,total, selectedRoomsDetails } = location.state || {};
  return (
    <div className="flex overflow-hidden relative flex-col grow px-6 py-5 border border-solid aspect-[0.58]  bg-zinc-200 border-neutral-800 fill-zinc-100 rounded-md 00 stroke-[0.5px] stroke-neutral-800 max-md:px-5 max-md:mt-7">
      {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd201d65503d2f3715d5936dcb646eb90c12e6ca29e28ca97d15109ab3b4f5c5?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="object-cover absolute inset-0 size-full" /> */}
      <div className="flex relative gap-2.5 text-xl tracking-normal leading-7 text-neutral-800">
        <div className="flex flex-col flex-1 font-bold">
          <div className="flex flex-col pl-2.5 font-extrabold">
            <div className="font-bold mt-3">Your Stay</div>
            <div className="flex flex-col flex-1 my-auto font-extrabold mt-8">
                    <div className="flex flex-grow gap-16">
                  <div >Check-in</div>
                  <div>Check-out</div>
                

                    </div>
                    <div className="flex gap-14">

                  <div className=" mt-3 font-medium">
                    {checkInDate}
                    </div>
                  <div className="mt-3 font-medium">
                    {checkOutDate}
                    </div>
                    </div>
                </div>
                <div className="ml-6 flex gap-24 mt-4">

                  <div className="font-extrabold">Adult</div>
                  <div className=" font-extrabold">Children</div>
                </div>
                <div className="ml-11 flex gap-36">

                <div className="font-medium">
                  {selectedGuests}
                  </div>
                <div className="font-medium">
                  {selectedChildren}
                  </div>
                </div>
                {selectedRoomsDetails.map((room, index) => (
                    <div key={index} className="flex gap-2.5 mt-10 text-black whitespace-nowrap">
                      <div className="font-extrabold">{room.name}</div>
                      <div className="flex flex-col">
                        <div className="font-medium">${room.price_per_night } x {room.numberOfNights } nights</div>
                        <div className="flex">
                          {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="Remove icon" className="shrink-0 self-start aspect-[0.89] w-[25px]" />
                          <button onClick={() => handleRemoveRoom(index)} className="flex">Remove</button> */}
                        </div>
                      </div>
                    </div>
                  ))}

         
          </div>
         
          {/* <div className="self-end mt-52 text-2xl tracking-tight max-md:mt-16 ">$ 200.00</div> */}
        </div>
      </div>
      {/* <EnhanceStayDetails /> */}
            <TotalPrice />
    </div>
  );
}

function EnhanceStayDetails() {
  return (
    <div className="flex relative gap-5 justify-between mt-9 text-2xl font-extrabold">
      <div className="flex flex-col text-neutral-800">
        <div className="self-start ml-2.5">Spa and Beauty</div>
        <div className="flex gap-2.5 mt-5 text-xl font-bold tracking-normal leading-7 text-black whitespace-nowrap">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="Remove icon" className="shrink-0 self-start aspect-[0.89] w-[25px]" />
          <div className="flex gap-0">
            <div className="z-10">Remove</div>
          </div>
        </div>
        <div className="mt-7">Family Car Rental</div>
        <div className=" self-center mt-2.5 text-xl font-bold tracking-normal leading-7 text-black">Remove</div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="Remove icon" className="mt-4 aspect-[0.89] w-[25px]" />
      </div>
      <div className="flex flex-col self-start tracking-tight leading-[140%] text-neutral-800 ">
        <div>$ 200.00</div>
        <div className="mt-20 max-md:mt-10">$ 50.00</div>
      </div>
    </div>
  );
}

function TotalPrice() {
  const location = useLocation();
  const { checkInDate, checkOutDate, selectedGuests, selectedChildren,total, selectedRoomsDetails } = location.state || {};
  return (
    <div className="flex relative gap-5 justify-between mt-20 font-extrabold leading-[140%] max-md:mt-10 max-md:mr-2 max-md:ml-2">
      <div className="justify-center px-10 py-0.5 text-xl tracking-normal text-center whitespace-nowrap bg-amber-300 rounded-md text-zinc-100 max-md:px-5">TOTAL</div>
      <div className="my-auto text-2xl tracking-tight text-neutral-800">$ {total}</div>
    </div>
  );
}

function BookingPartThree() {

  const navigate = useNavigate();
  const location = useLocation();
  const { checkInDate, checkOutDate, selectedGuests, selectedChildren } = location.state || {};

  const handleClickTwo = () => {
    navigate('/bookingTwo', {
        state: {
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            selectedGuests: selectedGuests,
            selectedChildren: selectedChildren,
            total: total, // Agrega el total como parte del estado
            selectedRoomsDetails: selectedRoomsDetails 
        },
    });
};

    
  return (
    <div className="flex flex-col px-44 pt-14 pb-12 bg-white rounded-md border-2 border-solid border-zinc-200 max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-1 gap-5 justify-between items-center max-md:flex-wrap">
          <DateOfStay />
          <Accommodations />
        </div>
        <div className="flex flex-1 gap-5 justify-between items-center text-neutral-400 max-md:flex-wrap">
          <EnhanceYourStay />
          <Total />
        </div>
      </div>
      <div className="shrink-0 mt-10 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 max-md:mr-2.5" />
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {/* <SpaAndBeauty />
          <SpaAndBeautyDetails /> */}
          <ServicesBooking/>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <YourStay />
            
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-2.5 mt-64 text-xl font-extrabold tracking-normal leading-7 uppercase whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <button className="justify-center px-8 py-4 rounded-md border border-solid border-neutral-800 text-neutral-800 max-md:px-5" onClick={handleClickTwo}>RETURN</button>
        <button className="justify-center px-8 py-4 text-white bg-amber-300 rounded-md max-md:px-5 hover:bg-amber-400 transition-colors">Continue</button>
      </div>
    </div>
  );
}

export default BookingPartThree;