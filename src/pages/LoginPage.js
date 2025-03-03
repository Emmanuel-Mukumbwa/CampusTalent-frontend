import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Mock login logic
    if (email === 'student@example.com' && password === 'p') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'student');
      alert('Student login successful!');
      navigate('/student/dashboard');
    } else if (email === 'recruiter@example.com' && password === 'p') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'recruiter');
      alert('Recruiter login successful!');
      navigate('/recruiter/dashboard');
    } else if (email === 'admin@example.com' && password === 'p') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'admin');
      alert('Admin login successful!');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-page container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin} className="shadow-sm p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <div className="text-center mt-3">
        <p>Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
