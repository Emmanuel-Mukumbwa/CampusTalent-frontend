// src/pages/admin/UserManagement.js
import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'student', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'recruiter', status: 'pending' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'student', status: 'active' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSuspend = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: 'suspended' } : user));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <Form.Control
        type="text"
        placeholder="Search users..."
        className="mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleSuspend(user.id)} className="me-2">
                  Suspend
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserManagement;
