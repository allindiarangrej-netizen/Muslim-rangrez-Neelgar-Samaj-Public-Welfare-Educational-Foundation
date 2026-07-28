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
  ArrowRight
} from 'lucide-react';
import { MANAGEMENT_COLLEGES, ManagementCollegeProfile } from '../data/managementCollegesData';

interface ManagementCollegesDirectoryProps {
  currentLanguage: 'en' | 'ur' | 'hi';
}

export default function ManagementCollegesDirectory({ currentLanguage = 'en' }: ManagementCollegesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'mba' | 'bba' | 'executive' | 'accreditation'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Advanced Filter States
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const [selectedNaacGrade, setSelectedNaacGrade] = useState('All');
  const [selectedNIRF, setSelectedNIRF] = useState('All');
  const [placementOnly, setPlacementOnly] = useState(false);

  // Sorting
  const [sortBy, setSortBy] = useState<'alphabetical' | 'nirf-asc' | 'fee-asc' | 'fee-desc' | 'placement-desc' | 'established-asc'>('alphabetical');

  // Modal Detail State
  const [selectedCollege, setSelectedCollege] = useState<ManagementCollegeProfile | null>(null);
  const [modalTab, setModalTab] = useState<'academics' | 'admissions' | 'infrastructure' | 'placements' | 'fees' | 'contact'>('academics');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Extract lists for filters
  const statesList = useMemo(() => {
    const states = new Set(MANAGEMENT_COLLEGES.map(c => c.state));
    return ['All', ...Array.from(states).sort()];
  }, []);

  const citiesList = useMemo(() => {
    const filtered = MANAGEMENT_COLLEGES.filter(c => selectedState === 'All' || c.state === selectedState);
    const cities = new Set(filtered.map(c => c.city));
    return ['All', ...Array.from(cities).sort()];
  }, [selectedState]);

  const ownershipTypes = ['All', 'Government', 'Private', 'Autonomous', 'Deemed University', 'Minority Institution'];
  const nirfRanges = ['All', 'Top 10', 'Top 50', 'Top 100'];

  // Filter Logic
  const filteredColleges = useMemo(() => {
    let result = [...MANAGEMENT_COLLEGES];

    // Tab filtering
    if (activeTab === 'mba') {
      result = result.filter(c => c.programmes.some(p => p.includes('MBA') || p.includes('PGDM')));
    } else if (activeTab === 'bba') {
      result = result.filter(c => c.programmes.some(p => p.includes('BBA') || p.includes('BMS')));
    } else if (activeTab === 'executive') {
      result = result.filter(c => c.programmes.some(p => p.toLowerCase().includes('executive')));
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
        const rank = parseInt(c.nirfRanking);
        if (isNaN(rank)) return false;
        if (selectedNIRF === 'Top 10') return rank <= 10;
        if (selectedNIRF === 'Top 50') return rank <= 50;
        if (selectedNIRF === 'Top 100') return rank <= 100;
        return true;
      });
    }

    if (placementOnly) result = result.filter(c => c.hasPlacementCell);

    result.sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical': return a.name.localeCompare(b.name);
        case 'nirf-asc': {
          const rA = parseInt(a.nirfRanking) || 999;
          const rB = parseInt(b.nirfRanking) || 999;
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
        case 'placement-desc': {
          const packA = parseFloat(a.highestPackage.replace(/[^0-9.]/g, '')) || 0;
          const packB = parseFloat(b.highestPackage.replace(/[^0-9.]/g, '')) || 0;
          return packB - packA;
        }
        case 'established-asc': return a.yearEstablished - b.yearEstablished;
        default: return 0;
      }
    });

    return result;
  }, [activeTab, searchQuery, selectedState, selectedCity, selectedOwnership, selectedNaacGrade, selectedNIRF, placementOnly, sortBy]);

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
    setPlacementOnly(false);
    setSortBy('alphabetical');
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen text-slate-800 font-sans pb-16">
      
      {/* HERO BANNER */}
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-[#3b82f6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-widest shadow-xl">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span>
                {currentLanguage === 'en'
                  ? 'Business & Management Excellence'
                  : currentLanguage === 'ur'
                  ? 'انتظامیہ اور بزنس ایجوکیشن'
                  : 'व्यापार एवं प्रबंधन उत्कृष्टता'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-3 py-1.5 rounded-xl shadow-lg">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {currentLanguage === 'en'
                  ? '50+ Verified B-Schools'
                  : '50+ تصدیق شدہ بزنس اسکولز'}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {currentLanguage === 'en'
              ? 'National Management Colleges Directory'
              : currentLanguage === 'ur'
              ? 'قومی مینجمنٹ کالجز ڈائریکٹری'
              : 'राष्ट्रीय प्रबंधन कॉलेज निर्देशिका'}
          </h1>

          <p className="text-base text-slate-300 max-w-3xl leading-relaxed mb-8 font-medium">
            Discover India's top-tier Management Institutions, from prestigious IIMs to leading private B-Schools. Explore MBA, PGDM, and BBA programs with global accreditations (AACSB, EQUIS, AMBA) and industry-leading placements.
          </p>

          {/* TABS */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              { id: 'directory', label: 'All Institutions', icon: Layers },
              { id: 'mba', label: 'MBA/PGDM', icon: GraduationCap },
              { id: 'bba', label: 'Undergraduate', icon: BookOpen },
              { id: 'executive', label: 'Executive Programs', icon: Briefcase },
              { id: 'accreditation', label: 'Accreditation Guide', icon: Award }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as any); setCurrentPage(1); }}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-lg border-2 ${
                  activeTab === tab.id ? 'bg-[#3b82f6] text-white border-white' : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border-slate-700/50'
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
        {(activeTab === 'directory' || activeTab === 'mba' || activeTab === 'bba' || activeTab === 'executive') && (
          <div className="space-y-8">
            
            {/* SEARCH & FILTERS */}
            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-slate-200 space-y-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by college name, city, or specialization (Finance, Analytics)..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-bold bg-slate-50 shadow-inner"
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
                      <option value="placement-desc">Sort: Highest Package</option>
                      <option value="established-asc">Sort: Established</option>
                    </select>
                  </div>

                  <button onClick={resetFilters} className="bg-slate-900 text-white px-6 py-3.5 rounded-2xl text-xs font-black hover:bg-slate-800 transition shadow-lg">
                    Reset
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-6 border-t border-slate-100">
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
                    {nirfRanges.map(r => <option key={r} value={r}>{r === 'All' ? 'Select Range' : r}</option>)}
                  </select>
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-3 cursor-pointer bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5 w-full">
                    <input type="checkbox" checked={placementOnly} onChange={(e) => { setPlacementOnly(e.target.checked); setCurrentPage(1); }} className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
                    <span className="text-xs font-black text-blue-700">Placement Cell</span>
                  </label>
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
                        <span className="bg-blue-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border border-white/30">NIRF #{college.nirfRanking}</span>
                        <span className="bg-emerald-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-lg border border-white/30">AICTE Approved</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-white rounded-xl p-2 shadow-md border border-slate-100 shrink-0 -mt-10 relative z-10">
                        <img src={college.logoUrl} className="w-full h-full object-contain" alt="Logo" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition leading-tight mb-1">
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
                        <span className="text-[9px] font-black text-slate-400 uppercase block mb-0.5">Avg Package</span>
                        <span className="text-sm font-black text-emerald-700">{college.averagePackage}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                        <span className="text-[9px] font-black text-slate-400 uppercase block mb-0.5">Ownership</span>
                        <span className="text-sm font-black text-slate-700">{college.ownership}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="text-[9px] font-black text-slate-400 uppercase block mb-2">Key Specializations</span>
                      <div className="flex flex-wrap gap-1.5">
                        {college.specializations.slice(0, 3).map((spec, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 text-[10px] font-black px-2.5 py-1 rounded-lg border border-blue-100">
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
                      className="w-full mt-auto bg-slate-900 text-white text-xs font-black py-4 rounded-2xl hover:bg-blue-600 transition flex items-center justify-center gap-2 group/btn shadow-lg"
                    >
                      View Detailed Profile
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-10">
                <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-blue-600 disabled:opacity-40 shadow-sm transition"><ChevronRight className="w-6 h-6 rotate-180" /></button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                  <button key={num} onClick={() => setCurrentPage(num)} className={`w-12 h-12 rounded-2xl text-sm font-black transition-all ${currentPage === num ? 'bg-blue-600 text-white shadow-xl scale-110' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-blue-400 shadow-sm'}`}>{num}</button>
                ))}
                <button onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-blue-600 disabled:opacity-40 shadow-sm transition"><ChevronRight className="w-6 h-6" /></button>
              </div>
            )}
          </div>
        )}

        {/* ACCREDITATION TAB */}
        {activeTab === 'accreditation' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-blue-600" />
                Global & National Accreditations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                    <h4 className="text-lg font-black text-blue-900 mb-2">AACSB</h4>
                    <p className="text-xs font-bold text-blue-700 leading-relaxed">The Association to Advance Collegiate Schools of Business. The "Gold Standard" of international accreditation.</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                    <h4 className="text-lg font-black text-emerald-900 mb-2">EQUIS</h4>
                    <p className="text-xs font-bold text-emerald-700 leading-relaxed">European Quality Improvement System. Awarded to high-quality business schools with international reach.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
                    <h4 className="text-lg font-black text-purple-900 mb-2">AMBA</h4>
                    <p className="text-xs font-bold text-purple-700 leading-relaxed">Association of MBAs. Specifically focuses on MBA, DBA, and Masters in Business & Management programs.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h4 className="text-lg font-black text-slate-900 mb-2">NIRF</h4>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">National Institutional Ranking Framework by MoE, India. The primary national ranking system.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-6 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                <div className="absolute right-0 top-0 p-8 opacity-10"><Info className="w-24 h-24" /></div>
                <h4 className="text-lg font-black mb-2 text-blue-400">Triple Crown Schools</h4>
                <p className="text-sm font-medium leading-relaxed opacity-90">Only a few business schools in India (like IIM Ahmedabad, Bangalore, Calcutta, XLRI) hold the "Triple Crown" status, having accreditations from AACSB, EQUIS, and AMBA simultaneously.</p>
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
                        <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-xl shadow-lg border border-blue-400/30">NIRF Ranking #{selectedCollege.nirfRanking}</span>
                        {selectedCollege.accreditations?.map(acc => (
                          <span key={acc} className="bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-xl shadow-lg border border-emerald-400/30">{acc}</span>
                        ))}
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-2 tracking-tight">{selectedCollege.name}</h2>
                      <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-bold">
                        <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-400" /> {selectedCollege.city}, {selectedCollege.state}</div>
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                        <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-400" /> Established {selectedCollege.yearEstablished}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto bg-slate-50">
                <div className="flex border-b bg-white px-8 sticky top-0 z-10 overflow-x-auto no-scrollbar shadow-sm">
                  {[
                    { id: 'academics', label: 'Academics', icon: BookOpen },
                    { id: 'admissions', label: 'Admissions', icon: GraduationCap },
                    { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
                    { id: 'placements', label: 'Placements', icon: Briefcase },
                    { id: 'fees', label: 'Fees & Aid', icon: DollarSign },
                    { id: 'contact', label: 'Contact', icon: Mail }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setModalTab(tab.id as any)}
                      className={`flex items-center gap-2.5 px-8 py-5 text-xs font-black transition-all border-b-[3px] shrink-0 cursor-pointer ${
                        modalTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'
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
                            <Layers className="w-5 h-5 text-blue-600" /> Management Degrees
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedCollege.programmes.map((prog, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-300 transition">
                                <Award className="w-5 h-5 text-blue-400 group-hover:scale-110 transition" />
                                <span className="text-xs font-black text-slate-700">{prog}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                          <h4 className="text-base font-black text-slate-900 mb-6 flex items-center gap-3">
                            <PieChart className="w-5 h-5 text-blue-600" /> Core Specializations
                          </h4>
                          <div className="flex flex-wrap gap-2.5">
                            {selectedCollege.specializations.map((spec, idx) => (
                              <span key={idx} className="bg-blue-50 text-blue-700 text-xs font-black px-4 py-2 rounded-xl border border-blue-100 flex items-center gap-2">
                                <Check className="w-3.5 h-3.5" />
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-12 opacity-10"><BarChart className="w-40 h-40" /></div>
                        <h4 className="text-xl font-black mb-4 text-blue-400 italic">Academic & Industry Integration</h4>
                        <p className="text-sm font-medium text-slate-300 leading-relaxed mb-8 max-w-3xl">
                          {selectedCollege.industryConnect}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          <div className="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                            <Users className="w-6 h-6 text-blue-400 mb-2" />
                            <p className="text-[10px] font-black text-blue-200 uppercase mb-1">Director</p>
                            <p className="text-sm font-black">{selectedCollege.director}</p>
                          </div>
                          {selectedCollege.dean && (
                            <div className="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                              <User className="w-6 h-6 text-blue-400 mb-2" />
                              <p className="text-[10px] font-black text-blue-200 uppercase mb-1">Dean Academics</p>
                              <p className="text-sm font-black">{selectedCollege.dean}</p>
                            </div>
                          )}
                          <div className="bg-white/10 p-5 rounded-3xl border border-white/10 backdrop-blur-md">
                            <Building className="w-6 h-6 text-blue-400 mb-2" />
                            <p className="text-[10px] font-black text-blue-200 uppercase mb-1">Affiliation</p>
                            <p className="text-sm font-black truncate">{selectedCollege.affiliatedUniversity}</p>
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
                            <FileText className="w-5 h-5 text-blue-600" /> Admission Policy & Eligibility
                          </h4>
                          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 mb-8">
                            <p className="text-xs font-bold text-slate-600 leading-relaxed italic">
                              "{selectedCollege.eligibility}"
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest ml-1">Entrance Exams</p>
                              <div className="flex flex-wrap gap-2">
                                {selectedCollege.entranceExams.map(exam => (
                                  <span key={exam} className="bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-lg">{exam}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest ml-1">Selection Cycle</p>
                              <p className="text-sm font-black text-slate-800">{selectedCollege.admissionProcess}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <a href={selectedCollege.admissionPortalUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-6 rounded-[2rem] text-center shadow-xl hover:bg-blue-700 transition group flex flex-col items-center justify-center">
                            <FastIcon className="w-8 h-8 mb-3 text-white/50" />
                            <span className="text-sm font-black">Official Admission Portal</span>
                            <span className="text-[10px] opacity-60 mt-1">Apply for 2024-25 Batch</span>
                          </a>
                          <a href={selectedCollege.website} target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 p-6 rounded-[2rem] text-center border-2 border-slate-900 hover:bg-slate-50 transition flex flex-col items-center justify-center">
                            <Globe className="w-8 h-8 mb-3 text-slate-300" />
                            <span className="text-sm font-black">Download Prospectus</span>
                            <span className="text-[10px] text-slate-400 mt-1">Full Course Syllabus & Rules</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'infrastructure' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                        {selectedCollege.infrastructure.map((item, idx) => (
                          <div key={idx} className="bg-white p-5 rounded-[2rem] border border-slate-200 text-center hover:border-blue-400 transition shadow-sm group">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-500 transition shadow-inner">
                              <Building2 className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black text-slate-700 leading-tight block">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {modalTab === 'placements' && (
                    <div className="space-y-10 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm text-center relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition duration-500"><TrendingUp className="w-20 h-20" /></div>
                          <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Average Package</p>
                          <p className="text-3xl font-black text-slate-900 mb-1">{selectedCollege.averagePackage}</p>
                          <p className="text-[10px] font-bold text-emerald-600">Top 5% ROI in India</p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 shadow-xl text-center relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition duration-500"><Award className="w-20 h-20 text-blue-400" /></div>
                          <p className="text-[10px] font-black text-blue-300 uppercase mb-2 tracking-widest">Highest Package</p>
                          <p className="text-3xl font-black text-blue-400 mb-1">{selectedCollege.highestPackage}</p>
                          <p className="text-[10px] font-bold text-white/40">Verified Audit 2023</p>
                        </div>
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center">
                          <Briefcase className="w-10 h-10 text-blue-500 mb-4" />
                          <div className="px-5 py-2.5 rounded-2xl bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase border border-emerald-200">
                            100% Placement Record
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
                        <h4 className="text-sm font-black text-slate-400 uppercase text-center mb-8 tracking-[0.2em]">Platinum Recruitment Partners</h4>
                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70">
                          {selectedCollege.topRecruiters.map(rec => (
                            <span key={rec} className="text-lg font-black text-slate-400 hover:text-slate-900 transition cursor-default">{rec}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'fees' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-6 opacity-5"><DollarSign className="w-32 h-32" /></div>
                          <h4 className="text-base font-black text-slate-900 mb-8">Estimated Course Expenditure</h4>
                          <div className="space-y-6">
                            <div className="flex justify-between items-end border-b pb-6 border-slate-100">
                              <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Tuition Fees</p>
                                <p className="text-sm font-bold text-slate-500">Academic & Course Material</p>
                              </div>
                              <p className="text-2xl font-black text-slate-900">{selectedCollege.tuitionFees}</p>
                            </div>
                            <div className="flex justify-between items-end border-b pb-6 border-slate-100">
                              <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Hostel & Living</p>
                                <p className="text-sm font-bold text-slate-500">Shared Accommodation</p>
                              </div>
                              <p className="text-2xl font-black text-slate-900">{selectedCollege.hostelFees}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue-600 p-10 rounded-[3rem] text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><Sparkles className="w-32 h-32" /></div>
                          <h4 className="text-xl font-black mb-6">Financial Aid & Scholarships</h4>
                          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 mb-6">
                            <p className="text-sm font-bold leading-relaxed">
                              {selectedCollege.scholarships}
                            </p>
                          </div>
                          <p className="text-[11px] font-medium opacity-80 leading-relaxed italic">
                            * Education loan assistance is available through tie-ups with leading banks (SBI, HDFC, ICICI) with special low-interest rates for premier B-schools.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === 'contact' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
                          <h4 className="text-base font-black text-slate-900 mb-2">Campus Information</h4>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 text-slate-600"><MapPin className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Official Address</p>
                              <p className="text-sm font-bold text-slate-800">{selectedCollege.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 text-slate-600"><Phone className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Admission Desk</p>
                              <p className="text-sm font-bold text-slate-800">{selectedCollege.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 text-slate-600"><Mail className="w-5 h-5" /></div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Email ID</p>
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
                            <a href={selectedCollege.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black shadow-2xl pointer-events-auto hover:bg-blue-600 transition flex items-center gap-2">
                              Open in Google Maps <Map className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white border-t p-8 flex flex-wrap gap-4 items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-bold">
                  <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> AICTE Approved</div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Last Verified: {selectedCollege.lastVerifiedDate}</div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-slate-100 text-slate-600 px-6 py-4 rounded-2xl text-sm font-black hover:bg-slate-200 transition flex items-center gap-2">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <a href={selectedCollege.website} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-sm font-black hover:bg-blue-700 transition shadow-xl shadow-blue-500/20 flex items-center gap-2">
                    Visit Official Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER BADGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 flex justify-center">
        <div className="bg-white border border-slate-200 rounded-full px-8 py-4 flex items-center gap-6 shadow-sm">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Verified Sources Only</span>
          </div>
          <div className="w-px h-4 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-500" />
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">AICTE • NIRF • NAAC</span>
          </div>
        </div>
      </div>

    </div>
  );
}
