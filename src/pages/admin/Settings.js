// src/pages/admin/Settings.js
import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

const Settings = () => {
  const [terms, setTerms] = useState('Current Terms and Conditions go here...');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, update the settings via API call
    setMessage('Terms and Conditions updated successfully!');
  };

  return (
    <div className="container my-4">
      <Card className="shadow-sm">
        <Card.Header as="h3">Settings</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTerms">
              <Form.Label>Terms and Conditions</Form.Label>
              <Form.Control as="textarea" rows={5} value={terms} onChange={(e) => setTerms(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">Save Settings</Button>
          </Form>
          {message && <p className="mt-3 text-success">{message}</p>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Settings;
