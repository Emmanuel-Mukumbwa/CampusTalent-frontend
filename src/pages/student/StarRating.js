import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ onRating }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              style={{ display: 'none' }}
              value={starRating}
              onClick={() => {
                setRating(starRating);
                onRating(starRating);
              }}
            />
            <FaStar
              className="star"
              color={starRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(starRating)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;