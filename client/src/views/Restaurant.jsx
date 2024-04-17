import { useState } from 'react';
import MenuPage from '../components/restaurant/Restaurant'
import Food from '../components/restaurant/RestaurantFood'
import ReservationForm from '../components/restaurant/ReservationForm';

const Restaurant = () => {
   const [currentPage, setCurrentPage] = useState(1);
  return (
      <div className="flex flex-col items-center mt-16 mb-8">
   <h1 className="text-6xl items-center font-extrabold text-center max-w-[548px] text-neutral-800 tracking-[3px] max-md:text-4xl">
      We serve passion.
      An oasis of pleasure...
   </h1>
   <div className="flex justify-start">
      <MenuPage setCurrentPage={setCurrentPage}/>
      <div className='items-end'>

      <Food currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
   </div>
   <div className='m-10 w-full'>
      <ReservationForm/>
   </div>
   </div>

  )
}

export default Restaurant