import React from 'react';
import { Briefcase, TrendingUp, Award } from 'lucide-react';

interface CareerPathProps {
  currentSkills: string[];
  recommendedPaths: Array<{
    title: string;
    description: string;
    requiredSkills: string[];
    salary: string;
    growth: string;
  }>;
}

export function CareerPath({ currentSkills, recommendedPaths }: CareerPathProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Your Career Paths</h2>
        <div className="grid gap-6">
          {recommendedPaths.map((path, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-5 w-5 text-indigo-600" />
                <h3 className="text-lg font-semibold">{path.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{path.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>Growth: {path.growth}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span>Salary: {path.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}