import React, { useState } from 'react';
import { Language, LeaderboardEntry, LeaderboardFilter, VerificationStatus, VerificationDetails } from '../types';
import { Trophy, Medal, Star, Filter, ShieldCheck, CheckCircle, Clock, XCircle, Eye, FileText, Camera, Users, MapPin, Calendar, FileCheck, UserCheck, AlertCircle, PlusCircle, ArrowRight, Check, Sparkles, ChevronDown } from 'lucide-react';

interface LeaderboardProps {
  currentLanguage: Language;
}

const initialLeaderboardData: LeaderboardEntry[] = [
  {
    id: '1',
    name: 'Mohammad Shahid Rangrez',
    type: 'Volunteer',
    location: { city: 'Jaipur', district: 'Jaipur', state: 'Rajasthan' },
    points: 1450,
    category: 'Emergency Blood & Medical Aid',
    timestamp: '2026-07-01T14:30:00Z',
    verification: {
      status: 'Verified',
      evidencePhotos: [
        'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=400&h=300&fit=crop'
      ],
      attendanceRecordsUrl: 'https://rangrezsamaj.in/records/att-jaipur-blood-089.pdf',
      beneficiaryConfirmation: true,
      committeeApproval: true,
      activityReportUrl: 'https://rangrezsamaj.in/reports/rep-2026-jpr-blood.pdf',
      date: 'July 01, 2026 (02:00 AM - 06:30 AM)',
      location: 'SMS Hospital Blood Bank & Emergency Ward, Jaipur, Rajasthan',
      supportingDocuments: ['Hospital Superintendent Acknowledgment Letter', 'Blood Donor Registration Register Copy'],
      auditTrail: [
        { timestamp: '01 Jul 2026, 07:15 AM', action: 'Activity Submitted with 4 photos & attendance roster', actor: 'Mohammad Shahid (Volunteer ID: #RJ-8402)' },
        { timestamp: '01 Jul 2026, 11:30 AM', action: 'Beneficiary & Hospital verification SMS confirmed', actor: 'Dr. R. K. Sharma (SMS Hospital Duty Officer)' },
        { timestamp: '01 Jul 2026, 04:00 PM', action: 'District Committee Seal & Approval Granted', actor: 'Haji Abdul Rehman Rangrez (Jaipur District President)' },
        { timestamp: '02 Jul 2026, 09:15 AM', action: 'National Ethics & Verification Audit PASSED. 1450 Points Credited.', actor: 'Advocate K. M. Rangrez (National Audit Board)' }
      ]
    }
  },
  {
    id: '2',
    name: 'Indore Youth Khidmat Wing',
    type: 'Committee',
    location: { city: 'Indore', district: 'Indore', state: 'Madhya Pradesh' },
    points: 2380,
    category: 'Education & Orphan Support',
    timestamp: '2026-06-28T10:00:00Z',
    verification: {
      status: 'Verified',
      evidencePhotos: [
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'
      ],
      attendanceRecordsUrl: 'https://rangrezsamaj.in/records/att-indore-edu-104.pdf',
      beneficiaryConfirmation: true,
      committeeApproval: true,
      activityReportUrl: 'https://rangrezsamaj.in/reports/rep-2026-ind-edu.pdf',
      date: 'June 28, 2026 (10:00 AM - 04:00 PM)',
      location: 'Govt. Urdu Secondary School, Azad Nagar, Indore, MP',
      supportingDocuments: ['School Principal Appreciation Letter', 'Vendor Book & Kit Purchase Invoices (1,200 kits)'],
      auditTrail: [
        { timestamp: '28 Jun 2026, 06:30 PM', action: 'Drive Dossier submitted with school attendance sheet', actor: 'Irphan Rangrez (Indore Youth Secretary)' },
        { timestamp: '29 Jun 2026, 10:00 AM', action: 'Beneficiary Confirmation verified via school headmaster call', actor: 'MP State Verification Team' },
        { timestamp: '29 Jun 2026, 03:45 PM', action: 'Committee Approval and Fund Utilization Audit completed', actor: 'MP State Khidmat President' },
        { timestamp: '30 Jun 2026, 11:00 AM', action: 'National Verification Board PASSED. 2380 Points Credited.', actor: 'National Verification Board' }
      ]
    }
  },
  {
    id: '3',
    name: 'Ayesha Bibi Rangrez',
    type: 'Volunteer',
    location: { city: 'Bhopal', district: 'Bhopal', state: 'Madhya Pradesh' },
    points: 1210,
    category: 'Women Skill & Vocational Training',
    timestamp: '2026-06-29T16:00:00Z',
    verification: {
      status: 'Verified',
      evidencePhotos: [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop'
      ],
      attendanceRecordsUrl: 'https://rangrezsamaj.in/records/att-bhopal-voc.pdf',
      beneficiaryConfirmation: true,
      committeeApproval: true,
      activityReportUrl: 'https://rangrezsamaj.in/reports/rep-2026-bhp-voc.pdf',
      date: 'June 15 - June 29, 2026 (14-Day Workshop)',
      location: 'Rangrez Community Hall, Old Bhopal, Madhya Pradesh',
      supportingDocuments: ['50 Women Artisan Certification Logs', 'Municipal Skill Development Endorsement'],
      auditTrail: [
        { timestamp: '29 Jun 2026, 05:00 PM', action: '14-Day workshop report and attendance register submitted', actor: 'Ayesha Bibi (#MP-3091)' },
        { timestamp: '30 Jun 2026, 12:15 PM', action: 'Random telephone verification of 10 participants completed', actor: 'Women Welfare Audit Wing' },
        { timestamp: '01 Jul 2026, 02:00 PM', action: 'Committee Approval & State Endorsement Granted', actor: 'Bhopal Women Wing President' },
        { timestamp: '01 Jul 2026, 05:30 PM', action: 'National Audit PASSED. 1210 Points Credited.', actor: 'National Audit Board' }
      ]
    }
  },
  {
    id: '4',
    name: 'Ahmedabad Relief Taskforce',
    type: 'Committee',
    location: { city: 'Ahmedabad', district: 'Ahmedabad', state: 'Gujarat' },
    points: 1890,
    category: 'Free Eye Camp & Cataract Surgeries',
    timestamp: '2026-06-25T11:00:00Z',
    verification: {
      status: 'Verified',
      evidencePhotos: [
        'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=400&h=300&fit=crop'
      ],
      attendanceRecordsUrl: 'https://rangrezsamaj.in/records/att-ahm-eye.pdf',
      beneficiaryConfirmation: true,
      committeeApproval: true,
      activityReportUrl: 'https://rangrezsamaj.in/reports/rep-2026-ahm-eye.pdf',
      date: 'June 23 - 25, 2026',
      location: 'Civil Hospital Eye Wing, Ahmedabad, Gujarat',
      supportingDocuments: ['Civil Hospital Surgeon Collaborative Certificate', '68 Patient Discharge Summaries'],
      auditTrail: [
        { timestamp: '26 Jun 2026, 09:00 AM', action: 'Camp data submitted with surgeon certificates', actor: 'Dr. Zafar Rangrez (Medical Convener)' },
        { timestamp: '27 Jun 2026, 11:00 AM', action: 'Beneficiary & Hospital audit verified', actor: 'Gujarat State Audit Committee' },
        { timestamp: '27 Jun 2026, 04:30 PM', action: 'Committee Approval Granted', actor: 'Ahmedabad District President' },
        { timestamp: '28 Jun 2026, 10:00 AM', action: 'National Audit PASSED. 1890 Points Credited.', actor: 'National Audit Board' }
      ]
    }
  },
  {
    id: '5',
    name: 'Faisal Ahmad Rangrez',
    type: 'Volunteer',
    location: { city: 'Lucknow', district: 'Lucknow', state: 'Uttar Pradesh' },
    points: 920,
    category: 'Tree Plantation & Environmental Drive',
    timestamp: '2026-07-01T09:00:00Z',
    verification: {
      status: 'Pending',
      evidencePhotos: [
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
      ],
      attendanceRecordsUrl: 'https://rangrezsamaj.in/records/att-lko-trees.pdf',
      beneficiaryConfirmation: false,
      committeeApproval: true,
      activityReportUrl: 'https://rangrezsamaj.in/reports/rep-2026-lko-trees.pdf',
      date: 'July 01, 2026 (07:00 AM - 11:00 AM)',
      location: 'Kukrail Reserve Forest Belt, Lucknow, UP',
      supportingDocuments: ['Forest Department Permission Memo', 'Nursery Sapling Receipt (500 Neem & Peepal Saplings)'],
      auditTrail: [
        { timestamp: '01 Jul 2026, 01:30 PM', action: 'Activity submitted with geotagged sapling photos', actor: 'Faisal Ahmad (#UP-4412)' },
        { timestamp: '01 Jul 2026, 05:00 PM', action: 'District Committee Initial Approval Granted', actor: 'Lucknow Khidmat Committee' },
        { timestamp: '02 Jul 2026, 10:00 AM', action: 'Pending final geotag verification from State Audit Team', actor: 'UP State Verification Board' }
      ]
    }
  }
];

export default function Leaderboard({ currentLanguage }: LeaderboardProps) {
  const [data, setData] = useState<LeaderboardEntry[]>(initialLeaderboardData);
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'National' | 'State' | 'District'>('All');
  const [selectedType, setSelectedType] = useState<'All' | 'Volunteer' | 'Committee'>('All');
  
  // Modal / Drawer state for checking verification details
  const [selectedEntry, setSelectedEntry] = useState<LeaderboardEntry | null>(data[0]);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // New submission form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Emergency Blood & Medical Aid');
  const [newLocation, setNewLocation] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newHours, setNewHours] = useState('');
  const [newBeneficiaries, setNewBeneficiaries] = useState('');

  const handleCreateSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newLocation || !newDate) {
      alert(currentLanguage === 'en' ? 'Please fill in all required verification fields.' : 'कृपया सभी आवश्यक सत्यापन फ़ील्ड भरें।');
      return;
    }

    const newEntry: LeaderboardEntry = {
      id: Date.now().toString(),
      name: newTitle,
      type: 'Volunteer',
      location: { city: newLocation, district: newLocation, state: 'India' },
      points: parseInt(newHours || '20') * 10,
      category: newCategory,
      timestamp: new Date().toISOString(),
      verification: {
        status: 'Pending',
        evidencePhotos: ['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop'],
        attendanceRecordsUrl: '#',
        beneficiaryConfirmation: false,
        committeeApproval: false,
        activityReportUrl: '#',
        date: newDate,
        location: newLocation,
        supportingDocuments: ['Self-Declared Verification Dossier', 'Preliminary Event Photos'],
        auditTrail: [
          {
            timestamp: new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
            action: 'Activity submitted via Verified Service Desk with 7-point check preliminary dossier',
            actor: `${newTitle} (Self-Submitted)`
          },
          {
            timestamp: 'In Progress',
            action: 'Awaiting District Committee Approval & Attendance Audit',
            actor: 'Verification Audit Engine'
          }
        ]
      }
    };

    setData([newEntry, ...data]);
    setSelectedEntry(newEntry);
    setShowSubmitModal(false);
    setNewTitle('');
    setNewLocation('');
    setNewDate('');
    setNewHours('');
    setNewBeneficiaries('');
    alert(currentLanguage === 'en' ? 'Activity submitted successfully! It is now Pending Verification under our 7-step audit trail.' : 'गतिविधि सफलतापूर्वक सबमिट की गई! यह अब हमारे 7-चरणीय ऑडिट ट्रेल के तहत सत्यापन के लिए लंबित है।');
  };

  const filteredData = data.filter(entry => {
    if (selectedType !== 'All' && entry.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="space-y-10">
      {/* Verification System Banner */}
      <div className="bg-gradient-to-r from-[#0B132B] via-[#004B23] to-[#0B132B] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#F4C430] text-[#0B132B] uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4 mr-1.5 text-[#004B23]" />
            {currentLanguage === 'en' ? '7-Point Mandatory Verification System' : '7-सूत्रीय अनिवार्य सत्यापन प्रणाली'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
            {currentLanguage === 'en' ? 'Verified Leaderboard & Transparent Audit Trail' : 'सत्यापित लीडरबोर्ड और पारदर्शी ऑडिट ट्रेल'}
          </h2>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            {currentLanguage === 'en'
              ? 'To maintain 100% transparency and public trust, every service hour and award is granted ONLY after verification through event photos, attendance records, beneficiary confirmations, committee approval, and supporting documents.'
              : '100% पारदर्शिता और जनविश्वास बनाए रखने के लिए, प्रत्येक सेवा घंटा और सम्मान केवल कार्यक्रम की तस्वीरों, उपस्थिति रिकॉर्ड, लाभार्थी पुष्टि, समिति अनुमोदन और प्रामाणिक दस्तावेजों के सत्यापन के बाद ही प्रदान किया जाता है।'}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="bg-[#F4C430] hover:bg-yellow-400 text-[#0B132B] font-bold px-5 py-2.5 rounded-xl text-sm flex items-center space-x-2 shadow-md transition"
            >
              <PlusCircle className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Submit Activity for Verification' : 'सत्यापन के लिए सेवा कार्य सबमिट करें'}</span>
            </button>
            <a
              href="#audit-desk"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm flex items-center space-x-2 transition"
            >
              <FileCheck className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'View Live Audit Desk' : 'लाइव ऑडिट डेस्क देखें'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 7 Verification Criteria Quick Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {[
          { icon: <Camera className="h-5 w-5 text-emerald-600" />, titleEn: 'Event Photos', titleHi: 'कार्यक्रम तस्वीरें', descEn: 'Geotagged & Timestamped', descHi: 'स्थान व समय अंकित' },
          { icon: <Users className="h-5 w-5 text-blue-600" />, titleEn: 'Attendance Roll', titleHi: 'उपस्थिति रिकॉर्ड', descEn: 'Signed Muster Sheets', descHi: 'हस्ताक्षरित सूची' },
          { icon: <UserCheck className="h-5 w-5 text-purple-600" />, titleEn: 'Beneficiary Check', titleHi: 'लाभार्थी पुष्टि', descEn: 'Direct Confirmation', descHi: 'सीधी पुष्टि' },
          { icon: <ShieldCheck className="h-5 w-5 text-[#004B23]" />, titleEn: 'Committee Approval', titleHi: 'समिति अनुमोदन', descEn: 'Presidential Seal', descHi: 'अध्यक्षीय मुहर' },
          { icon: <FileText className="h-5 w-5 text-amber-600" />, titleEn: 'Activity Report', titleHi: 'गतिविधि रिपोर्ट', descEn: 'Detailed PDF Summary', descHi: 'विस्तृत पीडीएफ रिपोर्ट' },
          { icon: <MapPin className="h-5 w-5 text-red-600" />, titleEn: 'Date & Location', titleHi: 'तिथि और स्थान', descEn: 'Verified Coordinates', descHi: 'सत्यापित स्थान' },
          { icon: <FileCheck className="h-5 w-5 text-indigo-600" />, titleEn: 'Support Docs', titleHi: 'सहायक दस्तावेज', descEn: 'Invoices & Permits', descHi: 'बिल व अनुमतियां' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm hover:shadow transition flex flex-col justify-between">
            <div className="p-2 bg-gray-50 rounded-xl w-fit mb-2">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                {currentLanguage === 'en' ? item.titleEn : item.titleHi}
              </h4>
              <p className="text-[10px] text-gray-500 mt-0.5">
                {currentLanguage === 'en' ? item.descEn : item.descHi}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Leaderboard & Interactive Verification Inspector Split */}
      <div id="audit-desk" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 7 Columns: Leaderboard Table */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
            <div>
              <h3 className="text-xl font-bold text-[#0B132B] flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
                {currentLanguage === 'en' ? 'Verified Service Rankings' : 'सत्यापित सेवा रैंकिंग'}
              </h3>
              <p className="text-xs text-gray-500">
                {currentLanguage === 'en' ? 'Click any row to inspect full verification evidence and audit trail.' : 'पूर्ण सत्यापन साक्ष्य और ऑडिट ट्रेल जांचने के लिए किसी भी पंक्ति पर क्लिक करें।'}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
              >
                <option value="All">{currentLanguage === 'en' ? 'All (Volunteers & Committees)' : 'सभी (स्वयंसेवक और समितियां)'}</option>
                <option value="Volunteer">{currentLanguage === 'en' ? 'Volunteers Only' : 'केवल स्वयंसेवक'}</option>
                <option value="Committee">{currentLanguage === 'en' ? 'Committees Only' : 'केवल समितियां'}</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-y">
                <tr>
                  <th className="px-4 py-3.5 font-bold">Rank</th>
                  <th className="px-4 py-3.5 font-bold">Name & Location</th>
                  <th className="px-4 py-3.5 font-bold">Category</th>
                  <th className="px-4 py-3.5 font-bold text-center">Status</th>
                  <th className="px-4 py-3.5 font-bold text-right">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((entry, idx) => {
                  const isSelected = selectedEntry?.id === entry.id;
                  return (
                    <tr
                      key={entry.id}
                      onClick={() => setSelectedEntry(entry)}
                      className={`cursor-pointer transition hover:bg-emerald-50/50 ${
                        isSelected ? 'bg-emerald-50/80 border-l-4 border-[#004B23]' : ''
                      }`}
                    >
                      <td className="px-4 py-4 font-extrabold text-gray-900">
                        {idx === 0 ? (
                          <span className="w-7 h-7 rounded-full bg-yellow-400 text-[#0B132B] flex items-center justify-center text-xs shadow">
                            1st
                          </span>
                        ) : idx === 1 ? (
                          <span className="w-7 h-7 rounded-full bg-slate-300 text-slate-800 flex items-center justify-center text-xs shadow">
                            2nd
                          </span>
                        ) : idx === 2 ? (
                          <span className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs shadow">
                            3rd
                          </span>
                        ) : (
                          <span className="text-gray-500 pl-2">#{idx + 1}</span>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-bold text-gray-900 flex items-center space-x-1.5">
                          <span>{entry.name}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                            entry.type === 'Volunteer' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                          }`}>
                            {entry.type}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center mt-0.5">
                          <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                          {entry.location.city}, {entry.location.state}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-xs font-medium text-gray-700">
                        {entry.category}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {entry.verification.status === 'Verified' ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#004B23]">
                            <CheckCircle className="h-3.5 w-3.5 mr-1" />
                            Verified
                          </span>
                        ) : entry.verification.status === 'Pending' ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            Pending
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                            <XCircle className="h-3.5 w-3.5 mr-1" />
                            Rejected
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right font-extrabold text-base text-[#004B23]">
                        {entry.points}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right 5 Columns: Interactive Verification Evidence & Audit Trail Inspector */}
        <div className="lg:col-span-5 bg-gradient-to-b from-gray-900 to-[#0B132B] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-800 space-y-6 sticky top-24">
          {selectedEntry ? (
            <>
              <div className="border-b border-gray-700 pb-4 flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider block mb-1">
                    {currentLanguage === 'en' ? 'Live Verification Dossier' : 'लाइव सत्यापन डॉसियर'}
                  </span>
                  <h3 className="text-xl font-extrabold leading-tight">
                    {selectedEntry.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-emerald-400" />
                    {selectedEntry.location.city}, {selectedEntry.location.state} • {selectedEntry.category}
                  </p>
                </div>
                <div>
                  {selectedEntry.verification.status === 'Verified' ? (
                    <span className="bg-[#004B23] text-emerald-200 border border-emerald-500/40 px-3 py-1.5 rounded-full text-xs font-extrabold flex items-center shadow">
                      <ShieldCheck className="h-4 w-4 mr-1 text-[#F4C430]" />
                      100% Verified
                    </span>
                  ) : (
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-full text-xs font-extrabold flex items-center shadow">
                      <Clock className="h-4 w-4 mr-1 text-amber-400" />
                      Under Audit
                    </span>
                  )}
                </div>
              </div>

              {/* 7-Point Checklist Verification Status */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {currentLanguage === 'en' ? '7-Point Verification Checklist Status' : '7-सूत्रीय सत्यापन चेकलिस्ट स्थिति'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium">
                  <div className="bg-white/10 p-2.5 rounded-xl flex items-center justify-between border border-white/5">
                    <span className="flex items-center"><Camera className="h-3.5 w-3.5 mr-2 text-emerald-400" /> 1. Event Photos</span>
                    <span className="text-emerald-400 font-bold">{selectedEntry.verification.evidencePhotos.length} Geotagged</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl flex items-center justify-between border border-white/5">
                    <span className="flex items-center"><Users className="h-3.5 w-3.5 mr-2 text-blue-400" /> 2. Attendance</span>
                    <span className="text-blue-300 font-bold">{selectedEntry.verification.attendanceRecordsUrl !== '#' ? 'Muster Log ✓' : 'Pending'}</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl flex items-center justify-between border border-white/5">
                    <span className="flex items-center"><UserCheck className="h-3.5 w-3.5 mr-2 text-purple-400" /> 3. Beneficiary Check</span>
                    <span className={selectedEntry.verification.beneficiaryConfirmation ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                      {selectedEntry.verification.beneficiaryConfirmation ? 'Confirmed ✓' : 'Audit In Progress'}
                    </span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl flex items-center justify-between border border-white/5">
                    <span className="flex items-center"><ShieldCheck className="h-3.5 w-3.5 mr-2 text-yellow-400" /> 4. Committee Seal</span>
                    <span className={selectedEntry.verification.committeeApproval ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                      {selectedEntry.verification.committeeApproval ? 'Approved ✓' : 'Reviewing'}
                    </span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl flex items-center justify-between border border-white/5">
                    <span className="flex items-center"><FileText className="h-3.5 w-3.5 mr-2 text-amber-400" /> 5. Activity Report</span>
                    <span className="text-amber-300 font-bold">{selectedEntry.verification.activityReportUrl !== '#' ? 'PDF Dossier ✓' : 'Pending'}</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl flex items-center justify-between border border-white/5">
                    <span className="flex items-center"><MapPin className="h-3.5 w-3.5 mr-2 text-red-400" /> 6. Date & Location</span>
                    <span className="text-emerald-400 font-bold">Geotag Verified ✓</span>
                  </div>
                </div>

                {/* Supporting Documents box */}
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs space-y-1">
                  <span className="font-bold text-gray-300 flex items-center">
                    <FileCheck className="h-3.5 w-3.5 mr-1.5 text-indigo-400" />
                    7. Supporting Documents:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedEntry.verification.supportingDocuments?.map((doc, i) => (
                      <span key={i} className="bg-white/10 text-gray-200 px-2 py-1 rounded text-[11px] font-mono">
                        📄 {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Evidence Photo Preview */}
              {selectedEntry.verification.evidencePhotos.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {currentLanguage === 'en' ? 'Geotagged Evidence Photographs' : 'सत्यापित साक्ष्य तस्वीरें'}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedEntry.verification.evidencePhotos.map((photo, i) => (
                      <div key={i} className="relative rounded-xl overflow-hidden border border-white/10 aspect-video group">
                        <img src={photo} alt="Evidence" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                        <div className="absolute bottom-1 left-1 bg-black/70 px-1.5 py-0.5 rounded text-[9px] text-white font-mono flex items-center">
                          <CheckCircle className="h-2.5 w-2.5 mr-1 text-emerald-400" /> Geotag Verified
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Immutable Audit Trail Timeline */}
              <div className="space-y-3 pt-2 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1.5 text-[#F4C430]" />
                    {currentLanguage === 'en' ? 'Immutable Audit Trail Timeline' : 'पारदर्शी ऑडिट ट्रेल टाइमलाइन'}
                  </span>
                  <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded font-mono">
                    Audit ID: #{selectedEntry.id}-2026
                  </span>
                </div>

                <div className="relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-500/30">
                  {selectedEntry.verification.auditTrail.map((log, idx) => (
                    <div key={idx} className="relative text-xs">
                      <div className="absolute -left-5 top-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-[#0B132B]" />
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>{log.action}</span>
                      </div>
                      <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                        {currentLanguage === 'en' ? 'Actor:' : 'कर्ता:'} {log.actor}
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                        🕒 {log.timestamp}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="py-16 text-center text-gray-400">
              <ShieldCheck className="h-12 w-12 mx-auto text-gray-600 mb-3" />
              <p>{currentLanguage === 'en' ? 'Select any volunteer or committee row to view its verified dossier and audit trail.' : 'सत्यापित डॉसियर और ऑडिट ट्रेल देखने के लिए किसी भी स्वयंसेवक या समिति का चयन करें।'}</p>
            </div>
          )}
        </div>

      </div>

      {/* SUBMISSION MODAL / FORM FOR VERIFICATION */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#004B23] text-white rounded-2xl">
                  <ShieldCheck className="h-6 w-6 text-[#F4C430]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Submit Activity for Verification' : 'सत्यापन के लिए सेवा कार्य सबमिट करें'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {currentLanguage === 'en' ? 'Mandatory 7-point audit check before awarding recognition points.' : 'सम्मान बिंदु प्रदान करने से पहले अनिवार्य 7-सूत्रीय ऑडिट जांच।'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-gray-400 hover:text-gray-600 font-bold text-xl p-2"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateSubmission} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  {currentLanguage === 'en' ? '1. Volunteer / Committee Name' : '1. स्वयंसेवक / समिति का नाम'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={currentLanguage === 'en' ? 'e.g., Mohammad Shahid or Jaipur Khidmat Wing' : 'उदाहरण: मोहम्मद शाहिद या जयपुर खिदमत विंग'}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? '2. Service Category' : '2. सेवा श्रेणी'}
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  >
                    <option value="Emergency Blood & Medical Aid">Emergency Blood & Medical Aid</option>
                    <option value="Education & Orphan Support">Education & Orphan Support</option>
                    <option value="Women Skill & Vocational Training">Women Skill & Vocational Training</option>
                    <option value="Tree Plantation & Environment">Tree Plantation & Environment</option>
                    <option value="Disaster Relief & Food Camp">Disaster Relief & Food Camp</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? '3. Date & Geotagged Location' : '3. तिथि और स्थान'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., SMS Hospital, Jaipur - July 02, 2026"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? '4. Verified Service Hours' : '4. सेवा के घंटे'}
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 20"
                    value={newHours}
                    onChange={(e) => setNewHours(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? '5. City / District' : '5. शहर / जिला'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Jaipur"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#004B23] focus:outline-none"
                  />
                </div>
              </div>

              {/* 7 criteria checkboxes confirmation */}
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200/80 space-y-2 text-xs text-gray-800 font-medium">
                <span className="font-bold text-[#004B23] block text-sm mb-1">
                  {currentLanguage === 'en' ? 'Mandatory Audit Trail Declarations:' : 'अनिवार्य ऑडिट ट्रेल घोषणाएं:'}
                </span>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked required className="rounded text-[#004B23] focus:ring-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'I confirm event photographs & signed attendance records are attached.' : 'मैं पुष्टि करता हूं कि कार्यक्रम की तस्वीरें और उपस्थिति रिकॉर्ड संलग्न हैं।'}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked required className="rounded text-[#004B23] focus:ring-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'I confirm beneficiary acknowledgment or hospital confirmation is available.' : 'मैं पुष्टि करता हूं कि लाभार्थी की पावती या अस्पताल की पुष्टि उपलब्ध है।'}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked required className="rounded text-[#004B23] focus:ring-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'I authorize the National Verification Board to inspect this submission and record an immutable audit trail.' : 'मैं राष्ट्रीय सत्यापन बोर्ड को इस प्रस्तुति का निरीक्षण करने और ऑडिट ट्रेल दर्ज करने के लिए अधिकृत करता हूं।'}</span>
                </label>
              </div>

              <div className="pt-4 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="px-5 py-2.5 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition text-sm"
                >
                  {currentLanguage === 'en' ? 'Cancel' : 'रद्द करें'}
                </button>
                <button
                  type="submit"
                  className="bg-[#004B23] hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl shadow-md transition text-sm flex items-center space-x-2"
                >
                  <ShieldCheck className="h-4 w-4 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Submit for 7-Point Audit' : '7-सूत्रीय ऑडिट के लिए सबमिट करें'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
