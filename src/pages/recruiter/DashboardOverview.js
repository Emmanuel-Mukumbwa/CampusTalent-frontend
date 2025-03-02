import React from 'react';

const DashboardOverview = () => {
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Candidate Applications</div>
            <div className="card-body">
              <h5 className="card-title">15 New Applications</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Contracts</div>
            <div className="card-body">
              <h5 className="card-title">8 Active Contracts</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Messages</div>
            <div className="card-body">
              <h5 className="card-title">3 New Messages</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
