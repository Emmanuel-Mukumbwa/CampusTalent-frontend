import React, { useState, useEffect } from 'react';

const ApplicationTrackingPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Load applications from localStorage (or backend in a real app)
    const savedApplications = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(savedApplications);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Application Tracking</h2>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Status</th>
              <th>Submitted At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.applicationId}>
                <td>{app.jobId}</td>
                <td>{app.status}</td>
                <td>{new Date(app.submittedAt).toLocaleString()}</td>
                <td>
                  <button className="btn btn-secondary btn-sm">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApplicationTrackingPage;
