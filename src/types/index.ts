export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  description: string;
  skillsTargeted: string[];
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: string;
}

export interface UserProfile {
  name: string;
  education: string;
  careerGoals: string[];
  currentSkills: Skill[];
  targetSkills: Skill[];
}