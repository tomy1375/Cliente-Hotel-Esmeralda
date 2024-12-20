import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../modal/modal";
import DetailModalRoom from "../detail/DetailModalRoom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import axios from "axios";
import Loading from "../general/Loading";
import { API_URL } from "../../utils/global";

const baseUrl =  API_URL;


function DateOfStay() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking");
  };
  return (
    <div className="flex gap-2 p-6 rounded-sm px-9">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 bg-green-700 rounded-[50px]">
        <span className="flex text-white">&#10003;</span>
      </div>
      <button
        className="text-xl font-extrabold tracking-normal leading-7 text-zinc-800"
        onClick={handleClick}
      >
        DATES OF STAY
      </button>
    </div>
  );
}
function Accommodations() {
  return (
    <div className="flex gap-2 p-6 whitespace-nowrap rounded-sm">
      <div className=" flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center text-white bg-amber-300 rounded-[50px]">
        2
      </div>
      <div className="text-xl font-extrabold tracking-normal leading-7 text-zinc-800">
        ACCOMMODATIONS
      </div>
    </div>
  );
}
function EnhanceYourStay() {
  return (
    <div className="flex gap-2 self-stretch p-6 whitespace-nowrap rounded-sm px-44">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">
        3
      </div>
      <div className="text-xl font-extrabold tracking-normal leading-7">
        ENHANCE YOUR STAY
      </div>
    </div>
  );
}
function Total() {
  return (
    <div className="flex gap-2 self-stretch p-6 whitespace-nowrap rounded-sm px-14">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">
        4
      </div>
      <div className="text-xl font-extrabold tracking-normal leading-7 mr-9">
        PAY
      </div>
    </div>
  );
}

const Results = ({ onRoomSelect, selectedRooms }) => {
  const location = useLocation();
  const availableRooms = location.state?.availableRooms || [];

  const handleRoomClick = (room) => {
    const isRoomSelected = selectedRooms.find(
      (selectedRoom) => selectedRoom.id === room.id
    );
    if (isRoomSelected) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You have already selected this room!",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } else {
      onRoomSelect(room);
      Swal.fire({
        icon: "success",
        title: `${room.room_type.name} booked successfully! `,
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    }
  };

  const handleRoomClickModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const [selectedRoom, setSelectedRoom] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const closeModal = () => {
    setSelectedRoom(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen py-8">
      <h1 className="text-center font-extrabold text-5xl underline decoration-v ">
        Rooms</h1>
      <div className="max-w-4xl mx-auto mt-2">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4"></h2>
        {availableRooms.length === 0 ? (
          <div className="text-lg text-gray-600">
            <Loading />
          </div>
        ) : (
          availableRooms.map((room) => (
            <div
              className="pl-16 rounded-3xl shadow-sm bg-v max-md:pl-5 w-full lg:w-12/12 m-6 lg:h-[66%]"
              key={room.id}
            >
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                <div className="flex flex-col w-[44%] max-md:ml-8 max-md:w-full lg:h-[66%]">
                  <div className="flex flex-col mt-7 lg:h-[66%]">
                    <div className="flex flex-col items-start  max-md:pl-5 max-md:max-w-full lg:h-[66%] ">
                      <div className=" ">
                        <div className="flex  max-md:flex-col max-md:gap-0 lg:h-[66%]">
                          <div className="flex flex-col  max-md:ml-0 max-w-md ">
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 ml-28 text-base font-semibold text-white max-md:mt-10 max-md:ml-2.5 lg:h-[66%]">
                        Sleeps {room.max_capacity} | 2 King
                      </div>
                            <div className="mt-4 ml-24 text-2xl font-extrabold text-center text-white lg:h-[66%] ">
                              {room.room_type.name}
                            </div>
                    </div>
                    <div className="mt-5 mb-8 text- font-medium text-white ">
                      {room.description}
                    </div>
                    <h4 className="text-white">
                      PRICE FOR NIGHT ${room.price_per_night}
                    </h4>
                    <button
                      className="justify-center items-center px-16 py-4  text-base font-extrabold tracking-normal leading-6 text-white rounded-2xl border border-violet-100 border-solid hover:bg-green-950 transition-colors max-md:px-5 max-md:max-w-full"
                      onClick={() => handleRoomClickModal(room)}
                    >
                      SEE MORE
                    </button>
                    <button
                      className="mb-7 justify-center items-center px-16 py-4 mt-6 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
                      onClick={() => handleRoomClick(room)} // Call handleRoomClick when "BOOK NOW" is clicked
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[57.5%]  max-md:w-full ">
                  <img
                    loading="lazy"
                    src={room.photo_url}
                    className="grow w-full  rounded-r-3xl "
                    alt={`Habitación ${room.room_number}`}
                  />
                </div>
              </div>
            </div>
          ))
        )}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <DetailModalRoom room={selectedRoom} />
        </Modal>
      </div>
    </div>
  );
};



function BookingPartTwo() {
  const [availableRooms, setAvailableRooms] = React.useState([]);
  const [carsAvailables, setCarsAvailables] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get("from");
  const to = queryParams.get("to");
  const adults = queryParams.get("adults");
  const children = queryParams.get("children");
  const capacity = parseInt(adults) + parseInt(children);

  const numberOfNights = (() => {
    const checkInDate = new Date(from);
    const checkOutDate = new Date(to);
    const diffTime = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  })();

  const handleSearch = async () => {
    try {
      const formattedCheckInDate = from;
      const formattedCheckOutDate = to;

      const searchData = {
        from: formattedCheckInDate,
        to: formattedCheckOutDate,
        capacity,
      };

      const response = await axios.get(
        `${baseUrl}api/rooms/available`,
        {
          params: searchData,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAvailableRooms(response.data.rooms);

      if (response.data.rooms.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay habitaciones disponibles con esta cantidad o fecha que busca",
        });
      } else {
        const queryParams = new URLSearchParams({
          from: formattedCheckInDate,
          to: formattedCheckOutDate,
          adults,
          children,
        }).toString();
        navigate(`/bookingTwo?${queryParams}`, {
          state: {
            availableRooms: response.data.rooms,
          },
        });
      }
    } catch (error) {
      console.error("Error al enviar la solicitud de disponibilidad:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Sorry, there are no rooms available for the selected dates and number of guests.",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    }
  };
  useEffect(() => {
    if (from && to && capacity) {
      handleSearch();
    }
  }, [from, to, capacity]);

  const handleClickThree = () => {
    if (selectedRooms.length === 0) {
       Swal.fire({
         icon: "warning",
         title: "Warning",
         text: "Please select at least one room to proceed with your reservation. Thank you for your cooperation.",
         confirmButtonColor: "#fcd34d",
         customClass: {
           confirmButton: "custom-confirm-button",
         },
       });
    } else {
       
       const roomsDetails = selectedRoomsDetails.map(({ name, price_per_night ,  numberOfNights }) => ({ name, price_per_night ,  numberOfNights}));
   
      
       const roomsDetailsString = JSON.stringify(roomsDetails);
       
       const queryParams = new URLSearchParams({
         from: from,
         to: to,
         adults: capacity - children, 
         children: children,
         total: total,
         selectedRoomsDetails: roomsDetailsString,
         room_id : selectedRooms.map(room => room.id),
       }).toString();
   
       console.log(roomsDetails);
   
       navigate(`/bookingThree?${queryParams}`, {
         state: {
           checkInDate: from,
           checkOutDate: to,
           selectedGuests: capacity - children,
           selectedChildren: children,
           total: total,
           selectedRoomsDetails: roomsDetails,
           room_id : selectedRooms.map(room => room.id),
         },
       });
    }
   };
   

  const handleClick = () => {
    const queryParams = new URLSearchParams({
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      selectedGuests: selectedGuests,
      selectedChildren: selectedChildren,
      total: total,
      selectedRoomsDetails: selectedRoomsDetails,
    }).toString();

    navigate(`/booking?${queryParams}`, {
      state: {
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        selectedGuests: selectedGuests,
        selectedChildren: selectedChildren,
        total: total,
        selectedRoomsDetails: selectedRoomsDetails,
      },
    });
  };

  const {
    checkInDate = "defaultCheckInDate",
    checkOutDate = "defaultCheckOutDate",
    selectedGuests = 1,
    selectedChildren = 0,
  } = location.state || {};

  const [selectedRooms, setSelectedRooms] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [selectedRoomName, setSelectedRoomName] = React.useState("");
  const [selectedRoomsDetails, setSelectedRoomsDetails] = React.useState([]);

  const handleRoomSelect = (room) => {
    setSelectedRooms([...selectedRooms, room]);

    const checkIn = new Date(from);
    const checkOut = new Date(to);
    const oneDay = 24 * 60 * 60 * 1000;
    const numberOfNights = Math.round(Math.abs((checkOut - checkIn) / oneDay));

    const totalPriceForRoom = room.price_per_night * numberOfNights;
    setTotal(total + totalPriceForRoom);

    setSelectedRoomsDetails([
      ...selectedRoomsDetails,
      {
        name: room.room_type.name,
        price_per_night: room.price_per_night,
        numberOfNights,
      },
    ]);
    setSelectedRoomName(room.room_type.name);
  };

  const handleRemoveRoom = (index) => {
    const updatedRooms = [...selectedRooms];
    updatedRooms.splice(index, 1);
    setSelectedRooms(updatedRooms);

    const updatedRoomDetails = [...selectedRoomsDetails];
    const totalPriceForRoom =
      updatedRoomDetails[index].price_per_night *
      updatedRoomDetails[index].numberOfNights;
    setTotal(total - totalPriceForRoom);
    updatedRoomDetails.splice(index, 1);
    setSelectedRoomsDetails(updatedRoomDetails);
  };

  return (
    <div className="flex flex-col px-44 pt-12 bg-white rounded-md border-2 border-solid border-zinc-200 max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap">
          <DateOfStay />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b936466ba9e195c9951ced6f94513d497b953ed9a2477f1d2cdf89b9ea8a2e?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
            alt=""
            className="shrink-0 my-auto w-5 aspect-square mr-9"
          />
          <Accommodations />
        </div>
        <div className="flex gap-5 justify-between items-center text-neutral-400 max-md:flex-wrap ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5661c16c6e6c925a8fbb623c03668955e8ba6eef9d9ee9088c1a2a0562471744?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
            alt=""
            className="shrink-0 self-stretch my-auto w-5 aspect-square "
          />
          <EnhanceYourStay />
          <div className="flex gap-5 justify-between items-center text-neutral-400 max-md:flex-wrap ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05474e88431e7a9110b9a21bcf722dae765bd5ea13436d5df55ad479efa957db?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
              alt=""
              className="shrink-0 self-stretch my-auto w-5 aspect-square "
            />
            <Total total={total} />
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-8 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 justify-center flex items-center max-md:mr-2.5" />
      <div className="mt-14 max-md:mt-10 max-md:max-w-full ml-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center  max-md:max-w-full">
              <Results
                onRoomSelect={handleRoomSelect}
                selectedRooms={selectedRooms}
              />
            </div>
          </div>
          <div className="flex flex-col mr-14 w-[30%] max-md:ml-0 max-md:w-full mt-24 ">
            <div className="flex overflow-hidden relative flex-col px-7 pt-5 pb-9 border border-solid aspect-[0.86] bg-gray-200 rounded-xl border-neutral-800 fill-slate-500 leading-[140%] stroke-[0.5px] stroke-neutral-800 max-md:px-5 max-md:mt-4">
              <div className="flex relative gap-2.5 text-xl tracking-normal text-neutral-800">
                <div className="flex flex-col flex-1 font-bold ml-6 mt-2">
                  <div>Your Stay</div>
                  <div className="flex flex-col flex-1 my-auto font-extrabold mt-8">
                    <div className="flex flex-grow gap-16">
                      <div>Check-in</div>
                      <div>Check-out</div>
                    </div>
                    <div className="flex gap-14">
                      <div className=" mt-3 font-medium">{from}</div>
                      <div className="mt-3 font-medium">{to}</div>
                    </div>
                  </div>
                  <div className="ml-6 flex gap-24 mt-4">
                    <div className="font-extrabold">Adult</div>
                    <div className=" font-extrabold">Children</div>
                  </div>
                  <div className="ml-11 flex gap-36">
                    <div className="font-medium">{adults}</div>
                    <div className="font-medium">{children}</div>
                  </div>
                  {selectedRoomsDetails.map((room, index) => (
                    <div
                      key={index}
                      className="flex mb-5 gap-2.5 mt-3 text-black whitespace-nowrap"
                    >
                      <div className="font-extrabold">{room.name}</div>
                      <div className="flex flex-row gap-6">
                        <div className="font-medium">
                          ${room.price_per_night} x {numberOfNights} nights
                        </div>
                        <img
                            onClick={() => handleRemoveRoom(index)}
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                            alt="Remove icon"
                            className="shrink-0 self-start aspect-[0.89] w-[25px] cursor-pointer"
                          />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col flex-1 my-auto font-extrabold"></div>
              </div>
              <div className="flex relative gap-5 font-extrabold max-md:mt-10 mt-auto">
                <div className="justify-center px-10 py-0.5 text-xl tracking-normal text-center whitespace-nowrap bg-amber-300 rounded-md text-zinc-100 max-md:px-5 mb">
                  TOTAL
                </div>
                <div className="flex-auto text-2xl tracking-tight text-neutral-800 mb-4">
                  $ {total.toFixed(2)}
                </div>
              </div>
            </div>
        <button
          className="justify-center px-8 py-4 text-white bg-amber-300 rounded-md max-md:px-5 mt-7 hover:bg-amber-400 transition-colors"
          onClick={handleClickThree}
        >
          Continue
        </button>
        <button
          className="justify-center px-8 py-4 rounded-md border border-solid border-neutral-800 text-neutral-800 max-md:px-5 mt-3"
          onClick={handleClick}
        >
          RETURN
        </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-5 mt-8 text-xl font-extrabold tracking-normal leading-7 uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      </div>
    </div>
  );
}

export default BookingPartTwo;
