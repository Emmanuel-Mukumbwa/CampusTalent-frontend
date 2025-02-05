// RecruiterDashboard.js
import React, { useState } from 'react';
import JobPostingsTab from './JobPostingsTab';
import ApplicationsTab from './ApplicationsTab';
import ContractsTab from './ContractsTab';
import CompanyProfileTab from './CompanyProfileTab';

const RecruiterDashboard = () => {
  // Tab state: you might have 'jobs', 'applications', 'contracts', 'profile'
  const [activeTab, setActiveTab] = useState('jobs');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'jobs':
        return <JobPostingsTab />;
      case 'applications':
        return <ApplicationsTab />;
      case 'contracts':
        return <ContractsTab />;
      case 'profile':
        return <CompanyProfileTab />;
      default:
        return <JobPostingsTab />;
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex justify-content-around">
        <button
          className={`btn ${activeTab === 'jobs' && 'btn-primary'}`}
          onClick={() => setActiveTab('jobs')}
        >
          Job Listings
        </button>
        <button
          className={`btn ${activeTab === 'applications' && 'btn-primary'}`}
          onClick={() => setActiveTab('applications')}
        >
          Applications
        </button>
        <button
          className={`btn ${activeTab === 'contracts' && 'btn-primary'}`}
          onClick={() => setActiveTab('contracts')}
        >
          Contracts
        </button>
        <button
          className={`btn ${activeTab === 'profile' && 'btn-primary'}`}
          onClick={() => setActiveTab('profile')}
        >
          Company Profile
        </button>
      </div>
      <div className="card-body">{renderTabContent()}</div>
    </div>
  );
};

export default RecruiterDashboard;
