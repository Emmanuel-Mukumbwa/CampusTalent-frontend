import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import backgroundImage from '../assets/images/joblisting2.jpg'; // Adjust the path as necessary

const JobListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const navigate = useNavigate();

  // Mock data for job listings
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      description: 'Work on cutting-edge software projects.',
      company: 'Techedge',
      location: 'Lilongwe, malawi',
      category: 'Internship',
      salary: 'MK45,000/hour',
      workMode: 'Remote',
      postedDate: '2025-01-15',
      deadline: '2025-01-30',
      requiredSkills: ['React', 'Node.js', 'Agile Development'],
      logo: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      description: 'Develop full-stack web applications.',
      company: 'WebSolu',
      location: 'zomba, malawi',
      category: 'Full-Time',
      salary: 'MK700,000 - MK900,000/year',
      workMode: 'Hybrid',
      postedDate: '2025-01-10',
      deadline: '2025-02-15',
      requiredSkills: ['JavaScript', 'MongoDB', 'React'],
      logo: 'https://via.placeholder.com/50',
    },
  ];

  // Filtered job list
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'all' || job.category === categoryFilter)
  );

  // Navigate to the Job Application Page
  const handleApply = (jobId) => {
    navigate(`/job-application/${jobId}`);
  };

  return (
    <div>
      {/* Header Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '50px', // Adjust padding to move the image down
          marginBottom: '50px', // Move the image down by adding margin
        }}
      >
        <div className="text-black" style={{ paddingLeft: '20px' }}>
          <h1>Job Listings</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-4">
        {/* Search Bar */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search jobs by keyword, location, or company"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Job Categories Filter */}
        <select
          className="form-select mb-4"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Internship">Internship</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>

        {/* Job Listings Heading - Aligned to the left */}
        <h2 className="text-black mb-3" style={{ textAlign: 'left' }}>Available Job Listings</h2>

        {/* Job Listings */}
        {filteredJobs.map((job) => (
          <div key={job.id} className="card mb-3 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img src={job.logo} alt={job.company} className="me-3" />
                <div>
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">
                    {job.description}
                    <br />
                    <strong>Company:</strong> {job.company}
                    <br />
                    <strong>Location:</strong> {job.location}
                    <br />
                    <strong>Salary:</strong> {job.salary}
                    <br />
                    <strong>Work Mode:</strong> {job.workMode}
                    <br />
                    <strong>Posted:</strong> {job.postedDate}
                    <br />
                    <strong>Deadline:</strong> {job.deadline}
                    <br />
                    <strong>Skills:</strong> {job.requiredSkills.join(', ')}
                  </p>
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => handleApply(job.id)}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingPage;