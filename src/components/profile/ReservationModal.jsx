import React, { useEffect } from "react";
import requestAllUserReservations from "../../services/reservations/requestAllUserReservations";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import confirmReservation from "../../services/reservations/confirmReservation";
import Swal from "sweetalert2";

const ReservationCard = ({
  imageSrc,
  title,
  nights,
  checkIn,
  checkOut,
  price,
  status,
  reservation_number,
  fetchReservations

}) => {
  const handleConfirmReservation = async () => {
    try {
      // Display a confirmation dialog before proceeding
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "Are you sure you want to check in at 3:00 PM?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, confirm',
        cancelButtonText: 'Cancel'
      });

      if (result.isConfirmed) {
        await confirmReservation(reservation_number);
        Swal.fire({
          icon: "success",
          title: "Reservation Confirmed",
          text: "Your reservation has been successfully confirmed.",
        });
        fetchReservations(); // Refresh the reservations list
      }
    } catch (error) {
      console.error("Error confirming reservation:", error);
      Swal.fire({
        icon: "error",
        title: "Error Confirming Reservation",
        text: "An error occurred while confirming your reservation. Please try again later.",
      });
    }
  };


  return (
    <div className="flex gap-5 py-0.5 pr-7 pl-px mt-16 w-full bg-slate-300 rounded-2xl border border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={title}
              className="grow w-full rounded-2xl aspect-[1.56] max-md:mt-8"
            />
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mb-3 self-stretch my-auto text-lg tracking-normal leading-7 text-black max-md:mt-10">
              <div>
                <h1 className="text-4xl font-bold">{title}</h1>
              </div>
              <div>
                <h1>Reservation Number:{reservation_number}</h1>
              </div>
              <div className="mt-5">{nights} NIGHTS</div>
              <div className="mt-6">
                CHECK-IN : {checkIn} <br />
                CHECK-OUT: {checkOut}
              </div>
              <div className="mt-5">Price per night: ${price}</div>
              {status === "pending" && (
                <button
                  onClick={handleConfirmReservation}
                  className="mt-5 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                  CHECK IN
                </button>
              )}
              {status === "pay" && (
                <div className="
                  flex
                  flex-row
                  items-center
                  gap-5
                  justify-center
                ">
                  <button className="mt-5 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirmReservation}
                    className="mt-5 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                  >
                    CHECK IN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`justify-center self-start px-2.5 py-2.5 mt-6 text-lg tracking-normal leading-7 whitespace-nowrap rounded-2xl text-white text-opacity-80 ${
          status === "pending"
            ? "bg-red-500"
            : status === "pay"
            ? "bg-yellow-500"
            : status === "finalized"
            ? "bg-green-500"
            : status === "confirmed"
            ? "bg-blue-500"
            : ""
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    </div>
  );
};

const ReservationModal = ({ isOpen, onClose }) => {
  const userInfo = useSelector((state) => state.users.userInfo);
  const userId = userInfo?.id;

  const [reservations, setReservations] = useState([]);
  console.log(reservations);

  const fetchReservations = async () => {
    try {
      const response = await requestAllUserReservations(userId);
      setReservations(response);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchReservations();
    }
  }, [userId]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div className="">
          <div className="flex flex-col self-center items-center justify-center px-7 pt-8 pb-14 mt-1  mb-3 w-full rounded-2xl border border-solid shadow-sm bg-white max-w-[1000px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex items-center justify-end w-full mb-4">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <h2 className="items-center justify-center text-6xl font-extrabold tracking-tighter text-black leading-[70.4px] max-md:max-w-full max-md:text-4xl">
              Reservations
            </h2>
            {reservations &&
              reservations.map((reservation, index) => (
                <ReservationCard
                  key={index}
                  fetchReservations={fetchReservations}
                  imageSrc={
                    reservation.room?.photo_url ||
                    "https://via.placeholder.com/150"
                  }
                  reservation_number={reservation.reservation_number}
                  title={reservation.room?.room_type.name || "No Description"}
                  nights={(
                    (new Date(reservation.check_out_date) -
                      new Date(reservation.check_in_date)) /
                    (1000 * 3600 * 24)
                  ).toFixed(0)}
                  checkIn={new Date(
                    reservation.check_in_date
                  ).toLocaleDateString()}
                  checkOut={new Date(
                    reservation.check_out_date
                  ).toLocaleDateString()}
                  price={parseFloat(reservation.room.price_per_night).toFixed(
                    2
                  )}
                  status={reservation.status}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationModal;
