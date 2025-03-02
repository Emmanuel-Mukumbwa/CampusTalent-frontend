import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const userProfile = {
  name: 'Recruiter ABC',
  profilePicture: 'https://via.placeholder.com/80',
};

const notificationsData = [
  { type: 'message', message: 'New message from a candidate', id: 1 },
  { type: 'job', message: 'A candidate applied for your posting', id: 2 },
];

const RecruiterDashboard = () => {
  return (
    <div className="dashboard">
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/recruiter/dashboard">
            Recruiter<span style={{ color: '#ff6347' }}>Hub</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavbar">
            {/* Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/recruiter/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="engagements" className="nav-link">
                  Opportunities
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contracts" className="nav-link">
                  Contracts
                </Link>
              </li>
            </ul>
            {/* Search Bar */}
            <form className="d-flex mx-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <FaSearch />
              </button>
            </form>
            {/* Right-side Icons */}
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item me-3 position-relative">
                <Link className="nav-link" to="inbox">
                  <FaBell size={20} />
                  {notificationsData.filter(n => n.type === 'message').length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {notificationsData.filter(n => n.type === 'message').length}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="profile">
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

      {/* Main Content Rendered Here */}
      <div className="container my-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RecruiterDashboard;
