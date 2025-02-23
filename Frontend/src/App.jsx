import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import UserTypeSelection from './UserTypeSelection';
import GetStartedPage from './GetStartedPage';
import GuardianRegistration from './GuardianRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<UserTypeSelection />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/guardian-registration" element={<GuardianRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
