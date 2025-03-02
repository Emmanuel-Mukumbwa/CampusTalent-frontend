import React from 'react';
import { useParams } from 'react-router-dom';

const candidateProfiles = {
  1: { id: 1, name: 'John Doe', experience: '3 years experience in React and Angular', bio: 'A passionate frontend developer.', skills: ['React', 'Angular', 'JavaScript'], rating: 4.2 },
  2: { id: 2, name: 'Jane Smith', experience: '5 years experience in Node.js and Express', bio: 'Expert backend developer.', skills: ['Node.js', 'Express', 'MongoDB'], rating: 4.8 },
  3: { id: 3, name: 'Alice Johnson', experience: '4 years experience in UI/UX design', bio: 'Creative and detail-oriented designer.', skills: ['Sketch', 'Figma', 'Adobe XD'], rating: 4.5 },
};

const CandidateProfile = () => {
  const { candidateId } = useParams();
  const profile = candidateProfiles[candidateId];

  if (!profile) {
    return <div>Candidate not found.</div>;
  }

  return (
    <div className="container my-4">
      <h2>Candidate Profile: {profile.name}</h2>
      <p><strong>Experience:</strong> {profile.experience}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
      <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
      <p><strong>Rating:</strong> {profile.rating}</p>
      {/* You can add candidate messaging, rating submission, etc. here */}
    </div>
  );
};

export default CandidateProfile;
