import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import JobListingsTab from './JobListingsTab';
import ServiceRequestsTab from './ServiceRequestsTab';

const Engagements = () => {
  const [activeTab, setActiveTab] = useState('jobListings');

  return (
    <div className="container my-4">
      <h1 className="mb-4">Opportunities</h1>
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey="jobListings" title="Job Listings">
          <JobListingsTab />
        </Tab>
        <Tab eventKey="marketplace" title="Marketplace">
          <ServiceRequestsTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Engagements;
