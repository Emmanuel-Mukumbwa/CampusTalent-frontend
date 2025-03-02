import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PeerApplicationForm = () => {
  const location = useLocation();
  const { serviceRequest } = location.state || {};
  
  const [applicantName, setApplicantName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [understandingRequest, setUnderstandingRequest] = useState('');
  const [proposedSolution, setProposedSolution] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [callToAction, setCallToAction] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const applicationDetails = {
      id: Date.now(),
      applicant: applicantName,
      greeting,
      relevantExperience,
      understandingRequest,
      proposedSolution,
      timeline,
      budget,
      paymentTerms,
      callToAction,
      status: 'Pending',
      serviceRequestId: serviceRequest.id,
    };
    // Handle submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Your Name:</label>
        <input
          type="text"
          className="form-control"
          value={applicantName}
          onChange={(e) => setApplicantName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Greeting and Introduction:</label>
        <textarea
          className="form-control"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Relevant Experience or Skills:</label>
        <textarea
          className="form-control"
          value={relevantExperience}
          onChange={(e) => setRelevantExperience(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Understanding of the Request:</label>
        <textarea
          className="form-control"
          value={understandingRequest}
          onChange={(e) => setUnderstandingRequest(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Proposed Solution or Approach:</label>
        <textarea
          className="form-control"
          value={proposedSolution}
          onChange={(e) => setProposedSolution(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Timeline:</label>
        <input
          type="text"
          className="form-control"
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Budget:</label>
        <input
          type="text"
          className="form-control"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Payment Terms:</label>
        <textarea
          className="form-control"
          value={paymentTerms}
          onChange={(e) => setPaymentTerms(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Call to Action:</label>
        <textarea
          className="form-control"
          value={callToAction}
          onChange={(e) => setCallToAction(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Application</button>
    </form>
  );
};

export default PeerApplicationForm;