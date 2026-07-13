import React from 'react';
import { VolunteerProfile, Language } from '../types';
import { Award, Star, Calendar } from 'lucide-react';

interface VolunteerMotivationProps {
  profile: VolunteerProfile;
  currentLanguage: Language;
}

export default function VolunteerMotivationCard({ profile, currentLanguage }: VolunteerMotivationProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <h3 className="text-xl font-bold text-[#0B132B]">
        {currentLanguage === 'en' ? 'Volunteer Motivation' : 'स्वयंसेवक प्रेरणा'}
      </h3>
      
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">{currentLanguage === 'en' ? 'Badges' : 'बैज'}</h4>
        <div className="flex flex-wrap gap-2">
          {profile.badges.map((badge, i) => (
            <span key={i} className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">{badge}</span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-2">{currentLanguage === 'en' ? 'Milestones' : 'मील का पत्थर'}</h4>
        <ul className="space-y-2">
          {profile.milestones.map((m, i) => (
            <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>{m.title} ({m.date})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Calendar className="h-4 w-4" />
        <span>{currentLanguage === 'en' ? 'Service Anniversary:' : 'सेवा वर्षगांठ:'} {profile.anniversaryDate}</span>
      </div>
    </div>
  );
}
