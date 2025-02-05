import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import StudentApplications and PeerApplicationForm as needed
// For this example, we assume these components exist in your project

const StudentServiceRequests = () => {
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
    <div className="container mt-4">
      <h2>Student Marketplace</h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name or skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <h3>Connect with Students</h3>
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

        <h3>Available Service Requests</h3>
        <ul className="list-group">
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
      </div>

      <h2>My Service Requests</h2>
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

      <ul className="list-group">
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

export default StudentServiceRequests;
