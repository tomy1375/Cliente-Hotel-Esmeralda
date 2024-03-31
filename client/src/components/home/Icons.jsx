import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlassMartiniAlt,
  faCar,
  faHotTub,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import Collage from "../../assets/collage.png";
//home

const IconRow = () => {
  return (
    <>
      <div className="flex flex-col items-center m-2">
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faGlassMartiniAlt}
              className="w-5 h-5 bg-gray-100 p-3 text-yellow-500 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"
            />
            <span className="text-l">
              Welcome <br />
              Cocktail
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faCar}
              className={`w-5 h-5 bg-gray-100 p-3 text-yellow-500 ${"sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12"} rounded-full`}
            />
            <span className="text-l">
              Car <br /> Rental
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faHotTub}
              className={`w-5 h-5 bg-gray-100 p-3 text-yellow-500 ${"sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12"} rounded-full`}
            />
            <span className="text-l">
              Resort <br /> & Spa
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faWifi}
              className={`w-5 h-5 bg-gray-100 p-3 text-yellow-500 ${"sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12"} rounded-full`}
            />
            <span className="text-l">
              Wi-fi <br />
              Service
            </span>
          </div>
        </div>
        <header className="mt-12 text-center">
          <h1 className="text-lg md:text-xl lg:text-4xl">
            Why You Should Stay <span className="text-yellow-500">Here!</span>
          </h1>
          <h2 className="text-m text-gray-600">
            Experience a world of luxury and adventure at our cutting-edge
            resort destination.
          </h2>
        </header>
      </div>

      <div className="flex justify-around m-14">
        <div className="flex flex-col items-start lg:flex-grow-0 lg:w-auto gap-4">
          <article>
            <h2 className="flex items-center justify-center rounded-full w-10 h-10 bg-yellow-500 text-white font-bold text-2xl">
              1
            </h2>
            <h2 className="text-lg md:text-xl lg:text-2xl">
              Providing the best room selection
            </h2>
            <h3 className="text-sm text-gray-600">
              Find your perfect room from our diverse selection, tailored to
              meet your every need.
            </h3>
          </article>
          <article>
            <h2 className="flex items-center justify-center rounded-full w-10 h-10 bg-yellow-500 text-white font-bold text-2xl">
              2
            </h2>
            <h2 className="text-lg md:text-xl lg:text-2xl">
              Low prices with the best quality
            </h2>
            <h3 className="text-sm text-gray-600">
              Experience luxury without breaking the bank with our unbeatable
              prices and top-notch quality.
            </h3>
          </article>
          <article>
            <h2 className="flex items-center justify-center rounded-full w-10 h-10 bg-yellow-500 text-white font-bold text-2xl">
              3
            </h2>
            <h2 className="text-lg md:text-xl lg:text-2xl">Room service</h2>
            <h3 className="text-sm text-gray-600">
              Elevate your stay with our exceptional room service, offering
              convenience and indulgence at your fingertips.
            </h3>
          </article>
        </div>

        <div className="flex-col lg:flex-shrink-0 ml-8 hidden lg:block">
          <img src={Collage} alt="Collage" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-14">
        <h2 className="text-2xl font-bold mb-4 text-gray-500">OUR HOTEL</h2>
        <h2 className="text-2xl font-bold mb-4 text-d">A WORLD OF OPTIONS</h2>
        <p className="text-lg text-center max-w-prose mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ad
          aliquam excepturi. Sed at placeat sequi ratione nisi! Maiores ex
          laborum ipsum est, perspiciatis dignissimos debitis ducimus ab
          consequuntur fugit?
        </p>
      </div>

      <div className="flex items-center justify-center m-4">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/278581720.jpg?k=1d0a5ad09cfe9f57dd2d98ac137d031ffa90b295fa94e87356a7579bf339e659&o=&hp=1"
              alt="Imagen 1"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/278581720.jpg?k=1d0a5ad09cfe9f57dd2d98ac137d031ffa90b295fa94e87356a7579bf339e659&o=&hp=1"
              alt="Imagen 1"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://www.tripsavvy.com/thmb/PBXPKYgTWnbYh6IBZ6FBu0RCi7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PMC_3922re2-7a204d0f28cc4d2abacf951df89d19d5.jpg"
              alt="Imagen 2"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="col-span-3">
            <img
              src="https://www.riu.com/blog/wp-content/uploads/2019/06/restaurante-kristal-riu-palace-baja-california.jpg"
              alt="Imagen 3"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://img.freepik.com/fotos-premium/zona-espera-lobby-hotel-lujo_926199-256451.jpg"
              alt="Imagen 4"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://www.shutterstock.com/image-illustration/3d-render-luxury-hotel-lobby-260nw-1960082830.jpg"
              alt="Imagen 5"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://www.shutterstock.com/image-illustration/3d-render-luxury-hotel-lobby-260nw-1960082830.jpg"
              alt="Imagen 5"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IconRow;
