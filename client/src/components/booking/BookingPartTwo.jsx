import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function DateOfStay() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/booking');
      };
    return (
       <div className="flex gap-2 p-6 rounded-sm px-9">
         <div className="flex justify-center items-center px-4 py-2 w-7 h-7 bg-green-700 rounded-[50px]">
           {/* Utiliza el código Unicode para el símbolo de check y aplica estilos CSS para cambiar su color a blanco */}
           <span class="flex text-white ">&#10003;</span>

         </div>
         <button class="text-xl font-extrabold tracking-normal leading-7 text-zinc-800" onClick={handleClick}>
            DATES OF STAY
        </button>

       </div>
    );
   }
   

function Accommodations() {
  return (
    <div className="flex gap-2 p-6 whitespace-nowrap rounded-sm">
      <div className=" flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center text-white bg-amber-300 rounded-[50px]">2</div>
      <div className=" text-xl font-extrabold tracking-normal leading-7 text-zinc-800">ACCOMMODATIONS</div>
    </div>
  );
}

function EnhanceYourStay() {
  return (
    <div className="flex gap-2 self-stretch p-6 whitespace-nowrap rounded-sm px-44">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">3</div>
      <div className="text-xl font-extrabold tracking-normal leading-7">ENHANCE YOUR STAY</div>
    </div>
  );
}

function Total() {
  return (
    <div className="flex gap-2 self-stretch p-6 whitespace-nowrap rounded-sm px-14">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">4</div>
      <div className="text-xl font-extrabold tracking-normal leading-7 mr-9">PAY</div>
    </div>
  );
}

function BookingPartTwo() {
    const navigate = useNavigate()
    const handleClickThree = () => {
        navigate('/bookingThree');
      };
      const handleClick = () => {
        navigate('/booking');
      };

      const location = useLocation();
      const { checkInDate, checkOutDate } = location.state || {};
    
  return (
    <div className="flex flex-col px-44 pt-12 bg-white rounded-md border-2 border-solid border-zinc-200 max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap">
          <DateOfStay />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b936466ba9e195c9951ced6f94513d497b953ed9a2477f1d2cdf89b9ea8a2e?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 my-auto w-5 aspect-square mr-9" />
          <Accommodations />
        </div>
        <div className="flex gap-5 justify-between items-center text-neutral-400 max-md:flex-wrap ">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5661c16c6e6c925a8fbb623c03668955e8ba6eef9d9ee9088c1a2a0562471744?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-square " />
          <EnhanceYourStay />
          <div className="flex gap-5 justify-between items-center text-neutral-400 max-md:flex-wrap ">

          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/05474e88431e7a9110b9a21bcf722dae765bd5ea13436d5df55ad479efa957db?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-square " />
          <Total />
          </div>
        </div>
      </div>
          <div className="shrink-0 mt-8 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 justify-center flex items-center max-md:mr-2.5" />
      <div className="mt-14 max-md:mt-10 max-md:max-w-full ml-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center mt-1.5 max-md:mt-6 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12552cc09f79c607114f548f69144741f4c8de6c9962926a3e0056fdd40edb82?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="w-full shadow-sm aspect-[1.92] max-md:max-w-full" />
            </div>
          </div>
          <div className="flex flex-col mr-14 w-[30%] max-md:ml-0 max-md:w-full  ">
            <div className="flex overflow-hidden relative flex-col px-7 pt-5 pb-9 border border-solid aspect-[0.86] border-neutral-800 fill-zinc-100 leading-[140%] stroke-[0.5px] stroke-neutral-800 max-md:px-5 max-md:mt-4">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4fb2b322078b7e4a5ea5fe723325431ba24b9867be7c79c0dac97267225c2e?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="object-cover absolute inset-0 size-full" />
              <div className="flex relative gap-2.5 text-xl tracking-normal text-neutral-800">
                <div className="flex flex-col flex-1 font-bold ml-6 mt-2">
                  <div>Your Stay</div>
                   <div className="flex flex-col flex-1 my-auto font-extrabold mt-8">
                    <div className="flex flex-grow gap-16">
                  <div >Check-in</div>
                  <div>Check-out</div>
                

                    </div>
                    <div className="flex gap-14">

                  <div className=" mt-3 font-medium">{checkInDate}</div>
                  <div className="mt-3 font-medium">{checkOutDate}</div>
                    </div>
                </div>
                <div className="ml-6 flex gap-24 mt-4">

                  <div className="font-extrabold">Adult</div>
                  <div className=" font-extrabold">Children</div>
                </div>
                <div className="ml-11 flex gap-36">

                <div className="font-extrabold">1</div>
                <div className=" font-extrabold">0</div>
                </div>
                  <div className="mt-6 text-2xl font-extrabold tracking-tight text-black">Superior King</div>
                  <div className="mt-2 ml-6">5 night</div>
                  <div className="flex gap-2.5 mt-3 text-black whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-start aspect-[0.89] w-[25px]" />
                    <div>Remove</div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 my-auto font-extrabold">
                  <div className="self-end mt-40 text-2xl tracking-tight max-md:mt-10 ">$ 200.00</div>
                </div>
              </div>
              <div className="flex relative gap-5 mt-24 font-extrabold max-md:mt-10">
                <div className="justify-center px-10 py-0.5 text-xl tracking-normal text-center whitespace-nowrap bg-amber-300 rounded-md text-zinc-100 max-md:px-5">TOTAL</div>
                <div className="flex-auto my-auto text-2xl tracking-tight text-neutral-800">$ 1000.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-5 mt-8 text-xl font-extrabold tracking-normal leading-7 uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <button className="justify-center px-8 py-4 rounded-md border border-solid border-neutral-800 text-neutral-800 max-md:px-5 mt-7" onClick={handleClick}>RETURN</button>
        <button className="justify-center px-8 py-4 text-white bg-amber-300 rounded-md max-md:px-5 mt-7" onClick={handleClickThree} >Continue</button>
      </div>
    </div>
  );
}

export default BookingPartTwo;