import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Recruiter ABC',
    email: 'recruiter@example.com',
    company: 'Tech Solutions Inc.',
    bio: 'We connect talented candidates with exciting opportunities.',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <h2>Profile</h2>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" value={profile.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" value={profile.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Company</label>
              <input type="text" name="company" value={profile.company} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Bio</label>
              <textarea name="bio" value={profile.bio} onChange={handleChange} className="form-control" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
