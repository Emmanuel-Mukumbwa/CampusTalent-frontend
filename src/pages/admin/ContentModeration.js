// src/pages/admin/ContentModeration.js
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const jobPostings = [
  { id: 1, title: 'Software Engineer Intern', status: 'pending', details: 'Job posting pending approval.' },
  { id: 2, title: 'Full-Stack Developer', status: 'approved', details: 'Job posting approved.' },
];

const serviceRequests = [
  { id: 1, title: 'Website Development', status: 'pending', details: 'Service request pending review.' },
  { id: 2, title: 'Logo Design', status: 'approved', details: 'Service request approved.' },
];

const ContentModeration = () => {
  const [activeTab, setActiveTab] = useState('jobPostings');

  return (
    <div>
      <h2>Content Moderation</h2>
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey="jobPostings" title="Job Postings">
          <ul className="list-group">
            {jobPostings.map(posting => (
              <li key={posting.id} className="list-group-item">
                <h5>{posting.title}</h5>
                <p>Status: {posting.status}</p>
                <p>{posting.details}</p>
                {/* Approve/Reject buttons can be added here */}
              </li>
            ))}
          </ul>
        </Tab>
        <Tab eventKey="serviceRequests" title="Service Requests">
          <ul className="list-group">
            {serviceRequests.map(request => (
              <li key={request.id} className="list-group-item">
                <h5>{request.title}</h5>
                <p>Status: {request.status}</p>
                <p>{request.details}</p>
                {/* Approve/Reject buttons can be added here */}
              </li>
            ))}
          </ul>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ContentModeration;
