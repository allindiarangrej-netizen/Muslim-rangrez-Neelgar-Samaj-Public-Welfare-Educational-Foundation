import React, { useState } from 'react';
import { X, Sparkles, BarChart3, TrendingUp, PieChart, MapPin, Users, Award, ShieldCheck, Flame, Calendar, ArrowUpRight } from 'lucide-react';
import { AIAnalyticsData } from './types';

interface AIAnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  analyticsData: AIAnalyticsData;
  surveyTitle?: string;
  getText: (en: string, hi: string, ur: string) => string;
}

export default function AIAnalyticsModal({
  isOpen,
  onClose,
  analyticsData,
  surveyTitle = 'Universal Community Marriage Reform & Dowry Abolition',
  getText
}: AIAnalyticsModalProps) {
  const [activeSection, setActiveSection] = useState<'demographics' | 'regions' | 'reforms' | 'trends'>('demographics');

  if (!isOpen || !analyticsData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#07351B] border-2 border-[#F4C430] rounded-3xl max-w-5xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl text-white max-h-[92vh] overflow-y-auto my-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/70 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-12 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-300">
            <Sparkles className="h-4 w-4 text-[#F4C430] animate-spin" style={{ animationDuration: '4s' }} />
            <span className="uppercase tracking-wider">
              {getText('Deep AI Analytics Suite & Demographics Report', 'डीप AI एनालिटिक्स एवं जनसांख्यिकी रिपोर्ट', 'ڈیپ اے آئی اینالیٹکس اور ڈیموگرافکس رپورٹ')}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
            {surveyTitle}
          </h3>
          <p className="text-xs text-gray-300">
            {getText(
              'Real-time cryptographic consensus analysis generated from verified digital Member IDs across 28 State Committees & 350+ Districts.',
              '28 राज्य समितियों और 350+ जिलों में सत्यापित डिजिटल सदस्य ID से उत्पन्न रीयल-टाइम सर्वसम्मति विश्लेषण।',
              '28 ریاستی کمیٹیوں اور 350+ اضلاع میں تصدیق شدہ ڈیجیٹل ممبر آئی ڈی سے تیار کردہ ریئل ٹائم اتفاق رائے تجزیہ۔'
            )}
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveSection('demographics')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeSection === 'demographics' ? 'bg-[#F4C430] text-[#0B132B] shadow-lg' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>{getText('Age, Education & Occupation', 'आयु, शिक्षा व व्यवसाय', 'عمر، تعلیم اور پیشہ')}</span>
          </button>

          <button
            onClick={() => setActiveSection('regions')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeSection === 'regions' ? 'bg-[#F4C430] text-[#0B132B] shadow-lg' : 'text-gray-300 hover:text-white'
            }`}
          >
            <MapPin className="h-4 w-4" />
            <span>{getText('District Opinion & Heat Maps', 'जिला राय व हीट मैप', 'ضلع کی رائے اور ہیٹ میپس')}</span>
          </button>

          <button
            onClick={() => setActiveSection('reforms')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeSection === 'reforms' ? 'bg-[#F4C430] text-[#0B132B] shadow-lg' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Flame className="h-4 w-4" />
            <span>{getText('Requested Reforms & Topics', 'सुधार मांग व विषय', 'اصلاحی مطالبات اور موضوعات')}</span>
          </button>

          <button
            onClick={() => setActiveSection('trends')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeSection === 'trends' ? 'bg-[#F4C430] text-[#0B132B] shadow-lg' : 'text-gray-300 hover:text-white'
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            <span>{getText('1-Yr & 5-Yr Trend Comparison', '1-वर्ष व 5-वर्ष रुझान तुलना', '1 سال اور 5 سالہ رجحان کا موازنہ')}</span>
          </button>
        </div>

        {/* DEMOGRAPHY PARTICIPATION RATIOS HIGHLIGHT BANNER */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900/60 to-black p-4 rounded-2xl border border-emerald-500/40 space-y-1 text-center shadow-inner">
            <span className="text-xs text-emerald-300 font-mono font-bold uppercase block">👩 {getText('Women’s Participation', 'महिला भागीदारी', 'خواتین کی شمولیت')}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F4C430]">
              {analyticsData.demographicParticipation.womenParticipationPct}%
            </div>
            <span className="text-[10px] text-gray-400 block">+14% Growth from last summit</span>
          </div>

          <div className="bg-gradient-to-br from-blue-950 via-blue-900/60 to-black p-4 rounded-2xl border border-blue-500/40 space-y-1 text-center shadow-inner">
            <span className="text-xs text-blue-300 font-mono font-bold uppercase block">⚡ {getText('Youth Participation (18-30)', 'युवा भागीदारी (18-30)', 'نوجوانوں کی شمولیت')}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F4C430]">
              {analyticsData.demographicParticipation.youthParticipationPct}%
            </div>
            <span className="text-[10px] text-gray-400 block">Highest active voting block</span>
          </div>

          <div className="bg-gradient-to-br from-purple-950 via-purple-900/60 to-black p-4 rounded-2xl border border-purple-500/40 space-y-1 text-center shadow-inner">
            <span className="text-xs text-purple-300 font-mono font-bold uppercase block">👴 {getText('Senior Citizens (60+)', 'वरिष्ठ नागरिक (60+)', 'سینیئر سٹیزن')}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F4C430]">
              {analyticsData.demographicParticipation.seniorCitizenParticipationPct}%
            </div>
            <span className="text-[10px] text-gray-400 block">Guiding elder wisdom & sharia</span>
          </div>
        </div>

        {/* TAB CONTENT 1: AGE, EDUCATION & OCCUPATION */}
        {activeSection === 'demographics' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Age Group Analysis */}
              <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center gap-2">
                  <PieChart className="h-4 w-4 text-emerald-400" />
                  <span>{getText('Age Group Analysis & Priorities', 'आयु वर्ग विश्लेषण एवं प्राथमिकताएं', 'عمر کے گروپ کا تجزیہ اور ترجیحات')}</span>
                </h4>
                <div className="space-y-3">
                  {analyticsData.ageGroupAnalysis.map((age, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-white">{age.group}</span>
                        <span className="font-mono text-[#F4C430] font-bold">{age.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-[#F4C430]" style={{ width: `${age.percentage}%` }} />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono block">Top Concern: {age.topConcern}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education-wise Trends */}
              <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center gap-2">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span>{getText('Education-wise Trends', 'शिक्षा अनुसार रुझान', 'تعلیم کے لحاظ سے رجحانات')}</span>
                </h4>
                <div className="space-y-3">
                  {analyticsData.educationTrends.map((edu, idx) => (
                    <div key={idx} className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-white">
                        <span>🎓 {edu.educationLevel}</span>
                        <span className="text-emerald-300 font-mono">{edu.supportRate}% Consensus</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
                        <span>Turnout Rate: {edu.participationRate}%</span>
                        <span className="text-[#F4C430]">High Correlation</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Occupation-wise Trends */}
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>{getText('Occupation-wise Trends & Digital Turnout', 'व्यवसाय अनुसार रुझान एवं डिजिटल मतदान', 'پیشہ کے لحاظ سے رجحانات اور ڈیجیٹل ووٹنگ')}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {analyticsData.occupationTrends.map((occ, idx) => (
                  <div key={idx} className="bg-gradient-to-b from-black/60 to-black/30 p-4 rounded-xl border border-white/10 space-y-2 text-center">
                    <span className="text-xs font-bold text-white block truncate">{occ.occupation}</span>
                    <div className="text-xl font-extrabold text-[#F4C430] font-mono">{occ.supportRate}%</div>
                    <span className="text-[10px] text-gray-400 block">Participation: {occ.participationRate}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 2: DISTRICT OPINION & HEAT MAPS */}
        {activeSection === 'regions' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Heat Maps Data */}
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-400" />
                  <span>{getText('Regional Consensus Heat Maps', 'क्षेत्रीय सर्वसम्मति हीट मैप', 'علاقائی اتفاق رائے ہیٹ میپس')}</span>
                </span>
                <span className="text-[11px] text-gray-400 font-mono">Color-Coded Intensity Grid</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {analyticsData.heatMapsData.map((heat, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border relative overflow-hidden ${
                      heat.intensity === 'High'
                        ? 'bg-gradient-to-br from-emerald-950/80 via-emerald-900/40 to-black border-emerald-500/50'
                        : 'bg-gradient-to-br from-yellow-950/60 via-yellow-900/30 to-black border-yellow-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-2">
                      <span className="text-white">{heat.region}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-extrabold ${
                        heat.intensity === 'High' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        🔥 {heat.intensity} Intensity
                      </span>
                    </div>
                    <div className="flex items-end justify-between font-mono pt-2">
                      <span className="text-[11px] text-gray-400">Consensus Score:</span>
                      <span className="text-2xl font-extrabold text-[#F4C430]">{heat.consensusScore}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* District-wise Opinion Analysis Table */}
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4 overflow-x-auto">
              <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-emerald-400" />
                <span>{getText('District-wise Opinion Breakdown (Yes % / No % / Neutral %)', 'जिलेवार राय विभाजन (हाँ % / नहीं % / तटस्थ %)', 'ضلع کے لحاظ سے رائے کی تقسیم')}</span>
              </h4>

              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/20 text-xs text-gray-400 uppercase font-mono">
                    <th className="py-3 px-4">District / State Committee</th>
                    <th className="py-3 px-4">Yes % (In Favor)</th>
                    <th className="py-3 px-4">No % (Against)</th>
                    <th className="py-3 px-4">Neutral / Abstain</th>
                    <th className="py-3 px-4 text-right">Voter Turnout</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-white/10">
                  {analyticsData.districtOpinion.map((dist, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition">
                      <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                        <span>📍</span>
                        <span>{dist.district}</span>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-extrabold text-emerald-400">{dist.yesPct}%</td>
                      <td className="py-3.5 px-4 font-mono text-red-400">{dist.noPct}%</td>
                      <td className="py-3.5 px-4 font-mono text-gray-400">{dist.neutralPct}%</td>
                      <td className="py-3.5 px-4 font-mono text-right font-bold text-[#F4C430]">{dist.turnout}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB CONTENT 3: REQUESTED REFORMS & FREQUENTLY SUGGESTED TOPICS */}
        {activeSection === 'reforms' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Most Requested Reforms */}
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-red-400" />
                  <span>{getText('Most Requested Community Reforms (Ranked)', 'सर्वाधिक मांगे गए समाज सुधार (रैंक)', 'سب سے زیادہ طلب کردہ کمیونٹی اصلاحات')}</span>
                </span>
                <span className="text-xs font-mono text-gray-400">Verified Citizen Petitions</span>
              </h4>

              <div className="space-y-3">
                {analyticsData.mostRequestedReforms.map((ref, idx) => (
                  <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#F4C430]/50 transition">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#F4C430]/20 text-[#F4C430] font-mono font-extrabold flex items-center justify-center shrink-0">
                        #{idx + 1}
                      </span>
                      <span className="text-sm font-bold text-white">{ref.topic}</span>
                    </div>
                    <div className="flex items-center gap-4 font-mono text-xs self-end sm:self-auto shrink-0">
                      <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                        {ref.growthRate}
                      </span>
                      <span className="text-[#F4C430] font-extrabold">{ref.requestsCount.toLocaleString()} Petitions</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Suggested Topics Tag Cloud */}
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center gap-2">
                <span>🏷️</span>
                <span>{getText('Frequently Suggested Topics & Keyword Cloud', 'बार-बार सुझाए गए विषय एवं कीवर्ड क्लाउड', 'اکثر تجویز کردہ موضوعات اور کیورڈ کلاؤڈ')}</span>
              </h4>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {analyticsData.frequentlySuggestedTopics.map((tagItem, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-[#03150b] to-[#07351B] px-4 py-2.5 rounded-2xl border border-[#F4C430]/30 flex items-center gap-2.5 hover:scale-105 transition shadow-md"
                  >
                    <span className="text-sm font-extrabold text-[#F4C430] font-mono">{tagItem.tag}</span>
                    <span className="bg-black/40 text-gray-300 px-2 py-0.5 rounded text-[11px] font-mono">
                      {tagItem.mentions} mentions
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 4: TREND ANALYSIS (ANNUAL & 5-YEAR) */}
        {activeSection === 'trends' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Annual Comparison */}
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  <span>{getText('Annual Comparison (2023 - 2026 Evolution)', 'वार्षिक तुलना (2023 - 2026 प्रगति)', 'سالانہ موازنہ (2023 - 2026 ارتقاء)')}</span>
                </span>
                <span className="text-xs font-mono text-emerald-300">+30% Growth in Digital Turnout</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {analyticsData.trendAnalysis.annualComparison.map((yr, idx) => (
                  <div key={idx} className="bg-gradient-to-b from-black/60 to-black/30 p-4 rounded-xl border border-white/10 space-y-3 text-center relative">
                    <span className="text-sm font-mono font-extrabold text-white block">{yr.year}</span>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-400 font-mono">Voter Participation</div>
                      <div className="text-xl font-extrabold text-[#F4C430] font-mono">{yr.averageParticipation}%</div>
                    </div>
                    <div className="space-y-1 pt-1 border-t border-white/10">
                      <div className="text-xs text-gray-400 font-mono">Reform Adoption Rate</div>
                      <div className="text-lg font-bold text-emerald-400 font-mono">{yr.reformAdoptionRate}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Five-Year Comparison */}
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4 overflow-x-auto">
              <h4 className="text-sm font-bold text-[#F4C430] uppercase tracking-wide flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-yellow-400" />
                <span>{getText('Five-Year Strategic Comparison (2022 vs 2024 vs 2026)', 'पांच वर्षीय रणनीतिक तुलना (2022 बनाम 2024 बनाम 2026)', 'پانچ سالہ اسٹریٹجک موازنہ (2022 بمقابلہ 2024 بمقابلہ 2026)')}</span>
              </h4>

              <table className="w-full text-left border-collapse min-w-[550px]">
                <thead>
                  <tr className="border-b border-white/20 text-xs text-gray-400 uppercase font-mono">
                    <th className="py-3 px-4">Strategic Community Metric</th>
                    <th className="py-3 px-4">2022 Baseline</th>
                    <th className="py-3 px-4">2024 Mid-point</th>
                    <th className="py-3 px-4 text-emerald-400">2026 Achievement</th>
                    <th className="py-3 px-4 text-right">Trend Velocity</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-white/10">
                  {analyticsData.trendAnalysis.fiveYearComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition font-mono">
                      <td className="py-3.5 px-4 font-sans font-bold text-white">{row.metric}</td>
                      <td className="py-3.5 px-4 text-gray-400">{row.val2022}</td>
                      <td className="py-3.5 px-4 text-gray-300">{row.val2024}</td>
                      <td className="py-3.5 px-4 font-extrabold text-[#F4C430] text-sm">{row.val2026}</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-lg font-bold flex items-center justify-end gap-1 ml-auto w-fit">
                          <ArrowUpRight className="h-3 w-3" />
                          <span>{row.trend}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400 font-mono">
          <span>🔒 Verified Cryptographic Analytics Engine v4.2 • Certified by National Secretariat</span>
          <button
            onClick={onClose}
            className="bg-[#F4C430] hover:bg-yellow-400 text-[#0B132B] font-extrabold px-6 py-2 rounded-xl text-xs uppercase transition shadow"
          >
            {getText('Close Dashboard', 'डैशबोर्ड बंद करें', 'ڈیش بورڈ بند کریں')}
          </button>
        </div>
      </div>
    </div>
  );
}
