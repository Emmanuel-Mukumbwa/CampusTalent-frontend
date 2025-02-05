import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="text-center p-3 border-top">
        <p>&copy; {new Date().getFullYear()} CampusTalent. All rights reserved.</p>
        <Link to="/terms-and-conditions" className="text-dark">Terms and Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
