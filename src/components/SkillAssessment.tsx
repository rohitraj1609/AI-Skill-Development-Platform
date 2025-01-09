import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';
import { SkillAssessmentForm } from './assessment/SkillAssessmentForm';
import { useToast } from '../hooks/useToast';
import { useNavigate } from 'react-router-dom';

export function SkillAssessment() {
  const showToast = useToast();
  const navigate = useNavigate();

  const handleAssessmentComplete = (skills: Array<{ name: string; rating: number }>) => {
    // In a real app, this would be saved to a backend
    localStorage.setItem('skillAssessment', JSON.stringify(skills));
    showToast('Assessment completed successfully!', 'success');
    navigate('/dashboard');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Skill Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Brain className="h-12 w-12 text-indigo-600 mb-2" />
            <h3 className="text-lg font-semibold">Rate Your Skills</h3>
            <p className="text-gray-600 text-center mt-2">
              Evaluate your proficiency in various skills
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <Target className="h-12 w-12 text-indigo-600 mb-2" />
            <h3 className="text-lg font-semibold">Get Insights</h3>
            <p className="text-gray-600 text-center mt-2">
              Receive personalized recommendations
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg">
            <TrendingUp className="h-12 w-12 text-indigo-600 mb-2" />
            <h3 className="text-lg font-semibold">Track Progress</h3>
            <p className="text-gray-600 text-center mt-2">
              Monitor your skill development
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-2">How to Rate Your Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>1 Star - Beginner: Basic understanding</li>
            <li>2 Stars - Elementary: Can perform with guidance</li>
            <li>3 Stars - Intermediate: Independent work possible</li>
            <li>4 Stars - Advanced: Deep understanding</li>
            <li>5 Stars - Expert: Can teach others</li>
          </ul>
        </div>

        <SkillAssessmentForm onSubmit={handleAssessmentComplete} />
      </div>
    </div>
  );
}