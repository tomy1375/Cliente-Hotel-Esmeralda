import React, { forwardRef, useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../home/SearchBar.scss";
import { TbCalendar } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";
import { useClerk } from "@clerk/clerk-react";

const SearchBar = () => {
 const [checkInDate, setCheckInDate] = useState(null);
 const [checkOutDate, setCheckOutDate] = useState(null);
 const [numberOfAdults, setNumberOfAdults] = useState(1);
 const [numberOfChildren, setNumberOfChildren] = useState(0);
 const [availableRooms, setAvailableRooms] = useState([]);
 const [reservationStatus, setReservationStatus] = useState("");

 const navigate = useNavigate();
 const location = useLocation();

 const { user } = useClerk();
 const userInfo = useSelector((state) => state.users.userInfo);
 const clientId = userInfo?.username ?? user?.firstName ?? "notcount";

 useEffect(() => {
    const params = new URLSearchParams(location.search);
    const checkin = params.get('from');
    const checkout = params.get('to');
    const group_adults = params.get('group_adults');
    const group_children = params.get('group_children');

    if (checkin && checkout) {
      setCheckInDate(new Date(checkin));
      setCheckOutDate(new Date(checkout));
    }
    if (group_adults) {
      setNumberOfAdults(Number(group_adults));
    }
    if (group_children) {
      setNumberOfChildren(Number(group_children));
    }
 }, [location.search]);

 const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
 };

 const handleSearch = async () => {
  // Verifica si el usuario está registrado
  if (clientId === "notcount") {
     // Muestra un SweetAlert2 de advertencia
     Swal.fire({
       icon: 'warning',
       title: 'Log in to continue',
       text: 'You must log in to book a room.',
       confirmButtonColor: '#fcd34d', 
       customClass: {
         confirmButton: 'custom-confirm-button' 
       }
     });
     return; // Detiene la ejecución de la función
  }
 
  try {
     if (!checkInDate || !checkOutDate) {
       Swal.fire({
         icon: 'warning',
         title: 'Oops...',
         text: 'You must select both the check-in and check-out dates.',
         confirmButtonColor: '#fcd34d', 
         customClass: {
           confirmButton: 'custom-confirm-button' 
         }
       });
       return;
     }
 
     const capacity = numberOfAdults + numberOfChildren;
     const formattedCheckInDate = formatDate(checkInDate);
     const formattedCheckOutDate = formatDate(checkOutDate);
 
     const searchData = {
       from: formattedCheckInDate,
       to: formattedCheckOutDate,
       capacity,
     };
 
     const response = await axios.get(
       "http://localhost:4000/api/rooms/available",
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
         icon: 'error',
         title: 'Oops...',
         text: 'No hay habitaciones disponibles con esta cantidad o fecha que busca',
       });
     } else {
       const queryParams = new URLSearchParams({
         from: formattedCheckInDate,
         to: formattedCheckOutDate,
         adults: numberOfAdults,
         children: numberOfChildren,
       }).toString();
 
       // Navega a la nueva URL con los parámetros de búsqueda
       navigate(`/bookingTwo?${queryParams}`, { state: { 
         checkInDate: formattedCheckInDate, 
         checkOutDate: formattedCheckOutDate, 
         selectedGuests: numberOfAdults, 
         selectedChildren: numberOfChildren, 
         availableRooms: response.data.rooms 
       }});
     }
  } catch (error) {
     console.error("Error al enviar la solicitud de disponibilidad:", error);
     Swal.fire({
       icon: 'error',
       title: 'Error',
       text: 'Sorry, there are no rooms available for the selected dates and number of guests.',
       confirmButtonColor: '#fcd34d', 
       customClass: {
         confirmButton: 'custom-confirm-button' 
       }
     });
  }
 };
 

 

 const handleReservation = async (room_id) => {
    try {
      const reservationData = {
        user_id,
        formattedCheckInDate,
        formattedCheckOutDate,
        room_id,
      };
      const response = await axios.post(
        "http://localhost:4000/api/reservations",
        reservationData
      );
      setReservationStatus(response.data.message);
      setAvailableRooms((prevRooms) =>
        prevRooms.filter((room) => room.id !== roomId)
      );
    } catch (error) {
      console.error("Error al enviar la solicitud de reserva:", error);
    }
 };

 const handleAdultsChange = (value) => {
    const adults = Number(value);
    const maxAdults = 4;
    const maxChildren = 4 - adults;

    if (adults <= maxAdults) {
      setNumberOfAdults(adults);
    } else {
      setNumberOfAdults(maxAdults);
    }

    if (numberOfChildren > maxChildren) {
      setNumberOfChildren(maxChildren);
    }
 };

 const handleChildrenChange = (value) => {
    const children = Number(value);
    const maxChildren = 4 - numberOfAdults;

    if (children <= maxChildren) {
      setNumberOfChildren(children);
    } else {
      setNumberOfChildren(maxChildren);
    }
 };

 const CustomDatePickerInput = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-datepicker-input" ref={ref}>
      <input
        type="text"
        value={value}
        onClick={onClick}
        readOnly
        className="custom-datepicker-input__input"
        placeholder="Date"
      />
      <div className="custom-datepicker-input__icon" onClick={onClick}>
        <TbCalendar />
      </div>
    </div>
 ));

 return (
    <div>
      <div className="m-8 w-3/6 md:w-7/8 lg:w-1/2 mx-auto p-4 bg-v rounded-lg shadow-md flex flex-wrap">
        <div className="w-full md:w-auto md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-1">
          <label className="block mb-1 text-white text-center">CHECK-IN</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            customInput={<CustomDatePickerInput />}
          />
        </div>
        <div className="w-full md:w-auto md:flex-1 md:mr-2 mb-1 md:mb-0 mr-2 ml-2">
          <label className="block mb-1 text-white text-center">CHECK-OUT</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            minDate={
              checkInDate
                ? new Date(checkInDate.getTime() + 86400000)
                : new Date()
            }
            dateFormat="dd/MM/yyyy"
            customInput={<CustomDatePickerInput />}
            className="w-full px-3 py-2 border rounded-lg bg-v text-b"
          />
        </div>

        <div className="w-full md:w-1/4 md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-1">
          <label className="block mb-1 text-white text-center">ADULTS</label>
          <select
            className="w-full px-3 py-2 border rounded-lg bg-v text-b text-center"
            value={numberOfAdults.toString()}
            onChange={(event) => handleAdultsChange(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div className="w-full md:w-1/4 md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-1">
          <label className="block mb-1 text-white text-center">CHILDREN</label>
          <select
            className="w-full px-3 py-2 border rounded-lg bg-v text-b text-center"
            value={numberOfChildren.toString()}
            onChange={(event) => handleChildrenChange(event.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="ml-8 md:mt-7 flex items-center justify-center">
          <button
            className="w-full px-8 py-3 text-white bg-d rounded-lg hover:bg-amber-400 color transition-colors"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>

      {availableRooms.length > 0 && (
        <div className="w-full mt-4">
          <h3 className="text-lg font-semibold mb-2 text-white">
            AVAILABLE ROOMS
          </h3>
          <ul>
            {availableRooms.map((room) => (
              <li key={room.id} className="mb-4">
                <div className="flex items-center">
                  <img
                    src={room.photo_url}
                    alt={room.photo}
                    className="mr-4 w-24 h-auto"
                  />
                  <div>
                    <p className="text-white font-semibold mb-1">
                      max: {room.max_capacity} p
                    </p>
                    <p className="text-white">U$ {room.price_per_night}</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 mt-2 text-sm text-white bg-yellow- 500 rounded-lg hover:bg-yellow-600"
                  onClick={() => handleReservation(room.id)}
                >
                  BOOK
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reservationStatus && (
        <p className="mt-4 text-black">{reservationStatus}</p>
      )}
    </div>
  );
};

export default SearchBar;
