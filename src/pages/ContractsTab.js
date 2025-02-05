// ContractsTab.js
import React, { useState } from 'react';

const ContractsTab = () => {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      details: {
        serviceDetails: 'Develop an e-commerce website.',
        deadline: '2023-12-31',
        paymentTerms: '50% upfront, 50% upon completion',
      },
      parties: { recruiter: 'Recruiter ABC', student: 'John Doe' },
      status: 'Active',
    },
  ]);
  const [ratings, setRatings] = useState({});

  const handleRatingChange = (contractId, rating) => {
    setRatings({ ...ratings, [contractId]: rating });
  };

  const handleApprove = (contractId) => {
    setContracts(contracts.map(contract => 
      contract.id === contractId ? { ...contract, status: 'Completed' } : contract
    ));
    alert(`Contract ${contractId} approved!`);
  };

  return (
    <div>
      <h5>Active Contracts</h5>
      <ul className="list-group">
        {contracts.map((contract) => (
          <li key={contract.id} className="list-group-item">
            <strong>Contract with {contract.parties.student}</strong>
            <p>{contract.details.serviceDetails}</p>
            <p>Deadline: {contract.details.deadline}</p>
            <div className="mb-3">
              <label className="form-label">Rate this student:</label>
              <select
                className="form-select"
                value={ratings[contract.id] || ''}
                onChange={(e) => handleRatingChange(contract.id, e.target.value)}
              >
                <option value="">Select Rating</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                alert(`Rated ${contract.parties.student} with ${ratings[contract.id]} stars!`)
              }
            >
              Submit Rating
            </button>
            <button className="btn btn-success btn-sm ms-2" onClick={() => handleApprove(contract.id)}>
              Approve Contract
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractsTab;
