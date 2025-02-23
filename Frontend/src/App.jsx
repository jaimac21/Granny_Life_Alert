import { Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar"; // Ensure the correct import path
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import UserTypeSelection from './pages/UserTypeSelection.jsx';
import GetStartedPage from './pages/GetStartedPage.jsx';
import GuardianRegistration from './pages/GuardianRegistration.jsx';
import SetupProfile from './pages/SetupProfile.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<UserTypeSelection />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/setup-profile" element={<SetupProfile />} />
        <Route path="/guardian-registration" element={<GuardianRegistration />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
