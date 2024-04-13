import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../modal/modal";
import DetailModalRoom from "../detail/DetailModalRoom";
import Swal from 'sweetalert2';



function DateOfStay() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/booking');
  };
  return (
    <div className="flex gap-2 p-6 rounded-sm px-9">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 bg-green-700 rounded-[50px]">
        <span className="flex text-white">&#10003;</span>
      </div>
      <button className="text-xl font-extrabold tracking-normal leading-7 text-zinc-800" onClick={handleClick}>
        DATES OF STAY
      </button>
    </div>
  );
}

const Results = ({ onRoomSelect, selectedRooms }) => {
  const location = useLocation();
  const availableRooms = location.state?.availableRooms || [];

  const handleRoomClick = (room) => {
    const isRoomSelected = selectedRooms.find(selectedRoom => selectedRoom.id === room.id);
    if (isRoomSelected) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You have already selected this room!',
        confirmButtonColor: '#fcd34d', 
        customClass: {
           confirmButton: 'custom-confirm-button' 
        }
      });
    } else {
      onRoomSelect(room);
      Swal.fire({
        icon: 'success',
        title: `${room.room_type.name} booked successfully! `,
        confirmButtonColor: '#fcd34d', 
        customClass: {
           confirmButton: 'custom-confirm-button' 
        }
      });
    }
  };

  const handleRoomClickModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true); // Open modal when room is selected
  };


  const [selectedRoom, setSelectedRoom] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const closeModal = () => {
    setSelectedRoom(null);
    setIsModalOpen(false); // Close modal when "Cerrar" button is clicked
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4"></h2>
        {availableRooms.length === 0 ? (
          <div className="text-lg text-gray-600">No se encontraron habitaciones disponibles.</div>
        ) : (
          availableRooms.map((room) => (
            <div className="pl-16 rounded-3xl shadow-sm bg-v max-md:pl-5 w-full lg:w-12/12 m-6 lg:h-[66%]" key={room.id}>
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                <div className="flex flex-col w-[44%] max-md:ml-8 max-md:w-full lg:h-[66%]">
                  <div className="flex flex-col mt-7 lg:h-[66%]">
                    <div className="flex flex-col items-start  max-md:pl-5 max-md:max-w-full lg:h-[66%] ">
                      <div className=" ">
                        <div className="flex  max-md:flex-col max-md:gap-0 lg:h-[66%]">
                          <div className="flex flex-col  max-md:ml-0 max-w-md ">
                            <div className="mt-5 ml-24 text-2xl font-extrabold text-center text-white lg:h-[66%] ">
                              {room.room_type.name}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12 ml-24 text-base font-semibold text-white max-md:mt-10 max-md:ml-2.5 lg:h-[66%]">
                        Sleeps {room.max_capacity} | 2 King
                      </div>
                    </div>
                    <div className="mt-5 mb-8 text- font-medium text-white ">{room.description}</div>
                    <h4 className="text-white">PRICE FOR NIGHT ${room.price_per_night}</h4>
                    <button
                      className="justify-center items-center px-16 py-4  text-base font-extrabold tracking-normal leading-6 text-white rounded-2xl border border-violet-100 border-solid hover:bg-slate-950 transition-colors max-md:px-5 max-md:max-w-full"
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

function Accommodations() {
  return (
    <div className="flex gap-2 p-6 whitespace-nowrap rounded-sm">
      <div className=" flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center text-white bg-amber-300 rounded-[50px]">2</div>
      <div className="text-xl font-extrabold tracking-normal leading-7 text-zinc-800">ACCOMMODATIONS</div>
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

function Total({ total }) {
  return (
    <div className="flex gap-2 self-stretch p-6 whitespace-nowrap rounded-sm px-14">
      <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">4</div>
      <div className="text-xl font-extrabold tracking-normal leading-7 mr-9">PAY</div>
    </div>
  );
}

function BookingPartTwo() {
  const navigate = useNavigate();

  const handleClickThree = () => {
    if (selectedRooms.length === 0) {
      // Si no se ha seleccionado ninguna habitación, muestra el SweetAlert de advertencia
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Please select at least one room to proceed with your reservation. Thank you for your cooperation.',
        confirmButtonColor: '#fcd34d',
        customClass: {
          confirmButton: 'custom-confirm-button'
        }
      });
    } else {
      // Si se ha seleccionado al menos una habitación, procede con la navegación o el proceso de reserva
      const queryParams = new URLSearchParams({
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        selectedGuests: selectedGuests,
        selectedChildren: selectedChildren,
        total: total,
        selectedRoomsDetails: selectedRoomsDetails
      }).toString();

      navigate(`/bookingThree?${queryParams}`, {
        state: {
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          selectedGuests: selectedGuests,
          selectedChildren: selectedChildren,
          total: total,
          selectedRoomsDetails: selectedRoomsDetails
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
      total: total, // Agrega el total como parte del estado
    selectedRoomsDetails: selectedRoomsDetails 
    }).toString();

     navigate(`/booking?${queryParams}`, {
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

  const location = useLocation();
  const { checkInDate = 'defaultCheckInDate', checkOutDate = 'defaultCheckOutDate', selectedGuests = 1, selectedChildren = 0  } = location.state || {};

  const [selectedRooms, setSelectedRooms] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [selectedRoomName, setSelectedRoomName] = React.useState("");
  const [selectedRoomsDetails, setSelectedRoomsDetails] = React.useState([]);

  const handleRoomSelect = (room) => {
    setSelectedRooms([...selectedRooms, room]);
  
    // Calcular el número de noches entre check-in y check-out
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const oneDay = 24 * 60 * 60 * 1000; // Horas * Minutos * Segundos * Milisegundos
    const numberOfNights = Math.round(Math.abs((checkOut - checkIn) / oneDay));
  
    // Multiplicar el precio por noche por el número de noches
    const totalPriceForRoom = room.price_per_night * numberOfNights;
  
    setSelectedRoomsDetails([...selectedRoomsDetails, { name: room.room_type.name, price_per_night: room.price_per_night, numberOfNights }]);
    setTotal(total + totalPriceForRoom );
    setSelectedRoomName(room.room_type.name);
  };

  
  
  const handleRemoveRoom = (index) => {
    const updatedRooms = [...selectedRooms];
    updatedRooms.splice(index, 1);
    setSelectedRooms(updatedRooms);
  
    const updatedRoomDetails = [...selectedRoomsDetails];
    const totalPriceForRoom = updatedRoomDetails[index].price_per_night * (updatedRoomDetails[index].numberOfNights );
    setTotal(total - totalPriceForRoom);
    updatedRoomDetails.splice(index, 1);
    setSelectedRoomsDetails(updatedRoomDetails);
  };
  

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
            <Total total={total} />
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-8 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 justify-center flex items-center max-md:mr-2.5" />
      <div className="mt-14 max-md:mt-10 max-md:max-w-full ml-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center  max-md:max-w-full">
              <Results onRoomSelect={handleRoomSelect} selectedRooms={selectedRooms} />
            </div>
          </div>
          <div className="flex flex-col mr-14 w-[30%] max-md:ml-0 max-md:w-full  ">
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
                    <div key={index} className="flex gap-2.5 mt-3 text-black whitespace-nowrap">
                      <div className="font-extrabold">{room.name}</div>
                      <div className="flex flex-col">
                        <div className="font-medium">${room.price_per_night } x {room.numberOfNights } nights</div>
                        <div className="flex">
                          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d0079c1716eb0292ecbf5111b08d6aba0fa825435ed5dc0dc367078eb205de?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="Remove icon" className="shrink-0 self-start aspect-[0.89] w-[25px]" />
                          <button onClick={() => handleRemoveRoom(index)} className="flex">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col flex-1 my-auto font-extrabold">
                </div>
              </div>
              <div className="flex relative gap-5 font-extrabold max-md:mt-10 mt-auto">
                <div className="justify-center px-10 py-0.5 text-xl tracking-normal text-center whitespace-nowrap bg-amber-300 rounded-md text-zinc-100 max-md:px-5 mb">TOTAL</div>
                <div className="flex-auto  text-2xl tracking-tight text-neutral-800 mb">$ {total.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-5 mt-8 text-xl font-extrabold tracking-normal leading-7 uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <button className="justify-center px-8 py-4 rounded-md border border-solid border-neutral-800 text-neutral-800 max-md:px-5 mt-7" onClick={handleClick}>RETURN</button>
        <button className="justify-center px-8 py-4 text-white bg-amber-300 rounded-md max-md:px-5 mt-7 hover:bg-amber-400 transition-colors" onClick={handleClickThree}>Continue</button>
      </div>
    </div>
  );
}

export default BookingPartTwo;
