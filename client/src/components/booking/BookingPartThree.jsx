import * as React from "react";
import { useNavigate } from "react-router-dom";

function DateOfStay() {
  return (
    <div className="flex gap-2 self-stretch p-2 rounded-sm mt-2">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 bg-green-700 rounded-[50px] ml-20">
      <span class="flex text-white ">&#10003;</span>
      </div>
      <div className="text-xl font-extrabold tracking-normal leading-7 text-zinc-800 ml">DATES OF STAY</div>
    </div>
  );
}

function Accommodations() {
    const navigate = useNavigate()
    const handleClickTwo = () => {
        navigate('/bookingTwo');
      };
  return (
    <>
    <div className="flex gap-4 self-stretch p-2 rounded-sm" >

      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ff6ee10c3e91ecd77dbca7c59bc5000d5be1b61ea3eae709dc2418717a6ea2b?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-square mr-16" />
      <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 bg-green-700 rounded-[50px]">
      <span class="flex text-white ">&#10003;</span>
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
  return (
    <div className="flex overflow-hidden relative flex-col grow px-6 py-5 border border-solid aspect-[0.58] border-neutral-800 fill-zinc-100 stroke-[0.5px] stroke-neutral-800 max-md:px-5 max-md:mt-7">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd201d65503d2f3715d5936dcb646eb90c12e6ca29e28ca97d15109ab3b4f5c5?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative gap-2.5 text-xl tracking-normal leading-7 text-neutral-800">
        <div className="flex flex-col flex-1 font-bold">
          <div className="flex flex-col pl-2.5 font-extrabold">
            <div className="font-bold">Your Stay</div>
            <div className="flex mt-5">Check-In</div>
            <div className="self-center mt-8 font-medium">After 3:00 PM</div>
            <div>2 Adult</div>
            <div className="mt-6 text-2xl tracking-tight text-black">Superior King</div>
          </div>
          <div className="mt-2">5 night</div>
          <div className="flex gap-3.5 mt-3 text-black whitespace-nowrap">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="Remove icon" className="shrink-0 self-start aspect-[0.89] w-[25px]" />
            <div>Remove</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 my-auto font-extrabold">
          <div>

          <div className="flex">Check-out</div>
          </div>
          <div className="mt-3 font-medium">Before 10:00 AM</div>
          <div className="self-end mt-16 text-2xl tracking-tight max-md:mt-10">$ 200.00</div>
        </div>
      </div>
      <EnhanceStayDetails />
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
      <div className="flex flex-col self-start tracking-tight leading-[140%] text-neutral-800">
        <div>$ 200.00</div>
        <div className="mt-20 max-md:mt-10">$ 50.00</div>
      </div>
    </div>
  );
}

function TotalPrice() {
  return (
    <div className="flex relative gap-5 justify-between mt-20 font-extrabold leading-[140%] max-md:mt-10 max-md:mr-2 max-md:ml-2">
      <div className="justify-center px-10 py-0.5 text-xl tracking-normal text-center whitespace-nowrap bg-amber-300 rounded-md text-zinc-100 max-md:px-5">TOTAL</div>
      <div className="my-auto text-2xl tracking-tight text-neutral-800">$ 1300.00</div>
    </div>
  );
}

function BookingPartThree() {
  const navigate = useNavigate()
    const handleClickTwo = () => {
        navigate('/bookingTwo');
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
          <SpaAndBeauty />
          <SpaAndBeautyDetails />
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <YourStay />
            
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-2.5 mt-64 text-xl font-extrabold tracking-normal leading-7 uppercase whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <button className="justify-center px-8 py-4 rounded-md border border-solid border-neutral-800 text-neutral-800 max-md:px-5" onClick={handleClickTwo}>RETURN</button>
        <button className="justify-center px-8 py-4 text-white bg-amber-300 rounded-md max-md:px-5">Continue</button>
      </div>
    </div>
  );
}

export default BookingPartThree;