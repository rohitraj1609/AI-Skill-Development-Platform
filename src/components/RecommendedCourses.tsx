import React from 'react';
import type { Course } from '../types';
import { CourseCard } from './CourseCard';
import { useToast } from '../hooks/useToast';

const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    provider: 'Coursera',
    description: 'Learn the basics of web development with HTML, CSS, and JavaScript',
    skillsTargeted: ['HTML', 'CSS', 'JavaScript'],
    duration: '8 weeks',
    difficulty: 'beginner',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300&h=200'
  },
  {
    id: '2',
    title: 'Data Science Essentials',
    provider: 'edX',
    description: 'Master the fundamentals of data science and analytics',
    skillsTargeted: ['Python', 'Statistics', 'Data Analysis'],
    duration: '12 weeks',
    difficulty: 'intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300&h=200'
  }
];

export function RecommendedCourses() {
  const showToast = useToast();

  const handleEnroll = (courseId: string) => {
    const course = sampleCourses.find(c => c.id === courseId);
    if (course) {
      showToast(`Enrolled in ${course.title}`, 'success');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={handleEnroll}
          />
        ))}
      </div>
    </div>
  );
}