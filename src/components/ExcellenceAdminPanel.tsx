import React, { useState } from 'react';
import { AchieverProfile, AchieverCategory, MentorshipRequest, detectCategoryTier, detectProfessionTag, formatDriveUrl } from '../data/hallOfExcellenceData';
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
  Send,
  Phone,
  MapPin,
  GraduationCap,
  Star
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

  // Form Section Tab State
  const [formSection, setFormSection] = useState<'personal' | 'contact' | 'location' | 'education' | 'career' | 'achievements' | 'special'>('personal');

  // Personal Info
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [dob, setDob] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Married');
  const [nationality, setNationality] = useState('Indian');
  const [religion, setReligion] = useState('Islam');
  const [bloodGroup, setBloodGroup] = useState('B+');
  const [biography, setBiography] = useState('');
  const [motivationalMsg, setMotivationalMsg] = useState('');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80');
  const [coverPhotoUrl, setCoverPhotoUrl] = useState('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&auto=format&fit=crop&q=80');

  // Contact Details
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');

  // Location
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('Rajasthan');
  const [district, setDistrict] = useState('Jaipur');
  const [city, setCity] = useState('Jaipur');
  const [village, setVillage] = useState('');
  const [address, setAddress] = useState('');

  // Education
  const [highestQualification, setHighestQualification] = useState('Post Graduate');
  const [degree, setDegree] = useState('M.D. / M.S.');
  const [specialization, setSpecialization] = useState('General Medicine');
  const [university, setUniversity] = useState('SMS Medical College / Rajasthan University');
  const [college, setCollege] = useState('SMS Medical College');
  const [passingYear, setPassingYear] = useState('2015');
  const [additionalQualifications, setAdditionalQualifications] = useState('');
  const [certifications, setCertifications] = useState('');

  // Career
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [organization, setOrganization] = useState('');
  const [employmentType, setEmploymentType] = useState<'Government' | 'Private' | 'Business' | 'NGO' | 'Self Employed' | 'Retired'>('Government');
  const [yearsExperience, setYearsExperience] = useState('10');
  const [careerSummary, setCareerSummary] = useState('');

  // Achievements
  const [majorAchievement, setMajorAchievement] = useState('');
  const [awards, setAwards] = useState('');
  const [nationalAwards, setNationalAwards] = useState('');
  const [internationalAwards, setInternationalAwards] = useState('');
  const [govtRecognition, setGovtRecognition] = useState('');
  const [certificates, setCertificates] = useState('');
  const [publications, setPublications] = useState('');
  const [patents, setPatents] = useState('');
  const [researchPapers, setResearchPapers] = useState('');
  const [projects, setProjects] = useState('');
  const [mediaCoverage, setMediaCoverage] = useState('');

  // Special Recognition Tags & Manual Override
  const [specialTags, setSpecialTags] = useState<string[]>([]);
  const [manualTier, setManualTier] = useState<string>('auto');
  const [manualProfession, setManualProfession] = useState<string>('auto');

  // Quick Mentor, Govt, Overseas Toggles
  const [isMentor, setIsMentor] = useState(true);
  const [isGovt, setIsGovt] = useState(true);
  const [isOverseas, setIsOverseas] = useState(false);
  const [categoryId, setCategoryId] = useState('doctors');

  // New Category form state
  const [catNameEn, setCatNameEn] = useState('');
  const [catNameHi, setCatNameHi] = useState('');
  const [catNameUr, setCatNameUr] = useState('');
  const [catIcon, setCatIcon] = useState('Award');
  const [catDesc, setCatDesc] = useState('');

  // AI Auto Detection Engine Compute
  const combinedText = `${designation} ${department} ${organization} ${specialTags.join(' ')} ${categoryId}`;
  const autoDetectedTier = detectCategoryTier(designation, combinedText, categoryId);
  const autoDetectedProfession = detectProfessionTag(designation, combinedText, categoryId);

  const activeTier = manualTier === 'auto' ? autoDetectedTier : manualTier;
  const activeProfession = manualProfession === 'auto' ? autoDetectedProfession : manualProfession;

  // Auto Numbering / Rank Calculation
  const tierAchieversCount = achievers.filter(a => {
    const t = a.categoryTier || detectCategoryTier(a.designation, a.occupation, a.categoryId);
    return t === activeTier;
  }).length;
  const autoProfileNumber = `#${String(tierAchieversCount + 1).padStart(3, '0')}`;

  const toggleSpecialTag = (tag: string) => {
    setSpecialTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const handleCreateAchiever = (e: React.FormEvent) => {
    e.preventDefault();
    const newProfile: AchieverProfile = {
      id: `ach-${Date.now()}`,
      name: name || 'Distinguished Member',
      fatherName,
      gender,
      dob,
      nativePlace: village || city || 'Jaipur',
      currentCity: city || 'Jaipur',
      state: state || 'Rajasthan',
      district,
      country: country || 'India',
      occupation: activeProfession || designation || 'Distinguished Professional',
      categoryId,
      designation: designation || 'Senior Officer / Professional',
      organization: organization || 'Government / Corporate Sector',
      qualification: highestQualification || 'Post Graduate / Professional Degree',
      university: university || 'Recognized University',
      yearOfAchievement: parseInt(passingYear) || 2025,
      careerJourney: {
        en: careerSummary || biography || 'Dedicated professional serving with utmost distinction.',
        hi: careerSummary || biography || 'प्रतिष्ठित पेशेवर।',
        ur: careerSummary || biography || 'نمایاں خدمات۔'
      },
      biography: {
        en: biography || 'A proud member of the community.',
        hi: biography || 'समुदाय का गर्व।',
        ur: biography || 'برادری का फखर।'
      },
      majorAchievements: majorAchievement ? [majorAchievement] : ['Recognized for professional excellence and community service'],
      awardsHonors: awards ? awards.split(',').map(s => s.trim()) : ['Community Pride Award'],
      socialContributions: { en: 'Contributes regularly to education and welfare.', hi: 'शिक्षा और कल्याण में योगदान।', ur: 'تعلیم اور فلاح میں تعاون۔' },
      inspirationalMessage: { en: 'Hard work and honesty will take you to the top.', hi: 'कड़ी मेहनत और ईमानदारी आपको शीर्ष पर ले जाएगी।', ur: 'محنت اور دیانتداری آپ کو بلندی پر لے جائے گی۔' },
      careerAdvice: { en: 'Stay focused on your studies and build discipline.', hi: 'अपनी पढ़ाई पर ध्यान केंद्रित रखें।', ur: 'اپنی تعلیم پر توجہ دیں۔' },
      languagesKnown: ['Hindi', 'English', 'Urdu'],
      expertise: [activeProfession, 'Leadership', 'Mentorship'],
      contactPermission: true,
      email: email || 'member@rangrezcommunity.org',
      phone,
      whatsapp,
      website,
      linkedin,
      socialMedia: facebook || instagram || youtube,
      categoryTier: activeTier as any,
      isMentor,
      isVerified: true,
      isFeatured: false,
      isGovt: employmentType === 'Government' || isGovt,
      isOverseas: country !== 'India' || isOverseas,
      photoUrl: formatDriveUrl(photoUrl) || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      badges: [
        activeProfession,
        autoProfileNumber,
        ...specialTags,
        isGovt ? '👮 Govt Service' : '💼 Professional',
        isMentor ? '⭐ Mentor' : '🤝 Volunteer'
      ]
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
                            alt={ach.name} 
                            name={ach.name}
                            designation={ach.designation}
                            badge={ach.organization || 'Hall of Excellence'}
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden border border-gray-100">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#004B23] to-[#002B14] text-white flex items-center justify-between shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏆</span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-wide">Add Hall of Excellence Profile</h3>
                </div>
                <p className="text-xs text-emerald-200 mt-1">
                  System automatically auto-categorizes tier, badges, profile rank, and profession tag in real time.
                </p>
              </div>
              <button 
                onClick={() => setShowAddModal(false)} 
                className="p-2 hover:bg-white/10 rounded-full transition cursor-pointer text-white/80 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* AI Real-time Auto Categorization Live Bar */}
            <div className="bg-emerald-950 text-white p-3.5 px-6 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-emerald-800 shrink-0">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span>AI Auto Engine Live:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-extrabold text-[11px]">
                <div className="bg-emerald-900/80 px-2.5 py-1 rounded-lg border border-emerald-700/60">
                  Tier: <span className="text-yellow-300">{activeTier}</span>
                </div>
                <div className="bg-emerald-900/80 px-2.5 py-1 rounded-lg border border-emerald-700/60">
                  Tag: <span className="text-emerald-200">{activeProfession}</span>
                </div>
                <div className="bg-emerald-900/80 px-2.5 py-1 rounded-lg border border-emerald-700/60">
                  Rank: <span className="text-amber-300 font-mono">{autoProfileNumber}</span>
                </div>
              </div>
            </div>

            {/* Form Section Tabs */}
            <div className="bg-slate-100 px-4 pt-3 flex items-center gap-1 overflow-x-auto border-b border-gray-200 shrink-0 text-xs font-black no-scrollbar">
              {[
                { id: 'personal', label: '👤 Personal', icon: User },
                { id: 'contact', label: '📞 Contact', icon: Phone },
                { id: 'location', label: '📍 Location', icon: MapPin },
                { id: 'education', label: '🎓 Education', icon: GraduationCap },
                { id: 'career', label: '💼 Career', icon: Briefcase },
                { id: 'achievements', label: '🏆 Achievements', icon: Award },
                { id: 'special', label: '⭐ Special Recognition', icon: Star },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFormSection(tab.id as any)}
                  className={`px-3.5 py-2.5 rounded-t-xl transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer border-t border-x ${
                    formSection === tab.id
                      ? 'bg-white text-[#004B23] border-gray-300 border-b-transparent shadow-xs font-black'
                      : 'bg-transparent text-gray-600 border-transparent hover:bg-slate-200/70'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Form Form Body */}
            <form onSubmit={handleCreateAchiever} className="flex flex-col flex-1 overflow-y-auto">
              <div className="p-6 sm:p-8 space-y-6 text-xs text-gray-800 flex-1">
                {/* 1. PERSONAL INFORMATION */}
                {formSection === 'personal' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-gray-200 pb-2 flex items-center justify-between">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase tracking-wide">1. Personal Information</h4>
                      <span className="text-[10px] text-gray-400 font-bold">* Required fields</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block font-extrabold text-gray-700 mb-1">Full Name with Prefix *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Dr. Salman Ahmed Rangrez / Er. Javed Khan"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Gender *</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value as any)}
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Father's Name</label>
                        <input
                          type="text"
                          value={fatherName}
                          onChange={(e) => setFatherName(e.target.value)}
                          placeholder="Father's Name"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Mother's Name</label>
                        <input
                          type="text"
                          value={motherName}
                          onChange={(e) => setMotherName(e.target.value)}
                          placeholder="Mother's Name"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Marital Status</label>
                        <select
                          value={maritalStatus}
                          onChange={(e) => setMaritalStatus(e.target.value)}
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        >
                          <option value="Married">Married</option>
                          <option value="Unmarried">Unmarried</option>
                          <option value="Single">Single</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Blood Group</label>
                        <select
                          value={bloodGroup}
                          onChange={(e) => setBloodGroup(e.target.value)}
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        >
                          {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(b => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-700 mb-1">Profile Photo URL *</label>
                        <input
                          type="url"
                          required
                          value={photoUrl}
                          onChange={(e) => setPhotoUrl(e.target.value)}
                          placeholder="https://..."
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs font-mono"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-700 mb-1">Biography / Personal Journey Summary</label>
                        <textarea
                          rows={3}
                          value={biography}
                          onChange={(e) => setBiography(e.target.value)}
                          placeholder="Provide a detailed biography or summary of the achiever's life and service..."
                          className="w-full p-3 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-700 mb-1">Motivational / Inspirational Message for Youth</label>
                        <input
                          type="text"
                          value={motivationalMsg}
                          onChange={(e) => setMotivationalMsg(e.target.value)}
                          placeholder="e.g. Work hard with honesty and stay dedicated to education."
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. CONTACT DETAILS */}
                {formSection === 'contact' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase tracking-wide">2. Contact Details</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Mobile Number</label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98290 12345"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">WhatsApp Number</label>
                        <input
                          type="text"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+91 98290 12345"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="doctor@example.com"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Official Website</label>
                        <input
                          type="url"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://..."
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">LinkedIn Profile</label>
                        <input
                          type="text"
                          value={linkedin}
                          onChange={(e) => setLinkedin(e.target.value)}
                          placeholder="https://linkedin.com/in/..."
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Facebook / Social Handle</label>
                        <input
                          type="text"
                          value={facebook}
                          onChange={(e) => setFacebook(e.target.value)}
                          placeholder="facebook.com/..."
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. LOCATION */}
                {formSection === 'location' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase tracking-wide">3. Location & Origin</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="India / UAE / USA"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">State</label>
                        <input
                          type="text"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="Rajasthan / Delhi / Maharashtra"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">District</label>
                        <input
                          type="text"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          placeholder="Jaipur / Nagaur / Jodhpur"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">City / Present Town</label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Jaipur"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Native Village / Ancestral Place</label>
                        <input
                          type="text"
                          value={village}
                          onChange={(e) => setVillage(e.target.value)}
                          placeholder="Native Village / Ancestral Home"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Residential Address</label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Full address..."
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. EDUCATION */}
                {formSection === 'education' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase tracking-wide">4. Academic & Qualifications</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Highest Qualification Degree *</label>
                        <input
                          type="text"
                          required
                          value={highestQualification}
                          onChange={(e) => setHighestQualification(e.target.value)}
                          placeholder="M.D. / M.B.B.S. / LL.M. / Ph.D. / B.Tech"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Specialization / Subject</label>
                        <input
                          type="text"
                          value={specialization}
                          onChange={(e) => setSpecialization(e.target.value)}
                          placeholder="Cardiology / Constitutional Law / AI"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">University / Board</label>
                        <input
                          type="text"
                          value={university}
                          onChange={(e) => setUniversity(e.target.value)}
                          placeholder="AIIMS / IIT / Rajasthan University"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Passing Year</label>
                        <input
                          type="text"
                          value={passingYear}
                          onChange={(e) => setPassingYear(e.target.value)}
                          placeholder="2015"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. CAREER INFORMATION & AI CATEGORIZATION INPUTS */}
                {formSection === 'career' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-gray-200 pb-2 flex items-center justify-between">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase tracking-wide">5. Career & Occupation</h4>
                      <span className="text-emerald-700 font-extrabold text-[11px] bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        ✨ Keywords trigger Tier Engine
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-extrabold text-gray-700 mb-1">Designation / Occupation *</label>
                        <input
                          type="text"
                          required
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          placeholder="e.g. IAS / IPS / Senior Advocate / Chief Scientist / Director"
                          className="w-full px-3.5 py-2 bg-amber-50/50 border border-amber-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs font-bold text-[#0B132B]"
                        />
                      </div>

                      <div>
                        <label className="block font-extrabold text-gray-700 mb-1">Organization / Department *</label>
                        <input
                          type="text"
                          required
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="e.g. High Court / Govt of Rajasthan / AIIMS / ISRO"
                          className="w-full px-3.5 py-2 bg-amber-50/50 border border-amber-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs font-bold text-[#0B132B]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Employment Type</label>
                        <select
                          value={employmentType}
                          onChange={(e) => setEmploymentType(e.target.value as any)}
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        >
                          <option value="Government">Government Service</option>
                          <option value="Private">Private Corporate</option>
                          <option value="Business">Business / Entrepreneur</option>
                          <option value="Self Employed">Self Employed / Practice</option>
                          <option value="NGO">Social / NGO</option>
                          <option value="Retired">Retired Senior Officer</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Category Group</label>
                        <select
                          value={categoryId}
                          onChange={(e) => setCategoryId(e.target.value)}
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        >
                          {categories.map(c => (
                            <option key={c.id} value={c.id}>{c.nameEn}</option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-700 mb-1">Career Journey & Key Posts Held</label>
                        <textarea
                          rows={3}
                          value={careerSummary}
                          onChange={(e) => setCareerSummary(e.target.value)}
                          placeholder="Detail major career milestones, positions held, departments served..."
                          className="w-full p-3 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. ACHIEVEMENTS & AWARDS */}
                {formSection === 'achievements' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase tracking-wide">6. Key Achievements & Awards</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-700 mb-1">Major Headline Achievement</label>
                        <input
                          type="text"
                          value={majorAchievement}
                          onChange={(e) => setMajorAchievement(e.target.value)}
                          placeholder="e.g. Awarded Gold Medal in Surgery / Lead counsel in Landmark Supreme Court Case"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-700 mb-1">Honors & Awards Received (comma separated)</label>
                        <input
                          type="text"
                          value={awards}
                          onChange={(e) => setAwards(e.target.value)}
                          placeholder="e.g. Padma Awardee, State Excellence Award, National Health Icon 2024"
                          className="w-full px-3.5 py-2 bg-slate-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004B23] focus:outline-none text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. SPECIAL RECOGNITION & MANUAL OVERRIDE ENGINE */}
                {formSection === 'special' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="border-b border-gray-200 pb-2 flex items-center justify-between">
                      <h4 className="font-black text-[#0B132B] text-sm uppercase tracking-wide">7. Special Badges & Manual Tier Overrides</h4>
                      <span className="text-amber-800 font-bold text-[10px] bg-amber-100 px-2 py-0.5 rounded-full">
                        Admin Override Tools
                      </span>
                    </div>

                    {/* Special Recognition Chips */}
                    <div>
                      <label className="block font-extrabold text-gray-800 mb-2">Assign Special Recognition Tags:</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          '🏛️ IAS Officer',
                          '👮 IPS Officer',
                          '⚖️ High Court Judge',
                          '🩺 Padma Awardee',
                          '🔬 Senior Scientist',
                          '🎖️ Colonel / Defense',
                          '📜 District Magistrate',
                          '🌐 Global CEO',
                          '👑 Lifetime Legend',
                          '⭐ Community Patron'
                        ].map(tag => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => toggleSpecialTag(tag)}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer border ${
                              specialTags.includes(tag)
                                ? 'bg-[#004B23] text-white border-[#004B23] shadow-xs'
                                : 'bg-slate-100 text-gray-700 border-gray-200 hover:bg-slate-200'
                            }`}
                          >
                            {tag} {specialTags.includes(tag) && '✓'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Manual Tier Override Selector */}
                    <div className="p-4 bg-slate-50 border border-gray-200 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-extrabold text-[#0B132B] mb-1">
                          Recognition Tier Classification:
                        </label>
                        <select
                          value={manualTier}
                          onChange={(e) => setManualTier(e.target.value)}
                          className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-xl font-bold text-xs focus:ring-2 focus:ring-[#004B23]"
                        >
                          <option value="auto">✨ Auto Detect: {autoDetectedTier}</option>
                          <option value="Diamond Excellence">💎 Diamond Excellence (IAS, IPS, Judges, Padma)</option>
                          <option value="Platinum Achiever">🏆 Platinum Achiever (Senior Doctors, Advocates, Officers)</option>
                          <option value="Gold Star">⭐ Gold Star (Doctors, Engineers, Lawyers)</option>
                          <option value="Rising Star">🌟 Rising Star (Young Talent, Startups)</option>
                          <option value="Lifetime Legend">👑 Lifetime Legend (Veterans, Service)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-extrabold text-[#0B132B] mb-1">
                          Profession Tag:
                        </label>
                        <select
                          value={manualProfession}
                          onChange={(e) => setManualProfession(e.target.value)}
                          className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-xl font-bold text-xs focus:ring-2 focus:ring-[#004B23]"
                        >
                          <option value="auto">✨ Auto Detect: {autoDetectedProfession}</option>
                          <option value="🏛️ Civil Services">🏛️ Civil Services</option>
                          <option value="⚖️ Judiciary & Law">⚖️ Judiciary & Law</option>
                          <option value="🩺 Medical & Healthcare">🩺 Medical & Healthcare</option>
                          <option value="💻 Engineering & IT">💻 Engineering & IT</option>
                          <option value="💼 Corporate & Business">💼 Corporate & Business</option>
                          <option value="🎓 Higher Education">🎓 Higher Education</option>
                        </select>
                      </div>
                    </div>

                    {/* Quick Toggles */}
                    <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl flex flex-wrap items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer font-extrabold text-xs text-[#004B23]">
                        <input type="checkbox" checked={isMentor} onChange={(e) => setIsMentor(e.target.checked)} className="rounded text-[#004B23] w-4 h-4" />
                        <span>⭐ Available as Community Mentor</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-extrabold text-xs text-[#004B23]">
                        <input type="checkbox" checked={isGovt} onChange={(e) => setIsGovt(e.target.checked)} className="rounded text-[#004B23] w-4 h-4" />
                        <span>👮 Government Service Officer</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-extrabold text-xs text-[#004B23]">
                        <input type="checkbox" checked={isOverseas} onChange={(e) => setIsOverseas(e.target.checked)} className="rounded text-[#004B23] w-4 h-4" />
                        <span>🌍 Overseas NRI Professional</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 px-6 bg-slate-100 border-t border-gray-200 flex items-center justify-between shrink-0">
                <div className="text-[11px] text-gray-500 font-medium hidden sm:block">
                  Current Section: <span className="font-bold text-[#004B23] uppercase">{formSection}</span>
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-[#FFD54A]" />
                    <span>Publish Achiever Profile</span>
                  </button>
                </div>
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
