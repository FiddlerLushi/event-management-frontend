import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EventListPage from './pages/EventListPage';
import NotificationHandler from './components/NotificationHandler';

const App = () => {
  const userId = localStorage.getItem('userId'); // Example: retrieve from auth system

  return (
    <Router>
      <div className="main-app">
        {userId && <NotificationHandler userId={userId} />}
        <Routes>
          <Route path="/" element={<EventListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Add more routes such as Event Details, Dashboard, etc. */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
