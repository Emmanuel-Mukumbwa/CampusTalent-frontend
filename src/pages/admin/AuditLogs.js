// src/pages/admin/AuditLogs.js
import React from 'react';
import { Table } from 'react-bootstrap';

const auditLogs = [
  { id: 1, event: 'User John Doe registered', timestamp: '2025-02-01 10:00 AM' },
  { id: 2, event: 'Job posting "Frontend Developer" approved', timestamp: '2025-02-02 02:30 PM' },
  { id: 3, event: 'User Jane Smith suspended', timestamp: '2025-02-03 09:15 AM' },
];

const AuditLogs = () => {
  return (
    <div className="container my-4">
      <h2>Audit Logs</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Log ID</th>
            <th>Event</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.event}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AuditLogs;
