import React, { useState } from 'react';
import { AchieverProfile, AchieverCategory, MentorshipRequest } from '../data/hallOfExcellenceData';
import { ProfileImage } from './common/ProfileImage';
import {
  ShieldCheck,
  Plus,
  Trash2,
  Edit3,
  Check,
  X,
  Download,
  Upload,
  User,
  Award,
  Briefcase,
  Search,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  HelpCircle,
  Send
} from 'lucide-react';

interface ExcellenceAdminPanelProps {
  achievers: AchieverProfile[];
  categories: AchieverCategory[];
  mentorshipRequests: MentorshipRequest[];
  currentLanguage: 'en' | 'hi' | 'ur';
  onAddAchiever: (achiever: AchieverProfile) => void;
  onDeleteAchiever: (id: string) => void;
  onToggleVerify: (id: string) => void;
  onToggleFeature: (id: string) => void;
  onAddCategory: (category: AchieverCategory) => void;
  onUpdateRequestStatus: (id: string, status: 'approved' | 'rejected') => void;
}

const ExcellenceAdminPanel: React.FC<ExcellenceAdminPanelProps> = ({
  achievers,
  categories,
  mentorshipRequests,
  currentLanguage,
  onAddAchiever,
  onDeleteAchiever,
  onToggleVerify,
  onToggleFeature,
  onAddCategory,
  onUpdateRequestStatus
}) => {
  const [adminTab, setAdminTab] = useState<'achievers' | 'requests' | 'categories' | 'export'>('achievers');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddCatModal, setShowAddCatModal] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  // New Achiever form state
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [organization, setOrganization] = useState('');
  const [categoryId, setCategoryId] = useState('doctors');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [qualification, setQualification] = useState('');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80');
  const [isMentor, setIsMentor] = useState(true);
  const [isGovt, setIsGovt] = useState(true);
  const [isOverseas, setIsOverseas] = useState(false);
  const [biography, setBiography] = useState('');

  // New Category form state
  const [catNameEn, setCatNameEn] = useState('');
  const [catNameHi, setCatNameHi] = useState('');
  const [catNameUr, setCatNameUr] = useState('');
  const [catIcon, setCatIcon] = useState('Award');
  const [catDesc, setCatDesc] = useState('');

  const handleCreateAchiever = (e: React.FormEvent) => {
    e.preventDefault();
    const newProfile: AchieverProfile = {
      id: `ach-${Date.now()}`,
      name,
      gender: 'Male',
      nativePlace: city || 'New Delhi',
      currentCity: city || 'New Delhi',
      state: state || 'Delhi',
      country: isOverseas ? 'United States' : 'India',
      occupation: designation || 'Distinguished Professional',
      categoryId,
      designation: designation || 'Senior Member',
      organization: organization || 'Government / Corporate Sector',
      qualification: qualification || 'Post Graduate / Degree Holder',
      university: 'Recognized University',
      yearOfAchievement: 2025,
      careerJourney: { en: biography || 'Dedicated professional serving with distinction.', hi: biography || 'प्रतिष्ठित पेशेवर।', ur: biography || 'نمایاں خدمات۔' },
      biography: { en: biography || 'A proud member of the Rangrez community.', hi: biography || 'रंगरेज समुदाय का गर्व।', ur: biography || 'برادری کا فخر۔' },
      majorAchievements: ['Recognized for professional excellence and community service'],
      awardsHonors: ['Community Pride Award (2025)'],
      socialContributions: { en: 'Contributes regularly to education and welfare.', hi: 'शिक्षा और कल्याण में योगदान।', ur: 'تعلیم اور فلاح میں تعاون۔' },
      inspirationalMessage: { en: 'Hard work and honesty will take you to the top.', hi: 'कड़ी मेहनत और ईमानदारी आपको शीर्ष पर ले जाएगी।', ur: 'محنت اور دیانتداری آپ کو بلندی پر لے جائے گی۔' },
      careerAdvice: { en: 'Stay focused on your studies and build discipline.', hi: 'अपनी पढ़ाई पर ध्यान केंद्रित रखें।', ur: 'اپنی تعلیم پر توجہ دیں۔' },
      languagesKnown: ['Hindi', 'English', 'Urdu'],
      expertise: ['Professional Leadership', 'Community Mentorship'],
      contactPermission: true,
      email: 'member@rangrezcommunity.org',
      isMentor,
      isVerified: true,
      isFeatured: false,
      isGovt,
      isOverseas,
      photoUrl,
      badges: [isGovt ? '👮 Govt Officer' : '💼 Professional', isMentor ? '⭐ Mentor' : '🤝 Volunteer']
    };
    onAddAchiever(newProfile);
    setShowAddModal(false);
    // Reset
    setName('');
    setDesignation('');
    setOrganization('');
  };

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const newCat: AchieverCategory = {
      id: `cat-${Date.now()}`,
      nameEn: catNameEn || 'New Category',
      nameHi: catNameHi || 'नई श्रेणी',
      nameUr: catNameUr || 'نئی زمرہ',
      icon: catIcon,
      count: 1,
      descriptionEn: catDesc || 'Distinguished professionals',
      descriptionHi: catDesc || 'प्रतिष्ठित पेशेवर',
      descriptionUr: catDesc || 'نمایاں ماہرین'
    };
    onAddCategory(newCat);
    setShowAddCatModal(false);
    setCatNameEn('');
    setCatNameHi('');
    setCatNameUr('');
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ achievers, categories, mentorshipRequests }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `rangrez_hall_of_excellence_report_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 3000);
  };

  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,ID,Name,Designation,Organization,Category,City,State,Verified,Mentor\n";
    achievers.forEach(a => {
      csvContent += `"${a.id}","${a.name}","${a.designation}","${a.organization}","${a.categoryId}","${a.currentCity}","${a.state}","${a.isVerified}","${a.isMentor}"\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `rangrez_achievers_directory_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 3000);
  };

  const filteredAchievers = achievers.filter(a =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden animate-fadeIn">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#F4C430] text-[#0B132B] flex items-center justify-center font-black text-xl shadow-lg shrink-0">
            ⚙️
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{currentLanguage === 'en' ? 'Administrative Portal' : 'प्रशासनिक पोर्टल'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              {currentLanguage === 'en' ? 'Hall of Excellence Admin Control' : 'गौरवशाली विभूति एडमिन कंट्रोल'}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] font-black text-xs uppercase tracking-wider rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{currentLanguage === 'en' ? 'Add New Achiever' : 'नई विभूति जोड़ें'}</span>
          </button>
          <button
            onClick={() => setShowAddCatModal(true)}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Create Profession' : 'नया पेशा बनाएं'}</span>
          </button>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex border-b border-gray-200 bg-slate-50 px-4 sm:px-6 overflow-x-auto">
        <button
          onClick={() => setAdminTab('achievers')}
          className={`py-3.5 px-5 text-xs sm:text-sm font-bold border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            adminTab === 'achievers'
              ? 'border-[#004B23] text-[#004B23] bg-white shadow-xs font-black'
              : 'border-transparent text-gray-600 hover:text-[#004B23]'
          }`}
        >
          <User className="w-4 h-4 text-[#004B23]" />
          <span>Manage Achievers ({achievers.length})</span>
        </button>
        <button
          onClick={() => setAdminTab('requests')}
          className={`py-3.5 px-5 text-xs sm:text-sm font-bold border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            adminTab === 'requests'
              ? 'border-[#004B23] text-[#004B23] bg-white shadow-xs font-black'
              : 'border-transparent text-gray-600 hover:text-[#004B23]'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Mentorship Requests ({mentorshipRequests.length})</span>
          {mentorshipRequests.filter(r => r.status === 'pending').length > 0 && (
            <span className="bg-red-500 text-white font-black text-[10px] px-1.5 py-0.5 rounded-full">
              {mentorshipRequests.filter(r => r.status === 'pending').length}
            </span>
          )}
        </button>
        <button
          onClick={() => setAdminTab('categories')}
          className={`py-3.5 px-5 text-xs sm:text-sm font-bold border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            adminTab === 'categories'
              ? 'border-[#004B23] text-[#004B23] bg-white shadow-xs font-black'
              : 'border-transparent text-gray-600 hover:text-[#004B23]'
          }`}
        >
          <Briefcase className="w-4 h-4 text-blue-600" />
          <span>Professions & Categories ({categories.length})</span>
        </button>
        <button
          onClick={() => setAdminTab('export')}
          className={`py-3.5 px-5 text-xs sm:text-sm font-bold border-b-2 transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            adminTab === 'export'
              ? 'border-[#004B23] text-[#004B23] bg-white shadow-xs font-black'
              : 'border-transparent text-gray-600 hover:text-[#004B23]'
          }`}
        >
          <Download className="w-4 h-4 text-emerald-600" />
          <span>Export Reports & Data</span>
        </button>
      </div>

      {/* Tab Body */}
      <div className="p-6 sm:p-8">
        {adminTab === 'achievers' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, organization..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                />
              </div>
              <div className="text-xs font-bold text-gray-500">
                Showing {filteredAchievers.length} of {achievers.length} Achiever Profiles
              </div>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-[#0B132B] text-xs font-black uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4">Profile & Name</th>
                    <th className="p-4">Profession & Org</th>
                    <th className="p-4">City / State</th>
                    <th className="p-4 text-center">Verified?</th>
                    <th className="p-4 text-center">Featured?</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {filteredAchievers.map((ach) => (
                    <tr key={ach.id} className="hover:bg-slate-50 transition">
                      <td className="p-4">
                        <div className="flex items-center gap-4">
                          <ProfileImage 
                            src={ach.photoUrl} 
                            alt="" 
                            size="md"
                            containerClassName="rounded-xl border border-gray-200"
                          />
                          <div>
                            <div className="font-extrabold text-[#0B132B]">{ach.name}</div>
                            <div className="text-[10px] font-mono text-gray-400">ID: {ach.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-[#004B23]">{ach.designation}</div>
                        <div className="text-xs text-gray-600">{ach.organization}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-gray-800">{ach.currentCity}</div>
                        <div className="text-xs text-gray-400">{ach.state}</div>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => onToggleVerify(ach.id)}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                            ach.isVerified
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                          title="Click to toggle verified status"
                        >
                          {ach.isVerified ? '✅ Verified' : '❌ Unverified'}
                        </button>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => onToggleFeature(ach.id)}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer ${
                            ach.isFeatured
                              ? 'bg-amber-100 text-amber-800 border border-amber-300'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                          title="Click to toggle featured status"
                        >
                          {ach.isFeatured ? '⭐ Featured' : '☆ Standard'}
                        </button>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => onDeleteAchiever(ach.id)}
                            className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition cursor-pointer"
                            title="Delete Achiever Profile"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {adminTab === 'requests' && (
          <div className="space-y-4">
            <h3 className="text-base font-black text-[#0B132B] uppercase tracking-wider">
              Mentorship Guidance Requests from Students
            </h3>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-[#0B132B] text-xs font-black uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4">Student Name & Age</th>
                    <th className="p-4">Goal & Qualification</th>
                    <th className="p-4">Target Mentor</th>
                    <th className="p-4">Question / Doubt</th>
                    <th className="p-4 text-center">Status</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {mentorshipRequests.map((req) => (
                    <tr key={req.id} className="hover:bg-slate-50 transition">
                      <td className="p-4">
                        <div className="font-bold text-[#0B132B]">{req.studentName} ({req.studentAge}y)</div>
                        <div className="text-xs text-gray-500">{req.email} • {req.phone}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-[#004B23]">{req.careerGoal}</div>
                        <div className="text-xs text-gray-600">{req.qualification}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-[#0B132B]">{req.mentorName}</div>
                      </td>
                      <td className="p-4 max-w-xs">
                        <p className="text-xs text-gray-700 bg-slate-50 p-2 rounded-lg border border-gray-200">
                          "{req.question}"
                        </p>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold uppercase ${
                          req.status === 'approved' ? 'bg-emerald-100 text-emerald-800' :
                          req.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {req.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {req.status === 'pending' && (
                            <>
                              <button
                                onClick={() => onUpdateRequestStatus(req.id, 'approved')}
                                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                                title="Approve and Forward to Mentor"
                              >
                                <Check className="w-3.5 h-3.5" /> Approve
                              </button>
                              <button
                                onClick={() => onUpdateRequestStatus(req.id, 'rejected')}
                                className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                              >
                                <X className="w-3.5 h-3.5" /> Reject
                              </button>
                            </>
                          )}
                          {req.status !== 'pending' && (
                            <span className="text-xs text-gray-400 italic font-medium">Processed</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {adminTab === 'categories' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-black text-[#0B132B] uppercase tracking-wider">
                Active Professions & Categories ({categories.length})
              </h3>
              <button
                onClick={() => setShowAddCatModal(true)}
                className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4 text-[#FFD54A]" /> Create New Category
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <div key={cat.id} className="p-4 rounded-2xl border border-gray-200 bg-slate-50/60 flex items-center justify-between">
                  <div>
                    <div className="font-black text-[#0B132B] text-base">{cat.nameEn}</div>
                    <div className="text-xs text-[#004B23] font-bold mt-0.5">{cat.nameHi} • {cat.nameUr}</div>
                    <div className="text-[11px] text-gray-500 mt-1">{cat.descriptionEn}</div>
                  </div>
                  <div className="text-center bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-2xs shrink-0">
                    <div className="text-lg font-black text-[#004B23]">{cat.count}</div>
                    <div className="text-[9px] font-extrabold uppercase text-gray-400">Achievers</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {adminTab === 'export' && (
          <div className="space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 bg-[#004B23] text-white text-xs font-black px-3 py-1 rounded-full">
                  <Download className="w-3.5 h-3.5 text-[#FFD54A]" />
                  <span>Data Backup & Reporting</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B132B]">
                  Export Complete Achievers Directory
                </h3>
                <p className="text-sm text-gray-600 max-w-lg">
                  Download the complete list of 148+ community achievers, mentors, and category classifications in JSON or CSV format for community census or records.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={handleExportCSV}
                  className="px-6 py-3.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#FFD54A]" />
                  <span>Download CSV (Excel)</span>
                </button>
                <button
                  onClick={handleExportJSON}
                  className="px-6 py-3.5 bg-[#F4C430] hover:bg-amber-400 text-[#0B132B] text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download JSON Report</span>
                </button>
              </div>
            </div>

            {exportSuccess && (
              <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-2xl flex items-center gap-3 text-emerald-800 font-bold text-sm animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Report successfully exported and downloaded to your device!</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add New Achiever Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-xl font-black text-[#0B132B] flex items-center gap-2">
                <Plus className="w-6 h-6 text-[#004B23]" /> Add New Achiever Profile
              </h3>
              <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateAchiever} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name with Prefix (e.g. Dr. / Shri / Adv.) *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Salman Ahmed Rangrez"
                  className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Designation / Title *</label>
                  <input
                    type="text"
                    required
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="e.g. Senior Medical Officer"
                    className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Organization / Department *</label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. AIIMS / High Court / ISRO"
                    className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Category / Profession *</label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.nameEn}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">City & State *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Jaipur, Rajasthan"
                    className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Short Biography & Journey *</label>
                <textarea
                  rows={2}
                  value={biography}
                  onChange={(e) => setBiography(e.target.value)}
                  placeholder="Summarize career achievement..."
                  className="w-full p-3 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-gray-700">
                  <input type="checkbox" checked={isMentor} onChange={(e) => setIsMentor(e.target.checked)} className="rounded text-[#004B23]" />
                  <span>✅ Available as Mentor</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-gray-700">
                  <input type="checkbox" checked={isGovt} onChange={(e) => setIsGovt(e.target.checked)} className="rounded text-[#004B23]" />
                  <span>👮 Government Service</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-gray-700">
                  <input type="checkbox" checked={isOverseas} onChange={(e) => setIsOverseas(e.target.checked)} className="rounded text-[#004B23]" />
                  <span>🌍 Overseas NRI</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow cursor-pointer"
                >
                  Save Achiever
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Profession Category Modal */}
      {showAddCatModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
              <h3 className="text-lg font-black text-[#0B132B]">Create New Profession Category</h3>
              <button onClick={() => setShowAddCatModal(false)} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateCategory} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Category Name (English) *</label>
                <input
                  type="text"
                  required
                  value={catNameEn}
                  onChange={(e) => setCatNameEn(e.target.value)}
                  placeholder="e.g. Architects & Designers"
                  className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Category Name (Hindi) *</label>
                <input
                  type="text"
                  required
                  value={catNameHi}
                  onChange={(e) => setCatNameHi(e.target.value)}
                  placeholder="e.g. वास्तुकार एवं डिजाइनर"
                  className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Category Name (Urdu) *</label>
                <input
                  type="text"
                  required
                  value={catNameUr}
                  onChange={(e) => setCatNameUr(e.target.value)}
                  placeholder="e.g. آرکیٹیکٹس اور ڈیزائنرز"
                  className="w-full px-4 py-2 bg-slate-50 border border-gray-300 rounded-xl"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setShowAddCatModal(false)} className="px-4 py-2 bg-gray-100 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold">Create Profession</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcellenceAdminPanel;
