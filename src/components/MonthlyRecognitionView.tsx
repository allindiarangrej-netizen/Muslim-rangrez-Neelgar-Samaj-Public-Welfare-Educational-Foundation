import React, { useState } from 'react';
import { Language } from '../types';
import { Trophy, Award, Calendar, Heart, Users, Sparkles, CheckCircle, MapPin, Building2, BookOpen, ChevronRight, Star } from 'lucide-react';

interface MonthlyRecognitionProps {
  currentLanguage: Language;
}

export default function MonthlyRecognitionView({ currentLanguage }: MonthlyRecognitionProps) {
  const [selectedMonth, setSelectedMonth] = useState('July 2026');

  const months = ['July 2026', 'June 2026', 'May 2026', 'April 2026'];

  const recognitionData = {
    'July 2026': {
      volunteer: {
        nameEn: 'Mohammad Shahid Rangrez',
        nameHi: 'मोहम्मद शाहिद रंगरेज़',
        committeeEn: 'Jaipur Central Welfare Committee',
        committeeHi: 'जयपुर सेंट्रल वेलफेयर कमेटी',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        designationEn: 'Emergency Blood Donation Coordinator',
        designationHi: 'आपातकालीन रक्तदान समन्वयक',
        hours: 142,
        activities: 18,
        beneficiaries: 320,
        citationEn: 'Organized 4 emergency nighttime blood donation drives and personally coordinated plasma support for 45 critical hospital patients during the monsoon health surge.',
        citationHi: 'मानसून स्वास्थ्य संकट के दौरान 4 आपातकालीन रात्रि रक्तदान शिविरों का आयोजन किया और 45 गंभीर अस्पताल के रोगियों के लिए प्लाज्मा सहायता का समन्वय किया।'
      },
      committee: {
        nameEn: 'Indore District Khidmat Committee',
        nameHi: 'इंदौर जिला खिदमत कमेटी',
        districtEn: 'Indore, Madhya Pradesh',
        districtHi: 'इंदौर, मध्य प्रदेश',
        photo: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        presidentEn: 'Haji Abdul Rehman Rangrez',
        presidentHi: 'हाजी अब्दुल रहमान रंगरेज़',
        volunteersCount: 84,
        activitiesCount: 12,
        beneficiariesCount: 1850,
        highlightEn: 'Conducted a massive free education kit distribution drive across 15 government schools, supporting 1,200 underprivileged children.',
        highlightHi: '15 सरकारी स्कूलों में एक विशाल निःशुल्क शिक्षा किट वितरण अभियान चलाया, जिससे 1,200 जरूरतमंद बच्चों को सहायता मिली।'
      },
      project: {
        titleEn: 'Project Roshni: Free Eye Camp & Cataract Surgeries',
        titleHi: 'प्रोजेक्ट रोशनी: निःशुल्क नेत्र शिविर और मोतियाबिंद सर्जरी',
        committeeEn: 'Ahmedabad Youth Wing & Medical Committee',
        committeeHi: 'अहमदाबाद युवा विंग और चिकित्सा समिति',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=400&fit=crop',
        impactEn: '450 Elderly Screened • 68 Free Cataract Surgeries Completed • 380 Spectacles Distributed',
        impactHi: '450 बुजुर्गों की जांच • 68 सफल निःशुल्क मोतियाबिंद सर्जरी • 380 चश्मे वितरित',
        summaryEn: 'A verified 3-day specialized ophthalmic camp executed in collaboration with civil hospital surgeons, completely free of cost for senior citizens.',
        summaryHi: 'सिविल अस्पताल के सर्जनों के सहयोग से आयोजित एक सत्यापित 3-दिवसीय विशेष नेत्र शिविर, जो वरिष्ठ नागरिकों के लिए पूर्णतः निःशुल्क था।'
      },
      story: {
        titleEn: 'From A Beneficiary To A Lifesaver: The Journey Of Fatima Bibi',
        titleHi: 'एक लाभार्थी से जीवनरक्षक तक: फातिमा बीबी की प्रेरणादायक यात्रा',
        authorEn: 'Women Welfare Wing, Bhopal',
        authorHi: 'महिला कल्याण विंग, भोपाल',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop',
        quoteEn: '"When my family faced a medical crisis two years ago, this committee stood by us like solid rock. Today, I dedicate 15 hours every week to ensure no widowed mother sleeps hungry."',
        quoteHi: '"जब दो साल पहले मेरे परिवार पर चिकित्सा संकट आया, तो यह समिति हमारे साथ चट्टान की तरह खड़ी रही। आज, मैं हर हफ्ते 15 घंटे यह सुनिश्चित करने के लिए देती हूं कि कोई भी विधवा मां भूखी न सोए।"',
        contentEn: 'Fatima Bibi, a 42-year-old teacher from Bhopal, joined as a volunteer after receiving emergency educational scholarship support for her daughters in 2024. Over the past month alone, she established a decentralized grain distribution network connecting 40 affluent households with 60 destitute elderly families. Her meticulous digital attendance records and transparency earned her the unanimous respect of the national verification board.',
        contentHi: 'भोपाल की 42 वर्षीय शिक्षिका फातिमा बीबी 2024 में अपनी बेटियों के लिए आपातकालीन शिक्षा छात्रवृत्ति सहायता प्राप्त करने के बाद स्वयंसेवक के रूप में शामिल हुईं। अकेले पिछले महीने में, उन्होंने 40 संपन्न परिवारों को 60 निराश्रित बुजुर्ग परिवारों से जोड़ने वाला एक अनाज वितरण नेटवर्क स्थापित किया। उनकी पारदर्शी कार्यशैली और अटूट सेवा भाव ने उन्हें राष्ट्रीय सत्यापन बोर्ड का सर्वसम्मति से सम्मान दिलाया।'
      }
    }
  };

  const currentData = recognitionData['July 2026'];

  return (
    <div className="space-y-12">
      {/* Month Selector Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-gradient-to-r from-[#004B23] to-[#0B132B] p-6 rounded-2xl text-white shadow-md">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#F4C430] text-[#0B132B] mb-2 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            {currentLanguage === 'en' ? 'Verified Monthly Honor Roll' : 'सत्यापित मासिक सम्मान सूची'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            {currentLanguage === 'en' ? 'Monthly Recognition & Impact' : 'मासिक सम्मान और सामाजिक प्रभाव'}
          </h2>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-[#F4C430]" />
          <select 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-[#F4C430] text-sm"
          >
            {months.map((m) => (
              <option key={m} value={m} className="text-gray-900">{m}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of 4 Core Pillars: Volunteer, Committee, Project, Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 1. VOLUNTEER OF THE MONTH */}
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden hover:shadow-md transition">
          <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent p-4 border-b border-emerald-100 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#004B23] font-bold">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span>{currentLanguage === 'en' ? 'Volunteer of the Month' : 'महीने के सर्वश्रेष्ठ स्वयंसेवक'}</span>
            </div>
            <span className="text-xs font-semibold bg-emerald-100 text-[#004B23] px-2.5 py-1 rounded-full flex items-center">
              <CheckCircle className="h-3 w-3 mr-1 text-emerald-600" />
              {currentLanguage === 'en' ? '100% Verified' : 'सत्यापित'}
            </span>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
              <div className="relative">
                <img src={currentData.volunteer.photo} alt="Volunteer" className="w-24 h-24 rounded-2xl object-cover ring-4 ring-emerald-50 shadow-md" />
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-[#0B132B] p-1.5 rounded-full shadow">
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {currentLanguage === 'en' ? currentData.volunteer.nameEn : currentData.volunteer.nameHi}
                </h3>
                <p className="text-sm font-semibold text-[#004B23] mt-0.5">
                  {currentLanguage === 'en' ? currentData.volunteer.designationEn : currentData.volunteer.designationHi}
                </p>
                <p className="text-xs text-gray-500 flex items-center justify-center sm:justify-start mt-1">
                  <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                  {currentLanguage === 'en' ? currentData.volunteer.committeeEn : currentData.volunteer.committeeHi}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
              <div>
                <span className="block text-lg font-extrabold text-[#004B23]">{currentData.volunteer.hours} hrs</span>
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Service Hours' : 'सेवा घंटे'}</span>
              </div>
              <div>
                <span className="block text-lg font-extrabold text-[#0B132B]">{currentData.volunteer.activities}</span>
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Activities' : 'गतिविधियां'}</span>
              </div>
              <div>
                <span className="block text-lg font-extrabold text-amber-600">{currentData.volunteer.beneficiaries}+</span>
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Beneficiaries' : 'लाभार्थी'}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic bg-emerald-50/50 p-4 rounded-xl border-l-4 border-[#004B23]">
              "{currentLanguage === 'en' ? currentData.volunteer.citationEn : currentData.volunteer.citationHi}"
            </p>
          </div>
        </div>

        {/* 2. COMMITTEE OF THE MONTH */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-md transition">
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent p-4 border-b border-blue-100 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#0B132B] font-bold">
              <Building2 className="h-5 w-5 text-blue-600" />
              <span>{currentLanguage === 'en' ? 'Committee of the Month' : 'महीने की सर्वश्रेष्ठ समिति'}</span>
            </div>
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">
              {currentLanguage === 'en' ? 'Excellence Trophy' : 'उत्कृष्टता ट्रॉफी'}
            </span>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
              <img src={currentData.committee.photo} alt="Committee" className="w-24 h-24 rounded-2xl object-cover ring-4 ring-blue-50 shadow-md" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {currentLanguage === 'en' ? currentData.committee.nameEn : currentData.committee.nameHi}
                </h3>
                <p className="text-xs text-gray-500 flex items-center justify-center sm:justify-start mt-1">
                  <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                  {currentLanguage === 'en' ? currentData.committee.districtEn : currentData.committee.districtHi}
                </p>
                <p className="text-xs font-medium text-blue-700 mt-2 bg-blue-50 inline-block px-2.5 py-1 rounded-md">
                  {currentLanguage === 'en' ? 'President:' : 'अध्यक्ष:'} {currentLanguage === 'en' ? currentData.committee.presidentEn : currentData.committee.presidentHi}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
              <div>
                <span className="block text-lg font-extrabold text-blue-700">{currentData.committee.volunteersCount}</span>
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Active Volunteers' : 'सक्रिय स्वयंसेवक'}</span>
              </div>
              <div>
                <span className="block text-lg font-extrabold text-[#0B132B]">{currentData.committee.activitiesCount}</span>
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Major Drives' : 'प्रमुख अभियान'}</span>
              </div>
              <div>
                <span className="block text-lg font-extrabold text-emerald-600">{currentData.committee.beneficiariesCount}+</span>
                <span className="text-xs text-gray-500">{currentLanguage === 'en' ? 'Lives Touched' : 'लाभान्वित नागरिक'}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 bg-blue-50/50 p-4 rounded-xl border-l-4 border-blue-600">
              <strong className="block text-gray-900 font-semibold mb-1">{currentLanguage === 'en' ? 'Key Achievement:' : 'मुख्य उपलब्धि:'}</strong>
              {currentLanguage === 'en' ? currentData.committee.highlightEn : currentData.committee.highlightHi}
            </p>
          </div>
        </div>

        {/* 3. PROJECT OF THE MONTH */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden hover:shadow-md transition">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-4 border-b border-amber-100 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-amber-800 font-bold">
              <Award className="h-5 w-5 text-amber-600" />
              <span>{currentLanguage === 'en' ? 'Project of the Month' : 'महीने की सर्वश्रेष्ठ परियोजना'}</span>
            </div>
            <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
              {currentLanguage === 'en' ? 'High Impact' : 'उच्च प्रभाव'}
            </span>
          </div>
          <div className="p-6 space-y-4">
            <img src={currentData.project.photo} alt="Project" className="w-full h-48 rounded-xl object-cover shadow-sm" />
            
            <h3 className="text-xl font-bold text-gray-900">
              {currentLanguage === 'en' ? currentData.project.titleEn : currentData.project.titleHi}
            </h3>
            
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
              {currentLanguage === 'en' ? currentData.project.committeeEn : currentData.project.committeeHi}
            </p>

            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200/60 text-center font-bold text-sm text-amber-900">
              {currentLanguage === 'en' ? currentData.project.impactEn : currentData.project.impactHi}
            </div>

            <p className="text-sm text-gray-600">
              {currentLanguage === 'en' ? currentData.project.summaryEn : currentData.project.summaryHi}
            </p>
          </div>
        </div>

        {/* 4. INSPIRATIONAL STORY OF THE MONTH */}
        <div className="bg-white rounded-2xl border border-purple-100 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent p-4 border-b border-purple-100 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-purple-900 font-bold">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span>{currentLanguage === 'en' ? 'Inspirational Story of the Month' : 'महीने की प्रेरणादायक कहानी'}</span>
              </div>
              <span className="text-xs font-semibold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full">
                {currentLanguage === 'en' ? 'Real Life Impact' : 'वास्तविक प्रभाव'}
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <img src={currentData.story.photo} alt="Story Author" className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-200" />
                <div>
                  <h3 className="font-bold text-gray-900 leading-snug">
                    {currentLanguage === 'en' ? currentData.story.titleEn : currentData.story.titleHi}
                  </h3>
                  <p className="text-xs text-purple-600 font-medium mt-0.5">
                    {currentLanguage === 'en' ? currentData.story.authorEn : currentData.story.authorHi}
                  </p>
                </div>
              </div>

              <blockquote className="text-sm font-medium italic text-gray-800 bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                {currentLanguage === 'en' ? currentData.story.quoteEn : currentData.story.quoteHi}
              </blockquote>

              <p className="text-sm text-gray-600 leading-relaxed">
                {currentLanguage === 'en' ? currentData.story.contentEn : currentData.story.contentHi}
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>{currentLanguage === 'en' ? 'Verified by National Ethics & Audit Committee' : 'राष्ट्रीय आचार एवं लेखा परीक्षा समिति द्वारा सत्यापित'}</span>
            <CheckCircle className="h-4 w-4 text-emerald-600" />
          </div>
        </div>

      </div>
    </div>
  );
}
