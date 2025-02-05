import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './SignUpPage.css';

const SignUpPage = () => {
  const [userType, setUserType] = useState('student');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isTermsAccepted) {
      alert('Please accept the terms and conditions before signing up.');
      return;
    }
    // Add sign-up logic here
    alert('Sign-Up successful!');
  };

  return (
    <div className="signup-page container mt-5">
      <h2 className="text-center mb-4">Sign Up</h2>

      {/* User Type Selection */}
      <div className="user-type-selection mb-4 text-center">
        <label className="form-label me-3">I am a:</label>
        <div className="btn-group">
          <input
            type="radio"
            className="btn-check"
            name="userType"
            id="student"
            value="student"
            checked={userType === 'student'}
            onChange={handleUserTypeChange}
          />
          <label className="btn btn-outline-primary" htmlFor="student">
            Student
          </label>

          <input
            type="radio"
            className="btn-check"
            name="userType"
            id="employer"
            value="employer"
            onChange={handleUserTypeChange}
          />
          <label className="btn btn-outline-primary" htmlFor="employer">
            Employer
          </label>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Create a password" required />
        </div>

        {/* Conditional Fields Based on User Type */}
        {userType === 'student' && (
          <div className="mb-3">
            <label htmlFor="university" className="form-label">University/College</label>
            <input type="text" id="university" className="form-control" placeholder="Enter your university or college" required />
          </div>
        )}

        {userType === 'employer' && (
          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company</label>
            <input type="text" id="company" className="form-control" placeholder="Enter your company name" required />
          </div>
        )}

        {/* Terms and Conditions */}
        <div className="mb-3">
          <input
            type="checkbox"
            id="terms"
            className="form-check-input"
            checked={isTermsAccepted}
            onChange={(e) => setIsTermsAccepted(e.target.checked)}
          />
          <label htmlFor="terms" className="form-check-label ms-2">
            I agree to the <Link to="/terms-and-conditions">terms and conditions</Link>.
          </label>
        </div>

        {/* Captcha (Placeholder for Now) */}
        <div className="mb-4 text-center">
          <div className="captcha-placeholder bg-light p-3 rounded">
            <small>Captcha goes here</small>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
