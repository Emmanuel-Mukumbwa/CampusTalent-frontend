// src/pages/admin/DashboardOverview.js
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const DashboardOverview = () => {
  // Dummy metrics
  const totalUsers = 150;
  const totalJobPostings = 45;
  const pendingApprovals = 5;
  const recentActivity = [
    'User John Doe registered',
    'Job posting "Frontend Developer" approved',
    'Service request flagged for review',
  ];

  return (
    <div>
      <h2>Dashboard Overview</h2>
      <Row className="mt-4">
        <Col md={3}>
          <Card bg="primary" text="white" className="mb-3">
            <Card.Header>Total Users</Card.Header>
            <Card.Body>
              <Card.Title>{totalUsers}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="success" text="white" className="mb-3">
            <Card.Header>Job Postings</Card.Header>
            <Card.Body>
              <Card.Title>{totalJobPostings}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="warning" text="white" className="mb-3">
            <Card.Header>Pending Approvals</Card.Header>
            <Card.Body>
              <Card.Title>{pendingApprovals}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h4>Recent Activity</h4>
      <ul>
        {recentActivity.map((activity, idx) => (
          <li key={idx}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardOverview;
