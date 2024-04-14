import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPages() {
 const navigate = useNavigate();
 const [showModal, setShowModal] = useState(false);

 const handleClick = () => {
    navigate("/formulario");
    console.log("yendo a formulario");
 };

 const handleClickDetails = () => {
    navigate("/termsAndConditions");
    handleClose();
 };

 const handleClose = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
    localStorage.setItem('modalShown', 'true'); // Indica que el modal ya ha sido mostrado
 };

 useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }
 }, []);

 if (!showModal) {
    return null;
 }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative bg-white" style={{ maxWidth: "60%" }}>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/205b109a1a71984976beadff416f4a764d87b97a4bca85258042bf8f568c0157?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/205b109a1a71984976beadff416f4a764d87b97a4bca85258042bf8f568c0157?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/205b109a1a71984976beadff416f4a764d87b97a4bca85258042bf8f568c0157?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/205b109a1a71984976beadff416f4a764d87b97a4bca85258042bf8f568c0157?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/205b109a1a71984976beadff416f4a764d87b97a4bca85258042bf8f568c0157?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/205b109a1a71984976beadff416f4a764d87b97a4bca85258042bf8f568c0157?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/205b109a1a71984976beadff416f4a764d87b97a4bca85258042bf8f568c0157?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/205b109a1a71984976beadff416f4a764d87b97a4bca85258042bf8f568c0157?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col pt-3.5 pr-8 pb-14 pl-20 w-full bg-black bg-opacity-30 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between ml-4 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/234158a0824dc1e0ba330b313473b9b025eda5eadcb8a4d1e3f1dfd17d6253e8?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                className="self-center max-w-full aspect-square w-[120px]"
              />
              <div className="shrink-0 mt-3.5 h-px bg-white border border-white border-solid max-md:max-w-full" />
            </div>
            <button
              className="bg-transparent hover:bg-transparent hover:backdrop-blur-md  hover:text-gray-900 transition-colors rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-transparent dark:hover:backdrop-blur-md dark:hover:text-white"
              onClick={handleClose}
            >
              <img
                loading="lazy2"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/11cffe43a5854cc41d644d00c9eebf9684cf448d18f461fe35a538f723af47e4?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                alt="Salida de modal"
              />
            </button>
          </div>
          <div className="mt-24 ml-4 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl font-extrabold text-white max-md:mt-10 max-md:max-w-full">
                  <div className="text-6xl tracking-tighter leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                    Easter long weekend!
                  </div>
                  <div className="mt-12 tracking-normal leading-7 max-md:mt-10 max-md:max-w-full">
                    With your room reservation we give you two wines ‘Portillo
                    Organic Malbec 2022’and one day of free family car rental
                  </div>
                  <button
                    className="justify-center self-center px-12 py-5 mt-20 text-center whitespace-nowrap bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg leading-[163%] max-md:px-5 max-md:mt-10 cursor-pointer"
                    onClick={handleClick}
                  >
                    Search Room
                  </button>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-40 text-white max-md:mt-10">
                  <div className="flex flex-col px-10 pt-6 pb-2.5 rounded-2xl backdrop-blur-[11.703703880310059px] max-md:px-5">
                    <div className="text-3xl font-extrabold tracking-tight leading-10">
                      Holy offer
                    </div>
                    <div className="mt-1.5 text-sm font-medium tracking-normal leading-5">
                      Make your Easter a unique experience! Book your stay from
                      March 24 to 30 at our resort hotel and enjoy incomparable
                      luxury in all our rooms. Exclusive offer for those days.
                    </div>
                  </div>
                  <button
                    className="justify-center items-center px-16 py-5 text-xl font-extrabold tracking-normal leading-7 text-center whitespace-nowrap bg-amber-300  hover:bg-amber-400 transition-colors rounded-none max-md:px-5 cursor-pointer"
                    onClick={handleClickDetails}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPages;
