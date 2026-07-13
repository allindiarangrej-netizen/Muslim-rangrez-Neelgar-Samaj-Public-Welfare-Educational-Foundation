import React, { useState } from 'react';
import {
  Plus, Edit3, Trash2, Copy, Archive, Calendar, Play, Pause,
  CheckCircle, RotateCcw, Eye, BarChart3, FileText, Image, Video,
  UploadCloud, ListOrdered, CheckSquare, Radio, Star, Grid,
  MessageSquare, AlertCircle, Sparkles, Filter, Search, X, Check,
  Clock, Layers, HelpCircle, FileCheck, Shield, ShieldCheck, PlusCircle, ArrowUp, ArrowDown
} from 'lucide-react';
import { Language } from '../types';

export type QuestionType =
  | 'yes_no'
  | 'single_choice'
  | 'multiple_choice'
  | 'checkbox'
  | 'rating_scale'
  | 'ranking'
  | 'matrix'
  | 'text_suggestion'
  | 'file_upload'
  | 'image_based'
  | 'video_based'
  | 'pdf_attachment';

export interface SurveyQuestion {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  helperText?: string;
  // For multiple/single choice, checkbox, image_based, ranking
  options?: { id: string; label: string; imageUrl?: string }[];
  // For rating scale
  scaleMin?: number;
  scaleMax?: number;
  minLabel?: string;
  maxLabel?: string;
  // For matrix questions
  matrixRows?: string[];
  matrixCols?: string[];
  // For video or image questions
  mediaUrl?: string;
  // For PDF attachments
  pdfUrl?: string;
  pdfTitle?: string;
}

export const SURVEY_CATEGORIES = [
  'Society Reforms',
  'Marriage Reforms',
  'Education',
  'Employment',
  'Women’s Welfare',
  'Youth Development',
  'Scholarship',
  'Healthcare',
  'Poor Assistance',
  'Housing',
  'Skill Development',
  'Business',
  'Religious Education',
  'Madarsa Development',
  'Community Welfare',
  'Constitution Awareness',
  'Government Schemes',
  'Environment',
  'Blood Donation',
  'Disaster Relief',
  'Digital Literacy',
  'Committee Elections',
  'Mahapanchayat Agenda',
  'Emergency Resolutions'
];

export interface VotingRules {
  voteUnit: 'one_per_member' | 'one_per_family';
  minAge: number; // 0 for no limit, 18, 21, 25, etc.
  committeeScope: string;
  stateScope: string;
  districtScope: string;
  privacyMode: 'anonymous' | 'public' | 'secret_ballot';
  startDate?: string;
  endDate?: string;
}

export interface AdminSurvey {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'draft' | 'published' | 'paused' | 'scheduled' | 'closed' | 'archived';
  createdAt: string;
  scheduledStartDate?: string;
  scheduledEndDate?: string;
  responsesCount: number;
  targetAudience: string;
  questions: SurveyQuestion[];
  votingRules?: VotingRules;
  resultsVisibility?: 'show_live' | 'hide_until_close';
}

interface SurveyBuilderAdminProps {
  currentLanguage: Language;
  onClose?: () => void;
}

export const SurveyBuilderAdmin: React.FC<SurveyBuilderAdminProps> = ({
  currentLanguage,
  onClose
}) => {
  // Localization helper
  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'hi') return hi;
    if (currentLanguage === 'ur') return ur || en;
    return en;
  };

  // Initial Sample Surveys showing power of all question types
  const [surveys, setSurveys] = useState<AdminSurvey[]>([
    {
      id: 'srv-001',
      title: 'All India Rangrez Socio-Economic & Educational Census 2026',
      category: 'Education',
      description: 'Comprehensive nationwide assessment of educational qualifications, employment metrics, and family welfare needs.',
      status: 'published',
      createdAt: '2026-06-15',
      responsesCount: 1428,
      targetAudience: 'All Registered Families (National)',
      votingRules: {
        voteUnit: 'one_per_family',
        minAge: 18,
        committeeScope: 'All Committees (Universal)',
        stateScope: 'All States (Pan-India)',
        districtScope: 'All Districts',
        privacyMode: 'public',
        startDate: '2026-06-15',
        endDate: '2026-12-31'
      },
      resultsVisibility: 'show_live',
      questions: [
        {
          id: 'q-1',
          type: 'yes_no',
          title: 'Is every child in your household between ages 6-18 currently enrolled in formal schooling?',
          required: true,
          helperText: 'Select Yes if all school-age children attend recognized educational institutions.'
        },
        {
          id: 'q-2',
          type: 'single_choice',
          title: 'What is the highest academic qualification attained within your household?',
          required: true,
          options: [
            { id: 'opt-1', label: 'Post-Graduate / Doctorate' },
            { id: 'opt-2', label: 'Bachelor\'s Degree / Professional Diploma' },
            { id: 'opt-3', label: 'Higher Secondary (12th Pass)' },
            { id: 'opt-4', label: 'Matriculation / Below' }
          ]
        },
        {
          id: 'q-3',
          type: 'matrix',
          title: 'Please rate your household satisfaction across the following community support pillars:',
          required: true,
          matrixRows: ['Educational Scholarship Access', 'Matrimonial Platform Efficiency', 'Zakat & Medical Assistance', 'Legal Awareness Support'],
          matrixCols: ['Highly Satisfied', 'Satisfied', 'Neutral', 'Needs Improvement']
        },
        {
          id: 'q-4',
          type: 'pdf_attachment',
          title: 'Review the Draft Higher Education Subsidy Policy 2026 before submitting suggestions.',
          required: false,
          pdfTitle: 'All_India_Rangrez_Education_Policy_Draft_2026.pdf',
          pdfUrl: 'https://example.com/draft-policy-2026.pdf',
          helperText: 'Click above to read or download the 8-page policy framework.'
        },
        {
          id: 'q-5',
          type: 'text_suggestion',
          title: 'What new community welfare initiative should the National Executive Committee prioritize in 2026-2027?',
          required: false,
          helperText: 'Provide detailed recommendations or identify urgent district needs.'
        }
      ]
    },
    {
      id: 'srv-002',
      title: 'Youth Anti-Addiction & Sports Infrastructure Development Survey',
      category: 'Youth Development',
      description: 'Gathering feedback from youth aged 18-35 regarding gymnasium grants, sports tournaments, and counseling squads.',
      status: 'scheduled',
      createdAt: '2026-06-28',
      scheduledStartDate: '2026-07-10',
      scheduledEndDate: '2026-08-10',
      responsesCount: 0,
      targetAudience: 'Youth Members (18-35 Years)',
      votingRules: {
        voteUnit: 'one_per_member',
        minAge: 18,
        committeeScope: 'Youth Development Cell',
        stateScope: 'All States (Pan-India)',
        districtScope: 'All Districts',
        privacyMode: 'anonymous',
        startDate: '2026-07-10',
        endDate: '2026-08-10'
      },
      resultsVisibility: 'show_live',
      questions: [
        {
          id: 'q-101',
          type: 'video_based',
          title: 'Watch the President\'s 3-Minute Video Briefing on Youth Empowerment & Anti-Addiction Taskforces',
          required: true,
          mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          helperText: 'Please watch the full briefing before answering the ranking questions below.'
        },
        {
          id: 'q-102',
          type: 'ranking',
          title: 'Rank the following sports facilities in order of priority for your Tehsil/District:',
          required: true,
          options: [
            { id: 'rnk-1', label: 'Modern Indoor Gymnasium & Fitness Center' },
            { id: 'rnk-2', label: 'Cricket & Football Turf Pitch' },
            { id: 'rnk-3', label: 'Martial Arts & Self-Defense Academy for Girls' },
            { id: 'rnk-4', label: 'E-Sports & Indoor Chess/Carrom Arena' }
          ]
        },
        {
          id: 'q-103',
          type: 'image_based',
          title: 'Which proposed architectural design do you prefer for the Community Sports Centers?',
          required: true,
          options: [
            { id: 'img-1', label: 'Design A: Modern Glass & Steel Eco-Complex', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80' },
            { id: 'img-2', label: 'Design B: Traditional Brick & Courtyard Arena', imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=400&q=80' }
          ]
        }
      ]
    },
    {
      id: 'srv-003',
      title: 'Matrimonial Austerity & Dowry-Free Wedding Charter Feedback',
      category: 'Marriage Reforms',
      description: 'Community consensus survey on standardizing marriage timing, capping guest limits, and eliminating dowry demands.',
      status: 'paused',
      createdAt: '2026-05-20',
      responsesCount: 3840,
      targetAudience: 'All Committee Presidents & Elders',
      votingRules: {
        voteUnit: 'one_per_family',
        minAge: 25,
        committeeScope: 'District Level Committees',
        stateScope: 'All States (Pan-India)',
        districtScope: 'All Districts',
        privacyMode: 'secret_ballot',
        startDate: '2026-05-20',
        endDate: '2026-06-30'
      },
      resultsVisibility: 'hide_until_close',
      questions: [
        {
          id: 'q-201',
          type: 'checkbox',
          title: 'Which of the following marriage austerity guidelines should be strictly enforced by District Committees? (Select all that apply)',
          required: true,
          options: [
            { id: 'chk-1', label: 'Mandatory conclusion of Nikah ceremony before 10:00 PM' },
            { id: 'chk-2', label: 'Maximum guest limit capped at 300 persons' },
            { id: 'chk-3', label: 'Complete ban on DJ / loud fireworks processions' },
            { id: 'chk-4', label: 'No cash dowry or luxury vehicle demands permitted' }
          ]
        },
        {
          id: 'q-202',
          type: 'rating_scale',
          title: 'How effective have recent Mahapanchayat resolutions been in reducing wedding expenses in your locality?',
          required: true,
          scaleMin: 1,
          scaleMax: 10,
          minLabel: '1 = No Effect (Expenses still very high)',
          maxLabel: '10 = Highly Effective (Simple weddings adopted)'
        },
        {
          id: 'q-203',
          type: 'file_upload',
          title: 'Upload local newspaper clippings or committee resolution documents adopting simplicity pledges (Optional)',
          required: false,
          helperText: 'Accepted formats: PDF, JPG, PNG (Max 10MB)'
        }
      ]
    }
  ]);

  const [activeTab, setActiveTab] = useState<'list' | 'editor' | 'preview' | 'analytics'>('list');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentSurvey, setCurrentSurvey] = useState<AdminSurvey | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState<boolean>(false);
  const [scheduleData, setScheduleData] = useState<{ start: string; end: string }>({ start: '', end: '' });

  // Question builder local state
  const [selectedQType, setSelectedQType] = useState<QuestionType>('single_choice');
  const [newQuestionTitle, setNewQuestionTitle] = useState<string>('');
  const [newQuestionRequired, setNewQuestionRequired] = useState<boolean>(true);
  const [newQuestionHelper, setNewQuestionHelper] = useState<string>('');
  const [newOptions, setNewOptions] = useState<{ id: string; label: string; imageUrl?: string }[]>([
    { id: 'opt-1', label: 'Option 1' },
    { id: 'opt-2', label: 'Option 2' }
  ]);
  const [matrixRows, setMatrixRows] = useState<string>('Item 1\nItem 2\nItem 3');
  const [matrixCols, setMatrixCols] = useState<string>('Agree\nNeutral\nDisagree');
  const [mediaUrlInput, setMediaUrlInput] = useState<string>('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  const [pdfTitleInput, setPdfTitleInput] = useState<string>('Community_Guidelines_2026.pdf');
  const [pdfUrlInput, setPdfUrlInput] = useState<string>('https://example.com/document.pdf');
  const [scaleMinInput, setScaleMinInput] = useState<number>(1);
  const [scaleMaxInput, setScaleMaxInput] = useState<number>(5);
  const [minLabelInput, setMinLabelInput] = useState<string>('1 = Strongly Disagree');
  const [maxLabelInput, setMaxLabelInput] = useState<string>('5 = Strongly Agree');

  // Filtered surveys
  const filteredSurveys = surveys.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || s.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || s.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // --- ADMIN ACTIONS ---

  // 1. Create
  const handleCreateNewSurvey = () => {
    const newSurvey: AdminSurvey = {
      id: `srv-${Date.now()}`,
      title: 'New Community Survey & Assessment',
      category: 'Society Reforms',
      description: 'Enter a detailed description explaining the purpose and significance of this survey.',
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
      responsesCount: 0,
      targetAudience: 'All Community Members',
      votingRules: {
        voteUnit: 'one_per_family',
        minAge: 18,
        committeeScope: 'All Committees (Universal)',
        stateScope: 'All States (Pan-India)',
        districtScope: 'All Districts',
        privacyMode: 'public',
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0]
      },
      resultsVisibility: 'show_live',
      questions: [
        {
          id: `q-${Date.now()}`,
          type: 'yes_no',
          title: 'Do you agree with the proposed community development guidelines?',
          required: true
        }
      ]
    };
    setSurveys([newSurvey, ...surveys]);
    setCurrentSurvey(newSurvey);
    setActiveTab('editor');
  };

  // 2. Edit
  const handleEditSurvey = (survey: AdminSurvey) => {
    setCurrentSurvey({ ...survey });
    setActiveTab('editor');
  };

  // Save changes from editor back to main list
  const handleSaveSurvey = () => {
    if (!currentSurvey) return;
    setSurveys(surveys.map(s => s.id === currentSurvey.id ? currentSurvey : s));
    alert(getText('Survey saved successfully!', 'सर्वे सफलतापूर्वक सुरक्षित किया गया!', 'سروے کامیابی سے محفوظ ہو گیا!'));
  };

  // 3. Archive
  const handleArchiveSurvey = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSurveys(surveys.map(s => s.id === id ? { ...s, status: 'archived' } : s));
  };

  // 4. Duplicate
  const handleDuplicateSurvey = (survey: AdminSurvey, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const cloned: AdminSurvey = {
      ...survey,
      id: `srv-${Date.now()}`,
      title: `${survey.title} (Copy)`,
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
      responsesCount: 0,
      questions: survey.questions.map(q => ({ ...q, id: `q-${Math.random().toString(36).substr(2, 9)}` }))
    };
    setSurveys([cloned, ...surveys]);
    alert(getText(`Duplicated "${survey.title}" as draft.`, `"${survey.title}" की प्रतिलिपि बनाई गई।`, `"${survey.title}" کی نقل تیار کر لی گئی۔`));
  };

  // 5. Schedule
  const openScheduleModal = (survey: AdminSurvey, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSurvey(survey);
    setScheduleData({
      start: survey.scheduledStartDate || new Date().toISOString().split('T')[0],
      end: survey.scheduledEndDate || ''
    });
    setShowScheduleModal(true);
  };

  const confirmSchedule = () => {
    if (!currentSurvey || !scheduleData.start) return;
    setSurveys(surveys.map(s => s.id === currentSurvey.id ? {
      ...s,
      status: 'scheduled',
      scheduledStartDate: scheduleData.start,
      scheduledEndDate: scheduleData.end
    } : s));
    setShowScheduleModal(false);
    alert(getText('Survey scheduled successfully!', 'सर्वे सफलतापूर्वक शेड्यूल किया गया!', 'سروے کامیابی سے شیڈول ہو گیا!'));
  };

  // 6. Publish
  const handlePublishSurvey = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSurveys(surveys.map(s => s.id === id ? { ...s, status: 'published' } : s));
  };

  // 7. Pause
  const handlePauseSurvey = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSurveys(surveys.map(s => s.id === id ? { ...s, status: 'paused' } : s));
  };

  // 8. Close
  const handleCloseSurvey = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSurveys(surveys.map(s => s.id === id ? { ...s, status: 'closed' } : s));
  };

  // 9. Reopen
  const handleReopenSurvey = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSurveys(surveys.map(s => s.id === id ? { ...s, status: 'published' } : s));
  };

  // 10. Delete
  const handleDeleteSurvey = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (window.confirm(getText('Are you sure you want to permanently delete this survey?', 'क्या आप वाकई इस सर्वे को हमेशा के लिए हटाना चाहते हैं?', 'کیا آپ واقعی اس سروے کو ہمیشہ کے لیے حذف کرنا چاہتے ہیں؟'))) {
      setSurveys(surveys.filter(s => s.id !== id));
      if (currentSurvey?.id === id) {
        setCurrentSurvey(null);
        setActiveTab('list');
      }
    }
  };

  // --- QUESTION BUILDER HELPERS ---
  const handleAddQuestion = () => {
    if (!currentSurvey || !newQuestionTitle.trim()) {
      alert(getText('Please enter a question title.', 'कृपया प्रश्न शीर्षक दर्ज करें।', 'براہ کرم سوال کا عنوان درج کریں۔'));
      return;
    }

    const newQ: SurveyQuestion = {
      id: `q-${Date.now()}`,
      type: selectedQType,
      title: newQuestionTitle,
      required: newQuestionRequired,
      helperText: newQuestionHelper || undefined
    };

    if (['single_choice', 'multiple_choice', 'checkbox', 'ranking', 'image_based'].includes(selectedQType)) {
      newQ.options = newOptions.filter(o => o.label.trim() !== '');
    } else if (selectedQType === 'rating_scale') {
      newQ.scaleMin = scaleMinInput;
      newQ.scaleMax = scaleMaxInput;
      newQ.minLabel = minLabelInput;
      newQ.maxLabel = maxLabelInput;
    } else if (selectedQType === 'matrix') {
      newQ.matrixRows = (matrixRows || '').split('\n').filter(r => r.trim() !== '');
      newQ.matrixCols = (matrixCols || '').split('\n').filter(c => c.trim() !== '');
    } else if (['video_based', 'image_based'].includes(selectedQType) && mediaUrlInput) {
      newQ.mediaUrl = mediaUrlInput;
    } else if (selectedQType === 'pdf_attachment') {
      newQ.pdfTitle = pdfTitleInput;
      newQ.pdfUrl = pdfUrlInput;
    }

    const updated = {
      ...currentSurvey,
      questions: [...currentSurvey.questions, newQ]
    };
    setCurrentSurvey(updated);
    setSurveys(surveys.map(s => s.id === updated.id ? updated : s));

    // Reset form
    setNewQuestionTitle('');
    setNewQuestionHelper('');
    setNewOptions([{ id: 'opt-1', label: 'Option 1' }, { id: 'opt-2', label: 'Option 2' }]);
  };

  const handleDeleteQuestion = (qid: string) => {
    if (!currentSurvey) return;
    const updated = {
      ...currentSurvey,
      questions: currentSurvey.questions.filter(q => q.id !== qid)
    };
    setCurrentSurvey(updated);
    setSurveys(surveys.map(s => s.id === updated.id ? updated : s));
  };

  const handleMoveQuestion = (index: number, direction: 'up' | 'down') => {
    if (!currentSurvey) return;
    const qs = [...currentSurvey.questions];
    if (direction === 'up' && index > 0) {
      const temp = qs[index];
      qs[index] = qs[index - 1];
      qs[index - 1] = temp;
    } else if (direction === 'down' && index < qs.length - 1) {
      const temp = qs[index];
      qs[index] = qs[index + 1];
      qs[index + 1] = temp;
    }
    const updated = { ...currentSurvey, questions: qs };
    setCurrentSurvey(updated);
    setSurveys(surveys.map(s => s.id === updated.id ? updated : s));
  };

  const getStatusBadge = (status: AdminSurvey['status']) => {
    switch (status) {
      case 'published':
        return <span className="bg-emerald-900 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5"><Play className="h-3 w-3 fill-emerald-300" /> Published / Live</span>;
      case 'paused':
        return <span className="bg-yellow-900/80 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500/30 flex items-center gap-1.5"><Pause className="h-3 w-3 fill-yellow-300" /> Paused</span>;
      case 'scheduled':
        return <span className="bg-blue-900/80 text-blue-300 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/30 flex items-center gap-1.5"><Calendar className="h-3 w-3" /> Scheduled</span>;
      case 'closed':
        return <span className="bg-purple-900/80 text-purple-300 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/30 flex items-center gap-1.5"><CheckCircle className="h-3 w-3" /> Closed</span>;
      case 'archived':
        return <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs font-bold border border-gray-600/30 flex items-center gap-1.5"><Archive className="h-3 w-3" /> Archived</span>;
      default:
        return <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5"><Clock className="h-3 w-3" /> Draft</span>;
    }
  };

  const getQuestionTypeBadge = (type: QuestionType) => {
    const map: Record<QuestionType, { label: string; icon: React.ReactNode; color: string }> = {
      yes_no: { label: 'Yes / No', icon: <Radio className="h-3.5 w-3.5" />, color: 'bg-indigo-900/80 text-indigo-300 border-indigo-500/30' },
      single_choice: { label: 'Single Choice', icon: <Radio className="h-3.5 w-3.5" />, color: 'bg-blue-900/80 text-blue-300 border-blue-500/30' },
      multiple_choice: { label: 'Multiple Choice', icon: <CheckSquare className="h-3.5 w-3.5" />, color: 'bg-emerald-900/80 text-emerald-300 border-emerald-500/30' },
      checkbox: { label: 'Checkbox', icon: <CheckSquare className="h-3.5 w-3.5" />, color: 'bg-teal-900/80 text-teal-300 border-teal-500/30' },
      rating_scale: { label: 'Rating Scale', icon: <Star className="h-3.5 w-3.5" />, color: 'bg-yellow-900/80 text-yellow-300 border-yellow-500/30' },
      ranking: { label: 'Ranking', icon: <ListOrdered className="h-3.5 w-3.5" />, color: 'bg-orange-900/80 text-orange-300 border-orange-500/30' },
      matrix: { label: 'Matrix Table', icon: <Grid className="h-3.5 w-3.5" />, color: 'bg-purple-900/80 text-purple-300 border-purple-500/30' },
      text_suggestion: { label: 'Text Suggestion', icon: <MessageSquare className="h-3.5 w-3.5" />, color: 'bg-pink-900/80 text-pink-300 border-pink-500/30' },
      file_upload: { label: 'File Upload', icon: <UploadCloud className="h-3.5 w-3.5" />, color: 'bg-cyan-900/80 text-cyan-300 border-cyan-500/30' },
      image_based: { label: 'Image-Based', icon: <Image className="h-3.5 w-3.5" />, color: 'bg-rose-900/80 text-rose-300 border-rose-500/30' },
      video_based: { label: 'Video Question', icon: <Video className="h-3.5 w-3.5" />, color: 'bg-red-900/80 text-red-300 border-red-500/30' },
      pdf_attachment: { label: 'PDF Attachment', icon: <FileText className="h-3.5 w-3.5" />, color: 'bg-amber-900/80 text-amber-300 border-amber-500/30' }
    };
    const item = map[type];
    return (
      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border flex items-center gap-1.5 shrink-0 ${item.color}`}>
        {item.icon}
        <span>{item.label}</span>
      </span>
    );
  };

  return (
    <div className="bg-[#07351B] text-white min-h-screen p-4 sm:p-6 lg:p-8 space-y-6 animate-fadeIn">
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-black/40 p-6 rounded-3xl border-2 border-[#F4C430]/50 shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#F4C430] to-yellow-600 rounded-2xl flex items-center justify-center text-[#0B132B] shadow-lg shrink-0">
            <Layers className="h-8 w-8" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold bg-yellow-500/20 text-[#F4C430] px-2.5 py-0.5 rounded border border-[#F4C430]/40 uppercase tracking-wider">
                ⚙️ {getText('ADMINISTRATOR CONTROL PANEL', 'एडमिनिस्ट्रेटर नियंत्रण कक्ष', 'ایڈمنسٹریٹر کنٹرول پینل')}
              </span>
              <span className="text-xs bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">Unlimited Mode</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-white mt-1">
              {getText('Survey Builder & Management Suite', 'सर्वे निर्माता व प्रबंधन सुइट', 'سروے بلڈر اور مینجمنٹ سویٹ')}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300">
              {getText(
                'Create unlimited community surveys with 12 rich question types, scheduling, archiving, and live analytics.',
                '12 प्रकार के प्रश्नों, शेड्यूलिंग, आर्काइव और लाइव एनालिटिक्स के साथ असीमित सामुदायिक सर्वे बनाएं।',
                '12 قسم کے سوالات، شیڈولنگ اور لائیو تجزیات کے ساتھ لامحدود برادری سروے بنائیں۔'
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          {activeTab !== 'list' && (
            <button
              onClick={() => setActiveTab('list')}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/10 transition flex items-center gap-2 w-full md:w-auto justify-center"
            >
              <RotateCcw className="h-4 w-4" />
              <span>{getText('Back to All Surveys', 'सभी सर्वे सूची', 'تمام سروے')}</span>
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-red-900/60 hover:bg-red-900 text-red-200 rounded-xl text-xs font-bold border border-red-500/40 transition flex items-center gap-2 shrink-0"
            >
              <X className="h-4 w-4" />
              <span>{getText('Exit Admin Panel', 'पैनल बंद करें', 'پینل بند کریں')}</span>
            </button>
          )}
        </div>
      </div>

      {/* SUB NAVIGATION WHEN EDITING A SURVEY */}
      {currentSurvey && activeTab !== 'list' && (
        <div className="bg-black/30 p-3 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-400 font-mono font-bold">Active Survey:</span>
            <span className="text-sm font-bold text-[#F4C430]">{currentSurvey.title}</span>
            {getStatusBadge(currentSurvey.status)}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition ${
                activeTab === 'editor' ? 'bg-[#F4C430] text-[#0B132B] shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Edit3 className="h-3.5 w-3.5" />
              <span>✏️ {getText('Edit Questions', 'प्रश्न संपादित करें', 'سوالات میں ترمیم')}</span>
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition ${
                activeTab === 'preview' ? 'bg-[#F4C430] text-[#0B132B] shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>👁️ {getText('Live Preview', 'लाइव पूर्वावलोकन', 'لائیو پیش نظارہ')}</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition ${
                activeTab === 'analytics' ? 'bg-[#F4C430] text-[#0B132B] shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5" />
              <span>📊 {getText('Responses & Analytics', 'प्रतिक्रियाएं व विश्लेषण', 'جوابات اور تجزیات')} ({currentSurvey.responsesCount})</span>
            </button>
            <button
              onClick={handleSaveSurvey}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-lg ml-2"
            >
              <Check className="h-3.5 w-3.5" />
              <span>{getText('Save Changes', 'सुरक्षित करें', 'محفوظ کریں')}</span>
            </button>
          </div>
        </div>
      )}

      {/* VIEW 1: SURVEYS LIST & MANAGEMENT */}
      {activeTab === 'list' && (
        <div className="space-y-6">
          {/* STATS SUMMARY CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs uppercase text-gray-400 font-bold block">Total Surveys</span>
              <div className="text-3xl font-serif font-extrabold text-[#F4C430]">{surveys.length}</div>
              <span className="text-[10px] text-emerald-400 font-mono">Unlimited Capacity Active</span>
            </div>
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs uppercase text-gray-400 font-bold block">Published / Live</span>
              <div className="text-3xl font-serif font-extrabold text-emerald-400">{surveys.filter(s => s.status === 'published').length}</div>
              <span className="text-[10px] text-gray-400 font-mono">Accepting Responses</span>
            </div>
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs uppercase text-gray-400 font-bold block">Total Responses</span>
              <div className="text-3xl font-serif font-extrabold text-yellow-300">
                {surveys.reduce((acc, curr) => acc + curr.responsesCount, 0).toLocaleString()}
              </div>
              <span className="text-[10px] text-gray-400 font-mono">Across All Districts</span>
            </div>
            <div className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs uppercase text-gray-400 font-bold block">Scheduled / Archived</span>
              <div className="text-3xl font-serif font-extrabold text-blue-300">
                {surveys.filter(s => s.status === 'scheduled' || s.status === 'archived').length}
              </div>
              <span className="text-[10px] text-gray-400 font-mono">Automated Lifecycle</span>
            </div>
          </div>

          {/* TOOLBAR & SEARCH */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/30 p-4 rounded-2xl border border-white/10">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder={getText('Search surveys by title or category...', 'शीर्षक या श्रेणी से खोजें...', 'عنوان یا زمرہ سے تلاش کریں...')}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-black/50 border border-white/20 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#F4C430]"
                />
              </div>
              <select
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430]"
              >
                <option value="all">All Statuses ({surveys.length})</option>
                <option value="published">Published ({surveys.filter(s => s.status === 'published').length})</option>
                <option value="paused">Paused ({surveys.filter(s => s.status === 'paused').length})</option>
                <option value="scheduled">Scheduled ({surveys.filter(s => s.status === 'scheduled').length})</option>
                <option value="draft">Draft ({surveys.filter(s => s.status === 'draft').length})</option>
                <option value="closed">Closed ({surveys.filter(s => s.status === 'closed').length})</option>
                <option value="archived">Archived ({surveys.filter(s => s.status === 'archived').length})</option>
              </select>
              <select
                value={filterCategory}
                onChange={e => setFilterCategory(e.target.value)}
                className="px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430] max-w-[160px] truncate"
              >
                <option value="all">All Categories</option>
                {SURVEY_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleCreateNewSurvey}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#F4C430] to-yellow-500 hover:from-yellow-400 hover:to-yellow-500 text-[#0B132B] font-extrabold text-sm rounded-xl shadow-xl transition flex items-center justify-center space-x-2 shrink-0 scale-105 hover:scale-110"
            >
              <PlusCircle className="h-5 w-5" />
              <span>{getText('+ Create New Unlimited Survey', '+ नया सर्वे बनाएं (असीमित)', '+ نیا سروے بنائیں')}</span>
            </button>
          </div>

          {/* SURVEYS TABLE / CARD GRID */}
          <div className="space-y-4">
            {filteredSurveys.length === 0 ? (
              <div className="text-center py-12 bg-black/30 rounded-3xl border border-white/10 space-y-3">
                <FileCheck className="h-12 w-12 text-gray-500 mx-auto" />
                <p className="text-sm text-gray-400">{getText('No surveys found matching your search or filter.', 'कोई सर्वे नहीं मिला।', 'کوئی سروے نہیں ملا۔')}</p>
                <button
                  onClick={handleCreateNewSurvey}
                  className="px-5 py-2.5 bg-[#F4C430] text-[#0B132B] font-bold rounded-xl text-xs inline-flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Create First Survey</span>
                </button>
              </div>
            ) : (
              filteredSurveys.map(survey => (
                <div
                  key={survey.id}
                  onClick={() => handleEditSurvey(survey)}
                  className="bg-black/30 hover:bg-black/40 border-2 border-white/10 hover:border-[#F4C430]/60 rounded-3xl p-5 sm:p-6 transition duration-300 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 cursor-pointer group"
                >
                  <div className="space-y-2 flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      {getStatusBadge(survey.status)}
                      <span className="text-xs font-mono text-[#F4C430] bg-yellow-500/10 px-2.5 py-0.5 rounded border border-[#F4C430]/30">
                        📁 {survey.category}
                      </span>
                      <span className="text-xs font-mono text-gray-400 bg-black/40 px-2.5 py-0.5 rounded">
                        ID: {survey.id}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-extrabold text-white group-hover:text-[#F4C430] transition">
                      {survey.title}
                    </h3>

                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                      {survey.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-400 pt-1 font-mono">
                      <span>🎯 Target: <strong className="text-white">{survey.targetAudience}</strong></span>
                      <span>❓ Questions: <strong className="text-[#F4C430]">{survey.questions.length}</strong></span>
                      <span>📝 Responses: <strong className="text-emerald-300">{survey.responsesCount.toLocaleString()}</strong></span>
                      <span>📅 Created: {survey.createdAt}</span>
                      {survey.scheduledStartDate && (
                        <span className="text-blue-300">⏰ Scheduled: {survey.scheduledStartDate} to {survey.scheduledEndDate || 'Open'}</span>
                      )}
                    </div>
                  </div>

                  {/* ACTION BUTTONS (Create, Edit, Archive, Duplicate, Schedule, Publish, Pause, Close, Reopen, Delete) */}
                  <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10 shrink-0" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => handleEditSurvey(survey)}
                      title="Edit Questions & Settings"
                      className="p-2.5 bg-white/10 hover:bg-[#F4C430] hover:text-[#0B132B] text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span className="hidden sm:inline">Edit</span>
                    </button>

                    <button
                      onClick={e => handleDuplicateSurvey(survey, e)}
                      title="Duplicate Survey"
                      className="p-2.5 bg-white/10 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="hidden sm:inline">Duplicate</span>
                    </button>

                    <button
                      onClick={e => openScheduleModal(survey, e)}
                      title="Schedule Release"
                      className="p-2.5 bg-white/10 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Calendar className="h-4 w-4" />
                      <span className="hidden sm:inline">Schedule</span>
                    </button>

                    {survey.status === 'published' ? (
                      <button
                        onClick={e => handlePauseSurvey(survey.id, e)}
                        title="Pause Survey"
                        className="p-2.5 bg-yellow-600/80 hover:bg-yellow-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                      >
                        <Pause className="h-4 w-4 fill-white" />
                        <span className="hidden sm:inline">Pause</span>
                      </button>
                    ) : survey.status === 'paused' ? (
                      <button
                        onClick={e => handleReopenSurvey(survey.id, e)}
                        title="Reopen / Resume Survey"
                        className="p-2.5 bg-emerald-600/80 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                      >
                        <Play className="h-4 w-4 fill-white" />
                        <span className="hidden sm:inline">Reopen</span>
                      </button>
                    ) : (
                      <button
                        onClick={e => handlePublishSurvey(survey.id, e)}
                        title="Publish Survey Now"
                        className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                      >
                        <Play className="h-4 w-4 fill-white" />
                        <span className="hidden sm:inline">Publish</span>
                      </button>
                    )}

                    {survey.status !== 'closed' ? (
                      <button
                        onClick={e => handleCloseSurvey(survey.id, e)}
                        title="Close Survey"
                        className="p-2.5 bg-purple-900/80 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span className="hidden sm:inline">Close</span>
                      </button>
                    ) : (
                      <button
                        onClick={e => handleReopenSurvey(survey.id, e)}
                        title="Reopen Survey"
                        className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                      >
                        <RotateCcw className="h-4 w-4" />
                        <span className="hidden sm:inline">Reopen</span>
                      </button>
                    )}

                    {survey.status !== 'archived' && (
                      <button
                        onClick={e => handleArchiveSurvey(survey.id, e)}
                        title="Archive Survey"
                        className="p-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                      >
                        <Archive className="h-4 w-4" />
                        <span className="hidden sm:inline">Archive</span>
                      </button>
                    )}

                    <button
                      onClick={e => handleDeleteSurvey(survey.id, e)}
                      title="Permanently Delete"
                      className="p-2.5 bg-red-900/80 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: QUESTION EDITOR (SUPPORTING ALL 12 QUESTION TYPES) */}
      {activeTab === 'editor' && currentSurvey && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT/MAIN: QUESTION BUILDER FORM */}
          <div className="lg:col-span-2 space-y-6">
            {/* Survey Metadata Editor */}
            <div className="bg-black/30 p-6 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-base font-serif font-extrabold text-[#F4C430] flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>1. {getText('Survey Settings & Metadata', 'सर्वे सेटिंग्स व जानकारी', 'سروے کی معلومات اور ترتیبات')}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Survey Title *</label>
                  <input
                    type="text"
                    value={currentSurvey.title}
                    onChange={e => {
                      const upd = { ...currentSurvey, title: e.target.value };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-xl text-xs text-white font-bold focus:outline-none focus:border-[#F4C430]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Category *</label>
                  <select
                    value={currentSurvey.category}
                    onChange={e => {
                      const upd = { ...currentSurvey, category: e.target.value };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430]"
                  >
                    {SURVEY_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    {!SURVEY_CATEGORIES.includes(currentSurvey.category) && (
                      <option value={currentSurvey.category}>{currentSurvey.category}</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300 block">Description & Instructions *</label>
                <textarea
                  rows={2}
                  value={currentSurvey.description}
                  onChange={e => {
                    const upd = { ...currentSurvey, description: e.target.value };
                    setCurrentSurvey(upd);
                    setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                  }}
                  className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-[#F4C430]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Target Audience / Eligibility</label>
                  <input
                    type="text"
                    value={currentSurvey.targetAudience}
                    onChange={e => {
                      const upd = { ...currentSurvey, targetAudience: e.target.value };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-[#F4C430]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Status</label>
                  <select
                    value={currentSurvey.status}
                    onChange={e => {
                      const upd = { ...currentSurvey, status: e.target.value as any };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white font-bold focus:outline-none"
                  >
                    <option value="draft">Draft (Drafting Mode)</option>
                    <option value="published">Published / Live</option>
                    <option value="paused">Paused</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="closed">Closed</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. VOTING RULES & ELIGIBILITY CONFIGURATION */}
            <div className="bg-black/30 p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-serif font-extrabold text-[#F4C430] flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#F4C430]" />
                  <span>2. {getText('Voting Rules & Eligibility Configuration', 'वोटिंग नियम व पात्रता', 'ووٹنگ کے قواعد اور اہلیت')}</span>
                </h3>
                <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                  Strict Governance Rules
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Vote Unit */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Voting Limit Unit *</label>
                  <select
                    value={currentSurvey.votingRules?.voteUnit || 'one_per_member'}
                    onChange={e => {
                      const rules = currentSurvey.votingRules || { voteUnit: 'one_per_member', minAge: 18, committeeScope: 'All Committees (Universal)', stateScope: 'All States (Pan-India)', districtScope: 'All Districts', privacyMode: 'public' };
                      const upd = { ...currentSurvey, votingRules: { ...rules, voteUnit: e.target.value as any } };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430]"
                  >
                    <option value="one_per_member">One vote per member</option>
                    <option value="one_per_family">One vote per family</option>
                  </select>
                </div>

                {/* Min Age */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Minimum Age Requirement *</label>
                  <select
                    value={currentSurvey.votingRules?.minAge || 18}
                    onChange={e => {
                      const rules = currentSurvey.votingRules || { voteUnit: 'one_per_member', minAge: 18, committeeScope: 'All Committees (Universal)', stateScope: 'All States (Pan-India)', districtScope: 'All Districts', privacyMode: 'public' };
                      const upd = { ...currentSurvey, votingRules: { ...rules, minAge: Number(e.target.value) } };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430]"
                  >
                    <option value={0}>No Age Restriction (All Registered)</option>
                    <option value={18}>18+ Years (Adult Members)</option>
                    <option value={21}>21+ Years (Senior Members)</option>
                    <option value={25}>25+ Years (Family Heads / Elders)</option>
                    <option value={30}>30+ Years (Committee Representatives)</option>
                  </select>
                </div>

                {/* Privacy Mode */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Ballot Privacy Mode *</label>
                  <select
                    value={currentSurvey.votingRules?.privacyMode || 'public'}
                    onChange={e => {
                      const rules = currentSurvey.votingRules || { voteUnit: 'one_per_member', minAge: 18, committeeScope: 'All Committees (Universal)', stateScope: 'All States (Pan-India)', districtScope: 'All Districts', privacyMode: 'public' };
                      const upd = { ...currentSurvey, votingRules: { ...rules, privacyMode: e.target.value as any } };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430]"
                  >
                    <option value="public">Public voting (Name & Family ID recorded)</option>
                    <option value="anonymous">Anonymous voting (Identity protected)</option>
                    <option value="secret_ballot">Secret ballot (Encrypted & verifiably secret)</option>
                  </select>
                </div>

                {/* Committee Scope */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Committee-Specific Scope</label>
                  <select
                    value={currentSurvey.votingRules?.committeeScope || 'All Committees (Universal)'}
                    onChange={e => {
                      const rules = currentSurvey.votingRules || { voteUnit: 'one_per_member', minAge: 18, committeeScope: 'All Committees (Universal)', stateScope: 'All States (Pan-India)', districtScope: 'All Districts', privacyMode: 'public' };
                      const upd = { ...currentSurvey, votingRules: { ...rules, committeeScope: e.target.value } };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430]"
                  >
                    <option value="All Committees (Universal)">All Committees (Universal)</option>
                    <option value="National Executive Committee">National Executive Committee Only</option>
                    <option value="State Level Committees">State Level Committees</option>
                    <option value="District Level Committees">District Level Committees</option>
                    <option value="Tehsil/Ward Level Committees">Tehsil/Ward Level Committees</option>
                    <option value="Youth Development Cell">Youth Development Cell</option>
                    <option value="Women Welfare Wing">Women Welfare Wing</option>
                  </select>
                </div>

                {/* State Scope */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">State-Specific Scope</label>
                  <select
                    value={currentSurvey.votingRules?.stateScope || 'All States (Pan-India)'}
                    onChange={e => {
                      const rules = currentSurvey.votingRules || { voteUnit: 'one_per_member', minAge: 18, committeeScope: 'All Committees (Universal)', stateScope: 'All States (Pan-India)', districtScope: 'All Districts', privacyMode: 'public' };
                      const upd = { ...currentSurvey, votingRules: { ...rules, stateScope: e.target.value } };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430]"
                  >
                    <option value="All States (Pan-India)">All States (Pan-India)</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                  </select>
                </div>

                {/* District Scope */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">District-Specific Scope</label>
                  <select
                    value={currentSurvey.votingRules?.districtScope || 'All Districts'}
                    onChange={e => {
                      const rules = currentSurvey.votingRules || { voteUnit: 'one_per_member', minAge: 18, committeeScope: 'All Committees (Universal)', stateScope: 'All States (Pan-India)', districtScope: 'All Districts', privacyMode: 'public' };
                      const upd = { ...currentSurvey, votingRules: { ...rules, districtScope: e.target.value } };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#F4C430]"
                  >
                    <option value="All Districts">All Districts</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Indore">Indore</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Meerut">Meerut</option>
                    <option value="Kanpur">Kanpur</option>
                    <option value="Patna">Patna</option>
                    <option value="Ajmer">Ajmer</option>
                    <option value="Kota">Kota</option>
                  </select>
                </div>

                {/* Start Date */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Voting Start Date</label>
                  <input
                    type="date"
                    value={currentSurvey.votingRules?.startDate || currentSurvey.createdAt}
                    onChange={e => {
                      const rules = currentSurvey.votingRules || { voteUnit: 'one_per_member', minAge: 18, committeeScope: 'All Committees (Universal)', stateScope: 'All States (Pan-India)', districtScope: 'All Districts', privacyMode: 'public' };
                      const upd = { ...currentSurvey, votingRules: { ...rules, startDate: e.target.value } };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-[#F4C430]"
                  >
                  </input>
                </div>

                {/* End Date */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Voting End Date</label>
                  <input
                    type="date"
                    value={currentSurvey.votingRules?.endDate || ''}
                    onChange={e => {
                      const rules = currentSurvey.votingRules || { voteUnit: 'one_per_member', minAge: 18, committeeScope: 'All Committees (Universal)', stateScope: 'All States (Pan-India)', districtScope: 'All Districts', privacyMode: 'public' };
                      const upd = { ...currentSurvey, votingRules: { ...rules, endDate: e.target.value } };
                      setCurrentSurvey(upd);
                      setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                    }}
                    className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-[#F4C430]"
                  >
                  </input>
                </div>
              </div>
            </div>

            {/* 3. LIVE RESULTS DISPLAY RULES */}
            <div className="bg-black/30 p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-serif font-extrabold text-[#F4C430] flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-[#F4C430]" />
                  <span>3. {getText('Live Results Display Rules', 'लाइव परिणाम प्रदर्शन नियम', 'لائیو نتائج کے اصول')}</span>
                </h3>
                <span className="text-[11px] font-mono bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded border border-yellow-500/20">
                  Transparency Mode
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  onClick={() => {
                    const upd = { ...currentSurvey, resultsVisibility: 'show_live' as const };
                    setCurrentSurvey(upd);
                    setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                  }}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-start gap-3 ${
                    (currentSurvey.resultsVisibility || 'show_live') === 'show_live'
                      ? 'bg-[#F4C430]/10 border-[#F4C430]'
                      : 'bg-black/40 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                    (currentSurvey.resultsVisibility || 'show_live') === 'show_live' ? 'border-[#F4C430] bg-[#F4C430] text-[#0B132B]' : 'border-gray-500'
                  }`}>
                    {(currentSurvey.resultsVisibility || 'show_live') === 'show_live' && <span className="text-[10px] font-extrabold">✓</span>}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Option 1: Show Live Results</h4>
                    <p className="text-xs text-gray-300 mt-1">
                      Display real-time tally (<strong className="text-[#F4C430]">Yes %</strong>, <strong className="text-[#F4C430]">No %</strong>, <strong className="text-[#F4C430]">Neutral %</strong>, <strong className="text-[#F4C430]">Turnout %</strong>, and interactive <strong className="text-[#F4C430]">Graphs</strong>) directly to voters as ballots are submitted.
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => {
                    const upd = { ...currentSurvey, resultsVisibility: 'hide_until_close' as const };
                    setCurrentSurvey(upd);
                    setSurveys(surveys.map(s => s.id === upd.id ? upd : s));
                  }}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-start gap-3 ${
                    currentSurvey.resultsVisibility === 'hide_until_close'
                      ? 'bg-[#F4C430]/10 border-[#F4C430]'
                      : 'bg-black/40 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                    currentSurvey.resultsVisibility === 'hide_until_close' ? 'border-[#F4C430] bg-[#F4C430] text-[#0B132B]' : 'border-gray-500'
                  }`}>
                    {currentSurvey.resultsVisibility === 'hide_until_close' && <span className="text-[10px] font-extrabold">✓</span>}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Option 2: Hide Results until Survey Closes</h4>
                    <p className="text-xs text-gray-300 mt-1">
                      Keep voting tallies confidential while the poll is active. Only reveal final percentages and graphs after the survey status is marked <strong className="text-red-400">Closed</strong> or <strong className="text-red-400">End Date</strong> passes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ADD NEW QUESTION BOX */}
            <div className="bg-black/30 p-6 rounded-3xl border-2 border-[#F4C430]/60 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-serif font-extrabold text-[#F4C430] flex items-center gap-2">
                  <PlusCircle className="h-5 w-5" />
                  <span>4. {getText('Add New Question (12 Supported Types)', 'नया प्रश्न जोड़ें (12 समर्थित प्रकार)', 'نیا سوال شامل کریں')}</span>
                </h3>
                <span className="text-xs font-mono bg-yellow-500/10 text-[#F4C430] px-2.5 py-0.5 rounded">
                  Unlimited Questions Allowed
                </span>
              </div>

              {/* Step 1: Select Question Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 block">Select Question Type *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {[
                    { id: 'yes_no', label: '1. Yes / No', icon: <Radio className="h-3.5 w-3.5" /> },
                    { id: 'multiple_choice', label: '2. Multiple Choice', icon: <CheckSquare className="h-3.5 w-3.5" /> },
                    { id: 'single_choice', label: '3. Single Choice', icon: <Radio className="h-3.5 w-3.5" /> },
                    { id: 'checkbox', label: '4. Checkbox', icon: <CheckSquare className="h-3.5 w-3.5" /> },
                    { id: 'rating_scale', label: '5. Rating Scale', icon: <Star className="h-3.5 w-3.5" /> },
                    { id: 'ranking', label: '6. Ranking Order', icon: <ListOrdered className="h-3.5 w-3.5" /> },
                    { id: 'matrix', label: '7. Matrix Table', icon: <Grid className="h-3.5 w-3.5" /> },
                    { id: 'text_suggestion', label: '8. Text Suggestion', icon: <MessageSquare className="h-3.5 w-3.5" /> },
                    { id: 'file_upload', label: '9. File Upload', icon: <UploadCloud className="h-3.5 w-3.5" /> },
                    { id: 'image_based', label: '10. Image-based', icon: <Image className="h-3.5 w-3.5" /> },
                    { id: 'video_based', label: '11. Video Question', icon: <Video className="h-3.5 w-3.5" /> },
                    { id: 'pdf_attachment', label: '12. PDF Attachment', icon: <FileText className="h-3.5 w-3.5" /> },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedQType(t.id as QuestionType)}
                      className={`p-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
                        selectedQType === t.id
                          ? 'bg-[#F4C430] text-[#0B132B] border-[#F4C430] shadow-md scale-102'
                          : 'bg-black/40 text-gray-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {t.icon}
                      <span className="truncate">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Question Title & Required */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 space-y-1">
                    <label className="text-xs font-bold text-gray-300 block">Question Title / Statement *</label>
                    <input
                      type="text"
                      placeholder="e.g. Do you support the establishment of district sports centers?"
                      value={newQuestionTitle}
                      onChange={e => setNewQuestionTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white font-bold focus:outline-none focus:border-[#F4C430]"
                    />
                  </div>
                  <div className="flex items-center space-x-2 sm:pt-6">
                    <input
                      type="checkbox"
                      id="req-chk"
                      checked={newQuestionRequired}
                      onChange={e => setNewQuestionRequired(e.target.checked)}
                      className="w-4 h-4 accent-[#F4C430]"
                    />
                    <label htmlFor="req-chk" className="text-xs font-bold text-gray-300 cursor-pointer">Required Question</label>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 block">Helper / Guidance Text (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Please provide your candid feedback based on 2025 community developments."
                    value={newQuestionHelper}
                    onChange={e => setNewQuestionHelper(e.target.value)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-gray-300 focus:outline-none"
                  />
                </div>
              </div>

              {/* Step 3: Type Specific Editors */}
              {/* For Multiple Choice, Single Choice, Checkbox, Ranking, Image-Based */}
              {['single_choice', 'multiple_choice', 'checkbox', 'ranking', 'image_based'].includes(selectedQType) && (
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F4C430]">Configure Choice Options:</span>
                    <button
                      type="button"
                      onClick={() => setNewOptions([...newOptions, { id: `opt-${Date.now()}`, label: `Option ${newOptions.length + 1}` }])}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-[11px] font-bold text-white flex items-center gap-1"
                    >
                      <Plus className="h-3 w-3" /> Add Option
                    </button>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {newOptions.map((opt, idx) => (
                      <div key={opt.id} className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-400 w-6">#{idx + 1}</span>
                        <input
                          type="text"
                          value={opt.label}
                          onChange={e => {
                            const upd = [...newOptions];
                            upd[idx].label = e.target.value;
                            setNewOptions(upd);
                          }}
                          placeholder={`Option ${idx + 1}`}
                          className="flex-1 px-3 py-1.5 bg-black/60 border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:border-[#F4C430]"
                        />
                        {selectedQType === 'image_based' && (
                          <input
                            type="text"
                            value={opt.imageUrl || ''}
                            onChange={e => {
                              const upd = [...newOptions];
                              upd[idx].imageUrl = e.target.value;
                              setNewOptions(upd);
                            }}
                            placeholder="Image URL (https://...)"
                            className="flex-1 px-3 py-1.5 bg-black/60 border border-white/20 rounded-lg text-xs text-white font-mono"
                          />
                        )}
                        {newOptions.length > 2 && (
                          <button
                            type="button"
                            onClick={() => setNewOptions(newOptions.filter((_, i) => i !== idx))}
                            className="p-1 text-red-400 hover:text-red-300"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* For Rating Scale */}
              {selectedQType === 'rating_scale' && (
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 block">Scale Range</label>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="number"
                        min={1}
                        max={1}
                        value={scaleMinInput}
                        onChange={e => setScaleMinInput(Number(e.target.value))}
                        className="w-16 px-2 py-1.5 bg-black/60 border border-white/20 rounded-lg text-xs text-center text-white"
                      />
                      <span className="text-xs text-gray-400">to</span>
                      <input
                        type="number"
                        min={2}
                        max={10}
                        value={scaleMaxInput}
                        onChange={e => setScaleMaxInput(Number(e.target.value))}
                        className="w-16 px-2 py-1.5 bg-black/60 border border-white/20 rounded-lg text-xs text-center text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Min Label (e.g. 1 = Poor)"
                      value={minLabelInput}
                      onChange={e => setMinLabelInput(e.target.value)}
                      className="w-full px-3 py-1.5 bg-black/60 border border-white/20 rounded-lg text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Max Label (e.g. 10 = Excellent)"
                      value={maxLabelInput}
                      onChange={e => setMaxLabelInput(e.target.value)}
                      className="w-full px-3 py-1.5 bg-black/60 border border-white/20 rounded-lg text-xs text-white"
                    />
                  </div>
                </div>
              )}

              {/* For Matrix Questions */}
              {selectedQType === 'matrix' && (
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#F4C430] block">Matrix Rows (1 per line)</label>
                    <textarea
                      rows={4}
                      value={matrixRows}
                      onChange={e => setMatrixRows(e.target.value)}
                      placeholder="Education Grants&#10;Healthcare Support&#10;Matrimonial Platform"
                      className="w-full mt-1 px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#F4C430] block">Matrix Columns / Ratings (1 per line)</label>
                    <textarea
                      rows={4}
                      value={matrixCols}
                      onChange={e => setMatrixCols(e.target.value)}
                      placeholder="Strongly Agree&#10;Agree&#10;Neutral&#10;Disagree"
                      className="w-full mt-1 px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white font-mono"
                    />
                  </div>
                </div>
              )}

              {/* For Video or Image Banner Questions */}
              {['video_based', 'image_based'].includes(selectedQType) && (
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-2">
                  <label className="text-xs font-bold text-[#F4C430] block">
                    {selectedQType === 'video_based' ? 'YouTube / MP4 Video Embed URL *' : 'Image Banner URL (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={mediaUrlInput}
                    onChange={e => setMediaUrlInput(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white font-mono"
                  />
                </div>
              )}

              {/* For PDF Attachments */}
              {selectedQType === 'pdf_attachment' && (
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#F4C430] block">PDF Document Title</label>
                    <input
                      type="text"
                      value={pdfTitleInput}
                      onChange={e => setPdfTitleInput(e.target.value)}
                      placeholder="e.g. Draft Zakat Distribution Policy 2026.pdf"
                      className="w-full mt-1 px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#F4C430] block">PDF Document Download / View URL</label>
                    <input
                      type="text"
                      value={pdfUrlInput}
                      onChange={e => setPdfUrlInput(e.target.value)}
                      placeholder="https://example.com/draft-policy.pdf"
                      className="w-full mt-1 px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white font-mono"
                    />
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={handleAddQuestion}
                className="w-full py-3 bg-gradient-to-r from-[#F4C430] to-yellow-500 hover:from-yellow-400 hover:to-yellow-500 text-[#0B132B] font-extrabold text-sm rounded-xl shadow-lg transition flex items-center justify-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>{getText('Add This Question to Survey', 'इस प्रश्न को सर्वे में जोड़ें', 'یہ سوال سروے میں شامل کریں')}</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: CURRENT SURVEY QUESTIONS LIST */}
          <div className="space-y-4">
            <div className="bg-black/30 p-5 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-serif font-extrabold text-white flex items-center gap-2">
                  <ListOrdered className="h-5 w-5 text-[#F4C430]" />
                  <span>3. Questions List ({currentSurvey.questions.length})</span>
                </h3>
                <span className="text-xs font-mono text-emerald-300">Live Sync</span>
              </div>

              {currentSurvey.questions.length === 0 ? (
                <div className="text-center py-8 text-gray-500 text-xs">
                  No questions added yet. Use the form on the left to add your first question.
                </div>
              ) : (
                <div className="space-y-3 max-h-[650px] overflow-y-auto pr-1">
                  {currentSurvey.questions.map((q, idx) => (
                    <div
                      key={q.id}
                      className="bg-black/40 p-4 rounded-2xl border border-white/10 hover:border-[#F4C430]/40 transition space-y-2 relative group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-[#F4C430]">Q{idx + 1}.</span>
                        {getQuestionTypeBadge(q.type)}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleMoveQuestion(idx, 'up')}
                            disabled={idx === 0}
                            className="p-1 text-gray-400 hover:text-white disabled:opacity-20"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => handleMoveQuestion(idx, 'down')}
                            disabled={idx === currentSurvey.questions.length - 1}
                            className="p-1 text-gray-400 hover:text-white disabled:opacity-20"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteQuestion(q.id)}
                            className="p-1 text-red-400 hover:text-red-300 ml-1"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs font-bold text-white leading-snug">
                        {q.title} {q.required && <span className="text-red-400">*</span>}
                      </p>

                      {q.helperText && (
                        <p className="text-[11px] text-gray-400 italic">{q.helperText}</p>
                      )}

                      {q.options && q.options.length > 0 && (
                        <div className="text-[10px] font-mono text-gray-400 bg-black/40 p-2 rounded-lg">
                          Options: {q.options.map(o => o.label).join(' | ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: LIVE RESPONDENT PREVIEW */}
      {activeTab === 'preview' && currentSurvey && (
        <div className="max-w-3xl mx-auto bg-black/40 p-6 sm:p-8 rounded-3xl border-2 border-[#F4C430]/60 shadow-2xl space-y-8 animate-fadeIn">
          <div className="border-b border-white/10 pb-5 space-y-2 text-center">
            <span className="text-xs font-mono font-bold bg-yellow-500/20 text-[#F4C430] px-3 py-1 rounded-full uppercase border border-[#F4C430]/40">
              👁️ LIVE RESPONDENT PREVIEW MODE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white mt-2">{currentSurvey.title}</h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto">{currentSurvey.description}</p>
          </div>

          {/* VOTING RULES & RESULTS POLICY SUMMARY BOX FOR VOTERS */}
          <div className="bg-gradient-to-r from-[#07351B]/80 via-black/60 to-[#07351B]/80 p-5 rounded-2xl border border-[#F4C430]/40 space-y-3 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
              <span className="text-xs font-serif font-extrabold text-[#F4C430] flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" />
                <span>Enforced Mahapanchayat Voting Rules</span>
              </span>
              <span className="text-[11px] font-mono bg-[#F4C430]/20 text-[#F4C430] px-2.5 py-0.5 rounded-full font-bold">
                {currentSurvey.votingRules?.voteUnit === 'one_per_family' ? '🏠 One Vote Per Family' : '👤 One Vote Per Member'}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-gray-400 block text-[10px]">Min Age Req.</span>
                <strong className="text-white font-mono">{currentSurvey.votingRules?.minAge ? `${currentSurvey.votingRules.minAge}+ Years` : 'No Limit'}</strong>
              </div>
              <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-gray-400 block text-[10px]">Committee Scope</span>
                <strong className="text-emerald-300 truncate block">{currentSurvey.votingRules?.committeeScope || 'Universal'}</strong>
              </div>
              <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-gray-400 block text-[10px]">District / State</span>
                <strong className="text-yellow-300 truncate block">{currentSurvey.votingRules?.districtScope || 'All'} ({currentSurvey.votingRules?.stateScope || 'All'})</strong>
              </div>
              <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-gray-400 block text-[10px]">Ballot Privacy</span>
                <strong className="text-blue-300 capitalize">{currentSurvey.votingRules?.privacyMode?.replace('_', ' ') || 'Public'}</strong>
              </div>
            </div>
            <div className="bg-black/50 p-3 rounded-xl border border-white/10 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-[#F4C430]" />
                <span className="text-gray-300">Results Visibility:</span>
              </div>
              <strong className={currentSurvey.resultsVisibility === 'hide_until_close' ? 'text-purple-300' : 'text-emerald-400'}>
                {currentSurvey.resultsVisibility === 'hide_until_close'
                  ? '🔒 Option 2: Hide Results until Survey Closes'
                  : '🟢 Option 1: Show Live Results (Yes %, No %, Neutral %, Turnout % & Graphs)'}
              </strong>
            </div>
          </div>

          <div className="space-y-6">
            {currentSurvey.questions.map((q, idx) => (
              <div key={q.id} className="bg-black/50 p-5 sm:p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    <span className="text-[#F4C430] font-mono mr-2">{idx + 1}.</span>
                    {q.title} {q.required && <span className="text-red-400">*</span>}
                  </h4>
                  {getQuestionTypeBadge(q.type)}
                </div>

                {q.helperText && (
                  <p className="text-xs text-gray-400 italic">{q.helperText}</p>
                )}

                {/* Render input based on question type */}
                {q.type === 'yes_no' && (
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl cursor-pointer border border-white/10">
                      <input type="radio" name={`prev-${q.id}`} className="accent-[#F4C430]" />
                      <span className="text-xs font-bold text-white">Yes / सहमत</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl cursor-pointer border border-white/10">
                      <input type="radio" name={`prev-${q.id}`} className="accent-[#F4C430]" />
                      <span className="text-xs font-bold text-white">No / असहमत</span>
                    </label>
                  </div>
                )}

                {['single_choice', 'multiple_choice', 'checkbox'].includes(q.type) && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map(opt => (
                      <label key={opt.id} className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 p-3 rounded-xl cursor-pointer border border-white/10 transition">
                        <input
                          type={q.type === 'single_choice' ? 'radio' : 'checkbox'}
                          name={`prev-${q.id}`}
                          className="w-4 h-4 accent-[#F4C430]"
                        />
                        <span className="text-xs text-white font-semibold">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {q.type === 'rating_scale' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-1 flex-wrap bg-black/40 p-3 rounded-xl border border-white/10">
                      {Array.from({ length: (q.scaleMax || 5) - (q.scaleMin || 1) + 1 }, (_, i) => (q.scaleMin || 1) + i).map(num => (
                        <button
                          key={num}
                          type="button"
                          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F4C430] hover:text-[#0B132B] text-xs font-bold font-mono transition text-white flex items-center justify-center"
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-[11px] text-gray-400 font-mono px-1">
                      <span>{q.minLabel || '1 = Poor'}</span>
                      <span>{q.maxLabel || '5 = Excellent'}</span>
                    </div>
                  </div>
                )}

                {q.type === 'ranking' && q.options && (
                  <div className="space-y-2">
                    <p className="text-[11px] text-yellow-300 font-mono">Assign rank order (#1 is highest priority):</p>
                    {q.options.map((opt, oIdx) => (
                      <div key={opt.id} className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                        <span className="text-xs text-white font-semibold">{opt.label}</span>
                        <select className="bg-black/60 border border-white/20 rounded-lg px-2 py-1 text-xs font-bold text-[#F4C430]">
                          {q.options?.map((_, rIdx) => (
                            <option key={rIdx} value={rIdx + 1}>Rank #{rIdx + 1}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                )}

                {q.type === 'matrix' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-white/20 text-gray-400 font-mono">
                          <th className="py-2 pr-2">Item / Pillar</th>
                          {(q.matrixCols || ['Agree', 'Neutral', 'Disagree']).map((col, cIdx) => (
                            <th key={cIdx} className="py-2 px-2 text-center">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {(q.matrixRows || ['Item 1', 'Item 2']).map((row, rIdx) => (
                          <tr key={rIdx}>
                            <td className="py-2.5 pr-2 font-semibold text-white">{row}</td>
                            {(q.matrixCols || ['Agree', 'Neutral', 'Disagree']).map((col, cIdx) => (
                              <td key={cIdx} className="py-2.5 px-2 text-center">
                                <input type="radio" name={`mat-${q.id}-${rIdx}`} className="accent-[#F4C430]" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {q.type === 'text_suggestion' && (
                  <textarea
                    rows={3}
                    placeholder="Enter detailed suggestions or feedback here..."
                    className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430]"
                  />
                )}

                {q.type === 'file_upload' && (
                  <div className="border-2 border-dashed border-white/20 hover:border-[#F4C430] rounded-2xl p-6 text-center space-y-2 transition bg-white/5 cursor-pointer">
                    <UploadCloud className="h-8 w-8 text-[#F4C430] mx-auto" />
                    <p className="text-xs font-bold text-white">Click or drag document to upload</p>
                    <span className="text-[10px] text-gray-400 block font-mono">Supported formats: PDF, JPG, PNG (Max 10MB)</span>
                  </div>
                )}

                {q.type === 'image_based' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {q.options.map(opt => (
                      <div key={opt.id} className="bg-black/60 rounded-xl overflow-hidden border border-white/10 hover:border-[#F4C430] transition p-3 space-y-2 cursor-pointer">
                        {opt.imageUrl && (
                          <img src={opt.imageUrl} alt={opt.label} className="w-full h-32 object-cover rounded-lg" />
                        )}
                        <label className="flex items-center space-x-2 cursor-pointer pt-1">
                          <input type="radio" name={`img-${q.id}`} className="accent-[#F4C430]" />
                          <span className="text-xs font-bold text-white">{opt.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                )}

                {q.type === 'video_based' && q.mediaUrl && (
                  <div className="bg-black/60 p-4 rounded-2xl border border-white/10 space-y-3 text-center">
                    <div className="w-full h-48 bg-black rounded-xl flex items-center justify-center relative overflow-hidden border border-white/10">
                      <Video className="h-12 w-12 text-[#F4C430] animate-pulse" />
                      <span className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 rounded text-[11px] font-mono text-white">
                        🎥 Video Stream: {q.mediaUrl}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 font-semibold">Watch the video above before completing survey ranking questions.</p>
                  </div>
                )}

                {q.type === 'pdf_attachment' && (
                  <div className="bg-amber-950/40 border border-amber-500/40 p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-amber-400 shrink-0" />
                      <div>
                        <h5 className="text-xs font-bold text-white">{q.pdfTitle || 'Reference_Document.pdf'}</h5>
                        <span className="text-[11px] text-amber-300 font-mono">PDF Attachment (Click to inspect)</span>
                      </div>
                    </div>
                    <a
                      href={q.pdfUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-xl transition shrink-0"
                    >
                      Download PDF
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => alert(getText('This is a live preview. When published, respondents will submit their answers securely.', 'यह लाइव पूर्वावलोकन है। प्रकाशित होने पर लोग उत्तर सुरक्षित रूप से जमा करेंगे।', 'یہ لائیو پیش نظارہ ہے۔'))}
              className="px-8 py-4 bg-gradient-to-r from-[#F4C430] to-yellow-500 text-[#0B132B] font-extrabold text-sm rounded-2xl shadow-2xl scale-105 hover:scale-110 transition"
            >
              🚀 Submit Survey Responses (Simulated Preview)
            </button>
          </div>
        </div>
      )}

      {/* VIEW 4: RESPONSES & ANALYTICS */}
      {activeTab === 'analytics' && currentSurvey && (
        <div className="space-y-6">
          <div className="bg-black/30 p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                📊 REAL-TIME COMMUNITY SURVEY ANALYTICS
              </span>
              <h2 className="text-2xl font-serif font-extrabold text-white mt-1">{currentSurvey.title}</h2>
              <p className="text-xs text-gray-300">Total Submitted Responses: <strong className="text-[#F4C430]">{currentSurvey.responsesCount.toLocaleString()}</strong></p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert(getText('Exported complete response dataset as CSV / Excel.', 'CSV / Excel के रूप में डेटा डाउनलोड किया गया।', 'ڈیٹا ڈاؤن لوڈ کر لیا گیا۔'))}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/10 transition flex items-center gap-1.5"
              >
                📥 Export CSV / Excel
              </button>
            </div>
          </div>

          {/* RESULTS VISIBILITY MODE BANNER */}
          {currentSurvey.resultsVisibility === 'hide_until_close' ? (
            <div className="p-4 bg-gradient-to-r from-purple-900/60 to-red-900/60 rounded-2xl border border-purple-500/50 flex items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Option 2 Active: Hide Results until Survey Closes</h4>
                  <p className="text-xs text-purple-200 mt-0.5">
                    Voters currently see <strong className="text-white">"Results hidden until survey closes"</strong>. You are viewing admin-only confidential live percentages and charts below.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono bg-black/40 text-purple-300 px-3 py-1 rounded-xl shrink-0 font-bold border border-purple-500/30">
                Confidential Mode
              </span>
            </div>
          ) : (
            <div className="p-4 bg-gradient-to-r from-emerald-900/60 to-[#07351B] rounded-2xl border border-emerald-500/50 flex items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🟢</span>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Option 1 Active: Show Live Results</h4>
                  <p className="text-xs text-emerald-200 mt-0.5">
                    Real-time tally (<strong className="text-[#F4C430]">Yes %</strong>, <strong className="text-[#F4C430]">No %</strong>, <strong className="text-[#F4C430]">Neutral %</strong>, <strong className="text-[#F4C430]">Turnout %</strong>, and interactive graphs) is publicly displayed to all voters!
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono bg-black/40 text-emerald-300 px-3 py-1 rounded-xl shrink-0 font-bold border border-emerald-500/30">
                Public Live Tally
              </span>
            </div>
          )}

          {/* TURNOUT & CONSENSUS OVERVIEW METRICS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs text-gray-400 font-bold uppercase block">Yes (Agreement)</span>
              <div className="text-2xl font-serif font-extrabold text-emerald-400">68.4%</div>
              <span className="text-[10px] text-gray-400 font-mono">{Math.round(currentSurvey.responsesCount * 0.684).toLocaleString()} votes</span>
            </div>
            <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs text-gray-400 font-bold uppercase block">No (Dissent)</span>
              <div className="text-2xl font-serif font-extrabold text-red-400">18.2%</div>
              <span className="text-[10px] text-gray-400 font-mono">{Math.round(currentSurvey.responsesCount * 0.182).toLocaleString()} votes</span>
            </div>
            <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs text-gray-400 font-bold uppercase block">Neutral / Abstain</span>
              <div className="text-2xl font-serif font-extrabold text-yellow-300">13.4%</div>
              <span className="text-[10px] text-gray-400 font-mono">{Math.round(currentSurvey.responsesCount * 0.134).toLocaleString()} votes</span>
            </div>
            <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs text-gray-400 font-bold uppercase block">Voter Turnout %</span>
              <div className="text-2xl font-serif font-extrabold text-[#F4C430]">74.8%</div>
              <span className="text-[10px] text-emerald-400 font-mono">{currentSurvey.responsesCount.toLocaleString()} of ~1,910 eligible</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentSurvey.questions.map((q, idx) => (
              <div key={q.id} className="bg-black/30 p-5 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-3">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    <span className="text-[#F4C430] font-mono mr-1">Q{idx + 1}.</span> {q.title}
                  </h4>
                  {getQuestionTypeBadge(q.type)}
                </div>

                {/* Simulated charts based on question type */}
                {['single_choice', 'multiple_choice', 'yes_no', 'checkbox', 'ranking', 'image_based'].includes(q.type) ? (
                  <div className="space-y-2.5">
                    {(q.options || [{ id: '1', label: 'Yes' }, { id: '2', label: 'No' }]).map((opt, oIdx) => {
                      const pct = Math.max(10, Math.round(100 - oIdx * 25 - (Math.random() * 15)));
                      return (
                        <div key={opt.id} className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-gray-300 truncate">{opt.label}</span>
                            <span className="text-[#F4C430] font-mono">{pct}% ({Math.round(currentSurvey.responsesCount * (pct / 100))} votes)</span>
                          </div>
                          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-[#F4C430] to-yellow-500 h-full rounded-full transition-all duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : q.type === 'rating_scale' ? (
                  <div className="text-center py-4 space-y-2">
                    <div className="text-4xl font-serif font-extrabold text-[#F4C430]">4.6 / {q.scaleMax || 10}</div>
                    <span className="text-xs text-gray-400 font-mono">Average Community Rating Score</span>
                    <div className="flex justify-center gap-1 text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                ) : (
                  <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-xs text-gray-300 space-y-2">
                    <div className="font-bold text-emerald-300">Recent Submitted Text Suggestions / Responses:</div>
                    <p className="italic">"We should establish a special library & computer lab in every tehsil."</p>
                    <p className="italic">"Please conduct quarterly online seminars for career counseling."</p>
                    <span className="text-[11px] text-gray-500 block font-mono">Showing 2 of {currentSurvey.responsesCount} responses</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SCHEDULE MODAL */}
      {showScheduleModal && currentSurvey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#07351B] border-2 border-[#F4C430] rounded-3xl max-w-md w-full p-6 space-y-5 relative shadow-2xl text-white">
            <button
              onClick={() => setShowScheduleModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif font-extrabold text-white">Schedule Survey Release</h3>
            </div>
            <p className="text-xs text-gray-300">Set automatic launch and closing dates for "<strong className="text-[#F4C430]">{currentSurvey.title}</strong>".</p>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300 block">Launch / Start Date *</label>
                <input
                  type="date"
                  value={scheduleData.start}
                  onChange={e => setScheduleData({ ...scheduleData, start: e.target.value })}
                  className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-[#F4C430]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-300 block">Auto-Close / End Date (Optional)</label>
                <input
                  type="date"
                  value={scheduleData.end}
                  onChange={e => setScheduleData({ ...scheduleData, end: e.target.value })}
                  className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-[#F4C430]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowScheduleModal(false)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold"
              >
                Cancel
              </button>
              <button
                onClick={confirmSchedule}
                className="px-5 py-2 bg-gradient-to-r from-[#F4C430] to-yellow-500 text-[#0B132B] font-extrabold text-xs rounded-xl shadow-lg"
              >
                Confirm Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
