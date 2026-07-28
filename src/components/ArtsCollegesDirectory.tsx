import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Home, 
  Phone, 
  Compass, 
  Users, 
  DollarSign, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  AlertCircle, 
  ArrowUpRight, 
  Star, 
  Info,
  Mail,
  User,
  Layers,
  Map,
  X,
  FileText,
  Briefcase,
  Layers2,
  Building,
  Activity,
  Share2,
  Globe,
  Sliders,
  Check,
  Building2,
  FileSpreadsheet,
  Download,
  CheckSquare,
  Zap,
  BarChart,
  TrendingUp,
  PieChart,
  Cpu,
  Monitor,
  Lightbulb,
  Zap as FastIcon,
  Search as SearchIcon,
  Globe2,
  ShieldAlert,
  ArrowRight,
  Pencil,
  Book,
  Scale,
  Palette,
  Heart
} from 'lucide-react';
import { ARTS_COLLEGES, ArtsCollegeProfile } from '../data/artsCollegesData';

interface ArtsCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

export default function ArtsCollegesDirectory({ currentLanguage = 'en' }: ArtsCollegesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'ug' | 'pg' | 'research' | 'liberal-arts'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Advanced Filter States
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedNaacGrade, setSelectedNaacGrade] = useState('All');
  const [selectedNIRF, setSelectedNIRF] = useState('All');

  // Sorting
  const [sortBy, setSortBy] = useState<'alphabetical' | 'nirf-asc' | 'fee-asc' | 'fee-desc' | 'established-asc'>('alphabetical');

  // Modal Detail State
  const [selectedCollege, setSelectedCollege] = useState<ArtsCollegeProfile | null>(null);
  const [modalTab, setModalTab] = useState<'academics' | 'admissions' | 'infrastructure' | 'careers' | 'fees' | 'contact'>('academics');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Extract lists for filters
  const statesList = useMemo(() => {
    const states = new Set(ARTS_COLLEGES.map(c => c.state));
    return ['All', ...Array.from(states).sort()];
  }, []);

  const citiesList = useMemo(() => {
    const filtered = ARTS_COLLEGES.filter(c => selectedState === 'All' || c.state === selectedState);
    const cities = new Set(filtered.map(c => c.city));
    return ['All', ...Array.from(cities).sort()];
  }, [selectedState]);

  const ownershipTypes = ['All', 'Government', 'Private', 'Autonomous', 'Deemed University', 'Minority Institution'];

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...ARTS_COLLEGES];

    // Tab filtering
    if (activeTab === 'ug') {
      result = result.filter(c => c.programmes.some(p => p.includes('B.A.')));
    } else if (activeTab === 'pg') {
      result = result.filter(c => c.programmes.some(p => p.includes('M.A.')));
    } else if (activeTab === 'research') {
      result = result.filter(c => c.programmes.some(p => p.includes('Ph.D') || p.includes('Research')));
    }

    // Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.specializations.some(s => s.toLowerCase().includes(q))
      );
    }

    if (selectedState !== 'All') result = result.filter(c => c.state === selectedState);
    if (selectedCity !== 'All') result = result.filter(c => c.city === selectedCity);
    if (selectedOwnership !== 'All') result = result.filter(c => c.ownership === selectedOwnership);
    if (selectedNaacGrade !== 'All') result = result.filter(c => c.naacGrade.includes(selectedNaacGrade));
    
    if (selectedNIRF !== 'All') {
      result = result.filter(c => {
        const rankMatch = c.nirfRanking.match(/\d+/);
        const rank = rankMatch ? parseInt(rankMatch[0]) : 999;
        if (selectedNIRF === 'Top 10') return rank <= 10;
        if (selectedNIRF === 'Top 50') return rank <= 50;
        if (selectedNIRF === 'Top 100') return rank <= 100;
        return true;
      });
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical': return a.name.localeCompare(b.name);
        case 'nirf-asc': {
          const rAMatch = a.nirfRanking.match(/\d+/);
          const rBMatch = b.nirfRanking.match(/\d+/);
          const rA = rAMatch ? parseInt(rAMatch[0]) : 999;
          const rB = rBMatch ? parseInt(rBMatch[0]) : 999;
          return rA - rB;
        }
        case 'fee-asc': {
          const feeA = parseInt(a.tuitionFees.replace(/[^0-9]/g, '')) || 0;
          const feeB = parseInt(b.tuitionFees.replace(/[^0-9]/g, '')) || 0;
          return feeA - feeB;
        }
        case 'fee-desc': {
          const feeA = parseInt(a.tuitionFees.replace(/[^0-9]/g, '')) || 0;
          const feeB = parseInt(b.tuitionFees.replace(/[^0-9]/g, '')) || 0;
          return feeB - feeA;
        }
        case 'established-asc': return a.yearEstablished - b.yearEstablished;
        default: return 0;
      }
    });

    return result;
  }, [activeTab, searchQuery, selectedState, selectedCity, selectedOwnership, selectedNaacGrade, selectedNIRF, sortBy]);

  const paginatedColleges = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredColleges, currentPage]);

  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('All');
    setSelectedCity('All');
    setSelectedOwnership('All');
    setSelectedNaacGrade('All');
    setSelectedNIRF('All');
    setSortBy('alphabetical');
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen text-slate-800 font-sans pb-16">
      
      {/* HERO BANNER */}
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-[#FFD54A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-400/30 text-purple-100 text-xs font-bold uppercase tracking-widest shadow-xl">
              <Palette className="w-3.5 h-3.5 text-purple-400" />
              <span>
                {currentLanguage === 'en'
                  ? 'National Arts & Humanities Directory'
                  : currentLanguage === 'ur'
                  ? 'قومی آرٹس اور ہیومینٹیز کی ڈائریکٹری'
                  : 'राष्ट्रीय कला एवं मानविकी निर्देशिका'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-950/50 border border-amber-500/30 px-3 py-1.5 rounded-xl shadow-lg">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? '50+ Verified Arts & Humanities Institutions'
                  : '50+ تصدیق شدہ آرٹس اور ہیومینٹیز کے ادارے'}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {currentLanguage === 'en'
              ? 'Premier Arts, Humanities & Social Sciences'
              : currentLanguage === 'ur'
              ? 'اعلیٰ آرٹس، ہیومینٹیز اور سوشل سائنسز'
              : 'प्रमुख कला, मानविकी और सामाजिक विज्ञान'}
          </h1>

          <p className="text-base text-slate-300 max-w-3xl leading-relaxed mb-8 font-medium">
            Explore India's most prestigious institutions for Liberal Arts, Social Sciences, and Humanities. Discover top-ranked colleges for B.A., M.A., and Research across all major disciplines.
          </p>

          {/* TABS */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              { id: 'directory', label: 'All Institutions', icon: Layers },
              { id: 'ug', label: 'Undergraduate (B.A.)', icon: Book },
              { id: 'pg', label: 'Postgraduate (M.A.)', icon: GraduationCap },
              { id: 'research', label: 'Research & Ph.D', icon: SearchIcon },
              { id: 'liberal-arts', label: 'Liberal Arts Guide', icon: Info }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as any); setCurrentPage(1); }}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-lg border-2 ${
                  activeTab === tab.id ? 'bg-[#FFD54A] text-slate-900 border-white' : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border-slate-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
        {activeTab !== 'liberal-arts' && (
          <div className="space-y-8">
            
            {/* SEARCH & FILTERS */}
            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-slate-200 space-y-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by college, city, or discipline (History, Psychology)..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm font-bold bg-slate-50 shadow-inner"
                  />
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <div className="flex items-center gap-2 bg-slate-100 px-4 py-3.5 rounded-2xl border border-slate-200">
                    <Sliders className="w-4 h-4 text-slate-500" />
                    <select
                      value={sortBy}
                      onChange={(e) => { setSortBy(e.target.value as any); setCurrentPage(1); }}
                      className="bg-transparent border-none text-xs font-black text-slate-700 focus:outline-none cursor-pointer"
                    >
                      <option value="alphabetical">Sort: A-Z</option>
                      <option value="nirf-asc">Sort: NIRF Rank</option>
                      <option value="fee-asc">Sort: Fee (Low-High)</option>
                      <option value="fee-desc">Sort: Fee (High-Low)</option>
                      <option value="established-asc">Sort: Established</option>
                    </select>
                  </div>

                  <button onClick={resetFilters} className="bg-slate-900 text-white px-6 py-3.5 rounded-2xl text-xs font-black hover:bg-slate-800 transition shadow-lg">
                    Reset
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                <div className="space-y-1.5">
                  <p className="text-[10px] font-black text-slate-400 uppercase ml-2">State</p>
                  <select value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedCity('All'); setCurrentPage(1); }} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700">
                    {statesList.map(st => <option key={st} value={st}>{st === 'All' ? 'Select State' : st}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10px] font-black text-slate-400 uppercase ml-2">City</p>
                  <select value={selectedCity} onChange={(e) => { setSelectedCity(e.target.value); setCurrentPage(1); }} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700" disabled={selectedState === 'All'}>
                    {citiesList.map(city => <option key={city} value={city}>{city === 'All' ? 'Select City' : city}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10px] font-black text-slate-400 uppercase ml-2">Ownership</p>
                  <select value={selectedOwnership} onChange={(e) => { setSelectedOwnership(e.target.value); setCurrentPage(1); }} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700">
                    {ownershipTypes.map(ow => <option key={ow} value={ow}>{ow === 'All' ? 'Select Type' : ow}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10px] font-black text-slate-400 uppercase ml-2">NIRF Range</p>
                  <select value={selectedNIRF} onChange={(e) => { setSelectedNIRF(e.target.value); setCurrentPage(1); }} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700">
                    <option value="All">Select Range</option>
                    <option value="Top 10">Top 10</option>
                    <option value="Top 50">Top 50</option>
                    <option value="Top 100">Top 100</option>
                  </select>
                </div>
              </div>
            </div>

            {/* RESULTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedColleges.map((college) => (
                <motion.div
                  key={college.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all flex flex-col group"
                >
                  <div className="h-40 relative overflow-hidden">
                    <img src={college.coverImageUrl} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Campus" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex gap-2">
                        <span className="bg-[#FFD54A] text-slate-900 text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border border-white/30">NIRF #{college.nirfRanking}</span>
                        <span className="bg-purple-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border border-white/30">UGC Recognised</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-white rounded-xl p-2 shadow-md border border-slate-100 shrink-0 -mt-10 relative z-10">
                        <img src={college.logoUrl} className="w-full h-full object-contain" alt="Logo" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-black text-slate-900 group-hover:text-purple-600 transition leading-tight mb-1">
                          {college.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                          <MapPin className="w-3 h-3" />
                          <span>{college.city}, {college.state}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                        <span className="text-[9px] font-black text-slate-400 uppercase block mb-0.5">Academic Status</span>
                        <span className="text-sm font-black text-purple-700">{college.ownership}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                        <span className="text-[9px] font-black text-slate-400 uppercase block mb-0.5">Est. Year</span>
                        <span className="text-sm font-black text-slate-700">{college.yearEstablished}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="text-[9px] font-black text-slate-400 uppercase block mb-2">Popular Disciplines</span>
                      <div className="flex flex-wrap gap-1.5">
                        {college.specializations.slice(0, 3).map((spec, idx) => (
                          <span key={idx} className="bg-purple-50 text-purple-700 text-[10px] font-black px-2.5 py-1 rounded-lg border border-purple-100">
                            {spec}
                          </span>
                        ))}
                        {college.specializations.length > 3 && (
                          <span className="text-[10px] font-black text-slate-300">+{college.specializations.length - 3}</span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => { setSelectedCollege(college); setModalTab('academics'); }}
                      className="w-full mt-auto bg-slate-900 text-white text-xs font-black py-4 rounded-2xl hover:bg-purple-600 transition flex items-center justify-center gap-2 group/btn shadow-lg"
                    >
                      View Full Profile
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-10">
                <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-purple-600 disabled:opacity-40 shadow-sm transition"><ChevronRight className="w-6 h-6 rotate-180" /></button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                  <button key={num} onClick={() => setCurrentPage(num)} className={`w-12 h-12 rounded-2xl text-sm font-black transition-all ${currentPage === num ? 'bg-purple-600 text-white shadow-xl scale-110' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-purple-400 shadow-sm'}`}>{num}</button>
                ))}
                <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-purple-600 disabled:opacity-40 shadow-sm transition"><ChevronRight className="w-6 h-6" /></button>
              </div>
            )}
          </div>
        )}

        {/* LIBERAL ARTS GUIDE TAB */}
        {activeTab === 'liberal-arts' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Heart className="w-8 h-8 text-purple-600" />
                Liberal Arts Education in India
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
                    <h4 className="text-lg font-black text-purple-900 mb-2">Interdisciplinary Focus</h4>
                    <p className="text-xs font-bold text-purple-700 leading-relaxed">Combine subjects across humanities, social sciences, and natural sciences for a well-rounded education.</p>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100">
                    <h4 className="text-lg font-black text-amber-900 mb-2">Critical Thinking</h4>
                    <p className="text-xs font-bold text-amber-700 leading-relaxed">Emphasis on analytical reasoning, complex problem-solving, and creative communication skills.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                    <h4 className="text-lg font-black text-emerald-900 mb-2">Diverse Career Paths</h4>
                    <p className="text-xs font-bold text-emerald-700 leading-relaxed">Preparing students for roles in public policy, international relations, media, and academic research.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h4 className="text-lg font-black text-slate-900 mb-2">Modern Pedagogy</h4>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">Seminar-style learning, research projects, and global exchange opportunities are hallmarks of top colleges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCollege && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCollege(null)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="relative h-60 sm:h-72 shrink-0">
                <img src={selectedCollege.coverImageUrl} className="w-full h-full object-cover" alt="Cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <button onClick={() => setSelectedCollege(null)} className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-xl rounded-full text-white hover:bg-white/40 transition border border-white/30 cursor-pointer">
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-[2rem] p-5 shadow-2xl border-4 border-white shrink-0 relative z-10">
                      <img src={selectedCollege.logoUrl} className="w-full h-full object-contain" alt="Logo" />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-[#FFD54A] text-slate-900 text-[10px] font-black uppercase px-2.5 py-1 rounded-xl shadow-lg border border-white/30">NIRF Ranking #{selectedCollege.nirfRanking}</span>
                        <span className="bg-purple-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-xl shadow-lg border border-purple-400/30">NAAC {selectedCollege.naacGrade}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-2 tracking-tight">{selectedCollege.name}</h2>
                      <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-bold">
                        <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> {selectedCollege.city}, {selectedCollege.state}</div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                        <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> Established {selectedCollege.yearEstablished}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto bg-slate-50">
                <div className="flex border-b bg-white px-8 sticky top-0 z-10 overflow-x-auto no-scrollbar shadow-sm">
                  {[
                    { id: 'academics', label: 'Programmes', icon: BookOpen },
                    { id: 'admissions', label: 'Admissions', icon: GraduationCap },
                    { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
                    { id: 'careers', label: 'Career Outcomes', icon: Briefcase },
                    { id: 'fees', label: 'Fees & Aid', icon: DollarSign },
                    { id: 'contact', label: 'Contact', icon: Mail }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setModalTab(tab.id as any)}
                      className={`flex items-center gap-2.5 px-8 py-5 text-xs font-black transition-all border-b-[3px] shrink-0 cursor-pointer ${
                        modalTab === tab.id ? 'border-purple-600 text-purple-600' : 'border-transparent text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <tab.icon className="w-4.5 h-4.5" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-10">
                  {modalTab === 'academics' && (
                    <div className="space-y-10 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                          <h4 className="text-base font-black text-slate-900 mb-6 flex items-center gap-3">
                            <Layers className="w-5 h-5 text-purple-600" /> Degrees Offered
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedCollege.programmes.map((prog, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-purple-300 transition">
                                <Award className="w-5 h-5 text-amber-400 group-hover:scale-110 transition" />
                                <span className="text-xs font-black text-slate-700">{prog}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                          <h4 className="text-base font-black text-slate-900 mb-6 flex items-center gap-3">
                            <Palette className="w-5 h-5 text-purple-600" /> Key Disciplines
                          </h4>
                          <div className="flex flex-wrap gap-2.5">
                            {selectedCollege.specializations.map((spec, idx) => (
                              <span key={idx} className="bg-purple-50 text-purple-700 text-xs font-black px-4 py-2 rounded-xl border border-purple-100 flex items-center gap-2">
                                <Check className="w-3.5 h-3.5" />
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-12 opacity-10"><BookOpen className="w-40 h-40" /></div>
                        <h4 className="text-xl font-black mb-4 text-amber-400 italic">Institutional Overview</h4>
                        <p className="text-sm font-medium text-slate-300 leading-relaxed mb-8 max-w-3xl">
                          Affiliated with {selectedCollege.affiliatedUniversity}, this institution is recognized as a center of excellence for humanities and social sciences research.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          <div className="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                            <Building className="w-6 h-6 text-amber-400 mb-2" />
                            <p className="text-[10px] font-black text-amber-200 uppercase mb-1">Ownership</p>
                            <p className="text-sm font-black">{selectedCollege.ownership}</p>
                          </div>
                          <div className="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                            <Calendar className="w-6 h-6 text-amber-400 mb-2" />
                            <p className="text-[10px] font-black text-amber-200 uppercase mb-1">Affiliation</p>
                            <p className="text-sm font-black">{selectedCollege.affiliatedUniversity}</p>
                          </div>
                          <div className="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                            <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
                            <p className="text-[10px] font-black text-amber-200 uppercase mb-1">Recognition</p>
                            <p className="text-sm font-black">{selectedCollege.ugcRecognised ? 'UGC Recognised' : 'State University'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'admissions' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                          <h4 className="text-base font-black text-slate-900 mb-6 flex items-center gap-3">
                            <FileText className="w-5 h-5 text-purple-600" /> Eligibility & Admission Process
                          </h4>
                          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 mb-8">
                            <p className="text-xs font-bold text-slate-600 leading-relaxed italic">
                              "{selectedCollege.eligibility}"
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest ml-1">Entrance Exams Accepted</p>
                              <div className="flex flex-wrap gap-2">
                                {selectedCollege.entranceExams.map(exam => (
                                  <span key={exam} className="bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-lg">{exam}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest ml-1">Selection Method</p>
                              <p className="text-sm font-black text-slate-800">{selectedCollege.admissionProcess}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <a href={selectedCollege.admissionPortalUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white p-6 rounded-[2rem] text-center shadow-xl hover:bg-purple-700 transition group flex flex-col items-center justify-center">
                            <Globe className="w-8 h-8 mb-3 text-white/50" />
                            <span className="text-sm font-black">Official Admission Portal</span>
                          </a>
                          <a href={selectedCollege.counsellingPortalUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 p-6 rounded-[2rem] text-center border-2 border-slate-900 hover:bg-slate-50 transition flex flex-col items-center justify-center">
                            <Globe className="w-8 h-8 mb-3 text-slate-300" />
                            <span className="text-sm font-black">Counselling Website</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'infrastructure' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                        {selectedCollege.infrastructure.map((item, idx) => (
                          <div key={idx} className="bg-white p-5 rounded-[2rem] border border-slate-200 text-center hover:border-purple-400 transition shadow-sm group">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-slate-300 group-hover:bg-purple-50 group-hover:text-purple-500 transition shadow-inner">
                              <Building2 className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black text-slate-700 leading-tight block">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {modalTab === 'careers' && (
                    <div className="space-y-10 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-6 opacity-5"><Briefcase className="w-32 h-32" /></div>
                          <h4 className="text-base font-black text-slate-900 mb-6">Placements & Career Outcomes</h4>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Average Package</p>
                              <p className="text-2xl font-black text-slate-900">{selectedCollege.averagePackage}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Highest Package</p>
                              <p className="text-2xl font-black text-purple-600">{selectedCollege.highestPackage}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
                          <h4 className="text-base font-black text-slate-900 mb-6">Industry & Academic Network</h4>
                          <p className="text-sm font-bold text-slate-600 leading-relaxed">
                            {selectedCollege.industryConnect}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'fees' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-6 opacity-5"><DollarSign className="w-32 h-32" /></div>
                          <h4 className="text-base font-black text-slate-900 mb-8">Academic Fee Structure</h4>
                          <div className="space-y-6">
                            <div className="flex justify-between items-end border-b pb-6 border-slate-100">
                              <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Tuition Fees</p>
                                <p className="text-sm font-bold text-slate-500">Per Academic Year</p>
                              </div>
                              <p className="text-2xl font-black text-slate-900">{selectedCollege.tuitionFees}</p>
                            </div>
                            <div className="flex justify-between items-end border-b pb-6 border-slate-100">
                              <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Hostel Fees</p>
                                <p className="text-sm font-bold text-slate-500">Lodging & Boarding</p>
                              </div>
                              <p className="text-2xl font-black text-slate-900">{selectedCollege.hostelFees}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-purple-600 p-10 rounded-[3rem] text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><Sparkles className="w-32 h-32" /></div>
                          <h4 className="text-xl font-black mb-6">Scholarships & Financial Aid</h4>
                          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 mb-6">
                            <p className="text-sm font-bold leading-relaxed">
                              {selectedCollege.scholarships}
                            </p>
                          </div>
                          <p className="text-[11px] font-medium opacity-80 leading-relaxed italic">
                            * Financial aid is available for meritorious students and those from economically weaker sections.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'contact' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
                          <h4 className="text-base font-black text-slate-900 mb-2">Campus Location</h4>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 text-slate-600"><MapPin className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Full Postal Address</p>
                              <p className="text-sm font-bold text-slate-800">{selectedCollege.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 text-slate-600"><Phone className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Official Contact</p>
                              <p className="text-sm font-bold text-slate-800">{selectedCollege.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 text-slate-600"><Mail className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Official Email</p>
                              <p className="text-sm font-bold text-slate-800">{selectedCollege.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-[400px] bg-slate-200 rounded-[2.5rem] overflow-hidden border border-slate-300 shadow-inner relative group">
                          <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition"></div>
                          <iframe
                            title="Map"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(selectedCollege.address)}`}
                            className="grayscale opacity-80"
                          ></iframe>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <a href={selectedCollege.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black shadow-2xl pointer-events-auto hover:bg-purple-600 transition flex items-center gap-2">
                              Navigate with Maps <Map className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white border-t p-8 flex flex-wrap items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-purple-50 text-purple-700 text-[10px] font-black px-3 py-1.5 rounded-lg border border-purple-100">
                    <ShieldCheck className="w-4 h-4" /> Official Verified Source
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">Last Verified: {selectedCollege.lastVerifiedDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href={selectedCollege.website} target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-700 px-6 py-3 rounded-2xl text-xs font-black hover:bg-slate-200 transition">Visit Website</a>
                  <a href={selectedCollege.admissionPortalUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-8 py-3 rounded-2xl text-xs font-black hover:bg-purple-700 transition shadow-lg shadow-purple-200">Official Admission Link</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
