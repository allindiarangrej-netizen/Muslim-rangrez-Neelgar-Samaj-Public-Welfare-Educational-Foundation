import React, { useState } from 'react';
import { X, PlusCircle, CheckCircle2, Upload, FileText, Image as ImageIcon, Video, ShieldAlert, Award } from 'lucide-react';
import { Proposal, SupportingDocument } from './types';

interface ProposalWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitProposal: (newProp: Proposal) => void;
  getText: (en: string, hi: string, ur: string) => string;
  verifiedMemberName?: string;
  verifiedMemberId?: string;
  userDistrict?: string;
}

export default function ProposalWorkflowModal({
  isOpen,
  onClose,
  onSubmitProposal,
  getText,
  verifiedMemberName,
  verifiedMemberId,
  userDistrict
}: ProposalWorkflowModalProps) {
  const [form, setForm] = useState({
    title: '',
    category: 'Social Reform & Marriage Norms',
    district: userDistrict || '',
    problemStatement: '',
    proposedSolution: '',
    benefits: '',
    videoUrl: '',
    minSupportThreshold: 200
  });

  const [docs, setDocs] = useState<SupportingDocument[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'pdf' | 'doc') => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const newDoc: SupportingDocument = {
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        url: '#',
        type: file.name.endsWith('.pdf') ? 'pdf' : 'doc'
      };
      setDocs([...docs, newDoc]);
    }
  };

  const handleAddImage = () => {
    if (newImageUrl && newImageUrl.startsWith('http')) {
      setImages([...images, newImageUrl]);
      setNewImageUrl('');
    } else {
      alert(getText('Please enter a valid Image URL (http/https)', 'कृपया एक वैध चित्र URL (http/https) दर्ज करें', 'براہ کرم ایک درست تصویر کا یو آر ایل درج کریں'));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.problemStatement || !form.proposedSolution || !form.benefits) {
      alert(getText('Please fill all required fields including Benefits.', 'कृपया लाभों सहित सभी आवश्यक फ़ील्ड भरें।', 'براہ کرم فوائد سمیت تمام مطلوبہ خانے پر کریں۔'));
      return;
    }

    const docketNo = `PROP-2026-${form.district ? form.district.substring(0, 2).toUpperCase() : 'NAT'}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    const newProposal: Proposal = {
      id: `prop-${Date.now()}`,
      docketNo,
      titleEn: form.title,
      titleHi: form.title,
      titleUr: form.title,
      proposerEn: verifiedMemberName ? `${verifiedMemberName} (ID: ${verifiedMemberId}) - Verified Member` : 'Verified Community Member (#ONLINE-USER)',
      proposerHi: verifiedMemberName ? `${verifiedMemberName} (ID: ${verifiedMemberId}) - सत्यापित सदस्य` : 'सत्यापित समाज सदस्य (#ONLINE-USER)',
      proposerUr: verifiedMemberName ? `${verifiedMemberName} (ID: ${verifiedMemberId}) - تصدیق شدہ رکن` : 'تصدیق شدہ برادری رکن (#ONLINE-USER)',
      districtEn: form.district || 'National Level Proposal',
      districtHi: form.district || 'राष्ट्रीय स्तर का प्रस्ताव',
      districtUr: form.district || 'قومی سطح کی تجویز',
      categoryEn: form.category,
      categoryHi: form.category,
      categoryUr: form.category,
      descriptionEn: `${form.problemStatement} | Proposed Solution: ${form.proposedSolution}`,
      descriptionHi: `${form.problemStatement} | प्रस्तावित समाधान: ${form.proposedSolution}`,
      descriptionUr: `${form.problemStatement} | تجویز کردہ حل: ${form.proposedSolution}`,
      benefitsEn: form.benefits,
      benefitsHi: form.benefits,
      benefitsUr: form.benefits,
      supportingDocs: docs,
      images: images.length > 0 ? images : ['https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&auto=format&fit=crop&q=80'],
      videoUrl: form.videoUrl,
      upvotes: 1,
      minSupportThreshold: Number(form.minSupportThreshold) || 200,
      commentsCount: 0,
      workflowStage: 'submitted',
      status: 'under_review',
      dateSubmitted: 'Just Now'
    };

    onSubmitProposal(newProposal);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#07351B] border-2 border-[#F4C430] rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl text-white max-h-[92vh] overflow-y-auto my-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/70 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#F4C430] font-bold uppercase tracking-wider block flex items-center gap-1.5">
                <span>📢</span>
                <span>{getText('Table New Reform Agenda (Maujoo)', 'नया सुधार एजेंडा प्रस्तुत करें (मौजूं)', 'نیا اصلاحی ایجنڈا پیش کریں (موضوع)')}</span>
              </span>
              <h3 className="text-2xl font-serif font-extrabold text-white">
                {getText('Submit Proposal for National Mahapanchayat', 'राष्ट्रीय महापंचायत के लिए सुधार प्रस्ताव दर्ज करें', 'قومی مہاپنچایت کے لیے اصلاحی تجویز جمع کریں')}
              </h3>
              <p className="text-xs text-gray-300">
                {getText(
                  'Every verified member can submit a proposal. It will undergo Committee Review -> Public Support -> Deliberation.',
                  'प्रत्येक सत्यापित सदस्य प्रस्ताव प्रस्तुत कर सकता है। यह समिति समीक्षा -> जन समर्थन -> विचार-विमर्श से गुजरेगा।',
                  'ہر تصدیق شدہ رکن تجویز پیش کر سکتا ہے۔ یہ کمیٹی کے جائزے -> عوامی حمایت -> غور و فکر سے گزرے گا۔'
                )}
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wide block">
                {getText('Proposal Title / Subject:', 'प्रस्ताव का शीर्षक / विषय:', 'تجویز کا عنوان / موضوع:')} *
              </label>
              <input
                type="text"
                required
                placeholder={getText('e.g., District Youth Entrepreneurship Incubator Fund', 'जैसे, जिला युवा स्वरोजगार इनक्यूबेटर कोष', 'مثلاً ڈسٹرکٹ یوتھ انترپرینیورشپ انکیوبیٹر فنڈ')}
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wide block">
                  {getText('Category:', 'श्रेणी:', 'زمرہ:')} *
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-[#F4C430]"
                >
                  <option value="Social Reform & Marriage Norms">{getText('Social Reform & Marriage Norms', 'सामाजिक सुधार व विवाह नियम', 'سماجی اصلاح اور شادی کے قوانین')}</option>
                  <option value="Higher Education & Youth Empowerment">{getText('Higher Education & Youth Empowerment', 'उच्च शिक्षा व युवा सशक्तिकरण', 'اعلیٰ تعلیم اور نوجوانوں کو بااختیار بنانا')}</option>
                  <option value="Economic & Artisan Empowerment">{getText('Economic & Artisan Empowerment', 'आर्थिक व कारीगर विकास', 'اقتصادی اور کاریگر ترقی')}</option>
                  <option value="Legal Aid & Social Harmony">{getText('Legal Aid & Social Harmony', 'कानूनी सहायता व सामाजिक सद्भाव', 'قانونی امداد اور سماجی ہم آہنگی')}</option>
                  <option value="Healthcare & Emergency Aid">{getText('Healthcare & Emergency Aid', 'स्वास्थ्य सेवा व आपातकालीन सहायता', 'ہیلتھ کیئر اور ایمرجنسی ایڈ')}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wide block">
                  {getText('District / State Committee:', 'जिला / राज्य समिति:', 'ضلع / ریاستی کمیٹی:')}
                </label>
                <input
                  type="text"
                  placeholder={getText('e.g., Jaipur District, Rajasthan', 'जैसे, जिला जयपुर, राजस्थान', 'مثلاً ضلع جے پور، راجستھان')}
                  value={form.district}
                  onChange={(e) => setForm({ ...form, district: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wide block">
                {getText('Problem Statement (Why is this reform needed?):', 'समस्या का विवरण (इस सुधार की आवश्यकता क्यों है?):', 'مسئلہ کا بیان (اس اصلاح کی ضرورت کیوں ہے؟):')} *
              </label>
              <textarea
                rows={2}
                required
                placeholder={getText('Describe the challenges faced by community families...', 'समाज के परिवारों के सामने आने वाली चुनौतियों का वर्णन करें...', 'برادری کے خاندانوں کو درپیش مسائل بیان کریں...')}
                value={form.problemStatement}
                onChange={(e) => setForm({ ...form, problemStatement: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wide block">
                {getText('Detailed Solution & Implementation Plan:', 'विस्तृत समाधान एवं क्रियान्वयन योजना:', 'تفصیلی حل اور عمل درآمد کا منصوبہ:')} *
              </label>
              <textarea
                rows={2}
                required
                placeholder={getText('Detail concrete action steps for the committee...', 'समिति के लिए ठोस कार्य चरणों का विवरण दें...', 'کمیٹی کے لیے ٹھوس عملی اقدامات کی تفصیل دیں...')}
                value={form.proposedSolution}
                onChange={(e) => setForm({ ...form, proposedSolution: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430]"
              />
            </div>

            {/* NEW FIELD: BENEFITS */}
            <div className="space-y-1.5 bg-black/30 p-3.5 rounded-2xl border border-emerald-500/30">
              <label className="text-xs font-extrabold text-emerald-400 uppercase tracking-wide block flex items-center gap-1.5">
                <Award className="h-4 w-4 text-[#F4C430]" />
                <span>{getText('Benefits to Community Members:', 'समाज के सदस्यों को लाभ:', 'برادری کے ارکان کو فوائد:')} *</span>
              </label>
              <textarea
                rows={2}
                required
                placeholder={getText('• How will this reform empower youth, women, or elders?\n• Mention financial, educational, or social gains...', '• यह सुधार युवाओं, महिलाओं या बुजुर्गों को कैसे सशक्त करेगा?\n• आर्थिक, शैक्षिक या सामाजिक लाभों का उल्लेख करें...', '• یہ اصلاح نوجوانوں، خواتین، یا بزرگوں کو کیسے بااختیار بنائے گی؟\n• مالی، تعلیمی، یا سماجی فوائد کا ذکر کریں...')}
                value={form.benefits}
                onChange={(e) => setForm({ ...form, benefits: e.target.value })}
                className="w-full px-4 py-2.5 bg-black/60 border border-white/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 font-mono"
              />
            </div>

            {/* SUPPORTING DOCUMENTS & IMAGES & VIDEO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/30 p-4 rounded-2xl border border-white/10">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-[#F4C430]" />
                  <span>{getText('Supporting Documents (PDF/DOC):', 'सहायक दस्तावेज (PDF/DOC):', 'معاون دستاویزات (پی ڈی ایف / ڈاک):')}</span>
                </label>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-xl text-xs font-bold border border-white/10 flex items-center gap-1.5 transition">
                    <Upload className="h-3.5 w-3.5" />
                    <span>{getText('Upload File', 'फ़ाइल अपलोड करें', 'فائل اپ لوڈ کریں')}</span>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleSimulatedFileUpload(e, 'pdf')} />
                  </label>
                  <span className="text-[10px] text-gray-400">{docs.length} {getText('attached', 'संलग्न', 'منسلک')}</span>
                </div>
                {docs.length > 0 && (
                  <div className="space-y-1 mt-1 max-h-20 overflow-y-auto">
                    {docs.map((d, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[11px] bg-black/40 px-2.5 py-1 rounded-lg border border-white/5 font-mono">
                        <span className="truncate max-w-[150px] text-emerald-300">📄 {d.name}</span>
                        <span className="text-gray-500">{d.size}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                  <ImageIcon className="h-4 w-4 text-yellow-400" />
                  <span>{getText('Images / Photos (URL):', 'चित्र / फोटो (URL):', 'تصاویر / فوٹو (یو آر ایل):')}</span>
                </label>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    placeholder="https://images.unsplash..."
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="flex-1 px-3 py-1.5 bg-black/60 border border-white/20 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430]"
                  />
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 px-3 py-1.5 rounded-xl text-xs font-bold border border-yellow-500/30 shrink-0"
                  >
                    +
                  </button>
                </div>
                {images.length > 0 && (
                  <div className="flex gap-1.5 overflow-x-auto pt-1">
                    {images.map((imgUrl, idx) => (
                      <div key={idx} className="w-10 h-10 rounded-lg overflow-hidden border border-white/20 shrink-0 relative">
                        <img src={imgUrl} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* OPTIONAL VIDEO & ADMIN SUPPORT THRESHOLD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                  <Video className="h-4 w-4 text-red-400" />
                  <span>{getText('Video Explanation URL (Optional):', 'वीडियो व्याख्या URL (वैकल्पिक):', 'ویڈیو وضاحت یو آر ایل (اختیاری):')}</span>
                </label>
                <input
                  type="text"
                  placeholder="https://youtube.com/watch?v=..."
                  value={form.videoUrl}
                  onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-black/50 border border-white/20 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430] font-mono"
                />
              </div>

              <div className="space-y-1.5 bg-yellow-950/40 p-2.5 rounded-xl border border-yellow-500/30">
                <label className="text-[11px] font-extrabold text-yellow-300 uppercase block flex items-center justify-between">
                  <span>⚙️ {getText('Admin Config: Min Support Threshold', 'एडमिन कॉन्फ़िगर: न्यूनतम समर्थन सीमा', 'ایڈمن کنفیگریشن: کم از کم سپورٹ حد')}</span>
                  <span className="font-mono bg-black/40 px-2 py-0.5 rounded text-[#F4C430]">{form.minSupportThreshold} Votes</span>
                </label>
                <select
                  value={form.minSupportThreshold}
                  onChange={(e) => setForm({ ...form, minSupportThreshold: Number(e.target.value) })}
                  className="w-full px-3 py-1.5 bg-black/80 border border-yellow-500/40 rounded-lg text-xs text-yellow-200 focus:outline-none"
                >
                  <option value={100}>100 {getText('Verified Supporters', 'सत्यापित समर्थक', 'تصدیق شدہ حامی')}</option>
                  <option value={200}>200 {getText('Verified Supporters (Default)', 'सत्यापित समर्थक (डिफ़ॉल्ट)', 'تصدیق شدہ حامی (ڈیفالٹ)')}</option>
                  <option value={500}>500 {getText('Verified Supporters (Major Ballot)', 'सत्यापित समर्थक (प्रमुख मतदान)', 'تصدیق شدہ حامی (بڑا بیلٹ)')}</option>
                  <option value={1000}>1,000 {getText('Verified Supporters (National Agenda)', 'सत्यापित समर्थक (राष्ट्रीय एजेंडा)', 'تصدیق شدہ حامی (قومی ایجنڈا)')}</option>
                </select>
              </div>
            </div>

            <div className="bg-black/40 p-3.5 rounded-xl border border-white/10 text-xs text-gray-300 flex items-start space-x-2.5">
              <CheckCircle2 className="h-5 w-5 text-[#F4C430] shrink-0 mt-0.5" />
              <span>
                {getText(
                  'I affirm that this proposal adheres to Islamic values, Indian laws, and aims strictly for community welfare without personal or political bias.',
                  'मैं पुष्टि करता हूँ कि यह प्रस्ताव इस्लामी मूल्यों और भारतीय कानूनों के अनुरूप है और इसका उद्देश्य बिना किसी व्यक्तिगत या राजनीतिक पूर्वाग्रह के विशुद्ध रूप से समाज कल्याण है।',
                  'میں تصدیق کرتا ہوں کہ یہ تجویز اسلامی اقدار اور ہندوستانی قوانین کے مطابق ہے اور اس کا مقصد بغیر کسی ذاتی یا سیاسی تعصب کے خالصتاً برادری کی فلاح و بہبود ہے۔'
                )}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#F4C430] via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-300 text-[#0B132B] font-extrabold py-4 rounded-xl text-base shadow-2xl flex items-center justify-center space-x-2 transition transform active:scale-95"
            >
              <PlusCircle className="h-5 w-5" />
              <span>{getText('Submit Proposal to National Secretariat', 'राष्ट्रीय सचिवालय को प्रस्ताव भेजें', 'قومی سیکریٹریٹ کو تجویز ارسال کریں')}</span>
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6 py-6 animate-fadeIn">
            <div className="w-20 h-20 bg-yellow-500/20 text-[#F4C430] rounded-full flex items-center justify-center mx-auto ring-8 ring-yellow-500/10">
              <Award className="h-12 w-12" />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full uppercase border border-emerald-500/30">
                ✓ {getText('Proposal Registered Successfully', 'प्रस्ताव सफलतापूर्वक पंजीकृत हुआ', 'تجویز کامیابی کے ساتھ رجسٹر ہو گئی')}
              </span>
              <h3 className="text-2xl font-serif font-extrabold text-white">
                {getText('Your Voice is Entering the 7-Stage Workflow!', 'आपकी आवाज 7-चरण कार्यप्रणाली में शामिल हो गई है!', 'آپ کی آواز 7 مرحلہ وار ورک فلو میں شامل ہو گئی ہے!')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                {getText(
                  'Your proposal is now under Committee Review. Once approved, it will be published for community support collection towards your target threshold.',
                  'आपका प्रस्ताव अब समिति समीक्षा के अधीन है। स्वीकृत होने पर, इसे निर्धारित सीमा की ओर समुदाय के समर्थन संग्रह के लिए प्रकाशित किया जाएगा।',
                  'آپ کی تجویز اب کمیٹی کے جائزے کے تحت ہے۔ منظور ہونے کے بعد، اسے آپ کے مقرر کردہ ہدف کی حد کی طرف کمیونٹی کی حمایت کے لیے شائع کیا جائے گا۔'
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
