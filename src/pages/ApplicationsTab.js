// ApplicationsTab.js
import React, { useState } from 'react';

const ApplicationsTab = () => {
  const [applications, setApplications] = useState([
    { id: 1, name: 'John Doe', jobTitle: 'Software Engineer', status: 'Under Review' },
    { id: 2, name: 'Jane Smith', jobTitle: 'UI/UX Designer', status: 'Interview Scheduled' },
  ]);

  const handleHire = (app) => {
    // Implement hire logic here (e.g., updating status, creating a contract)
    alert(`Hired ${app.name}`);
  };

  const handleReject = (app) => {
    // Update application status to rejected
    setApplications(applications.map(a => a.id === app.id ? { ...a, status: 'Rejected' } : a));
    alert(`Rejected ${app.name}`);
  };

  return (
    <div>
      <h5>Candidate Applications</h5>
      <ul className="list-group">
        {applications.map((app) => (
          <li key={app.id} className="list-group-item">
            <strong>{app.name}</strong> applied for <em>{app.jobTitle}</em>
            <p>Status: {app.status}</p>
            <button className="btn btn-success btn-sm me-2" onClick={() => handleHire(app)}>
              Hire
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => handleReject(app)}>
              Reject
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationsTab;
