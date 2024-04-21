import { useEffect, useState } from 'react';
import MenuPage from '../components/restaurant/Restaurant'
import Food from '../components/restaurant/RestaurantFood'
import ReservationForm from '../components/restaurant/ReservationForm';
import { useLocation } from 'react-router-dom';

const Restaurant = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const location = useLocation();

  useEffect(() => {
    // Desplazamiento automático a la sección del formulario si el hash está presente en la URL
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Dependiendo de la ubicación para reaccionar a cambios
  return (
      <div className="flex flex-col items-center mt-16 mb-8">
   <h1 id="food" className="text-6xl items-center font-extrabold text-center max-w-[548px] text-neutral-800 tracking-[3px] max-md:text-4xl">
      We serve passion.
      An oasis of pleasure...
   </h1>
   <div  className="flex justify-start">
      <MenuPage setCurrentPage={setCurrentPage}/>
      <div className='items-end'>

      <Food currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
   </div>
   <div id="reservation-form" className='m-10 w-full'>
        <ReservationForm/>
      </div>
   </div>

  )
}

export default Restaurant