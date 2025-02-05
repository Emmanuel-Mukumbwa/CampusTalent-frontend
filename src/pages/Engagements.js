// src/components/Engagements.js
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useNavigate, Link, useParams } from 'react-router-dom';
import backgroundImage from '../assets/images/joblisting2.jpg';

// --- Job Listings (Engagements) Tab Component ---
const JobListingsTab = () => {
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
    (categoryFilter === 'all' || job.category === categoryFilter)
  );

  const handleApply = (jobId) => {
    navigate(`/job-application/${jobId}`);
  };

  return (
    <div>
      {/* Adapted Header Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '250px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '30px',
          marginBottom: '30px',
        }}
      >
        <div className="text-black" style={{ paddingLeft: '20px' }}>
          <h2 className="text-black">Engagements</h2>
        </div>
      </div>

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

        {/* Job Listings Heading */}
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
              <button className="btn btn-primary" onClick={() => handleApply(job.id)}>
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Student Service Requests (Marketplace) Tab Component ---
const ServiceRequestsTab = () => {
  const [serviceRequests, setServiceRequests] = useState([
    { 
      id: 1, 
      title: 'Website Development', 
      description: 'Build a responsive website for my business.', 
      requiredSkills: 'React, CSS', 
      expectedDeliverables: 'Complete website', 
      deadline: '2025-03-01', 
      status: 'Open',
      budget: 'Flexible, depending on experience.', 
      additionalNotes: 'I prefer weekly progress updates via email.' 
    },
  ]);
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    requiredSkills: '',
    expectedDeliverables: '',
    deadline: '',
    status: 'Open',
    budget: '',
    additionalNotes: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [students] = useState([
    { id: 1, name: 'John Smith', skills: 'Python, Machine Learning', rating: 4.5, badges: ['Silver', 'Top-rated'], availability: 'Available', bio: 'Computer Science student specializing in AI.' },
    { id: 2, name: 'Jane Doe', skills: 'Graphic Design, Video Editing', rating: 4.7, badges: ['Gold'], availability: 'Available', bio: 'Creative designer with a passion for visual storytelling.' },
  ]);
  const [postedRequests] = useState([
    { 
      id: 1, 
      title: 'Logo Design Needed', 
      description: 'Create a modern logo for our startup.', 
      skills: 'Graphic Design', 
      deadline: '2025-02-10', 
      poster: 'Alice Johnson',
      budget: 'Flexible, depending on experience.', 
      additionalNotes: 'I prefer the logo to be delivered in vector format (AI or EPS).' 
    },
    { 
      id: 2, 
      title: 'Python Tutor Required', 
      description: 'Help me understand advanced Python concepts.', 
      skills: 'Python, Teaching', 
      deadline: '2025-02-15', 
      poster: 'Bob Brown',
      budget: 'Flexible, depending on experience.', 
      additionalNotes: 'I prefer tutoring sessions via Zoom twice a week.' 
    },
  ]);
  const navigate = useNavigate();
  const { id: serviceRequestId } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServiceRequests([...serviceRequests, { ...newRequest, id: Date.now() }]);
    setNewRequest({
      title: '',
      description: '',
      requiredSkills: '',
      expectedDeliverables: '',
      deadline: '',
      status: 'Open',
      budget: '',
      additionalNotes: '',
    });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setServiceRequests(serviceRequests.filter(request => request.id !== id));
  };

  const handleApply = (request) => {
    navigate('/peer-application', { state: { serviceRequest: request } });
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="mb-4">Student Marketplace</h2>

      {/* Search for students */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h3 className="mb-3">Connect with Students</h3>
      <ul className="list-group mb-4">
        {filteredStudents.map(student => (
          <li key={student.id} className="list-group-item">
            <h5>{student.name}</h5>
            <p>Skills: {student.skills}</p>
            <p>Rating: {student.rating}</p>
            <p>Badges: {student.badges.join(', ')}</p>
            <p>Availability: {student.availability}</p>
            <p>Bio: {student.bio}</p>
            <button className="btn btn-primary me-2">Connect</button>
            <button className="btn btn-primary me-2" onClick={() => navigate(`/rate-student/${student.id}`)}>Rate</button>
            <button className="btn btn-secondary" onClick={() => navigate(`/review-student/${student.id}`)}>Review</button>
          </li>
        ))}
      </ul>

      <h3 className="mb-3">Available Service Requests</h3>
      <ul className="list-group mb-4">
        {postedRequests.map(request => (
          <li key={request.id} className="list-group-item">
            <h5>{request.title}</h5>
            <p>{request.description}</p>
            <p><strong>Skills Required:</strong> {request.skills}</p>
            <p><strong>Deadline:</strong> {request.deadline}</p>
            <p><strong>Budget:</strong> {request.budget}</p>
            <p><strong>Additional Notes:</strong> {request.additionalNotes}</p>
            <p><strong>Posted by:</strong> {request.poster}</p>
            <button className="btn btn-success" onClick={() => handleApply(request)}>Apply</button>
          </li>
        ))}
      </ul>

      <h3 className="mb-3">My Service Requests</h3>
      <button className="btn btn-secondary mb-3" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Create Service Request Form' : 'Show Create Service Request Form'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={newRequest.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              name="description"
              value={newRequest.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Required Skills:</label>
            <input
              type="text"
              className="form-control"
              name="requiredSkills"
              value={newRequest.requiredSkills}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Expected Deliverables:</label>
            <input
              type="text"
              className="form-control"
              name="expectedDeliverables"
              value={newRequest.expectedDeliverables}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Deadline:</label>
            <input
              type="date"
              className="form-control"
              name="deadline"
              value={newRequest.deadline}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Budget:</label>
            <input
              type="text"
              className="form-control"
              name="budget"
              value={newRequest.budget}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Additional Notes:</label>
            <textarea
              className="form-control"
              name="additionalNotes"
              value={newRequest.additionalNotes}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Service Request</button>
        </form>
      )}

      <ul className="list-group mb-4">
        {serviceRequests.map(request => (
          <li key={request.id} className="list-group-item">
            <h5>{request.title}</h5>
            <p>{request.description}</p>
            <p><strong>Required Skills:</strong> {request.requiredSkills}</p>
            <p><strong>Expected Deliverables:</strong> {request.expectedDeliverables}</p>
            <p><strong>Deadline:</strong> {request.deadline}</p>
            <p><strong>Budget:</strong> {request.budget}</p>
            <p><strong>Additional Notes:</strong> {request.additionalNotes}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <Link to={`/applications/${request.id}`} className="btn btn-info me-2">View Applications</Link>
            <button className="btn btn-danger" onClick={() => handleDelete(request.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Engagements Component with Tabs ---
const Engagements = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div className="container my-4">
      {/* Page Title / Breadcrumb */}
      <h1 className="mb-4">Opportunities</h1>

      {/* Tabs for Job Listings (Engagements) and Service Requests (Marketplace) */}
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey="jobs" title="Engagements">
          <JobListingsTab />
        </Tab>
        <Tab eventKey="serviceRequests" title="Marketplace">
          <ServiceRequestsTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Engagements;
