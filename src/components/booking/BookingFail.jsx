import * as React from "react";
import PayFail from "./PayFail";

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
  
  return (
    <>
    <div className="flex gap-4 self-stretch p-2 rounded-sm" >

      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ff6ee10c3e91ecd77dbca7c59bc5000d5be1b61ea3eae709dc2418717a6ea2b?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-square mr-16" />
      <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 bg-green-700 rounded-[50px]">
      <span className="flex text-white ">&#10003;</span>
      </div>
      <button className="self-stretch my-auto text-xl font-extrabold tracking-normal leading-7 text-zinc-800" >ACCOMMODATIONS</button>
      
    </div>
    </>
  );
}

function EnhanceYourStay() {
  return (
    <>
    <div   className="flex gap-4 self-stretch p-2 rounded-sm ml-10">

      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5012f0bfc14ae2fedc99b5f10e623cd13170d158cb2ff1f52713c714c26265a1?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-square ml-5" />
      <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 bg-green-700 rounded-[50px] ml-20">
      <span className="flex text-white ">&#10003;</span>
      </div>
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
      <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 bg-red-500 rounded-[50px]">
      <span className="flex text-white ">&#10005;</span>
      </div>
        <div className="self-stretch my-auto text-xl font-extrabold tracking-normal  text-zinc-800 leading-7">PAY</div>
      </div>
    </div>
    </>
  );
}





function BookingFail() {
    
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
        
          <PayFail/>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
           
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-2.5 mt-64 text-xl font-extrabold tracking-normal leading-7 uppercase whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    
      </div>
    </div>
  );
}

export default BookingFail;