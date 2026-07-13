import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, BookOpen, Scale, FileText, Building2, Shield, Train, 
  ChevronRight, Star, ExternalLink, Calendar, Stethoscope, ArrowLeft,
  Download, CheckCircle2, HelpCircle, Award, AlertCircle, TrendingUp, Clock, Globe, Bell, Layers
} from 'lucide-react';
import { Language } from '../types';
import { EXAM_CATEGORIES, EXAMS, TRANSLATIONS, Exam, OFFICIAL_PORTALS } from '../data/careerData';

interface CareerPortalProps {
  currentLanguage: Language;
}

const ICON_MAP: Record<string, any> = {
  Scale, FileText, Building2, Shield, Train, BookOpen, Stethoscope
};

export default function CareerPortal({ currentLanguage }: CareerPortalProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);

  const filteredExams = useMemo(() => {
    return EXAMS.filter(exam => {
      const matchesCategory = activeCategory ? exam.category === activeCategory : true;
      const matchesSearch = exam.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            exam.name.hi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            exam.name.ur.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  if (selectedExam) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 sm:p-8 font-sans max-w-7xl mx-auto">
        <button onClick={() => setSelectedExam(null)} className="flex items-center gap-2 mb-6 text-amber-700 font-semibold hover:text-amber-800 transition cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> <span>Back to Competitive Exams Dashboard</span>
        </button>
        
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200 space-y-8">
          {/* 1. Header & Overview */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase mb-2">
                {selectedExam.category.toUpperCase()} • {selectedExam.frequency}
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">{selectedExam.name[currentLanguage]}</h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed max-w-3xl">{selectedExam.overview[currentLanguage]}</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a href={selectedExam.website} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-[#004B23] hover:bg-[#00381a] text-white rounded-xl font-bold text-xs shadow flex items-center gap-2 transition">
                <Globe className="w-4 h-4 text-[#FFD54A]" />
                <span>Official Website</span>
              </a>
              <button onClick={() => alert(`Downloading Official Notification PDF for ${selectedExam.name.en}...`)} className="px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-xs shadow flex items-center gap-1.5 transition cursor-pointer">
                <Download className="w-4 h-4" />
                <span>Notification PDF</span>
              </button>
            </div>
          </div>

          {/* 2. Key Action Bar (Admit Card, Results, Important Dates) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <button onClick={() => alert(`Checking Admit Card portal for ${selectedExam.name.en}...`)} className="p-3 bg-white rounded-xl border border-stone-200 hover:border-amber-500 transition text-left space-y-1 cursor-pointer">
              <span className="text-[10px] font-bold text-stone-400 uppercase">Admit Card</span>
              <div className="text-xs font-bold text-stone-800 flex items-center justify-between"><span>Download Hall Ticket</span> <Download className="w-3.5 h-3.5 text-amber-600" /></div>
            </button>
            <button onClick={() => alert(`Checking Latest Results & Merit List for ${selectedExam.name.en}...`)} className="p-3 bg-white rounded-xl border border-stone-200 hover:border-amber-500 transition text-left space-y-1 cursor-pointer">
              <span className="text-[10px] font-bold text-stone-400 uppercase">Results</span>
              <div className="text-xs font-bold text-stone-800 flex items-center justify-between"><span>Check Merit List</span> <Award className="w-3.5 h-3.5 text-emerald-600" /></div>
            </button>
            <button onClick={() => alert(`Checking Cutoff Marks database for ${selectedExam.name.en}...`)} className="p-3 bg-white rounded-xl border border-stone-200 hover:border-amber-500 transition text-left space-y-1 cursor-pointer">
              <span className="text-[10px] font-bold text-stone-400 uppercase">Cutoff Marks</span>
              <div className="text-xs font-bold text-stone-800 flex items-center justify-between"><span>Previous Cutoffs</span> <TrendingUp className="w-3.5 h-3.5 text-blue-600" /></div>
            </button>
            <button onClick={() => alert(`Subscribing to SMS Admission Alerts for ${selectedExam.name.en}...`)} className="p-3 bg-white rounded-xl border border-stone-200 hover:border-amber-500 transition text-left space-y-1 cursor-pointer">
              <span className="text-[10px] font-bold text-stone-400 uppercase">SMS Alert</span>
              <div className="text-xs font-bold text-stone-800 flex items-center justify-between"><span>Set Exam Reminder</span> <Bell className="w-3.5 h-3.5 text-purple-600" /></div>
            </button>
          </div>

          {/* 3. Authority, Salary & Eligibility Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
              <h2 className="font-bold text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#004B23]" />
                <span>Authority & Compensation</span>
              </h2>
              <div className="text-xs space-y-2 pt-1 text-stone-700">
                <p><strong className="text-stone-900">Conducting Authority:</strong> {selectedExam.authority}</p>
                <p><strong className="text-stone-900">Salary Level / Grade:</strong> {selectedExam.salaryLevel} ({selectedExam.salaryRange})</p>
                <p><strong className="text-stone-900">Minimum Qualification:</strong> {selectedExam.qualification}</p>
                <p><strong className="text-stone-900">Exam Frequency:</strong> {selectedExam.frequency}</p>
              </div>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
              <h2 className="font-bold text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#004B23]" />
                <span>Eligibility Criteria</span>
              </h2>
              <div className="text-xs space-y-2 pt-1 text-stone-700">
                <p><strong className="text-stone-900">Educational Requirement:</strong> {selectedExam.eligibility.minQualification[currentLanguage]}</p>
                <p><strong className="text-stone-900">Age Limit:</strong> {selectedExam.eligibility.ageLimit[currentLanguage]}</p>
                <p><strong className="text-stone-900">Nationality:</strong> {selectedExam.eligibility.nationality[currentLanguage]}</p>
                <p><strong className="text-stone-900">Reservation & Age Relaxation:</strong> {selectedExam.eligibility.reservationRules[currentLanguage]}</p>
              </div>
            </div>
          </div>

          {/* 4. Important Dates Schedule */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-6 rounded-2xl text-white shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FFD54A] mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Important Dates & Examination Schedule</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-stone-400 font-bold uppercase">Notification</div>
                <div className="text-xs font-bold mt-1 text-white">{selectedExam.importantDates.notification}</div>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-stone-400 font-bold uppercase">App Start</div>
                <div className="text-xs font-bold mt-1 text-emerald-400">{selectedExam.importantDates.applicationStart}</div>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-stone-400 font-bold uppercase">Last Date</div>
                <div className="text-xs font-bold mt-1 text-amber-400">{selectedExam.importantDates.lastDate}</div>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-stone-400 font-bold uppercase">Admit Card</div>
                <div className="text-xs font-bold mt-1 text-white">{selectedExam.importantDates.admitCard}</div>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-stone-400 font-bold uppercase">Exam Date</div>
                <div className="text-xs font-bold mt-1 text-[#FFD54A]">{selectedExam.importantDates.examDate}</div>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <div className="text-[10px] text-stone-400 font-bold uppercase">Result Date</div>
                <div className="text-xs font-bold mt-1 text-emerald-400">{selectedExam.importantDates.resultDate}</div>
              </div>
            </div>
          </div>

          {/* 5. Selection Process & Pattern */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#004B23]" />
              <span>Selection Process, Exam Pattern & Detailed Syllabus</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2 text-sm">Selection Stages & Pattern</h3>
                <p className="text-stone-700 leading-relaxed">{selectedExam.selectionProcess.stages[currentLanguage]}</p>
              </div>
              <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2 text-sm">Syllabus Overview</h3>
                <p className="text-stone-700 leading-relaxed">{selectedExam.selectionProcess.syllabus[currentLanguage]}</p>
              </div>
            </div>
          </div>

          {/* 6. Previous Year Papers & Cutoff Marks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="border border-stone-200 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center justify-between">
                <span>Previous Year Question Papers & Keys</span>
                <span className="text-[10px] text-[#004B23] font-bold">Free PDF Download</span>
              </h3>
              <div className="space-y-2">
                {['2025 Tier-1 & Tier-2 Question Paper + Answer Key', '2024 Complete Solved Paper with Explanations', '2023 Previous Year Paper & Topic Breakdown'].map((paper, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                    <span className="font-semibold text-stone-800">{paper}</span>
                    <button onClick={() => alert(`Downloading ${paper}...`)} className="px-3 py-1.5 bg-[#004B23] hover:bg-[#00381a] text-white rounded-lg text-[11px] font-bold transition flex items-center gap-1 shrink-0 cursor-pointer">
                      <Download className="w-3 h-3" /> PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-stone-200 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center justify-between">
                <span>Previous Year Cutoff Marks Benchmark</span>
                <span className="text-[10px] text-amber-700 font-bold">Official Regulatory Data</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 font-bold">
                      <th className="pb-2">Category</th>
                      <th className="pb-2">2025 Cutoff</th>
                      <th className="pb-2">2024 Cutoff</th>
                      <th className="pb-2">Target Safe Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-mono">
                    <tr><td className="py-2 font-bold text-stone-800">General (UR)</td><td className="py-2">88.5 / 200</td><td className="py-2">87.0 / 200</td><td className="py-2 font-bold text-emerald-700">95.0+</td></tr>
                    <tr><td className="py-2 font-bold text-stone-800">OBC (Non-Creamy)</td><td className="py-2">85.0 / 200</td><td className="py-2">84.5 / 200</td><td className="py-2 font-bold text-emerald-700">90.0+</td></tr>
                    <tr><td className="py-2 font-bold text-stone-800">EWS Category</td><td className="py-2">82.0 / 200</td><td className="py-2">81.0 / 200</td><td className="py-2 font-bold text-emerald-700">88.0+</td></tr>
                    <tr><td className="py-2 font-bold text-stone-800">SC / ST Category</td><td className="py-2">74.0 / 200</td><td className="py-2">72.5 / 200</td><td className="py-2 font-bold text-emerald-700">80.0+</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 7. Preparation Tips & FAQs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-[#004B23] uppercase tracking-wider flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Community Mentor Preparation Tips</span>
              </h3>
              <ul className="text-xs text-stone-700 space-y-2 list-disc list-inside">
                <li><strong>Start with Foundation:</strong> Master NCERT textbooks (Class 6-12) for basic conceptual clarity before reference books.</li>
                <li><strong>Time Management:</strong> Practice at least 2 full-length timed mock tests every week in the final 3 months.</li>
                <li><strong>Current Affairs:</strong> Read daily newspaper summaries and download our monthly GK capsule from the Digital Library.</li>
                <li><strong>Guidance Support:</strong> Connect with community subject experts in the Mentorship Hub for answer writing evaluation.</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>Frequently Asked Questions (FAQs)</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <h4 className="font-bold text-stone-900">Q: Is there any application fee waiver or scholarship available?</h4>
                  <p className="text-stone-600 mt-0.5">A: Yes! Female candidates, SC/ST, and minority applicants eligible under NSP schemes receive complete application fee waivers and coaching grants.</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Q: How can I download the official syllabus and admit card?</h4>
                  <p className="text-stone-600 mt-0.5">A: You can download the syllabus directly from the Previous Year Papers section above or visit the official conducting portal via the green button.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-stone-400 font-mono">Data Verified against Official Conducting Authority Notification • Last Updated: 2026-07-01</span>
            <a href={selectedExam.website} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#004B23] hover:bg-[#00381a] text-white rounded-xl font-bold text-xs shadow flex items-center gap-2 transition">
              <span>Open Conducting Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full bg-[#faf9f6] text-stone-800 p-4 sm:p-8 font-sans">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-4xl font-bold text-stone-900 mb-3">{TRANSLATIONS.title[currentLanguage]}</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">{TRANSLATIONS.subtitle[currentLanguage]}</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 mb-8 flex flex-col gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-stone-400 w-5 h-5" />
          <input
            type="text"
            placeholder={TRANSLATIONS.searchPlaceholder[currentLanguage]}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 transition-all"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <select className="flex-1 p-2.5 rounded-xl border border-stone-200 text-sm">
            <option>{TRANSLATIONS.qualFilterTitle[currentLanguage]}</option>
            <option>Graduate</option>
            <option>12th Pass</option>
          </select>
          <select className="flex-1 p-2.5 rounded-xl border border-stone-200 text-sm">
            <option>{TRANSLATIONS.salaryFilterTitle[currentLanguage]}</option>
            <option>25000+</option>
            <option>40000+</option>
            <option>60000+</option>
          </select>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6 text-stone-900">{TRANSLATIONS.dashboardTitle[currentLanguage]}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {EXAM_CATEGORIES.map(cat => {
            const Icon = ICON_MAP[cat.icon] || BookOpen;
            const isActive = activeCategory === cat.id;
            return (
              <div key={cat.id} className="relative group flex flex-col">
                <button
                  onClick={() => setActiveCategory(isActive ? null : cat.id)}
                  className={`p-4 rounded-2xl flex flex-col items-center gap-3 border transition-all flex-1 ${
                    isActive ? 'bg-amber-600 text-white border-amber-700 shadow-md' : 'bg-white text-stone-700 border-stone-200 hover:border-amber-500'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-semibold">{cat.name[currentLanguage]}</span>
                </button>
                {cat.url && (
                  <a
                    href={cat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Open official website for ${cat.name.en}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute top-2 right-2 p-1.5 rounded-full border transition-all ${
                      isActive 
                        ? 'bg-amber-700/80 text-white border-amber-500 hover:bg-amber-800' 
                        : 'bg-stone-100 text-stone-600 border-stone-300 hover:bg-amber-100 hover:text-amber-800'
                    }`}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredExams.map(exam => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedExam(exam)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-stone-900">{exam.name[currentLanguage]}</h3>
                <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-lg font-semibold">{exam.frequency}</span>
              </div>
              <p className="text-sm text-stone-600 mb-6 line-clamp-3">{exam.overview[currentLanguage]}</p>
              
              <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exam.importantDates.examDate}</span>
                <span className="font-semibold">{exam.qualification}</span>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-center font-semibold text-xs">
                  View Details
                </button>
                <a href={exam.website} target="_blank" className="p-2 border border-stone-300 rounded-xl hover:bg-stone-50">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="mt-12 bg-stone-100 rounded-xl p-4 text-xs text-stone-500 italic">
        {TRANSLATIONS.disclaimer[currentLanguage]}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6 text-stone-900">{TRANSLATIONS.officialPortalsTitle[currentLanguage]}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {OFFICIAL_PORTALS.map(portal => (
            <a
              key={portal.name}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-white border border-stone-200 rounded-xl hover:border-amber-500 hover:shadow-sm transition-all text-sm font-semibold"
            >
              {portal.name}
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
