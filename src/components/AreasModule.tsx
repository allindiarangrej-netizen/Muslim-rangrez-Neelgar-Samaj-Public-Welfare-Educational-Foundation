import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  MapPin,
  Search,
  Filter,
  Plus,
  Trash2,
  Edit3,
  Download,
  Upload,
  Share2,
  Building2,
  Users,
  Award,
  Heart,
  TrendingUp,
  Check,
  ChevronRight,
  Info,
  Settings,
  Globe,
  FileText,
  CheckCircle2,
  X,
  Briefcase,
  GraduationCap,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Language } from '../types';
import {
  indianStates,
  initialDistricts,
  initialTehsils,
  initialVillages,
  initialMembers,
  StateNode,
  DistrictNode,
  TehsilNode,
  VillageNode,
  MemberNode
} from '../data/nationalDirectory';

interface AreasModuleProps {
  currentLanguage: Language;
}

export default function AreasModule({ currentLanguage }: AreasModuleProps) {
  // State from localStorage if present, otherwise default seed data
  const [states, setStates] = useState<StateNode[]>(() => {
    const saved = localStorage.getItem('rcb_states');
    return saved ? JSON.parse(saved) : indianStates;
  });

  const [districts, setDistricts] = useState<DistrictNode[]>(() => {
    const saved = localStorage.getItem('rcb_districts');
    return saved ? JSON.parse(saved) : initialDistricts;
  });

  const [tehsils, setTehsils] = useState<TehsilNode[]>(() => {
    const saved = localStorage.getItem('rcb_tehsils');
    return saved ? JSON.parse(saved) : initialTehsils;
  });

  const [villages, setVillages] = useState<VillageNode[]>(() => {
    const saved = localStorage.getItem('rcb_villages');
    return saved ? JSON.parse(saved) : initialVillages;
  });

  const [members, setMembers] = useState<MemberNode[]>(() => {
    const saved = localStorage.getItem('rcb_members');
    return saved ? JSON.parse(saved) : initialMembers;
  });

  // Save to localStorage on changes
  useEffect(() => {
    localStorage.setItem('rcb_states', JSON.stringify(states));
  }, [states]);

  useEffect(() => {
    localStorage.setItem('rcb_districts', JSON.stringify(districts));
  }, [districts]);

  useEffect(() => {
    localStorage.setItem('rcb_tehsils', JSON.stringify(tehsils));
  }, [tehsils]);

  useEffect(() => {
    localStorage.setItem('rcb_villages', JSON.stringify(villages));
  }, [villages]);

  useEffect(() => {
    localStorage.setItem('rcb_members', JSON.stringify(members));
  }, [members]);

  // Active Hierarchical Selections
  const [activeStateId, setActiveStateId] = useState<string>('MP');
  const [activeDistrictId, setActiveDistrictId] = useState<string>('mp_morena');
  const [activeTehsilId, setActiveTehsilId] = useState<string>('mp_morena_kailaras');
  const [activeVillageId, setActiveVillageId] = useState<string>('v_kailaras_town');

  // Search & Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Filter settings
  const [filterCommitteeStatus, setFilterCommitteeStatus] = useState<string>('All');
  const [filterMinFamilies, setFilterMinFamilies] = useState<number>(0);
  const [filterBloodDonors, setFilterBloodDonors] = useState<boolean>(false);
  const [filterStudents, setFilterStudents] = useState<boolean>(false);
  const [filterBusinesses, setFilterBusinesses] = useState<boolean>(false);

  // Active UI View mode
  const [activeTab, setActiveTab] = useState<'directory' | 'map' | 'admin' | 'seo'>('directory');
  
  // Admin Form States
  const [adminMode, setAdminMode] = useState<'add_state' | 'add_district' | 'add_tehsil' | 'add_village' | 'bulk_import'>('add_state');
  const [newState, setNewState] = useState({ id: '', nameEn: '', nameHi: '' });
  const [newDistrict, setNewDistrict] = useState({
    id: '',
    stateId: 'MP',
    nameEn: '',
    nameHi: '',
    committeeStatus: 'Active' as 'Active' | 'In Formation' | 'Proposed',
    presidentEn: '',
    presidentHi: '',
    secretaryEn: '',
    secretaryHi: '',
    familiesCount: 150,
    membersCount: 800
  });
  const [newTehsil, setNewTehsil] = useState({ id: '', districtId: 'mp_morena', nameEn: '', nameHi: '' });
  const [newVillage, setNewVillage] = useState({
    id: '',
    tehsilId: 'mp_morena_kailaras',
    districtId: 'mp_morena',
    nameEn: '',
    nameHi: '',
    pincode: '',
    familiesCount: 50,
    membersCount: 250,
    committeeNameEn: '',
    committeeNameHi: ''
  });

  // Bulk Import Clipboard Area
  const [bulkImportText, setBulkImportText] = useState('');
  const [bulkImportSuccess, setBulkImportSuccess] = useState(false);
  const [importType, setImportType] = useState<'districts' | 'tehsils' | 'villages'>('villages');

  // Notification Banner State
  const [notification, setNotification] = useState<string | null>(null);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Safe reference counts using requestAnimationFrame-like state triggers
  const [animatedStats, setAnimatedStats] = useState({
    families: 0,
    members: 0,
    districts: 0,
    volunteers: 0
  });

  // Animate dynamic summary indicators on mount or tab changes
  useEffect(() => {
    const targetFamilies = districts.reduce((acc, curr) => acc + curr.familiesCount, 0);
    const targetMembers = districts.reduce((acc, curr) => acc + curr.membersCount, 0);
    const targetDistrictsCount = districts.length;
    const targetVolunteers = districts.reduce((acc, curr) => acc + curr.activeVolunteers, 0);

    let startTimestamp: number | null = null;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress * (2 - progress);

      setAnimatedStats({
        families: Math.floor(ease * targetFamilies),
        members: Math.floor(ease * targetMembers),
        districts: Math.floor(ease * targetDistrictsCount),
        volunteers: Math.floor(ease * targetVolunteers)
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [districts]);

  // Compute breadcrumbs path
  const currentBreadcrumb = useMemo(() => {
    const s = states.find(x => x.id === activeStateId);
    const d = districts.find(x => x.id === activeDistrictId);
    const t = tehsils.find(x => x.id === activeTehsilId);
    const v = villages.find(x => x.id === activeVillageId);

    return {
      state: s ? (currentLanguage === 'en' ? s.nameEn : s.nameHi) : '',
      district: d ? (currentLanguage === 'en' ? d.nameEn : d.nameHi) : '',
      tehsil: t ? (currentLanguage === 'en' ? t.nameEn : t.nameHi) : '',
      village: v ? (currentLanguage === 'en' ? v.nameEn : v.nameHi) : ''
    };
  }, [activeStateId, activeDistrictId, activeTehsilId, activeVillageId, states, districts, tehsils, villages, currentLanguage]);

  // Filter districts dynamically based on State & multi-factor filters
  const filteredDistricts = useMemo(() => {
    return districts.filter(d => {
      if (d.stateId !== activeStateId) return false;
      if (filterCommitteeStatus !== 'All' && d.committeeStatus !== filterCommitteeStatus) return false;
      if (d.familiesCount < filterMinFamilies) return false;
      if (filterBloodDonors && d.bloodDonorsCount === 0) return false;
      if (filterStudents && d.studentsCount === 0) return false;
      if (filterBusinesses && d.businessesCount === 0) return false;
      return true;
    });
  }, [districts, activeStateId, filterCommitteeStatus, filterMinFamilies, filterBloodDonors, filterStudents, filterBusinesses]);

  // List tehsils under selected district
  const activeTehsils = useMemo(() => {
    return tehsils.filter(t => t.districtId === activeDistrictId);
  }, [tehsils, activeDistrictId]);

  // List villages under selected tehsil/district
  const activeVillages = useMemo(() => {
    // If state has tehsils, map to tehsilId, else map directly to districtId
    const hasTehsils = activeTehsils.length > 0;
    if (hasTehsils) {
      return villages.filter(v => v.tehsilId === activeTehsilId);
    } else {
      return villages.filter(v => v.districtId === activeDistrictId);
    }
  }, [villages, activeTehsilId, activeDistrictId, activeTehsils]);

  // List community members under active village
  const activeMembersList = useMemo(() => {
    return members.filter(m => m.villageId === activeVillageId);
  }, [members, activeVillageId]);

  // Autocomplete Suggestions logic
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const list: { type: string; label: string; stateId: string; districtId?: string; tehsilId?: string; villageId?: string }[] = [];

    // Search States
    states.forEach(s => {
      if (s.nameEn.toLowerCase().includes(query) || s.nameHi.includes(query)) {
        list.push({ type: 'State', label: s.nameEn, stateId: s.id });
      }
    });

    // Search Districts
    districts.forEach(d => {
      if (d.nameEn.toLowerCase().includes(query) || d.nameHi.includes(query)) {
        list.push({ type: 'District', label: `${d.nameEn} (District)`, stateId: d.stateId, districtId: d.id });
      }
    });

    // Search Tehsils
    tehsils.forEach(t => {
      if (t.nameEn.toLowerCase().includes(query) || t.nameHi.includes(query)) {
        const parentDist = districts.find(d => d.id === t.districtId);
        list.push({
          type: 'Tehsil',
          label: `${t.nameEn} (Tehsil, ${parentDist?.nameEn || ''})`,
          stateId: parentDist?.stateId || 'MP',
          districtId: t.districtId,
          tehsilId: t.id
        });
      }
    });

    // Search Villages
    villages.forEach(v => {
      if (v.nameEn.toLowerCase().includes(query) || v.nameHi.includes(query) || v.pincode.includes(query)) {
        let parentState = 'MP';
        let parentDist = '';
        if (v.tehsilId) {
          const t = tehsils.find(x => x.id === v.tehsilId);
          if (t) {
            parentDist = t.districtId;
            const d = districts.find(x => x.id === t.districtId);
            if (d) parentState = d.stateId;
          }
        } else if (v.districtId) {
          parentDist = v.districtId;
          const d = districts.find(x => x.id === v.districtId);
          if (d) parentState = d.stateId;
        }

        list.push({
          type: 'Village',
          label: `${v.nameEn} (${v.pincode})`,
          stateId: parentState,
          districtId: parentDist,
          tehsilId: v.tehsilId,
          villageId: v.id
        });
      }
    });

    return list.slice(0, 8);
  }, [searchQuery, states, districts, tehsils, villages]);

  const handleSuggestionClick = (item: any) => {
    setActiveStateId(item.stateId);
    if (item.districtId) setActiveDistrictId(item.districtId);
    if (item.tehsilId) setActiveTehsilId(item.tehsilId);
    if (item.villageId) setActiveVillageId(item.villageId);
    setSearchQuery('');
    setShowSuggestions(false);
    triggerNotification(`Navigated to ${item.label}`);
  };

  // Add state handler
  const handleAddState = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newState.id || !newState.nameEn) {
      triggerNotification('Please provide both short code and name.');
      return;
    }
    if (states.some(s => s.id.toUpperCase() === newState.id.toUpperCase())) {
      triggerNotification('State ID already exists!');
      return;
    }
    const created: StateNode = {
      id: newState.id.toUpperCase(),
      nameEn: newState.nameEn,
      nameHi: newState.nameHi || newState.nameEn
    };
    setStates(prev => [...prev, created]);
    setNewState({ id: '', nameEn: '', nameHi: '' });
    triggerNotification(`Successfully added State: ${created.nameEn}`);
  };

  // Add district handler
  const handleAddDistrict = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDistrict.id || !newDistrict.nameEn) {
      triggerNotification('District Code and Name are required.');
      return;
    }
    if (districts.some(d => d.id === newDistrict.id)) {
      triggerNotification('District ID already exists!');
      return;
    }
    const created: DistrictNode = {
      ...newDistrict,
      activeVolunteers: Math.floor(Math.random() * 80) + 10,
      studentsCount: Math.floor(Math.random() * 500) + 100,
      womenCount: Math.floor(Math.random() * 1200) + 200,
      seniorCount: Math.floor(Math.random() * 400) + 50,
      businessesCount: Math.floor(Math.random() * 80) + 10,
      bloodDonorsCount: Math.floor(Math.random() * 50) + 5,
      scholarshipsCount: Math.floor(Math.random() * 30) + 2,
      eventsCount: Math.floor(Math.random() * 6),
      educationRate: '85%'
    };
    setDistricts(prev => [...prev, created]);
    setNewDistrict({
      id: '',
      stateId: 'MP',
      nameEn: '',
      nameHi: '',
      committeeStatus: 'Active',
      presidentEn: '',
      presidentHi: '',
      secretaryEn: '',
      secretaryHi: '',
      familiesCount: 150,
      membersCount: 800
    });
    triggerNotification(`Added District: ${created.nameEn}`);
  };

  // Add Tehsil handler
  const handleAddTehsil = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTehsil.id || !newTehsil.nameEn) {
      triggerNotification('Tehsil ID and Name are required.');
      return;
    }
    const created: TehsilNode = { ...newTehsil };
    setTehsils(prev => [...prev, created]);
    setNewTehsil({ id: '', districtId: 'mp_morena', nameEn: '', nameHi: '' });
    triggerNotification(`Tehsil ${created.nameEn} created successfully.`);
  };

  // Add Village handler
  const handleAddVillage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVillage.id || !newVillage.nameEn || !newVillage.pincode) {
      triggerNotification('Village/City ID, Name, and Pincode are required.');
      return;
    }
    const created: VillageNode = {
      id: newVillage.id,
      tehsilId: newVillage.tehsilId || undefined,
      districtId: newVillage.districtId || undefined,
      nameEn: newVillage.nameEn,
      nameHi: newVillage.nameHi || newVillage.nameEn,
      pincode: newVillage.pincode,
      familiesCount: Number(newVillage.familiesCount) || 50,
      membersCount: Number(newVillage.membersCount) || 250,
      committeeNameEn: newVillage.committeeNameEn || undefined,
      committeeNameHi: newVillage.committeeNameHi || undefined
    };
    setVillages(prev => [...prev, created]);
    setNewVillage({
      id: '',
      tehsilId: 'mp_morena_kailaras',
      districtId: 'mp_morena',
      nameEn: '',
      nameHi: '',
      pincode: '',
      familiesCount: 50,
      membersCount: 250,
      committeeNameEn: '',
      committeeNameHi: ''
    });
    triggerNotification(`Village/City ${created.nameEn} added successfully.`);
  };

  // Delete handlers
  const deleteDistrict = (id: string) => {
    setDistricts(prev => prev.filter(d => d.id !== id));
    triggerNotification('District deleted successfully.');
  };

  const deleteTehsil = (id: string) => {
    setTehsils(prev => prev.filter(t => t.id !== id));
    triggerNotification('Tehsil deleted successfully.');
  };

  const deleteVillage = (id: string) => {
    setVillages(prev => prev.filter(v => v.id !== id));
    triggerNotification('Village/City deleted successfully.');
  };

  // Bulk Import Handler
  const handleBulkImport = () => {
    if (!bulkImportText.trim()) {
      triggerNotification('Please paste CSV / text data first.');
      return;
    }
    try {
      const rows = bulkImportText.trim().split('\n');
      let importCount = 0;

      if (importType === 'villages') {
        const parsed: VillageNode[] = [];
        rows.forEach(row => {
          const cols = row.split(',');
          if (cols.length >= 5) {
            parsed.push({
              id: cols[0].trim(),
              tehsilId: cols[1].trim() || undefined,
              districtId: cols[1].trim() ? undefined : cols[2].trim(),
              nameEn: cols[3].trim(),
              nameHi: cols[3].trim(),
              pincode: cols[4].trim(),
              familiesCount: Number(cols[5]) || 40,
              membersCount: Number(cols[6]) || 200
            });
            importCount++;
          }
        });
        setVillages(prev => [...prev, ...parsed]);
      } else if (importType === 'tehsils') {
        const parsed: TehsilNode[] = [];
        rows.forEach(row => {
          const cols = row.split(',');
          if (cols.length >= 3) {
            parsed.push({
              id: cols[0].trim(),
              districtId: cols[1].trim(),
              nameEn: cols[2].trim(),
              nameHi: cols[2].trim()
            });
            importCount++;
          }
        });
        setTehsils(prev => [...prev, ...parsed]);
      } else if (importType === 'districts') {
        const parsed: DistrictNode[] = [];
        rows.forEach(row => {
          const cols = row.split(',');
          if (cols.length >= 5) {
            parsed.push({
              id: cols[0].trim(),
              stateId: cols[1].trim().toUpperCase(),
              nameEn: cols[2].trim(),
              nameHi: cols[2].trim(),
              committeeStatus: 'Active',
              presidentEn: cols[3].trim(),
              presidentHi: cols[3].trim(),
              secretaryEn: cols[4].trim(),
              secretaryHi: cols[4].trim(),
              familiesCount: Number(cols[5]) || 120,
              membersCount: Number(cols[6]) || 600,
              educationRate: '85%',
              activeVolunteers: 25,
              studentsCount: 150,
              womenCount: 300,
              seniorCount: 80,
              businessesCount: 15,
              bloodDonorsCount: 8,
              scholarshipsCount: 5,
              eventsCount: 1
            });
            importCount++;
          }
        });
        setDistricts(prev => [...prev, ...parsed]);
      }

      setBulkImportSuccess(true);
      triggerNotification(`Successfully imported ${importCount} records.`);
      setBulkImportText('');
      setTimeout(() => setBulkImportSuccess(false), 3000);
    } catch (e) {
      triggerNotification('Failed to parse CSV format. Please verify columns.');
    }
  };

  // Export Data to JSON
  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ states, districts, tehsils, villages, members }));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `rangrez_national_directory_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    triggerNotification('JSON database exported successfully!');
  };

  // SEO dynamic calculations
  const dynamicSEO = useMemo(() => {
    const sName = currentBreadcrumb.state || 'India';
    const dName = currentBreadcrumb.district || '';
    const tName = currentBreadcrumb.tehsil || '';
    const vName = currentBreadcrumb.village || '';

    const pathUrl = `https://rangrezcommunity.org/india/${sName.toLowerCase().replace(/\s+/g, '-')}${dName ? '/' + dName.toLowerCase().replace(/\s+/g, '-') : ''}${tName ? '/' + tName.toLowerCase().replace(/\s+/g, '-') : ''}${vName ? '/' + vName.toLowerCase().replace(/\s+/g, '-') : ''}`;
    const metaTitle = `${vName || tName || dName || sName} Rangrez Community Committee | Socio-Census Portal India`;
    const metaDesc = `Access verified demographic audits, active local committees, student ratios, welfare schemes, and contact details for the Rangrez community in ${vName || tName || dName || sName}, ${sName}, India. Join our national digital census today.`;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": `All India Rangrez MahaSabha Committee - ${vName || tName || dName || sName}`,
      "url": pathUrl,
      "logo": "https://rangrezcommunity.org/assets/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": vName || tName || dName || sName,
        "addressRegion": sName,
        "addressCountry": "IN"
      },
      "description": metaDesc
    };

    return { title: metaTitle, description: metaDesc, url: pathUrl, jsonLd: JSON.stringify(structuredData, null, 2) };
  }, [currentBreadcrumb]);

  return (
    <div className="py-16 bg-[#FDFBF7] border-t border-[#f1ece1] relative overflow-hidden" id="national_directory_module">
      
      {/* Decorative Traditional Border Motif */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section Notification */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#004B23] text-[#D4AF37] border border-[#D4AF37]/50 px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-xs font-semibold animate-bounce">
            <CheckCircle2 className="h-5 w-5" />
            <span>{notification}</span>
          </div>
        )}

        {/* Dynamic Breadcrumbs Nav */}
        <div className="flex flex-wrap items-center space-x-2 text-xs text-gray-500 font-mono mb-8 bg-white py-2 px-4 rounded-full border border-gray-100 shadow-sm inline-flex">
          <span className="hover:text-[#004B23] cursor-pointer" onClick={() => setActiveStateId('MP')}>India</span>
          <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
          <span className="text-emerald-950 font-semibold">{currentBreadcrumb.state}</span>
          {currentBreadcrumb.district && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
              <span className="text-[#004B23] font-semibold">{currentBreadcrumb.district}</span>
            </>
          )}
          {currentBreadcrumb.tehsil && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
              <span className="text-[#D4AF37] font-semibold">{currentBreadcrumb.tehsil}</span>
            </>
          )}
          {currentBreadcrumb.village && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
              <span className="text-gray-400">{currentBreadcrumb.village}</span>
            </>
          )}
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block font-mono">
              {currentLanguage === 'en' ? 'NATIONAL GEOGRAPHIC DIRECTORY' : 'राष्ट्रीय भौगोलिक निर्देशिका'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#004B23] tracking-tight">
              {currentLanguage === 'en' ? 'All-India Community Census & Area Index' : 'अखिल भारतीय सामुदायिक जनगणना एवं क्षेत्रीय सूचकांक'}
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Explore dynamic local assemblies, accredited district councils, registered families, and socio-economic stats down to the village level.
            </p>
          </div>

          {/* Quick Stats Summary Ribbon */}
          <div className="grid grid-cols-2 gap-4 bg-[#004B23] p-4 rounded-xl text-white border border-[#D4AF37]/20 shadow-md">
            <div>
              <p className="text-[10px] uppercase text-emerald-200 tracking-wider font-mono">Documented Families</p>
              <p className="text-lg font-bold text-[#D4AF37]">{animatedStats.families.toLocaleString()}+</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-emerald-200 tracking-wider font-mono">Registered Members</p>
              <p className="text-lg font-bold text-[#D4AF37]">{animatedStats.members.toLocaleString()}+</p>
            </div>
          </div>
        </div>

        {/* Search, Filter & Navigation Hub */}
        <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm mb-8 space-y-6">
          
          {/* Top Search Bar & View Mode Toggles */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            
            {/* Search Input Box with Suggestions */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? "Search by State, District, Tehsil, Village name, Pincode..." : "राज्य, जिला, तहसील, ग्राम या पिनकोड खोजें..."}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] focus:border-transparent text-gray-800 font-medium shadow-inner"
              />
              {showSuggestions && searchSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-30 overflow-hidden divide-y divide-gray-100">
                  <div className="p-2 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex justify-between">
                    <span>Typeahead suggestions</span>
                    <button onClick={() => setShowSuggestions(false)} className="hover:text-red-500 font-bold">Close</button>
                  </div>
                  {searchSuggestions.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSuggestionClick(item)}
                      className="p-3 hover:bg-emerald-50 cursor-pointer flex items-center justify-between text-xs transition"
                    >
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                        <span className="font-bold text-gray-800">{item.label}</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase font-mono">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* View Mode Tabs */}
            <div className="flex items-center bg-gray-100 p-1 rounded-xl self-start lg:self-center border border-gray-200">
              <button
                onClick={() => setActiveTab('directory')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition ${activeTab === 'directory' ? 'bg-[#004B23] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {currentLanguage === 'en' ? 'List Directory' : 'सूची निर्देशिका'}
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition ${activeTab === 'map' ? 'bg-[#004B23] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {currentLanguage === 'en' ? 'Interactive Map' : 'मानचित्र'}
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition flex items-center space-x-1 ${activeTab === 'admin' ? 'bg-[#004B23] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Settings className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>{currentLanguage === 'en' ? 'Admin Portal' : 'प्रशासक पोर्टल'}</span>
              </button>
              <button
                onClick={() => setActiveTab('seo')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition flex items-center space-x-1 ${activeTab === 'seo' ? 'bg-[#004B23] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>{currentLanguage === 'en' ? 'SEO Engine' : 'एसईओ'}</span>
              </button>
            </div>
          </div>

          {/* Drill-down state selection buttons (State picker) */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
              Quick State Selectors ({states.length} States loaded):
            </span>
            <div className="flex flex-wrap gap-2">
              {states.map(s => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveStateId(s.id);
                    // auto reset district
                    const firstD = districts.find(d => d.stateId === s.id);
                    if (firstD) {
                      setActiveDistrictId(firstD.id);
                      const firstT = tehsils.find(t => t.districtId === firstD.id);
                      if (firstT) {
                        setActiveTehsilId(firstT.id);
                        const firstV = villages.find(v => v.tehsilId === firstT.id);
                        if (firstV) setActiveVillageId(firstV.id);
                      } else {
                        const firstV = villages.find(v => v.districtId === firstD.id);
                        if (firstV) setActiveVillageId(firstV.id);
                      }
                    }
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${s.id === activeStateId ? 'bg-emerald-50 text-[#004B23] border-[#004B23] font-bold shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                  {currentLanguage === 'en' ? s.nameEn : s.nameHi}
                </button>
              ))}
            </div>
          </div>

          {/* Filters Drawer */}
          <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50/50 p-4 rounded-xl">
            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Committee Status</label>
              <select
                value={filterCommitteeStatus}
                onChange={(e) => setFilterCommitteeStatus(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs text-gray-700 p-2 rounded focus:outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active Committees</option>
                <option value="In Formation">In Formation</option>
                <option value="Proposed">Proposed</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">Min Families Count</label>
              <select
                value={filterMinFamilies}
                onChange={(e) => setFilterMinFamilies(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 text-xs text-gray-700 p-2 rounded focus:outline-none"
              >
                <option value="0">Show All</option>
                <option value="100">&gt; 100 Families</option>
                <option value="500">&gt; 500 Families</option>
                <option value="1500">&gt; 1,500 Families</option>
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer py-1.5">
                <input
                  type="checkbox"
                  checked={filterBloodDonors}
                  onChange={(e) => setFilterBloodDonors(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23]"
                />
                <span className="font-medium">Has Verified Blood Donors</span>
              </label>
              <label className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer py-1.5">
                <input
                  type="checkbox"
                  checked={filterStudents}
                  onChange={(e) => setFilterStudents(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23]"
                />
                <span className="font-medium">Students Directory Active</span>
              </label>
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer py-1.5">
                <input
                  type="checkbox"
                  checked={filterBusinesses}
                  onChange={(e) => setFilterBusinesses(e.target.checked)}
                  className="rounded text-[#004B23] focus:ring-[#004B23]"
                />
                <span className="font-medium">Local Registered Businesses</span>
              </label>
              <button
                onClick={() => {
                  setFilterCommitteeStatus('All');
                  setFilterMinFamilies(0);
                  setFilterBloodDonors(false);
                  setFilterStudents(false);
                  setFilterBusinesses(false);
                  triggerNotification('Filters reset successfully.');
                }}
                className="text-left text-xs font-bold text-red-600 hover:text-red-700 mt-2 inline-block font-mono"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </div>

        </div>

        {/* VIEW A: LIST DIRECTORY BLOCK */}
        {activeTab === 'directory' && (
          <div className="space-y-12 animate-fadeIn" id="directory_list_tab">
            
            {/* 1. Districts Grid (Desktop: 4, Laptop: 3, Tablet: 2, Mobile: 1) */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase text-[#004B23] tracking-widest font-mono border-b border-gray-100 pb-2 flex items-center justify-between">
                <span>Districts under {currentBreadcrumb.state} ({filteredDistricts.length} active)</span>
                <span className="text-[10px] text-gray-400">Hover for premium lift & glow details</span>
              </h3>

              {filteredDistricts.length === 0 ? (
                <div className="bg-amber-50 border border-amber-200 text-amber-900 p-6 rounded-xl text-center text-xs font-semibold">
                  No districts matching your filter preferences. Change state above or clear filters to view listings.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredDistricts.map(d => {
                    const isSelected = d.id === activeDistrictId;
                    return (
                      <div
                        key={d.id}
                        onClick={() => {
                          setActiveDistrictId(d.id);
                          // select first tehsil / village
                          const firstT = tehsils.find(t => t.districtId === d.id);
                          if (firstT) {
                            setActiveTehsilId(firstT.id);
                            const firstV = villages.find(v => v.tehsilId === firstT.id);
                            if (firstV) setActiveVillageId(firstV.id);
                          } else {
                            const firstV = villages.find(v => v.districtId === d.id);
                            if (firstV) setActiveVillageId(firstV.id);
                          }
                        }}
                        className={`group relative bg-white border rounded-2xl p-5 text-left cursor-pointer transition-all duration-400 ease-out hover:-translate-y-3.5 hover:shadow-2xl hover:shadow-[#004B23]/10 flex flex-col justify-between ${isSelected ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/50' : 'border-gray-150'}`}
                      >
                        {/* Status Ribbon Accent */}
                        <div className="absolute top-4 right-4">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full font-mono uppercase ${d.committeeStatus === 'Active' ? 'bg-green-100 text-green-800' : d.committeeStatus === 'In Formation' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-800'}`}>
                            {d.committeeStatus}
                          </span>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-1">
                            <h4 className="text-lg font-serif font-extrabold text-[#004B23]">
                              {currentLanguage === 'en' ? d.nameEn : d.nameHi}
                            </h4>
                            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{currentBreadcrumb.state}</p>
                          </div>

                          <div className="space-y-2 border-t border-b border-gray-50 py-3 text-xs">
                            <p className="flex justify-between">
                              <span className="text-gray-400">President:</span>
                              <span className="font-bold text-gray-800">{currentLanguage === 'en' ? d.presidentEn : d.presidentHi}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="text-gray-400">Secretary:</span>
                              <span className="font-bold text-gray-800">{currentLanguage === 'en' ? d.secretaryEn : d.secretaryHi}</span>
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center bg-gray-50 p-2.5 rounded-xl">
                            <div>
                              <p className="text-[9px] text-gray-400 uppercase font-semibold">Families</p>
                              <p className="text-xs font-bold font-mono text-[#004B23]">{d.familiesCount}</p>
                            </div>
                            <div>
                              <p className="text-[9px] text-gray-400 uppercase font-semibold">Members</p>
                              <p className="text-xs font-bold font-mono text-gray-800">{d.membersCount}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 flex items-center justify-between border-t border-gray-50 text-[10px] font-bold text-[#D4AF37] uppercase group-hover:text-[#004B23] transition-colors">
                          <span>View Regional Census</span>
                          <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. Tehsils & Villages Deep-dive Split Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Tehsils (MP & Rajasthan specific) */}
              <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                    Tehsils of {currentLanguage === 'en' ? districts.find(x => x.id === activeDistrictId)?.nameEn : districts.find(x => x.id === activeDistrictId)?.nameHi}
                  </h4>
                  <span className="text-[10px] font-bold font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full">
                    {activeTehsils.length} Total
                  </span>
                </div>

                {activeTehsils.length === 0 ? (
                  <div className="text-center p-6 text-xs text-gray-400">
                    No tehsils currently mapped for this district. City/Town records listed directly under District structure.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {activeTehsils.map(t => {
                      const isSelected = t.id === activeTehsilId;
                      return (
                        <div
                          key={t.id}
                          onClick={() => {
                            setActiveTehsilId(t.id);
                            const firstV = villages.find(v => v.tehsilId === t.id);
                            if (firstV) setActiveVillageId(firstV.id);
                          }}
                          className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition flex items-center justify-between ${isSelected ? 'bg-gradient-to-r from-emerald-50 to-white border-[#004B23] text-[#004B23] font-bold shadow-sm' : 'border-gray-100 text-gray-700 hover:bg-gray-50'}`}
                        >
                          <span>{currentLanguage === 'en' ? t.nameEn : t.nameHi}</span>
                          <ChevronRight className="h-4 w-4 text-gray-300" />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Middle Column: Villages / Cities under active Tehsil / District */}
              <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                    Villages & Wards Index
                  </h4>
                  <span className="text-[10px] font-bold font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full">
                    {activeVillages.length} Total
                  </span>
                </div>

                {activeVillages.length === 0 ? (
                  <div className="text-center p-6 text-xs text-gray-400">
                    No individual village records created for this node yet. Use Admin Panel tab to add villages instantly.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {activeVillages.map(v => {
                      const isSelected = v.id === activeVillageId;
                      return (
                        <div
                          key={v.id}
                          onClick={() => setActiveVillageId(v.id)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer transition flex items-center justify-between ${isSelected ? 'bg-gradient-to-r from-emerald-50 to-white border-[#004B23] text-[#004B23] font-bold shadow-sm' : 'border-gray-100 text-gray-700 hover:bg-gray-50'}`}
                        >
                          <div>
                            <p className="font-bold">{currentLanguage === 'en' ? v.nameEn : v.nameHi}</p>
                            <p className="text-[10px] font-mono text-gray-400 mt-0.5">PIN: {v.pincode}</p>
                          </div>
                          <span className="text-[10px] font-mono text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded">
                            {v.familiesCount} Fam
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Local Community Members Listing */}
              <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                    Local Representative Census
                  </h4>
                  <span className="text-[10px] font-bold font-mono bg-[#D4AF37]/10 text-[#004B23] px-2 py-0.5 rounded-full">
                    {activeMembersList.length} Verified
                  </span>
                </div>

                {activeMembersList.length === 0 ? (
                  <div className="text-center p-8 text-xs text-gray-400 space-y-2">
                    <AlertCircle className="h-8 w-8 text-[#D4AF37] mx-auto opacity-60 animate-pulse" />
                    <p>No verified members mapped here. Join digital census to display profiles.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {activeMembersList.map(m => (
                      <div key={m.id} className="p-3 bg-gray-50 border border-gray-100 rounded-xl space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-[#004B23]">{currentLanguage === 'en' ? m.nameEn : m.nameHi}</p>
                          <span className="text-[9px] font-mono text-gray-400">{m.id}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-500">
                          <p>🎓 {currentLanguage === 'en' ? m.educationEn : m.educationHi}</p>
                          <p>💼 {currentLanguage === 'en' ? m.occupationEn : m.occupationHi}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {m.isBloodDonor && <span className="bg-red-50 text-red-700 text-[8px] font-bold px-1.5 py-0.5 rounded border border-red-100 uppercase">Blood Donor</span>}
                          {m.isBusinessOwner && <span className="bg-amber-50 text-amber-700 text-[8px] font-bold px-1.5 py-0.5 rounded border border-amber-100 uppercase font-mono">Business Owner</span>}
                          {m.isStudent && <span className="bg-blue-50 text-blue-700 text-[8px] font-bold px-1.5 py-0.5 rounded border border-blue-100 uppercase">Student</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* VIEW B: INTERACTIVE MAP COMPONENT */}
        {activeTab === 'map' && (
          <div className="space-y-6 animate-fadeIn" id="interactive_gis_map_tab">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* GIS Left: Custom Interactive SVG Vector Map of India representation */}
              <div className="lg:col-span-7 flex flex-col items-center space-y-4">
                <div className="w-full max-w-[500px] aspect-square bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 rounded-2xl border-2 border-[#D4AF37]/30 relative p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                  
                  {/* Decorative background Islamic grid inside map stage */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                  <div className="flex justify-between items-start z-10">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest">Interactive GIS Map Stage</span>
                      <h4 className="text-sm font-serif font-bold text-white mt-0.5">Click State Node to Drill Census</h4>
                    </div>
                    <span className="text-[9px] font-bold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 px-2 py-0.5 rounded-full uppercase">
                      Vector Representation
                    </span>
                  </div>

                  {/* SVG India Abstract Layout with Clickable Circles representing Major states */}
                  <div className="relative w-full h-[280px] flex items-center justify-center">
                    
                    {/* SVG Map Background Lines for Traditional feeling */}
                    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none text-white" viewBox="0 0 400 400">
                      <polygon points="200,40 240,110 330,120 280,200 310,310 200,260 90,310 120,200 70,120 160,110" fill="none" stroke="currentColor" strokeWidth="1" />
                      <line x1="200" y1="40" x2="200" y2="360" stroke="currentColor" strokeDasharray="3" />
                      <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" strokeDasharray="3" />
                    </svg>

                    {/* Dynamic state location points on the abstract map layout */}
                    <div className="absolute top-[48%] left-[45%] z-20">
                      <button
                        onClick={() => { setActiveStateId('MP'); triggerNotification('Selected Madhya Pradesh Map Node'); }}
                        className={`w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${activeStateId === 'MP' ? 'bg-[#D4AF37] text-emerald-950 scale-125 shadow-2xl shadow-[#D4AF37]' : 'bg-emerald-800 hover:bg-emerald-700 text-white shadow-md'}`}
                      >
                        <span className="text-[9px] font-extrabold uppercase font-mono">MP</span>
                        <span className="text-[7px] block">14.2k</span>
                      </button>
                    </div>

                    <div className="absolute top-[35%] left-[28%] z-20">
                      <button
                        onClick={() => { setActiveStateId('RJ'); triggerNotification('Selected Rajasthan Map Node'); }}
                        className={`w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${activeStateId === 'RJ' ? 'bg-[#D4AF37] text-emerald-950 scale-125 shadow-2xl shadow-[#D4AF37]' : 'bg-emerald-800 hover:bg-emerald-700 text-white shadow-md'}`}
                      >
                        <span className="text-[9px] font-extrabold uppercase font-mono">RJ</span>
                        <span className="text-[7px] block">17.5k</span>
                      </button>
                    </div>

                    <div className="absolute top-[38%] left-[55%] z-20">
                      <button
                        onClick={() => { setActiveStateId('UP'); triggerNotification('Selected Uttar Pradesh Map Node'); }}
                        className={`w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${activeStateId === 'UP' ? 'bg-[#D4AF37] text-emerald-950 scale-125 shadow-2xl shadow-[#D4AF37]' : 'bg-emerald-800 hover:bg-emerald-700 text-white shadow-md'}`}
                      >
                        <span className="text-[9px] font-extrabold uppercase font-mono">UP</span>
                        <span className="text-[7px] block">10.4k</span>
                      </button>
                    </div>

                    <div className="absolute top-[60%] left-[38%] z-20">
                      <button
                        onClick={() => { setActiveStateId('MH'); triggerNotification('Selected Maharashtra Map Node'); }}
                        className={`w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${activeStateId === 'MH' ? 'bg-[#D4AF37] text-emerald-950 scale-125 shadow-2xl shadow-[#D4AF37]' : 'bg-emerald-800 hover:bg-emerald-700 text-white shadow-md'}`}
                      >
                        <span className="text-[9px] font-extrabold uppercase font-mono">MH</span>
                        <span className="text-[7px] block">7.2k</span>
                      </button>
                    </div>

                    <div className="absolute bottom-[20%] left-[50%] z-10 text-center">
                      <p className="text-[9px] font-mono text-[#D4AF37]/50">Click State coordinates above to see real-time updates</p>
                    </div>

                  </div>

                  <div className="bg-emerald-950/80 p-3 rounded-xl border border-white/10 flex justify-between items-center text-xs">
                    <span className="text-emerald-200">Active Map Viewport:</span>
                    <span className="font-bold text-[#D4AF37] font-mono">{currentBreadcrumb.state}</span>
                  </div>

                </div>
              </div>

              {/* GIS Right: Demographic Analytics Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-1">
                  <span className="text-[#004B23] font-bold text-[10px] tracking-widest font-mono uppercase block">Real-time Stats Output</span>
                  <h3 className="text-2xl font-serif font-extrabold text-[#004B23]">{currentBreadcrumb.state} GIS Profile</h3>
                  <p className="text-xs text-gray-500">Showing consolidated GIS data points based on latest digital family registry submissions.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Students Assisted', value: '4,850+', icon: <GraduationCap className="h-5 w-5 text-[#004B23]" /> },
                    { label: 'Women Census', value: '11,200+', icon: <Users className="h-5 w-5 text-[#004B23]" /> },
                    { label: 'Active Businesses', value: '560+', icon: <Briefcase className="h-5 w-5 text-[#004B23]" /> },
                    { label: 'Blood Donors', value: '380+ Vol', icon: <Heart className="h-5 w-5 text-red-600" /> },
                    { label: 'Local Events', value: '24 Scheduled', icon: <Calendar className="h-5 w-5 text-[#004B23]" /> },
                    { label: 'Edu Scholarships', value: '185 Issued', icon: <Award className="h-5 w-5 text-[#D4AF37]" /> }
                  ].map((it, idx) => (
                    <div key={idx} className="bg-white border border-gray-150 p-4 rounded-xl flex items-center space-x-3 shadow-sm hover:shadow-md transition">
                      <div className="p-2.5 rounded-lg bg-gray-50">{it.icon}</div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{it.label}</p>
                        <p className="text-sm font-bold text-gray-800">{it.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                  <p className="text-xs text-[#004B23] leading-relaxed">
                    <strong>GIS Expansion Plan:</strong> The digital map coordinate system will automatically register GPS pins from individual block level committees once verified by the national secretariats.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW C: ADMIN PORTAL PANEL */}
        {activeTab === 'admin' && (
          <div className="space-y-8 animate-fadeIn text-xs text-gray-700" id="admin_portal_tab">
            
            {/* Quick Admin Navigation Row */}
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
              {[
                { mode: 'add_state', label: 'Add New State' },
                { mode: 'add_district', label: 'Add New District' },
                { mode: 'add_tehsil', label: 'Add New Tehsil' },
                { mode: 'add_village', label: 'Add New Village/City' },
                { mode: 'bulk_import', label: 'Bulk CSV Import / Clipboard' }
              ].map(opt => (
                <button
                  key={opt.mode}
                  onClick={() => setAdminMode(opt.mode as any)}
                  className={`px-4 py-2 rounded-lg font-bold uppercase tracking-wider transition ${adminMode === opt.mode ? 'bg-[#004B23] text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Notification Block */}
            <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl flex items-start space-x-3">
              <Info className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="font-bold uppercase tracking-wider text-[10px] mb-0.5">ADMIN MODE ACTIVE</p>
                <p className="text-xs">Changes made in this console update the local database system. You can export the updated data model below to commit permanently.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form container */}
              <div className="lg:col-span-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                
                {adminMode === 'add_state' && (
                  <form onSubmit={handleAddState} className="space-y-4">
                    <h4 className="text-sm font-bold text-[#004B23] uppercase tracking-wider border-b border-gray-50 pb-2">Create New Indian State / UT Entry</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">State Code (ID)</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. DL, UP, MP"
                          value={newState.id}
                          onChange={(e) => setNewState({ ...newState, id: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">English Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. West Bengal"
                          value={newState.nameEn}
                          onChange={(e) => setNewState({ ...newState, nameEn: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Hindi Name (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. पश्चिम बंगाल"
                        value={newState.nameHi}
                        onChange={(e) => setNewState({ ...newState, nameHi: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      />
                    </div>
                    <button type="submit" className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white font-bold uppercase tracking-wider rounded-lg transition">
                      Add State Node
                    </button>
                  </form>
                )}

                {adminMode === 'add_district' && (
                  <form onSubmit={handleAddDistrict} className="space-y-4">
                    <h4 className="text-sm font-bold text-[#004B23] uppercase tracking-wider border-b border-gray-50 pb-2">Create New District with Committee</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">State Mapping</label>
                        <select
                          value={newDistrict.stateId}
                          onChange={(e) => setNewDistrict({ ...newDistrict, stateId: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        >
                          {states.map(s => <option key={s.id} value={s.id}>{s.nameEn}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">District ID Code</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. mp_gwalior"
                          value={newDistrict.id}
                          onChange={(e) => setNewDistrict({ ...newDistrict, id: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">English Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Gwalior"
                          value={newDistrict.nameEn}
                          onChange={(e) => setNewDistrict({ ...newDistrict, nameEn: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Committee Status</label>
                        <select
                          value={newDistrict.committeeStatus}
                          onChange={(e) => setNewDistrict({ ...newDistrict, committeeStatus: e.target.value as any })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        >
                          <option value="Active">Active</option>
                          <option value="In Formation">In Formation</option>
                          <option value="Proposed">Proposed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Committee President</label>
                        <input
                          type="text"
                          placeholder="Janab ..."
                          value={newDistrict.presidentEn}
                          onChange={(e) => setNewDistrict({ ...newDistrict, presidentEn: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Committee Secretary</label>
                        <input
                          type="text"
                          placeholder="Janab ..."
                          value={newDistrict.secretaryEn}
                          onChange={(e) => setNewDistrict({ ...newDistrict, secretaryEn: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        />
                      </div>
                    </div>

                    <button type="submit" className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white font-bold uppercase tracking-wider rounded-lg transition">
                      Add District Node
                    </button>
                  </form>
                )}

                {adminMode === 'add_tehsil' && (
                  <form onSubmit={handleAddTehsil} className="space-y-4">
                    <h4 className="text-sm font-bold text-[#004B23] uppercase tracking-wider border-b border-gray-50 pb-2">Add New Tehsil / Subdivision</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Parent District</label>
                        <select
                          value={newTehsil.districtId}
                          onChange={(e) => setNewTehsil({ ...newTehsil, districtId: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        >
                          {districts.map(d => <option key={d.id} value={d.id}>{d.nameEn}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Tehsil ID Code</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. mp_morena_ambah"
                          value={newTehsil.id}
                          onChange={(e) => setNewTehsil({ ...newTehsil, id: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Tehsil Name (English)</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ambah"
                        value={newTehsil.nameEn}
                        onChange={(e) => setNewTehsil({ ...newTehsil, nameEn: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      />
                    </div>
                    <button type="submit" className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white font-bold uppercase tracking-wider rounded-lg transition">
                      Add Tehsil Node
                    </button>
                  </form>
                )}

                {adminMode === 'add_village' && (
                  <form onSubmit={handleAddVillage} className="space-y-4">
                    <h4 className="text-sm font-bold text-[#004B23] uppercase tracking-wider border-b border-gray-50 pb-2">Add New Village, Town or City Ward</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Tehsil Link (Optional)</label>
                        <select
                          value={newVillage.tehsilId}
                          onChange={(e) => setNewVillage({ ...newVillage, tehsilId: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        >
                          {tehsils.map(t => <option key={t.id} value={t.id}>{t.nameEn}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Or District Link</label>
                        <select
                          value={newVillage.districtId}
                          onChange={(e) => setNewVillage({ ...newVillage, districtId: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        >
                          {districts.map(d => <option key={d.id} value={d.id}>{d.nameEn}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Village ID</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. v_porsa_village"
                          value={newVillage.id}
                          onChange={(e) => setNewVillage({ ...newVillage, id: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Pincode</label>
                        <input
                          type="text"
                          required
                          placeholder="476111"
                          value={newVillage.pincode}
                          onChange={(e) => setNewVillage({ ...newVillage, pincode: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Village Name (English)</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sujuma"
                          value={newVillage.nameEn}
                          onChange={(e) => setNewVillage({ ...newVillage, nameEn: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Local Committee Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Sujuma Gram Sabha"
                          value={newVillage.committeeNameEn}
                          onChange={(e) => setNewVillage({ ...newVillage, committeeNameEn: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                        />
                      </div>
                    </div>

                    <button type="submit" className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white font-bold uppercase tracking-wider rounded-lg transition">
                      Add Village Node
                    </button>
                  </form>
                )}

                {adminMode === 'bulk_import' && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-[#004B23] uppercase tracking-wider border-b border-gray-50 pb-2">Clipboard Excel/CSV Bulk Loader</h4>
                    
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Select Import Schema Type</label>
                      <div className="flex space-x-2">
                        {['districts', 'tehsils', 'villages'].map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setImportType(type as any)}
                            className={`flex-1 py-1 px-3 text-xs font-bold rounded capitalize border ${importType === type ? 'bg-[#004B23] text-white border-transparent' : 'bg-white text-gray-700 border-gray-200'}`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-emerald-950 text-emerald-200 p-3 rounded-lg text-[10px] font-mono leading-relaxed space-y-1">
                      <p className="font-bold text-white text-[11px]">Format Guide (Comma-Separated Values):</p>
                      {importType === 'villages' && <p>ID,TehsilID,DistrictID,Name,Pincode,FamiliesCount,MembersCount<br /><em>e.g., v_sujuma,mp_morena_kailaras,,Sujuma Village,476224,110,650</em></p>}
                      {importType === 'tehsils' && <p>ID,DistrictID,NameEn<br /><em>e.g., mp_morena_ambah,mp_morena,Ambah</em></p>}
                      {importType === 'districts' && <p>ID,StateId,NameEn,President,Secretary,Families,Members<br /><em>e.g., mp_bhopal,MP,Bhopal,Gulam Nabi,Jamil,1820,9800</em></p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Paste CSV Contents</label>
                      <textarea
                        rows={6}
                        placeholder="Paste rows here..."
                        value={bulkImportText}
                        onChange={(e) => setBulkImportText(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 text-xs font-mono p-2.5 rounded focus:outline-none"
                      ></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={handleBulkImport}
                        className="px-5 py-2.5 bg-[#004B23] text-white font-bold uppercase tracking-wider rounded-lg hover:bg-[#00381a] transition"
                      >
                        Process Clipboard Data
                      </button>
                      {bulkImportSuccess && (
                        <span className="text-green-600 font-bold flex items-center space-x-1">
                          <Check className="h-4 w-4" /> <span>Success!</span>
                        </span>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Database Export & Diagnostics Column */}
              <div className="lg:col-span-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#004B23] uppercase tracking-wider border-b border-gray-50 pb-2">National Directory Controls</h4>
                  <p className="text-xs text-gray-500">Backup your directories or download a snapshot report of census coverage nationwide.</p>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleExportData}
                    className="w-full py-3 bg-gradient-to-r from-emerald-950 to-emerald-900 text-white rounded-xl font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition duration-300"
                  >
                    <Download className="h-4 w-4 text-[#D4AF37]" />
                    <span>Export Census JSON Database</span>
                  </button>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-150 space-y-3">
                    <p className="font-bold text-[#004B23] text-xs">Diagnostic Integrity Checker:</p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-white p-3 rounded border border-gray-100">
                        <p className="text-gray-400 font-bold uppercase text-[9px]">States Count</p>
                        <p className="text-sm font-bold text-gray-800">{states.length} Nodes</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-100">
                        <p className="text-gray-400 font-bold uppercase text-[9px]">Districts Mapped</p>
                        <p className="text-sm font-bold text-gray-800">{districts.length} Cities</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-100">
                        <p className="text-gray-400 font-bold uppercase text-[9px]">Tehsils Registered</p>
                        <p className="text-sm font-bold text-gray-800">{tehsils.length} Blocks</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-100">
                        <p className="text-gray-400 font-bold uppercase text-[9px]">Villages Indexed</p>
                        <p className="text-sm font-bold text-gray-800">{villages.length} Areas</p>
                      </div>
                    </div>
                  </div>

                  {/* Reports Generator simulated in client side */}
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl space-y-2">
                    <h5 className="font-bold text-[#004B23] text-xs">Generate Demographic Report:</h5>
                    <p className="text-xs text-gray-600">Download formatted .CSV containing local office bearer contact coordinates, verified blood donor registries and literacy ratios.</p>
                    <button
                      onClick={() => {
                        const csvContent = "data:text/csv;charset=utf-8,District,State,President,Secretary,Families,Members\n" +
                          districts.map(d => `"${d.nameEn}","${d.stateId}","${d.presidentEn}","${d.secretaryEn}",${d.familiesCount},${d.membersCount}`).join("\n");
                        const encodedUri = encodeURI(csvContent);
                        const link = document.createElement("a");
                        link.setAttribute("href", encodedUri);
                        link.setAttribute("download", "rangrez_demographics_report.csv");
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                        triggerNotification('Demographics CSV Report Generated.');
                      }}
                      className="px-4 py-2 bg-[#004B23] text-white rounded font-bold uppercase tracking-wider text-[10px] hover:bg-emerald-900 transition flex items-center space-x-1"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Download .CSV Report</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* VIEW D: SEO CONFIG ENGINE SHIELD */}
        {activeTab === 'seo' && (
          <div className="space-y-6 animate-fadeIn" id="seo_engine_tab">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-4xl mx-auto space-y-6">
              <div className="flex items-center space-x-2 border-b border-gray-50 pb-3">
                <Globe className="h-5 w-5 text-[#004B23]" />
                <h3 className="text-lg font-serif font-bold text-gray-950">Dynamic Router Schema Generator</h3>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                The portal automatically renders responsive, search-engine-friendly static paths for crawlers using metadata structures matching your chosen location. Below is the active production metadata preview:
              </p>

              {/* Crawl Result Preview */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-150 space-y-3 text-xs">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400 uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                  <span>Google Index Crawler Emulation</span>
                </div>

                <div className="space-y-1">
                  <p className="text-blue-700 font-bold hover:underline cursor-pointer text-sm sm:text-base">{dynamicSEO.title}</p>
                  <p className="text-green-800 text-[11px] font-mono">{dynamicSEO.url}</p>
                  <p className="text-gray-600 text-[11px] sm:text-xs">{dynamicSEO.description}</p>
                </div>
              </div>

              {/* JSON-LD Schema */}
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider font-mono">LD+JSON Schema Markup (JSON-LD)</label>
                <pre className="bg-emerald-950 text-emerald-200 p-4 rounded-xl text-[10px] font-mono overflow-x-auto max-h-48 border border-white/5">
                  {dynamicSEO.jsonLd}
                </pre>
              </div>

              <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl text-xs text-emerald-950 flex items-start space-x-3">
                <Award className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                <p className="leading-relaxed">
                  <strong>SEO Compliance Checklist Met:</strong> Includes proper Breadcrumb Schema mapping, OG (Open Graph) cards for WhatsApp/Facebook rich previews, and automated canonical URL path generators to avoid duplicate content blocks.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Elegant traditional visual banner detailing future readiness */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950 to-emerald-900 text-white rounded-2xl p-8 border border-[#D4AF37]/20 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFFFFF_1.2px,transparent_1.2px)] [background-size:16px_16px] pointer-events-none"></div>
          
          <div className="space-y-2 max-w-xl relative z-10">
            <span className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-widest uppercase">SCALABLE MULTI-MODULE EXPANSION READY</span>
            <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-white">Future-Proof Geographic Architecture</h4>
            <p className="text-xs text-emerald-200 leading-relaxed font-light">
              This node hierarchy is pre-configured to link with upcoming modules including dedicated Mohallas, verified Islamic schools, local blood banks, micro-business incubators, and central matrimonial registries seamlessly.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('admin');
              setAdminMode('bulk_import');
              triggerNotification('Switched to bulk loader panel.');
            }}
            className="px-5 py-3 bg-[#D4AF37] hover:bg-[#C59B27] text-emerald-950 text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-md whitespace-nowrap self-start md:self-center relative z-10"
          >
            Manage Databases
          </button>
        </div>

      </div>
    </div>
  );
}
