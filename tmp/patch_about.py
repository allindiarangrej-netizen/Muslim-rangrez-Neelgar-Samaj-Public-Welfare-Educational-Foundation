import os

with open('/src/components/AboutUsHub.tsx', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Normalize line endings to prevent matching issues
content = content.replace('\r\n', '\n')

start_faq_marker = "  // Comprehensive FAQ List\n  const faqs = ["
end_faq_marker = "  return ("

start_idx = content.find(start_faq_marker)
end_idx = content.find(end_faq_marker)

if start_idx != -1 and end_idx != -1:
    print("Found FAQ block!")
    new_faq_block = """  // Comprehensive FAQ List
  const faqs = [
    {
      qEn: 'How can I obtain my verified digital ID card?',
      qHi: 'मैं अपना सत्यापित डिजिटल पहचान पत्र कैसे प्राप्त कर सकता हूँ?',
      qUr: 'میں اپنا تصدیق شدہ ڈیجیٹل شناختی کارڈ کیسے حاصل کر سکتا ہوں؟',
      aEn: 'Register on our online Membership Portal by filling out your basic family details and uploading your residence proof. Once your district or state secretary verifies your details, your digital ID card with a unique QR code becomes instantly active and downloadable.',
      aHi: 'हमारे ऑनलाइन सदस्यता पोर्टल पर अपने परिवार का विवरण भरकर और निवास प्रमाण पत्र अपलोड करके पंजीकरण करें। एक बार जब आपके जिला या राज्य सचिव आपके विवरण की पुष्टि कर देते हैं, तो अद्वितीय QR कोड के साथ आपका डिजिटल पहचान पत्र सक्रिय और डाउनलोड के लिए उपलब्ध हो जाता है।',
      aUr: 'ہمارے آن لائن ممبرشپ پورٹل پر اپنے خاندان کی بنیادی تفصیلات بھر کر اور رہائش کا ثبوت اپ لوڈ کر کے رجسٹریشن کریں۔ جیسے ہی آپ کے ضلعی یا ریاستی سکریٹری آپ کی تفصیلات کی تصدیق کریں گے، آپ کا ڈیجیٹل شناختی کارڈ فوراً فعال ہو جائے گا۔'
    },
    {
      qEn: 'Are donations eligible for income tax exemptions under Section 80G?',
      qHi: 'क्या दान आयकर की धारा 80G के तहत कर छूट के योग्य हैं?',
      qUr: 'کیا عطیات انکم ٹیکس کے سیکشن 80G के तहत टैक्स छूट के योग्य हैं؟',
      aEn: 'Yes! All India Rangrez Samaj Trust is a registered non-profit charitable trust. All direct monetary contributions and donations made toward education, healthcare, and welfare funds are eligible for tax exemption under Section 80G of the Income Tax Act. You will receive an instant tax receipt upon donation.',
      aHi: 'हां! ऑल इंडिया रंगरेज समाज ट्रस्ट एक पंजीकृत गैर-लाभकारी धर्मार्थ ट्रस्ट है। शिक्षा, स्वास्थ्य सेवा और कल्याण कोष में किए गए सभी सीधे धन सहयोग आयकर अधिनियम की धारा 80G के तहत कर छूट के योग्य हैं। दान करने पर आपको तुरंत डिजिटल रसीद प्राप्त होगी।',
      aUr: 'ہاں! آل انڈیا رنگریز سماج ٹرسٹ ایک رجسٹرڈ غیر منافع بخش خیراتی ٹرسٹ ہے۔ تعلیم، صحت اور فلاح و بہبود کے فنڈز میں دیے گئے تمام عطیات انکم ٹیکس ایکٹ کے سیکشن 80G کے تحت ٹیکس چھوٹ کے اہل ہیں۔'
    },
    {
      qEn: 'How can students apply for community minority scholarships or education loans?',
      qHi: 'छात्र सामुदायिक अल्पसंख्यक छात्रवृत्ति या शिक्षा ऋण के लिए कैसे आवेदन कर सकते हैं?',
      qUr: 'طلباء کمیونٹی اقلیتی وظائف یا تعلیمی قرضوں کے لیے کیسے درخواست دے سکتے ہیں؟',
      aEn: 'Visit the "Welfare & Support" section and click on "Scholarships". Here you can apply for merit-based scholarships, UPSC/State civil services exam coaching grants, and interest-free higher education micro-loans. Submit your marksheets and admission proof online for verification.',
      aHi: '"कल्याण एवं सहायता" अनुभाग पर जाएं और "छात्रवृत्ति" पर क्लिक करें। यहां आप योग्यता आधारित छात्रवृत्ति, यूपीएससी/राज्य सिविल सेवा परीक्षा कोचिंग अनुदान और ब्याज मुक्त उच्च शिक्षा ऋण के लिए आवेदन कर सकते हैं। सत्यापन के लिए अपनी अंकतालिका और प्रवेश प्रमाण पत्र ऑनलाइन जमा करें।',
      aUr: '"فلاح و بہبود اور مدد" کے سیکشن میں جائیں اور "کالرشپس" پر کلک کریں۔ یہاں آپ میرٹ کی بنیاد پر وظائف، سول سروسز کوچنگ گرانٹس اور بِلَا سُود اعلیٰ تعلیم के ऋणों के लिए आवेदन कर सकते हैं।'
    },
    {
      qEn: 'How do I register a matrimonial profile for my family member?',
      qHi: 'मैं अपने परिवार के सदस्य के लिए वैवाहिक प्रोफ़ाइल कैसे पंजीकृत कर सकता हूँ?',
      qUr: 'میں اپنے خاندان کے فرد کے لیے رشتہ (شادی) کی پروفائل کیسے رجسٹر کروں؟',
      aEn: 'Navigate to "Community Portal" and select the "Matrimonial Portal". Verified registered members can create confidential matrimonial profiles for their children or dependent relatives. All profiles undergo manual moderation to ensure dignity, privacy, and authenticity.',
      aHi: '"सामुदायिक पोर्टल" पर जाएं और "वैवाहिक पोर्टल" चुनें। सत्यापित पंजीकृत सदस्य अपने बच्चों या आश्रित रिश्तेदारों के लिए गोपनीय वैवाहिक प्रोफाइल बना सकते हैं। गरिमा, गोपनीयता और प्रामाणिकता सुनिश्चित करने के लिए सभी प्रोफाइल की जांच की जाती है।',
      aUr: '"کمیونٹی پورٹل" پر جائیں اور "میٹریمونیل پورٹل" منتخب کریں۔ تصدیق شدہ رجسٹرڈ اراکین اپنے بچوں یا رشتہ داروں کے لیے باوقار اور محفوظ رشتہ پروفائلز بنا سکتے ہیں۔'
    },
    {
      qEn: 'Who is eligible to become an active member of All India Rangrez Samaj Trust?',
      qHi: 'ऑल इंडिया रंगरेज समाज ट्रस्ट का सक्रिय सदस्य बनने के लिए कौन पात्र है?',
      qUr: 'آل انڈیا رنگریز سماج ٹرسٹ کا فعال رکن بننے کا اہل کون ہے؟',
      aEn: 'Any adult member (18+ years) belonging to the Rangrez community (or supporting our social reform objectives) residing in India or abroad is eligible for membership. Members must pledge to abide by the Trust Constitution, promote education, and reject dowry and social evils.',
      aHi: 'भारत या विदेश में रहने वाले रंगरेज समुदाय का कोई भी वयस्क सदस्य (18+ वर्ष) या समाज सुधार उद्देश्यों का समर्थन करने वाला व्यक्ति सदस्यता के लिए पात्र है। सदस्यों को ट्रस्ट संविधान का पालन करने, शिक्षा को बढ़ावा देने और दहेज व सामाजिक बुराइयों का बहिष्कार करने की प्रतिज्ञा करनी होगी।',
      aUr: 'ہندوستان یا بیرون ملک مقیم رنگریز برادری کا کوئی بھی بالغ فرد (18+ سال) رکنیت کا اہل ہے۔ اراکین کو ٹرسٹ کے آئین کی پابندی، تعلیم کے فروغ اور جہیز و دیگر سماجی برائیوں کو ختم کرنے کا حلف لینا ہوگا۔'
    },
    {
      qEn: 'What is the procedure to file an RTI or seek community legal assistance?',
      qHi: 'RTI दाखिल करने या सामुदायिक कानूनी सहायता प्राप्त करने की प्रक्रिया क्या है?',
      qUr: 'RTI دائر کرنے یا کمیونٹی سے قانونی مدد حاصل کرنے کا کیا طریقہ ہے؟',
      aEn: 'In our "Legal & Governance Hub", you can access standardized RTI application templates, learn about fundamental constitutional rights, and connect with our panel of pro-bono legal experts for community disputes, property rights, or civil rights protection.',
      aHi: 'हमारे "कानून एवं शासन हब" में, आप मानकीकृत RTI आवेदन प्रारूप प्राप्त कर सकते हैं, मौलिक संवैधानिक अधिकारों के बारे में जान सकते हैं, और सामुदायिक विवादों या नागरिक अधिकारों की रक्षा के लिए हमारे निःशुल्क कानूनी विशेषज्ञों के पैनल से जुड़ सकते हैं।',
      aUr: 'ہمارے "لیگل اور گورننس ہب" میں آپ RTI کی معیاری درخواست کے فارم حاصل کر سکتے ہیں، اپنے آئینی حقوق کے بارے میں جان سکتے ہیں، और मुफ्त कानूनी विशेषज्ञों से सहायता प्राप्त कर सकते हैं।'
    },
    {
      qEn: 'How are Mahapanchayat resolutions and community social reforms enforced?',
      qHi: 'महापंचायत के प्रस्तावों और सामाजिक सुधारों को कैसे लागू किया जाता है?',
      qUr: 'مہاپنچایت کی قراردادوں اور سماجی اصلاحات کو کیسے نافذ کیا جاتا ہے؟',
      aEn: 'Resolutions approved by the Mahapanchayat (such as simplified marriages, dowry ban, and compulsory education) are implemented through local district committees and village panchayats. We use awareness campaigns, counseling, and community recognition awards rather than coercion.',
      aHi: 'महापंचायत द्वारा पारित प्रस्ताव (जैसे सादगीपूर्ण विवाह, दहेज प्रतिबंध और अनिवार्य शिक्षा) स्थानीय जिला समितियों और पंचायत प्रतिनिधियों के माध्यम से लागू किए जाते हैं। हम किसी दबाव के बजाय जागरूकता अभियानों, परामर्श और सामाजिक सम्मान के माध्यम से सुधार लाते हैं।',
      aUr: 'مہاپنچایت کی منظور کردہ قراردادیں (جیسے سادہ شادیاں، جہیز پر پابندی اور لازمی تعلیم) مقامی ضلعی کمیٹیوں کے ذریعے نافذ کی جاتی ہے۔ ہم بیداری مہم اور مشاورت کے ذریعے اصلاحات لاتے ہیں۔'
    },
    {
      qEn: 'Can overseas or NRI community members participate in elections and governance?',
      qHi: 'क्या प्रवासी या NRI सामुदायिक सदस्य चुनावों और शासन में भाग ले सकते हैं?',
      qUr: 'کیا بیرون ملک مقیم یا NRI اراکین انتخابات اور حکمرانی میں حصہ لے سکتے ہیں؟',
      aEn: 'Yes! Overseas and NRI members can register under our International Wing. They can actively participate in digital surveys, opinion polls, committee meetings via video conferencing, and sponsor educational and charitable projects across India.',
      aHi: 'हां! प्रवासी और NRI सदस्य हमारे इंटरनेशनल विंग के तहत पंजीकरण कर सकते हैं। वे डिजिटल सर्वेक्षणों, जनमत संग्रह, वीडियो कॉन्फ्रेंसिंग के माध्यम से सक्रिय रूप से भाग ले सकते हैं और भारत में शैक्षिक परियोजनाओं का समर्थन कर सकते हैं।',
      aUr: 'ہاں! بیرون ملک اور NRI اراکین ہمارے انٹرنیشنل ونگ کے تحت رجسٹر ہو سکتے ہیں۔ وہ ڈیجیٹل سروے، رائے عامہ اور ویڈیو کانفرنسنگ کے ذریعے کمیٹی میٹنگز میں حصہ لے سکتے ہیں۔'
    }
  ];

"""
    content = content[:start_idx] + new_faq_block + content[end_idx:]
else:
    print("Warning: FAQ block or return marker not found!")

# Clean up duplicate main content display blocks using index finding
p1 = content.find("      {/* 3. MAIN CONTENT DISPLAY */}\n      <div class=\"max-w-7xl mx-auto px-4 sm:px-6 py-8\">belUr : item.labelHi}</span>")
p2 = content.find("      {/* 3. MAIN CONTENT DISPLAY */}\n      <div class=\"max-w-7xl mx-auto px-4 sm:px-6 py-8\">\n        {/* TAB 1: COMMUNITY HISTORY */}")

if p1 != -1 and p2 != -1 and p2 > p1:
    print(f"Substring duplicate block match success: removing from {p1} to {p2}")
    content = content[:p1] + "      {/* 3. MAIN CONTENT DISPLAY */}\n" + content[p2:]
else:
    print("Warning: Duplicate block substring markers not found!")

with open('/src/components/AboutUsHub.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Patching completed successfully!")
