import React from 'react';
import { Link } from 'react-router-dom';

const JobListings = () => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">Job Listings</h5>
        <p>Here are your current job listings:</p>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Software Engineer</strong>
            <p>Work on web applications</p>
            <Link to="/recruiter-dashboard/job-listings/1" className="btn btn-primary btn-sm">View Details</Link>
          </li>
          <li className="list-group-item">
            <strong>UI/UX Designer</strong>
            <p>Design user interfaces</p>
            <Link to="/recruiter-dashboard/job-listings/2" className="btn btn-primary btn-sm">View Details</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobListings;
