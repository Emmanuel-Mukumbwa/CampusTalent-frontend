// JobPostingsTab.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobPostingsTab = () => {
  const [jobPostings, setJobPostings] = useState([
    { id: 1, title: 'Software Engineer', description: 'Develop web applications.' },
    { id: 2, title: 'UI/UX Designer', description: 'Design user interfaces.' },
  ]);
  const [newJob, setNewJob] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddJob = () => {
    setJobPostings((prev) => [
      ...prev,
      { id: Date.now(), ...newJob, applications: 0, views: 0 },
    ]);
    setNewJob({ title: '', description: '' });
  };

  return (
    <div>
      <h5>Create New Job Posting</h5>
      <div className="mb-3">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Job Title"
          value={newJob.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          name="description"
          className="form-control"
          placeholder="Job Description"
          value={newJob.description}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary mb-4" onClick={handleAddJob}>
        Add Job Posting
      </button>

      <h5>Active Job Listings</h5>
      <ul className="list-group">
        {jobPostings.map((job) => (
          <li key={job.id} className="list-group-item">
            <strong>{job.title}</strong>: {job.description}
            <Link to={`/dashboard/job/${job.id}`} className="btn btn-link btn-sm">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPostingsTab;
