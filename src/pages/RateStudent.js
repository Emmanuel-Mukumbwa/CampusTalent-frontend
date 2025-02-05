import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from './StarRating'; // Import your StarRating component

const RateStudent = () => {
  const { studentId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to submit the rating (e.g., API call)
    console.log(`Rating for student ${studentId}: ${rating}`);

    // Example API call (replace with your actual API endpoint)
    await fetch(`/api/students/${studentId}/ratings`, {
      method: 'POST',
      body: JSON.stringify({ rating }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Navigate back to the previous page after submission
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mt-4">
      <h3>Rate Student</h3>
      <StarRating onRating={handleRating} />
      <p>Your rating: {rating} {rating > 0 && '⭐'}</p>
      <button className="btn btn-primary" onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

export default RateStudent;