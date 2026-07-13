import React from 'react';
import { Language, CommitteeProfile } from '../types';

interface CommitteeProfileProps {
  profile: CommitteeProfile;
  currentLanguage: Language;
}

export default function CommitteeProfileView({ profile, currentLanguage }: CommitteeProfileProps) {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-3xl font-bold mb-4">{profile.committeeName}</h2>
          <p className="text-gray-600 mb-6">{profile.district}, {profile.state}</p>
          
          {/* WhatsApp Button */}
          {profile.showWhatsAppPublicly && profile.whatsapp && (
            <div className="mb-6">
              <a
                href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-sm transition"
              >
                <span>{currentLanguage === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट'}</span>
              </a>
            </div>
          )}
          {/* Add more committee details here */}
        </div>
      </div>
    </div>
  );
}
