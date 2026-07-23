import React, { useState } from 'react';
import { Award, CheckCircle2, FileText, Image as ImageIcon, Video, Calendar, ShieldCheck, ExternalLink, ChevronDown, ChevronUp, Clock, AlertCircle, History, Bell } from 'lucide-react';
import { Resolution, ResolutionStatus } from './types';

interface ResolutionManagementCardProps {
  key?: React.Key;
  resolution: Resolution;
  onUpdateStatus?: (id: string, status: ResolutionStatus) => void;
  getText: (en: string, hi: string, ur: string) => string;
  isArchiveView?: boolean;
}

const STATUS_BADGES: Record<ResolutionStatus, { labelEn: string; labelHi: string; labelUr: string; bg: string }> = {
  pending: { labelEn: '⏳ Pending', labelHi: '⏳ लंबित', labelUr: '⏳ زیر التوا', bg: 'bg-yellow-950 text-yellow-300 border-yellow-500/40' },
  under_review: { labelEn: '🔍 Under Review', labelHi: '🔍 समीक्षाधीन', labelUr: '🔍 زیر جائزہ', bg: 'bg-blue-950 text-blue-300 border-blue-500/40' },
  approved: { labelEn: '✅ Approved', labelHi: '✅ स्वीकृत', labelUr: '✅ منظور شدہ', bg: 'bg-emerald-950 text-emerald-300 border-emerald-500/40' },
  rejected: { labelEn: '❌ Rejected', labelHi: '❌ अस्वीकृत', labelUr: '❌ مسترد', bg: 'bg-red-950 text-red-300 border-red-500/40' },
  implemented: { labelEn: '🏛️ Implemented & Active', labelHi: '🏛️ लागू एवं सक्रिय', labelUr: '🏛️ نافذ اور فعال', bg: 'bg-emerald-600 text-[#0B132B] font-extrabold border-emerald-400' },
  archived: { labelEn: '📦 Archived', labelHi: '📦 अभिलेखित', labelUr: '📦 آرکائیو شدہ', bg: 'bg-gray-900 text-gray-300 border-gray-600/40' }
};

export default function ResolutionManagementCard({
  resolution,
  onUpdateStatus,
  getText,
  isArchiveView = false
}: ResolutionManagementCardProps) {
  const [expanded, setExpanded] = useState(!isArchiveView); // Expanded by default in implementation view, collapsed in archive view
  const [activeTab, setActiveTab] = useState<'details' | 'timeline' | 'media' | 'minutes'>('details');

  const badge = STATUS_BADGES[resolution.status] || STATUS_BADGES.implemented;

  return (
    <div className="bg-gradient-to-b from-[#07351B]/95 via-[#041d0f] to-[#07351B]/95 rounded-3xl p-6 sm:p-8 border-2 border-[#F4C430]/40 hover:border-[#F4C430] transition duration-300 shadow-2xl space-y-6 relative text-white">
      {/* Top Banner & Status Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-[#F4C430] text-[#0B132B] px-3.5 py-1 rounded-full text-xs font-mono font-extrabold shadow">
            📜 {resolution.resolutionNo || `RES/${resolution.year}/01`}
          </span>
          <span className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-xs font-mono border border-white/10 flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-[#F4C430]" />
            <span>{getText(`Year: ${resolution.year}`, `वर्ष: ${resolution.year}`, `سال: ${resolution.year}`)}</span>
          </span>
          <span className="bg-black/50 text-yellow-300 px-3 py-1 rounded-full text-xs font-mono border border-white/10 flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-yellow-400" />
            <span>{getText(`Effective From: ${resolution.effectiveDate || '1 Nov 2025'}`, `प्रभावी: ${resolution.effectiveDate || '1 नवंबर 2025'}`, `تارِیخ نفاذ: ${resolution.effectiveDate || '1 نومبر 2025'}`)}</span>
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-mono border ${badge.bg}`}>
            {resolution.year === '2025' || (resolution.resolutionNo && resolution.resolutionNo.includes('2025')) ? getText('Approved – Mahapanchayat 2025', 'स्वीकृत – महापंचायत 2025', 'منظور شدہ – مہاپنچایت 2025') : getText(badge.labelEn, badge.labelHi, badge.labelUr)}
          </span>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {onUpdateStatus && (
            <select
              value={resolution.status}
              onChange={(e) => onUpdateStatus(resolution.id, e.target.value as ResolutionStatus)}
              className="bg-black/70 text-yellow-300 border border-yellow-500/40 rounded-xl px-3 py-1.5 text-xs font-mono focus:outline-none"
            >
              <option value="pending">⏳ Set: Pending</option>
              <option value="under_review">🔍 Set: Under Review</option>
              <option value="approved">✅ Set: Approved</option>
              <option value="rejected">❌ Set: Rejected</option>
              <option value="implemented">🏛️ Set: Implemented</option>
              <option value="archived">📦 Set: Archived</option>
            </select>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-white/10 hover:bg-white/20 text-[#F4C430] px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
          >
            <span>{expanded ? getText('Collapse', 'संक्षिप्त करें', 'مختصر کریں') : getText('Full Resolution & Archive Details', 'पूर्ण विवरण देखें', 'تفصیلات دیکھیں')}</span>
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Title & Summit Info */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-emerald-300 font-semibold uppercase">
          🏛️ {getText(resolution.summitNameEn, resolution.summitNameHi, resolution.summitNameUr)}
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white leading-snug">
          {getText(resolution.titleEn, resolution.titleHi, resolution.titleUr)}
        </h3>
        <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed pt-1">
          {getText(resolution.officialTextEn, resolution.officialTextHi, resolution.officialTextUr)}
        </p>
      </div>

      {/* POST-SURVEY COMPLETION VOTING METRICS DASHBOARD (ALWAYS VISIBLE OR EXPANDABLE) */}
      <div className="bg-black/50 p-5 rounded-2xl border border-white/10 space-y-4">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#F4C430] flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Award className="h-4 w-4 text-emerald-400" />
            <span>{getText('Post-Survey Voting Results & Mahapanchayat Decision', 'मतदान परिणाम एवं महापंचायत निर्णय', 'ووٹنگ کے نتائج اور مہاپنچایت کا فیصلہ')}</span>
          </span>
          <span className="text-[11px] font-mono text-gray-400">Total Votes: {resolution.totalVotes?.toLocaleString() || '38,450'}</span>
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
          <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/30 space-y-1">
            <span className="text-[11px] text-emerald-300 block">Approval %</span>
            <span className="text-xl sm:text-2xl font-extrabold text-[#F4C430]">{resolution.approvalRate || 89.4}%</span>
          </div>

          <div className="bg-red-950/60 p-3 rounded-xl border border-red-500/30 space-y-1">
            <span className="text-[11px] text-red-300 block">Rejection %</span>
            <span className="text-xl sm:text-2xl font-extrabold text-red-400">{resolution.rejectionRate || 8.1}%</span>
          </div>

          <div className="bg-blue-950/60 p-3 rounded-xl border border-blue-500/30 space-y-1">
            <span className="text-[11px] text-blue-300 block">Participation %</span>
            <span className="text-xl sm:text-2xl font-extrabold text-blue-300">{resolution.participationRate || 91.3}%</span>
          </div>

          <div className="bg-gray-900/80 p-3 rounded-xl border border-gray-600/30 space-y-1">
            <span className="text-[11px] text-gray-400 block">Abstained %</span>
            <span className="text-xl sm:text-2xl font-extrabold text-gray-300">{resolution.abstainedRate || 2.5}%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 space-y-1">
            <span className="text-[11px] font-bold text-gray-400 uppercase block">⚖️ Committee Recommendation:</span>
            <span className="text-xs font-semibold text-emerald-300 block">
              {getText(resolution.committeeRecommendationEn || 'Unanimous Endorsement by Sharia Council', resolution.committeeRecommendationHi || 'शरिया परिषद द्वारा सर्वसम्मत समर्थन', resolution.committeeRecommendationUr || 'شریعہ کونسل کی طرف سے متفقہ تائید')}
            </span>
          </div>

          <div className="bg-gradient-to-r from-yellow-950/80 to-emerald-950/80 p-3.5 rounded-xl border border-[#F4C430]/50 space-y-1">
            <span className="text-[11px] font-extrabold text-[#F4C430] uppercase block">🏛️ Final Mahapanchayat Decision:</span>
            <span className="text-xs font-black text-white block tracking-wide">
              {getText(resolution.finalDecisionEn || 'APPROVED & ENACTED AS BINDING BYLAW', resolution.finalDecisionHi || 'स्वीकृत एवं अनिवार्य नियम के रूप में लागू', resolution.finalDecisionUr || 'منظور شدہ اور لازمی قانون کے طور پر نافذ')}
            </span>
          </div>
        </div>
      </div>

      {/* EXPANDABLE SECTION: FULL ARCHIVE DETAILS, TIMELINE & MEDIA */}
      {expanded && (
        <div className="space-y-6 pt-2 border-t border-white/10 animate-fadeIn">
          {/* Sub-Navigation inside Expanded Card */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'details' ? 'bg-[#F4C430] text-[#0B132B]' : 'bg-black/40 text-gray-300 hover:text-white'}`}
            >
              📋 {getText('Implementation Details & Dates', 'क्रियान्वयन विवरण व तिथियां', 'عمل درآمد کی تفصیلات اور تاریخیں')}
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'timeline' ? 'bg-[#F4C430] text-[#0B132B]' : 'bg-black/40 text-gray-300 hover:text-white'}`}
            >
              🕒 {getText('Historical Timeline', 'ऐतिहासिक घटनाक्रम', 'تاریخی ٹائم لائن')}
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'media' ? 'bg-[#F4C430] text-[#0B132B]' : 'bg-black/40 text-gray-300 hover:text-white'}`}
            >
              🖼️ {getText('Photos, Videos & Gazette PDF', 'फोटो, वीडियो व गजट PDF', 'تصاویر، ویڈیوز اور گزٹ پی ڈی ایف')}
            </button>
            <button
              onClick={() => setActiveTab('minutes')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'minutes' ? 'bg-[#F4C430] text-[#0B132B]' : 'bg-black/40 text-gray-300 hover:text-white'}`}
            >
              📝 {getText('Meeting Minutes & Annual Review', 'बैठक कार्यवाही व वार्षिक समीक्षा', 'میٹنگ کارروائی اور سالانہ جائزہ')}
            </button>
          </div>

          {/* TAB 1: IMPLEMENTATION DETAILS & DATES */}
          {activeTab === 'details' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn text-xs">
              <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-3 font-mono">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Resolution Number:</span>
                  <span className="font-bold text-[#F4C430]">{resolution.resolutionNo || 'RES/2026/NAT-01'}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Date Passed:</span>
                  <span className="text-white">{resolution.datePassed || '15 May 2026'}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Effective Date:</span>
                  <span className="text-emerald-300 font-bold">{resolution.effectiveDate || '1 June 2026'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Gazette Ref:</span>
                  <span className="text-yellow-300">{resolution.gazetteRef || 'AIRA-GAZETTE-2026-DL'}</span>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-3">
                <div className="space-y-1">
                  <span className="font-bold text-gray-300 uppercase font-mono block">🛡️ Implementation Committee:</span>
                  <span className="text-emerald-300 font-semibold block">
                    {getText(resolution.implementationCommitteeEn || 'National Matrimonial Compliance Taskforce', resolution.implementationCommitteeHi || 'राष्ट्रीय वैवाहिक अनुपालन कार्यबल', resolution.implementationCommitteeUr || 'نیشنل میٹری مونیل کمپلائنس ٹاسک فورس')}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-gray-300">Progress Status:</span>
                    <span className="text-[#F4C430] font-extrabold">{resolution.implementationScore || 94}% Completed</span>
                  </div>
                  <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#F4C430] rounded-full" style={{ width: `${resolution.implementationScore || 94}%` }} />
                  </div>
                  <p className="text-[11px] text-gray-300 italic">
                    {getText(resolution.progressStatusEn || 'Active statewide enforcement across 350+ districts.', resolution.progressStatusHi || '350+ जिलों में सक्रिय राज्यव्यापी प्रवर्तन।', resolution.progressStatusUr || '350+ اضلاع میں فعال ریاستی نفاذ۔')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HISTORICAL TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-4 animate-fadeIn">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#F4C430] flex items-center gap-1.5">
                <History className="h-4 w-4 text-emerald-400" />
                <span>{getText('Permanent Historical Timeline (Draft -> Summit -> Enactment)', 'स्थायी ऐतिहासिक घटनाक्रम (मसौदा -> सम्मेलन -> लागू)', 'مستقل تاریخی ٹائم لائن (ڈرافٹ -> سمٹ -> نفاذ)')}</span>
              </h5>

              <div className="space-y-4 relative before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#F4C430] before:to-emerald-600">
                {(resolution.historicalTimeline || [
                  { year: '2024', date: '12 Jan 2024', eventEn: 'Initial Draft Proposal submitted by District Convener', eventHi: 'जिला संयोजक द्वारा प्रारंभिक मसौदा प्रस्ताव प्रस्तुत', eventUr: 'ضلعی کنوینر کے ذریعہ ابتدائی ڈرافٹ تجویز پیش کی گئی', status: 'Draft' },
                  { year: '2025', date: '20 Aug 2025', eventEn: 'District Convener Consultations & Pilot Testing in 15 Districts', eventHi: '15 जिलों में परामर्श और परीक्षण', eventUr: '15 اضلاع میں مشاورت اور ٹیسٹنگ', status: 'Committee Review' },
                  { year: '2026', date: '15 May 2026', eventEn: 'Passed with 89.4% majority at Jaipur National Summit', eventHi: 'जयपुर राष्ट्रीय शिखर सम्मेलन में 89.4% बहुमत के साथ पारित', eventUr: 'جے پور قومی سمٹ میں 89.4% اکثریت کے ساتھ منظور', status: 'Passed' },
                  { year: '2026', date: '1 June 2026', eventEn: 'Enactment Act published across 28 State Committees', eventHi: '28 राज्य समितियों में अधिनियम लागू', eventUr: '28 ریاستی کمیٹیوں میں ایکٹ نافذ', status: 'Active Law' }
                ]).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pl-8 relative">
                    <span className="absolute left-1.5 sm:left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#F4C430] ring-4 ring-black" />
                    <div className="bg-black/60 p-3 rounded-xl border border-white/10 w-full space-y-1">
                      <div className="flex justify-between items-center text-[11px] font-mono">
                        <span className="text-[#F4C430] font-extrabold">{item.date} ({item.year})</span>
                        <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">{item.status}</span>
                      </div>
                      <p className="text-xs text-gray-200">
                        {getText(item.eventEn, item.eventHi || item.eventEn, item.eventUr || item.eventEn)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PHOTOS, VIDEOS & GAZETTE PDF */}
          {activeTab === 'media' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
              <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-3">
                <span className="text-xs font-bold text-gray-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ImageIcon className="h-4 w-4 text-[#F4C430]" />
                    <span>{getText('Summit Photos & Video Media:', 'सम्मेलन फोटो एवं वीडियो:', 'سمٹ تصاویر اور ویڈیوز:')}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">Permanent Archive</span>
                </span>

                <div className="flex gap-2 overflow-x-auto py-1">
                  {(resolution.photos && resolution.photos.length > 0 ? resolution.photos : [
                    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format&fit=crop&q=80'
                  ]).map((photo, idx) => (
                    <div key={idx} className="w-24 h-24 rounded-xl overflow-hidden border border-white/20 shrink-0 hover:scale-105 transition">
                      <img src={photo} alt={`Summit Media ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                {resolution.videos && resolution.videos.length > 0 && (
                  <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/20 mt-2">
                    <iframe src={resolution.videos[0]} title="Resolution Video" className="w-full h-full" allowFullScreen></iframe>
                  </div>
                )}
              </div>

              <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-3">
                <span className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <span>{getText('Official PDF Gazette & Attachments:', 'आधिकारिक PDF गजट व दस्तावेज:', 'باضابطہ پی ڈی ایف گزٹ اور دستاویزات:')}</span>
                </span>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => alert(getText('Downloading Official Gazette PDF (Certified copy with digital Sharia seal)...', 'आधिकारिक गजट PDF डाउनलोड हो रहा है...', 'باضابطہ گزٹ پی ڈی ایف ڈاؤن لوڈ ہو رہا ہے...'))}
                    className="w-full text-left flex items-center justify-between bg-gradient-to-r from-emerald-950 to-black p-3 rounded-xl border border-emerald-500/40 text-xs text-emerald-300 hover:border-emerald-400 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2 font-bold">
                      <span className="text-lg">📜</span>
                      <span>{getText('Download Official Signed Gazette (PDF)', 'हस्ताक्षरित आधिकारिक गजट डाउनलोड करें (PDF)', 'باضابطہ دستخط شدہ گزٹ ڈاؤن لوڈ کریں (پی ڈی ایف)')}</span>
                    </span>
                    <ExternalLink className="h-4 w-4 text-[#F4C430]" />
                  </button>

                  {(resolution.supportingDocs || [
                    { name: 'Official_Dowry_Abolition_Gazette_2026.pdf', size: '4.2 MB', url: '#' },
                    { name: 'District_Qazi_Enforcement_Guidelines.docx', size: '1.5 MB', url: '#' }
                  ]).map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl text-xs text-gray-300 font-mono">
                      <span>📄 {doc.name}</span>
                      <span className="text-[10px] text-gray-500">{doc.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: MEETING MINUTES & ANNUAL REVIEW */}
          {activeTab === 'minutes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn text-xs">
              <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-2">
                <span className="font-bold text-[#F4C430] uppercase font-mono flex items-center gap-1.5">
                  <FileText className="h-4 w-4" />
                  <span>{getText('Meeting Minutes (Summary):', 'बैठक कार्यवाही (सारांश):', 'میٹنگ کارروائی (خلاصہ):')}</span>
                </span>
                <p className="text-gray-200 leading-relaxed font-light whitespace-pre-line bg-black/50 p-3 rounded-xl border border-white/5">
                  {getText(
                    resolution.meetingMinutesEn || 'Summary: 418 district delegates participated. Motion tabled by Haji Rafiq Rangrez, seconded by Advocate Zainab Bibi. Passed with 89.4% majority vote.',
                    resolution.meetingMinutesHi || 'सारांश: 418 जिला प्रतिनिधियों ने भाग लिया। हाजी रफीक रंगरेज द्वारा प्रस्ताव प्रस्तुत किया गया, एडवोकेट जैनब बीबी ने समर्थन किया। 89.4% बहुमत से पारित।',
                    resolution.meetingMinutesUr || 'خلاصہ: 418 ضلعی مندوبین نے شرکت کی۔ حاجی رفیق رنگریز کی طرف سے پیش کردہ قرارداد، ایڈووکیٹ زینب بی بی کی تائید۔ 89.4 فیصد اکثریت سے منظور۔'
                  )}
                </p>
              </div>

              <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-3">
                <div className="space-y-1">
                  <span className="font-bold text-emerald-400 uppercase font-mono flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>{getText('Annual Review & Compliance Audit:', 'वार्षिक समीक्षा व अनुपालन ऑडिट:', 'سالانہ جائزہ اور تعمیل آڈٹ:')}</span>
                  </span>
                  <p className="text-gray-200 bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                    {getText(
                      resolution.annualReviewEn || '2026 Annual Audit: Statewide compliance exceeds expectations. Recommended incentives for model districts.',
                      resolution.annualReviewHi || '2026 वार्षिक ऑडिट: राज्यव्यापी अनुपालन उम्मीदों से बेहतर। आदर्श जिलों के लिए प्रोत्साहन की सिफारिश की गई।',
                      resolution.annualReviewUr || '2026 سالانہ آڈٹ: ریاستی تعمیل توقعات سے بہتر۔ ماڈل اضلاع کے لیے مراعات کی سفارش کی گئی۔'
                    )}
                  </p>
                </div>

                {resolution.notifications && resolution.notifications.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-bold text-gray-400 font-mono flex items-center gap-1">
                      <Bell className="h-3 w-3 text-yellow-400" />
                      <span>Notifications Issued:</span>
                    </span>
                    <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1 pl-1">
                      {resolution.notifications.map((notif, idx) => (
                        <li key={idx} className="truncate">{notif}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
