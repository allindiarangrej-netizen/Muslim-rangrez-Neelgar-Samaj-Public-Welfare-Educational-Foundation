import React, { useState } from 'react';
import { 
  UserPlus, MapPin, CheckCircle2, Camera, Upload, FileText, 
  AlertTriangle, Shield, Check, Clock, UserCheck, Phone, 
  Building, Send, Search, RefreshCw, Eye
} from 'lucide-react';
import { Language } from '../../types';

interface VolunteerDashboardProps {
  currentLanguage: Language;
}

interface AssignedArea {
  id: string;
  nameEn: string;
  nameHi: string;
  nameUr: string;
  tehsil: string;
  district: string;
  targetRespondents: number;
  completedRespondents: number;
  pendingVerification: number;
  status: 'In Progress' | 'Completed' | 'Urgent Attention';
}

interface RespondentRecord {
  id: string;
  name: string;
  phone: string;
  aadhaarLast4: string;
  area: string;
  surveyTitle: string;
  consentGranted: boolean;
  photoVerified: boolean;
  timestamp: string;
  gpsCoords: string;
}

export default function VolunteerDashboard({ currentLanguage }: VolunteerDashboardProps) {
  const [activeTab, setActiveTab] = useState<'register' | 'areas' | 'completion' | 'reports'>('register');

  // Form State for Registering Respondent
  const [respName, setRespName] = useState<string>('');
  const [respPhone, setRespPhone] = useState<string>('');
  const [respAadhaar, setRespAadhaar] = useState<string>('');
  const [respArea, setRespArea] = useState<string>('Jaipur North Ward 4');
  const [selectedSurveyId, setSelectedSurveyId] = useState<string>('National Dowry Cap Survey');
  const [consentChecked, setConsentChecked] = useState<boolean>(false);
  const [photoUploaded, setPhotoUploaded] = useState<boolean>(false);
  const [gpsLocked, setGpsLocked] = useState<boolean>(true);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Form State for submitting reports
  const [reportType, setReportType] = useState<string>('Field Completion Status Report');
  const [reportTitle, setReportTitle] = useState<string>('');
  const [reportNotes, setReportNotes] = useState<string>('');
  const [reportSubmitted, setReportSubmitted] = useState<boolean>(false);

  const [respondentsList, setRespondentsList] = useState<RespondentRecord[]>([
    {
      id: 'RSP-9012',
      name: 'Mohammad Yusuf Rangrez',
      phone: '+91 98290 14511',
      aadhaarLast4: '4589',
      area: 'Jaipur North Ward 4',
      surveyTitle: 'National Dowry Abolition Cap',
      consentGranted: true,
      photoVerified: true,
      timestamp: 'Today, 10:45 AM',
      gpsCoords: '26.9124° N, 75.7873° E'
    },
    {
      id: 'RSP-9011',
      name: 'Shabana Khatoon',
      phone: '+91 94140 88921',
      aadhaarLast4: '8812',
      area: 'Jaipur North Ward 4',
      surveyTitle: 'UPSC Civil Services Fund Allocation',
      consentGranted: true,
      photoVerified: true,
      timestamp: 'Today, 09:30 AM',
      gpsCoords: '26.9130° N, 75.7881° E'
    },
    {
      id: 'RSP-9010',
      name: 'Haji Ibrahim Rangrez',
      phone: '+91 97845 22100',
      aadhaarLast4: '1092',
      area: 'Jaipur North Ward 3',
      surveyTitle: 'National Dowry Abolition Cap',
      consentGranted: true,
      photoVerified: true,
      timestamp: 'Yesterday, 05:15 PM',
      gpsCoords: '26.9110° N, 75.7860° E'
    }
  ]);

  const assignedAreas: AssignedArea[] = [
    {
      id: 'area-1',
      nameEn: 'Jaipur North Ward 4 & Ramganj Bazaar Cluster',
      nameHi: 'जयपुर उत्तर वार्ड 4 एवं रामगंज बाजार क्लस्टर',
      nameUr: 'جے پور نارتھ وارڈ 4 اور رام گنج بازار کلکٹر',
      tehsil: 'Jaipur Tehsil North',
      district: 'Jaipur District, Rajasthan',
      targetRespondents: 250,
      completedRespondents: 220,
      pendingVerification: 12,
      status: 'In Progress'
    },
    {
      id: 'area-2',
      nameEn: 'Jaipur North Ward 3 (Ghat Gate Textile Zone)',
      nameHi: 'जयपुर उत्तर वार्ड 3 (घाट गेट वस्त्र क्षेत्र)',
      nameUr: 'جے پور نارتھ وارڈ 3 (گھاٹ گیٹ ٹیکسٹائل زون)',
      tehsil: 'Jaipur Tehsil North',
      district: 'Jaipur District, Rajasthan',
      targetRespondents: 180,
      completedRespondents: 180,
      pendingVerification: 0,
      status: 'Completed'
    },
    {
      id: 'area-3',
      nameEn: 'Sikar Road Artisan Colony Wards 11-14',
      nameHi: 'सीकर रोड कारीगर कॉलोनी वार्ड 11-14',
      nameUr: 'سیکر روڈ کاریگر کالونی وارڈز 11-14',
      tehsil: 'Amber Tehsil',
      district: 'Jaipur Rural District, Rajasthan',
      targetRespondents: 150,
      completedRespondents: 65,
      pendingVerification: 20,
      status: 'Urgent Attention'
    }
  ];

  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) {
      alert(getText('Mandatory digital consent is required to register a respondent under DPDP Act 2023.', 'DPDP अधिनियम 2023 के तहत मतदाता पंजीकरण हेतु अनिवार्य सहमति आवश्यक है।', 'ڈی پی ڈی پی ایکٹ 2023 کے تحت ووٹر کے اندراج کے لیے لازمی ڈیجیٹل رضامندی ضروری ہے۔'));
      return;
    }
    if (!photoUploaded) {
      alert(getText('Please upload verification photo (household QR or respondent present photo).', 'कृपया सत्यापन फोटो (पारिवारिक QR या सदस्य फोटो) अपलोड करें।', 'براہ کرم تصدیقی تصویر (فیملی کیو آر یا رکن کی تصویر) اپ لوڈ کریں۔'));
      return;
    }

    const newRecord: RespondentRecord = {
      id: `RSP-${Math.floor(9000 + Math.random()*999)}`,
      name: respName || 'Anonymous Rangrez Member',
      phone: respPhone || '+91 98XXX XXXXX',
      aadhaarLast4: respAadhaar || 'XXXX',
      area: respArea,
      surveyTitle: selectedSurveyId,
      consentGranted: true,
      photoVerified: true,
      timestamp: 'Just Now (Live)',
      gpsCoords: '26.9125° N, 75.7875° E (Verified)'
    };

    setRespondentsList([newRecord, ...respondentsList]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setRespName('');
      setRespPhone('');
      setRespAadhaar('');
      setConsentChecked(false);
      setPhotoUploaded(false);
    }, 2500);
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setReportTitle('');
      setReportNotes('');
    }, 2500);
  };

  const totalTarget = assignedAreas.reduce((a, b) => a + b.targetRespondents, 0);
  const totalCompleted = assignedAreas.reduce((a, b) => a + b.completedRespondents, 0);
  const overallProgress = Math.round((totalCompleted / totalTarget) * 100);

  return (
    <div className="space-y-8 animate-fadeIn text-[#0B132B]">
      {/* Volunteer Profile & Progress Hero */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-600 text-white font-mono font-black text-xs px-2.5 py-0.5 rounded uppercase">
                🤝 AUTHORIZED FIELD VOLUNTEER (ID: VOL-RJ-0412)
              </span>
              <span className="text-xs font-mono text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Qazi Verified Enumerator</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B]">
              {getText('Volunteer Survey Operations Hub', 'स्वयंसेवक सर्वे संचालन केंद्र', 'رضاکار سروے آپریشنز ہب')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-light">
              {getText(
                'Register community households with digital consent, verify Aadhaar/census QR codes, capture real-time GPS geotagged evidence, and monitor ward completion targets.',
                'डिजिटल सहमति के साथ परिवारों को पंजीकृत करें, आधार/जनगणना QR कोड सत्यापित करें, लाइव GPS जियोटैग साक्ष्य कैप्चर करें और वार्ड लक्ष्यों की निगरानी करें।',
                'ڈیجیٹل رضامندی کے ساتھ خاندانوں کو رجسٹر کریں، آدھار/مردم شماری کیو آر کوڈز کی تصدیق کریں، لائیو جی پی ایس جیو ٹیگ ثبوت حاصل کریں اور وارڈ اہداف کی نگرانی کریں۔'
              )}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shrink-0 font-mono text-center min-w-[220px]">
            <span className="text-[11px] text-gray-400 block uppercase">Overall Area Completion</span>
            <div className="flex items-center justify-center gap-2 my-1">
              <span className="text-3xl font-extrabold text-emerald-700">{overallProgress}%</span>
              <span className="text-xs text-emerald-600 font-bold">({totalCompleted}/{totalTarget})</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-4">
        {[
          { id: 'register', icon: <UserPlus className="h-4 w-4" />, labelEn: '➕ Register Respondent (With Consent)', labelHi: '➕ मतदाता पंजीकरण (सहमति सहित)', labelUr: '➕ ووٹر کا اندراج (رضامندی کے ساتھ)' },
          { id: 'areas', icon: <MapPin className="h-4 w-4" />, labelEn: '📍 Track Assigned Areas & Wards', labelHi: '📍 आवंटित वार्ड व क्षेत्र निगरानी', labelUr: '📍 تفویض کردہ وارڈز اور علاقوں کی نگرانی' },
          { id: 'completion', icon: <CheckCircle2 className="h-4 w-4" />, labelEn: '📊 Monitor Completion & Photos', labelHi: '📊 सर्वे पूर्णता व फोटो सत्यापन', labelUr: '📊 سروے کی تکمیل اور تصویر کی تصدیق' },
          { id: 'reports', icon: <FileText className="h-4 w-4" />, labelEn: '📑 Submit Field Reports', labelHi: '📑 फील्ड रिपोर्ट सबमिट करें', labelUr: '📑 فیلڈ رپورٹ جمع کریں' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === t.id
                ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/20'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {t.icon}
            <span>{getText(t.labelEn, t.labelHi, t.labelUr)}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: REGISTER RESPONDENT WITH CONSENT */}
      {activeTab === 'register' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
          {/* Left 2 Cols: Registration Form */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <span className="text-xs font-mono text-emerald-700 uppercase font-bold tracking-wider block">
                🛡️ {getText('DPDP ACT 2023 COMPLIANT REGISTRATION', 'DPDP अधिनियम 2023 अनुपालन पंजीकरण', 'ڈی پی ڈی پی ایکٹ 2023 کے مطابق اندراج')}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B132B] mt-1">
                {getText('Register Respondent & Record Vote Consent', 'मतदाता पंजीकरण एवं सहमति रिकॉर्ड करें', 'ووٹر کا اندراج اور رضامندی ریکارڈ کریں')}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {getText(
                  'Volunteers must explain the survey objectives to the respondent and obtain explicit digital consent before logging survey responses.',
                  'स्वयंसेवकों को मतदाता को सर्वे के उद्देश्य समझाने होंगे और जवाब दर्ज करने से पहले स्पष्ट डिजिटल सहमति प्राप्त करनी होगी।',
                  'رضاکاروں کو ووٹر کو سروے کے مقاصد سمجھانے ہوں گے اور جواب درج کرنے سے پہلے واضح ڈیجیٹل رضامندی حاصل کرنی ہوگی۔'
                )}
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-50 border-2 border-emerald-500/20 p-6 rounded-2xl text-center space-y-3 animate-fadeIn shadow-inner">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-emerald-900">
                  {getText('Respondent Successfully Registered!', 'मतदाता सफलतापूर्वक पंजीकृत!', 'ووٹر کامیابی سے رجسٹر ہو گیا!')}
                </h4>
                <p className="text-xs text-emerald-700 font-mono">
                  GPS Coordinates Locked • Photo Verification Stamped • Cryptographic Receipt Generated.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase">
                      {getText('Respondent Full Name:', 'मतदाता का पूरा नाम:', 'ووٹر کا پورا نام:')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={respName}
                      onChange={(e) => setRespName(e.target.value)}
                      placeholder="e.g. Mohammad Yusuf Rangrez"
                      className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase">
                      {getText('Mobile Number (With WhatsApp):', 'मोबाइल नंबर (व्हाट्सएप सहित):', 'موبائل नंबर (वाट्स ایپ کے ساتھ):')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={respPhone}
                      onChange={(e) => setRespPhone(e.target.value)}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase">
                      {getText('Aadhaar / Census Card Last 4 Digits:', 'आधार / जनगणना कार्ड के अंतिम 4 अंक:', 'آدھار / مردم شماری کارڈ کے آخری 4 ہندسے:')} *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={4}
                      value={respAadhaar}
                      onChange={(e) => setRespAadhaar(e.target.value)}
                      placeholder="e.g. 4589"
                      className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 font-mono tracking-widest"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase">
                      {getText('Assigned Ward / Tehsil Area:', 'आवंटित वार्ड / तहसील क्षेत्र:', 'تفویض کردہ وارڈ / تحصیل علاقہ:')} *
                    </label>
                    <select
                      value={respArea}
                      onChange={(e) => setRespArea(e.target.value)}
                      className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Jaipur North Ward 4">Jaipur North Ward 4 (Ramganj)</option>
                      <option value="Jaipur North Ward 3">Jaipur North Ward 3 (Ghat Gate)</option>
                      <option value="Sikar Road Artisan Colony Wards 11-14">Sikar Road Artisan Colony Wards 11-14</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase">
                    {getText('Select Target Survey / Proposal:', 'लक्षित सर्वे / प्रस्ताव चुनें:', 'ہدف سروے / تجویز منتخب کریں:')} *
                  </label>
                  <select
                    value={selectedSurveyId}
                    onChange={(e) => setSelectedSurveyId(e.target.value)}
                    className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="National Dowry Abolition Cap Survey">National Dowry Abolition & Wedding Cap Survey (RES-2026-01)</option>
                    <option value="UPSC Civil Services & Medical Super-30 Academy Fund">UPSC Civil Services & Medical Super-30 Academy Fund</option>
                    <option value="District Rangrez Textile & Dyeing Economic Census">District Rangrez Textile & Dyeing Economic Census</option>
                  </select>
                </div>

                {/* GPS Auto-Lock Indicator */}
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600 animate-pulse" />
                    <span>GPS Coordinates Auto-Locked: <strong className="text-[#0B132B]">26.9125° N, 75.7875° E (Accuracy: ±4 meters)</strong></span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded uppercase font-bold border border-emerald-200">
                    Verified Geotag
                  </span>
                </div>

                {/* Verification Photo Upload Section */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 uppercase flex items-center gap-2">
                      <Camera className="h-4 w-4 text-emerald-600" />
                      <span>{getText('Upload Household QR or Verification Photo:', 'पारिवारिक QR या सत्यापन फोटो अपलोड करें:', 'فیملی کیو آر یا تصدیقی تصویر اپ لوڈ کریں:')} *</span>
                    </span>
                    {photoUploaded && (
                      <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Photo Stamped & Encrypted
                      </span>
                    )}
                  </div>

                  {!photoUploaded ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={() => setPhotoUploaded(true)}
                        className="flex-1 bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-gray-200 shadow-sm transition"
                      >
                        <Camera className="h-4 w-4 text-emerald-600" />
                        <span>{getText('Take Live Photo (Camera)', 'लाइव फोटो लें (कैमरा)', 'لائیو تصویر لیں (کیمرہ)')}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPhotoUploaded(true)}
                        className="flex-1 bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-gray-200 shadow-sm transition"
                      >
                        <Upload className="h-4 w-4 text-emerald-600" />
                        <span>{getText('Upload from Phone / Gallery', 'गैलरी से अपलोड करें', 'گیلری سے اپ لوڈ کریں')}</span>
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 flex items-center justify-between">
                      <span className="text-xs text-emerald-700 font-mono">IMG_VERIFY_20260702_1045.jpg (1.2 MB)</span>
                      <button
                        type="button"
                        onClick={() => setPhotoUploaded(false)}
                        className="text-xs text-red-600 hover:text-red-700 font-bold underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Mandatory Digital Consent Checkbox */}
                <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent-check"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-gray-300 bg-white text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <label htmlFor="consent-check" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                    <strong className="text-emerald-900 block mb-0.5">
                      {getText('Mandatory Digital Consent (DPDP Act 2023):', 'अनिवार्य डिजिटल सहमति (DPDP अधिनियम 2023):', 'لازمی ڈیجیٹل رضامندی (ڈی پی ڈی پی ایکٹ 2023):')}
                    </strong>
                    {getText(
                      'I confirm that the respondent has voluntarily agreed to participate in this official Mahapanchayat survey after understanding its objectives. Their basic household data will be used strictly for community welfare, educational scholarships, and Sharia compliance reforms without third-party commercial disclosure.',
                      'मैं पुष्टि करता हूँ कि मतदाता ने इसके उद्देश्यों को समझने के बाद इस आधिकारिक महापंचायत सर्वे में भाग लेने के लिए स्वेच्छा से सहमति दी है। उनके डेटा का उपयोग केवल सामुदायिक कल्याण, छात्रवृत्ति और सुधारों के लिए किया जाएगा।',
                      'میں تصدیق کرتا ہوں کہ ووٹر نے اس کے مقاصد کو سمجھنے کے بعد اس باضابطہ مہاپنچایت سروے میں حصہ لینے کے لیے اپنی خوشی سے رضامندی دی ہے۔ ان کا ڈیٹا صرف برادری کی فلاح و بہبود، اسکالرشپ اور اصلاحات کے لیے استعمال کیا جائے گا۔'
                    )}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-2xl shadow-sm transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-200" />
                  <span>{getText('Register & Record Verified Survey Response', 'पंजीकृत करें एवं सत्यापित जवाब दर्ज करें', 'رجسٹر کریں اور تصدیق شدہ جواب درج کریں')}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Col: Recent Verified Respondents Log */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2 border-b border-gray-50 pb-3">
              <UserCheck className="h-4 w-4 text-emerald-600" />
              <span>{getText('Your Recent Verified Logs', 'आपके हाल के सत्यापित रिकॉर्ड', 'آپ کے حالیہ تصدیق شدہ ریکارڈ')}</span>
            </h4>

            <div className="space-y-3 max-h-[580px] overflow-y-auto pr-1">
              {respondentsList.map((rec) => (
                <div key={rec.id} className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 space-y-2 font-mono text-xs">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-[#0B132B] text-sm">{rec.name}</span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold border border-emerald-200">
                      Aadhaar: *{rec.aadhaarLast4}
                    </span>
                  </div>

                  <div className="text-gray-600 text-[11px]">
                    <p className="font-sans text-gray-500">{rec.surveyTitle}</p>
                    <p className="text-emerald-700 mt-1 font-bold">{rec.area}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-200 text-[10px] text-gray-500">
                    <span>{rec.timestamp}</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <Camera className="h-3 w-3" /> Photo & Consent OK
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TRACK ASSIGNED AREAS & WARDS */}
      {activeTab === 'areas' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assignedAreas.map((area) => {
              const pct = Math.round((area.completedRespondents / area.targetRespondents) * 100);
              return (
                <div key={area.id} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded font-extrabold uppercase border ${
                        area.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        area.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        'bg-red-50 text-red-700 border-red-200'
                      }`}>
                        {area.status}
                      </span>
                      <span className="text-xs font-mono text-gray-500">{area.tehsil}</span>
                    </div>

                    <h4 className="font-bold text-base text-[#0B132B] pt-1 leading-tight">
                      {getText(area.nameEn, area.nameHi, area.nameUr)}
                    </h4>
                    <p className="text-xs text-gray-500">{area.district}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-50 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Target Coverage:</span>
                      <span className="font-bold text-emerald-700">{area.completedRespondents} / {area.targetRespondents} households ({pct}%)</span>
                    </div>

                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${pct === 100 ? 'bg-emerald-600' : 'bg-emerald-400'}`} style={{ width: `${pct}%` }}></div>
                    </div>

                    <div className="flex justify-between text-[11px] text-gray-500 pt-1">
                      <span>Pending Verification: {area.pendingVerification}</span>
                      <button
                        onClick={() => alert(getText(`Opening GPS ward map for ${area.nameEn}...`, `${area.nameHi} के लिए जीपीएस मानचित्र खुल रहा है...`, `${area.nameUr} کے لیے جی پی ایس نقشہ کھل رہا ہے...`))}
                        className="text-emerald-700 hover:underline font-bold"
                      >
                        Open Ward GPS Map →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: MONITOR COMPLETION & PHOTOS */}
      {activeTab === 'completion' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-50 pb-4">
              <div>
                <h4 className="text-base font-bold text-[#0B132B] uppercase flex items-center gap-2">
                  <Camera className="h-5 w-5 text-emerald-600" />
                  <span>{getText('Geotagged Verification Photo Feed', 'जियोटैग फोटो सत्यापन फीड', 'جیو ٹیگ تصویر تصدیقی فیڈ')}</span>
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  All photos uploaded by your enumerator ID are cryptographically hashed and stamped with GPS timestamps.
                </p>
              </div>

              <span className="bg-emerald-50 text-xs font-mono px-3 py-1.5 rounded-xl text-emerald-700 font-bold shrink-0 border border-emerald-100">
                420 Photos Stamped • 0 Rejected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs">
              {[
                { title: 'Household QR #RJ-4491', resp: 'Mohammad Yusuf', time: 'Today 10:45 AM', coords: '26.9124°N, 75.7873°E', status: 'Verified' },
                { title: 'Household QR #RJ-4490', resp: 'Shabana Khatoon', time: 'Today 09:30 AM', coords: '26.9130°N, 75.7881°E', status: 'Verified' },
                { title: 'Household QR #RJ-4489', resp: 'Haji Ibrahim', time: 'Yesterday 05:15 PM', coords: '26.9110°N, 75.7860°E', status: 'Verified' },
                { title: 'Household QR #RJ-4488', resp: 'Zubair Alam', time: 'Yesterday 03:10 PM', coords: '26.9115°N, 75.7865°E', status: 'Verified' },
                { title: 'Household QR #RJ-4487', resp: 'Farzana Bibi', time: '30 June 2026', coords: '26.9118°N, 75.7869°E', status: 'Verified' },
                { title: 'Household QR #RJ-4486', resp: 'Tariq Mehmood', time: '29 June 2026', coords: '26.9121°N, 75.7871°E', status: 'Verified' }
              ].map((img, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-3 shadow-sm hover:border-emerald-200 transition">
                  <div className="h-36 bg-gray-100 rounded-xl border border-gray-200 flex flex-col items-center justify-center text-center p-3 relative group overflow-hidden">
                    <Camera className="h-8 w-8 text-emerald-600/30 mb-2 group-hover:scale-110 transition" />
                    <span className="text-[10px] text-gray-700 font-bold">{img.title}</span>
                    <span className="text-[9px] text-gray-500">{img.coords}</span>
                    <span className="absolute top-2 right-2 bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm">
                      ✓ GPS OK
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[11px]">
                    <div>
                      <span className="font-bold text-[#0B132B] block">{img.resp}</span>
                      <span className="text-gray-500 text-[10px]">{img.time}</span>
                    </div>
                    <button
                      onClick={() => alert(getText(`Viewing full high-res verification dossier for ${img.resp}...`, `${img.resp} की पूर्ण उच्च-रिज़ॉल्यूशन रिपोर्ट देखी जा रही है...`, `${img.resp} کی مکمل رپورٹ دیکھی جا رہی ہے...`))}
                      className="text-emerald-700 hover:underline text-[10px] font-bold"
                    >
                      Dossier →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SUBMIT FIELD REPORTS */}
      {activeTab === 'reports' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6 animate-fadeIn max-w-3xl mx-auto">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-mono text-emerald-700 uppercase font-bold tracking-wider block">
              📑 OFFICIAL VOLUNTEER DISPATCH
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B132B] mt-1">
              {getText('Submit Field Observation or Ward Incident Report', 'फील्ड रिपोर्ट या वार्ड स्थिति दर्ज करें', 'فیلڈ رپورٹ یا وارڈ کی صورتحال درج کریں')}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Reports are transmitted directly to the State Sharia Board and District Qazi for immediate executive review.
            </p>
          </div>

          {reportSubmitted ? (
            <div className="bg-emerald-50 border-2 border-emerald-500/20 p-6 rounded-2xl text-center space-y-3 animate-fadeIn shadow-inner">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-emerald-900">
                {getText('Field Report Transmitted Successfully!', 'फील्ड रिपोर्ट सफलतापूर्वक भेजी गई!', 'فیلڈ رپورٹ کامیابی سے بھیجی گئی!')}
              </h4>
              <p className="text-xs text-emerald-700 font-mono">
                Docket Reference: #REP-VOL-2026-8812 • Logged in District Qazi Dashboard.
              </p>
            </div>
          ) : (
            <form onSubmit={handleReportSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase">
                  {getText('Report Type / Classification:', 'रिपोर्ट श्रेणी:', 'رپورٹ کا زمرہ:')} *
                </label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Field Completion Status Report">Ward Survey Completion Status Report</option>
                  <option value="Household Address / Census Update Request">Household Address / Census Update Request</option>
                  <option value="Community Dowry / Austerity Violation Alert">Community Dowry / Austerity Violation Alert</option>
                  <option value="Educational Scholarship Case Referral">Educational Scholarship Case Referral</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase">
                  {getText('Subject / Title:', 'विषय / शीर्षक:', 'موضوع / عنوان:')} *
                </label>
                <input
                  type="text"
                  required
                  value={reportTitle}
                  onChange={(e) => setReportTitle(e.target.value)}
                  placeholder="e.g. Completed 100% household enumeration in Ward 4 Ramganj"
                  className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase">
                  {getText('Detailed Field Notes & Observations:', 'विस्तृत फील्ड विवरण:', 'تفصیلی فیلڈ نوٹس:')} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={reportNotes}
                  onChange={(e) => setReportNotes(e.target.value)}
                  placeholder="Provide complete details, respondent feedback, or assistance required..."
                  className="w-full bg-gray-50 text-sm text-[#0B132B] px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-2xl shadow-sm transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                <Send className="h-4 w-4" />
                <span>{getText('Transmit Official Report to State Committee', 'राज्य समिति को आधिकारिक रिपोर्ट भेजें', 'ریاستی کمیٹی کو باضابطہ رپورٹ بھیجیں')}</span>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
