import React, { useState } from 'react';

const WorkUploadPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileDescription, setFileDescription] = useState('');
  
  const handleFileChange = (event) => {
    const files = event.target.files;
    const validFiles = [];
    const fileLimit = 10 * 1024 * 1024; // 10MB limit

    for (let file of files) {
      if (file.size <= fileLimit && ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        validFiles.push(file);
      } else {
        alert('Invalid file type or size! Please upload a valid file.');
      }
    }

    setUploadedFiles(validFiles);
  };

  const handleSubmit = () => {
    if (uploadedFiles.length === 0) {
      alert('Please upload at least one file.');
      return;
    }
    alert('Files uploaded successfully!');
    // Add backend integration here for storing files
  };

  return (
    <div className="container mt-5">
      <h2>Upload Your Work</h2>

      {/* File Upload */}
      <div className="mb-3">
        <label htmlFor="fileUpload" className="form-label">Choose files to upload (Image, PDF, Word only)</label>
        <input
          type="file"
          id="fileUpload"
          className="form-control"
          multiple
          onChange={handleFileChange}
        />
      </div>

      {/* File Description */}
      <div className="mb-3">
        <label htmlFor="fileDescription" className="form-label">File Description (Optional)</label>
        <textarea
          id="fileDescription"
          className="form-control"
          placeholder="Describe your work (optional)"
          value={fileDescription}
          onChange={(e) => setFileDescription(e.target.value)}
        />
      </div>

      {/* Preview of Uploaded Files */}
      <h4>Uploaded Files:</h4>
      <div className="mb-3">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="file-preview">
            <p>{file.name} - {file.size / 1024 / 1024} MB</p>
            {file.type.startsWith('image') && (
              <img src={URL.createObjectURL(file)} alt={file.name} style={{ width: '100px', height: '100px' }} />
            )}
          </div>
        ))}
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>Upload Work</button>
    </div>
  );
};

export default WorkUploadPage;
