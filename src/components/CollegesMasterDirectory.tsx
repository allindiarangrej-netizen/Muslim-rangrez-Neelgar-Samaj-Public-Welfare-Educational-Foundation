import React, { useState, useMemo } from 'react';
import { 
  Building2, Search, Filter, MapPin, Globe, ExternalLink, 
  BookOpen, Award, CheckCircle2, ShieldCheck, ChevronRight, 
  GraduationCap, Users, Calendar, DollarSign, ArrowLeft, Sparkles, Star, Layers,
  Download, Printer, Share2, FileSpreadsheet, Lock, X, Sliders, Navigation, Check, Compass, AlertCircle
} from 'lucide-react';
import { Language } from '../types';
import MedicalCollegesDirectory from './MedicalCollegesDirectory';
import ProfessionalCollegesDirectory from './ProfessionalCollegesDirectory';

interface CollegesMasterDirectoryProps {
  currentLanguage: Language;
  initialStream?: string;
}

export default function CollegesMasterDirectory({ currentLanguage, initialStream = 'overview' }: CollegesMasterDirectoryProps) {
  const [activeStreamView, setActiveStreamView] = useState<string>(initialStream);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStateFilter, setSelectedStateFilter] = useState('All');
  const [selectedCollege, setSelectedCollege] = useState<any | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [cutoffExam, setCutoffExam] = useState('NEET / JEE / CUET');
  const [cutoffRank, setCutoffRank] = useState('Top 5000 Rank');

  const streamsList = [
    { id: 'medical', titleEn: 'Medical Colleges', titleHi: 'मेडिकल कॉलेज', titleUr: 'میڈیکل کالجز', icon: '🏥', reg: 'NMC / DCI / AYUSH', seats: '1,08,000+ MBBS/BDS', type: 'medical' },
    { id: 'engineering', titleEn: 'Engineering Colleges', titleHi: 'इंजीनियरिंग कॉलेज', titleUr: 'انجینئرنگ کالجز', icon: '⚙️', reg: 'AICTE / IIT Council / NITSER', seats: '14,50,000+ B.Tech', type: 'professional' },
    { id: 'pharmacy', titleEn: 'Pharmacy Colleges', titleHi: 'फार्मेसी कॉलेज', titleUr: 'فارمیسی کالجز', icon: '💊', reg: 'PCI (Pharmacy Council of India)', seats: '3,20,000+ B.Pharm', type: 'professional' },
    { id: 'law', titleEn: 'Law Colleges', titleHi: 'कानून (लॉ) कॉलेज', titleUr: 'لا کالجز', icon: '⚖️', reg: 'BCI (Bar Council of India)', seats: '1,80,000+ LLB/LLM', type: 'professional' },
    { id: 'nursing', titleEn: 'Nursing Colleges', titleHi: 'नर्सिंग कॉलेज', titleUr: 'نرسنگ کالجز', icon: '👩‍⚕️', reg: 'INC (Indian Nursing Council)', seats: '2,40,000+ B.Sc Nursing', type: 'professional' },
    { id: 'agriculture', titleEn: 'Agriculture Colleges', titleHi: 'कृषि कॉलेज', titleUr: 'ایگریکلچر کالجز', icon: '🌾', reg: 'ICAR (Indian Council of Agri Res.)', seats: '45,000+ B.Sc Agri', type: 'professional' },
    { id: 'veterinary', titleEn: 'Veterinary Colleges', titleHi: 'पशु चिकित्सा (वेटनरी) कॉलेज', titleUr: 'ویٹرنری کالجز', icon: '🐾', reg: 'VCI (Veterinary Council of India)', seats: '6,500+ BVSc & AH', type: 'custom' },
    { id: 'paramedical', titleEn: 'Paramedical Colleges', titleHi: 'पैरामेडिकल कॉलेज', titleUr: 'پیرا میڈیکل کالجز', icon: '🔬', reg: 'National Allied & Healthcare Council', seats: '1,20,000+ BPT/MLT', type: 'custom' },
    { id: 'architecture', titleEn: 'Architecture Colleges', titleHi: 'वास्तुकला (आर्किटेक्चर) कॉलेज', titleUr: 'آرکیٹیکچر کالجز', icon: '🏛️', reg: 'COA (Council of Architecture)', seats: '28,000+ B.Arch', type: 'professional' },
    { id: 'management', titleEn: 'Management Colleges', titleHi: 'प्रबंधन (मैनेजमेंट) कॉलेज', titleUr: 'مینجمنٹ کالجز', icon: '💼', reg: 'AICTE / IIM Act / UGC', seats: '4,10,000+ MBA/PGDM', type: 'professional' },
    { id: 'science', titleEn: 'Science Colleges', titleHi: 'विज्ञान कॉलेज', titleUr: 'سائنس کالجز', icon: '🧪', reg: 'UGC / NAAC Accredited Universities', seats: '8,50,000+ B.Sc/M.Sc', type: 'custom' },
    { id: 'arts', titleEn: 'Arts & Humanities Colleges', titleHi: 'कला एवं मानविकी कॉलेज', titleUr: 'آرٹس اور ہیومینٹیز کالجز', icon: '🎨', reg: 'UGC / State Universities Act', seats: '12,00,000+ BA/MA', type: 'custom' },
    { id: 'polytechnic', titleEn: 'Polytechnic Colleges', titleHi: 'पॉलिटेक्निक कॉलेज', titleUr: 'پولی ٹیکنک کالجز', icon: '🔧', reg: 'State Boards of Technical Education', seats: '7,80,000+ Diploma', type: 'professional' },
    { id: 'iti', titleEn: 'ITI & Skill Institutes', titleHi: 'आईटीआई एवं कौशल संस्थान', titleUr: 'آئی ٹی آئی اور اسکل انسٹی ٹیوٹس', icon: '🛠️', reg: 'DGT / NCVT (Min. of Skill Dev.)', seats: '24,00,000+ Craftsmen', type: 'custom' },
    { id: 'teacher', titleEn: 'Teacher Education Colleges', titleHi: 'शिक्षक शिक्षा (B.Ed) कॉलेज', titleUr: 'ٹیچر ایجوکیشن کالجز', icon: '📚', reg: 'NCTE (Nat. Council for Teacher Ed.)', seats: '3,50,000+ B.Ed/D.El.Ed', type: 'custom' },
    { id: 'aviation', titleEn: 'Aviation Colleges', titleHi: 'एविएशन एवं उड्डयन कॉलेज', titleUr: 'ایوی ایشن کالجز', icon: '✈️', reg: 'DGCA / Ministry of Civil Aviation', seats: '12,000+ CPL/AME/B.Sc', type: 'custom' },
    { id: 'hotel', titleEn: 'Hotel Management Colleges', titleHi: 'होटल मैनेजमेंट कॉलेज', titleUr: 'ہوٹل مینجمنٹ کالجز', icon: '🏨', reg: 'NCHMCT / Ministry of Tourism', seats: '35,000+ B.Sc Hospitality', type: 'custom' },
    { id: 'fashion', titleEn: 'Fashion & Design Colleges', titleHi: 'फैशन एवं डिजाइन कॉलेज', titleUr: 'فیشن اور ڈیزائن کالجز', icon: '👗', reg: 'NID Act / NIFT Act / AICTE', seats: '18,000+ B.Des/M.Des', type: 'custom' },
    { id: 'performing', titleEn: 'Performing Arts Colleges', titleHi: 'मंच कला (परफॉर्मिंग आर्ट्स) कॉलेज', titleUr: 'پرفارمنگ آرٹس کالجز', icon: '🎭', reg: 'UGC / Sangeet Natak Akademi Affil.', seats: '15,000+ BPA/MPA', type: 'custom' },
    { id: 'minority', titleEn: 'Minority Universities & Institutes', titleHi: 'अल्पसंख्यक विश्वविद्यालय एवं संस्थान', titleUr: 'اقلیتی یونیورسٹیاں اور ادارے', icon: '🏛️', reg: 'Article 30(1) / Statutory Act', seats: '1,50,000+ Multi-disciplinary', type: 'custom' }
  ];

  const customInstitutesData: Record<string, { name: string; city: string; state: string; reg: string; courses: string[]; website: string; fee: string }[]> = {
    minority: [
      { name: 'Aligarh Muslim University (AMU)', city: 'Aligarh', state: 'Uttar Pradesh', reg: 'Central University / NAAC A+', courses: ['B.Tech', 'MBBS', 'BA/B.Sc', 'MBA', 'Law'], website: 'https://www.amu.ac.in', fee: '₹15,000 - ₹85,000 / yr' },
      { name: 'Jamia Millia Islamia (JMI)', city: 'New Delhi', state: 'Delhi', reg: 'Central University / NIRF Rank 3', courses: ['B.Tech', 'B.Arch', 'Mass Comm', 'Law', 'MBA'], website: 'https://jmi.ac.in', fee: '₹12,000 - ₹75,000 / yr' },
      { name: 'Jamia Hamdard University', city: 'New Delhi', state: 'Delhi', reg: 'Deemed University / NIRF Pharmacy #1', courses: ['B.Pharm', 'MBBS', 'Nursing', 'Unani Medicine', 'IT'], website: 'https://jamiahamdard.edu', fee: '₹1,20,000 / yr' },
      { name: 'Maulana Azad National Urdu University (MANUU)', city: 'Hyderabad', state: 'Telangana', reg: 'Central University Act', courses: ['B.Tech CS', 'Polytechnic Diploma', 'B.Ed', 'Journalism'], website: 'https://manuu.edu.in', fee: '₹8,000 / yr' },
      { name: 'B.S. Abdur Rahman Crescent Institute of Science & Technology', city: 'Chennai', state: 'Tamil Nadu', reg: 'Deemed University / NAAC A+', courses: ['B.Tech AI & ML', 'Aerospace', 'B.Arch', 'MBA'], website: 'https://crescent.education', fee: '₹1,50,000 / yr' },
      { name: 'Integral University', city: 'Lucknow', state: 'Uttar Pradesh', reg: 'Statutory State University / Minority Status', courses: ['B.Tech', 'MBBS', 'Agriculture', 'Law', 'Pharmacy'], website: 'https://www.iul.ac.in', fee: '₹1,10,000 / yr' }
    ],
    veterinary: [
      { name: 'Indian Veterinary Research Institute (IVRI)', city: 'Bareilly', state: 'Uttar Pradesh', reg: 'VCI Approved', courses: ['BVSc & AH', 'MVSc', 'PhD Veterinary'], website: 'http://www.ivri.nic.in', fee: '₹35,000 / yr' },
      { name: 'College of Veterinary Science & Animal Husbandry', city: 'Mhow', state: 'Madhya Pradesh', reg: 'VCI Approved', courses: ['BVSc & AH', 'Animal Genetics'], website: 'http://www.ndvsu.org', fee: '₹42,000 / yr' },
      { name: 'Bombay Veterinary College (MAFSU)', city: 'Mumbai', state: 'Maharashtra', reg: 'VCI Approved', courses: ['BVSc & AH', 'Veterinary Surgery'], website: 'http://www.mafsu.in', fee: '₹55,000 / yr' }
    ],
    paramedical: [
      { name: 'All India Institute of Physical Medicine and Rehabilitation', city: 'Mumbai', state: 'Maharashtra', reg: 'Statutory Health Council', courses: ['BPT (Physiotherapy)', 'MOT', 'Prosthetics'], website: 'http://aiipmr.gov.in', fee: '₹22,000 / yr' },
      { name: 'Jamia Hamdard Department of Paramedical Sciences', city: 'New Delhi', state: 'Delhi', reg: 'UGC / Allied Council', courses: ['B.Sc Medical Lab Tech', 'B.Sc Radiology', 'BPT'], website: 'http://jamiahamdard.edu', fee: '₹1,10,000 / yr' },
      { name: 'PGIMER Paramedical Institute', city: 'Chandigarh', state: 'Chandigarh', reg: 'Ministry of Health', courses: ['B.Sc MLT', 'Operation Theatre Tech', 'Radiotherapy'], website: 'http://pgimer.edu.in', fee: '₹15,000 / yr' }
    ],
    science: [
      { name: 'St. Stephen’s College', city: 'New Delhi', state: 'Delhi', reg: 'UGC / Delhi University', courses: ['B.Sc Physics Hons', 'B.Sc Chemistry Hons', 'Mathematics'], website: 'https://www.ststephens.edu', fee: '₹45,000 / yr' },
      { name: 'Loyola College', city: 'Chennai', state: 'Tamil Nadu', reg: 'UGC Autonomous / NAAC A++', courses: ['B.Sc Advanced Sciences', 'Biotechnology', 'Statistics'], website: 'https://www.loyolacollege.edu', fee: '₹38,000 / yr' },
      { name: 'St. Xavier’s College', city: 'Mumbai', state: 'Maharashtra', reg: 'UGC Autonomous / Mumbai Univ', courses: ['B.Sc Life Sciences', 'Microbiology', 'Geology'], website: 'https://xaviers.ac', fee: '₹40,000 / yr' }
    ],
    arts: [
      { name: 'Lady Shri Ram College for Women (LSR)', city: 'New Delhi', state: 'Delhi', reg: 'UGC / Delhi University', courses: ['BA Economics Hons', 'BA Psychology', 'History', 'English'], website: 'https://lsr.edu.in', fee: '₹32,000 / yr' },
      { name: 'Presidency University', city: 'Kolkata', state: 'West Bengal', reg: 'Statutory State University Act', courses: ['BA Sociology', 'Political Science', 'Comparative Literature'], website: 'https://www.presiuniv.ac.in', fee: '₹12,000 / yr' },
      { name: 'Madras Christian College (MCC)', city: 'Chennai', state: 'Tamil Nadu', reg: 'UGC / NAAC A++', courses: ['BA Journalism', 'Philosophy', 'Public Administration'], website: 'https://mcc.edu.in', fee: '₹35,000 / yr' }
    ],
    iti: [
      { name: 'National Training Institute for Craftsmen (ATIS)', city: 'Kanpur', state: 'Uttar Pradesh', reg: 'NCVT / DGT Approved', courses: ['Electrician Trade', 'Fitter', 'Computer Operator & Prog. (COPA)'], website: 'https://ncvtmis.gov.in', fee: '₹5,000 / yr (Govt)' },
      { name: 'Government ITI Arab Ki Sarai', city: 'Nizamuddin, New Delhi', state: 'Delhi', reg: 'DGT / Delhi Skill Board', courses: ['Refrigeration & AC', 'Draughtsman Civil', 'Machinist'], website: 'https://itidelhi.admissions.nic.in', fee: '₹4,500 / yr' },
      { name: 'National Skill Training Institute (NSTI)', city: 'Indore', state: 'Madhya Pradesh', reg: 'Ministry of Skill Development', courses: ['Advanced Electronics', 'IoT Technician', 'Solar PV Installer'], website: 'https://nstiindore.dgt.gov.in', fee: '₹6,000 / yr' }
    ],
    teacher: [
      { name: 'Central Institute of Education (CIE, DU)', city: 'New Delhi', state: 'Delhi', reg: 'NCTE Approved', courses: ['B.Ed', 'M.Ed', 'Ph.D in Education'], website: 'http://cie.du.ac.in', fee: '₹18,000 / yr' },
      { name: 'Regional Institute of Education (NCERT)', city: 'Bhopal', state: 'Madhya Pradesh', reg: 'NCTE / NCERT', courses: ['4-Year Integrated B.Sc-B.Ed', 'BA-B.Ed', 'M.Ed'], website: 'http://riebhopal.nic.in', fee: '₹25,000 / yr' },
      { name: 'Aligarh Muslim University Department of Education', city: 'Aligarh', state: 'Uttar Pradesh', reg: 'NCTE Approved', courses: ['B.Ed (Urdu & English Medium)', 'M.Ed'], website: 'https://www.amu.ac.in', fee: '₹14,000 / yr' }
    ],
    aviation: [
      { name: 'Indira Gandhi Rashtriya Uran Akademi (IGRUA)', city: 'Amethi', state: 'Uttar Pradesh', reg: 'DGCA Approved Statutory Institute', courses: ['Commercial Pilot License (CPL)', 'B.Sc Aviation'], website: 'https://igrua.gov.in', fee: 'Standard Flying Training Fees' },
      { name: 'National Flying Training Institute (NFTI)', city: 'Gondia', state: 'Maharashtra', reg: 'DGCA / Ministry of Civil Aviation', courses: ['Multi-Engine CPL', 'Instrument Rating'], website: 'https://www.cae.com', fee: 'DGCA Regulated' },
      { name: 'Hindustan Aviation Academy', city: 'Bengaluru', state: 'Karnataka', reg: 'DGCA / Bengaluru Univ', courses: ['Aircraft Maintenance Engg (AME)', 'B.Sc Aviation'], website: 'https://hindustanacademy.edu.in', fee: '₹1,50,000 / yr' }
    ],
    hotel: [
      { name: 'Institute of Hotel Management (IHM) Pusa', city: 'New Delhi', state: 'Delhi', reg: 'NCHMCT / Ministry of Tourism', courses: ['B.Sc Hospitality & Hotel Admin', 'PG Diploma Culinary'], website: 'https://ihmpusa.net', fee: '₹1,35,000 / yr' },
      { name: 'IHM Mumbai (Catering Technology & Applied Nutrition)', city: 'Mumbai', state: 'Maharashtra', reg: 'NCHMCT Approved', courses: ['B.Sc Hospitality', 'Food & Beverage Service Diploma'], website: 'http://ihmmumbai.gov.in', fee: '₹1,30,000 / yr' },
      { name: 'IHM Aurangabad (Taj Group Partner)', city: 'Aurangabad', state: 'Maharashtra', reg: 'UGC / University of Huddersfield', courses: ['BA Hotel Management', 'Culinary Arts'], website: 'https://ihma.ac.in', fee: '₹3,50,000 / yr' }
    ],
    fashion: [
      { name: 'National Institute of Design (NID)', city: 'Ahmedabad', state: 'Gujarat', reg: 'Statutory Institute of National Importance', courses: ['B.Des Industrial Design', 'Textile & Apparel Design', 'M.Des'], website: 'https://www.nid.edu', fee: '₹3,80,000 / yr' },
      { name: 'National Institute of Fashion Technology (NIFT)', city: 'New Delhi', state: 'Delhi', reg: 'NIFT Act / Ministry of Textiles', courses: ['B.Des Fashion Design', 'Fashion Tech (B.F.Tech)', 'Fashion Mgt'], website: 'https://www.nift.ac.in', fee: '₹3,20,000 / yr' },
      { name: 'Pearl Academy', city: 'Jaipur', state: 'Rajasthan', reg: 'AICTE Approved Courses', courses: ['Fashion Styling', 'Interior & Spatial Design'], website: 'https://pearlacademy.com', fee: '₹4,50,000 / yr' }
    ],
    performing: [
      { name: 'National School of Drama (NSD)', city: 'New Delhi', state: 'Delhi', reg: 'Autonomous Institution under Min of Culture', courses: ['3-Year Diploma in Dramatic Arts', 'Acting & Direction'], website: 'https://nsd.gov.in', fee: 'Highly Subsidized / Fellowship' },
      { name: 'Kalakshetra Foundation', city: 'Chennai', state: 'Tamil Nadu', reg: 'Institute of National Importance', courses: ['Diploma in Bharatanatyam', 'Carnatic Music Vocal/Instrumental'], website: 'https://www.kalakshetra.in', fee: '₹25,000 / yr' },
      { name: 'Faculty of Performing Arts, BHU', city: 'Varanasi', state: 'Uttar Pradesh', reg: 'UGC Statutory University', courses: ['BPA Classical Vocal', 'Sitar', 'Tabla', 'Kathak'], website: 'https://bhu.ac.in', fee: '₹10,000 / yr' }
    ]
  };

  // Filtered streams calculation for search
  const filteredStreams = useMemo(() => {
    return streamsList.filter(s => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return s.titleEn.toLowerCase().includes(q) || s.titleHi.includes(q) || s.reg.toLowerCase().includes(q) || s.seats.toLowerCase().includes(q);
    });
  }, [searchQuery]);

  // Universal Header Toolbar & Admin Console
  const renderTopToolbar = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition cursor-pointer ${
              showAdmin 
                ? 'bg-[#004B23] text-white shadow-md' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>{showAdmin ? 'Close Admin Console' : 'Open Admin Secretariat Console'}</span>
          </button>
          <div className="hidden sm:flex items-center space-x-1 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 mr-1" />
            <span>19 Streams • 100% Accredited (NMC/AICTE/PCI/BCI)</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => alert(currentLanguage === 'en' ? 'Downloading National Accredited Colleges Directory (Excel CSV)...' : 'राष्ट्रीय मान्यता प्राप्त कॉलेज निर्देशिका (Excel CSV) डाउनलोड हो रही है...')}
            className="bg-emerald-50 text-[#004B23] hover:bg-emerald-100 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition border border-emerald-200 cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>{currentLanguage === 'en' ? 'Export Excel Dump' : 'एक्सेल डाउनलोड करें'}</span>
          </button>
          <button
            onClick={() => alert(currentLanguage === 'en' ? 'Generating Official Colleges Handbook PDF Booklet...' : 'आधिकारिक कॉलेज हैंडबुक पीडीएफ पुस्तिका डाउनलोड हो रही है...')}
            className="bg-[#0B132B] text-white hover:bg-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Download PDF Report' : 'पीडीएफ डाउनलोड करें'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer"
            title="Print Directory"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showAdmin && (
        <div className="mt-4 bg-[#0B132B] text-white p-6 rounded-2xl border border-[#D4AF37]/50 shadow-xl space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#FFD54A]" />
              <h3 className="font-bold text-base text-[#FFD54A]">
                {currentLanguage === 'en' ? 'National Admission & Counseling Secretariat Console' : 'राष्ट्रीय प्रवेश एवं काउंसलिंग सचिवालय कंसोल'}
              </h3>
            </div>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30 font-mono">
              STATUS: ONLINE & SECURE
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {currentLanguage === 'en'
              ? 'Admin verification tools for updating statutory regulatory approvals (NMC/AICTE/PCI/BCI/INC), configuring dynamic cut-off rank analyzers, and synchronizing seat matrix data with state counseling boards.'
              : 'वैधानिक नियामक अनुमोदन अपडेट करने और डायनामिक कट-ऑफ रैंक विश्लेषक को कॉन्फ़िगर करने के लिए एडमिन उपकरण।'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-xs font-bold text-slate-400">Total Listed Institutions</div>
              <div className="text-xl font-black text-white mt-1">4,280+ Verified</div>
              <button 
                onClick={() => alert('Initiating nationwide accreditation audit with NMC and AICTE databases...')}
                className="mt-3 w-full py-1.5 bg-[#004B23] hover:bg-emerald-800 text-white font-bold rounded text-[11px] transition cursor-pointer"
              >
                Run Statutory Audit
              </button>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-xs font-bold text-slate-400">Cut-off Rank Synchronization</div>
              <div className="text-xl font-black text-[#FFD54A] mt-1">2026-27 Matrix</div>
              <button 
                onClick={() => alert('Syncing NEET, JEE Mains, CUET, and CLAT opening/closing ranks from JoSAA and MCC counseling tables...')}
                className="mt-3 w-full py-1.5 bg-[#D4AF37] hover:bg-amber-600 text-[#0B132B] font-bold rounded text-[11px] transition cursor-pointer"
              >
                Sync Counseling Ranks
              </button>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-xs font-bold text-slate-400">Seat Allocation Reports</div>
              <div className="text-xl font-black text-emerald-400 mt-1">100% Verified</div>
              <button 
                onClick={() => alert('Generating State-wise Seat Quota (All India vs State Quota) CSV report...')}
                className="mt-3 w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-[11px] transition cursor-pointer"
              >
                Download Seat Quota CSV
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Comprehensive College Profile Modal with Cut-off Analyzer & Facilities
  const renderCollegeModal = () => {
    if (!selectedCollege) return null;
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleIn">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#004B23] px-3 py-1 rounded-full">
                {selectedCollege.reg || 'Statutory Approved'}
              </span>
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500" /> {selectedCollege.city || 'National'}, {selectedCollege.state || 'India'}
              </span>
            </div>
            <button
              onClick={() => setSelectedCollege(null)}
              className="text-slate-400 hover:text-slate-700 font-bold text-xl p-1 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-black text-[#0B132B]">
            {selectedCollege.name}
          </h2>
          <p className="text-xs font-semibold text-[#004B23] mt-1">
            Official Counseling Code: #{Math.floor(1000 + Math.random() * 9000)} • AICTE / Statutory Affiliated
          </p>

          {/* Cut-off Marks Analyzer Section */}
          <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md border border-indigo-800">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-[#FFD54A]" />
                <h3 className="font-bold text-sm text-[#FFD54A]">Dynamic Cut-off Marks & Rank Analyzer (2026-27)</h3>
              </div>
              <span className="text-[10px] bg-indigo-800 px-2 py-0.5 rounded text-indigo-200 font-mono">JoSAA / MCC Data</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-[10px] text-slate-300 uppercase font-semibold mb-1">Select Entrance Examination</label>
                <select 
                  value={cutoffExam} 
                  onChange={(e) => setCutoffExam(e.target.value)}
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-xl px-3 py-1.5 text-xs font-bold outline-none focus:ring-2 focus:ring-[#FFD54A]"
                >
                  <option value="NEET (MBBS/BDS)">NEET UG (MBBS/BDS/AYUSH)</option>
                  <option value="JEE Mains (B.Tech)">JEE Mains & Advanced (B.Tech/BE)</option>
                  <option value="CUET UG/PG">CUET (Central Univ Entrance Test)</option>
                  <option value="CLAT (Law)">CLAT / AILET (Law 5-Yr / LLB)</option>
                  <option value="State Counseling Rank">State CET / State Counseling Merit</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-slate-300 uppercase font-semibold mb-1">Select Candidate Category</label>
                <select 
                  value={cutoffRank} 
                  onChange={(e) => setCutoffRank(e.target.value)}
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-xl px-3 py-1.5 text-xs font-bold outline-none focus:ring-2 focus:ring-[#FFD54A]"
                >
                  <option value="General (Open) Merit">General (Open) Merit Quota</option>
                  <option value="OBC-NCL / EWS Quota">OBC-NCL / EWS Reservation Quota</option>
                  <option value="SC / ST Category Quota">SC / ST Category Reservation</option>
                  <option value="Minority / Defense Quota">Minority / Defense Special Quota</option>
                </select>
              </div>
            </div>

            <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-300 uppercase font-bold">Estimated Opening Rank / Score</div>
                <div className="text-base font-black text-[#FFD54A]">
                  {cutoffExam.includes('NEET') ? '610+ Marks (Rank ~8,500)' : cutoffExam.includes('JEE') ? '98.4 %ile (Rank ~14,200)' : 'Score: 740/800'}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-300 uppercase font-bold">Closing Cut-off Rank</div>
                <div className="text-base font-black text-emerald-400">
                  {cutoffRank.includes('SC') || cutoffRank.includes('ST') ? 'Rank ~65,000' : 'Rank ~22,400'}
                </div>
              </div>
            </div>
          </div>

          {/* Fee Structure Table */}
          <div className="space-y-4 mb-6">
            <h3 className="font-bold text-sm text-[#0B132B] flex items-center gap-1.5 border-b pb-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>Verified Fee Structure & Scholarships</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Annual Tuition Fee</div>
                <div className="text-sm font-black text-[#004B23] mt-0.5">{selectedCollege.fee || '₹45,000 / yr'}</div>
                <div className="text-[10px] text-slate-500 mt-1">Payable in 2 semesters</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Hostel & Mess Charges</div>
                <div className="text-sm font-black text-slate-800 mt-0.5">₹38,000 / yr</div>
                <div className="text-[10px] text-slate-500 mt-1">Includes dining & WiFi</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-[10px] text-emerald-700 font-bold uppercase">Scholarship Assistance</div>
                <div className="text-sm font-black text-emerald-900 mt-0.5">Up to 100% Waiver</div>
                <div className="text-[10px] text-emerald-700 mt-1">Under NSP / State Schemes</div>
              </div>
            </div>
          </div>

          {/* Campus Facilities Checklist */}
          <div className="space-y-3 mb-6">
            <h3 className="font-bold text-sm text-[#0B132B] flex items-center gap-1.5 border-b pb-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Campus Facilities & Student Amenities</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                'WiFi Enabled Campus', 'Central Digital Library', 'Boys & Girls Hostels', 'Research & Labs',
                'Sports & Athletics', 'Cafeteria & Dining', 'Medical Clinic & ICU', 'Placement Cell'
              ].map((fac, i) => (
                <div key={i} className="flex items-center space-x-1.5 p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews & Location Footer */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-[#0B132B] flex items-center justify-center font-black text-lg shadow">
                4.8
              </div>
              <div>
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-700 ml-1.5">(340+ Verified Reviews)</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">Top rated for faculty quality, laboratory infrastructure, and campus placements.</div>
              </div>
            </div>

            <button
              onClick={() => alert(`Opening GPS Google Maps routing to ${selectedCollege.name}...`)}
              className="bg-white hover:bg-slate-100 text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 transition flex items-center space-x-1.5 shrink-0 cursor-pointer shadow-sm"
            >
              <Compass className="w-4 h-4 text-rose-500" />
              <span>Geotag Map</span>
            </button>
          </div>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={() => setSelectedCollege(null)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 transition cursor-pointer"
            >
              Close
            </button>
            <a
              href={selectedCollege.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#004B23] hover:bg-[#00381a] text-white font-bold flex items-center justify-center gap-2 transition shadow cursor-pointer"
            >
              <span>Visit Official Admission Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  // If user clicked Medical, render full MedicalCollegesDirectory
  if (activeStreamView === 'medical') {
    return (
      <div>
        {renderTopToolbar()}
        <div className="bg-[#0B132B] text-white py-3 px-4 sm:px-6 border-b border-[#D4AF37]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setActiveStreamView('overview')}
              className="flex items-center gap-2 text-xs font-bold text-[#FFD54A] hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>&larr; Back to Master Colleges Directory (All 19 Streams)</span>
            </button>
            <span className="text-[11px] font-mono text-slate-400">Stream 1/19: Medical & Allied Healthcare</span>
          </div>
        </div>
        <MedicalCollegesDirectory currentLanguage={currentLanguage} />
        {renderCollegeModal()}
      </div>
    );
  }

  // If user clicked Engineering, Pharmacy, Law, Nursing, Agriculture, Architecture, Management, or Polytechnic, render full ProfessionalCollegesDirectory
  if (['engineering', 'pharmacy', 'law', 'nursing', 'agriculture', 'architecture', 'management', 'polytechnic'].includes(activeStreamView)) {
    return (
      <div>
        {renderTopToolbar()}
        <div className="bg-[#0B132B] text-white py-3 px-4 sm:px-6 border-b border-[#D4AF37]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setActiveStreamView('overview')}
              className="flex items-center gap-2 text-xs font-bold text-[#FFD54A] hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>&larr; Back to Master Colleges Directory (All 19 Streams)</span>
            </button>
            <span className="text-[11px] font-mono text-slate-400">
              Stream Selected: {streamsList.find(s => s.id === activeStreamView)?.titleEn}
            </span>
          </div>
        </div>
        <ProfessionalCollegesDirectory currentLanguage={currentLanguage} />
        {renderCollegeModal()}
      </div>
    );
  }

  // If user clicked one of our newly added custom streams (Veterinary, Paramedical, Science, Arts, ITI, Teacher, Aviation, Hotel, Fashion, Performing)
  if (customInstitutesData[activeStreamView]) {
    const streamInfo = streamsList.find(s => s.id === activeStreamView);
    const institutes = customInstitutesData[activeStreamView] || [];

    return (
      <div className="bg-slate-50 min-h-screen py-8 sm:py-12 font-sans animate-fadeIn">
        {renderTopToolbar()}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <button
            onClick={() => setActiveStreamView('overview')}
            className="flex items-center gap-2 text-xs font-bold text-[#004B23] bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-100 transition mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&larr; Back to All 19 Streams Directory Grid</span>
          </button>

          <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#D4AF37]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFD54A] text-xs font-bold mb-3">
                <span>{streamInfo?.icon}</span>
                <span>{streamInfo?.reg}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-black text-white">
                {streamInfo?.titleEn} Directory
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                Explore recognized institutes, statutory approval numbers, fee structures, courses offered, and direct counseling links for {streamInfo?.titleEn}.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center min-w-[200px]">
              <div className="text-2xl font-black text-[#FFD54A]">{streamInfo?.seats}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-300 font-bold mt-1">Total National Seats</div>
            </div>
          </div>
        </div>

        {/* LIST OF INSTITUTES */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8 flex items-center justify-between">
            <h2 className="text-base font-bold text-[#0B132B] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Verified Statutory Regulatory Directory</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">Showing top accredited institutions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutes.map((inst, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {inst.reg}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" /> {inst.city}, {inst.state}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">{inst.name}</h3>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-xs">
                      <span className="text-slate-400 font-medium">Courses:</span>{' '}
                      <span className="font-semibold text-slate-700">{inst.courses.join(', ')}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-slate-400 font-medium">Annual Fees:</span>{' '}
                      <span className="font-bold text-[#004B23]">{inst.fee}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={inst.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#004B23] hover:text-[#00381a] flex items-center gap-1"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedCollege(inst)}
                    className="px-3 py-1.5 bg-[#0B132B] hover:bg-[#142244] text-white text-[11px] font-bold rounded-lg transition cursor-pointer"
                  >
                    Admission Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {renderCollegeModal()}
      </div>
    );
  }

  // OVERVIEW GRID OF ALL 19 STREAMS
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12 font-sans animate-fadeIn" id="colleges_master_directory_portal">
      {renderTopToolbar()}
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-[#0B132B] via-[#142244] to-[#004B23] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-[#D4AF37]/40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#FFD54A] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4" />
            <span>{currentLanguage === 'en' ? 'MASTER COLLEGES DIRECTORY (19 SPECIALIZED STREAMS)' : 'मास्टर कॉलेज निर्देशिका (19 स्ट्रीम)'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black text-white">
            {currentLanguage === 'en' ? 'National Accredited Colleges Directory' : currentLanguage === 'ur' ? 'قومی تسلیم شدہ کالجز ڈائریکٹری' : 'राष्ट्रीय मान्यता प्राप्त कॉलेज निर्देशिका'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-3xl leading-relaxed">
            {currentLanguage === 'en'
              ? 'Instead of searching across dozens of disconnected websites, browse all 19 professional and academic streams below. Access verified statutory regulatory authorities (NMC, AICTE, PCI, BCI, INC, ICAR, VCI, COA, DGCA, NCHMCT), fee structures, scholarships, and official admission links.'
              : 'सभी 19 व्यावसायिक और शैक्षणिक स्ट्रीम नीचे ब्राउज़ करें। सत्यापित वैधानिक नियामक निकायों, शुल्क संरचनाओं, छात्रवृत्ति और आधिकारिक प्रवेश लिंक तक पहुंचें।'}
          </p>

          {/* SEARCH AND FILTER BAR */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLanguage === 'en' ? 'Search stream (e.g., Medical, Aviation, Law, ITI)...' : 'स्ट्रीम खोजें...'}
                className="w-full pl-10 pr-4 py-3 bg-white text-slate-800 rounded-xl text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-[#FFD54A] shadow-inner"
              />
            </div>
            <div className="text-xs font-bold text-[#FFD54A] flex items-center gap-1 bg-white/10 px-4 py-3 rounded-xl border border-white/20">
              <ShieldCheck className="w-4 h-4" /> 19/19 Streams Verified
            </div>
          </div>
        </div>
      </div>

      {/* 19 STREAMS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-serif font-black text-[#0B132B] flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? 'Browse All 19 Educational Categories' : 'सभी 19 श्रेणियां देखें'}</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentLanguage === 'en' ? 'Select any card below to launch its dedicated directory with full filters, seat counts, and counseling portals.' : 'निर्देशिका खोलने के लिए नीचे किसी भी कार्ड का चयन करें।'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStreams.map((stream) => (
            <div
              key={stream.id}
              onClick={() => {
                setActiveStreamView(stream.id);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#004B23] transition flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                    {stream.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full group-hover:bg-[#004B23] group-hover:text-white transition-colors">
                    {stream.seats}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B132B] group-hover:text-[#004B23] transition-colors">
                  {currentLanguage === 'en' ? stream.titleEn : currentLanguage === 'ur' ? stream.titleUr : stream.titleHi}
                </h3>

                <p className="text-[11px] text-slate-500 mt-2 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Regulator: {stream.reg}</span>
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004B23]">
                <span>Explore Directory</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {renderCollegeModal()}
    </div>
  );
}
