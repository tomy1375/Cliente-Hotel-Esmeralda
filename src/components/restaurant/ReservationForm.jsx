import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import "./Restaurant.css";
import { useSelector } from "react-redux";
import { API_URL } from "../../utils/global";
import { useClerk } from "@clerk/clerk-react";

const tables = [
  {
    reservation_time: "12:00",
    reservation_day: "2024-04-16",
    number_of_diners: 2,
  },
  {
    reservation_time: "12:00",
    reservation_day: "2024-04-17",
    number_of_diners: 4,
  },
];

function ReservationForm() {
  const baseURL = API_URL;
  const { user } = useClerk();
  const userInfo = useSelector((state) => state.users.userInfo);
  const clientId = userInfo?.id ?? user?.id ?? "incognito";
 
  const [formState, setFormState] = useState({
    user_id: "", 
    name: "",
    email: "",
    reservation_time: "",
    reservation_day: "",
    number_of_diners: "",
  });

  useEffect(() => {
    if (clientId) {
      setFormState((prevState) => ({
        ...prevState,
        user_id: clientId,
      }));
    }
  }, [clientId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedTable = tables.find(
      (table) =>
        table.reservation_time === formState.reservation_time &&
        table.reservation_day === formState.reservation_day &&
        table.number_of_diners === parseInt(formState.number_of_diners, 10)
    );

    if (selectedTable) {
      Swal.fire({
        title: 'Success!',
        text: `The table has been reserved for ${formState.reservation_day} at ${formState.reservation_time}, under the user_id of ${clientId}, with a number of diners for ${formState.number_of_diners}.`,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#fcd34d',
        customClass: {
          confirmButton: 'custom-confirm-button1'
        }
      }).then(() => {
        const reservationCopy = { ...formState };
        delete reservationCopy.name;
        delete reservationCopy.email;

        // console.log('Reservation Copy:', reservationCopy);

        fetch(`${baseURL}api/reservations/restaurant`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5NGYzNmU4LTQ2ZTgtNGU4Mi1hYjI1LTQyYmQxY2M0N2Q4MyIsInVzZXJuYW1lIjoiYXJlc3ZtMTMiLCJlbWFpbCI6ImFsZm9uc292ZW5nb2VjaGVhQGdtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcxMzU3MjE2OSwiZXhwIjoxNzEzNjU4NTY5fQ.yE944Hw1hVAb6Ds6gX8_qB2lX71rxBVZnkNO9XndgGQ`, 
          },
          body: JSON.stringify(reservationCopy),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => console.error('Error:', error));
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'No tables are available for those dates.',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#fcd34d',
        customClass: {
          confirmButton: 'custom-confirm-button'
        }
      });
    }
  };

  return (
    <section className="flex justify-center items-center px-16 py-20 bg-v max-md:px-5">
      <div className="flex flex-col items-center px-20 py-16 w-full border border-solid border-zinc-500 mx-auto max-md:px-5 max-md:max-w-full">
        <h2 className="mt-6 ml-20 text-lg tracking-normal leading-7 text-center text-white">
          Reservation
        </h2>
        <div className="shrink-0 mt-1 ml-20 h-px bg-orange-300 border border-orange-300 border-solid w-[147px]" />
        <h1 className="mt-5 ml-24 text-6xl font-extrabold tracking-tighter text-center text-white leading-[70.4px] max-md:text-4xl">
          Book your table now
        </h1>
        <form className="flex flex-col gap-5 justify-center mt-10 max-w-full w-[558px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 mr" onSubmit={handleSubmit}>
          <div className="flex gap-5 w-full ml-14">
            <div className="flex-1 grow shrink-0 basis-0 w-fit">
              <input
                type="text"
                id="nameInput"
                name="name"
                placeholder="Name"
                aria-label="Name"
                className="w-full px-6 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={formState.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1 grow shrink-0 basis-0 w-fit">
              <input
                type="email"
                id="emailInput"
                name="email"
                placeholder="Email"
                aria-label="Email"
                className="w-full px-6 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={formState.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex gap-5 w-full ml-14">
            <div className="flex-1">
              <input
                type="text"
                id="reservationTimeInput"
                name="reservation_time"
                placeholder="Reservation Time"
                aria-label="Reservation Time"
                className="w-full px-5 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={formState.reservation_time}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1">
              <input
                type="date"
                id="reservationDayInput"
                name="reservation_day"
                aria-label="Reservation Day"
                className="w-full px-5 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={formState.reservation_day}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1 grow shrink-0 basis-0 w-fit">
              <input
                type="number"
                id="numberOfDinersInput"
                name="number_of_diners"
                placeholder="Number of Diners"
                aria-label="Number of Diners"
                className="w-full px-6 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={formState.number_of_diners}
                onChange={handleInputChange}
                min="1"
                max="6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="self-start justify-center px-12 py-5 mt-9 ml-60 text-lg tracking-normal leading-7 text-center text-gray-800 bg-d hover:bg-amber-400 transition-colors rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 max-md:px-5"
          >
            Book a Table
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationForm;
