// src/pages/student/ServiceRequestsTab.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

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
      additionalNotes: 'Weekly progress updates via email.' 
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
  
  // State for the Create Service Request modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  // State for the Apply modal
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const navigate = useNavigate();

  // Handle input changes in the create request form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest(prev => ({ ...prev, [name]: value }));
  };

  // Handle submission of a new service request
  const handleCreateSubmit = (e) => {
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
    setShowCreateModal(false);
  };

  // Delete a service request
  const handleDelete = (id) => {
    setServiceRequests(serviceRequests.filter(req => req.id !== id));
  };

  // Filter service requests by search term
  const filteredRequests = serviceRequests.filter(req =>
    req.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open the application modal for a given request
  const handleApply = (request) => {
    setSelectedRequest(request);
    setShowApplyModal(true);
  };

  // Handle submission of the application from the apply modal
  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle submission logic (API call, etc.)
    alert(`Application submitted for "${selectedRequest.title}"`);
    // Reset and close modal
    setShowApplyModal(false);
    setSelectedRequest(null);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Marketplace</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search service requests..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <h3 className="mb-3">Available Service Requests</h3>
      <ul className="list-group mb-4">
        {filteredRequests.map(request => (
          <li key={request.id} className="list-group-item">
            <h5>{request.title}</h5>
            <p>{request.description}</p>
            <p><strong>Required Skills:</strong> {request.requiredSkills}</p>
            <p><strong>Expected Deliverables:</strong> {request.expectedDeliverables}</p>
            <p><strong>Deadline:</strong> {request.deadline}</p>
            <p><strong>Budget:</strong> {request.budget}</p>
            <p><strong>Additional Notes:</strong> {request.additionalNotes}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <button className="btn btn-success" onClick={() => handleApply(request)}>Apply</button>
            <button className="btn btn-danger ms-2" onClick={() => handleDelete(request.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <Button variant="secondary" className="mb-3" onClick={() => setShowCreateModal(true)}>
        Create Service Request
      </Button>

      {/* Modal for Creating a Service Request */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Service Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateSubmit}>
            <Form.Group className="mb-3" controlId="formRequestTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={newRequest.title} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRequestDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={newRequest.description} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRequiredSkills">
              <Form.Label>Required Skills</Form.Label>
              <Form.Control type="text" name="requiredSkills" value={newRequest.requiredSkills} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExpectedDeliverables">
              <Form.Label>Expected Deliverables</Form.Label>
              <Form.Control type="text" name="expectedDeliverables" value={newRequest.expectedDeliverables} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDeadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control type="date" name="deadline" value={newRequest.deadline} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBudget">
              <Form.Label>Budget</Form.Label>
              <Form.Control type="text" name="budget" value={newRequest.budget} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAdditionalNotes">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control as="textarea" rows={3} name="additionalNotes" value={newRequest.additionalNotes} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Service Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal for Applying to a Service Request */}
      <Modal show={showApplyModal} onHide={() => setShowApplyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for: {selectedRequest && selectedRequest.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleApplicationSubmit}>
            <Form.Group className="mb-3" controlId="applicantName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="greeting">
              <Form.Label>Greeting and Introduction</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Introduce yourself" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="experience">
              <Form.Label>Relevant Experience / Skills</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Detail your relevant experience" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="understanding">
              <Form.Label>Understanding of Request</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Explain your understanding" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="proposedSolution">
              <Form.Label>Proposed Solution</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your proposed solution" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="timeline">
              <Form.Label>Timeline</Form.Label>
              <Form.Control type="text" placeholder="Enter timeline" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="budgetApp">
              <Form.Label>Budget</Form.Label>
              <Form.Control type="text" placeholder="Enter your expected budget" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="paymentTerms">
              <Form.Label>Payment Terms</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter payment terms" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="callToAction">
              <Form.Label>Call to Action</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your call to action" required />
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

export default ServiceRequestsTab;
