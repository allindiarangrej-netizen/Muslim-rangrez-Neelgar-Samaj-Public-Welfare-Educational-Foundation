import React, { useState } from 'react';
import { 
  Landmark, Scroll, TrendingUp, Users, CheckCircle2, 
  Sparkles, ShieldCheck, Award, ArrowRight, HeartHandshake,
  ChevronDown, ChevronUp, BookOpen, Target, Check, 
  Activity, ClipboardCheck, Megaphone, BarChart3, ArrowUpRight,
  Building2, UserCheck, Zap, FileText, Heart, Scale, Clock, 
  GraduationCap, Shield, Flame, Briefcase, Globe, Flag, Calendar, RefreshCw, Layers, VolumeX,
  Calculator, Share2, X, Download, ThumbsUp
} from 'lucide-react';
import { Language } from '../types';
import SocietyReformResolutions from './SocietyReformResolutions';

interface SocietyReformMissionProps {
  currentLanguage: Language;
}

export default function SocietyReformMission({ currentLanguage }: SocietyReformMissionProps) {
  const [selectedFutureYear, setSelectedFutureYear] = useState<number>(2026);
  const [calcFamilies, setCalcFamilies] = useState<number>(100);
  const [calcContribution, setCalcContribution] = useState<number>(100);
  const [calcWeddings, setCalcWeddings] = useState<number>(5);
  const [hasEndorsed, setHasEndorsed] = useState<boolean>(false);
  const [endorseCount, setEndorseCount] = useState<number>(5412);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleEndorseMission = () => {
    if (!hasEndorsed) {
      setHasEndorsed(true);
      setEndorseCount(prev => prev + 1);
      showToast(getText('🇮🇳 Thank you! Your endorsement of the 2026-2035 Community Reform Roadmap is recorded.', '🇮🇳 धन्यवाद! 2026-2035 समाज सुधार रोडमैप के प्रति आपका समर्थन दर्ज कर लिया गया है।', '🇮🇳 شکریہ! 2026-2035 سماج سدھار روڈ میپ کی آپ کی حمایت درج کر لی گئی ہے۔'));
    }
  };

  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const heroStats = [
    {
      id: 'year',
      icon: <Landmark className="h-6 w-6 text-[#004B23]" />,
      iconBg: 'bg-emerald-50 border border-emerald-100 text-[#004B23]',
      labelEn: 'Mahapanchayat Year',
      labelHi: 'महापंचायत वर्ष',
      labelUr: 'مہاپنچایت کا سال',
      valueEn: '2025',
      valueHi: '2025',
      valueUr: '2025',
      detailEn: 'Historic Community Gathering',
      detailHi: 'ऐतिहासिक सामुदायिक महापंचायत',
      detailUr: 'تاریخی برادری کانفرنس',
      colSpan: 'col-span-1 sm:col-span-1 lg:col-span-1'
    },
    {
      id: 'resolutions',
      icon: <Scroll className="h-6 w-6 text-amber-600" />,
      iconBg: 'bg-amber-50 border border-amber-100 text-amber-700',
      labelEn: 'Resolutions Approved',
      labelHi: 'पारित सामाजिक संकल्प',
      labelUr: 'منظور شدہ قراردادیں',
      valueEn: '14',
      valueHi: '14',
      valueUr: '14',
      detailEn: 'Unanimously Approved',
      detailHi: 'सर्वसम्मति से स्वीकृत',
      detailUr: 'متفقہ طور پر منظور',
      colSpan: 'col-span-1 sm:col-span-1 lg:col-span-1'
    },
    {
      id: 'success',
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      iconBg: 'bg-blue-50 border border-blue-100 text-blue-700',
      labelEn: 'Implementation Success',
      labelHi: 'कार्यान्वयन सफलता दर',
      labelUr: 'عمل درآمد کی کامیابی',
      valueEn: 'Approximately 90%',
      valueHi: 'लगभग 90%',
      valueUr: 'تقریباً 90%',
      detailEn: 'Community Acceptance & Action',
      detailHi: 'सामुदायिक भागीदारी व स्वीकृति',
      detailUr: 'عوامی مقبولیت اور شمولیت',
      colSpan: 'col-span-1 sm:col-span-2 lg:col-span-1'
    },
    {
      id: 'committees',
      icon: <Users className="h-6 w-6 text-purple-600" />,
      iconBg: 'bg-purple-50 border border-purple-100 text-purple-700',
      labelEn: 'Committees Formed',
      labelHi: 'गठित समितियां',
      labelUr: 'تشکیل دی گئی کمیٹیاں',
      valueEn: 'Multiple District, Tehsil & Local Committees',
      valueHi: 'अनेक जिला, तहसील एवं स्थानीय समितियां',
      valueUr: 'متعدد ضلعی، تحصیل اور مقامی کمیٹیاں',
      detailEn: 'Active Grassroots Volunteer Network',
      detailHi: 'सक्रिय जमीनी कार्यकर्ता नेटवर्क',
      detailUr: 'فعال نچلی سطح کا نیٹ ورک',
      colSpan: 'col-span-1 sm:col-span-1 lg:col-span-2'
    },
    {
      id: 'status',
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-600" />,
      iconBg: 'bg-emerald-50 border border-emerald-100 text-emerald-700',
      labelEn: 'Mission Status',
      labelHi: 'मिशन स्थिति',
      labelUr: 'مشن کی صورتحال',
      valueEn: 'Successfully Active',
      valueHi: 'सफलतापूर्वक सक्रिय',
      valueUr: 'کامیابی کے ساتھ فعال',
      detailEn: 'Continuous Monitoring & Upliftment',
      detailHi: 'निरंतर निगरानी व समाज उत्थान जारी',
      detailUr: 'مسلسل نگرانی اور ترقی جاری',
      colSpan: 'col-span-1 sm:col-span-1 lg:col-span-1',
      isStatus: true
    }
  ];

  const timelineSteps = [
    {
      step: '01',
      titleEn: 'Community Survey',
      titleHi: 'सामुदायिक सर्वेक्षण',
      titleUr: 'برادری کا سروے',
      descEn: 'Grassroots consultation across districts to identify critical social challenges and member priorities.',
      descHi: 'प्रमुख सामाजिक चुनौतियों और सदस्य प्राथमिकताओं की पहचान करने के लिए जिलों में जमीनी स्तर पर परामर्श।',
      descUr: 'اہم سماجی چیلنجوں اور اراکین کی ترجیحات کی شناخت کے لیے اضلاع میں نچلی سطح پر مشاورت۔',
      icon: <ClipboardCheck className="h-5 w-5 text-[#004B23]" />
    },
    {
      step: '02',
      titleEn: 'Mahapanchayat',
      titleHi: 'महापंचायत आयोजन',
      titleUr: 'مہاپنچایت کا انعقاد',
      descEn: 'Historic assembly of representatives, scholars, elders, youth, and women delegates from all states.',
      descHi: 'सभी राज्यों से प्रतिनिधियों, विद्वानों, बुजुर्गों, युवाओं और महिला प्रतिनिधियों की ऐतिहासिक सभा।',
      descUr: 'تمام ریاستوں سے نمائندوں، علماء، بزرگوں، نوجوانوں اور خواتین مندوبین کا تاریخی اجتماع۔',
      icon: <Landmark className="h-5 w-5 text-amber-600" />
    },
    {
      step: '03',
      titleEn: '14 Resolutions Approved',
      titleHi: '14 संकल्प पारित',
      titleUr: '14 قراردادیں منظور',
      descEn: 'Unanimous adoption of fourteen transformative social reform resolutions for community welfare.',
      descHi: 'समाज कल्याण के लिए चौदह परिवर्तनकारी सामाजिक सुधार संकल्पों को सर्वसम्मति से अपनाना।',
      descUr: 'برادری کی فلاح و بہبود کے لیے چودہ انقلابی سماجی اصلاحاتی قراردادوں کی متفقہ منظوری۔',
      icon: <Scroll className="h-5 w-5 text-blue-600" />
    },
    {
      step: '04',
      titleEn: 'Committee Formation',
      titleHi: 'समितियों का गठन',
      titleUr: 'کمیٹیوں کی تشکیل',
      descEn: 'Establishment of multiple district, tehsil, town, village, and neighborhood implementation committees.',
      descHi: 'अनेक जिला, तहसील, नगर, ग्राम और मोहल्ला स्तर पर कार्यान्वयन समितियों की स्थापना।',
      descUr: 'متعدد ضلعی، تحصیل، قصبے، گاؤں، اور محلہ کی سطح پر نفاذ کمیٹیوں کا قیام۔',
      icon: <Building2 className="h-5 w-5 text-purple-600" />
    },
    {
      step: '05',
      titleEn: 'Public Awareness Campaign',
      titleHi: 'जन जागरूकता अभियान',
      titleUr: 'عوامی بیداری مہم',
      descEn: 'Intensive door-to-door outreach, Friday mosque announcements, pamphlets, and digital media awareness.',
      descHi: 'घर-घर जाकर सघन संपर्क, मस्जिदों में शुक्रवार की घोषणाएं, पर्चे और डिजिटल मीडिया जागरूकता।',
      descUr: 'گھر گھر جا کر بھرپور رابطہ، جمعہ کے خطبات میں اعلانات، پمفلٹ، اور ڈیجیٹل میڈیا بیداری۔',
      icon: <Megaphone className="h-5 w-5 text-rose-600" />
    }
  ];

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-10 animate-fadeIn relative overflow-hidden" id="society_reform_mission_section">
      {/* Subtle Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-500/5 via-[#F4C430]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Section */}
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#004B23] border border-emerald-200/60 px-3.5 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#004B23]" />
            <span>{getText('SOCIETY REFORM MISSION', 'समाज सुधार मिशन', 'معاشرتی اصلاح مشن')}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200/60 px-3 py-1 rounded-full text-[11px] font-mono font-bold">
            <Award className="h-3.5 w-3.5 text-amber-600" />
            <span>{getText('Unanimous Adoption', 'सर्वसम्मति से स्वीकृत', 'متفقہ منظوری')}</span>
          </span>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] tracking-tight">
            {getText('Society Reform Mission', 'समाज सुधार मिशन (Society Reform Mission)', 'معاشرتی اصلاح مشن (Society Reform Mission)')}
          </h2>
          <h3 className="text-base sm:text-lg font-bold text-[#004B23] font-serif flex items-center gap-2">
            <span>{getText('Mahapanchayat Resolutions 2025', 'महापंचायत संकल्प 2025', 'مہاپنچایت قراردادیں 2025')}</span>
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal pt-3 border-t border-gray-100">
          {getText(
            'Our organization believes that lasting social change begins with awareness, unity, education, simplicity, and collective responsibility. During the 2025 Community Mahapanchayat, fourteen historic social reform resolutions were unanimously approved. Through the dedicated efforts of committees and volunteers across districts, towns, villages, and neighborhoods, these resolutions were successfully implemented with approximately 90% community participation and acceptance.',
            'हमारा संगठन मानता है कि स्थायी सामाजिक परिवर्तन जागरूकता, एकता, शिक्षा, सादगी और सामूहिक जिम्मेदारी से शुरू होता है। 2025 की सामुदायिक महापंचायत के दौरान, चौदह ऐतिहासिक समाज सुधार प्रस्तावों को सर्वसम्मति से मंजूरी दी गई थी। जिलों, कस्बों, गांवों और मोहल्लों में समितियों और स्वयंसेवकों के समर्पित प्रयासों के माध्यम से, इन संकल्पों को लगभग 90% सामुदायिक भागीदारी और स्वीकृति के साथ सफलतापूर्वक लागू किया गया।',
            'ہماری تنظیم کا ماننا ہے کہ پائیدار سماجی تبدیلی کا آغاز بیداری، اتحاد، تعلیم، سادگی اور اجتماعی ذمہ داری سے ہوتا ہے۔ 2025 کی کمیونٹی مہاپنچایت کے دوران، چودہ تاریخی سماجی اصلاحاتی قراردادوں کی متفقہ طور پر منظوری دی گئی تھی۔ اضلاع، قصبوں، گاؤں اور محلہ جات میں کمیٹیوں اور رضاکاروں کی انتھک کوششوں سے، ان قراردادوں کو تقریباً 90% عوامی شمولیت اور مقبولیت کے ساتھ کامیابی سے نافذ کیا گیا ہے۔'
          )}
        </p>
      </div>

      {/* Hero Statistics Grid - Premium Animated Cards */}
      <div className="space-y-3 relative z-10 pt-2">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 text-xs text-gray-500 font-mono uppercase font-bold tracking-wider">
          <span>{getText('HERO STATISTICS & IMPACT OVERVIEW', 'प्रमुख आँकड़े एवं प्रभाव अवलोकन', 'اہم اعداد و شمار اور اثرات کا جائزہ')}</span>
          <span className="text-emerald-700 flex items-center gap-1 font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" /> {getText('Verified Community Record', 'सत्यापित सामुदायिक रिकॉर्ड', 'تصدیق شدہ برادری ریکارڈ')}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-2">
          {heroStats.map((stat) => (
            <div
              key={stat.id}
              className={`group relative bg-white hover:bg-gradient-to-br hover:from-gray-50/90 hover:to-white p-5 sm:p-6 rounded-xl border border-gray-100 hover:border-[#004B23]/30 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between space-y-4 overflow-hidden ${stat.colSpan}`}
            >
              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#004B23] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-start justify-between gap-3">
                <div className={`p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-inner ${stat.iconBg}`}>
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded border border-gray-100 group-hover:border-gray-200 transition">
                  {stat.id === 'year' ? 'YEAR' : stat.id === 'resolutions' ? 'RESOLUTIONS' : stat.id === 'success' ? 'IMPACT' : stat.id === 'committees' ? 'NETWORK' : 'STATUS'}
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider block">
                  {getText(stat.labelEn, stat.labelHi, stat.labelUr)}
                </span>
                
                <div className="text-xl sm:text-2xl font-extrabold text-[#0B132B] group-hover:text-[#004B23] transition-colors leading-snug font-serif">
                  {stat.isStatus ? (
                    <span className="inline-flex items-center gap-2 text-emerald-700">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                      </span>
                      <span>{getText(stat.valueEn, stat.valueHi, stat.valueUr)}</span>
                    </span>
                  ) : (
                    getText(stat.valueEn, stat.valueHi, stat.valueUr)
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 group-hover:text-gray-600 transition font-mono">
                <span>{getText(stat.detailEn, stat.detailHi, stat.detailUr)}</span>
                <span className="text-[#004B23] opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HIGHLIGHT BANNER - Premium Success Banner */}
      <div className="relative z-10 bg-gradient-to-r from-[#004B23] via-[#05381d] to-[#004B23] p-6 sm:p-8 rounded-2xl border-2 border-[#F4C430]/70 shadow-xl text-white overflow-hidden transform hover:scale-[1.005] transition-all duration-300">
        <div className="absolute right-0 top-0 w-64 h-64 bg-[#F4C430]/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#F4C430]/20 border border-[#F4C430]/60 flex items-center justify-center shrink-0 text-[#FFD54A] shadow-inner">
            <Award className="h-8 w-8 animate-pulse" />
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#F4C430] text-[#004B23] px-2.5 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider">
                {getText('HISTORIC ACHIEVEMENT', 'ऐतिहासिक उपलब्धि', 'تاریخی کامیابی')}
              </span>
              <span className="text-xs text-[#FFD54A] font-mono flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> 90% Implementation Milestone
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed font-light font-sans">
              {getText(
                'Alhamdulillah! Through the sincere efforts of our committees, volunteers, elders, youth, women, and community members, approximately 90% of the approved social reforms have been successfully implemented across marriages, funerals, meetings, and social gatherings. This achievement reflects the unity and commitment of our community toward positive social transformation.',
                'अल्हम्दुलिल्लाह! हमारी समितियों, स्वयंसेवकों, बुजुर्गों, युवाओं, महिलाओं और समुदाय के सदस्यों के ईमानदार प्रयासों से, स्वीकृत सामाजिक सुधारों में से लगभग 90% को विवाहों, अंत्येष्टि, बैठकों और सामाजिक समारोहों में सफलतापूर्वक लागू किया गया है। यह उपलब्धि सकारात्मक सामाजिक परिवर्तन के प्रति हमारे समाज की एकता और प्रतिबद्धता को दर्शाती है।',
                'الحمد للہ! ہماری کمیٹیوں، رضاکاروں، بزرگوں، نوجوانوں، خواتین اور برادری کے اراکین کی مخلصانہ کوششوں سے، منظور شدہ سماجی اصلاحات میں سے تقریباً 90% کو شادیوں، جنازوں، اجلاسوں اور سماجی تقریبات میں کامیابی کے ساتھ نافذ کیا گیا ہے۔ یہ کامیابی مثبت سماجی تبدیلی کے تئیں ہماری برادری کے اتحاد اور عزم کی عکاس ہے۔'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* THE 14 RESOLUTIONS SECTION - PREMIUM EXPANDABLE CARDS */}
      <SocietyReformResolutions currentLanguage={currentLanguage} />

      {/* TIMELINE SECTION - Elegant 8-Step Journey */}
      <div className="space-y-8 relative z-10 pt-8 border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#004B23] border border-emerald-200/60 px-3.5 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider">
            <Activity className="h-3.5 w-3.5 text-[#004B23]" />
            <span>{getText('STRATEGIC REFORM JOURNEY', 'सुधार यात्रा क्रमिक चरण', 'اصلاحی سفر کے مراحل')}</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B]">
            {getText('How Resolutions Move from Survey to Permanent Change', 'सर्वेक्षण से स्थायी सामाजिक सुधार तक की यात्रा', 'سروے سے پائیدار سماجی تبدیلی تک کا سفر')}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            {getText(
              'An elegant structured process guaranteeing grassroots democracy, rigorous awareness, transparent execution, and continuous annual audits.',
              'जमीनी लोकतंत्र, सघन जागरूकता, पारदर्शी क्रियान्वयन और निरंतर वार्षिक समीक्षा सुनिश्चित करने वाली एक व्यवस्थित प्रक्रिया।',
              'نچلی سطح کی جمہوریت، بھرپور بیداری، شفاف عمل درآمد، اور مسلسل سالانہ جائزے کو یقینی بنانے والا ایک منظم عمل۔'
            )}
          </p>
        </div>

        {/* Responsive Connected Timeline */}
        <div className="relative pt-4">
          {/* Vertical line for mobile / Desktop connector */}
          <div className="absolute left-8 sm:left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500 via-[#F4C430] to-teal-500 transform -translate-x-1/2 hidden md:block opacity-30"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
            {timelineSteps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.step}
                  className={`flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-2xl border bg-white hover:bg-gray-50/80 transition-all duration-300 shadow-xs hover:shadow-md relative group ${
                    isEven ? 'md:mr-8 border-gray-100 hover:border-[#004B23]/30' : 'md:ml-8 md:translate-y-8 border-gray-100 hover:border-amber-500/30'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 font-mono text-base font-extrabold text-[#004B23] shadow-inner group-hover:scale-110 transition duration-300">
                    {item.step}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded border border-emerald-100">
                        Step {item.step}
                      </span>
                      <div className="text-gray-400 group-hover:text-[#004B23] transition">
                        {item.icon}
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-serif font-extrabold text-[#0B132B] group-hover:text-[#004B23] transition">
                      {getText(item.titleEn, item.titleHi, item.titleUr)}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {getText(item.descEn, item.descHi, item.descUr)}
                    </p>
                  </div>

                  {/* Step Connector Arrow for mobile */}
                  {idx < timelineSteps.length - 1 && (
                    <div className="md:hidden w-full flex justify-center py-1 text-gray-300">
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-14 text-xs font-mono text-gray-400">
            <span>✨ {getText('Continuous cycle of democratic community self-governance and progress.', 'लोकतांत्रिक सामुदायिक स्वशासन और प्रगति का निरंतर चक्र।', 'جمہوری برادری کی خود حکمرانی اور ترقی کا مسلسل چکر۔')}</span>
          </div>
        </div>
      </div>

      {/* FUTURE MAHAPANCHAYAT RESOLUTIONS SECTION */}
      <div className="space-y-8 relative z-10 pt-10 border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200/60 px-3.5 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider shadow-2xs">
            <Calendar className="h-3.5 w-3.5 text-amber-600" />
            <span>{getText('CONTINUOUS ANNUAL ROADMAP', 'निरंतर वार्षिक सुधार योजना', 'مسلسل سالانہ لائحہ عمل')}</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B]">
            {getText('Future Mahapanchayat Resolutions', 'भावी महापंचायत संकल्प एवं वार्षिक प्रक्रिया', 'مستقبل کی مہاپنچایت قراردادیں اور سالانہ عمل')}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {getText(
              'Our institutional reform framework automatically supports upcoming years without changing the platform design or structure. Every year, new social challenges are evaluated through participatory democratic consensus.',
              'हमारा संस्थागत सुधार ढांचा मंच के डिजाइन या संरचना को बदले बिना आगामी वर्षों का स्वतः समर्थन करता है। हर साल, सहभागी लोकतांत्रिक सहमति के माध्यम से नई सामाजिक चुनौतियों का मूल्यांकन किया जाता है।',
              'ہمارا ادارہ جاتی اصلاحی ڈھانچہ پلیٹ فارم کے ڈیزائن یا ڈھانچے کو تبدیل کیے بغیر آنے والے سالوں کی خودکار حمایت کرتا ہے۔ ہر سال، شراکتی جمہوری اتفاق رائے کے ذریعے نئے سماجی چیلنجوں کا جائزہ لیا جاتا ہے۔'
            )}
          </p>
        </div>

        {/* Year Selector Pills (Supports 2025, 2026, 2027, 2028, 2029, 2030... automatically) */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-gray-50/90 p-2 rounded-2xl border border-gray-100 shadow-inner">
            {[2025, 2026, 2027, 2028, 2029, 2030].map((yr) => (
              <button
                key={yr}
                type="button"
                onClick={() => setSelectedFutureYear(yr)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-extrabold transition-all duration-300 flex items-center gap-1.5 ${
                  selectedFutureYear === yr
                    ? 'bg-[#004B23] text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-[#004B23] border border-gray-200/80 shadow-2xs'
                }`}
              >
                <Calendar className="h-3.5 w-3.5 opacity-80" />
                <span>{yr}</span>
                {yr === 2025 && (
                  <span className="bg-[#FFD54A] text-[#004B23] px-1.5 py-0.5 rounded text-[9px] uppercase font-black ml-1">
                    Adopted
                  </span>
                )}
                {yr > 2025 && (
                  <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-[9px] uppercase font-black ml-1">
                    Upcoming
                  </span>
                )}
              </button>
            ))}
            <span className="px-3 py-2 text-xs font-mono font-bold text-gray-400">
              ... & Beyond
            </span>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200/60 px-5 py-3 rounded-xl max-w-2xl text-center shadow-2xs">
            <p className="text-xs sm:text-sm font-serif font-bold text-[#004B23] flex items-center justify-center gap-2 flex-wrap">
              <RefreshCw className="h-4 w-4 text-emerald-700 animate-spin-slow inline" />
              <span>
                {getText(
                  `Active Cycle for Year ${selectedFutureYear}: Annual 6-Phase Institutional Protocol`,
                  `वर्ष ${selectedFutureYear} के लिए सक्रिय चक्र: वार्षिक 6-चरणीय संस्थागत प्रोटोकॉल`,
                  `سال ${selectedFutureYear} کے لیے فعال چکر: سالانہ 6 مرحلہ وار ادارہ جاتی ضابطہ`
                )}
              </span>
            </p>
          </div>
        </div>

        {/* 6-Step Annual Cycle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              step: '01',
              titleEn: 'Community Suggestions',
              titleHi: 'सामुदायिक सुझाव',
              titleUr: 'برادری کی تجاویز',
              descEn: 'Community members submit suggestions for necessary social reforms and emerging family or societal challenges.',
              descHi: 'समुदाय के सदस्य आवश्यक सामाजिक सुधारों और नई पारिवारिक या सामाजिक चुनौतियों के लिए सुझाव प्रस्तुत करते हैं।',
              descUr: 'برادری کے اراکین ضروری سماجی اصلاحات اور ابھرتے ہوئے خاندانی یا سماجی چیلنجوں کے لیے تجاویز پیش کرتے ہیں۔',
              icon: <Users className="h-5 w-5 text-emerald-600" />,
              badge: 'Input Phase'
            },
            {
              step: '02',
              titleEn: 'Digital Surveys',
              titleHi: 'डिजिटल सर्वेक्षण',
              titleUr: 'ڈیجیٹل سروے',
              descEn: 'Digital surveys are conducted across districts and neighborhoods to evaluate priority issues quantitatively.',
              descHi: 'प्राथमिकता वाले मुद्दों का मात्रात्मक मूल्यांकन करने के लिए जिलों और मोहल्लों में डिजिटल सर्वेक्षण आयोजित किए जाते हैं।',
              descUr: 'ترجیحی مسائل کا مقداری جائزہ لینے کے لیے اضلاع اور محلہ جات میں ڈیجیٹل سروے کیے جاتے ہیں۔',
              icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
              badge: 'Survey Phase'
            },
            {
              step: '03',
              titleEn: 'Public Opinion Collected',
              titleHi: 'जनमत संग्रह',
              titleUr: 'عوامی رائے کا جمع ہونا',
              descEn: 'Public opinion is collected from elders, women, youth, scholars, and working professionals to ensure representation.',
              descHi: 'प्रतिनिधित्व सुनिश्चित करने के लिए बुजुर्गों, महिलाओं, युवाओं, विद्वानों और कामकाजी पेशेवरों से जनमत एकत्र किया जाता है।',
              descUr: 'نمائندگی کو یقینی بنانے کے لیے بزرگوں، خواتین، نوجوانوں، علماء، اور پیشہ ور افراد سے عوامی رائے جمع کی جاتی ہے۔',
              icon: <Megaphone className="h-5 w-5 text-purple-600" />,
              badge: 'Consultation'
            },
            {
              step: '04',
              titleEn: 'Resolutions Discussed',
              titleHi: 'संकल्पों पर चर्चा',
              titleUr: 'قراردادوں پر تبادلہ خیال',
              descEn: 'New resolutions are discussed thoroughly in preparatory meetings and consultative panels before the assembly.',
              descHi: 'महासभा से पहले तैयारी बैठकों और परामर्श पैनलों में नए संकल्पों पर विस्तार से चर्चा की जाती है।',
              descUr: 'اسمبلی سے پہلے تیاری کے اجلاسوں اور نمائندہ پینلز میں نئی قراردادوں پر تفصیلی تبادلہ خیال کیا جاتا ہے۔',
              icon: <Scale className="h-5 w-5 text-amber-600" />,
              badge: 'Deliberation'
            },
            {
              step: '05',
              titleEn: 'Mahapanchayat Approval',
              titleHi: 'महापंचायत स्वीकृति',
              titleUr: 'مہاپنچایت کی منظوری',
              descEn: 'Mahapanchayat approves community-supported reforms unanimously, making them binding community guidelines.',
              descHi: 'महापंचायत समुदाय-समर्थित सुधारों को सर्वसम्मति से मंजूरी देती है, जिससे वे सर्वमान्य सामुदायिक दिशा-निर्देश बन जाते हैं।',
              descUr: 'مہاپنچایت برادری کی تائید یافتہ اصلاحات کو متفقہ طور پر منظور کرتی ہے، جس سے وہ لازمی رہنمایانہ اصول بن جاتے ہیں۔',
              icon: <Award className="h-5 w-5 text-rose-600" />,
              badge: 'Adoption'
            },
            {
              step: '06',
              titleEn: 'Annual Progress Review',
              titleHi: 'वार्षिक प्रगति समीक्षा',
              titleUr: 'سالانہ پیش رفت کا جائزہ',
              descEn: 'Progress is reviewed annually to audit compliance, celebrate successes, and refine implementation strategies.',
              descHi: 'अनुपालन की जांच करने, सफलताओं का जश्न मनाने और क्रियान्वयन रणनीतियों में सुधार के लिए प्रतिवर्ष प्रगति की समीक्षा की जाती है।',
              descUr: 'عمل درآمد کی جانچ پڑتال، کامیابیوں کا جشن منانے، اور حکمت عملیوں کو بہتر بنانے کے لیے سالانہ بنیادوں پر پیش رفت کا جائزہ لیا جاتا ہے۔',
              icon: <Activity className="h-5 w-5 text-teal-600" />,
              badge: 'Audit & Review'
            }
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-100 hover:border-[#004B23]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition shadow-inner">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold">
                  <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">STEP {item.step}</span>
                  <span className="bg-emerald-50 text-[#004B23] px-2 py-0.5 rounded border border-emerald-100">{item.badge}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-base font-serif font-extrabold text-[#0B132B] group-hover:text-[#004B23] transition">
                  {getText(item.titleEn, item.titleHi, item.titleUr)}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {getText(item.descEn, item.descHi, item.descUr)}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Year {selectedFutureYear} Cycle</span>
                <span className="text-[#004B23] font-bold opacity-0 group-hover:opacity-100 transition">Active Status ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMMUNITY COMMITMENT CLOSING CARD */}
      <div className="relative z-10 pt-6">
        <div className="bg-gradient-to-br from-[#004B23] via-[#05381d] to-[#004B23] p-6 sm:p-10 rounded-2xl border-2 border-[#F4C430]/70 shadow-2xl text-white relative overflow-hidden transform hover:scale-[1.003] transition-all duration-300">
          {/* Decorative Glows */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-0 top-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F4C430]/20 border border-[#F4C430]/60 text-[#FFD54A] shadow-inner mx-auto">
              <Heart className="h-8 w-8 animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="inline-block bg-[#F4C430] text-[#004B23] px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-widest shadow-sm">
                {getText('OUR COMMITMENT', 'हमारा संकल्प', 'ہمارا عزم')}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-white tracking-tight">
                {getText('Our Commitment', 'हमारा संकल्प (Our Commitment)', 'ہمارا عزم (Our Commitment)')}
              </h3>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed font-light font-sans max-w-3xl mx-auto">
              {getText(
                'We are committed to promoting education, simplicity, social harmony, transparency, compassion, constitutional values, and humanitarian service. Every resolution adopted by the Mahapanchayat is intended to strengthen families, preserve dignity, reduce unnecessary social burdens, and create a better future for present and coming generations.',
                'हम शिक्षा, सादगी, सामाजिक सद्भाव, पारदर्शिता, करुणा, संवैधानिक मूल्यों और मानवीय सेवा को बढ़ावा देने के लिए प्रतिबद्ध हैं। महापंचायत द्वारा अपनाया गया प्रत्येक संकल्प परिवारों को मजबूत करने, गरिमा की रक्षा करने, अनावश्यक सामाजिक बोझ को कम करने और वर्तमान व आने वाली पीढ़ियों के लिए एक बेहतर भविष्य के निर्माण के उद्देश्य से है।',
                'ہم تعلیم، سادگی، سماجی ہم آہنگی، شفافیت، ہمدردی، آئینی اقدار، اور انسانی خدمت کو فروغ دینے کے لیے پرعزم ہیں۔ مہاپنچایت کی جانب سے منظور کردہ ہر قرارداد کا مقصد خاندانوں کو مضبوط بنانا، وقار کی حفاظت کرنا، غیر ضروری سماجی بوجھ کو کم کرنا، اور موجودہ و آنے والی نسلوں کے لیے ایک بہتر مستقبل تعمیر کرنا ہے۔'
              )}
            </p>

            {/* Endorse & Share Action Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleEndorseMission}
                className={`px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition shadow-xl flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 ${
                  hasEndorsed 
                    ? 'bg-emerald-500 text-white border-2 border-white' 
                    : 'bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] border border-amber-300'
                }`}
              >
                <ThumbsUp className="w-4 h-4 fill-current" />
                <span>
                  {hasEndorsed 
                    ? getText('✓ You Endorsed This Mission', '✓ आपने इस मिशन का समर्थन किया है', '✓ آپ نے اس مشن کی حمایت کی ہے') 
                    : getText('Endorse & Support Mission', 'मिशन का समर्थन व संकल्प करें', 'مشن کی حمایت کریں')}
                </span>
                <span className="bg-[#0B132B] text-white px-2 py-0.5 rounded-md text-[11px] font-mono ml-1">
                  {endorseCount.toLocaleString()}
                </span>
              </button>

              <button
                onClick={() => setShowShareModal(true)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs sm:text-sm border border-white/30 transition flex items-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#FFD54A]" />
                <span>{getText('Share Progress Update', 'प्रगति रिपोर्ट शेयर करें', 'ترقیاتی رپورٹ شیئر کریں')}</span>
              </button>
            </div>

            <div className="pt-4 border-t border-emerald-800/80 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-emerald-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#FFD54A]" />
                <span>{getText('Constitutional Values', 'संवैधानिक मूल्य', 'آئینی اقدار')}</span>
              </span>
              <span className="text-emerald-600">•</span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-[#FFD54A]" />
                <span>{getText('Social Harmony', 'सामाजिक सद्भाव', 'سماجی ہم آہنگی')}</span>
              </span>
              <span className="text-emerald-600">•</span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-[#FFD54A]" />
                <span>{getText('Educational Progress', 'शैक्षिक प्रगति', 'تعلیمی ترقی')}</span>
              </span>
              <span className="text-emerald-600">•</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="h-4 w-4 text-[#FFD54A]" />
                <span>{getText('Humanitarian Service', 'मानवीय सेवा', 'انسانی خدمت')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE COMMUNITY IMPACT CALCULATOR */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 p-6 sm:p-10 rounded-3xl border border-emerald-200 shadow-xl space-y-8 animate-fadeIn">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#004B23] text-xs font-mono font-black uppercase">
              <Calculator className="w-4 h-4" />
              <span>{getText('INTERACTIVE TOOL', 'इंटरएक्टिव टूल', 'انٹرایکٹو ٹول')}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-serif font-black text-[#0B132B]">
              {getText('Community Reform Impact Calculator', 'समाज सुधार प्रभाव व बचत कैलकुलेटर', 'سماج سدھار اثر اور بچت کیلکولیٹر')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              {getText(
                'Calculate the collective financial savings and educational scholarships generated when our community adopts simplicity and small monthly contributions.',
                'जानें कि जब हमारे समाज के परिवार सादगी अपनाते हैं और छोटी मासिक सहायता देते हैं, तो कितनी विशाल बचत और छात्रवृत्तियां बनती हैं।',
                'جانیں کہ جب ہماری برادری کے خاندان سادگی اپناتے ہیں اور چھوٹی ماہانہ امداد دیتے ہیں، تو کتنی بڑی بچت اور وظائف پیدا ہوتے ہیں۔'
              )}
            </p>
          </div>
          <span className="bg-[#0B132B] text-[#FFD54A] font-mono text-xs font-bold px-3 py-1.5 rounded-xl border border-gray-700">
            {getText('Real-Time Formula', 'रीयल-टाइम गणना', 'ریئل ٹائم فارمولا')}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Input Column */}
          <div className="lg:col-span-7 space-y-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-gray-800">
                <span>{getText('Number of Participating Families:', 'भाग लेने वाले परिवारों की संख्या:', 'حصہ لینے والے خاندانوں کی تعداد:')}</span>
                <span className="font-mono text-base font-black text-[#004B23] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  {calcFamilies.toLocaleString()} {getText('Families', 'परिवार', 'خاندان')}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={calcFamilies}
                onChange={(e) => setCalcFamilies(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#004B23]"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span>10 Families</span>
                <span>2,500 Families</span>
                <span>5,000 Families</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-gray-800">
                <span>{getText('Monthly Contribution per Family (₹):', 'प्रति परिवार मासिक सहयोग राशि (₹):', 'فی خاندان ماہانہ تعاون (₹):')}</span>
                <span className="font-mono text-base font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  ₹{calcContribution} / {getText('month', 'माह', 'ماہ')}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={calcContribution}
                onChange={(e) => setCalcContribution(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span>₹50/mo</span>
                <span>₹500/mo</span>
                <span>₹1,000/mo</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-gray-800">
                <span>{getText('Simple Weddings Saved from Feast/Dowry Expenses:', 'दावत/दहेज से बचाए गए सादगीपूर्ण विवाह:', 'دعوت اور جہیز سے بچائی گئی سادہ شادیاں:')}</span>
                <span className="font-mono text-base font-black text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {calcWeddings} {getText('Weddings / Yr', 'विवाह / वर्ष', 'شادیاں / سال')}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={calcWeddings}
                onChange={(e) => setCalcWeddings(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span>1 Wedding</span>
                <span>50 Weddings</span>
                <span>100 Weddings</span>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5 bg-[#0B132B] text-white p-6 sm:p-8 rounded-2xl border-2 border-[#FFD54A]/40 shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-[#FFD54A] font-mono text-xs font-bold uppercase tracking-wider border-b border-gray-800 pb-3">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>{getText('PROJECTED ANNUAL SOCIAL IMPACT', 'अनुमानित वार्षिक सामाजिक प्रभाव', 'متوقع سالانہ سماجی اثر')}</span>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                <div className="text-[11px] text-gray-300 font-mono uppercase">{getText('Annual Educational Scholarship Fund', 'वार्षिक शैक्षिक छात्रवृत्ति कोष', 'سالانہ تعلیمی وظیفہ فنڈ')}</div>
                <div className="text-2xl sm:text-3xl font-serif font-black text-[#FFD54A] mt-1 font-mono">
                  ₹{(calcFamilies * calcContribution * 12).toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-300 mt-1">✓ {getText('100% directly allocated to student fees', '100% छात्र फीस हेतु समर्पित', '100% طلبہ کی فیس کے لیے مختص')}</div>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                <div className="text-[11px] text-gray-300 font-mono uppercase">{getText('Total Savings from Simple Weddings', 'सादगीपूर्ण विवाह से कुल बचत (₹3.5 लाख/विवाह)', 'سادہ شادیوں سے کل بچت')}</div>
                <div className="text-2xl sm:text-3xl font-serif font-black text-emerald-400 mt-1 font-mono">
                  ₹{(calcWeddings * 350000).toLocaleString()}
                </div>
                <div className="text-[10px] text-gray-300 mt-1">✓ {getText('Saved from graveyard meals & dowry feasts', 'कब्रिस्तान भोजन एवं दहेज खर्च से बचाई गई राशि', 'قبرستان کے کھانے اور جہیز سے بچائی گئی رقم')}</div>
              </div>

              <div className="bg-gradient-to-r from-emerald-900 to-[#004B23] p-4 rounded-xl border border-emerald-400/50 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-emerald-200 font-mono uppercase">{getText('Students Supported', 'लाभान्वित छात्र')}</div>
                  <div className="text-2xl font-black text-white font-mono">
                    ~{Math.max(1, Math.floor((calcFamilies * calcContribution * 12) / 12000))} {getText('Students/Yr', 'छात्र/वर्ष')}
                  </div>
                </div>
                <GraduationCap className="w-10 h-10 text-[#FFD54A] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Progress Update Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-200">
            <div className="bg-[#0B132B] text-white p-5 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-2 text-[#FFD54A] font-bold text-sm">
                <Share2 className="w-4 h-4" />
                <span>{getText('Share Community Reform Progress', 'समाज सुधार प्रगति शेयर करें', 'سماج سدھار ترقی شیئر کریں')}</span>
              </div>
              <button onClick={() => setShowShareModal(false)} className="text-gray-400 hover:text-white transition cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 bg-slate-50">
              <div className="p-5 bg-white rounded-2xl border border-gray-300 shadow-sm space-y-3 text-left">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004B23] bg-emerald-50 px-2.5 py-1 rounded w-fit">
                  <span>🇮🇳 ALL INDIA RANGREZ SAMAJ TRUST</span>
                </div>
                <h4 className="font-serif font-black text-base text-[#0B132B]">
                  {getText('Official Mission Update: 14 Reform Resolutions Approved!', 'आधिकारिक अपडेट: 14 समाज सुधार संकल्प पारित!')}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {getText(
                    `We have united for 100% literacy, dowry-free weddings, and financial transparency. Over ${endorseCount.toLocaleString()} families have endorsed the 2026-2035 Community Roadmap!`,
                    `हम 100% साक्षरता, दहेज मुक्त विवाह और वित्तीय पारदर्शिता के लिए एकजुट हुए हैं। ${endorseCount.toLocaleString()} से अधिक परिवारों ने 2026-2035 समाज सुधार रोडमैप का समर्थन किया है!`
                  )}
                </p>
                <div className="text-[11px] font-mono text-gray-400 pt-2 border-t border-gray-100">
                  🔗 rangrezsamaj.bharat/about/mission
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`🇮🇳 ALL INDIA RANGREZ SAMAJ TRUST - MISSION UPDATE 🇮🇳\n\n14 Social Reform Resolutions Approved!\nOver ${endorseCount} families have endorsed our 2026-2035 roadmap for 100% literacy, simplicity in funerals, and dowry-free weddings.\n\nJoin us at: ${window.location.href}`);
                    showToast(getText('📋 Message copied! Paste in WhatsApp or Facebook.', '📋 संदेश कॉपी किया गया! WhatsApp या Facebook पर शेयर करें।'));
                    setShowShareModal(false);
                  }}
                  className="p-3 bg-[#004B23] hover:bg-[#00381a] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <ClipboardCheck className="w-4 h-4 text-[#FFD54A]" />
                  <span>{getText('Copy WhatsApp Text', 'WhatsApp के लिए कॉपी करें')}</span>
                </button>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'All India Rangrez Samaj Trust - Mission Roadmap',
                        text: `Over ${endorseCount} families have endorsed our 14 social reform resolutions!`,
                        url: window.location.href
                      }).catch(() => {});
                    } else {
                      showToast(getText('🌐 Sharing not supported on this device browser.', '🌐 इस ब्राउज़र पर शेयरिंग समर्थित नहीं है।'));
                    }
                  }}
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{getText('Share via Device', 'डिवाइस से शेयर करें')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Banner */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B132B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFD54A] flex items-center gap-3 max-w-md animate-bounce">
          <Sparkles className="w-5 h-5 text-[#FFD54A] shrink-0" />
          <p className="text-xs sm:text-sm font-medium">{toastMsg}</p>
        </div>
      )}

    </div>
  );
}

