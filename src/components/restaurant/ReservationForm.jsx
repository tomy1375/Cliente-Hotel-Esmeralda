import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import "./Restaurant.css";
import { useSelector } from "react-redux";
import { API_URL } from "../../utils/global";
import { useClerk } from "@clerk/clerk-react";
import Cookies from "js-cookie"; 


const [token, setToken] = useState(null); 

useEffect(() => {
   const token = Cookies.get("token");
   if (token) {
     setToken(token); 
   }
}, []);


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
      //  console.log('FormState after clientId update:', formState);
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
    console.log('FormState before sending1:', formState);
   
    // Preparar los datos a enviar
    const reservationData = {
       user_id: formState.user_id,
       number_of_diners: formState.number_of_diners,
       reservation_day: formState.reservation_day,
       reservation_hour: formState.reservation_time,
    };
   
    // Imprimir los datos que se van a enviar en formato de objeto JavaScript
    console.log('Data to be sent:', reservationData);
   
    // Opciones de la solicitud POST
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(reservationData), // Asegúrate de que el cuerpo de la solicitud sigue siendo una cadena JSON
   };
   
    // Realizar la solicitud POST
    fetch(`${API_URL}api/reservations/restaurant`, requestOptions)
       .then(response => {
         if (!response.ok) {
           throw new Error('Error en la solicitud: ' + response.status);
         }
         return response.json();
       })
       .then(data => {
         console.log('Respuesta del servidor:', data);
         // Mostrar alerta de éxito
         Swal.fire({
           title: 'Success!',
           text: `La reservación ha sido realizada con éxito.`,
           icon: 'success',
           confirmButtonText: 'Ok',
           confirmButtonColor: '#fcd34d',
           customClass: {
             confirmButton: 'custom-confirm-button1'
           }
         });
       })
       .catch(error => {
         console.error('Error:', error);
         // Mostrar alerta de error
         Swal.fire({
           title: 'Error',
           text: 'Hubo un problema al realizar la reservación.',
           icon: 'error',
           confirmButtonText: 'Ok',
           confirmButtonColor: '#fcd34d',
           customClass: {
             confirmButton: 'custom-confirm-button'
           }
         });
       });
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
          onClick={handleSubmit}
          
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
