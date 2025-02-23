import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import UserTypeSelection from './pages/UserTypeSelection.jsx';
import GetStartedPage from './pages/GetStartedPage.jsx';
import GuardianRegistration from './pages/GuardianRegistration.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<UserTypeSelection />} />
      <Route path="/get-started" element={<GetStartedPage />} />
      <Route path="/guardian-registration" element={<GuardianRegistration />} />
    </Routes>
  );
}

export default App;
