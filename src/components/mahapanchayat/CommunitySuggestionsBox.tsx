import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, ShieldAlert, User, EyeOff, Check, X, Filter, Sparkles } from 'lucide-react';
import { CommentSuggestion } from './types';

interface CommunitySuggestionsBoxProps {
  itemId: string; // surveyId or proposalId
  itemTitle: string;
  comments: CommentSuggestion[];
  onAddComment: (newComm: CommentSuggestion) => void;
  onModerateComment: (id: string, status: 'approved' | 'rejected') => void;
  getText: (en: string, hi: string, ur: string) => string;
  verifiedMemberName?: string;
  userDistrict?: string;
}

export default function CommunitySuggestionsBox({
  itemId,
  itemTitle,
  comments,
  onAddComment,
  onModerateComment,
  getText,
  verifiedMemberName,
  userDistrict
}: CommunitySuggestionsBoxProps) {
  const [content, setContent] = useState('');
  const [type, setType] = useState<'suggestion' | 'comment' | 'improvement_idea' | 'feedback'>('improvement_idea');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const itemComments = comments.filter(c => c.surveyOrProposalId === itemId || c.surveyOrProposalId === 'surv-1' || itemId === 'default');
  const filteredComments = itemComments.filter(c => {
    if (filter === 'approved') return c.status === 'approved';
    if (filter === 'pending') return c.status === 'pending_moderation';
    return true; // all
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newComment: CommentSuggestion = {
      id: `comm-${Date.now()}`,
      surveyOrProposalId: itemId,
      authorName: isAnonymous ? 'Anonymous Community Member' : (verifiedMemberName || 'Verified Member (#ONLINE)'),
      authorDistrict: isAnonymous ? 'Confidential District' : (userDistrict || 'National Member'),
      isAnonymous,
      type,
      content,
      date: 'Just Now',
      upvotes: 1,
      status: 'pending_moderation'
    };

    onAddComment(newComment);
    setContent('');
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 3500);
  };

  const getTypeBadge = (t: string) => {
    switch (t) {
      case 'suggestion':
        return { label: '💡 Suggestion', bg: 'bg-blue-950 text-blue-300 border-blue-500/30' };
      case 'improvement_idea':
        return { label: '🚀 Improvement Idea', bg: 'bg-emerald-950 text-emerald-300 border-emerald-500/30' };
      case 'feedback':
        return { label: '🗣️ Anonymous Feedback', bg: 'bg-purple-950 text-purple-300 border-purple-500/30' };
      default:
        return { label: '💬 Comment', bg: 'bg-gray-900 text-gray-300 border-gray-600/30' };
    }
  };

  return (
    <div className="bg-[#07351B]/95 rounded-3xl p-6 sm:p-8 border-2 border-[#F4C430]/40 shadow-2xl space-y-8 text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#F4C430] uppercase tracking-wider block">
            💬 {getText('Community Suggestions Box & Moderated Forum', 'सामुदायिक सुझाव पेटी एवं समीक्षा मंच', 'کمیونٹی تجاویز باکس اور فورم')}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white mt-1">
            {itemTitle}
          </h3>
          <p className="text-xs text-gray-300 mt-0.5">
            {getText(
              'Share improvement ideas, comments, or confidential feedback. All posts require elder/committee moderation before public release.',
              'सुधार के विचार, टिप्पणियां या गोपनीय प्रतिक्रिया साझा करें। प्रकाशन से पहले सभी टिप्पणियों की समिति द्वारा समीक्षा की जाती है।',
              'بہتری کے خیالات، تبصرے یا خفیہ رائے کا اشتراک کریں۔ اشاعت سے پہلے تمام تبصروں کا کمیٹی کے ذریعے جائزہ لیا جاتا ہے۔'
            )}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto bg-black/40 p-1.5 rounded-xl border border-white/10">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${filter === 'all' ? 'bg-[#F4C430] text-[#0B132B]' : 'text-gray-300 hover:text-white'}`}
          >
            All ({itemComments.length})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${filter === 'approved' ? 'bg-emerald-500 text-[#0B132B]' : 'text-gray-300 hover:text-white'}`}
          >
            Approved ({itemComments.filter(c => c.status === 'approved').length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${filter === 'pending' ? 'bg-yellow-500 text-[#0B132B]' : 'text-yellow-300 hover:text-white'}`}
          >
            <span>Pending</span>
            <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-mono">
              {itemComments.filter(c => c.status === 'pending_moderation').length}
            </span>
          </button>
        </div>
      </div>

      {/* Suggestion Box Submission Form */}
      <div className="bg-black/40 p-5 rounded-2xl border border-[#F4C430]/30 space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-[#F4C430] uppercase">
          <span>✍️ {getText('Submit Your Suggestion / Improvement Idea', 'अपना सुझाव / सुधार विचार प्रस्तुत करें', 'اپنی تجویز / بہتری کا خیال پیش کریں')}</span>
          <span className="text-gray-400 font-normal lowercase">{getText('moderated by elder council', 'वरिष्ठ परिषद द्वारा समीक्षित', 'بزرگ کونسل کے زیر انتظام')}</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">{getText('Feedback Type:', 'प्रतिक्रिया का प्रकार:', 'رائے کی قسم:')}</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-[#F4C430]"
              >
                <option value="improvement_idea">🚀 {getText('Improvement Idea', 'सुधार का विचार', 'بہتری کا خیال')}</option>
                <option value="suggestion">💡 {getText('Suggestion Box Item', 'सुझाव पेटी आइटम', 'تجویز باکس آئٹم')}</option>
                <option value="comment">💬 {getText('General Comment / Debate', 'सामान्य टिप्पणी / चर्चा', 'عام تبصرہ / بحث')}</option>
                <option value="feedback">🗣️ {getText('Anonymous Feedback', 'गोपनीय प्रतिक्रिया', 'خفیہ رائے')}</option>
              </select>
            </div>

            <div className="flex items-end pb-1">
              <label className="cursor-pointer bg-white/5 hover:bg-white/10 p-2.5 rounded-xl border border-white/10 text-xs text-gray-200 flex items-center gap-2.5 w-full transition select-none">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => {
                    setIsAnonymous(e.target.checked);
                    if (e.target.checked && type !== 'feedback') setType('feedback');
                  }}
                  className="rounded text-[#F4C430] focus:ring-0 w-4 h-4 bg-black border-white/30"
                />
                <EyeOff className={`h-4 w-4 shrink-0 ${isAnonymous ? 'text-[#F4C430]' : 'text-gray-500'}`} />
                <span className="font-semibold">
                  {getText('Submit as Anonymous Feedback', 'गोपनीय रूप से भेजें (नाम व ID छुपाएं)', 'خفیہ طور پر ارسال کریں (نام اور آئی ڈی چھپائیں)')}
                </span>
              </label>
            </div>
          </div>

          <textarea
            rows={3}
            required
            placeholder={getText('Write your improvement ideas, amendments to clauses, or community feedback here...', 'यहाँ अपने सुधार विचार, धाराओं में संशोधन या सामुदायिक प्रतिक्रिया लिखें...', 'یہاں اپنے بہتری کے خیالات، شقوں میں ترامیم یا کمیونٹی کی رائے لکھیں...')}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C430]"
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
              <ShieldAlert className="h-4 w-4 text-yellow-400 shrink-0" />
              <span>{getText('Comments require moderation before publication.', 'प्रकाशन से पहले समीक्षा अनिवार्य है।', 'اشاعت سے پہلے جائزہ ضروری ہے۔')}</span>
            </span>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#F4C430] to-yellow-500 hover:from-yellow-400 hover:to-yellow-300 text-[#0B132B] font-extrabold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-xl flex items-center justify-center space-x-2 transition transform active:scale-95 shrink-0"
            >
              <Send className="h-4 w-4" />
              <span>{getText('Submit to Moderation Queue', 'समीक्षा के लिए भेजें', 'جائزے کے لیے ارسال کریں')}</span>
            </button>
          </div>
        </form>

        {submittedMessage && (
          <div className="bg-emerald-950 border border-emerald-500/40 p-3 rounded-xl text-xs text-emerald-300 flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="h-5 w-5 text-[#F4C430] shrink-0" />
            <span>
              {getText(
                'Thank you! Your feedback has been submitted to the Committee Moderation Queue.',
                'धन्यवाद! आपकी प्रतिक्रिया समिति की समीक्षा कतार में भेज दी गई है।',
                'شکریہ! آپ کی رائے کمیٹی کی جائزہ قطار میں بھیج دی گئی ہے۔'
              )}
            </span>
          </div>
        )}
      </div>

      {/* Moderated Comments List */}
      <div className="space-y-4">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#F4C430] flex items-center justify-between">
          <span>📑 {getText('Community Discussions & Improvement Ideas', 'सामुदायिक चर्चा एवं सुधार सुझाव', 'کمیونٹی مباحثے اور بہتری کے خیالات')}</span>
          <span className="text-gray-400 font-mono font-normal">Showing {filteredComments.length} items</span>
        </h4>

        {filteredComments.length === 0 ? (
          <div className="text-center py-8 bg-black/30 rounded-2xl border border-white/10 text-gray-400 text-xs">
            {getText('No suggestions found in this view.', 'इस श्रेणी में कोई सुझाव नहीं मिला।', 'اس زمرے میں کوئی تجویز نہیں ملی۔')}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredComments.map((comm) => {
              const badge = getTypeBadge(comm.type);
              const isPending = comm.status === 'pending_moderation';

              return (
                <div
                  key={comm.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition relative ${
                    isPending
                      ? 'bg-yellow-950/30 border-yellow-500/40'
                      : 'bg-black/30 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badge.bg}`}>
                        {badge.label}
                      </span>
                      {isPending ? (
                        <span className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                          <span>⏳</span>
                          <span>Pending Moderation (Admin Review)</span>
                        </span>
                      ) : (
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span>Approved & Published</span>
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] text-gray-400 font-mono">{comm.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light mb-3">
                    "{comm.content}"
                  </p>

                  <div className="flex items-center justify-between text-xs border-t border-white/10 pt-2.5">
                    <div className="flex items-center gap-2 text-gray-400 font-mono">
                      {comm.isAnonymous ? (
                        <span className="flex items-center gap-1 text-[#F4C430]">
                          <EyeOff className="h-3.5 w-3.5" />
                          <span>{comm.authorName}</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-emerald-300 font-semibold">
                          <User className="h-3.5 w-3.5" />
                          <span>{comm.authorName} ({comm.authorDistrict})</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Admin Moderation Actions for Pending Items */}
                      {isPending && (
                        <div className="flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded-lg border border-yellow-500/30">
                          <span className="text-[10px] text-yellow-300 font-mono mr-1">Admin Action:</span>
                          <button
                            onClick={() => onModerateComment(comm.id, 'approved')}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow transition"
                          >
                            <Check className="h-3 w-3" /> Approve
                          </button>
                          <button
                            onClick={() => onModerateComment(comm.id, 'rejected')}
                            className="bg-red-600 hover:bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow transition"
                          >
                            <X className="h-3 w-3" /> Reject
                          </button>
                        </div>
                      )}

                      <button
                        onClick={() => alert(getText('Thank you for supporting this improvement idea!', 'इस सुधार विचार का समर्थन करने के लिए धन्यवाद!', 'اس بہتری کے خیال کی حمایت کرنے کا شکریہ!'))}
                        className="bg-white/10 hover:bg-white/20 text-[#F4C430] px-3 py-1 rounded-lg text-xs font-bold font-mono flex items-center gap-1 transition"
                      >
                        <span>👍</span>
                        <span>{comm.upvotes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
