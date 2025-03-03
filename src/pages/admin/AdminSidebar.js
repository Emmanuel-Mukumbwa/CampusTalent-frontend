// src/pages/admin/AdminSidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, Badge } from 'react-bootstrap';

const AdminSidebar = () => {
  // Dummy dynamic counts for demonstration
  const [pendingUsers] = useState(3);
  const [pendingContent] = useState(2);
  const [newTransactions] = useState(1);

  return (
    <div className="bg-light" style={{ width: '250px', minHeight: '100vh' }}>
      <h4 className="p-3 border-bottom">Admin Panel</h4>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <NavLink to="/admin/dashboard/overview" className="text-decoration-none text-dark">
            Overview
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/admin/dashboard/users" className="text-decoration-none text-dark">
            User Management {pendingUsers > 0 && <Badge bg="danger">{pendingUsers}</Badge>}
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/admin/dashboard/content" className="text-decoration-none text-dark">
            Content Moderation {pendingContent > 0 && <Badge bg="warning">{pendingContent}</Badge>}
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/admin/dashboard/transactions" className="text-decoration-none text-dark">
            Transactions {newTransactions > 0 && <Badge bg="info">{newTransactions}</Badge>}
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/admin/dashboard/settings" className="text-decoration-none text-dark">
            Settings
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/admin/dashboard/audit-logs" className="text-decoration-none text-dark">
            Audit Logs
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminSidebar;
