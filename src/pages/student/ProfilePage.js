import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { FaUserCircle, FaMedal } from 'react-icons/fa';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Emmanuel Mukumbwa',
    email: 'emmanuel@example.com',
    profilePicture: 'https://via.placeholder.com/80',
    ratings: [4, 5, 3, 4, 5],
    bio: 'I am a passionate student with a knack for software development.',
  });

  const calculateBadge = (ratings) => {
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    if (avg >= 4.5) return 'Gold';
    if (avg >= 3.5) return 'Silver';
    return 'Bronze';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, call your API to update the profile
    alert('Profile updated successfully!');
  };

  return (
    <div className="container my-4">
      <Card className="shadow-sm">
        <Card.Header as="h3">My Profile</Card.Header>
        <Card.Body>
          <div className="d-flex align-items-center mb-4">
            {profile.profilePicture ? (
              <img 
                src={profile.profilePicture} 
                alt="Profile" 
                className="rounded-circle me-4" 
                style={{ width: '80px', height: '80px' }} 
              />
            ) : (
              <FaUserCircle size={80} className="me-4" />
            )}
            <div>
              <h4>{profile.name}</h4>
              <p>{profile.email}</p>
              <div className="d-flex align-items-center">
                <span className={`badge ${calculateBadge(profile.ratings) === 'Gold' ? 'bg-warning' : calculateBadge(profile.ratings) === 'Silver' ? 'bg-secondary' : 'bg-info'} me-2`}>
                  <FaMedal className="me-1" /> {calculateBadge(profile.ratings)}
                </span>
              </div>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={profile.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={profile.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} name="bio" value={profile.bio} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePage;
