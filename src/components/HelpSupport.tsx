import React, { useState, useMemo, useEffect, useRef } from 'react';
import { HelpCircle, PhoneCall, ShieldAlert, CheckCircle, Search, Info, Plus, Sparkles, MessageSquare, ListTodo, Clipboard, ChevronDown, ChevronUp, BookOpen, Send, Star, FileText, Download, HeartHandshake, Phone, Mail, MapPin } from 'lucide-react';
import { Language, SupportTicket } from '../types';
import { getSupabase } from '../lib/supabaseClient';
import { bloodDonors } from '../data';
import ReCAPTCHA from 'react-google-recaptcha';

interface HelpSupportProps {
  currentLanguage: Language;
}

interface FaqItem {
  id: string;
  category: 'General & Membership' | 'Scholarships & Education' | 'Medical & Emergency Aid' | 'Mass Marriage & Welfare' | 'Media & Downloads Vault';
  qEn: string;
  qHi: string;
  qUr: string;
  aEn: string;
  aHi: string;
  aUr: string;
}

export default function HelpSupport({ currentLanguage }: HelpSupportProps) {
  const [activeSupportSub, setActiveSupportSub] = useState<'faqs' | 'ticket' | 'feedback' | 'guide' | 'blood'>('faqs');
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [bloodSearchGroup, setBloodSearchGroup] = useState('All');
  
  // FAQ state
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-gen-1');

  // Ticket-based support states
  const [ticketCategory, setTicketCategory] = useState<'Medical' | 'Emergency' | 'Financial' | 'Legal' | 'Women Support' | 'Senior Citizen' | 'Other'>('Medical');
  const [ticketDesc, setTicketDesc] = useState('');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [activeTickets, setActiveTickets] = useState<SupportTicket[]>([]);

  // Feedback form states
  const [feedbackRating, setFeedbackRating] = useState<number>(5);
  const [feedbackDept, setFeedbackDept] = useState('Media & Downloads');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const faqsList: FaqItem[] = [
    {
      id: 'faq-gen-1',
      category: 'General & Membership',
      qEn: 'How can I register my family in the National Rangrez Community Census?',
      qHi: 'मैं राष्ट्रीय रंगरेज समाज जनगणना में अपने परिवार का पंजीकरण कैसे करा सकता हूँ?',
      qUr: 'میں قومی رنگریز برادری کی مردم شماری میں اپنے خاندان کا اندراج کیسے کروا سکتا ہوں؟',
      aEn: 'You can register by downloading the Universal Membership Form from our Downloads Center or by navigating to the "Family Census" portal under Community Hub. Fill out your family details, attach valid ID proofs, and submit it online or to your regional tehsil president.',
      aHi: 'आप हमारे डाउनलोड केंद्र से सार्वभौमिक सदस्यता फॉर्म डाउनलोड करके या सामुदायिक हब के तहत "परिवार जनगणना" पोर्टल पर जाकर पंजीकरण कर सकते हैं। अपने परिवार के विवरण भरें, वैध पहचान प्रमाण संलग्न करें और इसे ऑनलाइन या अपने क्षेत्रीय तहसील अध्यक्ष को जमा करें।',
      aUr: 'آپ ہمارے ڈاؤن لوڈ سینٹر سے یونیورسل ممبرشپ فارم ڈاؤن لوڈ کر کے یا کمیونٹی ہب کے تحت "فیملی سینسس" پورٹل پر جا کر رجسٹریشن کر سکتے ہیں۔'
    },
    {
      id: 'faq-gen-2',
      category: 'General & Membership',
      qEn: 'How do I update my contact number or village address in the Samaj database?',
      qHi: 'मैं समाज डेटाबेस में अपना संपर्क नंबर या गांव का पता कैसे अपडेट कर सकता हूं?',
      qUr: 'میں برادری کے ڈیٹا بیس میں اپنا رابطہ نمبر یا گاؤں کا پتہ کیسے اپ ڈیٹ کر سکتا ہوں؟',
      aEn: 'To update your profile, raise a quick request in the "Raise Query & Ticket" tab with your Family ID, old phone number, and new phone number. Our Central Verification Desk will update your records within 24 hours.',
      aHi: 'अपनी प्रोफ़ाइल अपडेट करने के लिए, अपनी फैमिली आईडी, पुराने फोन नंबर और नए फोन नंबर के साथ "याचिका दर्ज करें" टैब में एक त्वरित अनुरोध दर्ज करें। हमारी केंद्रीय सत्यापन डेस्क 24 घंटे के भीतर आपका रिकॉर्ड अपडेट कर देगी।',
      aUr: 'اپنی پروفائل کو اپ ڈیٹ کرنے کے لیے، اپنی فیملی آئی ڈی کے ساتھ فوری درخواست جمع کروائیں۔'
    },
    {
      id: 'faq-edu-1',
      category: 'Scholarships & Education',
      qEn: 'What is the eligibility criteria for the Higher Education Merit Scholarship?',
      qHi: 'उच्च शिक्षा मेधावी छात्रवृत्ति के लिए पात्रता मानदंड क्या है?',
      qUr: 'اعلیٰ تعلیم میرٹ اسکالرشپ کے لیے اہلیت کا معیار کیا ہے؟',
      aEn: 'Students belonging to the Rangrez / Neelgar community who have scored 75% or above in class 10th/12th or are pursuing professional degrees (MBBS, B.Tech, CA, Law, UPSC coaching) with an annual family income under ₹4.5 Lakhs are eligible.',
      aHi: 'रंगरेज / नीलगर समाज के छात्र जिन्होंने 10वीं/12वीं कक्षा में 75% या उससे अधिक अंक प्राप्त किए हैं या पेशेवर डिग्री (MBBS, B.Tech, CA, Law, UPSC कोचिंग) कर रहे हैं और जिनकी वार्षिक पारिवारिक आय ₹4.5 लाख से कम है, वे पात्र हैं।',
      aUr: 'رنگریز برادری کے طلباء جنہوں نے 10ویں/12ویں جماعت میں 75% یا اس سے زیادہ نمبر حاصل کیے ہیں وہ اہل ہیں۔'
    },
    {
      id: 'faq-edu-2',
      category: 'Scholarships & Education',
      qEn: 'Where can I download the scholarship application form and list of required documents?',
      qHi: 'मैं छात्रवृत्ति आवेदन फॉर्म और आवश्यक दस्तावेजों की सूची कहां से डाउनलोड कर सकता हूं?',
      qUr: 'میں اسکالرشپ درخواست فارم اور ضروری دستاویزات کی فہرست کہاں سے ڈاؤن لوڈ کر سکتا ہوں؟',
      aEn: 'Visit the "Downloads" tab in this Media & Resources Hub and select the "Forms" category. You will find the "Higher Education & Merit Scholarship Physical Application" ready for instant download.',
      aHi: 'इस मीडिया और संसाधन हब में "डाउनलोड्स" टैब पर जाएं और "फॉर्म" श्रेणी चुनें। आपको तुरंत डाउनलोड के लिए "उच्च शिक्षा एवं मेधावी छात्रवृत्ति भौतिक आवेदन पत्र" मिलेगा।',
      aUr: 'اس میڈیا اور وسائل ہب میں ڈاؤن لوڈز ٹیب پر جائیں اور فارمز کیٹگری منتخب کریں۔'
    },
    {
      id: 'faq-med-1',
      category: 'Medical & Emergency Aid',
      qEn: 'How can I get emergency diagnostic or hospitalization financial aid?',
      qHi: 'मैं आपातकालीन नैदानिक या अस्पताल में भर्ती वित्तीय सहायता कैसे प्राप्त कर सकता हूँ?',
      qUr: 'میں ہنگامی طبی یا ہسپتال میں داخلے کی مالی امداد کیسے حاصل کر سکتا ہوں؟',
      aEn: 'In case of medical emergencies, immediately submit an urgent ticket under "Medical" category in this Helpdesk or call our 24/7 Medical Emergency Hotline at +91-98765-43210. Attach hospital admission estimates and doctor prescriptions.',
      aHi: 'चिकित्सा आपात स्थिति के मामले में, तुरंत इस हेल्पडेस्क में "चिकित्सा" श्रेणी के तहत एक जरूरी याचिका जमा करें या हमारे 24/7 चिकित्सा आपातकालीन हेल्पलाइन +91-98765-43210 पर कॉल करें। अस्पताल में भर्ती होने के अनुमान और डॉक्टर के पर्चे संलग्न करें।',
      aUr: 'طبی ہنگامی صورت حال میں، فوری طور پر اس ہیلپ ڈیسک میں میڈیکل کیٹگری کے تحت ٹکٹ جمع کروائیں۔'
    },
    {
      id: 'faq-med-2',
      category: 'Medical & Emergency Aid',
      qEn: 'How do I contact verified blood donors in my city or district during surgery?',
      qHi: 'सर्जरी के दौरान मैं अपने शहर या जिले में सत्यापित रक्तदाताओं से कैसे संपर्क करूं?',
      qUr: 'سرجری کے دوران میں اپنے شہر یا ضلع میں تصدیق شدہ خون دینے والوں سے کیسے رابطہ کروں؟',
      aEn: 'Click on the "Blood Donors Directory" sub-tab above. Select the required blood group (O+, A+, B+, AB-) from the dropdown filter to view verified community donors with direct "Call Now" emergency buttons.',
      aHi: 'ऊपर "रक्तदाता निर्देशिका" सब-टैब पर क्लिक करें। सीधे "कॉल नाउ" आपातकालीन बटन के साथ सत्यापित सामुदायिक दाताओं को देखने के लिए ड्रॉपडाउन फ़िल्टर से आवश्यक रक्त समूह (O+, A+, B+, AB-) चुनें।',
      aUr: 'اوپر بلڈ ڈونرز ڈائریکٹری سب ٹیب پر کلک کریں اور مطلوبہ بلڈ گروپ منتخب کریں۔'
    },
    {
      id: 'faq-wel-1',
      category: 'Mass Marriage & Welfare',
      qEn: 'How do we register for the upcoming Dowry-Free Mass Marriage (Samuhik Vivah) sammelan?',
      qHi: 'हम आगामी दहेज-मुक्त सामूहिक विवाह सम्मेलन के लिए कैसे पंजीकरण कर सकते हैं?',
      qUr: 'ہم آنے والی جہیز سے پاک اجتماعی شادی (سماجک وواہ) کے لیے کیسے رجسٹریشن کر سکتے ہیں؟',
      aEn: 'Registration for Mass Marriage can be done through the regional committee office or by downloading the "Samuhik Vivah Registration Form" from the Downloads section. Both bride and groom parents must sign the dowry-free pledge.',
      aHi: 'सामूहिक विवाह के लिए पंजीकरण क्षेत्रीय समिति कार्यालय के माध्यम से या डाउनलोड अनुभाग से "सामूहिक विवाह पंजीकरण फॉर्म" डाउनलोड करके किया जा सकता है। वर और वधू दोनों के माता-पिता को दहेज-मुक्त शपथ पत्र पर हस्ताक्षर करना अनिवार्य है।',
      aUr: 'اجتماعی شادی کے لیے رجسٹریشن علاقائی کمیٹی کے دفتر کے ذریعے کی جا سکتی ہے۔'
    },
    {
      id: 'faq-med-val-1',
      category: 'Media & Downloads Vault',
      qEn: 'Can I upload historical community photographs or event videos to the portal?',
      qHi: 'क्या मैं पोर्टल पर ऐतिहासिक सामुदायिक तस्वीरें या कार्यक्रम के वीडियो अपलोड कर सकता हूँ?',
      qUr: 'کیا میں پورٹل پر تاریخی برادری کی تصاویر یا ایونٹ کی ویڈیوز اپ لوڈ کر سکتا ہوں؟',
      aEn: 'Yes! In the Photo Gallery or Video Gallery section, click on "Upload Community Album" or "Create Video Documentary". Fill out the event title, district location, and attach media URLs. Submissions are reviewed by moderators within 12 hours.',
      aHi: 'हाँ! फोटो गैलरी या वीडियो गैलरी अनुभाग में, "सामुदायिक एल्बम अपलोड करें" या "वीडियो वृत्तचित्र बनाएं" पर क्लिक करें। घटना का शीर्षक, जिला स्थान भरें और मीडिया लिंक संलग्न करें। प्रविष्टियों की समीक्षा 12 घंटे के भीतर मॉडरेटर द्वारा की जाती है।',
      aUr: 'جی ہاں! فوٹو گیلری یا ویڈیو گیلری سیکشن میں، البم اپ لوڈ کریں پر کلک کریں۔'
    },
    {
      id: 'faq-med-val-2',
      category: 'Media & Downloads Vault',
      qEn: 'What should I do if a downloaded PDF or official constitution circular fails to open?',
      qHi: 'यदि डाउनलोड किया गया पीडीएफ या आधिकारिक संविधान परिपत्र नहीं खुलता है तो मुझे क्या करना चाहिए?',
      qUr: 'اگر ڈاؤن لوڈ کردہ PDF یا سرکاری آئین کا سرکلر نہیں کھلتا ہے تو مجھے کیا کرنا چاہیے؟',
      aEn: 'Ensure you have a standard PDF reader like Adobe Acrobat installed. You can also use our built-in "Interactive Document Viewer Mode" by clicking the "View" button instead of downloading directly. For corrupt files, clear your browser cache or report in Feedback Box.',
      aHi: 'सुनिश्चित करें कि आपके पास एडोब एक्रोबैट जैसा मानक पीडीएफ रीडर स्थापित है। आप सीधे डाउनलोड करने के बजाय "देखें" बटन पर क्लिक करके हमारे इन-बिल्ट "इंटरएक्टिव डॉक्यूमेंट व्यूअर मोड" का भी उपयोग कर सकते हैं।',
      aUr: 'یقینی بنائیں کہ آپ کے پاس پی ڈی ایف ریڈر انسٹال ہے۔ آپ ہمارا ان بلٹ ویور بھی استعمال کر سکتے ہیں۔'
    }
  ];

  const faqCategories = [
    'All', 'General & Membership', 'Scholarships & Education', 'Medical & Emergency Aid', 'Mass Marriage & Welfare', 'Media & Downloads Vault'
  ];

  const filteredFaqs = useMemo(() => {
    return faqsList.filter(faq => {
      const matchCat = selectedFaqCategory === 'All' || faq.category === selectedFaqCategory;
      const matchQuery = !faqSearchQuery ||
        faq.qEn.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
        faq.qHi.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
        faq.aEn.toLowerCase().includes(faqSearchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedFaqCategory, faqSearchQuery]);

  useEffect(() => {
    async function fetchTickets() {
      const supabase = getSupabase();
      if (!supabase) return;
      const { data, error } = await supabase.from('grievances').select('*');
      if (error) console.error('Error fetching tickets:', error);
      else setActiveTickets(data.map(t => ({ id: t.id, subject: t.title, category: 'Other', description: t.description, status: t.status, dateCreated: t.created_at.split('T')[0] })));
    }
    fetchTickets();
  }, []);

  const handleSubmitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketDesc) return;

    const token = await captchaRef.current?.executeAsync();
    if (!token) return;

    const supabase = getSupabase();
    if (!supabase) return;

    const { data: { user } } = await supabase.auth.getUser();
    const { data, error } = await supabase.from('grievances').insert({
      user_id: user?.id,
      title: ticketSubject,
      description: ticketDesc,
      status: 'Open'
    }).select().single();

    if (error) {
      console.error('Error submitting ticket:', error);
      return;
    }

    // Trigger SMTP emails for visitor acknowledgment and admin alerts
    try {
      const email = user?.email;
      if (email) {
        // 1. Send confirmation to visitor
        await fetch('/api/email/send-generic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            recipient: email,
            name: user?.user_metadata?.name || 'Community Member',
            templateType: 'contact_confirmation',
            templateData: {
              subject: ticketSubject,
              message: ticketDesc
            }
          })
        });

        // 2. Send notification alert to Admin
        await fetch('/api/email/send-generic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            recipient: 'admin@rangrezcommunity.org',
            name: 'System Admin',
            templateType: 'admin_alert',
            templateData: {
              alertType: 'New Support Ticket Submission',
              details: {
                sender_email: email,
                sender_name: user?.user_metadata?.name || 'Community Member',
                ticket_id: data.id,
                subject: ticketSubject,
                description: ticketDesc,
                status: 'Open'
              }
            }
          })
        });
      }
    } catch (emailErr) {
      console.error('Failed to trigger SMTP support ticket notifications:', emailErr);
    }

    setActiveTickets([
      { id: data.id, subject: data.title, category: 'Other', description: data.description, status: data.status, dateCreated: data.created_at.split('T')[0] },
      ...activeTickets
    ]);
    setTicketSubmitted(true);
    triggerToast(currentLanguage === 'en' ? `Support Ticket submitted successfully!` : `सहायता याचिका सफलतापूर्वक दर्ज की गई!`);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketSubject('');
      setTicketDesc('');
    }, 3000);
  };

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText) return;

    const token = await captchaRef.current?.executeAsync();
    if (!token) return;

    const supabase = getSupabase();
    if (!supabase) return;

    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from('feedbacks').insert({
      user_id: user?.id,
      department: feedbackDept,
      rating: feedbackRating,
      comments: feedbackText
    });

    if (error) {
      console.error('Error submitting feedback:', error);
      return;
    }

    // Send admin notification regarding new feedback
    try {
      const email = user?.email || 'anonymous@rangrezcommunity.org';
      await fetch('/api/email/send-generic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: 'admin@rangrezcommunity.org',
          name: 'System Admin',
          templateType: 'admin_alert',
          templateData: {
            alertType: 'New Department Feedback Received',
            details: {
              sender_email: email,
              sender_name: feedbackName || 'Community Member',
              department: feedbackDept,
              rating: `${feedbackRating} / 5 Stars`,
              comments: feedbackText
            }
          }
        })
      });
    } catch (emailErr) {
      console.error('Failed to trigger SMTP feedback notifications:', emailErr);
    }

    setFeedbackSubmitted(true);
    triggerToast(currentLanguage === 'en' ? 'Thank you! Your feedback has been recorded.' : 'धन्यवाद! आपकी प्रतिक्रिया दर्ज कर ली गई है।');
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackText('');
      setFeedbackName('');
    }, 3000);
  };

  return (
    <div className="py-12 bg-gray-50/50 min-h-screen" id="help_support_module">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B132B] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#FFD54A] flex items-center space-x-3 animate-slideUp">
          <CheckCircle className="h-5 w-5 text-[#FFD54A]" />
          <span className="text-sm font-semibold">{toastMsg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-red-700 font-bold text-xs uppercase tracking-widest block flex items-center justify-center space-x-1.5">
            <ShieldAlert className="h-4 w-4 text-red-600" />
            <span>{currentLanguage === 'en' ? '24/7 CRISIS, SUPPORT & KNOWLEDGE DESK' : '24/7 आपातकालीन, सहायता एवं ज्ञान प्रकोष्ठ'}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'FAQs & Community Help Center' : 'सामान्य प्रश्न, जनसुनवाई एवं सहायता केंद्र'}
          </h2>
          <p className="text-[11px] text-[#004B23] font-bold tracking-wide mt-1 uppercase">
            Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation
          </p>
        </div>

        {/* 5-Pill Sub-Navigation Toolbar */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 border-b border-gray-200 pb-6">
          <button
            onClick={() => setActiveSupportSub('faqs')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition ${
              activeSupportSub === 'faqs'
                ? 'bg-[#004B23] text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <HelpCircle className="h-4 w-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Searchable FAQs' : 'सामान्य प्रश्न (FAQs)'}</span>
          </button>

          <button
            onClick={() => setActiveSupportSub('ticket')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition ${
              activeSupportSub === 'ticket'
                ? 'bg-[#004B23] text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <MessageSquare className="h-4 w-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Raise Query & Ticket' : 'याचिका दर्ज करें (Helpdesk)'}</span>
          </button>

          <button
            onClick={() => setActiveSupportSub('feedback')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition ${
              activeSupportSub === 'feedback'
                ? 'bg-[#004B23] text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Star className="h-4 w-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Feedback Form' : 'सुझाव एवं प्रतिक्रिया'}</span>
          </button>

          <button
            onClick={() => setActiveSupportSub('guide')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition ${
              activeSupportSub === 'guide'
                ? 'bg-[#004B23] text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <BookOpen className="h-4 w-4 text-[#FFD54A]" />
            <span>{currentLanguage === 'en' ? 'Portal User Guide' : 'उपयोगकर्ता मार्गदर्शिका'}</span>
          </button>

          <button
            onClick={() => setActiveSupportSub('blood')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition ${
              activeSupportSub === 'blood'
                ? 'bg-red-700 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200 text-red-700'
            }`}
          >
            <HeartHandshake className="h-4 w-4 text-white" />
            <span>{currentLanguage === 'en' ? 'Blood Donors Directory' : 'रक्तदाता निर्देशिका'}</span>
          </button>
        </div>

        {/* ================= 1. SEARCHABLE FAQS & ACCORDION KNOWLEDGE BASE ================= */}
        {activeSupportSub === 'faqs' && (
          <div className="space-y-8 animate-fadeIn" id="searchable_faqs_panel">
            {/* Search & Category Filter Toolbar */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={currentLanguage === 'en' ? 'Search questions, keywords, or topics...' : 'प्रश्न, विषय या कीवर्ड खोजें...'}
                    value={faqSearchQuery}
                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]/20 focus:border-[#004B23] transition"
                  />
                  {faqSearchQuery && (
                    <button onClick={() => setFaqSearchQuery('')} className="absolute right-3 top-3 text-xs text-gray-400 hover:text-gray-600 font-bold">✕</button>
                  )}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {currentLanguage === 'en' ? `Showing ${filteredFaqs.length} answered questions` : `${filteredFaqs.length} उत्तरित प्रश्न उपलब्ध`}
                </div>
              </div>

              {/* FAQ Category Buttons */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {faqCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFaqCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                      selectedFaqCategory === cat
                        ? 'bg-[#004B23] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Layout: FAQs Accordion + Contact Helplines Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Accordion List (8 Cols) */}
              <div className="lg:col-span-8 space-y-4">
                {filteredFaqs.length === 0 ? (
                  <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center space-y-3">
                    <HelpCircle className="h-10 w-10 text-gray-300 mx-auto" />
                    <h4 className="font-serif font-bold text-gray-800 text-base">No FAQ matches your search</h4>
                    <p className="text-xs text-gray-500 max-w-md mx-auto">
                      Try clearing your search keyword or submit a direct query to our helpdesk below.
                    </p>
                    <button
                      onClick={() => { setSelectedFaqCategory('All'); setFaqSearchQuery(''); }}
                      className="px-4 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold"
                    >
                      Reset Search
                    </button>
                  </div>
                ) : (
                  filteredFaqs.map((faq) => {
                    const isOpen = expandedFaqId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen ? 'border-[#004B23] shadow-md ring-1 ring-[#004B23]/10' : 'border-gray-200 shadow-sm hover:border-gray-300'
                        }`}
                      >
                        <button
                          onClick={() => setExpandedFaqId(isOpen ? null : faq.id)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                        >
                          <div className="flex items-start space-x-3">
                            <span className="p-1.5 rounded-lg bg-[#004B23]/10 text-[#004B23] font-extrabold text-xs shrink-0 mt-0.5">
                              Q
                            </span>
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#004B23] block mb-1">
                                {faq.category}
                              </span>
                              <h3 className="font-serif font-bold text-sm sm:text-base text-gray-900 leading-snug">
                                {currentLanguage === 'en' ? faq.qEn : currentLanguage === 'ur' ? faq.qUr : faq.qHi}
                              </h3>
                            </div>
                          </div>
                          <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#004B23] text-white rotate-180' : 'bg-gray-100 text-gray-600'}`}>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-2 border-t border-gray-100 bg-gray-50/50 flex items-start space-x-3">
                            <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800 font-extrabold text-xs shrink-0 mt-0.5">
                              A
                            </span>
                            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light space-y-2">
                              <p>{currentLanguage === 'en' ? faq.aEn : faq.aHi}</p>
                              <div className="pt-2 flex items-center space-x-4 text-[11px] text-gray-400 font-mono">
                                <span>✔ Verified by Central Legal & Media Desk</span>
                                <button
                                  onClick={() => triggerToast(currentLanguage === 'en' ? 'Thanks for your feedback!' : 'प्रतिक्रिया के लिए धन्यवाद!')}
                                  className="text-[#004B23] hover:underline font-bold"
                                >
                                  {currentLanguage === 'en' ? 'Helpful?' : 'क्या यह उपयोगी था?'}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Right Column: Emergency Helplines & Direct Contact Sidebar (4 Cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#0B132B] text-white p-6 rounded-3xl shadow-xl border border-[#FFD54A]/30 space-y-5">
                  <div className="flex items-center space-x-2.5">
                    <PhoneCall className="h-5 w-5 text-[#FFD54A] animate-pulse" />
                    <h3 className="font-serif font-bold text-base">{currentLanguage === 'en' ? 'Direct Support Helplines' : 'सीधी सहायता हेल्पलाइन'}</h3>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {currentLanguage === 'en'
                      ? 'Can’t find your answer above? Connect directly with regional coordinators or our national emergency command desk.'
                      : 'क्या आपको अपना उत्तर नहीं मिला? क्षेत्रीय समन्वयकों या हमारे राष्ट्रीय आपातकालीन सहायता डेस्क से संपर्क करें।'}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#FFD54A] font-bold uppercase block">Medical Emergency (24/7)</span>
                        <span className="text-xs font-mono font-bold">+91 98765 43210</span>
                      </div>
                      <a href="tel:+919876543210" className="p-2 bg-[#004B23] hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition">Call</a>
                    </div>

                    <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-emerald-400 font-bold uppercase block">Central Secretariat Desk</span>
                        <span className="text-xs font-mono font-bold">+91 755 267 8900</span>
                      </div>
                      <a href="tel:+917552678900" className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-xs font-bold transition">Call</a>
                    </div>

                    <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-blue-300 font-bold uppercase block">Media & Support Vault</span>
                        <span className="text-xs font-mono font-bold">support@rangrezcommunity.org</span>
                      </div>
                      <button onClick={() => { navigator.clipboard.writeText('support@rangrezcommunity.org'); triggerToast('Email copied to clipboard!'); }} className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-xs font-bold transition">Copy</button>
                    </div>
                  </div>
                </div>

                {/* Quick Action Banner to Switch to Ticket Helpdesk */}
                <div className="bg-gradient-to-br from-emerald-900 to-[#004B23] text-white p-6 rounded-3xl shadow-lg border border-emerald-700 space-y-4">
                  <h4 className="font-serif font-bold text-base">Need specific family assistance?</h4>
                  <p className="text-xs text-emerald-100">
                    Submit an online ticket with your Family ID and receive priority tracking and SMS updates.
                  </p>
                  <button
                    onClick={() => setActiveSupportSub('ticket')}
                    className="w-full py-2.5 bg-[#FFD54A] text-[#0B132B] font-extrabold rounded-xl text-xs uppercase tracking-wider hover:bg-amber-400 transition shadow"
                  >
                    Raise Support Ticket →
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= 2. RAISE QUERY & TICKET HELPDESK ================= */}
        {activeSupportSub === 'ticket' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn" id="ticket_helpdesk_panel">
            {/* Left Col: Ticket Form */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-[#004B23] font-bold text-[11px] uppercase tracking-wider block">
                  {currentLanguage === 'en' ? 'PUBLIC WELFARE GRIEVANCE DESK' : 'जनसुनवाई एवं सहायता याचिका प्रकोष्ठ'}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Raise a Support Ticket' : 'नई सहायता याचिका दर्ज करें'}
                </h3>
              </div>

              {ticketSubmitted ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3 animate-fadeIn">
                  <CheckCircle className="h-10 w-10 text-[#004B23] mx-auto" />
                  <h4 className="font-bold text-sm text-[#004B23]">
                    {currentLanguage === 'en' ? 'Ticket Dispatched Successfully!' : 'याचिका सफलतापूर्वक दर्ज की गई!'}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {currentLanguage === 'en'
                      ? 'Your grievance has been assigned an official Ticket ID. A regional coordinator will contact your registered mobile within 24 hours.'
                      : 'आपकी शिकायत को एक आधिकारिक याचिका आईडी दी गई है। क्षेत्रीय समन्वयक 24 घंटे के भीतर आपसे संपर्क करेंगे।'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitTicket} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Grievance / Request Category' : 'याचिका की श्रेणी'}
                    </label>
                    <select
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value as any)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs font-bold text-gray-800 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                    >
                      <option value="Medical">🏥 Medical Emergency / स्वास्थ्य सहायता</option>
                      <option value="Emergency">🚨 Urgent Crisis / आपातकालीन सहायता</option>
                      <option value="Financial">💰 Education / Scholarship Aid / छात्रवृत्ति</option>
                      <option value="Legal">⚖️ Legal & Waqf Guidance / कानूनी सहायता</option>
                      <option value="Women Support">🌸 Women & Widow Support / महिला सहायता</option>
                      <option value="Senior Citizen">👴 Senior Citizen Aid / वरिष्ठ नागरिक</option>
                      <option value="Other">📌 Other Administrative Query / अन्य</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Subject / Short Title *' : 'विषय / संक्षिप्त शीर्षक *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Higher Education scholarship fee aid request"
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Detailed Description & Location Metrics *' : 'विस्तृत विवरण एवं स्थान *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please list village/tehsil coordinates, family ID, and specific assistance required..."
                      value={ticketDesc}
                      onChange={(e) => setTicketDesc(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={captchaRef}
                      size="invisible"
                      sitekey={(import.meta as any).env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#004B23] hover:bg-[#00381a] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4 text-[#FFD54A]" />
                    <span>{currentLanguage === 'en' ? 'Submit and Dispatch Ticket' : 'याचिका सबमिट करें'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Col: Active Tickets Tracker */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <h3 className="text-xs font-extrabold uppercase text-gray-500 tracking-wider flex items-center space-x-2">
                  <ListTodo className="h-4.5 w-4.5 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Your Active Support Tickets Queue' : 'आपकी दर्ज सक्रिय याचिकाएं (सुनवाई)'}</span>
                </h3>
                <span className="text-xs font-mono font-bold text-gray-400">{activeTickets.length} active records</span>
              </div>

              <div className="space-y-4">
                {activeTickets.map((t) => (
                  <div key={t.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-[#004B23] font-bold uppercase bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        {t.category}
                      </span>
                      <span className="font-bold text-gray-600">ID: {t.id}</span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0B132B]">{t.subject}</h4>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">{t.description}</p>
                    
                    <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-[11px]">
                      <span className="text-gray-400 font-mono">Created: {t.dateCreated}</span>
                      
                      {/* Status Pipeline */}
                      <span className={`px-3 py-1 rounded-full font-bold uppercase font-mono text-[10px] ${
                        t.status === 'Open'
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : t.status === 'Area Verified'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}>
                        {t.status === 'Open' ? 'OPEN / समीक्षा जारी' : (t.status === 'Area Verified' ? 'AREA VERIFIED / क्षेत्रीय सत्यापित' : 'RESOLVED / निस्तारित')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= 3. FEEDBACK FORM ================= */}
        {activeSupportSub === 'feedback' && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6 animate-fadeIn" id="feedback_form_panel">
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={captchaRef}
                size="invisible"
                sitekey={(import.meta as any).env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
              />
            </div>
            <div className="text-center space-y-2 border-b border-gray-100 pb-6">
              <span className="p-3 bg-amber-50 text-amber-700 rounded-full inline-block">
                <Star className="h-6 w-6 fill-amber-500 text-amber-500" />
              </span>
              <h3 className="font-serif font-bold text-xl text-[#0B132B]">
                {currentLanguage === 'en' ? 'Community Feedback & Suggestion Box' : 'सामुदायिक सुझाव एवं प्रतिक्रिया फॉर्म'}
              </h3>
              <p className="text-xs text-gray-500">
                {currentLanguage === 'en'
                  ? 'Help us improve the Rangrez Community Bharat Portal. Share your ideas, report broken links, or suggest new features for our media vault.'
                  : 'रंगरेज कम्युनिटी भारत पोर्टल को बेहतर बनाने में हमारी सहायता करें। अपने विचार साझा करें या मीडिया रिपॉजिटरी के लिए नए सुझाव दें।'}
              </p>
            </div>

            {feedbackSubmitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4 animate-fadeIn">
                <CheckCircle className="h-12 w-12 text-[#004B23] mx-auto" />
                <h4 className="font-bold text-base text-[#004B23]">
                  {currentLanguage === 'en' ? 'Feedback Received with Thanks!' : 'आपकी प्रतिक्रिया सफलतापूर्वक प्राप्त हुई!'}
                </h4>
                <p className="text-xs text-gray-600 max-w-md mx-auto">
                  {currentLanguage === 'en'
                    ? 'Your feedback has been logged in the Central Portal Improvement Registry. Our technical and editorial teams review all suggestions weekly.'
                    : 'आपकी प्रतिक्रिया केंद्रीय पोर्टल सुधार रजिस्ट्री में दर्ज कर ली गई है। हमारी तकनीकी और संपादकीय टीम साप्ताहिक रूप से सभी सुझावों की समीक्षा करती है।'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                    {currentLanguage === 'en' ? 'How would you rate your experience?' : 'आप अपने अनुभव को कितनी रेटिंग देंगे?'}
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackRating(star)}
                        className={`p-2 rounded-xl transition ${feedbackRating >= star ? 'text-amber-500 scale-110' : 'text-gray-300 hover:text-gray-400'}`}
                      >
                        <Star className="h-7 w-7 fill-current" />
                      </button>
                    ))}
                    <span className="ml-3 text-xs font-bold text-gray-600 font-mono">
                      ({feedbackRating} / 5 {currentLanguage === 'en' ? 'Stars' : 'स्टार'})
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Your Name (Optional)' : 'आपका नाम (वैकल्पिक)'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Mohammed Imran"
                      value={feedbackName}
                      onChange={(e) => setFeedbackName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Related Department' : 'संबंधित विभाग'}
                    </label>
                    <select
                      value={feedbackDept}
                      onChange={(e) => setFeedbackDept(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs font-bold text-gray-800 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                    >
                      <option value="Media & Downloads">📁 Media & Downloads Vault</option>
                      <option value="News & Events">📰 News & Event Galleries</option>
                      <option value="Islamic Resources">🌙 Islamic Hijri Calendar & Knowledge</option>
                      <option value="Scholarships & Welfare">🎓 Scholarships & Welfare Schemes</option>
                      <option value="Technical Bug / Link Error">🐞 Technical Bug / Link Error</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Your Feedback / Suggestion *' : 'आपका सुझाव या संदेश *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={currentLanguage === 'en' ? 'Describe your suggestion or mention any broken download link...' : 'अपने सुझाव का वर्णन करें या किसी त्रुटि का उल्लेख करें...'}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#004B23] hover:bg-[#00381a] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4 text-[#FFD54A]" />
                  <span>{currentLanguage === 'en' ? 'Submit Feedback to Secretariat' : 'प्रतिक्रिया सबमिट करें'}</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* ================= 4. PORTAL USER GUIDE & MANUAL ================= */}
        {activeSupportSub === 'guide' && (
          <div className="space-y-8 animate-fadeIn" id="user_guide_panel">
            <div className="bg-gradient-to-r from-[#0B132B] to-[#004B23] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#FFD54A]/30">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[11px] font-extrabold text-[#FFD54A] uppercase tracking-wider block">Official Portal Handbook</span>
                <h3 className="font-serif font-bold text-2xl">
                  {currentLanguage === 'en' ? 'Mastering the Rangrez Community Bharat Portal' : 'रंगरेज कम्युनिटी भारत पोर्टल का संपूर्ण उपयोग गाइड'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200">
                  {currentLanguage === 'en'
                    ? 'Step-by-step instructions on accessing welfare grants, downloading constitution bylaws, verifying blood donors, and contributing to national photo/video archives.'
                    : 'कल्याणकारी अनुदान प्राप्त करने, संविधान उपनियम डाउनलोड करने, रक्तदाताओं का सत्यापन करने और राष्ट्रीय फोटो/वीडियो अभिलेखागार में योगदान करने के चरण-दर-चरण निर्देश।'}
                </p>
              </div>
              <button
                onClick={() => triggerToast(currentLanguage === 'en' ? 'Downloading Official User Guide PDF (3.2 MB)...' : 'यूजर गाइड पीडीएफ डाउनलोड हो रही है...')}
                className="px-6 py-3.5 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-extrabold rounded-xl text-xs uppercase tracking-wider transition shadow-lg shrink-0 flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>{currentLanguage === 'en' ? 'Download PDF Manual →' : 'पीडीएफ मैनुअल डाउनलोड करें →'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <div className="p-3 bg-emerald-50 text-[#004B23] rounded-2xl w-fit font-mono font-black text-sm">STEP 01</div>
                <h4 className="font-serif font-bold text-base text-gray-900">Family Census Registration</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  Navigate to Community Hub → Family Census. Enter your Tehsil name, add family members with age and profession, and generate your unique 10-digit National Family ID for scholarship verification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <div className="p-3 bg-blue-50 text-blue-800 rounded-2xl w-fit font-mono font-black text-sm">STEP 02</div>
                <h4 className="font-serif font-bold text-base text-gray-900">Media & Document Downloads</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  Use the "Downloads" tab to locate verified scholarship forms, circulars, and the national constitution. Use the "View" button for interactive preview or "Download" for high-resolution printing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <div className="p-3 bg-amber-50 text-amber-800 rounded-2xl w-fit font-mono font-black text-sm">STEP 03</div>
                <h4 className="font-serif font-bold text-base text-gray-900">Raising Support Tickets</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  For medical or educational financial aid, switch to "Raise Query & Ticket". Attach hospital estimates or fee receipts. Track real-time progress from Open to Area Verified and Resolved.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= 5. BLOOD DONOR DIRECTORY ================= */}
        {activeSupportSub === 'blood' && (
          <div className="space-y-6 animate-fadeIn" id="blood_directory_panel">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="text-base font-serif font-bold text-gray-900">
                  {currentLanguage === 'en' ? 'Search Verified Emergency Blood Donors' : 'सत्यापित आपातकालीन रक्तदाताओं की खोज'}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {currentLanguage === 'en' ? 'Filter by blood group to locate verified volunteer donors in your district with 1-click calling.' : 'अपने जिले में आपातकालीन रक्तदाताओं का पता लगाने के लिए रक्त समूह द्वारा फिल्टर करें।'}
                </p>
              </div>

              <div>
                <select
                  value={bloodSearchGroup}
                  onChange={(e) => setBloodSearchGroup(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl focus:outline-none text-gray-800 font-bold font-mono"
                >
                  <option value="All">{currentLanguage === 'en' ? 'All Blood Groups' : 'सभी रक्त समूह'}</option>
                  <option value="O+">O+ Group</option>
                  <option value="A+">A+ Group</option>
                  <option value="B+">B+ Group</option>
                  <option value="AB-">AB- Group</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bloodDonors
                .filter(d => bloodSearchGroup === 'All' || d.bloodGroup === bloodSearchGroup)
                .map((d) => (
                  <div key={d.id} className="bg-white p-5 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-red-200 transition">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-400 font-mono">{d.id}</span>
                        <span className="text-xs font-extrabold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-lg font-mono">
                          {d.bloodGroup}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? d.nameEn : d.nameHi}</h4>
                      <p className="text-xs text-gray-500 flex items-center space-x-1">
                        <MapPin className="h-3 w-3 text-red-500 shrink-0" />
                        <span>{currentLanguage === 'en' ? `${d.districtEn} District` : `${d.districtHi} जिला`}</span>
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-3 mt-4 flex items-center justify-between">
                      {d.isAvailable ? (
                        <a
                          href={`tel:${d.phone}`}
                          className="px-3.5 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl text-[10px] font-extrabold uppercase flex items-center space-x-1.5 transition shadow-sm"
                        >
                          <PhoneCall className="h-3.5 w-3.5 text-[#FFD54A]" />
                          <span>{currentLanguage === 'en' ? 'CALL NOW' : 'कॉल करें'}</span>
                        </a>
                      ) : (
                        <span className="text-[10px] text-gray-400 font-bold uppercase bg-gray-100 px-2 py-1 rounded">NOT AVAILABLE</span>
                      )}

                      <span className={`text-[10px] font-mono font-bold ${d.isAvailable ? 'text-emerald-600' : 'text-gray-400'}`}>
                        {d.isAvailable ? '● AVAILABLE' : '○ BUSY'}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
