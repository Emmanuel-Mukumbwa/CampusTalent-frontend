// src/pages/student/JobListingsTab.js
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const JobListingsTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    applicantName: '',
    applicantEmail: '',
    coverLetter: ''
  });
  const navigate = useNavigate();

  // Dummy data for job listings with detailed fields
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      description: 'Work on cutting-edge software projects.',
      company: 'Techedge',
      location: 'Lilongwe, Malawi',
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
      location: 'Zomba, Malawi',
      category: 'Full-Time',
      salary: 'MK700,000 - MK900,000/year',
      workMode: 'Hybrid',
      postedDate: '2025-01-10',
      deadline: '2025-02-15',
      requiredSkills: ['JavaScript', 'MongoDB', 'React'],
      logo: 'https://via.placeholder.com/50',
    },
  ];

  // Filter jobs based on search term and category
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'all' || job.category.toLowerCase() === categoryFilter.toLowerCase())
  );

  // When "Apply Now" is clicked, open the modal and set selected job
  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  // Handle changes in the application form
  const handleApplicationChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  // Submit the application (simulate with an alert)
  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for "${selectedJob.title}" by ${applicationData.applicantName}`);
    // Reset modal state
    setApplicationData({ applicantName: '', applicantEmail: '', coverLetter: '' });
    setSelectedJob(null);
    setShowApplyModal(false);
  };

  return (
    <div className="container">
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

      <h3 className="mb-3">Available Job Listings</h3>

      {/* Job Listings */}
      {filteredJobs.map((job) => (
        <div
          key={job.id}
          className="card mb-3 shadow-sm"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
        >
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
            <button className="btn btn-primary" onClick={() => handleApplyClick(job)}>
              Apply Now
            </button>
          </div>
        </div>
      ))}

      {/* Application Modal */}
      <Modal show={showApplyModal} onHide={() => setShowApplyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {selectedJob && selectedJob.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleApplicationSubmit}>
            <Form.Group className="mb-3" controlId="formApplicantName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="applicantName"
                value={applicationData.applicantName}
                onChange={handleApplicationChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formApplicantEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="applicantEmail"
                value={applicationData.applicantEmail}
                onChange={handleApplicationChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCoverLetter">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write a cover letter"
                name="coverLetter"
                value={applicationData.coverLetter}
                onChange={handleApplicationChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JobListingsTab;
