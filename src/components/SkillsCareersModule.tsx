import React, { useState } from 'react';
import { 
  Briefcase, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Download, 
  FileText, 
  Search, 
  Sparkles, 
  ChevronRight, 
  Users, 
  Globe, 
  Building2, 
  Code, 
  Cpu, 
  DollarSign, 
  TrendingUp, 
  Rocket, 
  Zap, 
  FileCheck, 
  MessageSquare, 
  ArrowUpRight,
  ShieldCheck,
  Printer
} from 'lucide-react';
import { Language } from '../types';

interface SkillsCareersModuleProps {
  currentLanguage: Language;
  onNavigate?: (tab: string) => void;
}

export default function SkillsCareersModule({ currentLanguage, onNavigate }: SkillsCareersModuleProps) {
  const [activeTab, setActiveTab] = useState<'jobs' | 'skills' | 'freelance' | 'startup' | 'tools'>('jobs');
  const [jobSearch, setJobSearch] = useState('');
  const [selectedJobCategory, setSelectedJobCategory] = useState('All');
  
  // Resume Builder Simple State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [showResumePreview, setShowResumePreview] = useState(false);

  const jobListings = [
    {
      id: 'j1',
      title: 'Railway Recruitment Board (RRB) NTPC & Station Master',
      org: 'Indian Railways / Govt of India',
      type: 'Government Job',
      location: 'Pan India',
      vacancies: '11,558 Posts',
      salary: '₹35,400 - ₹1,12,400 (Level 6)',
      deadline: '15 August 2026',
      eligibility: 'Graduate in any discipline'
    },
    {
      id: 'j2',
      title: 'Junior Engineer (Civil & Electrical) SSC JE 2026',
      org: 'Staff Selection Commission (SSC)',
      type: 'Government Job',
      location: 'Central Govt Departments',
      vacancies: '2,800 Posts',
      salary: '₹35,400 - ₹1,12,400',
      deadline: '28 August 2026',
      eligibility: 'Diploma / B.Tech in Civil/Electrical'
    },
    {
      id: 'j3',
      title: 'Senior Full Stack AI Developer (Remote / Hybrid)',
      org: 'Tech Innovators Pvt Ltd',
      type: 'Private Tech Job',
      location: 'Bengaluru / Remote',
      vacancies: '12 Positions',
      salary: '₹12 - ₹22 LPA',
      deadline: 'Urgent Hiring',
      eligibility: 'React, Node.js, Python, LLM APIs'
    },
    {
      id: 'j4',
      title: 'HVAC & Electrical Maintenance Specialist',
      org: 'Gulf Engineering & Contracting WLL',
      type: 'International Job (Qatar / UAE)',
      location: 'Doha, Qatar / Dubai, UAE',
      vacancies: '45 Posts',
      salary: 'QAR 4,500 - 7,000 + Accommodation',
      deadline: '10 August 2026',
      eligibility: 'ITI Trade Certificate / Diploma + 3 Yrs Exp'
    },
    {
      id: 'j5',
      title: 'Apprentice Industrial Technician (PMKVY Scheme)',
      org: 'National Skill Development Corporation (NSDC)',
      type: 'Apprenticeship',
      location: 'Multiple Industrial Parks',
      vacancies: '500+ Seats',
      salary: 'Stipend ₹9,000 - ₹12,000/mo',
      deadline: '31 August 2026',
      eligibility: '10th Passed / ITI Passed'
    }
  ];

  const skillCourses = [
    { title: 'Artificial Intelligence & Prompt Engineering', partner: 'NSDC Digital Academy', duration: '8 Weeks', level: 'Beginner to Advanced', icon: Cpu, badge: 'High Demand' },
    { title: 'Cyber Security & Ethical Hacking', partner: 'C-DAC Govt Certification', duration: '12 Weeks', level: 'Intermediate', icon: ShieldCheck, badge: 'Govt Certified' },
    { title: 'Cloud Computing & AWS Architecture', partner: 'PMKVY Tech Hub', duration: '10 Weeks', level: 'Intermediate', icon: Zap, badge: 'Industry Placement' },
    { title: 'Full Stack Web & Mobile App Development', partner: 'Rangrez Tech Skill Cell', duration: '16 Weeks', level: 'Beginner Friendly', icon: Code, badge: '100% Internship' },
    { title: 'Industrial Electrical & PLC Automation', partner: 'MSME Tool Room', duration: '6 Weeks', level: 'Vocational', icon: Building2, badge: 'Hands-on Lab' },
    { title: 'Healthcare Assistant & Emergency Care', partner: 'Skill India Healthcare', duration: '12 Weeks', level: 'Medical Vocational', icon: Users, badge: 'Hospital Internship' }
  ];

  const filteredJobs = jobListings.filter(j => {
    const matchesSearch = j.title.toLowerCase().includes(jobSearch.toLowerCase()) || j.org.toLowerCase().includes(jobSearch.toLowerCase());
    const matchesCat = selectedJobCategory === 'All' || j.type === selectedJobCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header Banner */}
        <div className="bg-gradient-to-r from-[#0B132B] via-[#004B23] to-[#0B132B] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden mb-8 border-2 border-[#FFD54A]/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD54A]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFD54A]/20 border border-[#FFD54A]/40 text-[#FFD54A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Briefcase className="w-4 h-4" />
                <span>LEVEL 3 • SKILLS, JOBS & ENTREPRENEURSHIP ECOSYSTEM</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Skills & Careers Ecosystem
              </h1>
              <p className="mt-2 text-sm text-slate-200 max-w-2xl leading-relaxed">
                National Employment & Skill Portal: Government Vacancies (UPSC, SSC, Railways), Private & Gulf Jobs, NSDC/PMKVY Certified Skill Courses, Freelancing & Gig Economy Hub, Startup India Registration, and Interactive AI Resume Builder.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button 
                onClick={() => window.print()}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 transition cursor-pointer"
              >
                <Printer className="w-4 h-4 text-amber-300" />
                <span>Print Opportunities</span>
              </button>
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-white/10 text-xs font-bold">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                activeTab === 'jobs'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              💼 Jobs, Vacancies & Apprenticeships
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              🛠️ Skill Development (NSDC / PMKVY / ITI)
            </button>
            <button
              onClick={() => setActiveTab('freelance')}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                activeTab === 'freelance'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              🌐 Freelancing & Gig Economy
            </button>
            <button
              onClick={() => setActiveTab('startup')}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                activeTab === 'startup'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              🚀 Startup India & MSME Entrepreneurship
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                activeTab === 'tools'
                  ? 'bg-[#FFD54A] text-[#004B23] shadow font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              📄 Instant CV / Resume Builder & Tools
            </button>
          </div>
        </div>

        {/* TAB 1: JOBS & VACANCIES */}
        {activeTab === 'jobs' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-[#004B23]" />
                  <span>Verified Employment & Vacancy Portal</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  100% Verified Central & State Govt Jobs, Public Sector Undertakings (PSUs), Corporate Tech Openings, Gulf/International Contracts & Paid Apprenticeships.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={jobSearch}
                    onChange={(e) => setJobSearch(e.target.value)}
                    placeholder="Search job title or organization..."
                    className="pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#004B23]/40 w-48 sm:w-64"
                  />
                </div>

                <select
                  value={selectedJobCategory}
                  onChange={(e) => setSelectedJobCategory(e.target.value)}
                  className="py-2 px-3 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl outline-none"
                >
                  <option value="All">All Job Types</option>
                  <option value="Government Job">Government Jobs</option>
                  <option value="Private Tech Job">Private / Corporate</option>
                  <option value="International Job (Qatar / UAE)">Gulf / International</option>
                  <option value="Apprenticeship">Apprenticeships</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredJobs.map(job => (
                <div key={job.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-black uppercase bg-[#004B23] text-[#FFD54A] px-2.5 py-0.5 rounded">
                        {job.type}
                      </span>
                      <span className="text-xs font-bold text-slate-600">Location: {job.location}</span>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">{job.vacancies}</span>
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-base">{job.title}</h4>
                    <p className="text-xs text-slate-500 font-semibold">{job.org}</p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 pt-1">
                      <div><strong>Pay Scale:</strong> <span className="text-[#004B23] font-extrabold">{job.salary}</span></div>
                      <div><strong>Eligibility:</strong> {job.eligibility}</div>
                      <div><strong>Deadline:</strong> <span className="text-rose-600 font-bold">{job.deadline}</span></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => alert(`Redirecting to official application portal for ${job.title}...`)}
                      className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-extrabold text-xs rounded-xl shadow transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SKILL DEVELOPMENT */}
        {activeTab === 'skills' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#004B23]" />
                  <span>NSDC & PMKVY Accredited Skill Certifications</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enhance your employability with government-recognized digital, industrial, ITI trade, healthcare, and engineering certifications with free learning resources.
                </p>
              </div>

              <button
                onClick={() => onNavigate && onNavigate('education-hub')}
                className="px-4 py-2 bg-[#004B23] text-[#FFD54A] text-xs font-bold rounded-xl hover:bg-[#00381a] transition cursor-pointer"
              >
                Access Skill Library
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCourses.map((sc, idx) => {
                const Icon = sc.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-200 text-[#004B23]">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-[#004B23] px-2.5 py-0.5 rounded">
                          {sc.badge}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">{sc.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mb-3">Affiliation: {sc.partner}</p>

                      <div className="space-y-1 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/80 mb-3">
                        <div><strong>Duration:</strong> {sc.duration}</div>
                        <div><strong>Skill Level:</strong> {sc.level}</div>
                        <div><strong>Certification:</strong> Government Skill India Digital Pass</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                      <button className="text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer">
                        <Download className="w-3.5 h-3.5" /> Course Syllabus
                      </button>
                      <button 
                        onClick={() => alert(`Enrolling in ${sc.title}...`)}
                        className="bg-[#004B23] text-white px-3 py-1.5 rounded-lg hover:bg-[#00381a] transition cursor-pointer text-[11px]"
                      >
                        Enroll Free
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: FREELANCING */}
        {activeTab === 'freelance' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <Globe className="w-6 h-6 text-[#004B23]" />
                <span>Freelancing & Global Gig Economy Launchpad</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Learn how to earn independently as a freelancer on Upwork, Fiverr, and LinkedIn: proposal writing, portfolio building, and international payment setups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded">Pillar 1</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Portfolio & Profile Setup</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Create high-converting profiles on Upwork, GitHub, and Behance. Showcase 3 real-world case studies.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-black uppercase text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded">Pillar 2</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Winning Proposal Writing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Download proven client proposal templates with 85%+ win rates for Web Dev, Graphic Design, Content & Marketing.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-black uppercase text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded">Pillar 3</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Cross-Border Foreign Invoicing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Setup GST compliance, Wise/PayPal business accounts, and FIRC certificates for seamless international payments.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: STARTUP INDIA & MSME */}
        {activeTab === 'startup' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-[#004B23]" />
                <span>Startup India & MSME Business Incubation</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Turn your business ideas into legally registered enterprises with Startup India DPIIT recognition, MSME Udyam Registration, and Mudra collateral-free loan guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase bg-[#004B23] text-white px-2.5 py-0.5 rounded">Government Scheme</span>
                  <Rocket className="w-4 h-4 text-[#004B23]" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">DPIIT Startup India Recognition</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enjoy 3-year income tax exemption, 80% rebate on patent filings, and fast-track government tender access.
                </p>
                <button 
                  onClick={() => alert('Redirecting to official Startup India registration guide...')}
                  className="text-xs font-bold text-[#004B23] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>DPIIT Registration Checklist &rarr;</span>
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase bg-amber-700 text-white px-2.5 py-0.5 rounded">MSME Scheme</span>
                  <Building2 className="w-4 h-4 text-amber-700" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">Mudra Yojana & MSME Business Loans</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Collateral-free business loans up to ₹10 Lakhs (Shishu, Kishor, Tarun categories) for small businesses, manufacturing units, and textile artisans.
                </p>
                <button 
                  onClick={() => alert('Opening Mudra Loan application guide...')}
                  className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Check Mudra Loan Eligibility &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INSTANT CV / RESUME BUILDER */}
        {activeTab === 'tools' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
            <div className="mb-6 pb-6 border-b border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#004B23]" />
                <span>Instant ATS-Friendly Resume / CV Generator</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out your details below to generate a clean, professional, ATS-optimized CV ready for job applications and corporate recruitment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Input */}
              <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-2">Enter Your Resume Details</h4>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Shakil Ahmed Rangrez"
                    className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. shakil@example.com"
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 9876543210"
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Key Technical & Soft Skills (Comma separated)</label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="e.g. JavaScript, Python, Communication, Project Management, ITI Electrical"
                    className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Experience / Academic Qualification Summary</label>
                  <textarea
                    rows={4}
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Describe your qualifications, past roles, or key achievements..."
                    className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none resize-none"
                  />
                </div>

                <button
                  onClick={() => setShowResumePreview(true)}
                  className="w-full py-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-extrabold text-xs rounded-xl shadow transition cursor-pointer"
                >
                  Generate Professional CV Preview
                </button>
              </div>

              {/* Preview Box */}
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-300 shadow-inner flex flex-col justify-between">
                <div>
                  <div className="border-b-2 border-[#004B23] pb-4 mb-4">
                    <h2 className="text-xl font-black text-[#0B132B] uppercase tracking-wide">
                      {fullName || 'YOUR FULL NAME'}
                    </h2>
                    <p className="text-xs text-slate-600 font-semibold mt-1">
                      {email || 'email@domain.com'} • {phone || '+91 0000000000'}
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <h4 className="font-extrabold text-[#004B23] uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1 mb-1">
                        Professional Summary
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {experience || 'Enter your qualifications and experience on the left to populate this section with formatted text suitable for ATS algorithms.'}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-[#004B23] uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1 mb-1">
                        Core Competencies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {(skills ? skills.split(',') : ['Problem Solving', 'Team Leadership', 'Technical Skills']).map((s, i) => (
                          <span key={i} className="bg-slate-100 text-slate-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-bold">
                            {s.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button 
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-[#0B132B] text-white text-xs font-bold rounded-xl hover:bg-[#004B23] transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#FFD54A]" />
                    <span>Print / Save as PDF</span>
                  </button>
                  <span className="text-[10px] text-slate-400 font-bold">Rangrez Portal CV Format</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
