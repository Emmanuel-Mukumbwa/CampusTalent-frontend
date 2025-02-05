import React, { useState } from 'react';

const CVManagementPage = () => {
  const [cvFile, setCvFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [cvList, setCvList] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const maxFileSize = 5 * 1024 * 1024; // 5MB

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > maxFileSize) {
        setErrorMessage('File size exceeds 5MB limit.');
        setCvFile(null);
      } else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setErrorMessage('Unsupported file format. Please upload a PDF or Word document.');
        setCvFile(null);
      } else {
        setCvFile(file);
        setErrorMessage('');
      }
    }
  };

  const simulateFileUpload = () => {
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress === 100) {
          clearInterval(interval);
          resolve();
        }
      }, 200); // Simulate progress increment every 200ms
    });
  };

  const handleFileSubmit = async () => {
    if (cvFile) {
      setIsUploading(true);
      await simulateFileUpload(); // Simulate file upload
      setCvList((prev) => [...prev, cvFile]);
      setCvFile(null);
      setUploadProgress(0);
      setIsUploading(false);
      alert(`CV uploaded: ${cvFile.name}`);
    } else {
      alert('Please upload a valid file.');
    }
  };

  const removeCv = (fileName) => {
    setCvList(cvList.filter((cv) => cv.name !== fileName));
  };

  return (
    <div className="container mt-5" style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)', minHeight: '100vh', padding: '20px', borderRadius: '8px' }}>
      <h2>CV Management</h2>

      {/* CV Upload */}
      <div className="mb-3">
        <label className="form-label">Upload Your CV</label>
        <input
          type="file"
          className="form-control"
          accept=".pdf, .doc, .docx"
          onChange={handleFileUpload}
          disabled={isUploading}
        />
        {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
      </div>

      <button
        className="btn btn-primary mb-4"
        onClick={handleFileSubmit}
        disabled={!cvFile || isUploading}
      >
        {isUploading ? 'Uploading...' : 'Upload CV'}
      </button>

      {/* Progress Bar */}
      {isUploading && (
        <div className="progress mb-4">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${uploadProgress}%` }}
            aria-valuenow={uploadProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {uploadProgress}%
          </div>
        </div>
      )}

      {/* Uploaded CVs List */}
      {cvList.length > 0 && (
        <div>
          <h4>Uploaded CVs</h4>
          <ul className="list-group">
            {cvList.map((cv, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{cv.name}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeCv(cv.name)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CVManagementPage;