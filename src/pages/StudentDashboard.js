import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaUserCircle, FaMedal } from 'react-icons/fa';

// Dummy data for demonstration
const userProfile = {
  name: 'Emmanuel Mukumbwa',
  email: 'emmanuel@example.com',
  profilePicture: 'https://via.placeholder.com/80',
  ratings: [4, 5, 3, 4, 5],
  reviews: [
    'Great work on the project!',
    'Delivered on time and exceeded expectations.',
    'Good communication and quality work.',
  ],
};

const calculateBadge = (ratings) => {
  const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  if (avg >= 4.5) return 'Gold';
  if (avg >= 3.5) return 'Silver';
  return 'Bronze';
};

const notificationsData = [
  { type: 'job', message: 'New job posting: Software Engineer Intern', id: 1 },
  { type: 'message', message: 'You have a new message from HR.', id: 2 },
];

const engagementsData = [
  // This array merges job listings and service requests (or gigs)
  { id: 1, type: 'job', title: 'Frontend Developer Needed', description: 'Company XYZ is looking for a React developer.' },
  { id: 2, type: 'service', title: 'Need help with JavaScript', description: 'Peer to peer service request on JS concepts.' },
  { id: 3, type: 'gig', title: 'Build a landing page', description: 'Looking for a freelancer to build a responsive landing page.' },
];

const activeProjectsData = [
  {
    id: 1,
    title: 'E-commerce Website Development',
    deliverables: 'Homepage, Product Page',
    deadline: '2023-12-31',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Mobile App Design',
    deliverables: 'UI Mockups',
    deadline: '2023-11-15',
    status: 'In Progress',
  },
];

const StudentDashboard = () => {
  // States for filtering engagements and for responsiveness
  const [engagementFilter, setEngagementFilter] = useState('all'); // 'all' | 'job' | 'service' | 'gig'
  const [engagements, setEngagements] = useState(engagementsData);
  const [activeProjects] = useState(activeProjectsData);
  const [notifications] = useState(notificationsData);

  // Filter function for engagements
  const filteredEngagements = engagements.filter((item) =>
    engagementFilter === 'all' ? true : item.type === engagementFilter
  );

  return (
    <div className="dashboard">
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          {/* Brand / Logo */}
          <Link className="navbar-brand" to="/">
            Campus<span style={{ color: '#ff6347' }}>Talent</span>
          </Link>

          {/* Toggle button for mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="topNavbar">
            {/* Navigation Menu Items */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* Engagements: Merged view for jobs, service requests and gigs */}
                <Link to="/engagements" className="nav-link">Opportunities</Link>
              </li>
              <li className="nav-item">
                <Link to="/active-projects" className="nav-link">Active Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/post-request" className="nav-link">Post Request</Link>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex mx-auto">
              <input className="form-control me-2" type="search" placeholder="Search engagements..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                <FaSearch />
              </button>
            </form>

            {/* Right-side Icons */}
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item me-3 position-relative">
                <Link className="nav-link" to="/inbox">
                  <FaBell size={20} />
                  {notifications.filter((n) => n.type === 'message').length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {notifications.filter((n) => n.type === 'message').length}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  {userProfile.profilePicture ? (
                    <img 
                      src={userProfile.profilePicture} 
                      alt="Profile" 
                      className="rounded-circle" 
                      style={{ width: '40px', height: '40px' }} 
                    />
                  ) : (
                    <FaUserCircle size={40} />
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container my-4">
        {/* Expanded Profile Summary Section */}
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex align-items-center">
            <img
              src={userProfile.profilePicture}
              alt="Profile"
              className="rounded-circle me-4"
              style={{ width: '80px', height: '80px' }}
            />
            <div>
              <h4>{userProfile.name}</h4>
              <p className="mb-1">{userProfile.email}</p>
              <div className="d-flex align-items-center">
                <span className={`badge ${calculateBadge(userProfile.ratings) === 'Gold' ? 'bg-warning' : calculateBadge(userProfile.ratings) === 'Silver' ? 'bg-secondary' : 'bg-info'} me-2`}>
                  <FaMedal className="me-1" />
                  {calculateBadge(userProfile.ratings)}
                </span>
                <span className="text-muted">Profile Completeness: 80%</span>
              </div>
              {/* Reviews integrated into the profile */}
              <div className="mt-2">
                <h6>Reviews:</h6>
                <ul className="list-unstyled">
                  {userProfile.reviews.map((review, idx) => (
                    <li key={idx} className="text-muted" style={{ fontSize: '0.9rem' }}>
                      &ldquo;{review}&rdquo;
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="row">
          {/* Engagements Feed (merged view) */}
          <div className="col-lg-8 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Engagements</h5>
                {/* Filter Buttons */}
                <div>
                  <button className={`btn btn-sm me-2 ${engagementFilter === 'all' && 'btn-primary'}`} onClick={() => setEngagementFilter('all')}>
                    All
                  </button>
                  <button className={`btn btn-sm me-2 ${engagementFilter === 'job' && 'btn-primary'}`} onClick={() => setEngagementFilter('job')}>
                    Jobs
                  </button>
                  <button className={`btn btn-sm me-2 ${engagementFilter === 'service' && 'btn-primary'}`} onClick={() => setEngagementFilter('service')}>
                    Service
                  </button>
                  <button className={`btn btn-sm ${engagementFilter === 'gig' && 'btn-primary'}`} onClick={() => setEngagementFilter('gig')}>
                    Gigs
                  </button>
                </div>
              </div>
              <div className="card-body">
                {filteredEngagements.length ? (
                  filteredEngagements.map((engagement) => (
                    <div 
                      key={engagement.id} 
                      className="card mb-3 border-0 shadow-sm" 
                      style={{ transition: 'transform 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div className="card-body">
                        <h6 className="card-title">{engagement.title}</h6>
                        <p className="card-text">{engagement.description}</p>
                        <span className="badge bg-secondary text-uppercase">{engagement.type}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No engagements found.</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Active Projects & Inbox/Activity */}
          <div className="col-lg-4 mb-4">
            {/* Active Projects Section */}
            <div className="card shadow-sm mb-4 h-50">
              <div className="card-header">
                <h5 className="mb-0">Active Projects</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '300px' }}>
                {activeProjects.length ? (
                  activeProjects.map((project) => (
                    <div key={project.id} className="mb-3 p-2 border rounded" style={{ transition: 'background-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f8f9fa'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <strong>{project.title}</strong>
                      <div>Status: {project.status}</div>
                      <small className="text-muted">Deadline: {project.deadline}</small>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No active projects.</p>
                )}
              </div>
            </div>

            {/* Inbox / Activity Section */}
            <div className="card shadow-sm h-50">
              <div className="card-header">
                <h5 className="mb-0">Inbox / Activity</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '300px' }}>
                {notifications.length ? (
                  notifications.map((notif) => (
                    <div key={notif.id} className="mb-2 p-2 border rounded" style={{ transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.8'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                      <i className={`me-2 ${notif.type === 'job' ? 'bi bi-briefcase-fill' : 'bi bi-chat-dots-fill'}`}></i>
                      {notif.message}
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No new notifications.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Notification Pop-Up (you might later replace this with a dedicated component) */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div className="toast show" role="alert">
          <div className="toast-header">
            <strong className="me-auto">Notification</strong>
            <small>Just now</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
          </div>
          <div className="toast-body">
            You have a new message!
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
