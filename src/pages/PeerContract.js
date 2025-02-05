// src/components/PeerContract.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PeerContract = () => {
  const location = useLocation();
  const { applicant, serviceRequestId } = location.state || {};

  // Contract form state
  const [serviceProviderName, setServiceProviderName] = useState(applicant ? applicant.applicant : '');
  const [serviceProviderContact, setServiceProviderContact] = useState('');
  const [clientName, setClientName] = useState(''); // Pre-fill if available
  const [clientContact, setClientContact] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [purpose, setPurpose] = useState('');
  const [scopeOfWork, setScopeOfWork] = useState({
    role: '',
    responsibilities: '',
    deliverables: '',
    timeline: '',
  });
  const [compensation, setCompensation] = useState({
    payment: '',
    expenses: '',
    benefits: '',
    taxes: '',
  });
  const [confidentiality, setConfidentiality] = useState({
    confidentialInfo: '',
    nonDisclosure: '',
    dataProtection: '',
  });
  const [intellectualProperty, setIntellectualProperty] = useState({
    ownership: '',
    usageRights: '',
    attribution: '',
  });
  const [workHours, setWorkHours] = useState({
    schedule: '',
    location: '',
    flexibility: '',
  });
  const [termination, setTermination] = useState({
    conditions: '',
    consequences: '',
  });
  const [liability, setLiability] = useState({
    limitation: '',
    indemnification: '',
  });
  const [disputeResolution, setDisputeResolution] = useState({
    mediation: '',
    governingLaw: '',
  });

  // State for escrow funding simulation
  const [fundsDeposited, setFundsDeposited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle contract submission logic (store contract, trigger digital signing, etc.)
    console.log('Contract submitted:', {
      serviceProviderName,
      serviceProviderContact,
      clientName,
      clientContact,
      date,
      purpose,
      scopeOfWork,
      compensation,
      confidentiality,
      intellectualProperty,
      workHours,
      termination,
      liability,
      disputeResolution,
    });
    // Optionally, navigate to a confirmation page or update UI state.
  };

  const handleDepositFunds = () => {
    // Simulate deposit into escrow. In a real application, this would integrate with a payment gateway.
    setFundsDeposited(true);
    alert('Funds have been successfully deposited into escrow.');
  };

  return (
    <div className="container mt-4">
      <h3>Service Agreement for Request {serviceRequestId}</h3>
      <form onSubmit={handleSubmit}>
        <h4>Parties:</h4>
        <p>
          <strong>Service Provider:</strong> {serviceProviderName} (Contact: {serviceProviderContact || 'N/A'})
        </p>
        <p>
          <strong>Client:</strong> {clientName || 'Client Name'} (Contact: {clientContact || 'N/A'})
        </p>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Purpose:</label>
          <input
            type="text"
            className="form-control"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
          />
        </div>
        <h4>Scope of Work:</h4>
        <div className="mb-3">
          <label className="form-label">Role/Position:</label>
          <input
            type="text"
            className="form-control"
            value={scopeOfWork.role}
            onChange={(e) => setScopeOfWork({ ...scopeOfWork, role: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Responsibilities:</label>
          <input
            type="text"
            className="form-control"
            value={scopeOfWork.responsibilities}
            onChange={(e) => setScopeOfWork({ ...scopeOfWork, responsibilities: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deliverables:</label>
          <input
            type="text"
            className="form-control"
            value={scopeOfWork.deliverables}
            onChange={(e) => setScopeOfWork({ ...scopeOfWork, deliverables: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Timeline:</label>
          <input
            type="text"
            className="form-control"
            value={scopeOfWork.timeline}
            onChange={(e) => setScopeOfWork({ ...scopeOfWork, timeline: e.target.value })}
            required
          />
        </div>
        <h4>Compensation and Benefits:</h4>
        <div className="mb-3">
          <label className="form-label">Payment:</label>
          <input
            type="text"
            className="form-control"
            value={compensation.payment}
            onChange={(e) => setCompensation({ ...compensation, payment: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Expenses:</label>
          <input
            type="text"
            className="form-control"
            value={compensation.expenses}
            onChange={(e) => setCompensation({ ...compensation, expenses: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Benefits:</label>
          <input
            type="text"
            className="form-control"
            value={compensation.benefits}
            onChange={(e) => setCompensation({ ...compensation, benefits: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Taxes:</label>
          <input
            type="text"
            className="form-control"
            value={compensation.taxes}
            onChange={(e) => setCompensation({ ...compensation, taxes: e.target.value })}
          />
        </div>
        <h4>Confidentiality and Non-Disclosure:</h4>
        <div className="mb-3">
          <label className="form-label">Confidential Information:</label>
          <input
            type="text"
            className="form-control"
            value={confidentiality.confidentialInfo}
            onChange={(e) => setConfidentiality({ ...confidentiality, confidentialInfo: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Non-Disclosure Agreement:</label>
          <input
            type="text"
            className="form-control"
            value={confidentiality.nonDisclosure}
            onChange={(e) => setConfidentiality({ ...confidentiality, nonDisclosure: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Data Protection:</label>
          <input
            type="text"
            className="form-control"
            value={confidentiality.dataProtection}
            onChange={(e) => setConfidentiality({ ...confidentiality, dataProtection: e.target.value })}
          />
        </div>
        <h4>Intellectual Property Rights:</h4>
        <div className="mb-3">
          <label className="form-label">Ownership:</label>
          <input
            type="text"
            className="form-control"
            value={intellectualProperty.ownership}
            onChange={(e) => setIntellectualProperty({ ...intellectualProperty, ownership: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Usage Rights:</label>
          <input
            type="text"
            className="form-control"
            value={intellectualProperty.usageRights}
            onChange={(e) => setIntellectualProperty({ ...intellectualProperty, usageRights: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Attribution:</label>
          <input
            type="text"
            className="form-control"
            value={intellectualProperty.attribution}
            onChange={(e) => setIntellectualProperty({ ...intellectualProperty, attribution: e.target.value })}
          />
        </div>
        <h4>Work Hours and Location:</h4>
        <div className="mb-3">
          <label className="form-label">Schedule:</label>
          <input
            type="text"
            className="form-control"
            value={workHours.schedule}
            onChange={(e) => setWorkHours({ ...workHours, schedule: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location:</label>
          <input
            type="text"
            className="form-control"
            value={workHours.location}
            onChange={(e) => setWorkHours({ ...workHours, location: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Flexibility:</label>
          <input
            type="text"
            className="form-control"
            value={workHours.flexibility}
            onChange={(e) => setWorkHours({ ...workHours, flexibility: e.target.value })}
          />
        </div>
        <h4>Termination Clause:</h4>
        <div className="mb-3">
          <label className="form-label">Conditions for Termination:</label>
          <input
            type="text"
            className="form-control"
            value={termination.conditions}
            onChange={(e) => setTermination({ ...termination, conditions: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Consequences of Termination:</label>
          <input
            type="text"
            className="form-control"
            value={termination.consequences}
            onChange={(e) => setTermination({ ...termination, consequences: e.target.value })}
          />
        </div>
        <h4>Liability and Indemnification:</h4>
        <div className="mb-3">
          <label className="form-label">Limitation of Liability:</label>
          <input
            type="text"
            className="form-control"
            value={liability.limitation}
            onChange={(e) => setLiability({ ...liability, limitation: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Indemnification:</label>
          <input
            type="text"
            className="form-control"
            value={liability.indemnification}
            onChange={(e) => setLiability({ ...liability, indemnification: e.target.value })}
          />
        </div>
        <h4>Dispute Resolution:</h4>
        <div className="mb-3">
          <label className="form-label">Mediation/Arbitration:</label>
          <input
            type="text"
            className="form-control"
            value={disputeResolution.mediation}
            onChange={(e) => setDisputeResolution({ ...disputeResolution, mediation: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Governing Law:</label>
          <input
            type="text"
            className="form-control"
            value={disputeResolution.governingLaw}
            onChange={(e) => setDisputeResolution({ ...disputeResolution, governingLaw: e.target.value })}
          />
        </div>
        <h4>Signatures:</h4>
        <div className="mb-3">
          <label className="form-label">Service Provider Signature:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type your name as signature"
            required
          />
          <input type="date" className="form-control mt-2" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Client Signature:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type your name as signature"
            required
          />
          <input type="date" className="form-control mt-2" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit Contract</button>
      </form>

      {/* Escrow Section */}
      <div className="mt-5 p-4 border rounded bg-light">
        <h4>Service Request Status: In Progress</h4>
        {!fundsDeposited ? (
          <>
            <p>Please deposit funds into escrow to secure the project.</p>
            <button className="btn btn-warning" onClick={handleDepositFunds}>Deposit Funds</button>
          </>
        ) : (
          <p className="text-success">Funds have been deposited into escrow.</p>
        )}
      </div>
    </div>
  );
};

export default PeerContract;
