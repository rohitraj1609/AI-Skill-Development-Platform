import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Book, Users, Brain } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to SkillBridge AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your personalized AI-powered learning journey starts here
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Rocket className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p className="text-gray-600">AI-powered path customized to your goals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Book className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Courses</h3>
            <p className="text-gray-600">Quality content from industry leaders</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Learn and grow with peers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Brain className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skill Assessment</h3>
            <p className="text-gray-600">Track your progress with AI insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}