// ReviewStudent.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewStudent = () => {
  const { studentId } = useParams();
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the review (e.g., API call)
    console.log(`Review for student ${studentId}: ${review}`);
    // Reset the review input
    setReview('');
  };

  return (
    <div className="container mt-4">
      <h3>Review Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Review:</label>
          <textarea
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewStudent;