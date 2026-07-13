import React, { useState, useEffect } from 'react';
import { 
  Languages, UserCheck, ShieldCheck, 
  Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular Components
import { Language, VerifiedMember, Survey, Resolution, Proposal } from './mahapanchayat/types';
import { PILLARS, TABS } from './mahapanchayat/Constants';
import { getText } from './mahapanchayat/utils';
import { HeroHeader } from './mahapanchayat/HeroHeader';
import { VerificationBanner } from './mahapanchayat/VerificationBanner';
import { ObjectivesTab } from './mahapanchayat/ObjectivesTab';
import { SurveysTab } from './mahapanchayat/SurveysTab';
import { ArchiveTab } from './mahapanchayat/ArchiveTab';
import { ImplementationTab } from './mahapanchayat/ImplementationTab';
import SecurityAuditDashboard from './mahapanchayat/SecurityAuditDashboard';
import CommitteeDashboard from './mahapanchayat/CommitteeDashboard';
import VolunteerDashboard from './mahapanchayat/VolunteerDashboard';
import ReportsAndNotifications from './mahapanchayat/ReportsAndNotifications';
import { OpinionPollsSection } from './mahapanchayat/OpinionPollsSection';
import { OrganizationalFrameworkSection } from './mahapanchayat/OrganizationalFrameworkSection';
import GuidingPrinciplesSection from './mahapanchayat/GuidingPrinciplesSection';
import ProposalCard from './mahapanchayat/ProposalCard';
import ProposalWorkflowModal from './mahapanchayat/ProposalWorkflowModal';
import AdminDashboard from './mahapanchayat/AdminDashboard';
import AIAnalyticsModal from './mahapanchayat/AIAnalyticsModal';
import CommunitySuggestionsBox from './mahapanchayat/CommunitySuggestionsBox';
import { INITIAL_PROPOSALS_DATA, INITIAL_COMMENTS_DATA, INITIAL_AI_ANALYTICS_DATA, INITIAL_RESOLUTIONS_DATA } from './mahapanchayat/mockData';

// Mock Data (In real app, these would come from an API)
const MOCK_SURVEYS: Survey[] = [
  {
    id: 's1',
    titleEn: 'Marriage Reform: Dowry Limits & Gift Caps',
    titleHi: 'विवाह सुधार: दहेज सीमा और उपहार कैप',
    titleUr: 'شادی میں اصلاحات: جہیز کی حد اور تحفہ کی حد',
    descriptionEn: 'Proposal to strictly cap marriage gifts to ₹1,100 and eliminate dowry demands. Includes penalties for violators and social boycott protocols.',
    descriptionHi: 'विवाह उपहारों को ₹1,100 तक सीमित करने और दहेज की मांग को खत्म करने का प्रस्ताव। उल्लंघन करने वालों के लिए दंड और सामाजिक बहिष्कार के नियम शामिल हैं।',
    descriptionUr: 'شادی کے تحائف کو 1,100 روپے تک محدود کرنے اور جہیز کے مطالبات کو ختم کرنے کی تجویز۔ خلاف ورزی کرنے والوں کے لیے جرمانے اور سماجی بائیکاٹ کے اصول شامل ہیں۔',
    categoryEn: 'Social Reform',
    categoryHi: 'सामाजिक सुधार',
    categoryUr: 'سماجی اصلاحات',
    totalVotes: 42850,
    endDate: '15 Nov 2025',
    status: 'active'
  },
  {
    id: 's2',
    titleEn: 'Education Fund: 2% Community Cess for Higher Studies',
    titleHi: 'शिक्षा कोष: उच्च शिक्षा के लिए 2% सामुदायिक उपकर',
    titleUr: 'تعلیمی فنڈ: اعلیٰ تعلیم کے لیے 2% کمیونٹی سیس',
    descriptionEn: 'Establishing a national scholarship fund for underprivileged Rangrez students. Funded by a voluntary 2% cess on business profits.',
    descriptionHi: 'वंचित रंगरेज छात्रों के लिए एक राष्ट्रीय छात्रवृत्ति कोष की स्थापना। व्यावसायिक लाभ पर स्वैच्छिक 2% उपकर द्वारा वित्तपोषित।',
    descriptionUr: 'پسماندہ رنگریز طلباء کے لیے قومی اسکالرشپ فنڈ کا قیام۔ کاروباری منافع پر رضاکارانہ 2% سیس کے ذریعے مالی اعانت فراہم کی جائے گی۔',
    categoryEn: 'Education',
    categoryHi: 'शिक्षा',
    categoryUr: 'تعلیم',
    totalVotes: 31200,
    endDate: '20 Nov 2025',
    status: 'active'
  }
];

const MOCK_RESOLUTIONS: any[] = [
  {
    id: 'r1',
    resolutionNo: 'MAHA-2024-001',
    year: '2024',
    effectiveDate: '1 Jan 2025',
    gazetteRef: 'Vol. 42 / Page 108',
    summitNameEn: 'Grand Mahapanchayat of Jaipur',
    summitNameHi: 'जयपुर की विशाल महापंचायत',
    summitNameUr: 'جے پور کی عظیم مہاپنچایت',
    categoryEn: 'Marriage & Social Norms',
    categoryHi: 'विवाह एवं सामाजिक मानदंड',
    categoryUr: 'شادی اور سماجی اصول',
    titleEn: 'Mandatory Educational Qualification for Nikah Registrars',
    titleHi: 'निकाह रजिस्ट्रार के लिए अनिवार्य शैक्षणिक योग्यता',
    titleUr: 'نکاح رجسٹرار کے لیے لازمی تعلیمی قابلیت',
    officialTextEn: 'Henceforth, every certified Qazi or Nikah Registrar within the community must verify that both bride and groom have completed at least secondary education before conducting the ceremony.',
    officialTextHi: 'अब से, समुदाय के भीतर प्रत्येक प्रमाणित काजी या निकाह रजिस्ट्रार को यह सत्यापित करना होगा कि निकाह से पहले दूल्हा और दुल्हन दोनों ने कम से कम माध्यमिक शिक्षा पूरी की है।',
    officialTextUr: 'اب سے، برادری کے اندر ہر تصدیق شدہ قاضی یا نکاح رجسٹرار کو یہ تصدیق کرنی ہوگی کہ نکاح سے پہلے دولہا اور دلہن دونوں نے کم از کم ثانوی تعلیم مکمل کر لی ہے۔',
    implementationScore: 88,
    progressStatusEn: 'Implemented across 12 states; 4 district committees under review.',
    progressStatusHi: '12 राज्यों में लागू; 4 जिला समितियां समीक्षाधीन हैं।',
    progressStatusUr: '12 ریاستوں میں نافذ؛ 4 ضلعی کمیٹیاں زیر غور ہیں۔'
  }
];

const MOCK_PROPOSALS: Proposal[] = [
  {
    id: 'p1',
    docketNo: 'PRP-2025-001',
    titleEn: 'State-Level Digital Career Mentorship Hubs',
    titleHi: 'राज्य-स्तरीय डिजिटल करियर परामर्श केंद्र',
    titleUr: 'ریاستی سطح کے ڈیجیٹل کیریئر رہنمائی مراکز',
    proposerEn: 'Youth Leadership Wing',
    proposerHi: 'युवा नेतृत्व विंग',
    proposerUr: 'یوتھ لیڈرشپ ونگ',
    districtEn: 'Ahmedabad',
    districtHi: 'अहमदाबाद',
    districtUr: 'احمد آباد',
    categoryEn: 'Education & Career',
    categoryHi: 'शिक्षा और करियर',
    categoryUr: 'تعلیم اور کیریئر',
    descriptionEn: 'Establishment of 28 state-level digital hubs to provide UPSC, NEET, and JEE coaching guidance along with startup incubation for Rangrez entrepreneurs.',
    descriptionHi: '28 राज्य-स्तरीय डिजिटल केंद्रों की स्थापना जो UPSC, NEET और JEE कोचिंग के साथ रंगरेज उद्यमियों के लिए स्टार्टअप इनक्यूबेशन प्रदान करेंगे।',
    descriptionUr: '28 ریاستی سطح کے ڈیجیٹل مراکز کا قیام جو UPSC، NEET اور JEE کوچنگ کے ساتھ رنگریز کاروباریوں کے لیے اسٹارٹ اپ انکیوبیشن فراہم کریں گے۔',
    benefitsEn: '• Career acceleration for 50,000+ students\n• ₹2.5 Cr annual community wealth creation\n• Centralized talent directory',
    upvotes: 1450,
    minSupportThreshold: 2000,
    commentsCount: 42,
    workflowStage: 'published_for_support',
    status: 'under_review',
    dateSubmitted: '12 June 2025'
  },
  {
    id: 'p2',
    docketNo: 'PRP-2025-002',
    titleEn: 'Unified Zakat-Education Wallet',
    titleHi: 'एकीकृत जकात-शिक्षा वॉलेट',
    titleUr: 'متحدہ زکوٰۃ تعلیمی والٹ',
    proposerEn: 'Central Welfare Board',
    proposerHi: 'केंद्रीय कल्याण बोर्ड',
    proposerUr: 'مرکزی فلاحی بورڈ',
    districtEn: 'Lucknow',
    districtHi: 'लखनऊ',
    districtUr: 'لکھنؤ',
    categoryEn: 'Welfare & Support',
    categoryHi: 'कल्याण और सहायता',
    categoryUr: 'فلاح و بہبود اور مدد',
    descriptionEn: 'A blockchain-based transparent Zakat collection and disbursement system focused 100% on higher education scholarships.',
    descriptionHi: 'उच्च शिक्षा छात्रवृत्ति पर 100% केंद्रित ब्लॉकचेन-आधारित पारदर्शी जकात संग्रह और वितरण प्रणाली।',
    descriptionUr: 'اعلیٰ تعلیم کے وظائف پر 100% توجہ مرکوز بلاک چین پر مبنی شفاف زکوٰۃ جمع کرنے اور تقسیم کرنے کا نظام۔',
    benefitsEn: '• 100% Transparency\n• Instant fund disbursement\n• Zero administrative leakage',
    upvotes: 2100,
    minSupportThreshold: 2000,
    commentsCount: 156,
    workflowStage: 'eligible_for_voting',
    status: 'approved_for_ballot',
    dateSubmitted: '05 July 2025'
  }
];

interface MahapanchayatSystemProps {
  currentLanguage?: Language;
  defaultTab?: string;
}

const MahapanchayatSystem: React.FC<MahapanchayatSystemProps> = ({ currentLanguage: propLanguage, defaultTab }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(propLanguage || 'hi');
  const [activeTab, setActiveTab] = useState<string>(defaultTab || 'objectives');

  useEffect(() => {
    if (propLanguage) {
      setCurrentLanguage(propLanguage);
    }
  }, [propLanguage]);

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);
  const [verifiedMember, setVerifiedMember] = useState<VerifiedMember | null>(null);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [proposals, setProposals] = useState<Proposal[]>(INITIAL_PROPOSALS_DATA);
  const [resolutions, setResolutions] = useState<any[]>(INITIAL_RESOLUTIONS_DATA);
  const [comments, setComments] = useState<any[]>(INITIAL_COMMENTS_DATA);
  const [activeModalCommentId, setActiveModalCommentId] = useState<string | null>(null);
  const [showAIAnalyticsModal, setShowAIAnalyticsModal] = useState<boolean>(false);
  const [showProposalModal, setShowProposalModal] = useState(false);

  // Mock auto-login for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setVerifiedMember({
        fullName: 'Mohammed Idris Rangrez',
        memberId: 'RG-RJ-JP-2025-0042',
        district: 'Jaipur City',
        state: 'Rajasthan',
        verificationHash: '8f4a2b1c...9e0d'
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleVote = (survey: Survey) => {
    if (!verifiedMember) {
      alert(getText(
        'Please verify your E-KYC first to participate in voting.',
        'कृपया मतदान में भाग लेने के लिए पहले अपना E-KYC सत्यापित करें।',
        'براہ کرم ووٹنگ میں حصہ لینے کے لیے پہلے اپنی E-KYC تصدیق مکمل کریں۔',
        currentLanguage
      ));
      setShowVerificationModal(true);
      return;
    }
    alert(getText(
      `Redirecting to secure digital ballot box for: ${survey.titleEn}`,
      `इसके लिए सुरक्षित डिजिटल मतपेटी पर भेज रहे हैं: ${survey.titleHi}`,
      `اس کے لیے محفوظ ڈیجیٹل بیلٹ باکس پر ری ڈائریکٹ کر رہے ہیں: ${survey.titleUr}`,
      currentLanguage
    ));
  };

  return (
    <div className="bg-transparent text-gray-900 relative overflow-hidden font-sans" id="mahapanchayat_system_wrapper">

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Language Switcher */}
        <div className="flex justify-end items-center space-x-2">
          <Languages className="h-4 w-4 text-gray-400" />
          <div className="flex bg-white/50 backdrop-blur-md rounded-full p-1 border border-gray-200 shadow-sm">
            {(['en', 'hi', 'ur'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang)}
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition ${
                  currentLanguage === lang 
                    ? 'bg-[#004B23] text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <HeroHeader currentLanguage={currentLanguage} />

        <VerificationBanner 
          currentLanguage={currentLanguage} 
          verifiedMember={verifiedMember}
          setShowVerificationModal={setShowVerificationModal}
        />

        {/* TAB NAVIGATION */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-100 pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#004B23] text-white shadow-xl scale-105'
                  : 'bg-white text-gray-500 hover:bg-emerald-50 hover:text-[#004B23] border border-gray-100'
              }`}
            >
              {tab.icon}
              <span>{getText(tab.labelEn, tab.labelHi, tab.labelUr, currentLanguage)}</span>
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <main className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'objectives' && (
                <ObjectivesTab currentLanguage={currentLanguage} setActiveTab={setActiveTab} />
              )}
              {activeTab === 'surveys' && (
                <SurveysTab 
                  currentLanguage={currentLanguage} 
                  surveys={MOCK_SURVEYS} 
                  setActiveTab={setActiveTab}
                  handleVote={handleVote}
                  onOpenAnalytics={() => setShowAIAnalyticsModal(true)}
                />
              )}
              {activeTab === 'polls' && (
                <OpinionPollsSection currentLanguage={currentLanguage} />
              )}
              {activeTab === 'agendas' && (
                <div className="space-y-12">
                  <GuidingPrinciplesSection currentLanguage={currentLanguage} />
                  <OrganizationalFrameworkSection currentLanguage={currentLanguage} />
                  <div className="space-y-6">
                    <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {getText('Reform Agendas & Citizen Proposals', 'सुधार एजेंडे एवं नागरिक प्रस्ताव', 'اصلاحاتی ایجنڈے اور شہری تجاویز', currentLanguage)}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {getText('Track the lifecycle of community reform proposals from submission to final resolution.', 'प्रस्तुति से अंतिम निर्णय तक सामुदायिक सुधार प्रस्तावों के जीवनचक्र को ट्रैक करें।', 'پیش کرنے سے لے کر آخری فیصلے تک اصلاحاتی تجاویز کے لائف سائیکل کو ٹریک کریں۔', currentLanguage)}
                        </p>
                      </div>
                      <button
                        onClick={() => setShowProposalModal(true)}
                        className="bg-[#004B23] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-emerald-800 transition"
                      >
                        {getText('+ Submit New Proposal', '+ नया प्रस्ताव भेजें', '+ نئی تجویز پیش کریں', currentLanguage)}
                      </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {proposals.map(proposal => (
                        <ProposalCard 
                          key={proposal.id} 
                          proposal={proposal}
                          onUpvote={(id) => setProposals(prev => prev.map(p => p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p))}
                          onOpenComments={(id) => setActiveModalCommentId(id)}
                          onUpdateStage={(id, stage) => setProposals(prev => prev.map(p => p.id === id ? { ...p, workflowStage: stage } : p))}
                          getText={(en, hi, ur) => getText(en, hi, ur, currentLanguage)}
                        />
                      ))}
                    </div>
                  </div>
                  {showProposalModal && (
                    <ProposalWorkflowModal 
                      isOpen={showProposalModal}
                      onClose={() => setShowProposalModal(false)}
                      onSubmitProposal={(newProp) => setProposals(prev => [newProp, ...prev])}
                      getText={(en, hi, ur) => getText(en, hi, ur, currentLanguage)}
                      verifiedMemberName={verifiedMember?.fullName}
                      verifiedMemberId={verifiedMember?.memberId}
                      userDistrict={verifiedMember?.district}
                    />
                  )}
                  {activeModalCommentId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
                      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl">
                        <button 
                          onClick={() => setActiveModalCommentId(null)} 
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                        >
                          ✕
                        </button>
                        <CommunitySuggestionsBox 
                          itemId={activeModalCommentId} 
                          itemTitle={proposals.find(p => p.id === activeModalCommentId)?.titleEn || 'Community Discussion'} 
                          comments={comments} 
                          onAddComment={(newComm) => setComments(prev => [newComm, ...prev])} 
                          onModerateComment={(id, status) => setComments(prev => prev.map(c => c.id === id ? { ...c, status } : c))} 
                          getText={(en, hi, ur) => getText(en, hi, ur, currentLanguage)} 
                          verifiedMemberName={verifiedMember?.fullName} 
                          userDistrict={verifiedMember?.district} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {activeTab === 'archive' && (
                <ArchiveTab currentLanguage={currentLanguage} resolutions={resolutions} />
              )}
              {activeTab === 'implementation' && (
                <ImplementationTab currentLanguage={currentLanguage} />
              )}
              {activeTab === 'security' && (
                <SecurityAuditDashboard currentLanguage={currentLanguage} />
              )}
              {activeTab === 'committees' && (
                <CommitteeDashboard currentLanguage={currentLanguage} />
              )}
              {activeTab === 'volunteers' && (
                <VolunteerDashboard currentLanguage={currentLanguage} />
              )}
              {activeTab === 'reports_notif' && (
                <ReportsAndNotifications currentLanguage={currentLanguage} />
              )}
              {activeTab === 'admin_builder' && (
                <AdminDashboard
                  currentLanguage={currentLanguage}
                  proposals={proposals}
                  resolutions={resolutions}
                  surveys={MOCK_SURVEYS}
                  onUpdateProposalStage={(id, stage) => setProposals(prev => prev.map(p => p.id === id ? { ...p, workflowStage: stage } : p))}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {showAIAnalyticsModal && (
          <AIAnalyticsModal
            isOpen={showAIAnalyticsModal}
            onClose={() => setShowAIAnalyticsModal(false)}
            analyticsData={INITIAL_AI_ANALYTICS_DATA['s1']}
            surveyTitle="National Marriage Reform & Educational Fund Surveys"
            getText={(en, hi, ur) => getText(en, hi, ur, currentLanguage)}
          />
        )}

        {/* Footer info */}
        <div className="text-center pt-10 border-t border-gray-100">
          <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-[0.2em]">
            All India Rangrez Mahapanchayat • E-Governance Division • 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default MahapanchayatSystem;
