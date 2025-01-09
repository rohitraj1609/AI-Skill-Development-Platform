import React from 'react';
import { Star } from 'lucide-react';

interface SkillRatingCardProps {
  skill: string;
  rating: number;
  onRatingChange: (rating: number) => void;
}

export function SkillRatingCard({ skill, rating, onRatingChange }: SkillRatingCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">{skill}</h3>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRatingChange(star)}
            className="focus:outline-none transform transition-transform hover:scale-110"
            title={`${star} star${star !== 1 ? 's' : ''}`}
          >
            <Star
              className={`h-8 w-8 ${
                star <= rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300 hover:text-yellow-200'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-600">
        {rating === 0 && "Click to rate"}
        {rating === 1 && "Beginner"}
        {rating === 2 && "Elementary"}
        {rating === 3 && "Intermediate"}
        {rating === 4 && "Advanced"}
        {rating === 5 && "Expert"}
      </p>
    </div>
  );
}