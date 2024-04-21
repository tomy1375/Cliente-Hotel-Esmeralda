import React, { useState, useEffect } from "react";
import DateRange from "./Calendar";
import { useNavigate, useLocation } from "react-router-dom";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../utils/global";

const baseUrl =  API_URL;

const GuestSelector = ({ onGuestsChange, onChildrenChange }) => {
  const [selectedGuests, setSelectedGuests] = React.useState(1);
  const [selectedChildren, setSelectedChildren] = React.useState(0);

  React.useEffect(() => {
    onGuestsChange(selectedGuests);
    onChildrenChange(selectedChildren);
  }, [selectedGuests, selectedChildren, onGuestsChange, onChildrenChange]);

  return (
    <div className="flex flex-col whitespace-nowrap max-md:mt-10">
      <div className="self-center text-sm font-medium text-neutral-800">
        Guest
      </div>
      <div className="flex gap-2 mt-6 font-extrabold leading-[140%]">
        <div className="flex gap-2.5 justify-center px-2.5 py-px text-2xl tracking-tight bg-white rounded-md border border-white border-solid text-neutral-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0720ca5e51790d591fd553c3718e6ccb9c83aa836a2edec99f92eb53ad8b616?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
            alt=""
            className="shrink-0 my-auto aspect-[0.9] w-[18px]"
          />
          <select
            value={selectedGuests}
            onChange={(e) => setSelectedGuests(Number(e.target.value))}
            className="text-2xl tracking-tight bg-white rounded-md border border-white border-solid text-neutral-500 cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="my-auto text-base tracking-normal text-neutral-800">
          Adult
        </div>
        <div className="flex gap-2.5 justify-center px-2.5 py-px text-2xl tracking-tight bg-white rounded-md border border-white border-solid text-neutral-500">
          <FontAwesomeIcon
            icon={faChild}
            className="shrink-0 my-auto aspect-[0.9] w-[18px]"
          />
          <select
            value={selectedChildren}
            onChange={(e) => setSelectedChildren(Number(e.target.value))}
            className="text-2xl tracking-tight bg-white rounded-md border border-white border-solid text-neutral-500 cursor-pointer"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="my-auto text-base tracking-normal text-neutral-800">
          Children
        </div>
      </div>
    </div>
  );
};

const CheckInOut = ({ title, date, time }) => {
  return (
    <div className="flex flex-col grow text-sm text-neutral-800 max-md:mt-10">
      <div className="self-start ml-16 font-medium max-md:ml-2.5">{title}</div>
      <div className="flex flex-col justify-center px-6 py-4 mt-3.5 w-full bg-amber-300 rounded-md max-md:px-10">
        <div className="flex gap-4 justify-between py-1">
          <div className="flex gap-1 justify-center">
            <img
              loading="lazy"
              src={date.icon}
              alt=""
              className="shrink-0 self-start w-3 aspect-square fill-neutral-800"
            />
            <div>{date.text}</div>
          </div>
          <div className="flex gap-2 self-start whitespace-nowrap">
            <img
              loading="lazy"
              src={time.icon}
              alt=""
              className="shrink-0 w-3.5 aspect-square fill-neutral-800"
            />
            <div>{time.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Booking = () => {
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [selectedChildren, setSelectedChildren] = useState(0);
  const [availableRooms, setAvailableRooms] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get("from");
  const to = queryParams.get("to");
  const capacity = queryParams.get("capacity");
 
  const [checkInDate, setCheckInDate] = useState({
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e723daaa5705c3c60192811b2d4c4d34ea0086691260ccd5f565983c96238170?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
    text: "-",
  });
  const [checkOutDate, setCheckOutDate] = useState({
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e723daaa5705c3c60192811b2d4c4d34ea0086691260ccd5f565983c96238170?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
    text: "-",
  });
  const checkInTime = {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa548253b0a3f7559460126f9e8f68edd507561f0d80d7c2534eaf4b6ca1da60?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
    text: "15:00",
  };
  const checkOutTime = {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/251a35a811c6f3f6e806f75dd0806d4971eb85b3bb7668162e62c0d2ccd8bfaa?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
    text: "10:00",
  };
  const navigate = useNavigate();


  const handleCheckInChange = (startDate) => {
    setCheckInDate((prevCheckInDate) => ({
      ...prevCheckInDate,
      text: startDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    }));
  };

  const handleCheckOutChange = (endDate) => {
    setCheckOutDate((prevCheckOutDate) => ({
      ...prevCheckOutDate,
      text: endDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    }));
  };

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
        navigate("/bookingTwo", {
          state: {
            checkInDate: formattedCheckInDate,
            checkOutDate: formattedCheckOutDate,
            selectedGuests,
            selectedChildren,
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

  React.useEffect(() => {
    
    if (from && to && capacity) {
      handleSearch();
    }
  }
  , [from, to, capacity]);

  return (
    <div className="flex flex-col px-52 pt-16 bg-white rounded-md border-2 border-solid border-zinc-200 max-md:px-5">
      <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 self-stretch p-2 rounded-sm">
          <div className="flex justify-center items-center mb px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center text-white whitespace-nowrap bg-amber-300 rounded-[50px]">
            1
          </div>
          <div className="text-xl font-extrabold tracking-normal leading-7 text-zinc-800">
            DATES OF STAY
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e335e06f3a51b97b1ff8568011361eb9642406c95329db68b2ec6b163c8aba68?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          alt=""
          className="shrink-0 self-stretch my-auto w-5 aspect-square "
        />
        <div className="flex gap-2 self-stretch p-2 whitespace-nowrap rounded-sm text-neutral-400">
          <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">
            2
          </div>
          <div className="text-xl font-extrabold tracking-normal leading-7">
            ACCOMMODATIONS
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b60753b09e9eb42d3de102f2747adc0017e5227d499fd01764e31c72be716d?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          alt=""
          className="shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="flex gap-2 self-stretch p-2 whitespace-nowrap rounded-sm text-neutral-400">
          <div className="flex justify-center items-center self-stretch px-4 py-2 my-auto w-7 h-7 text-sm font-bold leading-5 text-center whitespace-nowrap bg-zinc-200 rounded-[50px] text-neutral-400">
            3
          </div>
          <div className="self-stretch my-auto text-xl font-extrabold tracking-normal leading-7 text-neutral-400">
            ENHANCE YOUR STAY
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b95548275dce30c3b69c3dee1bd2afb846e9c108e608aafc975f7537e204bdc?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          alt=""
          className="shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="flex gap-2 self-stretch p-2 whitespace-nowrap rounded-sm text-neutral-400">
          <div className="flex justify-center items-center px-4 py-2 w-7 h-7 text-sm font-bold leading-5 text-center bg-zinc-200 rounded-[50px]">
            4
          </div>
          <div className="text-xl font-extrabold tracking-normal leading-7">
            PAY
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-12 max-w-full h-px border border-solid bg-zinc-200 border-zinc-200 justify-center flex items-center max-md:mr-2.5" />
      <div className="px-9 pt-7 pb-10 mt-16 max-w-full w-[802px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <GuestSelector
            onGuestsChange={setSelectedGuests}
            onChildrenChange={setSelectedChildren}
          />
          <CheckInOut title="Check-in" date={checkInDate} time={checkInTime} />
          <CheckInOut
            title="Check-out"
            date={checkOutDate}
            time={checkOutTime}
          />
        </div>
      </div>
      <div className="flex flex-col pb-7 mt-8 max-w-full ">
        <div className="flex overflow-hidden relative flex-col justify-center px-14 pt-11 pb-4 w-full min-h-[416px] max-md:px-5 max-md:max-w-full">
          <div className="flex">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36756baee048f2a7eed6e82f8f138f0d61655475fed090b94bfa15413ef208c6?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
              alt="box"
              className="object-cover absolute inset-0 max-w-[1500px] h-full"
            />
            <div className="relative max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex w-full overflow-visible items-center justify-center mt-4 ml-20">
                    <DateRange
                      onChangeCheckIn={handleCheckInChange}
                      onChangeCheckOut={handleCheckOutChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end px-16 pb-3.5=== mt-3 text-2xl font-extrabold tracking-tight leading-8 text-white uppercase whitespace-nowrap max-md:pl-5 max-md:max-w-full">
        <button
          className="justify-center px-8 py-4 text-white bg-amber-300 rounded-md max-md:px-5 mr-56 mt-5  hover:bg-amber-400 transition-colors"
          onClick={handleSearch}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Booking;
