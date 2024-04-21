import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import requestCarAvailable from "../../services/cars/requestCarAvailable";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import payment from "../../services/pay/payment";
import requestCreateRoomReservations from "../../services/reservations/requestCreateRoomReservations";
import requestSpaAvailable from "../../services/spa/requestSpaAvailable";

function DateOfStay() {
  return (
    <div className="flex gap-2 self-stretch p-2 rounded-sm mt-2">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 bg-green-700 rounded-[50px] ml-20">
        <span className="flex text-white ">&#10003;</span>
      </div>
      <div className="text-xl font-extrabold tracking-normal leading-7 text-zinc-800 ml">
        DATES OF STAY
      </div>
    </div>
  );
}

function Accommodations() {
  const navigate = useNavigate();
  const handleClickTwo = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex gap-4 self-stretch p-2 rounded-sm">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ff6ee10c3e91ecd77dbca7c59bc5000d5be1b61ea3eae709dc2418717a6ea2b?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          alt=""
          className="shrink-0 self-stretch my-auto w-5 aspect-square mr-16"
        />
        <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 bg-green-700 rounded-[50px]">
          <span className="flex text-white ">&#10003;</span>
        </div>
        <button
          className="self-stretch my-auto text-xl font-extrabold tracking-normal leading-7 text-zinc-800"
          onClick={handleClickTwo}
        >
          ACCOMMODATIONS
        </button>
      </div>
    </>
  );
}

function EnhanceYourStay() {
  return (
    <>
      <div className="flex gap-4 self-stretch p-2 rounded-sm ml-8">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5012f0bfc14ae2fedc99b5f10e623cd13170d158cb2ff1f52713c714c26265a1?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          alt=""
          className="shrink-0 self-stretch my-auto w-5 aspect-square ml-5"
        />
        <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 text-sm font-bold leading-5 text-center text-white whitespace-nowrap bg-amber-300 rounded-[50px] ml-16">
          3
        </div>
        <div className="self-stretch my-auto text-xl font-extrabold tracking-normal  text-zinc-800 leading-7">
          ENHANCE YOUR STAY
        </div>
      </div>
    </>
  );
}

function Total() {
  return (
    <>
      <div className="flex gap-14 self-stretch p-2 rounded-sm ml-8">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cfd75e2fe2da4c4d0e8ac988237a9c31b87f75f2ad3ddecf1b5d6801bdde474?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          alt=""
          className="shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="flex gap-2 self-stretch p-2 whitespace-nowrap rounded-sm">
          <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">
            4
          </div>
          <div className="text-xl font-extrabold tracking-normal leading-7 ">
            PAY
          </div>
        </div>
      </div>
    </>
  );
}

function BookingPartThree() {
  const userInfo = useSelector((state) => state.users.userInfo);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    checkInDate,
    checkOutDate,
    selectedGuests,
    selectedChildren,
    total,
    selectedRoomsDetails,
  } = location.state || {};
  console.log("selectedRoomsDetails", selectedRoomsDetails);

  const [cars, setCars] = useState([]);
  const [spas, setSpas] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);
  const [selectedSpa, setSelectedSpa] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get("from");
  const to = queryParams.get("to");
  const adults = queryParams.get("adults");
  const children = queryParams.get("children");
  const capacity = parseInt(adults) + parseInt(children);
  const passenger = parseInt(adults) + parseInt(children);
  const room_id = queryParams.get("room_id");

  // Calcular el total de días
  const startDate = new Date(from);
  const endDate = new Date(to);
  const oneDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.round(Math.abs((endDate - startDate) / oneDay));

  const RoomData = {
    room_id: room_id,
    check_in_date: startDate,
    check_out_date: to,
    user_id: userInfo.id,
  };

  const calculateTotalPrice = () => {
    const totalCarPrice = selectedCars.reduce(
      (total, car) => total + parseFloat(car.price_per_day) * totalDays,
      0
    );
    const totalSpaPrice = selectedSpa.reduce(
      (total, spa) => total + parseFloat(spa.price),
      0
    );
    const totalPrice =
      parseFloat(total) + parseFloat(totalCarPrice) + parseFloat(totalSpaPrice);
    setTotalPrice(totalPrice);
  };

  const handleClickTwo = () => {
    navigate(-1);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedCars, selectedSpa, totalDays, total]);

  const handleCarClick = (car) => {
    const isCarSelected = selectedCars.find(
      (selectedCar) => selectedCar.id === car.id
    );
    if (isCarSelected) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You have already selected this car!",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } else {
      setSelectedCars([...selectedCars, car]);
      Swal.fire({
        icon: "success",
        title: `${car.brands} booked successfully!`,
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    }
  };

  const handleSpaClick = (spa) => {
    const isSpaSelected = selectedSpa.find(
      (selectedSpa) => selectedSpa.id === spa.id
    );
    if (isSpaSelected) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You have already selected this car!",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } else {
      setSelectedSpa([...selectedSpa, spa]);
      Swal.fire({
        icon: "success",
        title: `${spa.name} booked successfully!`,
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    }
  };

  const handleRemoveCar = (carId) => {
    const updatedCars = selectedCars.filter((car) => car.id !== carId);
    setSelectedCars(updatedCars);
    calculateTotalPrice();
  };

  const handleRemoveSpa = (spaId) => {
    const updatedSpa = selectedSpa.filter((spa) => spa.id !== spaId);
    setSelectedSpa(updatedSpa);
    calculateTotalPrice();
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await requestCarAvailable(from, to, passenger);
        setCars(carsData.cars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, [from, to, passenger]);

  useEffect(() => {
    const fetchSpaServices = async () => {
      try {
        const spaData = await requestSpaAvailable(from, to, capacity);
        setSpas(spaData.spa);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchSpaServices();
  }, []);

  const handlePayment = async () => {
    try {
      const roomPricePerNight = Number(selectedRoomsDetails[0]?.price_per_night ?? 0);
  
      if (!selectedRoomsDetails[0]) {
        alert("Room details are missing. Please check your selections and try again.");
        return; // Exit the function if room details are missing
      }
  
      // Prepare the basic payment data with only room details initially
      const paymentData = {
        userId: userInfo?.id,
        services: {
          room: {
            name: selectedRoomsDetails[0].name,
            price_per_night: roomPricePerNight,
          },
        },
        totalPrice: roomPricePerNight * totalDays,
      };
  
      // Optionally add car rental to the payment data if it is selected
      if (selectedCars[0] && selectedCars[0].price_per_day) {
        const carPricePerDay = Number(selectedCars[0].price_per_day);
        paymentData.services.car = {
          name: selectedCars[0].brands,
          price_per_day: carPricePerDay,
        };
        paymentData.totalPrice += carPricePerDay; // Adjust total price
      }
  
      // Optionally add spa service to the payment data if it is selected
      if (selectedSpa[0] && selectedSpa[0].price) {
        const spaPrice = Number(selectedSpa[0].price);
        paymentData.services.spa = {
          name: selectedSpa[0].name,
          price: spaPrice,
        };
        paymentData.totalPrice += spaPrice; // Adjust total price
      }
  
      // Attempt to make a payment
      const paymentResponse = await payment(paymentData);
      if (paymentResponse?.url) {
        window.open(paymentResponse.url, "_blank");
      } else {
        alert("Failed to process payment. Please check the details and try again.");
      }
    } catch (error) {
      console.error("Error during payment and reservation:", error);
      alert("An error occurred. Please try again.");
    }
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
        <h1 className="text-center font-extrabold text-5xl underline decoration-v mb-6 mr-44">
          Services
        </h1>

        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="container mx-auto mt-4 mb-4 space-y-8">
            {spas.map((spa, index) => (
              <div
                className={`flex flex-wrap justify-center items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                key={spa.id}
              >
                <div className="w-full lg:w-1/2 p-4">
                  <div className="car-image-container h-96 overflow-hidden">
                    {spa.photos && spa.photos.length > 0 ? (
                      <img
                        src={spa.photos[0]}
                        alt={spa.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex justify-center items-center">
                        No Image Available
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center gap-4">
                  <h1 className="text-3xl lg:text-6xl text-center font-bold mt-0 mb-6">
                    {spa.name}
                  </h1>
                  <p className="text-lg lg:text-3xl leading-relaxed mb-4">
                    {spa.description}
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    {spa.service_type.map((service, index) => (
                      <li className="text-base lg:text-3xl" key={index}>
                        {service}
                      </li>
                    ))}
                    <li className="text-base lg:text-3xl">
                      Persons: {spa.max_capacity}
                    </li>
                  </ul>
                  <div className="flex justify-center gap-2">
                    <div className="flex justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-v hover:bg-green-950 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
                      USD {spa.price}
                    </div>
                    <button
                      className="flex justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
                      onClick={() => handleSpaClick(spa)}
                    >
                      ADD BOOK
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {cars.map((car, index) => (
              <div
                className={`flex flex-wrap justify-center items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                key={index}
              >
                <div className="w-full lg:w-1/2 p-4">
                  <div className="car-image-container h-96 overflow-hidden">
                    {car.photos.length > 0 && (
                      <img
                        src={car.photos[0]}
                        alt={car.brands}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center gap-4">
                  <div>
                    <h1 className="text-3xl lg:text-6xl text-center font-bold mt-0 mb-6">
                      {car.brands}
                    </h1>
                    <p className="text-lg lg:text-3xl leading-relaxed mb-4">
                      {car.description}
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                      <li className="text-base lg:text-3xl">
                        Transmission: {car.transmision}
                      </li>
                      <li className="text-base lg:text-3xl">
                        Passenger Capacity: {car.passenger}
                      </li>
                      <li className="text-base lg:text-3xl">
                        Type: {car.type_car}
                      </li>
                    </ul>
                    <div className="flex justify-center gap-2">
                      <div className="flex justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-v hover:bg-green-950 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full">
                        USD {car.price_per_day}
                      </div>
                      <button
                        className="flex justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
                        onClick={() => handleCarClick(car)}
                      >
                        ADD BOOK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 j leading-7 uppercase whitespace-nowrap max-md:flex-wrap max-md:mt-10 ">
              <div className="flex overflow-hidden  flex-col grow px-6 py-5 border border-solid aspect-[0.58]  bg-zinc-200 border-neutral-800 fill-zinc-100 rounded-md 00 stroke-[0.5px] stroke-neutral-800 max-md:px-5 max-md:mt-7">
                <div className="flex relative gap-2.5 text-xl tracking-normal leading-7 text-neutral-800">
                  <div className="flex flex-col flex-1 font-bold">
                    <div className="flex flex-col pl-2.5 font-extrabold">
                      <div className="font-bold mt-3">Your Stay</div>
                      <div className="flex flex-col flex-1 my-auto font-extrabold mt-8">
                        <div className="flex flex-grow gap-16">
                          <div>Check-in</div>
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
                        <div className="font-medium">{selectedGuests}</div>
                        <div className="font-medium">{selectedChildren}</div>
                      </div>
                      {selectedRoomsDetails.map((room, index) => (
                        <div
                          key={index}
                          className="flex gap-2.5 mt-10 text-black whitespace-nowrap"
                        >
                          <div className="font-extrabold">{room.name}</div>
                          <div className="flex flex-col">
                            <div className="font-medium">
                              ${room.price_per_night} x {room.numberOfNights}{" "}
                              nights
                            </div>
                            <div className="flex"></div>
                          </div>
                        </div>
                      ))}

                      {selectedCars.map((car, index) => (
                        <div
                          key={index}
                          className="flex gap-2.5 mt-10 text-black whitespace-nowrap"
                        >
                          <div className="font-extrabold ">{car.brands}</div>
                          <div className="flex flex-col">
                            <div className="flex font-medium">
                              ${car.price_per_day} x {totalDays} days
                              <img
                                onClick={() => handleRemoveCar(car.id)}
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                                alt="Remove icon"
                                className="flex shrink-0 self-start aspect-[0.89] w-[25px] cursor-pointer ml-5"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      {selectedSpa.map((spa, index) => (
                        <div
                          key={index}
                          className="flex gap-2.5 mt-10 text-black whitespace-nowrap"
                        >
                          <div className="font-extrabold ">{spa.name}</div>
                          <div className="flex flex-col">
                            <div className="flex font-medium">
                              ${spa.price} x 1 Section
                              <img
                                onClick={() => handleRemoveSpa(spa.id)}
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                                alt="Remove icon"
                                className="flex shrink-0 self-start aspect-[0.89] w-[25px] cursor-pointer ml-5"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex relative gap-5 justify-between mt-20 font-extrabold leading-[140%] max-md:mt-10 max-md:mr-2 max-md:ml-2">
                  <div className="justify-center px-10 py-0.5 text-xl tracking-normal text-center whitespace-nowrap bg-amber-300 rounded-md text-zinc-100 max-md:px-5">
                    TOTAL
                  </div>
                  <div className="my-auto text-2xl tracking-tight text-neutral-800">
                    $ {totalPrice}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handlePayment}
              className="justify-center px-8 py-4 text-white bg-amber-300 rounded-md max-md:px-5 hover:bg-amber-400 transition-colors mt-6"
            >
              PAY
            </button>
            <button
              className="justify-center px-8 py-4 rounded-md border border-solid border-neutral-800 text-neutral-800 max-md:px-5 mt-3"
              onClick={handleClickTwo}
            >
              RETURN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPartThree;
