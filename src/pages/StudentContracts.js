// StudentContracts.js
import React, { useState } from 'react';

const StudentContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [newContract, setNewContract] = useState({
    studentA: '',
    studentB: '',
    details: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContract({ ...newContract, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContracts([...contracts, { ...newContract, id: Date.now() }]);
    setNewContract({ studentA: '', studentB: '', details: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Student Contracts/Service Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Student A:</label>
          <input
            type="text"
            className="form-control"
            name="studentA"
            value={newContract.studentA}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Student B:</label>
          <input
            type="text"
            className="form-control"
            name="studentB"
            value={newContract.studentB}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Details:</label>
          <textarea
            className="form-control"
            name="details"
            value={newContract.details}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Contract</button>
      </form>

      <h3>Active Contracts</h3>
      <ul className="list-group">
        {contracts.map(contract => (
          <li key={contract.id} className="list-group-item">
            <p><strong>Student A:</strong> {contract.studentA}</p>
            <p><strong>Student B:</strong> {contract.studentB}</p>
            <p><strong>Details:</strong> {contract.details}</ p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentContracts;