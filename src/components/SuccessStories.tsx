import React from 'react';
import { Language } from '../types';

import { ProfileImage } from './common/ProfileImage';

interface SuccessStory {
  id: string;
  name: string;
  story: string;
  photo: string;
}

const stories: SuccessStory[] = [
  { id: '1', name: 'Ravi Kumar', story: 'Changed 100 lives through medical camps.', photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop' },
  { id: '2', name: 'Ayesha Khan', story: 'Empowered 50 women in education.', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
];

interface SuccessStoriesProps {
  currentLanguage: Language;
}

export default function SuccessStories({ currentLanguage }: SuccessStoriesProps) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        {currentLanguage === 'en' ? 'Success Stories' : 'सफलता की कहानियां'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {stories.map(story => (
          <div key={story.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-6 hover:shadow-md transition">
            <ProfileImage
              src={story.photo}
              alt={story.name}
              size="lg"
              containerClassName="ring-2 ring-emerald-50 shadow-md"
            />
            <div>
              <h4 className="font-extrabold text-gray-900 text-lg">{story.name}</h4>
              <p className="text-sm text-gray-600 italic leading-relaxed">"{story.story}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
