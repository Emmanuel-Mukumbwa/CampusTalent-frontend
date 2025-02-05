import React, { useState } from 'react';

const CreateContract = ({ onCreateContract }) => {
  const [newContract, setNewContract] = useState({
    parties: {
      studentName: '',
      studentContact: '',
      companyName: '',
      companyContact: '',
    },
    date: '',
    purpose: '',
    scopeOfWork: {
      role: '',
      responsibilities: '',
      deliverables: '',
      timeline: '',
    },
    compensation: {
      payment: '',
      expenses: '',
      benefits: '',
      taxes: '',
    },
    confidentiality: {
      confidentialInfo: '',
      nonDisclosure: '',
      dataProtection: '',
    },
    intellectualProperty: {
      ownership: '',
      usageRights: '',
      attribution: '',
    },
    workHours: {
      schedule: '',
      location: '',
      flexibility: '',
    },
    termination: {
      conditions: '',
      consequences: '',
    },
    liability: {
      limitation: '',
      indemnification: '',
    },
    disputeResolution: {
  mediation: '',
      governingLaw: '',
    },
    signatures: {
      studentSignature: '',
      companySignature: '',
    },
    status: 'Draft',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [field, subField] = name.split('.');
    setNewContract((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [subField]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateContract({ ...newContract, id: Date.now() });
    setNewContract({
      parties: {
        studentName: '',
        studentContact: '',
        companyName: '',
        companyContact: '',
      },
      date: '',
      purpose: '',
      scopeOfWork: {
        role: '',
        responsibilities: '',
        deliverables: '',
        timeline: '',
      },
      compensation: {
        payment: '',
        expenses: '',
        benefits: '',
        taxes: '',
      },
      confidentiality: {
        confidentialInfo: '',
        nonDisclosure: '',
        dataProtection: '',
      },
      intellectualProperty: {
        ownership: '',
        usageRights: '',
        attribution: '',
      },
      workHours: {
        schedule: '',
        location: '',
        flexibility: '',
      },
      termination: {
        conditions: '',
        consequences: '',
      },
      liability: {
        limitation: '',
        indemnification: '',
      },
      disputeResolution: {
        mediation: '',
        governingLaw: '',
      },
      signatures: {
        studentSignature: '',
        companySignature: '',
      },
      status: 'Draft',
    });
  };

  return (
    <div className="container mt-4">
      <h5>Create New Contract</h5>
      <form onSubmit={handleSubmit}>
        <h6>Parties:</h6>
        <div className="mb-3">
          <label className="form-label">Student Name:</label>
          <input
            type="text"
            className="form-control"
            name="parties.studentName"
            value={newContract.parties.studentName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Student Contact:</label>
          <input
            type="text"
            className="form-control"
            name="parties.studentContact"
            value={newContract.parties.studentContact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name:</label>
          <input
            type="text"
            className="form-control"
            name="parties.companyName"
            value={newContract.parties.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Contact:</label>
          <input
            type="text"
            className="form-control"
            name="parties.companyContact"
            value={newContract.parties.companyContact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            name=" date"
            value={newContract.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Purpose:</label>
          <input
            type="text"
            className="form-control"
            name="purpose"
            value={newContract.purpose}
            onChange={handleInputChange}
            required
          />
        </div>
        <h6>Scope of Work:</h6>
        <div className="mb-3">
          <label className="form-label">Role/Position:</label>
          <input
            type="text"
            className="form-control"
            name="scopeOfWork.role"
            value={newContract.scopeOfWork.role}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Responsibilities:</label>
          <input
            type="text"
            className="form-control"
            name="scopeOfWork.responsibilities"
            value={newContract.scopeOfWork.responsibilities}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deliverables:</label>
          <input
            type="text"
            className="form-control"
            name="scopeOfWork.deliverables"
            value={newContract.scopeOfWork.deliverables}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Timeline:</label>
          <input
            type="text"
            className="form-control"
            name="scopeOfWork.timeline"
            value={newContract.scopeOfWork.timeline}
            onChange={handleInputChange}
            required
          />
        </div>
        <h6>Compensation and Benefits:</h6>
        <div className="mb-3">
          <label className="form-label">Payment:</label>
          <input
            type="text"
            className="form-control"
            name="compensation.payment"
            value={newContract.compensation.payment}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Expenses:</label>
          <input
            type="text"
            className="form-control"
            name="compensation.expenses"
            value={newContract.compensation.expenses}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Benefits:</label>
          <input
            type="text"
            className="form-control"
            name="compensation.benefits"
            value={newContract.compensation.benefits}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Taxes:</label>
          <input
            type="text"
            className="form-control"
            name="compensation.taxes"
            value={newContract.compensation.taxes}
            onChange={handleInputChange}
          />
        </div>
        <h6>Confidentiality and Non-Disclosure:</h6>
        <div className="mb-3">
          <label className="form-label">Confidential Information:</label>
          <input
            type="text"
            className="form-control"
            name="confidentiality.confidentialInfo"
            value={newContract.confidentiality.confidentialInfo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Non-Disclosure Agreement:</label>
          <input
            type="text"
            className="form-control"
            name="confidentiality.nonDisclosure"
            value={newContract.confidentiality.nonDisclosure}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Data Protection:</label>
          <input
            type="text"
            className="form-control"
            name="confidentiality.dataProtection"
            value={newContract.confidentiality.dataProtection}
            onChange={handleInputChange}
          />
        </div>
        <h6>Intellectual Property Rights:</h6>
        <div className="mb-3">
          <label className="form-label">Ownership:</label>
          <input
            type="text"
            className="form-control"
            name="intellectualProperty.ownership"
            value={newContract.intellectualProperty.ownership}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Usage Rights:</label>
          <input
            type="text"
            className="form-control"
            name="intellectualProperty.usageRights"
            value={newContract.intellectualProperty.usageRights}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Attribution:</label>
          <input
            type="text"
            className="form-control"
            name="intellectualProperty.attribution"
            value={newContract.intellectualProperty.attribution}
            onChange={handleInputChange}
          />
        </div>
        <h6>Work Hours and Location:</h6>
        <div className="mb-3">
          <label className="form-label">Schedule:</label>
          <input
            type="text"
            className="form-control"
            name="workHours.schedule"
            value={newContract.workHours.schedule}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location:</label>
          <input
            type="text"
            className="form-control"
            name="workHours.location"
            value={newContract.workHours.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Flexibility:</label>
          <input
            type="text"
            className="form-control"
            name="workHours.flexibility"
            value={newContract.workHours.flexibility}
            onChange={handleInputChange}
          />
        </div>
        <h6>Termination Clause:</h6>
        <div className="mb-3">
          <label className="form-label">Conditions for Termination:</label>
          <input
            type="text"
            className="form-control"
            name="termination.conditions"
            value={newContract.termination.conditions}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Consequences of Termination:</label>
          <input
            type="text"
            className="form-control"
            name="termination.consequences"
            value={newContract.termination.consequences}
            onChange={handleInputChange}
          />
        </div>
        <h6>Liability and Indemnification:</h6>
        <div className="mb-3">
          <label className="form-label">Limitation of Liability:</label>
          <input
            type="text"
            className="form-control"
            name="liability.limitation"
            value={newContract.liability.limitation}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Indemnification:</label>
          <input
            type="text"
            className="form-control"
            name="liability.indemnification"
            value={newContract.liability.indemnification}
            onChange={handleInputChange}
          />
        </div>
        <h6>Dispute Resolution:</h6>
        <div className="mb-3">
          <label className="form-label">Mediation/Arbitration:</label>
          <input
            type="text"
            className="form-control"
            name="disputeResolution.mediation"
            value={newContract.disputeResolution.mediation}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Governing Law:</label>
          <input
            type="text"
            className="form-control"
            name="disputeResolution.governingLaw"
            value={newContract.disputeResolution.governingLaw}
            onChange={handleInputChange}
          />
        </div>
        <h6>Signatures:</h6>
        <div className="mb-3">
          <label className="form-label">Student Signature:</label>
          <input
            type="text"
            className="form-control"
            name="signatures.studentSignature"
            value={newContract.signatures.studentSignature}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Representative Signature:</label>
          <input
            type="text"
            className="form-control"
            name="signatures.companySignature"
            value={newContract.signatures.companySignature}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Contract</button>
      </form>
    </div>
  );
};

export default CreateContract;