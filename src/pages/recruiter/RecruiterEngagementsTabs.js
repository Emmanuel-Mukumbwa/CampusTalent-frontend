import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Opportunities from './Opportunities';
import RecruiterJobPostings from './RecruiterJobPostings';

const RecruiterEngagementsTabs = () => {
  const [activeTab, setActiveTab] = useState('opportunities');

  return (
    <div className="container my-4">
      <h1 className="mb-4">Engagements & Job Postings</h1>
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey="opportunities" title="Candidate Applications">
          <Opportunities />
        </Tab>
        <Tab eventKey="jobPostings" title="Job Postings">
          <RecruiterJobPostings />
        </Tab>
      </Tabs>
    </div>
  );
};

export default RecruiterEngagementsTabs;
