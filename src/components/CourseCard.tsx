import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-2">by {course.provider}</p>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.skillsTargeted.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{course.duration}</span>
          <button
            onClick={() => onEnroll(course.id)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}