import { Language } from '../types';
import {
  FAQItem,
  FAQCategory,
  FAQ_CATEGORIES,
  INITIAL_FAQS,
  filterFAQs,
  generateFAQSchemaJson
} from '../data/faqKnowledgeBase';

// Interface for localized UI terms & placeholders
export interface FAQInterfaceStrings {
  title: string;
  subtitle: string;
  badgeAi: string;
  badgeVerified: string;
  adminBtn: string;
  indexedTopics: string;
  searchPlaceholder: string;
  instantMatches: string;
  pressEscToClose: string;
  categoriesLabel: string;
  allQuestions: string;
  featuredOnly: string;
  expandAll: string;
  collapseAll: string;
  showingCount: (current: number, total: number) => string;
  clearSearch: string;
  noResultsTitle: string;
  noResultsSubtitle: string;
  askIqraBtn: string;
  updatedLabel: string;
  featuredBadge: string;
  helpfulBtn: string;
  alreadyVoted: string;
  votedThanks: string;
  copyLinkBtn: string;
  linkCopied: string;
  openPortalBtn: string;
  askIqraFaq: string;
  adminModalTitle: string;
  addNewBtn: string;
  exportJsonBtn: string;
  resetDefaultsBtn: string;
  editModalTitle: string;
  createModalTitle: string;
  categorySelectLabel: string;
  tabLinkInputLabel: string;
  englishSectionTitle: string;
  hindiSectionTitle: string;
  urduSectionTitle: string;
  keywordsLabel: string;
  markFeaturedLabel: string;
  cancelBtn: string;
  saveBtn: string;
  faqUpdatedToast: string;
  faqCreatedToast: string;
  faqDeletedToast: string;
  faqResetToast: string;
  iqraOpeningToast: string;
  confirmDelete: string;
  confirmReset: string;
}

const UI_STRINGS: Record<Language, FAQInterfaceStrings> = {
  en: {
    title: 'Frequently Asked Questions & Knowledge Base',
    subtitle: 'Instant, verified guidance on society registration (02/42/01/28332/26), scholarships, census ID, dowry-free Nikah, government schemes, and legal awareness.',
    badgeAi: 'AI POWERED KNOWLEDGE CENTER',
    badgeVerified: 'VERIFIED ANSWERS',
    adminBtn: '⚙ Admin FAQ Panel',
    indexedTopics: 'Indexed Topics',
    searchPlaceholder: 'Search questions, registration no, scholarships, dowry-free Nikah, blood donors...',
    instantMatches: 'INSTANT MATCHES',
    pressEscToClose: 'Press ESC to close',
    categoriesLabel: 'CATEGORIES',
    allQuestions: 'All Questions',
    featuredOnly: 'Featured Only',
    expandAll: 'Expand All',
    collapseAll: 'Collapse All',
    showingCount: (current, total) => `Showing ${current} of ${total} FAQs`,
    clearSearch: 'Clear search filter',
    noResultsTitle: 'No matching questions found',
    noResultsSubtitle: 'Try searching with different keywords or ask IQRA AI Assistant to get a custom instant response.',
    askIqraBtn: 'Ask IQRA AI Assistant',
    updatedLabel: 'Updated',
    featuredBadge: 'FEATURED',
    helpfulBtn: 'Helpful',
    alreadyVoted: 'You have already voted on this answer!',
    votedThanks: 'Thank you for your feedback! 👍',
    copyLinkBtn: 'Copy Link',
    linkCopied: 'Direct FAQ link copied to clipboard!',
    openPortalBtn: 'Open Portal Section',
    askIqraFaq: 'Ask IQRA AI',
    adminModalTitle: 'Enterprise FAQ Management Panel',
    addNewBtn: 'Add New FAQ',
    exportJsonBtn: 'Export JSON',
    resetDefaultsBtn: 'Reset Factory Defaults',
    editModalTitle: 'Edit FAQ Item',
    createModalTitle: 'Create New Multilingual FAQ Item',
    categorySelectLabel: 'Category',
    tabLinkInputLabel: 'Portal Tab Link (Optional)',
    englishSectionTitle: 'English Version',
    hindiSectionTitle: 'Hindi Version (हिंदी)',
    urduSectionTitle: 'Urdu Version (اردو) - Optional',
    keywordsLabel: 'Search Keywords (comma separated)',
    markFeaturedLabel: 'Mark as Featured FAQ',
    cancelBtn: 'Cancel',
    saveBtn: 'Save FAQ Item',
    faqUpdatedToast: 'FAQ updated successfully!',
    faqCreatedToast: 'New FAQ created successfully!',
    faqDeletedToast: 'FAQ deleted.',
    faqResetToast: 'FAQs reset to default dataset.',
    iqraOpeningToast: 'Opening IQRA AI Assistant...',
    confirmDelete: 'Are you sure you want to delete this FAQ?',
    confirmReset: 'Reset to factory default FAQs?'
  },
  hi: {
    title: 'अक्सर पूछे जाने वाले प्रश्न एवं ज्ञान केंद्र',
    subtitle: 'सोसाइटी पंजीकरण (02/42/01/28332/26), छात्रवृत्ति, जनगणना डिजिटल आईडी, दहेज-मुक्त निकाह, सरकारी योजनाओं और कानूनी सहायता पर त्वरित और सत्यापित उत्तर।',
    badgeAi: 'एआई-संचालित बहुभाषी ज्ञान केंद्र',
    badgeVerified: 'सत्यापित उत्तर',
    adminBtn: '⚙ प्रबंधक प्रश्न समायोजन',
    indexedTopics: 'सत्यापित प्रश्न',
    searchPlaceholder: 'प्रश्न, पंजीकरण संख्या, छात्रवृत्ति, दहेज-मुक्त निकाह या योजनाएं खोजें...',
    instantMatches: 'त्वरित उत्तर सुझाव',
    pressEscToClose: 'बंद करने के लिए ESC दबाएं',
    categoriesLabel: 'श्रेणियाँ',
    allQuestions: 'सभी प्रश्न',
    featuredOnly: 'मुख्य प्रश्न',
    expandAll: 'सभी खोलें',
    collapseAll: 'सभी बंद करें',
    showingCount: (current, total) => `कुल ${total} प्रश्नों में से ${current} प्रदर्शित`,
    clearSearch: 'खोज साफ़ करें',
    noResultsTitle: 'कोई मेल खाता प्रश्न नहीं मिला',
    noResultsSubtitle: 'अलग कीवर्ड से खोजें या तत्काल सहायता के लिए इक्रा एआई सहायक से पूछें।',
    askIqraBtn: 'इक्रा एआई से पूछें',
    updatedLabel: 'अद्यतन',
    featuredBadge: 'मुख्य प्रश्न',
    helpfulBtn: 'उपयोगी',
    alreadyVoted: 'आप इस उत्तर पर पहले ही वोट दे चुके हैं!',
    votedThanks: 'आपकी प्रतिक्रिया के लिए धन्यवाद! 👍',
    copyLinkBtn: 'लिंक कॉपी करें',
    linkCopied: 'प्रत्यक्ष उत्तर लिंक क्लिपबोर्ड पर कॉपी किया गया!',
    openPortalBtn: 'संबंधित पोर्टल पर जाएं',
    askIqraFaq: 'इक्रा एआई से पूछें',
    adminModalTitle: 'प्रबंधक प्रश्न एवं उत्तर नियंत्रण कक्ष',
    addNewBtn: 'नया प्रश्न जोड़ें',
    exportJsonBtn: 'निर्यात JSON',
    resetDefaultsBtn: 'फ़ैक्टरी रीसेट',
    editModalTitle: 'प्रश्न संपादित करें',
    createModalTitle: 'नया बहुभाषी प्रश्न जोड़ें',
    categorySelectLabel: 'श्रेणी',
    tabLinkInputLabel: 'पोर्टल टैब लिंक (वैकल्पिक)',
    englishSectionTitle: 'अंग्रेजी संस्करण (English)',
    hindiSectionTitle: 'हिंदी संस्करण (Hindi)',
    urduSectionTitle: 'उर्दू संस्करण (Urdu) - वैकल्पिक',
    keywordsLabel: 'खोज कीवर्ड (कॉमा से अलग करें)',
    markFeaturedLabel: 'मुख्य प्रश्न के रूप में चिह्नित करें',
    cancelBtn: 'रद्द करें',
    saveBtn: 'प्रश्न सुरक्षित करें',
    faqUpdatedToast: 'प्रश्न सफलतापूर्वक अद्यतन किया गया!',
    faqCreatedToast: 'नया प्रश्न सफलतापूर्वक जोड़ा गया!',
    faqDeletedToast: 'प्रश्न हटा दिया गया।',
    faqResetToast: 'प्रश्न डेटासेट रीसेट कर दिया गया।',
    iqraOpeningToast: 'इक्रा एआई सहायक खोला जा रहा है...',
    confirmDelete: 'क्या आप वाकई इस प्रश्न को हटाना चाहते हैं?',
    confirmReset: 'मूल फ़ैक्टरी प्रश्नों पर पुनर्सेट करें?'
  },
  ur: {
    title: 'کثرت سے پوچھے گئے سوالات اور نالج سینٹر',
    subtitle: 'سوسائٹی رجسٹریشن (02/42/01/28332/26)، اسکالرشپ، مردم شماری آئی ڈی، جہیز سے پاک نکاح، اور سرکاری اسکیموں پر فوری اور تصدیق شدہ معلومات۔',
    badgeAi: 'مصنوعی ذہانت پر مبنی علم کا مرکز',
    badgeVerified: 'تصدیق شدہ جوابات',
    adminBtn: '⚙ ایڈمن ایف اے کیو پینل',
    indexedTopics: 'موضوعات کی تعداد',
    searchPlaceholder: 'سوالات، رجسٹریشن نمبر، اسکالرشپ، جہیز سے پاک نکاح یا اسکیمیں تلاش کریں...',
    instantMatches: 'فوری نتائج',
    pressEscToClose: 'بند کرنے کے لیے ESC دبائیں',
    categoriesLabel: 'زمرہ جات',
    allQuestions: 'تمام سوالات',
    featuredOnly: 'اہم سوالات',
    expandAll: 'تمام کھولیں',
    collapseAll: 'تمام بند کریں',
    showingCount: (current, total) => `کل ${total} میں سے ${current} سوالات ظاہر کیے جا رہے ہیں`,
    clearSearch: 'تلاش صاف کریں',
    noResultsTitle: 'کوئی مطابقت رکھتا سوال نہیں ملا',
    noResultsSubtitle: 'مختلف الفاظ سے تلاش کریں یا اقرا اے آئی اسسٹنٹ سے فوری جواب حاصل کریں۔',
    askIqraBtn: 'اقرا اے آئی سے پوچھیں',
    updatedLabel: 'آخری اپ ڈیٹ',
    featuredBadge: 'خاص سوال',
    helpfulBtn: 'مفید ہے',
    alreadyVoted: 'آپ پہلے ہی اس جواب کو ووٹ دے چکے ہیں!',
    votedThanks: 'آپ کے تاثرات کا شکریہ! 👍',
    copyLinkBtn: 'لنک کاپی کریں',
    linkCopied: 'سوال کا براہ راست لنک کاپی ہو گیا۔',
    openPortalBtn: 'متعلقہ پورٹل کھولیں',
    askIqraFaq: 'اقرا اے آئی سے پوچھیں',
    adminModalTitle: 'ایڈمن ایف اے کیو مینجمنٹ پینل',
    addNewBtn: 'نیا سوال شامل کریں',
    exportJsonBtn: 'جے ایس او این ایکسپورٹ',
    resetDefaultsBtn: 'فیکٹری ری سیٹ',
    editModalTitle: 'سوال میں ترمیم کریں',
    createModalTitle: 'نیا کثیر لسانی سوال بنائیں',
    categorySelectLabel: 'زمرہ',
    tabLinkInputLabel: 'پورٹل ٹیب لنک (اختیاری)',
    englishSectionTitle: 'انگریزی ورژن (English)',
    hindiSectionTitle: 'ہندی ورژن (Hindi)',
    urduSectionTitle: 'اردو ورژن (Urdu)',
    keywordsLabel: 'تلاش کے الفاظ (کوما سے الگ کریں)',
    markFeaturedLabel: 'اہم سوال کے طور پر نشان زد کریں',
    cancelBtn: 'منسوخ کریں',
    saveBtn: 'سوال محفوظ کریں',
    faqUpdatedToast: 'سوال کامیابی سے اپ ڈیٹ ہو گیا!',
    faqCreatedToast: 'نیا سوال کامیابی سے شامل ہو گیا!',
    faqDeletedToast: 'سوال حذف کر دیا گیا۔',
    faqResetToast: 'سوالات کا ڈیٹا بیس ری سیٹ ہو گیا۔',
    iqraOpeningToast: 'اقرا اے آئی اسسٹنٹ کھولا جا رہا ہے...',
    confirmDelete: 'کیا آپ واقعی اس سوال کو حذف کرنا چاہتے ہیں؟',
    confirmReset: 'کیا آپ اصل فیکٹری سوالات پر ری سیٹ کرنا چاہتے ہیں؟'
  }
};

type FAQListener = (faqs: FAQItem[]) => void;

class FAQService {
  private faqs: FAQItem[] = [];
  private listeners: Set<FAQListener> = new Set();
  private storageKey = 'rcb_faq_dataset';

  constructor() {
    this.loadDataset();
  }

  // Load from LocalStorage or Initial Constant
  public loadDataset(): FAQItem[] {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.faqs = parsed;
            return this.faqs;
          }
        }
      }
    } catch (err) {
      console.warn('FAQService: Failed to read dataset from storage, using initial set:', err);
    }
    this.faqs = INITIAL_FAQS;
    return this.faqs;
  }

  public getAll(): FAQItem[] {
    if (this.faqs.length === 0) {
      this.loadDataset();
    }
    return this.faqs;
  }

  public saveAll(newFaqs: FAQItem[]) {
    this.faqs = newFaqs;
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.storageKey, JSON.stringify(newFaqs));
      }
    } catch (err) {
      console.error('FAQService: Error saving dataset:', err);
    }
    this.notifyListeners();
  }

  public resetDefaults() {
    this.saveAll(INITIAL_FAQS);
  }

  public subscribe(listener: FAQListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(fn => fn(this.faqs));
  }

  // Filter service query
  public getFiltered(
    language: Language,
    searchQuery: string = '',
    categoryId: string = 'all',
    featuredOnly: boolean = false
  ): FAQItem[] {
    let result = filterFAQs(this.getAll(), searchQuery, categoryId, language);
    if (featuredOnly) {
      result = result.filter(f => f.featured);
    }
    return result;
  }

  // Fetch UI Strings dynamically based on active language
  public getUIStrings(lang: Language): FAQInterfaceStrings {
    return UI_STRINGS[lang] || UI_STRINGS.en;
  }

  // Localized Categories
  public getCategories(lang: Language): { id: string; name: string; description: string; iconName: string; count: number }[] {
    const all = this.getAll();
    return FAQ_CATEGORIES.map(cat => {
      const name = lang === 'en' ? cat.nameEn : lang === 'ur' ? cat.nameUr : cat.nameHi;
      const description = lang === 'en' ? cat.descriptionEn : lang === 'ur' ? cat.descriptionUr : cat.descriptionHi;
      const count = all.filter(f => f.categoryId === cat.id).length;
      return {
        id: cat.id,
        name,
        description,
        iconName: cat.iconName,
        count
      };
    });
  }

  // Localized Item Question & Answer Getter
  public getLocalizedQA(item: FAQItem, lang: Language): { question: string; answer: string } {
    const question = lang === 'en' ? item.qEn : lang === 'ur' ? item.qUr : item.qHi;
    const answer = lang === 'en' ? item.aEn : lang === 'ur' ? item.aUr : item.aHi;
    return { question, answer };
  }

  // Generate JSON-LD Schema
  public getSchemaJson(items: FAQItem[], lang: Language): string {
    return generateFAQSchemaJson(items, lang);
  }
}

export const faqService = new FAQService();
