import React, { useState } from 'react';

const initialContracts = [
  { id: 1, title: 'Contract with John Doe', candidate: 'John Doe', startDate: '2025-03-01', endDate: '2025-09-01' },
  { id: 2, title: 'Contract with Jane Smith', candidate: 'Jane Smith', startDate: '2025-04-15', endDate: '2025-10-15' },
];

const Contracts = () => {
  const [contracts, setContracts] = useState(initialContracts);
  const [showModal, setShowModal] = useState(false);
  const [newContract, setNewContract] = useState({
    title: '',
    candidate: '',
    startDate: '',
    endDate: ''
  });

  const handleInputChange = (e) => {
    setNewContract({ ...newContract, [e.target.name]: e.target.value });
  };

  const handleAddContract = () => {
    const id = contracts.length + 1;
    setContracts([...contracts, { ...newContract, id }]);
    setNewContract({ title: '', candidate: '', startDate: '', endDate: '' });
    setShowModal(false);
  };

  return (
    <div>
      <h2>Contracts</h2>
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        Add Contract
      </button>
      <div className="list-group">
        {contracts.map((contract) => (
          <div key={contract.id} className="list-group-item">
            <h5>{contract.title}</h5>
            <p>Candidate: {contract.candidate}</p>
            <p>
              Start Date: {contract.startDate} | End Date: {contract.endDate}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for Adding New Contract */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Contract</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Contract Title</label>
                  <input
                    type="text"
                    name="title"
                    value={newContract.title}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Candidate Name</label>
                  <input
                    type="text"
                    name="candidate"
                    value={newContract.candidate}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={newContract.startDate}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={newContract.endDate}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleAddContract}>
                  Add Contract
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contracts;
