import React, { useState } from "react";
import Swal from 'sweetalert2';
import { pdf, BlobProvider } from '@react-pdf/renderer';

import "./Restaurant.css"
import ReservationPDF from "./ReservationTablePdf";

const tables = [
  {
     timing: "12:00",
     date: "2024-04-16",
     capacity: 2,
  },
  {
     timing: "12:00",
     date: "2024-04-17",
     capacity: 4,
  },
 ];
 

function ReservationForm() {
 const [formState, setFormState] = useState({
    name: "",
    email: "",
    timing: "",
    date: "",
    capacity: "",
 });

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
       table.timing === formState.timing &&
       table.date === formState.date &&
       table.capacity === parseInt(formState.capacity, 10)
  );
 
  if (selectedTable) {
     Swal.fire({
       title: 'Success!',
       text: `The table has been reserved for ${formState.date} at ${formState.timing}, under the name of ${formState.name}, with a capacity for ${formState.capacity}.`,
       icon: 'success',
       confirmButtonText: 'Ok',
       confirmButtonColor: '#fcd34d',
       customClass: {
         confirmButton: 'custom-confirm-button1'
       }
     }).then(() => {
       // Genera el PDF
       const reservation = {
         name: formState.name,
         email: formState.email,
         timing: formState.timing,
         date: formState.date,
         capacity: formState.capacity,
       };
 
       const doc = <ReservationPDF reservation={reservation} />;
       pdf(doc).toBlob().then(blob => {
         // Descarga el PDF
         const url = URL.createObjectURL(blob);
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'reservation.pdf');
         document.body.appendChild(link);
         link.click();
         link.parentNode.removeChild(link);
       });
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
      <div className="flex flex-col items-center px-20 py-16 w-full border border-solid border-zinc-500 mx-auto  max-md:px-5 max-md:max-w-full">
        <h2 className="mt-6 ml-20 text-lg tracking-normal leading-7 text-center text-white">
          Reservation
        </h2>
        <div className="shrink-0 mt-1 ml-20 h-px bg-orange-300 border border-orange-300 border-solid w-[147px]" />
        <h1 className="mt-5 ml-24 text-6xl font-extrabold tracking-tighter text-center text-white leading-[70.4px] max-md:text-4xl">
          Book your table now
        </h1>
        <form className="flex flex-col gap-5 justify-center  mt-10  max-w-full w-[558px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 mr" onSubmit={handleSubmit}>
          <div className="flex gap-5 w-full ml-14">
            <div className="flex-1 grow shrink-0 basis-0 w-fit">
              <label htmlFor="nameInput" className="sr-only">
                Name
              </label>
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
              <label htmlFor="emailInput" className="sr-only">
                Email
              </label>
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
              <label htmlFor="timingInput" className="sr-only">
                Timing
              </label>
              <input
                type="text"
                id="timingInput"
                name="timing"
                placeholder="Timing"
                aria-label="Timing"
                className="w-full px-5 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={formState.timing}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="dateInput" className="sr-only">
                Date
              </label>
              <input
                type="date"
                id="dateInput"
                name="date"
                placeholder="Date"
                aria-label="Date"
                className="w-full px-5 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={formState.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1 grow shrink-0 basis-0 w-fit">
              <label htmlFor="capacityInputId" className="sr-only">
                Capacity
              </label>
              <input
                type="number"
                id="capacityInputId"
                name="capacity"
                placeholder="Capacity"
                aria-label="Capacity"
                className="w-full px-6 py-7 text-lg tracking-normal leading-7 text-white bg-transparent border border-solid border-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={formState.capacity}
                onChange={handleInputChange}
                min="1" // Establece el valor mínimo permitido
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
