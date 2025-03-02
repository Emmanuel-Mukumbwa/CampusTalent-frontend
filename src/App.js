import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Student pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import StudentDashboard from './pages/StudentDashboard';
import JobApplicationPage from './pages/student/JobApplicationPage';
import ActiveProjects from './pages/student/ActiveProjects';
import StudentApplications from './pages/student/StudentApplications';
import StudentContracts from './pages/StudentContracts';
import PeerApplicationForm from './pages/student/PeerApplicationForm';
import PeerContract from './pages/student/PeerContract';
import RateStudent from './pages/student/RateStudent';
import ReviewStudent from './pages/student/ReviewStudent';
import Engagements from './pages/student/Engagements';
// New student pages
import RecommendedOpportunities from './pages/student/RecommendedOpportunities';
import Portfolio from './pages/student/Portfolio';
import PaymentHistory from './pages/student/PaymentHistory';

// Recruiter pages
import RecruiterDashboard from './pages/RecruiterDashboard';
import DashboardOverview from './pages/recruiter/DashboardOverview';
import Inbox from './pages/recruiter/Inbox';
import Profile from './pages/recruiter/Profile';
import RecruiterEngagementsTabs from './pages/recruiter/RecruiterEngagementsTabs';
import Contracts from './pages/recruiter/Contracts';
import CandidateProfile from './pages/recruiter/CandidateProfile';

// Other pages
import JobListingPage from './pages/JobListingPage';
import ApplicationTrackingPage from './pages/ApplicationTrackingPage';
import SkillAdditionPage from './pages/SkillAdditionPage';
import WorkUploadPage from './pages/WorkUploadPage';
import CVManagementPage from './pages/CVManagementPage';
import MessagesPage from './pages/MessagesPage';
import JobPostings from './pages/JobPostingsTab';
import Applications from './pages/ApplicationsTab';
import CompanyProfile from './pages/CompanyProfileTab';
import ProfilePage from './pages/ProfilePage';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole'); // "student" or "recruiter"

  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <HomePage />} />

            {/* Student Routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/recommended-opportunities" element={<RecommendedOpportunities />} />
            <Route path="/student/portfolio" element={<Portfolio />} />
            <Route path="/student/payment-history" element={<PaymentHistory />} />
            <Route path="/job-application/:jobId" element={<JobApplicationPage />} />
            <Route path="/active-projects" element={<ActiveProjects />} />
            <Route path="/peer-application" element={<PeerApplicationForm />} />
            <Route path="/peer-contract" element={<PeerContract />} />
            <Route path="/applications/:id" element={<StudentApplications />} />
            <Route path="/engagements" element={<Engagements />} />
            <Route path="/contracts2" element={<StudentContracts />} />
            <Route path="/messages" element={<MessagesPage />} />

            {/* Recruiter Routes */}
            <Route path="/recruiter/dashboard" element={<RecruiterDashboard />}>
              <Route index element={<DashboardOverview />} />
              <Route path="engagements" element={<RecruiterEngagementsTabs />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="profile" element={<Profile />} />
              <Route path="contracts" element={<Contracts />} />
            </Route>
            <Route path="/recruiter/candidate/:candidateId" element={<CandidateProfile />} />

            {/* Other Routes */}
            <Route path="/job-listings" element={<JobListingPage />} />
            <Route path="/application-tracking" element={<ApplicationTrackingPage />} />
            <Route path="/skill-management" element={<SkillAdditionPage />} />
            <Route path="/upload-work" element={<WorkUploadPage />} />
            <Route path="/cv-management" element={<CVManagementPage />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/job-postings" element={<JobPostings />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/rate-student/:studentId" element={<RateStudent />} />
            <Route path="/review-student/:studentId" element={<ReviewStudent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
