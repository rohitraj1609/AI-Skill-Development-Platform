import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { CommunityFeed } from './components/community/CommunityFeed';
import { LandingPage } from './pages/LandingPage';
import { SkillAssessment } from './components/SkillAssessment';
import { ToastProvider } from './hooks/useToast';

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Log In</h2>
                <LoginForm />
              </div>
            } />
            <Route path="/signup" element={
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <SignupForm />
              </div>
            } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assessment" element={<SkillAssessment />} />
            <Route path="/community" element={
              <div className="max-w-3xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Community</h2>
                <CommunityFeed />
              </div>
            } />
            {/* Redirect unmatched routes to landing page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;