import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, CheckCircle2, FileText, ExternalLink, Play, Award, Settings2, ShieldCheck, ChevronRight } from 'lucide-react';
import { Proposal, WorkflowStage } from './types';
import { AuthService } from '../../services/authService';

interface ProposalCardProps {
  key?: React.Key;
  proposal: Proposal;
  onUpvote: (id: string) => void;
  onOpenComments: (id: string) => void;
  onUpdateStage?: (id: string, stage: WorkflowStage) => void;
  getText: (en: string, hi: string, ur: string) => string;
}

const WORKFLOW_STAGES: { stage: WorkflowStage; labelEn: string; labelHi: string; labelUr: string; icon: string }[] = [
  { stage: 'submitted', labelEn: '1. Submitted', labelHi: '1. प्रस्तुत', labelUr: '1. جمع کیا گیا', icon: '📥' },
  { stage: 'committee_review', labelEn: '2. Committee Review', labelHi: '2. समिति समीक्षा', labelUr: '2. کمیٹی جائزہ', icon: '🔍' },
  { stage: 'published_for_support', labelEn: '3. Published', labelHi: '3. प्रकाशित', labelUr: '3. شائع شدہ', icon: '📢' },
  { stage: 'support_collection', labelEn: '4. Support Collection', labelHi: '4. समर्थन संग्रह', labelUr: '4. حمایت جمع کرنا', icon: '🤝' },
  { stage: 'eligible_for_voting', labelEn: '5. Eligible for Voting', labelHi: '5. मतदान के पात्र', labelUr: '5. ووٹنگ کا اہل', icon: '🗳️' },
  { stage: 'mahapanchayat_discussion', labelEn: '6. Mahapanchayat Discussion', labelHi: '6. महापंचायत चर्चा', labelUr: '6. مہاپنچایت بحث', icon: '🏛️' },
  { stage: 'approved', labelEn: '7. Approved / Enacted', labelHi: '7. स्वीकृत / लागू', labelUr: '7. منظور شدہ / نافذ', icon: '✅' },
];

export default function ProposalCard({
  proposal,
  onUpvote,
  onOpenComments,
  onUpdateStage,
  getText
}: ProposalCardProps) {
  const [showAdminControls, setShowAdminControls] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const currentSession = AuthService.getCurrentSession();
  const isAdmin = currentSession && (currentSession.role === 'Super Administrator' || currentSession.role === 'National Admin');

  // Find index of current workflow stage
  const currentStageIdx = WORKFLOW_STAGES.findIndex(s => s.stage === proposal.workflowStage);

  const progressPct = Math.min(100, Math.round((proposal.upvotes / proposal.minSupportThreshold) * 100));
  const isThresholdAchieved = proposal.upvotes >= proposal.minSupportThreshold;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-emerald-200 transition duration-300 shadow-sm hover:shadow-md space-y-6 relative overflow-hidden">
      {/* Top badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-50 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-xs font-mono font-bold">
            📋 {proposal.docketNo}
          </span>
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-xs font-semibold">
            {getText(proposal.categoryEn, proposal.categoryHi, proposal.categoryUr)}
          </span>
          <span className="text-gray-500 text-xs font-mono">
            • {getText(`Submitted: ${proposal.dateSubmitted}`, `प्रस्तुत: ${proposal.dateSubmitted}`, `تاریخ: ${proposal.dateSubmitted}`)}
          </span>
        </div>

        {isAdmin && (
          <button
            onClick={() => setShowAdminControls(!showAdminControls)}
            className="text-[11px] bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-emerald-700 px-3 py-1 rounded-full border border-gray-200 flex items-center gap-1.5 transition"
            title="Toggle Admin Workflow Simulator"
          >
            <Settings2 className="h-3.5 w-3.5 text-emerald-600" />
            <span>{getText('Admin Workflow Config', 'एडमिन कार्यप्रणाली', 'ایڈمن ورک فلو')}</span>
          </button>
        )}
      </div>

      {/* Admin Controls Drawer (if opened) */}
      {isAdmin && showAdminControls && onUpdateStage && (
        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-amber-600" />
              <span>{getText('Admin Simulator: Advance Workflow Stage & Thresholds', 'एडमिन सिम्युलेटर: कार्यप्रणाली चरण बदलें', 'ایڈمن سمیلیٹر: ورک فلو مرحلہ تبدیل کریں')}</span>
            </span>
            <span className="text-[10px] font-mono text-amber-700 bg-white px-2 py-0.5 rounded border border-amber-200">
              Min Threshold: {proposal.minSupportThreshold} Supporters
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {WORKFLOW_STAGES.map((s) => (
              <button
                key={s.stage}
                onClick={() => onUpdateStage(proposal.id, s.stage)}
                className={`text-[10px] px-2.5 py-1 rounded-lg font-mono transition ${
                  proposal.workflowStage === s.stage
                    ? 'bg-emerald-600 text-white font-extrabold shadow'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {s.icon} {getText(s.labelEn, s.labelHi, s.labelUr)}
              </button>
            ))}
            <button
              onClick={() => onUpdateStage(proposal.id, 'rejected')}
              className={`text-[10px] px-2.5 py-1 rounded-lg font-mono transition ${
                proposal.workflowStage === 'rejected' ? 'bg-rose-600 text-white font-extrabold' : 'bg-white text-rose-600 border border-rose-200 hover:bg-rose-50'
              }`}
            >
              ❌ {getText('Rejected', 'अस्वीकृत', 'مسترد')}
            </button>
          </div>
        </div>
      )}

      {/* Title and Proposer */}
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B132B] leading-snug">
          {getText(proposal.titleEn, proposal.titleHi, proposal.titleUr)}
        </h3>
        <p className="text-xs text-emerald-700 font-mono font-bold">
          👤 {getText(proposal.proposerEn, proposal.proposerHi, proposal.proposerUr)} • 📍 {getText(proposal.districtEn, proposal.districtHi, proposal.districtUr)}
        </p>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
          {getText(proposal.descriptionEn, proposal.descriptionHi, proposal.descriptionUr)}
        </p>
      </div>

      {/* 7-STAGE WORKFLOW PIPELINE TRACKER */}
      <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-gray-500">
          <span>🔄 {getText('Citizen Proposal Workflow Status:', 'नागरिक प्रस्ताव कार्यप्रणाली स्थिति:', 'شہری تجویز ورک فلو کی صورتحال:')}</span>
          <span className="text-emerald-700 font-mono font-bold">
            {proposal.workflowStage === 'rejected' ? '❌ REJECTED' : WORKFLOW_STAGES[currentStageIdx >= 0 ? currentStageIdx : 0]?.labelEn}
          </span>
        </div>

        <div className="flex items-center justify-between gap-1 overflow-x-auto py-2 px-1">
          {WORKFLOW_STAGES.map((step, idx) => {
            const isCompleted = currentStageIdx > idx;
            const isCurrent = currentStageIdx === idx && proposal.workflowStage !== 'rejected';
            return (
              <React.Fragment key={step.stage}>
                <div className={`flex flex-col items-center min-w-[70px] sm:min-w-[85px] p-2 rounded-xl border text-center transition ${
                  isCurrent 
                    ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-md scale-105' 
                    : isCompleted 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100 font-semibold'
                    : 'bg-white text-gray-400 border-gray-100'
                }`}>
                  <span className="text-base mb-1">{step.icon}</span>
                  <span className="text-[9px] sm:text-[10px] leading-tight block line-clamp-2">
                    {getText(step.labelEn, step.labelHi, step.labelUr)}
                  </span>
                </div>
                {idx < WORKFLOW_STAGES.length - 1 && (
                  <ChevronRight className={`h-4 w-4 shrink-0 ${isCompleted ? 'text-emerald-500' : 'text-gray-300'}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* SUPPORT PROGRESS THRESHOLD */}
      <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 space-y-2 shadow-sm">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-emerald-800 flex items-center gap-1.5">
            <Award className="h-4 w-4 text-emerald-600" />
            <span>{getText('Verified Public Support Collection:', 'सत्यापित जन समर्थन संग्रह:', 'تصدیق شدہ عوامی حمایت جمع کرنا:')}</span>
          </span>
          <span className="font-mono font-extrabold text-emerald-700">
            {proposal.upvotes.toLocaleString()} / {proposal.minSupportThreshold} {getText('Supporters Needed', 'समर्थक आवश्यक', 'حامی مطلوب')} ({progressPct}%)
          </span>
        </div>

        <div className="w-full h-3 bg-white rounded-full overflow-hidden p-0.5 border border-emerald-100">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${
              isThresholdAchieved ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 animate-pulse' : 'bg-emerald-500'
            }`}
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-gray-600 font-mono">
          <span>{isThresholdAchieved ? '🟢 ' + getText('Threshold Achieved! Eligible for Community Voting & Summit Docket.', 'सीमा प्राप्त हुई! सामुदायिक मतदान एवं शिखर सम्मेलन के लिए पात्र।', 'حد حاصل ہو گئی! کمیونٹی ووٹنگ اور سمٹ کے لیے اہل۔') : '⏳ ' + getText(`Needs ${proposal.minSupportThreshold - proposal.upvotes} more verified supporters to qualify for ballot.`, `मतदान के लिए ${proposal.minSupportThreshold - proposal.upvotes} और समर्थकों की आवश्यकता है।`, `ووٹنگ کے لیے مزید ${proposal.minSupportThreshold - proposal.upvotes} حامیوں کی ضرورت ہے۔`)}</span>
        </div>
      </div>

      {/* BENEFITS BOX */}
      {proposal.benefitsEn && (
        <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-emerald-500 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <span>✨</span>
            <span>{getText('Concrete Benefits & Impact:', 'ठोस लाभ एवं प्रभाव:', 'ٹھوس فوائد اور اثرات:')}</span>
          </span>
          <p className="text-xs sm:text-sm text-gray-700 whitespace-pre-line leading-relaxed">
            {getText(proposal.benefitsEn, proposal.benefitsHi || proposal.benefitsEn, proposal.benefitsUr || proposal.benefitsEn)}
          </p>
        </div>
      )}

      {/* SUPPORTING DOCUMENTS, IMAGES & VIDEO EMBED */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        {/* Supporting Docs */}
        {proposal.supportingDocs && proposal.supportingDocs.length > 0 && (
          <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 space-y-2">
            <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-emerald-600" />
              <span>{getText('Supporting Documents Attached:', 'संलग्न सहायक दस्तावेज:', 'منسلک معاون دستاویزات:')} ({proposal.supportingDocs.length})</span>
            </span>
            <div className="space-y-1.5">
              {proposal.supportingDocs.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url || '#'}
                  onClick={(e) => { e.preventDefault(); alert(getText(`Downloading ${doc.name} (${doc.size})...`, `${doc.name} (${doc.size}) डाउनलोड हो रहा है...`, `${doc.name} (${doc.size}) ڈاؤن لوڈ ہو رہا ہے...`)); }}
                  className="flex items-center justify-between bg-white hover:bg-gray-50 p-2 rounded-xl text-xs text-emerald-700 transition font-mono border border-gray-100"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <span>📄</span>
                    <span className="truncate">{doc.name}</span>
                  </span>
                  <span className="text-[10px] text-gray-500 shrink-0 flex items-center gap-1">
                    <span>{doc.size}</span>
                    <ExternalLink className="h-3 w-3 text-emerald-600" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Images & Video */}
        {( (proposal.images && proposal.images.length > 0) || proposal.videoUrl ) && (
          <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 space-y-2">
            <span className="text-xs font-bold text-gray-700 flex items-center justify-between">
              <span>🖼️ {getText('Evidence / Visual Media:', 'प्रमाण / दृश्य मीडिया:', 'شواہد / بصری میڈیا:')}</span>
              {proposal.videoUrl && (
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="text-[10px] bg-rose-50 text-rose-600 hover:bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200 flex items-center gap-1 transition"
                >
                  <Play className="h-3 w-3 fill-current" />
                  <span>{showVideo ? 'Hide Video' : 'Watch Video'}</span>
                </button>
              )}
            </span>

            {proposal.images && proposal.images.length > 0 && (
              <div className="flex gap-2 overflow-x-auto py-1">
                {proposal.images.map((img, idx) => (
                  <div key={idx} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-gray-200 shrink-0 hover:scale-105 transition">
                    <img src={img} alt={`Evidence ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            {showVideo && proposal.videoUrl && (
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-200 mt-2">
                <iframe
                  src={proposal.videoUrl}
                  title="Proposal Video"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-50">
        <button
          onClick={() => onUpvote(proposal.id)}
          className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center space-x-2 transition transform active:scale-95"
        >
          <ThumbsUp className="h-4 w-4 fill-current" />
          <span>{getText('Endorse Proposal', 'प्रस्ताव का समर्थन करें', 'تجویز کی تائید کریں')} ({proposal.upvotes})</span>
        </button>

        <button
          onClick={() => onOpenComments(proposal.id)}
          className="flex-1 sm:flex-initial bg-white hover:bg-gray-50 text-gray-700 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm border border-gray-200 hover:border-emerald-500 flex items-center justify-center space-x-2 transition"
        >
          <MessageSquare className="h-4 w-4 text-emerald-600" />
          <span>{getText('Community Suggestions & Debate', 'सामुदायिक सुझाव व चर्चा', 'کمیونٹی تجاویز اور بحث')} ({proposal.commentsCount || 24})</span>
        </button>
      </div>
    </div>
  );
}
