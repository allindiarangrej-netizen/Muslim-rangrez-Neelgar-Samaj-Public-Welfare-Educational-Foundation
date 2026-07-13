import React from 'react';
import { Language, VolunteerProfile } from '../types';
import VolunteerMotivationCard from './VolunteerMotivationCard';

interface VolunteerProfileProps {
  profile: VolunteerProfile;
  currentLanguage: Language;
}

export default function VolunteerProfileView({ profile, currentLanguage }: VolunteerProfileProps) {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center space-x-6">
            <img src={profile.photoUrl} alt={profile.name} className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h2 className="text-3xl font-bold">{profile.name}</h2>
              <p className="text-gray-600">{profile.designation} | {profile.committeeName}</p>
              <p className="text-gray-500">{profile.city}, {profile.state}</p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>{currentLanguage === 'en' ? 'Mobile' : 'मोबाइल'}:</strong> {profile.phone ? profile.phone.replace(/(\d{5})\d{5}/, '$1XXXXX') : 'N/A'}
              </p>
              
              {/* WhatsApp Button */}
              {profile.showWhatsAppPublicly && profile.whatsapp && (
                <div className="mt-4">
                  <a
                    href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition"
                  >
                    <span>{currentLanguage === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट'}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <VolunteerMotivationCard profile={profile} currentLanguage={currentLanguage} />
      </div>
    </div>
  );
}
