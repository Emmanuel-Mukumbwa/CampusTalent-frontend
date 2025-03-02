import React, { useState } from 'react';

const ActiveProjects = () => {
  // Mock data for active projects
  const [activeProjects, setActiveProjects] = useState([
    {
      id: 1,
      title: 'E-commerce Website Development',
      deliverables: 'Homepage, Product Page',
      deadline: '2023-12-31',
      status: 'In Progress',
      submittedDeliverables: [],
    },
    {
      id: 2,
      title: 'Mobile App Design',
      deliverables: 'UI Mockups',
      deadline: '2023-11-15',
      status: 'In Progress',
      submittedDeliverables: [],
    },
  ]);

  const [newDeliverable, setNewDeliverable] = useState('');

  const handleSubmitDeliverable = (projectId) => {
    setActiveProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              submittedDeliverables: [...project.submittedDeliverables, newDeliverable],
            }
          : project
      )
    );
    setNewDeliverable('');
    alert('Deliverable submitted successfully!');
  };

  return (
    <div className="container mt-4">
      <h2>Active Projects</h2>
      {activeProjects.length > 0 ? (
        <ul className="list-group">
          {activeProjects.map((project) => (
            <li key={project.id} className="list-group-item">
              <h5>{project.title}</h5>
              <p>Status: {project.status}</p>
              <p>Deliverables: {project.deliverables}</p>
              <p>Deadline: {project.deadline}</p>
              <h6>Submitted Deliverables:</h6>
              <ul>
                {project.submittedDeliverables.length > 0 ? (
                  project.submittedDeliverables.map((deliverable, index) => (
                    <li key={index}>{deliverable}</li>
                  ))
                ) : (
                  <li>No deliverables submitted yet.</li>
                )}
              </ul>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter deliverable..."
                  value={newDeliverable}
                  onChange={(e) => setNewDeliverable(e.target.value)}
                />
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleSubmitDeliverable(project.id)}
                >
                  Submit Deliverable
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No active projects at the moment.</p>
      )}
    </div>
  );
};

export default ActiveProjects;