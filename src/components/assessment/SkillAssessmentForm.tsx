import React from 'react';
import { SkillRatingCard } from './SkillRatingCard';
import { AlertCircle } from 'lucide-react';

interface SkillRating {
  name: string;
  rating: number;
}

interface SkillAssessmentFormProps {
  onSubmit: (skills: SkillRating[]) => void;
}

const SKILLS_TO_RATE = [
  'JavaScript',
  'Python',
  'React',
  'Data Analysis',
  'Machine Learning',
  'UI/UX Design',
  'Project Management',
  'Digital Marketing'
];

export function SkillAssessmentForm({ onSubmit }: SkillAssessmentFormProps) {
  const [skillRatings, setSkillRatings] = React.useState<SkillRating[]>(
    SKILLS_TO_RATE.map(skill => ({ name: skill, rating: 0 }))
  );
  const [showError, setShowError] = React.useState(false);

  const handleRatingChange = (skillName: string, rating: number) => {
    setShowError(false);
    setSkillRatings(prev =>
      prev.map(skill =>
        skill.name === skillName ? { ...skill, rating } : skill
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all skills are rated
    const unratedSkills = skillRatings.filter(skill => skill.rating === 0);
    
    if (unratedSkills.length > 0) {
      setShowError(true);
      // Smooth scroll to the first unrated skill
      const firstUnratedSkill = document.getElementById(unratedSkills[0].name);
      if (firstUnratedSkill) {
        firstUnratedSkill.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    onSubmit(skillRatings);
  };

  const getCompletionStatus = () => {
    const ratedSkills = skillRatings.filter(skill => skill.rating > 0).length;
    return `${ratedSkills}/${SKILLS_TO_RATE.length} skills rated`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Rate Your Skills</h3>
        <div className="text-sm text-gray-600">
          {getCompletionStatus()}
        </div>
      </div>

      {showError && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-red-700">
              Please rate all skills before submitting the assessment
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillRatings.map((skill) => (
          <div
            key={skill.name}
            id={skill.name}
            className={`transition-all duration-300 ${
              showError && skill.rating === 0
                ? 'ring-2 ring-red-400 ring-offset-2'
                : ''
            }`}
          >
            <SkillRatingCard
              skill={skill.name}
              rating={skill.rating}
              onRatingChange={(rating) => handleRatingChange(skill.name, rating)}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Complete Assessment
        </button>
        {showError && (
          <p className="text-sm text-red-600">
            {skillRatings.filter(skill => skill.rating === 0).length} skills still need rating
          </p>
        )}
      </div>
    </form>
  );
}