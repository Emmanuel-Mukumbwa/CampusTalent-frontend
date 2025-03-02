import React, { useState } from 'react';

const candidateApplications = [
  { id: 1, candidateName: 'John Doe', position: 'Frontend Developer', status: 'New', details: 'Candidate has 3 years experience in React and Angular.', rating: 4.2 },
  { id: 2, candidateName: 'Jane Smith', position: 'Backend Developer', status: 'Reviewed', details: 'Skilled in Node.js and Express with 5 years experience.', rating: 4.8 },
  { id: 3, candidateName: 'Alice Johnson', position: 'UI/UX Designer', status: 'Interview', details: 'Strong portfolio and creative designs.', rating: 4.5 },
];

const Opportunities = () => {
  const [filter, setFilter] = useState('All');
  const [selectedApplication, setSelectedApplication] = useState(null);

  const filteredApplications = candidateApplications.filter(
    (app) => filter === 'All' || app.status === filter
  );

  return (
    <div>
      <h2>Candidate Applications</h2>
      <div className="mb-3">
        <label className="me-2">Filter by Status:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="form-select w-auto d-inline-block">
          <option>All</option>
          <option>New</option>
          <option>Reviewed</option>
          <option>Interview</option>
        </select>
      </div>
      <div className="list-group">
        {filteredApplications.map((app) => (
          <button key={app.id} className="list-group-item list-group-item-action" onClick={() => setSelectedApplication(app)}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{app.candidateName}</h5>
              <small>{app.status}</small>
            </div>
            <p className="mb-1">{app.position}</p>
            <small>Rating: {app.rating}</small>
          </button>
        ))}
      </div>
      {selectedApplication && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedApplication.candidateName} - {selectedApplication.position}
                </h5>
                <button type="button" className="btn-close" onClick={() => setSelectedApplication(null)}></button>
              </div>
              <div className="modal-body">
                <p>{selectedApplication.details}</p>
                <p><strong>Rating:</strong> {selectedApplication.rating}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setSelectedApplication(null)}>Close</button>
                <button className="btn btn-primary" onClick={() => window.location.href = `/recruiter/candidate/${selectedApplication.id}`}>View Profile</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Opportunities;
