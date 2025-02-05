import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'; // Import Terms and Conditions Page
//import Navbar from './components/Navbar';
import StudentDashboard from './pages/StudentDashboard';
import JobListingPage from './pages/JobListingPage';
import JobApplicationPage from './pages/JobApplicationPage';
import ApplicationTrackingPage from './pages/ApplicationTrackingPage';
import SkillAdditionPage from './pages/SkillAdditionPage';
import WorkUploadPage from './pages/WorkUploadPage';
import CVManagementPage from './pages/CVManagementPage';
import MessagesPage from './pages/MessagesPage';
import RecruiterDashboard from './pages/RecruiterDashboard';
import JobListings from './pages/JobListings';
import Applications from './pages/ApplicationsTab';
import CompanyProfile from './pages/CompanyProfileTab';
import JobPostings from './pages/JobPostingsTab';
import CreateContract from './pages/CreateContract';
import Contracts from './pages/ContractsTab';
import ActiveProjects from './pages/ActiveProjects';
import StudentServiceRequests from './pages/StudentServiceRequests';
import StudentApplications from './pages/StudentApplications';
import StudentContracts from './pages/StudentContracts';
import PeerApplicationForm from './pages/PeerApplicationForm';
import PeerContract from './pages/PeerContract';
import PeerContracts from './pages/PeerContracts';
import RateStudent from './pages/RateStudent';
import ReviewStudent from './pages/ReviewStudent';
import Engagements from './pages/Engagements';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <HomePage />} />
            <Route path="/dashboard" element={isLoggedIn ? <StudentDashboard /> : <StudentDashboard />} />
            <Route path="/job-listings" element={<JobListingPage />} />
            <Route path="/job-application/:jobId" element={<JobApplicationPage />} />
            <Route path="/application-tracking" element={<ApplicationTrackingPage />} />
            <Route path="/skill-management" element={<SkillAdditionPage />} />
            <Route path="/upload-work" element={<WorkUploadPage />} />
            <Route path="/cv-management" element={<CVManagementPage />} />
            <Route path="/active-projects" element={<ActiveProjects />} />
            <Route path="/service-requests" element={<StudentServiceRequests />} />
            <Route path="/peer-application" element={<PeerApplicationForm />} />
            <Route path="/peer-contract" element={<PeerContract />} />
            <Route path="/peer-contracts" element={<PeerContracts />} />
            <Route path="/applications/:id" element={<StudentApplications />} />
            <Route path="/engagements" element={<Engagements />} />
            <Route path="/contracts2" element={<StudentContracts />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
            <Route path="job-listings" element={<JobListings />} />
            <Route path="job-postings" element={<JobPostings />} />
            <Route path="applications" element={<Applications />} />
            <Route path="/contracts" element={<CreateContract />} />
            <Route path="/contracts1" element={<Contracts />} />
            <Route path="company-profile" element={<CompanyProfile />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/rate-student/:studentId" element={<RateStudent />} />
            <Route path="/review-student/:studentId" element={<ReviewStudent />} />
          </Routes>
        </main>
      
      </div>
    </Router>
  );
}

export default App;
