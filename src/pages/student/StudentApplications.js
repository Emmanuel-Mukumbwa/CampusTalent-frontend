// src/components/StudentApplications.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentApplications = ({ serviceRequestId }) => {
  const [applications, setApplications] = useState([
    { id: 1, applicant: 'Jane Doe', message: 'I can deliver high-quality results within 3 days.', proposedTimeline: '3 days', status: 'Pending' },
    { id: 2, applicant: 'John Smith', message: 'I have experience in graphic design.', proposedTimeline: '5 days', status: 'Pending' },
  ]);

  const navigate = useNavigate();

  const handleAccept = (id) => {
    const acceptedApplication = applications.find(app => app.id === id);
    // Update the accepted application's status
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: 'Accepted' } : app
    ));
    // In your backend, update the service request status to "In Progress" here.
    // Redirect to the PeerContract component and pass the applicant and service request details.
    navigate('/peer-contract', { state: { applicant: acceptedApplication, serviceRequestId } });
  };

  const handleReject = (id) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: 'Rejected' } : app));
  };

  return (
    <div className="mt-4">
      <h3>Applications for Service Request {serviceRequestId}</h3>
      <ul className="list-group">
        {applications.map(app => (
          <li key={app.id} className="list-group-item">
            <p><strong>Applicant:</strong> {app.applicant}</p>
            <p><strong>Message:</strong> {app.message}</p>
            <p><strong>Proposed Timeline:</strong> {app.proposedTimeline}</p>
            <p><strong>Status:</strong> {app.status}</p>
            <div>
              <button className="btn btn-success me-2" onClick={() => handleAccept(app.id)}>Accept</button>
              <button className="btn btn-danger" onClick={() => handleReject(app.id)}>Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentApplications;
