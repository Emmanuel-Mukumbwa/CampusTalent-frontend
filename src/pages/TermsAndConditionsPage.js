import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  return (
    <div className="container mt-5">
      <h2>Terms and Conditions</h2>
      <p>Last updated: January 2025</p>
      
      <h3>1. Introduction</h3>
      <p>
        Welcome to CampusTalent, an online platform that connects students with job opportunities, internships, real-world projects, and other peer services. By using our services, you agree to comply with and be bound by the following terms and conditions.
      </p>
      
      <h3>2. User Eligibility</h3>
      <p>
        To use CampusTalent, you must be at least 18 years old or the legal age in your jurisdiction. By registering, you confirm that you meet these requirements and are legally authorized to enter into this agreement.
      </p>

      <h3>3. Account Creation</h3>
      <p>
        Users may be required to create an account to access certain features of the platform. You agree to provide accurate, complete, and up-to-date information during the registration process. You are responsible for maintaining the confidentiality of your account credentials.
      </p>

      <h3>4. Use of Platform</h3>
      <p>
        You agree to use CampusTalent for its intended purposes only. You may not engage in any illegal activities, submit false or misleading information, or misuse the platform in any way that disrupts the service for other users.
      </p>

      <h3>5. Job Postings and Internships</h3>
      <p>
        CampusTalent allows companies and organizations to post job openings, internships, and projects. By posting a listing, you confirm that you are legally authorized to offer such opportunities and that they are accurate and non-discriminatory.
      </p>

      <h3>6. Peer-to-Peer Services</h3>
      <p>
        Students on CampusTalent can offer services to one another. Both service providers and clients agree to follow ethical practices, ensure fairness, and avoid any fraudulent activity.
      </p>

      <h3>7. Privacy Policy</h3>
      <p>
        Your privacy is important to us. Please refer to our <Link to="/privacy-policy">Privacy Policy</Link> for details on how we collect, use, and protect your personal information.
      </p>

      <h3>8. Intellectual Property</h3>
      <p>
        All content on CampusTalent, including but not limited to text, graphics, logos, images, and software, is the property of CampusTalent or its licensors and is protected by copyright and intellectual property laws.
      </p>

      <h3>9. Limitation of Liability</h3>
      <p>
        CampusTalent is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of the platform. You use CampusTalent at your own risk, and we do not guarantee the accuracy, availability, or reliability of the services.
      </p>

      <h3>10. Termination</h3>
      <p>
        We reserve the right to suspend or terminate any user account that violates these terms. Users may also terminate their account at any time by contacting support.
      </p>

      <h3>11. Modifications</h3>
      <p>
        CampusTalent reserves the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of the platform constitutes your acceptance of the modified terms.
      </p>

      <h3>12. Governing Law</h3>
      <p>
        These Terms and Conditions are governed by the laws of [your country or jurisdiction], and any disputes will be resolved in the courts of [your jurisdiction].
      </p>

      <h3>13. Contact Us</h3>
      <p>
        If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@campustalent.com">support@campustalent.com</a>.
      </p>
    </div>
  );
};

export default TermsAndConditionsPage;
