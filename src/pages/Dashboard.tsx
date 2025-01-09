import React from 'react';
import { SkillGraph } from '../components/dashboard/SkillGraph';
import { RecommendedCourses } from '../components/RecommendedCourses';
import { CareerPath } from '../components/career/CareerPath';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();
  const [skills, setSkills] = React.useState<Array<{ name: string; level: number }>>([]);

  React.useEffect(() => {
    // Load skill assessment results from localStorage
    const savedAssessment = localStorage.getItem('skillAssessment');
    if (savedAssessment) {
      const assessmentData = JSON.parse(savedAssessment);
      setSkills(assessmentData.map((skill: any) => ({
        name: skill.name,
        level: skill.rating
      })));
    } else {
      // If no assessment results exist, redirect to assessment
      navigate('/assessment');
    }
  }, [navigate]);

  // Only show career paths for skills rated 3 or higher
  const strongSkills = skills.filter(skill => skill.level >= 3).map(skill => skill.name);

  const careerPaths = [
    {
      title: 'Full Stack Developer',
      description: 'Build complete web applications and services',
      requiredSkills: ['JavaScript', 'React', 'Node.js'],
      salary: '$80,000 - $120,000',
      growth: '26% (Much faster than average)',
    },
    {
      title: 'Data Scientist',
      description: 'Analyze complex data sets to inform business decisions',
      requiredSkills: ['Python', 'Data Analysis', 'Machine Learning'],
      salary: '$95,000 - $140,000',
      growth: '22% (Much faster than average)',
    },
  ];

  if (skills.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading assessment results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
        <button
          onClick={() => navigate('/assessment')}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Retake Assessment
        </button>
      </div>
      
      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your Skill Profile</h2>
          <SkillGraph skills={skills} />
        </div>

        <RecommendedCourses />
        
        <CareerPath
          currentSkills={strongSkills}
          recommendedPaths={careerPaths}
        />
      </div>
    </div>
  );
}