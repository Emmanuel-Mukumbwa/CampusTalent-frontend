// PeerContracts.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PeerContracts = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    // Fetch contracts from an API or local state
    const fetchContracts = async () => {
      // Mock data for contracts
      const fetchedContracts = [
        { id: 1, title: 'Logo Design Contract', status: 'Active', date: '2023-10-01' },
        { id: 2, title: 'Website Development Contract', status: 'Completed', date: '2023-09-15' },
        { id: 3, title: 'SEO Optimization Contract', status: 'Active', date: '2023-10-05' },
        { id: 4, title: 'Social Media Management Contract', status: 'Pending', date: '2023-10-10' },
        { id: 5, title: 'Mobile App Development Contract', status: 'Completed', date: '2023-08-20' },
      ];
      setContracts(fetchedContracts);
    };

    fetchContracts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Service Requests Contracts</h2>
      <ul className="list-group">
        {contracts.map(contract => (
          <li key={contract.id} className="list-group-item">
            <h5>{contract.title}</h5>
            <p>Status: {contract.status}</p>
            <p>Date: {contract.date}</p>
            <Link to={`/contract/${contract.id}`} className="btn btn-info">View Contract</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeerContracts;