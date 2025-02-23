import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GetStartedPage from './pages/GetStartedPage';
import SetupProfile from './pages/SetupProfile';
import ProfilePage from './pages/ProfilePage'; // Import the new page
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/setup-profile" element={<SetupProfile />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* New route */}
      </Routes>
    </div>
  );
}

export default App;