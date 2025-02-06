import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer
import './HomePage.css'; // Custom styles for the home page
import background from '../assets/images/background.jpg'; // Import the background image

const HomePage = () => {
  const heroStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    height: '100vh',
    position: 'relative',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const popularServices = [
    {
      id: 1,
      title: 'Tutoring',
      description: 'Find expert tutors for any subject, from math to languages.',
      icon: 'bi bi-book',
      link: '/services/tutoring',
    },
    {
      id: 2,
      title: 'Software Development',
      description: 'Get professional software solutions tailored to your needs.',
      icon: 'bi bi-code-slash',
      link: '/services/software-development',
    },
    {
      id: 3,
      title: 'Content Creation',
      description: 'Engage your audience with quality content from skilled creators.',
      icon: 'bi bi-pencil-square',
      link: '/services/content-creation',
    },
    {
      id: 4,
      title: 'Graphic Designing',
      description: 'Bring your ideas to life with stunning graphic designs.',
      icon: 'bi bi-palette',
      link: '/services/graphic-designing',
    },
    {
      id: 5,
      title: 'Consultancy Services',
      description: 'Receive expert advice to excel in your personal or professional projects.',
      icon: 'bi bi-people',
      link: '/services/consultancy',
    },
  ];

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container">
    {/* Brand / Logo */}
    <Link className="navbar-brand" to="/">
      Campus<span style={{ color: "#ff6347" }}>Talent</span>
    </Link>

    {/* Toggle button for mobile */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#headerNavbar"
      aria-controls="headerNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Items */}
    <div className="collapse navbar-collapse" id="headerNavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="#why-campus-talent">
            Why Campus Talent
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#popular-services">
            Popular Services
          </a>
        </li>
      </ul>

      {/* Search Bar */}
      <form className="d-flex mx-auto">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search services, students..."
          style={{ borderRadius: "20px", borderColor: "#007bff" }}
        />
        <button className="btn btn-primary" style={{ borderRadius: "20px" }}>
          Search
        </button>
      </form>

      {/* Right-side Links */}
      <ul className="navbar-nav ms-auto align-items-center">
        <li className="nav-item">
          <Link to="/login" className="btn btn-link me-3" style={{ color: "#007bff", textDecoration: "none" }}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="btn btn-primary" style={{ borderRadius: "20px" }}>
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </div>
</header>

      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center" style={heroStyle}>
        <div style={overlayStyle}></div>
        <div className="container d-flex justify-content-between" style={contentStyle}>
          {/* Left-aligned content */}
          <div className="hero-text">
            <h1 className="display-4 mb-3">Welcome to CampusTalent</h1>
            <p className="lead mb-4">
              A dynamic platform connecting students with top companies for internships, job opportunities, and real-world projects. 
              It also helps organizations discover emerging talent, and allows students to collaborate and offer services to their peers.
            </p>
          </div>

          {/* Right-aligned buttons */}
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary btn-lg mx-2">Login</Link>
            <Link to="/signup" className="btn btn-outline-secondary btn-lg mx-2">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="why-campus-talent" className="features-section container text-center mt-5" style={{ backgroundColor: '#f8f9fa', padding: '40px 0', borderRadius: '8px' }}>
        <h2 className="mb-5">Why Choose CampusTalent?</h2>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow border-0 rounded transition-transform hover-scale">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="bi bi-briefcase-fill text-primary fs-1" aria-label="Connect with Top Companies"></i>
                </div>
                <h5 className="card-title fw-bold">Connect with Top Companies</h5>
                <p className="card-text text-muted">
                  Discover opportunities at leading organizations that match your skills and goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow border-0 rounded transition-transform hover-scale">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="bi bi-card-checklist text-success fs-1" aria-label="Tailored Job Recommendations"></i>
                </div>
                <h5 className="card-title fw-bold">Tailored Job Recommendations</h5>
                <p className="card-text text-muted">
                  Receive personalized job suggestions to kickstart your career.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow border-0 rounded transition-transform hover-scale">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="bi bi-stars text-warning fs-1" aria-label="Success Stories"></i>
                </div>
                <h5 className="card-title fw-bold">Success Stories</h5>
                <p className="card-text text-muted">
                  Be inspired by testimonials from students who found their dream jobs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popular-services" className="popular-services-section container text-center mt-5" style={{ backgroundColor: '#f8f9fa', padding: '40px 0', borderRadius: '8px' }}>
        <h2 className="mb-5">Popular Services</h2>
        <div className="row g-4">
          {popularServices.map(service => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={service.id}>
              <div className="card h-100 shadow border-0 rounded transition-transform hover-scale">
                <div className="card-body text-center">
                  <div className="mb-4">
                    <i className={`${service.icon} fs-1 text-primary`} aria-label={service.title}></i>
                  </div>
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                  <Link to={service.link} className="btn btn-primary mt-3">Explore</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;