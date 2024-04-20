
import React from 'react';
import Reviews from '../components/reviews/Reviews';

const ReviewsView = ({ socket }) => {
  return (
    <div>
      <Reviews socket={socket} />
    </div>
  );
};

export default ReviewsView;
