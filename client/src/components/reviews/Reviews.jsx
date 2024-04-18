import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import StarRatings from 'react-star-ratings';

const Reviews = ({ socket }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [starRating, setStarRating] = useState(0); 
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    if (socket) {
      socket.on('reviewReceived', (message) => {
        setConfirmationMessage(message);
      });
    
      // Limpiar el listener al desmontar el componente
      return () => {
        socket.off('reviewReceived');
      };
    }
  }, [socket]);
  

  const onSubmit = data => {
    // Envío los datos del formulario al servidor a través de Socket.IO
    const formData = { ...data, starRating }; 
    socket.emit('formData', formData);
  };

  return (
    <div className="max-w-lg mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Leave Your Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 text-center"> 
          <label htmlFor="shortReview" className="block text-sm font-semibold mb-2">Short Review:</label>
          <textarea
            id="shortReview"
            {...register('shortReview', { required: true })}
            rows="2"
            className={`w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none ${errors.shortReview && 'border-red-500'}`}
            placeholder="Write a short review here"
          ></textarea>
          {errors.shortReview && <p className="text-red-500 text-sm mt-1">Short review is required.</p>}
        </div>

        <div className="mb-6 text-center"> 
          <label className="block text-sm font-semibold mb-2">Star Rating:</label>
          <StarRatings
            rating={starRating}
            starRatedColor="gold"
            changeRating={(newRating) => setStarRating(newRating)} 
            numberOfStars={5}
            name="starRating"
          />
          {errors.starRating && <p className="text-red-500 text-sm mt-1">Star rating is required.</p>}
        </div>

        <div className="text-center">
          <button type="submit" className="text-xl py-4 font-bold bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg text-white px-8 ">SUBMIT</button>
          {confirmationMessage && <p className="text-green-500 text-sm mt-2">{confirmationMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Reviews;


