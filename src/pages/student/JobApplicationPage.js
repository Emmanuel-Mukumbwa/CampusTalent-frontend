import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import headerImage from '../../assets/images/application.jpg'; // Adjust the path as necessary

const JobApplicationPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [coverLetter, setCoverLetter] = useState('');
  const [cvFile, setCvFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock saving the application
    const application = {
      applicationId: Date.now(), // Unique ID
      jobId: jobId,
      userId: 1, // Replace with actual logged-in user ID
      status: 'Application Received', // Initial status
      submittedAt: new Date().toISOString(),
    };

    // Mock: Save application data to localStorage
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    localStorage.setItem('applications', JSON.stringify([...applications, application]));

    navigate('/application-tracking');
  };

  return (
    <div>
      {/* Header Image */}
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
          height: '250px', // Set the height of the header image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          //marginTop: '50px', // Move the image down
        }}
      />

      {/* Text Section Below the Image */}
      <div className="text-black" style={{ paddingLeft: '20px', paddingTop: '20px' }}>
        <h1>Apply for Job {jobId}</h1>
      </div>

      {/* Content Section */}
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Upload CV</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setCvFile(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Cover Letter</label>
            <textarea
              className="form-control"
              rows="5"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationPage;