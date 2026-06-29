import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ExternalLink, Calendar, FileText, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { jobListings } from '../data';

interface JobBoardProps {
  currentLanguage: Language;
}

export default function JobBoard({ currentLanguage }: JobBoardProps) {
  const [activeJobType, setActiveJobType] = useState<string>('All');
  const [jobSearch, setJobSearch] = useState('');
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [resumeFile, setResumeFile] = useState<string>('');

  const jobTypes = ['All', 'Private', 'Government', 'Gulf'];

  const handleResumeUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) return;
    setResumeUploaded(true);
    setTimeout(() => {
      setResumeUploaded(false);
      setResumeFile('');
      alert('Resume securely indexed in national professional career pool!');
    }, 3000);
  };

  return (
    <div className="py-12 bg-gray-50/50" id="job_board_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'NATIONAL CAREER DEVELOPMENT DESK' : 'राष्ट्रीय रोजगार मार्गदर्शन प्रकोष्ठ'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Socio-Economic Job Opportunities Board' : 'सामुदायिक रोजगार अवसर मंच'}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Find verified corporate private openings, gulf placements, government job recruitment notifications, and resume guidance.'
              : 'सत्यापित निजी कंपनियों में नौकरियां, खाड़ी देशों के प्लेसमेंट, सरकारी नौकरी भर्ती सूचनाएं और पेशेवर रिज्यूमे मार्गदर्शन खोजें।'}
          </p>
        </div>

        {/* Filters and Searches */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between mb-8" id="job_filters_panel">
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveJobType(type)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  activeJobType === type
                    ? 'bg-[#004B23] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {currentLanguage === 'en' ? type : (type === 'All' ? 'सभी' : (type === 'Private' ? 'प्राइवेट' : (type === 'Government' ? 'सरकारी' : 'खाड़ी देश')))}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder={currentLanguage === 'en' ? 'Search job title or location...' : 'पद का नाम या स्थान खोजें...'}
              value={jobSearch}
              onChange={(e) => setJobSearch(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded pl-8 focus:outline-none focus:ring-1 focus:ring-[#004B23]"
            />
            <Search className="absolute left-2.5 top-3.5 h-3.5 w-3.5 text-gray-400" />
          </div>
        </div>

        {/* Listings Display Grid & Resume Upload Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Job Listings Column */}
          <div className="lg:col-span-8 space-y-4" id="jobs_listings_col">
            {jobListings
              .filter(j => activeJobType === 'All' || j.type === activeJobType)
              .filter(j => j.titleEn.toLowerCase().includes(jobSearch.toLowerCase()) || j.locationEn.toLowerCase().includes(jobSearch.toLowerCase()))
              .map((j) => (
                <div key={j.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-bold text-[#004B23] bg-emerald-50 px-2 py-0.5 rounded uppercase font-mono">
                        {j.type}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">ID: {j.id}</span>
                    </div>

                    <h4 className="text-sm font-extrabold text-[#0B132B]">
                      {currentLanguage === 'en' ? j.titleEn : j.titleHi}
                    </h4>

                    <p className="text-xs text-gray-500 font-semibold">{currentLanguage === 'en' ? j.companyEn : j.companyHi}</p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-gray-400 font-mono">
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                        {currentLanguage === 'en' ? j.locationEn : j.locationHi}
                      </span>
                      <span>•</span>
                      <span>{currentLanguage === 'en' ? j.salaryEn : j.salaryHi}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end justify-between gap-2 flex-shrink-0">
                    <span className="text-[10px] text-gray-400 font-mono">Posted: {j.postedDate}</span>
                    <button
                      onClick={() => alert('Redirecting to secure external recruitment verification endpoint.')}
                      className="px-4 py-2 bg-[#004B23] hover:bg-[#00381a] text-white text-[10px] font-bold uppercase tracking-wider rounded transition flex items-center space-x-1.5"
                    >
                      <span>{currentLanguage === 'en' ? 'Apply Now' : 'आवेदन करें'}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Secure Resume Pool Upload Panel */}
          <div className="lg:col-span-4 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm space-y-6" id="resume_upload_panel">
            <div>
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                <FileText className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Central Resume Index Pool' : 'केंद्रीय बायोडाटा बैंक'}</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Submit your updated CV below. Verified HR officers from leading community organizations review this pool weekly.'
                  : 'नीचे अपना अपडेटेड रिज्यूमे जमा करें। विभिन्न प्रतिष्ठित कंपनियों में कार्यरत समुदाय के एचआर अधिकारी साप्ताहिक रूप से इसकी समीक्षा करते हैं।'}
              </p>
            </div>

            {resumeUploaded ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg text-center text-xs space-y-2 animate-bounce">
                <CheckCircle className="h-8 w-8 text-[#004B23] mx-auto" />
                <p className="font-bold">{currentLanguage === 'en' ? 'Resume Indexed Successfully!' : 'बायोडाटा सफलतापूर्वक अपलोड हुआ!'}</p>
                <p>{currentLanguage === 'en' ? 'HR matching routines initiated.' : 'योग्यता मिलान प्रक्रिया शुरू कर दी गई है।'}</p>
              </div>
            ) : (
              <form onSubmit={handleResumeUpload} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Primary Career Field' : 'कार्यक्षेत्र (करियर फील्ड)'}
                  </label>
                  <select className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none text-gray-800 font-medium">
                    <option>Information Technology / IT</option>
                    <option>Mechanical & Civil Engineering</option>
                    <option>Finance & Accounting</option>
                    <option>Textile, Dying & Designing</option>
                    <option>Teaching / Academia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Upload CV (Enter link / text)' : 'बायोडाटा लिंक या विवरण दर्ज करें'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Google Drive link, Dropbox link, or profile summary"
                    value={resumeFile}
                    onChange={(e) => setResumeFile(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#004B23] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00381a] transition"
                >
                  {currentLanguage === 'en' ? 'Upload and Index CV' : 'बायोडाटा बैंक में शामिल करें'}
                </button>
              </form>
            )}

            <div className="border-t border-gray-200 pt-4 text-[11px] text-gray-500 font-mono space-y-1.5">
              <p className="font-bold uppercase text-gray-700">Interview Guidelines:</p>
              <p>• {currentLanguage === 'en' ? 'Keep digital files unrestricted for secure view.' : 'कृपया सुनिश्चित करें कि फ़ाइल लिंक सार्वजनिक रूप से सुलभ हो।'}</p>
              <p>• {currentLanguage === 'en' ? 'Reference your RCB ID on top of your CV.' : 'बायोडाटा के शीर्ष पर अपनी महासभा आईडी (RCB ID) का उल्लेख करें।'}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
