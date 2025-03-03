// src/pages/admin/TransactionMonitoring.js
import React from 'react';
import { Table } from 'react-bootstrap';

const transactions = [
  { id: 1, date: '2025-01-10', amount: 'MK50,000', description: 'Payment for milestone 1', status: 'Completed' },
  { id: 2, date: '2025-02-05', amount: 'MK75,000', description: 'Payment for milestone 2', status: 'Pending' },
];

const TransactionMonitoring = () => {
  return (
    <div>
      <h2>Transaction Monitoring</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.date}</td>
              <td>{tx.amount}</td>
              <td>{tx.description}</td>
              <td>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionMonitoring;
