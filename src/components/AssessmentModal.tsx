import React from 'react';
import { X } from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (skills: string[]) => void;
}

const SKILL_OPTIONS = [
  'JavaScript', 'Python', 'React', 'Data Analysis',
  'Machine Learning', 'UI/UX Design', 'Project Management',
  'Digital Marketing'
];

export function AssessmentModal({ isOpen, onClose, onSubmit }: AssessmentModalProps) {
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedSkills);
    onClose();
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Skill Assessment</h2>
          <button onClick={onClose} className="p-1">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-gray-600 mb-2">Select your current skills:</p>
            <div className="flex flex-wrap gap-2">
              {SKILL_OPTIONS.map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedSkills.includes(skill)
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Complete Assessment
          </button>
        </form>
      </div>
    </div>
  );
}