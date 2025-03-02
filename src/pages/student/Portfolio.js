import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Card } from 'react-bootstrap';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Simulate content validation (dummy logic)
      const isValid = true; // Replace with actual validation logic if needed
      if (isValid) {
        const newItem = {
          id: Date.now(),
          title: selectedFile.name,
          description: 'Uploaded work',
          fileUrl: URL.createObjectURL(selectedFile),
        };
        setPortfolioItems([...portfolioItems, newItem]);
        setUploadStatus('Upload successful!');
      } else {
        setUploadStatus('Upload failed: Invalid content.');
      }
      setSelectedFile(null);
    }
  };

  return (
    <Container className="my-4">
      <h2>Portfolio</h2>
      <Form.Group controlId="portfolioUpload" className="mb-3">
        <Form.Label>Upload your work</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" onClick={handleUpload}>Upload</Button>
      {uploadStatus && <p className="mt-2">{uploadStatus}</p>}
      <h3 className="mt-4">Your Portfolio</h3>
      {portfolioItems.length > 0 ? (
        <ListGroup className="mt-3">
          {portfolioItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  {/* In a real app, you might render a thumbnail or a link to view the file */}
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No portfolio items yet.</p>
      )}
    </Container>
  );
};

export default Portfolio;
