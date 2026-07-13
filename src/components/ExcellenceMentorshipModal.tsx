import React, { useState } from 'react';
import { AchieverProfile, MentorshipRequest, SuccessStoryItem, AwardItem } from '../data/hallOfExcellenceData';
import {
  X,
  Sparkles,
  User,
  Mail,
  Phone,
  GraduationCap,
  Target,
  MessageSquare,
  CheckCircle2,
  Send,
  BookOpen,
  Award,
  Trophy,
  AlertCircle
} from 'lucide-react';

interface ExcellenceMentorshipModalProps {
  achiever?: AchieverProfile | null;
  currentLanguage: 'en' | 'hi' | 'ur';
  mode: 'mentorship' | 'story' | 'award';
  onClose: () => void;
  onSubmitMentorship?: (req: Partial<MentorshipRequest>) => void;
  onSubmitStory?: (story: Partial<SuccessStoryItem>) => void;
  onSubmitAward?: (award: Partial<AwardItem>) => void;
}

const ExcellenceMentorshipModal: React.FC<ExcellenceMentorshipModalProps> = ({
  achiever,
  currentLanguage,
  mode,
  onClose,
  onSubmitMentorship,
  onSubmitStory,
  onSubmitAward
}) => {
  const [submitted, setSubmitted] = useState(false);

  // Mentorship form states
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [qualification, setQualification] = useState('');
  const [careerGoal, setCareerGoal] = useState('');
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Story form states
  const [storyTitle, setStoryTitle] = useState('');
  const [storyJourney, setStoryJourney] = useState('');
  const [storyChallenges, setStoryChallenges] = useState('');
  const [storyHardWork, setStoryHardWork] = useState('');
  const [storySuccess, setStorySuccess] = useState('');
  const [storyAdvice, setStoryAdvice] = useState('');

  // Award form states
  const [awardTitle, setAwardTitle] = useState('');
  const [recipientName, setRecipientName] = useState(achiever ? achiever.name : '');
  const [awardCategory, setAwardCategory] = useState('Doctors & Medical');
  const [awardYear, setAwardYear] = useState('2025');
  const [awardType, setAwardType] = useState<'Certificate' | 'Medal' | 'Trophy' | 'Government Award' | 'Community Award'>('Government Award');
  const [awardDesc, setAwardDesc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'mentorship' && onSubmitMentorship) {
      onSubmitMentorship({
        studentName,
        studentAge: Number(studentAge) || 20,
        qualification,
        careerGoal,
        question,
        email,
        phone,
        mentorId: achiever?.id || 'general',
        mentorName: achiever?.name || 'General Community Mentor'
      });
    } else if (mode === 'story' && onSubmitStory) {
      onSubmitStory({
        title: { en: storyTitle, hi: storyTitle, ur: storyTitle },
        personalJourney: storyJourney,
        challenges: storyChallenges,
        hardWork: storyHardWork,
        successStory: storySuccess,
        adviceForStudents: storyAdvice
      });
    } else if (mode === 'award' && onSubmitAward) {
      onSubmitAward({
        title: { en: awardTitle, hi: awardTitle, ur: awardTitle },
        recipientName,
        category: awardCategory,
        year: Number(awardYear) || 2025,
        type: awardType,
        description: awardDesc
      });
    }
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-200 relative flex flex-col">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#004B23] to-[#0B132B] p-6 text-white rounded-t-3xl relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F4C430] text-[#0B132B] flex items-center justify-center font-black shadow-lg">
              {mode === 'mentorship' && <Sparkles className="w-6 h-6" />}
              {mode === 'story' && <BookOpen className="w-6 h-6" />}
              {mode === 'award' && <Trophy className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-xl font-black text-white">
                {mode === 'mentorship' && (currentLanguage === 'en' ? 'Request Mentorship Guidance' : 'मार्गदर्शन का अनुरोध करें')}
                {mode === 'story' && (currentLanguage === 'en' ? 'Publish Your Success Story' : 'अपनी सफलता की कहानी प्रकाशित करें')}
                {mode === 'award' && (currentLanguage === 'en' ? 'Submit Award to Gallery' : 'पुरस्कार गैलरी में जोड़ें')}
              </h3>
              <p className="text-xs text-[#FFD54A] font-bold">
                {mode === 'mentorship' && achiever ? `Mentor: ${achiever.name} (${achiever.designation})` : 'All India Rangrez Samaj Trust'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 flex-1">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-scaleUp">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#0B132B]">
                {currentLanguage === 'en' ? 'Submission Successful!' : 'सफलतापूर्वक सबमिट किया गया!'}
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                {mode === 'mentorship'
                  ? 'Your mentorship request has been forwarded to the mentor and community education committee. You will receive advice via email/WhatsApp soon.'
                  : 'Your entry has been received and added to the community portal. Thank you for inspiring our youth!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'mentorship' && (
                <>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 mb-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700 leading-relaxed">
                      <strong>Note for Students:</strong> Our community role models provide free guidance for exam prep, scholarships, and career selection. Please write a specific question so the mentor can help you effectively.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Student Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="e.g. Mohd. Danish Rangrez"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Age *</label>
                      <input
                        type="number"
                        required
                        value={studentAge}
                        onChange={(e) => setStudentAge(e.target.value)}
                        placeholder="e.g. 20"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Current Qualification *</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          placeholder="e.g. 12th Science / B.Sc Final Year"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Target Career Goal *</label>
                      <div className="relative">
                        <Target className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={careerGoal}
                          onChange={(e) => setCareerGoal(e.target.value)}
                          placeholder="e.g. UPSC IAS / MBBS Entrance"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="student@example.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">WhatsApp / Phone *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Specific Question / Doubt for the Mentor *</label>
                    <textarea
                      required
                      rows={4}
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Explain what specific advice or scholarship guidance you are seeking from the mentor..."
                      className="w-full p-3.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                    ></textarea>
                  </div>
                </>
              )}

              {mode === 'story' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Story Title / Headline *</label>
                    <input
                      type="text"
                      required
                      value={storyTitle}
                      onChange={(e) => setStoryTitle(e.target.value)}
                      placeholder="e.g. From Rural Rajasthan to Government Medical College..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Personal Journey & Family Background *</label>
                    <textarea
                      required
                      rows={3}
                      value={storyJourney}
                      onChange={(e) => setStoryJourney(e.target.value)}
                      placeholder="Share about your early life, hometown, and schooling..."
                      className="w-full p-3 bg-slate-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Challenges & Financial/Social Obstacles *</label>
                    <textarea
                      required
                      rows={2}
                      value={storyChallenges}
                      onChange={(e) => setStoryChallenges(e.target.value)}
                      placeholder="What obstacles did you overcome?"
                      className="w-full p-3 bg-slate-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Hard Work & Strategy to Achieve Success *</label>
                    <textarea
                      required
                      rows={2}
                      value={storyHardWork}
                      onChange={(e) => setStoryHardWork(e.target.value)}
                      placeholder="How did you prepare? What was your daily routine?"
                      className="w-full p-3 bg-slate-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Advice & Message for Students *</label>
                    <textarea
                      required
                      rows={2}
                      value={storyAdvice}
                      onChange={(e) => setStoryAdvice(e.target.value)}
                      placeholder="Your golden words of wisdom for the upcoming generation..."
                      className="w-full p-3 bg-slate-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                    ></textarea>
                  </div>
                </>
              )}

              {mode === 'award' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Award / Honor Title *</label>
                    <input
                      type="text"
                      required
                      value={awardTitle}
                      onChange={(e) => setAwardTitle(e.target.value)}
                      placeholder="e.g. Padma Shri Nominee / President Police Medal / Gold Medal"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Recipient Name *</label>
                      <input
                        type="text"
                        required
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="e.g. Dr. Zeeshan Ahmed"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Award Type *</label>
                      <select
                        value={awardType}
                        onChange={(e: any) => setAwardType(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                      >
                        <option value="Government Award">Government Award</option>
                        <option value="Medal">Medal</option>
                        <option value="Trophy">Trophy</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Community Award">Community Award</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Description & Achievement Details *</label>
                    <textarea
                      required
                      rows={3}
                      value={awardDesc}
                      onChange={(e) => setAwardDesc(e.target.value)}
                      placeholder="Describe why this award was conferred..."
                      className="w-full p-3 bg-slate-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                    ></textarea>
                  </div>
                </>
              )}

              <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Submit Now' : 'जमा करें'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExcellenceMentorshipModal;
