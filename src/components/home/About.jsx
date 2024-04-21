import {
  faBed,
  faCocktail,
  faConciergeBell,
  faSpa,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-16">
        <div className="flex-1 md:w-1/2 bg-v p-8 md:p-16 lg:p-24 flex flex-col relative">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-b font-bold p-4 relative mb-14">
              About Us
              <span className="absolute bottom-0 left-0 w-60 h-1 bg-gradient-to-r from-yellow-300 to-transparent inline-block"></span>
            </h1>
            <p className="px-4 pb-4 text-b max-w-md md:max-w-none md:text-lg text-justify">
              Welcome to the luxurious Hotel Esmeralda Resort & Spa, where
              indulgence meets tranquility. Nestled amidst the pristine beaches
              and lush greenery of a tropical paradise, our resort offers an
              unparalleled experience of opulence and relaxation. Immerse
              yourself in the lavish amenities of our resort, featuring
              exquisite dining options, state-of-the-art spa facilities, and
              spacious accommodations adorned with elegant decor.
            </p>
            <p className="px-4 pb-8 text-b max-w-md md:max-w-none md:text-lg text-justify">
              Whether you seek a romantic getaway, a family retreat, or a
              rejuvenating escape, Hotel Esmeralda promises an unforgettable
              stay tailored to your desires.
            </p>

            <div className="flex justify-center items-center md:hidden">
              <Link to="/services">
                <button className="bg-yellow-300 m-6 text-xl text-black px-4 py-4 shadow-md hover:bg-yellow-400 transition-colors duration-300 w-32">
                  See More...
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <Link to="/services">
              <button className="bg-yellow-300 m-6 text-xl text-black px-4 py-4 shadow-md hover:bg-yellow-400 transition-colors duration-300 w-32">
                See More...
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 md:w-1/2 flex justify-center items-center">
          <img
            src="https://i.blogs.es/b9d2f5/foto-apertura-haroma-heritage/450_1000.jpg"
            alt="About Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="PRINCIPAL flex flex-col lg:flex-row">
        <div className="SECTION 1 Reviews ml-20 mt-20 flex-1 lg:mr-4">
          <h2 className="text-xl font-bold mb-4">Excellent 500+ Reviews</h2>
          <div className="relative flex justify-start">
            <div
              className="absolute flex flex-col items-center"
              style={{ left: "0px" }}
            >
              <img
                className="h-16 w-16 rounded-full mb-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCC5yzoNNAB73nuJ6BBOAb3FAC7vZWcKksflxwrVk21EC2SJxTnwfbFoFtBrTf1RAcW5k&usqp=CAU"
                alt="Cliente 1"
              />
            </div>
            <div
              className="absolute flex flex-col items-center"
              style={{ left: "50px" }}
            >
              <img
                className="h-16 w-16 rounded-full mb-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Eduardo_Ver%C3%A1stegui.jpg/640px-Eduardo_Ver%C3%A1stegui.jpg"
                alt="Cliente 2"
              />
            </div>
            <div
              className="absolute flex flex-col items-center"
              style={{ left: "100px" }}
            >
              <img
                className="h-16 w-16 rounded-full mb-2"
                src="https://img.freepik.com/foto-gratis/retrato-hombre-reir_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1711497600&semt=ais"
                alt="Cliente 3"
              />
            </div>
            <div
              className="absolute flex flex-col items-center"
              style={{ left: "150px" }}
            >
              <img
                className="h-16 w-16 rounded-full mb-2"
                src="https://wl-genial.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg"
                alt="Cliente 4"
              />
            </div>
            <div
              className="absolute flex flex-col items-center"
              style={{ left: "200px" }}
            >
              <img
                className="h-16 w-16 rounded-full mb-2"
                src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_80,w_820/v1576497292/content-items/003/518/323/Da-33-2-original.jpg?1576497292"
                alt="Cliente 5"
              />
            </div>
          </div>
          <p
            className="
            text-justify
            mr-20
            mt-20
            text-lg
            font-semibold
            max-w-md
            mx-auto
            lg:mx-0
            lg:max-w-none
          "
          >
            "The best hotel I have ever stayed in! From the moment we arrived,
            we were treated like royalty. The staff is incredibly friendly and
            attentive, the rooms are spacious and luxurious, and the food is
            absolutely delicious. We will definitely be back soon!"
          </p>
          <span className="font-semibold">- John Doe</span>
          <FontAwesomeIcon
            icon={faStar}
            size="1x"
            className="text-yellow-500 ml-2"
          />
          <FontAwesomeIcon
            icon={faStar}
            size="1x"
            className="text-yellow-500 ml-2"
          />
          <FontAwesomeIcon
            icon={faStar}
            size="1x"
            className="text-yellow-500 ml-2"
          />
          <FontAwesomeIcon
            icon={faStar}
            size="1x"
            className="text-yellow-500 ml-2"
          />
        </div>
        <div className="SECTION 2 flex flex-col md:flex-row justify-between items-center relative md:mr-20 lg:mt-[-80px] lg:ml-64 lg:w-full flex-1 mt-[80px]">
          <div className="w-full lg:w-3/3">
            <div className="flex flex-col md:flex-row justify-end">
              <div className="bg-gray-50 p-4 rounded-md shadow-md flex-1 mb-4 md:mb-0 square-card md:mr-2 m-2">
                <FontAwesomeIcon
                  icon={faConciergeBell}
                  size="3x"
                  className="text-yellow-500"
                />
                <h2 className="text-lg font-semibold mb-2">
                  Restaurant Service
                </h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md shadow-md flex-1 square-card md:ml-2 m-2">
                <FontAwesomeIcon
                  icon={faSpa}
                  size="3x"
                  className="text-yellow-500"
                />
                <h2 className="text-lg font-semibold mb-2">SPA & GYM</h2>
                <p>
                  Indulge in our state-of-the-art spa and fitness center, where
                  you can rejuvenate your body and mind.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-4 m-2">
              <div className="bg-gray-50 p-4 rounded-md shadow-md flex-1 mb-4 md:mb-0 square-card md:mr-2">
                <FontAwesomeIcon
                  icon={faBed}
                  size="3x"
                  className="text-yellow-500"
                />
                <h2 className="text-lg font-semibold mb-2">The Best Rooms</h2>
                <p>
                  Experience luxury in our spacious and elegantly designed
                  rooms, offering stunning views of the surrounding paradise.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md shadow-md flex-1 square-card md:m-2 m-2">
                <FontAwesomeIcon
                  icon={faCocktail}
                  size="3x"
                  className="text-yellow-500"
                />
                <h2 className="text-lg font-semibold mb-2">Lounge Bar</h2>
                <p>
                  Unwind in our stylish lounge bar, where you can enjoy a
                  selection of premium beverages in a sophisticated ambiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
