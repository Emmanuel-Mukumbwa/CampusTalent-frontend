// src/pages/recruiter/RecruiterJobPostings.js
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const initialJobPostings = [
  { 
    id: 1, 
    title: 'Frontend Developer Needed', 
    type: 'Job', 
    description: 'Company ABC is looking for a React developer.',
    company: 'Company ABC',
    location: 'New York, USA',
    compensation: '$80,000/year',
    deadline: '2025-05-01'
  },
  { 
    id: 2, 
    title: 'Internship: Digital Marketing', 
    type: 'Internship', 
    description: 'Join our digital marketing team as an intern.',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, USA',
    compensation: '$20/hour',
    deadline: '2025-04-15'
  },
  { 
    id: 3, 
    title: 'Gig: Build a Landing Page', 
    type: 'Gig', 
    description: 'Freelancer needed to build a responsive landing page.',
    company: 'Creative Studio',
    location: 'Remote',
    compensation: '$500 per project',
    deadline: '2025-03-20'
  },
];

const RecruiterJobPostings = () => {
  // Local state for job postings, search, and filter
  const [jobPostings, setJobPostings] = useState(initialJobPostings);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Modal state and form data for create/edit
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    type: 'Job',
    description: '',
    company: '',
    location: '',
    compensation: '',
    deadline: '',
  });

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Open modal for creating a new posting
  const handleCreate = () => {
    setEditingJob(null);
    setFormData({
      title: '',
      type: 'Job',
      description: '',
      company: '',
      location: '',
      compensation: '',
      deadline: '',
    });
    setShowModal(true);
  };

  // Open modal for editing an existing posting
  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData(job);
    setShowModal(true);
  };

  // Delete a posting after confirmation
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      setJobPostings(jobPostings.filter(job => job.id !== id));
    }
  };

  // Save form data (create or update)
  const handleSave = (e) => {
    e.preventDefault();
    if (editingJob) {
      // Update existing posting
      setJobPostings(jobPostings.map(job => job.id === editingJob.id ? { ...formData, id: editingJob.id } : job));
    } else {
      // Create new posting
      const newJob = { ...formData, id: Date.now() };
      setJobPostings([...jobPostings, newJob]);
    }
    setShowModal(false);
  };

  // Filter job postings based on type and search term
  const filteredJobs = jobPostings.filter(job => {
    const matchesFilter = filter === 'all' || job.type.toLowerCase() === filter.toLowerCase();
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <h2>Job Postings</h2>
      <div className="mb-3 d-flex align-items-center">
        <Button variant="primary" className="me-3" onClick={handleCreate}>Create New Posting</Button>
        <input 
          type="text" 
          className="form-control me-2 w-auto" 
          placeholder="Search postings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="form-select w-auto" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="job">Job</option>
          <option value="internship">Internship</option>
          <option value="gig">Gig</option>
          <option value="service">Service</option>
        </select>
      </div>
      <div>
        {filteredJobs.length ? (
          filteredJobs.map(job => (
            <div key={job.id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <p className="card-text">
                  <strong>Company:</strong> {job.company}<br />
                  <strong>Location:</strong> {job.location}<br />
                  <strong>Compensation:</strong> {job.compensation}<br />
                  <strong>Deadline:</strong> {job.deadline}
                </p>
                <span className="badge bg-secondary text-uppercase">{job.type}</span>
                <div className="mt-2">
                  <Button variant="outline-info" size="sm" className="me-2" onClick={() => handleEdit(job)}>Edit</Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(job.id)}>Delete</Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No job postings found.</p>
        )}
      </div>

      {/* Modal for Create/Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingJob ? 'Edit Job Posting' : 'Create New Job Posting'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Select name="type" value={formData.type} onChange={handleInputChange}>
                <option value="Job">Job</option>
                <option value="Internship">Internship</option>
                <option value="Gig">Gig</option>
                <option value="Service">Service</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={formData.description} onChange={handleInputChange} rows={3} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="company" value={formData.company} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" name="location" value={formData.location} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCompensation">
              <Form.Label>Compensation</Form.Label>
              <Form.Control type="text" name="compensation" value={formData.compensation} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDeadline">
              <Form.Label>Application Deadline</Form.Label>
              <Form.Control type="date" name="deadline" value={formData.deadline} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RecruiterJobPostings;
