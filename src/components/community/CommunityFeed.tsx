import React from 'react';
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

interface Post {
  id: string;
  author: string;
  content: string;
  likes: number;
  comments: number;
}

const SAMPLE_POSTS: Post[] = [
  {
    id: '1',
    author: 'John Doe',
    content: 'Just completed the Web Development course! The projects really helped solidify my understanding.',
    likes: 24,
    comments: 5
  },
  {
    id: '2',
    author: 'Jane Smith',
    content: 'Looking for study partners for the Machine Learning course. Anyone interested?',
    likes: 15,
    comments: 8
  }
];

export function CommunityFeed() {
  return (
    <div className="space-y-4">
      {SAMPLE_POSTS.map(post => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow">
          <div className="font-semibold mb-2">{post.author}</div>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="flex gap-4 text-gray-600">
            <button className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              {post.likes}
            </button>
            <button className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              {post.comments}
            </button>
            <button className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}