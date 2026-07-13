import React, { useState } from 'react';
import { 
  Bookmark, Download, Printer, FileSpreadsheet, FileText, BarChart3, 
  PieChart, ShieldAlert, Users, Settings, Bell, CheckCircle2, 
  ExternalLink, Trash2, PlusCircle, ArrowUpRight, Award, Briefcase, 
  GraduationCap, Building2, HelpCircle, Lock, Database, RefreshCw, X
} from 'lucide-react';
import { Language } from '../types';

interface EducationStudentDashboardProps {
  currentLanguage: Language;
  onClose?: () => void;
}

export default function EducationStudentDashboard({ currentLanguage, onClose }: EducationStudentDashboardProps) {
  const [activeTab, setActiveTab] = useState<'student' | 'analytics' | 'admin'>('student');
  const [studentSubTab, setStudentSubTab] = useState<'saved' | 'tracker' | 'downloads' | 'profile'>('saved');
  const [adminSubTab, setAdminSubTab] = useState<'directory' | 'roles' | 'logs' | 'backup'>('directory');
  
  // Mock Saved Resources State
  const [savedItems, setSavedItems] = useState([
    { id: 'c1', type: 'College', name: 'St. Stephen’s College, Delhi', category: 'Science & Arts', status: 'Admissions Open', link: 'colleges-directory' },
    { id: 'j1', type: 'Job', name: 'RRB NTPC Graduate Level 2026', category: 'Government Job', status: 'Apply before 30 Jul', link: 'jobs-careers' },
    { id: 's1', type: 'Scholarship', name: 'Maulana Azad National Fellowship', category: 'Minority Scholarship', status: 'Verified Scheme', link: 'scholarships' },
    { id: 'e1', type: 'Exam', name: 'UPSC Civil Services Prelims 2026', category: 'Government Exam', status: 'Admit Cards Out', link: 'competitive-exams' }
  ]);

  // Mock Exam Tracker
  const [trackedApplications, setTrackedApplications] = useState([
    { id: 'app1', title: 'UPSC Civil Services 2026', regNo: 'UPSC-2026-98421', stage: 'Prelims Qualified', nextDate: '15 Aug 2026 (Mains)', progress: 60 },
    { id: 'app2', title: 'NSP Merit Scholarship 2026-27', regNo: 'NSP-DL-448120', stage: 'District Nodal Officer Approved', nextDate: 'Direct DBT Transfer in Oct', progress: 85 },
    { id: 'app3', title: 'RRB NTPC Station Master', regNo: 'RRB-NR-119284', stage: 'CBT-1 Scheduled', nextDate: '12 Sep 2026', progress: 30 }
  ]);

  const handleRemoveSaved = (id: string) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };

  const handleExportPDF = () => {
    alert('Generating PDF Report... Complete Education & Careers summary has been downloaded to your system.');
  };

  const handleExportExcel = () => {
    alert('Exporting Excel (CSV) Spreadsheet... Data table generated with 3,500+ colleges and exam timelines.');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-2xl overflow-hidden my-8 font-sans animate-fadeIn">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] p-6 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#D4AF37]/30">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD54A] text-[#0B132B] text-xs font-extrabold uppercase tracking-wider mb-2">
            <span>🎓</span>
            <span>{currentLanguage === 'en' ? 'UNIFIED PORTAL SECRETARIAT' : 'एकीकृत पोर्टल सचिवालय'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-black text-white flex items-center gap-2">
            <span>{currentLanguage === 'en' ? 'Student Dashboard, Analytics & Admin Portal' : 'छात्र डैशबोर्ड, विश्लेषण एवं एडमिन पोर्टल'}</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            {currentLanguage === 'en' 
              ? 'Manage saved bookmarks, track competitive exam applications, inspect national education statistics, and access administrative directory controls.' 
              : 'सहेजे गए बुकमार्क प्रबंधित करें, परीक्षा आवेदन ट्रैक करें और राष्ट्रीय शिक्षा आंकड़े देखें।'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button 
            onClick={handleExportPDF} 
            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 transition cursor-pointer"
            title="Download PDF Summary"
          >
            <FileText className="w-3.5 h-3.5 text-rose-400" />
            <span>PDF Report</span>
          </button>
          <button 
            onClick={handleExportExcel} 
            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 transition cursor-pointer"
            title="Export Excel/CSV Spreadsheet"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
            <span>Excel Export</span>
          </button>
          <button 
            onClick={handlePrint} 
            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 transition cursor-pointer"
            title="Print Current View"
          >
            <Printer className="w-3.5 h-3.5 text-amber-300" />
            <span>Print</span>
          </button>
          {onClose && (
            <button 
              onClick={onClose} 
              className="p-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('student')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'student'
              ? 'bg-[#004B23] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          <Bookmark className="w-4 h-4 text-[#FFD54A]" />
          <span>{currentLanguage === 'en' ? '1. Student Dashboard & Saved Resources' : '1. छात्र डैशबोर्ड एवं बुकमार्क'}</span>
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'analytics'
              ? 'bg-[#004B23] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          <BarChart3 className="w-4 h-4 text-[#FFD54A]" />
          <span>{currentLanguage === 'en' ? '2. National Analytics & Reports' : '2. राष्ट्रीय विश्लेषण एवं रिपोर्ट'}</span>
        </button>
        <button
          onClick={() => setActiveTab('admin')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'admin'
              ? 'bg-[#004B23] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          <Settings className="w-4 h-4 text-[#FFD54A]" />
          <span>{currentLanguage === 'en' ? '3. Admin Panel & Management' : '3. एडमिन पैनल एवं प्रबंधन'}</span>
        </button>
      </div>

      {/* TAB 1: STUDENT DASHBOARD */}
      {activeTab === 'student' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
            <button
              onClick={() => setStudentSubTab('saved')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                studentSubTab === 'saved' ? 'bg-[#0B132B] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Saved Bookmarks ({savedItems.length})
            </button>
            <button
              onClick={() => setStudentSubTab('tracker')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                studentSubTab === 'tracker' ? 'bg-[#0B132B] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Exam & Application Tracker ({trackedApplications.length})
            </button>
            <button
              onClick={() => setStudentSubTab('downloads')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                studentSubTab === 'downloads' ? 'bg-[#0B132B] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              My Downloaded Prospectuses & CVs
            </button>
            <button
              onClick={() => setStudentSubTab('profile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                studentSubTab === 'profile' ? 'bg-[#0B132B] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Student Profile & Alerts
            </button>
          </div>

          {studentSubTab === 'saved' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#0B132B] flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[#004B23]" />
                  <span>Saved Colleges, Jobs, Scholarships & Exams</span>
                </h3>
                <span className="text-xs text-slate-500">Click any item to view full eligibility & details</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedItems.map(item => (
                  <div key={item.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#004B23] transition flex items-center justify-between shadow-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#004B23]/10 text-[#004B23] mb-1 inline-block">
                        {item.type}: {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-emerald-700 font-semibold mt-1">● {item.status}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => alert(`Navigating to ${item.name} inside ${item.link} portal...`)} 
                        className="p-2 rounded-xl bg-[#004B23] text-white hover:bg-[#00381a] transition cursor-pointer"
                        title="Open Resource"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleRemoveSaved(item.id)} 
                        className="p-2 rounded-xl bg-rose-100 text-rose-700 hover:bg-rose-200 transition cursor-pointer"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {savedItems.length === 0 && (
                  <div className="col-span-2 p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500 text-xs">
                    No saved items yet. Browse Colleges, Jobs, Exams or Scholarships and click 'Bookmark / Save' to track them here.
                  </div>
                )}
              </div>
            </div>
          )}

          {studentSubTab === 'tracker' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#0B132B]">Active Application Status Tracker</h3>
              <div className="space-y-3">
                {trackedApplications.map(app => (
                  <div key={app.id} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{app.title}</h4>
                        <p className="text-xs font-mono text-slate-500">Reg No: {app.regNo}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                        Stage: {app.stage}
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                        <span>Application Progress</span>
                        <span>{app.progress}% Completed</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div className="bg-[#004B23] h-2.5 rounded-full" style={{ width: `${app.progress}%` }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
                      <span><strong>Next Milestone:</strong> {app.nextDate}</span>
                      <button onClick={() => alert(`Refreshing live status from examination server for ${app.regNo}...`)} className="text-[#004B23] font-bold hover:underline flex items-center gap-1 cursor-pointer">
                        <RefreshCw className="w-3.5 h-3.5" /> Synchronize Status
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {studentSubTab === 'downloads' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#0B132B]">Offline Library & Downloaded Prospectuses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">UPSC 10-Year Solved Question Bank.pdf</h4>
                    <span className="text-[10px] text-slate-500">28 MB • Downloaded on 01 Jul 2026</span>
                  </div>
                  <button onClick={() => alert('Re-downloading PDF file...')} className="p-2 bg-[#004B23] text-white rounded-lg hover:bg-[#00381a]">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Top 500 Medical Colleges Fee Structure 2026.xlsx</h4>
                    <span className="text-[10px] text-slate-500">4.2 MB • Downloaded on 28 Jun 2026</span>
                  </div>
                  <button onClick={() => alert('Re-downloading Excel file...')} className="p-2 bg-[#004B23] text-white rounded-lg hover:bg-[#00381a]">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Standard ATS Fresher Resume Template.docx</h4>
                    <span className="text-[10px] text-slate-500">1.8 MB • Downloaded on 25 Jun 2026</span>
                  </div>
                  <button onClick={() => alert('Re-downloading DOCX file...')} className="p-2 bg-[#004B23] text-white rounded-lg hover:bg-[#00381a]">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {studentSubTab === 'profile' && (
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 max-w-2xl space-y-4">
              <h3 className="text-sm font-bold text-[#0B132B]">Student Community Profile & Preferences</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Student / Candidate Name</label>
                  <input type="text" readOnly value="Amaan Rangrez (Verified Student)" className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 font-semibold" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Primary Target Stream</label>
                  <input type="text" readOnly value="Medical (MBBS) & Civil Services" className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 font-semibold" />
                </div>
                <div className="col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Notification Preferences</label>
                  <div className="flex flex-wrap gap-4 pt-1">
                    <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded text-[#004B23]" /> Exam Admit Card Alerts (SMS & Email)</label>
                    <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded text-[#004B23]" /> NSP Scholarship Deadline Reminders</label>
                    <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded text-[#004B23]" /> Govt PSU Job Vacancies</label>
                  </div>
                </div>
              </div>
              <button onClick={() => alert('Preferences saved!')} className="px-5 py-2.5 bg-[#004B23] text-white text-xs font-bold rounded-xl shadow">Save Preferences</button>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: ANALYTICS & REPORTS */}
      {activeTab === 'analytics' && (
        <div className="p-6 sm:p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0B132B] flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#004B23]" />
                <span>National Education & Career Placement Statistics 2026</span>
              </h3>
              <p className="text-xs text-slate-500">Live data telemetry aggregated across 19 directory streams and government exam registries.</p>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-[#004B23] rounded-full text-xs font-bold">● Live Telemetry Active</span>
          </div>

          {/* Statistical Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase">Total Colleges Listed</div>
              <div className="text-2xl font-black text-[#0B132B] mt-1">3,540+</div>
              <div className="text-[10px] text-emerald-600 font-bold mt-1">↑ 14% higher than 2025</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase">Active Course Streams</div>
              <div className="text-2xl font-black text-[#0B132B] mt-1">19 Streams</div>
              <div className="text-[10px] text-blue-600 font-bold mt-1">100% Regulatory Covered</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase">Scholarships Disbursed</div>
              <div className="text-2xl font-black text-emerald-700 mt-1">₹1.52 Cr+</div>
              <div className="text-[10px] text-slate-500 font-bold mt-1">4,800+ Beneficiaries</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase">Govt & PSU Job Vacancies</div>
              <div className="text-2xl font-black text-purple-800 mt-1">54,200+</div>
              <div className="text-[10px] text-purple-600 font-bold mt-1">Across 25 Live Portals</div>
            </div>
          </div>

          {/* Charts Breakdown Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <PieChart className="w-4 h-4 text-[#004B23]" />
                <span>Popular College Stream Demand (%)</span>
              </h4>
              <div className="space-y-3 text-xs font-semibold">
                <div>
                  <div className="flex justify-between mb-1"><span>Engineering (B.Tech / Lateral ITI)</span><span>38%</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: '38%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span>Medical (MBBS / BDS / AYUSH / Nursing)</span><span>29%</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-emerald-600 h-2 rounded-full" style={{ width: '29%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span>Commerce, Law & Management (CA/LLB/MBA)</span><span>20%</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-amber-600 h-2 rounded-full" style={{ width: '20%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span>Paramedical, Pharmacy & Vocational</span><span>13%</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-purple-600 h-2 rounded-full" style={{ width: '13%' }}></div></div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-purple-700" />
                <span>Competitive Exam Aspirant Distribution</span>
              </h4>
              <div className="space-y-3 text-xs font-semibold">
                <div>
                  <div className="flex justify-between mb-1"><span>UPSC Civil Services & State PSC</span><span>34% Aspirants</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-purple-700 h-2 rounded-full" style={{ width: '34%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span>SSC & Railways NTPC Recruitment</span><span>31% Aspirants</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-indigo-600 h-2 rounded-full" style={{ width: '31%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span>NEET UG & JEE Main / Advanced</span><span>22% Aspirants</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-emerald-600 h-2 rounded-full" style={{ width: '22%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span>Banking (IBPS/SBI) & Defence (NDA/CDS)</span><span>13% Aspirants</span></div>
                  <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-red-600 h-2 rounded-full" style={{ width: '13%' }}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ADMIN PANEL */}
      {activeTab === 'admin' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-amber-50 border border-amber-300 p-4 rounded-2xl flex items-center justify-between text-xs text-amber-900">
            <div className="flex items-center gap-2 font-bold">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
              <span>ADMIN SECRETARIAT CONSOLE: High-privilege access for managing national education directories, scholarships, and exam schedules.</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-amber-200 text-amber-900 font-mono font-bold uppercase text-[10px]">Secure Level 5</span>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
            <button onClick={() => setAdminSubTab('directory')} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${adminSubTab === 'directory' ? 'bg-[#004B23] text-white' : 'bg-slate-100 text-slate-700'}`}>Directory & Course Management</button>
            <button onClick={() => setAdminSubTab('roles')} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${adminSubTab === 'roles' ? 'bg-[#004B23] text-white' : 'bg-slate-100 text-slate-700'}`}>Role Management & Permissions</button>
            <button onClick={() => setAdminSubTab('logs')} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${adminSubTab === 'logs' ? 'bg-[#004B23] text-white' : 'bg-slate-100 text-slate-700'}`}>System Audit Logs</button>
            <button onClick={() => setAdminSubTab('backup')} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${adminSubTab === 'backup' ? 'bg-[#004B23] text-white' : 'bg-slate-100 text-slate-700'}`}>Backup & Restore</button>
          </div>

          {adminSubTab === 'directory' && (
            <div className="space-y-4 text-xs">
              <h4 className="font-bold text-sm text-slate-900">Education, Directory & Exam Record Operations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
                  <div className="font-bold text-[#004B23]">Add / Edit College Record</div>
                  <p className="text-slate-500">Insert new NMC/AICTE accredited college into the master 19-stream directory.</p>
                  <button onClick={() => alert('Opening College Record Editor modal...')} className="w-full py-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#004B23]">+ Add College</button>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
                  <div className="font-bold text-[#004B23]">Update Exam Dates & Cut-offs</div>
                  <p className="text-slate-500">Modify admit card download links, preliminary results, and expected cut-off marks.</p>
                  <button onClick={() => alert('Opening Exam Schedule Editor...')} className="w-full py-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#004B23]">Edit Exam Timelines</button>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
                  <div className="font-bold text-[#004B23]">Publish Scholarship Notification</div>
                  <p className="text-slate-500">Broadcast NSP or trust scholarship scheme updates to all registered student dashboards.</p>
                  <button onClick={() => alert('Opening Scholarship Broadcast tool...')} className="w-full py-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#004B23]">Broadcast Alert</button>
                </div>
              </div>
            </div>
          )}

          {adminSubTab === 'roles' && (
            <div className="space-y-4 text-xs">
              <h4 className="font-bold text-sm text-slate-900">Role Management & Administrative Access</h4>
              <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden border border-slate-200">
                <thead className="bg-slate-100 font-bold text-slate-700">
                  <tr><th className="p-3">Administrator Name</th><th className="p-3">Assigned Role</th><th className="p-3">Permissions Scope</th><th className="p-3">Action</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="p-3 font-semibold">Dr. Ayesha Siddiqui</td><td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">Medical Nodal Officer</span></td><td className="p-3">NMC Medical Directory & Counseling</td><td className="p-3"><button onClick={() => alert('Permissions updated')} className="text-blue-600 font-bold">Edit</button></td></tr>
                  <tr><td className="p-3 font-semibold">Er. Imran Khan</td><td className="p-3"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-bold">Technical Officer</span></td><td className="p-3">AICTE Engineering & ITI Streams</td><td className="p-3"><button onClick={() => alert('Permissions updated')} className="text-blue-600 font-bold">Edit</button></td></tr>
                  <tr><td className="p-3 font-semibold">Adv. Shabana Anjum</td><td className="p-3"><span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded font-bold">Legal & Rights Admin</span></td><td className="p-3">Law Directory & Constitutional Rights</td><td className="p-3"><button onClick={() => alert('Permissions updated')} className="text-blue-600 font-bold">Edit</button></td></tr>
                </tbody>
              </table>
            </div>
          )}

          {adminSubTab === 'logs' && (
            <div className="space-y-3 text-xs font-mono bg-slate-900 text-emerald-400 p-4 rounded-2xl h-48 overflow-y-auto">
              <div>[2026-07-04 12:15:02] SYNC: NMC Medical Seat Matrix synchronized with Ministry of Health DB.</div>
              <div>[2026-07-04 11:42:18] AUTH: Dr. Ayesha Siddiqui updated NEET UG counseling cut-off rank analyzer.</div>
              <div>[2026-07-04 10:19:55] CRON: NSP Maulana Azad Fellowship deadline reminder sent to 1,420 students.</div>
              <div>[2026-07-04 09:05:12] DB_BACKUP: Daily snapshot of 3,500+ college records backed up to Cloud Storage.</div>
            </div>
          )}

          {adminSubTab === 'backup' && (
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-4 max-w-xl mx-auto">
              <Database className="w-10 h-10 text-[#004B23] mx-auto" />
              <h4 className="font-bold text-sm text-slate-900">Database Backup & Recovery Services</h4>
              <p className="text-xs text-slate-500">Create instant JSON/SQL snapshots of all education directories, scholarships, and exam calendars.</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => alert('Full database backup archive created successfully! (education_backup_20260704.sql)')} className="px-5 py-2.5 bg-[#004B23] text-white text-xs font-bold rounded-xl shadow cursor-pointer">Create Snapshot Backup</button>
                <button onClick={() => alert('Select backup file to restore system state...')} className="px-5 py-2.5 bg-slate-800 text-white text-xs font-bold rounded-xl shadow cursor-pointer">Restore from Archive</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
