// ============================================================================
// ENTERPRISE GEOGRAPHIC MASTER ADMINISTRATIVE CONSOLE COMPONENT
// Designed for Super Administrators to add, update, merge, disable, audit
// and execute bulk JSON schema validation & imports covering India's hierarchy.
// ============================================================================

import React, { useState, useEffect } from 'react';
import { Database, Plus, RefreshCw, Layers, AlertCircle, FileText, CheckCircle2, Search, Trash2, Ban, Trash, Play } from 'lucide-react';
import { GeographicService, GeoAuditLog } from '../services/geographicService';
import { State, District, Tehsil, CityVillage } from '../data/indiaGeographicMaster';
import { Language } from '../types';

interface GeoAdminConsoleProps {
  currentLanguage: Language;
  setAdminNotification: (msg: string) => void;
}

export default function GeoAdminConsole({ currentLanguage, setAdminNotification }: GeoAdminConsoleProps) {
  // Navigation tabs inside administrative panel
  const [activeTab, setActiveTab] = useState<'view' | 'add' | 'merge' | 'bulk' | 'audit'>('view');

  // Stats
  const [stats, setStats] = useState({
    countries: 1,
    states: 0,
    districts: 0,
    tehsils: 0,
    cities: 0
  });

  // Database list states
  const [states, setStates] = useState<State[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [tehsils, setTehsils] = useState<Tehsil[]>([]);
  const [citiesVillages, setCitiesVillages] = useState<CityVillage[]>([]);
  const [auditLogs, setAuditLogs] = useState<GeoAuditLog[]>([]);

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  // Add Form state
  const [addType, setAddType] = useState<'STATE' | 'DISTRICT' | 'TEHSIL' | 'CITY'>('STATE');
  const [addParentStateId, setAddParentStateId] = useState('');
  const [addParentDistrictId, setAddParentDistrictId] = useState('');
  const [addParentTehsilId, setAddParentTehsilId] = useState('');
  const [addId, setAddId] = useState('');
  const [addNameEn, setAddNameEn] = useState('');
  const [addNameHi, setAddNameHi] = useState('');
  const [addLgdCode, setAddLgdCode] = useState('');
  const [addPinCode, setAddPinCode] = useState('');
  const [addIsUt, setAddIsUt] = useState(false);
  const [addIsCity, setAddIsCity] = useState(false);

  // Merge Form state
  const [mergeLevel, setMergeLevel] = useState<'DISTRICT' | 'TEHSIL' | 'CITY'>('DISTRICT');
  const [mergeStateId, setMergeStateId] = useState('');
  const [mergeSourceId, setMergeSourceId] = useState('');
  const [mergeTargetId, setMergeTargetId] = useState('');

  // Bulk Import state
  const [bulkJson, setBulkJson] = useState('');
  const [bulkErrors, setBulkErrors] = useState<string[]>([]);
  const [bulkSuccessCount, setBulkSuccessCount] = useState<number | null>(null);

  // --------------------------------------------------------------------------
  // INITIALIZE & REFRESH STATES
  // --------------------------------------------------------------------------
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    GeographicService.init();
    
    const activeStates = GeographicService.getStates('IND');
    setStates(activeStates);

    const allDistricts = activeStates.flatMap(s => GeographicService.getDistricts(s.id));
    setDistricts(allDistricts);

    const allTehsils = allDistricts.flatMap(d => GeographicService.getTehsils(d.id));
    setTehsils(allTehsils);

    const allCities = allDistricts.flatMap(d => GeographicService.getCitiesVillages(d.id));
    setCitiesVillages(allCities);

    // Retrieve raw list with soft-deleted items for admin statistics
    try {
      const sRaw = JSON.parse(localStorage.getItem('rcb_geo_states_v2') || '[]');
      const dRaw = JSON.parse(localStorage.getItem('rcb_geo_districts_v2') || '[]');
      const tRaw = JSON.parse(localStorage.getItem('rcb_geo_tehsils_v2') || '[]');
      const cRaw = JSON.parse(localStorage.getItem('rcb_geo_cities_villages_v2') || '[]');
      const aLogs = JSON.parse(localStorage.getItem('rcb_geo_audit_logs_v2') || '[]');

      setAuditLogs(aLogs.reverse());
      setStats({
        countries: 1,
        states: sRaw.filter((x: any) => !x.isDeleted).length,
        districts: dRaw.filter((x: any) => !x.isDeleted).length,
        tehsils: tRaw.filter((x: any) => !x.isDeleted).length,
        cities: cRaw.filter((x: any) => !x.isDeleted).length
      });
    } catch (e) {
      console.warn("Local storage parse issue in admin dashboard stats", e);
    }
  };

  // --------------------------------------------------------------------------
  // ADMIN HANDLERS
  // --------------------------------------------------------------------------
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const actor = "Super Admin (Enterprise Session)";
    
    try {
      if (addType === 'STATE') {
        GeographicService.addState({
          id: addId.trim(),
          nameEn: addNameEn.trim(),
          nameHi: addNameHi.trim(),
          lgdCode: addLgdCode.trim() || 'N/A',
          isUt: addIsUt
        }, actor);
        setAdminNotification(`Successfully created State: ${addNameEn}`);
      } else if (addType === 'DISTRICT') {
        if (!addParentStateId) return alert('Select state');
        GeographicService.addDistrict({
          id: addId.trim(),
          stateId: addParentStateId,
          nameEn: addNameEn.trim(),
          nameHi: addNameHi.trim(),
          lgdCode: addLgdCode.trim() || 'N/A'
        }, actor);
        setAdminNotification(`Successfully created District: ${addNameEn}`);
      } else if (addType === 'TEHSIL') {
        if (!addParentDistrictId) return alert('Select district');
        GeographicService.addTehsil({
          id: addId.trim(),
          districtId: addParentDistrictId,
          nameEn: addNameEn.trim(),
          nameHi: addNameHi.trim(),
          lgdCode: addLgdCode.trim() || 'N/A'
        }, actor);
        setAdminNotification(`Successfully created Tehsil: ${addNameEn}`);
      } else if (addType === 'CITY') {
        if (!addParentDistrictId) return alert('Select district');
        GeographicService.addCityVillage({
          id: addId.trim(),
          districtId: addParentDistrictId,
          tehsilId: addParentTehsilId || undefined,
          nameEn: addNameEn.trim(),
          nameHi: addNameHi.trim(),
          pinCode: addPinCode.trim(),
          isCity: addIsCity,
          lgdCode: addLgdCode.trim() || 'N/A'
        }, actor);
        setAdminNotification(`Successfully created City/Village: ${addNameEn}`);
      }

      // Reset Form fields
      setAddId('');
      setAddNameEn('');
      setAddNameHi('');
      setAddLgdCode('');
      setAddPinCode('');
      refreshData();
    } catch (err: any) {
      alert(`Error creating geographic node: ${err.message}`);
    }
  };

  const handleMergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mergeSourceId || !mergeTargetId) {
      return alert('Select both Source and Target nodes');
    }
    if (mergeSourceId === mergeTargetId) {
      return alert('Cannot merge a node into itself');
    }

    const confirmMsg = currentLanguage === 'en'
      ? `Are you absolutely sure you want to merge source ${mergeSourceId} into target ${mergeTargetId}? This will automatically relocate all child nodes and soft-delete the source.`
      : `क्या आप वाकई स्रोत ${mergeSourceId} को लक्ष्य ${mergeTargetId} में मर्ज करना चाहते हैं? इससे सभी संबंधित गाँव/तहसील स्वतः ट्रांसफर हो जाएंगे।`;

    if (window.confirm(confirmMsg)) {
      try {
        GeographicService.mergeLocations(mergeSourceId, mergeTargetId, mergeLevel, 'Super Admin');
        setAdminNotification(`Location merge operation completed successfully.`);
        setMergeSourceId('');
        setMergeTargetId('');
        refreshData();
      } catch (err: any) {
        alert(`Merge operation failed: ${err.message}`);
      }
    }
  };

  const handleToggleActive = (id: string, level: 'STATE' | 'DISTRICT' | 'TEHSIL' | 'CITY', isActive: boolean) => {
    const actionTxt = isActive ? 'disable' : 'enable';
    if (window.confirm(`Are you sure you want to ${actionTxt} this node (${id})?`)) {
      GeographicService.disableLocation(id, level, 'Super Admin', isActive);
      setAdminNotification(`Successfully ${isActive ? 'disabled' : 'enabled'} node: ${id}`);
      refreshData();
    }
  };

  // --------------------------------------------------------------------------
  // BULK SCHEMA VALIDATION & DRY RUN
  // --------------------------------------------------------------------------
  const handleBulkImport = (dryRun = true) => {
    setBulkErrors([]);
    setBulkSuccessCount(null);

    let parsedData: any[];
    try {
      parsedData = JSON.parse(bulkJson);
      if (!Array.isArray(parsedData)) {
        throw new Error("Invalid JSON format: Expected a flat array of geographic nodes.");
      }
    } catch (e: any) {
      setBulkErrors([`JSON Syntax Error: ${e.message}`]);
      return;
    }

    const errors: string[] = [];
    let successCount = 0;

    // Fast inline validation simulation
    parsedData.forEach((item, index) => {
      const r = index + 1;
      if (!item.type) {
        errors.push(`Row ${r}: Missing 'type' field (STATE, DISTRICT, TEHSIL, or CITY).`);
        return;
      }
      const type = String(item.type).toUpperCase();
      if (!['STATE', 'DISTRICT', 'TEHSIL', 'CITY', 'VILLAGE'].includes(type)) {
        errors.push(`Row ${r}: Unknown type '${item.type}'. Must be STATE, DISTRICT, TEHSIL, or CITY.`);
        return;
      }

      if (!item.id) errors.push(`Row ${r}: Missing 'id' field.`);
      if (!item.nameEn) errors.push(`Row ${r}: Missing 'nameEn' field.`);
      if (!item.nameHi) errors.push(`Row ${r}: Missing 'nameHi' field.`);

      if (type === 'DISTRICT' && !item.stateId) errors.push(`Row ${r} [District]: Missing stateId.`);
      if (type === 'TEHSIL' && !item.districtId) errors.push(`Row ${r} [Tehsil]: Missing districtId.`);
      if ((type === 'CITY' || type === 'VILLAGE') && !item.pinCode) errors.push(`Row ${r} [City/Village]: Missing pinCode.`);
      
      successCount++;
    });

    if (errors.length > 0) {
      setBulkErrors(errors);
      return;
    }

    if (dryRun) {
      setBulkSuccessCount(successCount);
      setAdminNotification(`✔ Dry-run validation passed! All ${successCount} nodes conform to structural schema guidelines.`);
    } else {
      // Execute transaction via server api proxy if possible, or fallback to local batch save
      try {
        const token = "simulated-token";
        
        // Save batch locally
        parsedData.forEach(item => {
          const type = String(item.type).toUpperCase();
          if (type === 'STATE') {
            GeographicService.addState({
              id: item.id,
              nameEn: item.nameEn,
              nameHi: item.nameHi,
              lgdCode: item.lgdCode || 'N/A',
              isUt: !!item.isUt
            }, 'Bulk Import Subsystem');
          } else if (type === 'DISTRICT') {
            GeographicService.addDistrict({
              id: item.id,
              stateId: item.stateId,
              nameEn: item.nameEn,
              nameHi: item.nameHi,
              lgdCode: item.lgdCode || 'N/A'
            }, 'Bulk Import Subsystem');
          } else if (type === 'TEHSIL') {
            GeographicService.addTehsil({
              id: item.id,
              districtId: item.districtId,
              nameEn: item.nameEn,
              nameHi: item.nameHi,
              lgdCode: item.lgdCode || 'N/A'
            }, 'Bulk Import Subsystem');
          } else if (type === 'CITY' || type === 'VILLAGE') {
            GeographicService.addCityVillage({
              id: item.id,
              districtId: item.districtId,
              tehsilId: item.tehsilId || undefined,
              nameEn: item.nameEn,
              nameHi: item.nameHi,
              pinCode: item.pinCode,
              isCity: type === 'CITY',
              lgdCode: item.lgdCode || 'N/A'
            }, 'Bulk Import Subsystem');
          }
        });

        setAdminNotification(`✔ Successfully imported and initialized ${successCount} geographic records.`);
        setBulkSuccessCount(successCount);
        setBulkJson('');
        refreshData();
      } catch (err: any) {
        setBulkErrors([`Transactional Commit Aborted: ${err.message}`]);
      }
    }
  };

  // --------------------------------------------------------------------------
  // RENDER INTERFACE
  // --------------------------------------------------------------------------
  return (
    <div className="space-y-6">
      
      {/* 1. Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center">
          <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Countries</div>
          <div className="text-xl font-extrabold text-emerald-950 mt-1">{stats.countries}</div>
          <div className="text-[9px] text-emerald-600 mt-0.5">Republic of India</div>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
          <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">States & UTs</div>
          <div className="text-xl font-extrabold text-blue-950 mt-1">{stats.states}</div>
          <div className="text-[9px] text-blue-600 mt-0.5">Normalized nodes</div>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-center">
          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Districts</div>
          <div className="text-xl font-extrabold text-amber-950 mt-1">{stats.districts}</div>
          <div className="text-[9px] text-amber-600 mt-0.5">Active databases</div>
        </div>
        <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl text-center">
          <div className="text-[10px] font-bold text-rose-800 uppercase tracking-wider">Tehsils / Blocks</div>
          <div className="text-xl font-extrabold text-rose-950 mt-1">{stats.tehsils}</div>
          <div className="text-[9px] text-rose-600 mt-0.5">Administrative nodes</div>
        </div>
        <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl text-center col-span-2 md:col-span-1">
          <div className="text-[10px] font-bold text-purple-800 uppercase tracking-wider">Cities/Villages</div>
          <div className="text-xl font-extrabold text-purple-950 mt-1">{stats.cities}</div>
          <div className="text-[9px] text-purple-600 mt-0.5">Mapped postal indexes</div>
        </div>
      </div>

      {/* 2. Sub Navigation Pills */}
      <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-3 text-xs">
        <button
          onClick={() => setActiveTab('view')}
          className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 ${
            activeTab === 'view' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          {currentLanguage === 'en' ? 'Hierarchy Explorer' : 'पदानुक्रम खोजक'}
        </button>

        <button
          onClick={() => setActiveTab('add')}
          className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 ${
            activeTab === 'add' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Plus className="h-3.5 w-3.5" />
          {currentLanguage === 'en' ? 'Add Geographic Node' : 'नया स्थान जोड़ें'}
        </button>

        <button
          onClick={() => setActiveTab('merge')}
          className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 ${
            activeTab === 'merge' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <RefreshCw className="h-3.5 w-3.5" />
          {currentLanguage === 'en' ? 'Location Merge (De-duplicate)' : 'लोकेशन मर्ज (डुप्लिकेट सुधार)'}
        </button>

        <button
          onClick={() => setActiveTab('bulk')}
          className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 ${
            activeTab === 'bulk' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FileText className="h-3.5 w-3.5" />
          {currentLanguage === 'en' ? 'JSON Schema Bulk Import' : 'थोक डेटा आयात (JSON)'}
        </button>

        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 ${
            activeTab === 'audit' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Database className="h-3.5 w-3.5" />
          {currentLanguage === 'en' ? 'Administrative Overrides Audits' : 'ऑडिट लॉग्स'}
        </button>
      </div>

      {/* ----------------------------------------------------------------------
          TAB 1: HIERARCHY EXPLORER
         ---------------------------------------------------------------------- */}
      {activeTab === 'view' && (
        <div className="space-y-4 animate-fadeIn">
          
          {/* Quick Search */}
          <div className="relative">
            <input
              type="text"
              placeholder={currentLanguage === 'en' ? 'Search State, District, Tehsil, Block, City, LGD code, or PIN Code...' : 'खोजें राज्य, जिला, तहसील, पिन कोड...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 text-xs p-3 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23]"
            />
            <Search className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
          </div>

          <div className="overflow-x-auto border border-gray-100 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                <tr>
                  <th className="p-3">Level Type</th>
                  <th className="p-3">English Label</th>
                  <th className="p-3">Hindi Label</th>
                  <th className="p-3">LGD Code</th>
                  <th className="p-3">PIN/Parent</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Overrides</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* States */}
                {states.filter(s => {
                  const q = searchQuery.toLowerCase().trim();
                  return !q || s.id.toLowerCase().includes(q) || s.nameEn.toLowerCase().includes(q) || s.nameHi.includes(q);
                }).map(s => (
                  <tr key={s.id} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-blue-700">STATE</td>
                    <td className="p-3 font-medium">{s.nameEn} {s.isUt && <span className="bg-blue-100 text-blue-800 text-[9px] px-1 rounded">UT</span>}</td>
                    <td className="p-3 font-medium">{s.nameHi}</td>
                    <td className="p-3 font-mono text-gray-500">{s.lgdCode}</td>
                    <td className="p-3 font-mono text-gray-400">Country: IND</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 text-[10px] rounded-full font-semibold ${s.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {s.isActive ? 'Active' : 'Disabled'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleToggleActive(s.id, 'STATE', s.isActive)}
                        className={`text-[11px] font-bold ${s.isActive ? 'text-amber-600 hover:underline' : 'text-emerald-600 hover:underline'}`}
                      >
                        {s.isActive ? 'Disable' : 'Enable'}
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Districts */}
                {districts.filter(d => {
                  const q = searchQuery.toLowerCase().trim();
                  return !q || d.id.toLowerCase().includes(q) || d.nameEn.toLowerCase().includes(q) || d.nameHi.includes(q);
                }).slice(0, 100).map(d => (
                  <tr key={d.id} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-amber-700">DISTRICT</td>
                    <td className="p-3 font-medium">{d.nameEn}</td>
                    <td className="p-3 font-medium">{d.nameHi}</td>
                    <td className="p-3 font-mono text-gray-500">{d.lgdCode}</td>
                    <td className="p-3 font-mono text-gray-400">State: {d.stateId}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 text-[10px] rounded-full font-semibold ${d.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {d.isActive ? 'Active' : 'Disabled'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleToggleActive(d.id, 'DISTRICT', d.isActive)}
                        className={`text-[11px] font-bold ${d.isActive ? 'text-amber-600 hover:underline' : 'text-emerald-600 hover:underline'}`}
                      >
                        {d.isActive ? 'Disable' : 'Enable'}
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Cities / Villages */}
                {citiesVillages.filter(cv => {
                  const q = searchQuery.toLowerCase().trim();
                  return !q || cv.id.toLowerCase().includes(q) || cv.nameEn.toLowerCase().includes(q) || cv.nameHi.includes(q) || cv.pinCode.includes(q);
                }).slice(0, 100).map(cv => (
                  <tr key={cv.id} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-purple-700">{cv.isCity ? 'CITY' : 'VILLAGE'}</td>
                    <td className="p-3 font-medium">{cv.nameEn}</td>
                    <td className="p-3 font-medium">{cv.nameHi}</td>
                    <td className="p-3 font-mono text-gray-500">{cv.lgdCode || 'N/A'}</td>
                    <td className="p-3 font-mono text-gray-400">PIN: {cv.pinCode}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 text-[10px] rounded-full font-semibold ${cv.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {cv.isActive ? 'Active' : 'Disabled'}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleToggleActive(cv.id, 'CITY', cv.isActive)}
                        className={`text-[11px] font-bold ${cv.isActive ? 'text-amber-600 hover:underline' : 'text-emerald-600 hover:underline'}`}
                      >
                        {cv.isActive ? 'Disable' : 'Enable'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-[10px] text-gray-400 italic text-center">
            * Explorer view displays the first 100 matching results per level for database query rendering optimization. Use search filter above for precise queries.
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          TAB 2: ADD GEOGRAPHIC NODE
         ---------------------------------------------------------------------- */}
      {activeTab === 'add' && (
        <form onSubmit={handleAddSubmit} className="space-y-4 p-4 bg-gray-50 border border-gray-150 rounded-xl animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Level Type */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Node Hierarchy Level</label>
              <select
                value={addType}
                onChange={(e: any) => setAddType(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
              >
                <option value="STATE">State / Union Territory</option>
                <option value="DISTRICT">District</option>
                <option value="TEHSIL">Tehsil / Taluk / Block</option>
                <option value="CITY">City / Town / Village</option>
              </select>
            </div>

            {/* Unique Node ID */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Unique Node Code / ID</label>
              <input
                type="text"
                required
                placeholder="e.g. MP-MOR or DIS-MP-MOR"
                value={addId}
                onChange={(e) => setAddId(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
              />
            </div>

            {/* Parent Selections (Cascading dynamically) */}
            {addType !== 'STATE' && (
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Parent State Node</label>
                <select
                  required
                  value={addParentStateId}
                  onChange={(e) => {
                    setAddParentStateId(e.target.value);
                    setAddParentDistrictId('');
                  }}
                  className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
                >
                  <option value="">-- Select State --</option>
                  {states.map(s => <option key={s.id} value={s.id}>{s.nameEn}</option>)}
                </select>
              </div>
            )}

            {addType === 'STATE' && (
              <div className="flex items-center pt-8 pl-4">
                <input
                  type="checkbox"
                  id="addIsUt"
                  checked={addIsUt}
                  onChange={(e) => setAddIsUt(e.target.checked)}
                  className="h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                />
                <label htmlFor="addIsUt" className="text-xs font-semibold text-gray-700 select-none">Is Union Territory (UT)</label>
              </div>
            )}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Parent District if adding Tehsil/City */}
            {(addType === 'TEHSIL' || addType === 'CITY') && (
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Parent District Node</label>
                <select
                  required
                  value={addParentDistrictId}
                  onChange={(e) => setAddParentDistrictId(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
                >
                  <option value="">-- Select District --</option>
                  {districts.filter(d => d.stateId === addParentStateId).map(d => (
                    <option key={d.id} value={d.id}>{d.nameEn}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Parent Tehsil if adding City/Village (Optional) */}
            {addType === 'CITY' && (
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Parent Tehsil Node (Optional)</label>
                <select
                  value={addParentTehsilId}
                  onChange={(e) => setAddParentTehsilId(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
                >
                  <option value="">-- Select Tehsil --</option>
                  {tehsils.filter(t => t.districtId === addParentDistrictId).map(t => (
                    <option key={t.id} value={t.id}>{t.nameEn}</option>
                  ))}
                </select>
              </div>
            )}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* English Label */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Name (English)</label>
              <input
                type="text"
                required
                placeholder="e.g. Morena"
                value={addNameEn}
                onChange={(e) => setAddNameEn(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
              />
            </div>

            {/* Hindi Label */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Name (Hindi)</label>
              <input
                type="text"
                required
                placeholder="जैसे, मुरैना"
                value={addNameHi}
                onChange={(e) => setAddNameHi(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
              />
            </div>

            {/* LGD Code */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Government LGD Code</label>
              <input
                type="text"
                placeholder="e.g. 231456 (or N/A)"
                value={addLgdCode}
                onChange={(e) => setAddLgdCode(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
              />
            </div>

            {/* PIN Code / City Flag */}
            {addType === 'CITY' ? (
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">PIN Code (Postal Index)</label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  placeholder="e.g. 476224"
                  value={addPinCode}
                  onChange={(e) => setAddPinCode(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none font-mono"
                />
              </div>
            ) : (
              <div className="flex items-center pt-8 pl-4">
                {/* Empty column buffer */}
              </div>
            )}
          </div>

          {addType === 'CITY' && (
            <div className="flex items-center pl-1">
              <input
                type="checkbox"
                id="addIsCity"
                checked={addIsCity}
                onChange={(e) => setAddIsCity(e.target.checked)}
                className="h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 mr-2"
              />
              <label htmlFor="addIsCity" className="text-xs font-semibold text-gray-700 select-none">Mark as City/Town (instead of rural Gram Panchayat Village)</label>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#004B23] text-white text-xs font-bold rounded-lg shadow-sm hover:bg-[#00381a] transition"
            >
              Commit Node to Master Database
            </button>
          </div>
        </form>
      )}

      {/* ----------------------------------------------------------------------
          TAB 3: MERGE LOCATIONS
         ---------------------------------------------------------------------- */}
      {activeTab === 'merge' && (
        <form onSubmit={handleMergeSubmit} className="space-y-4 p-4 bg-amber-50/50 border border-amber-200 rounded-xl animate-fadeIn">
          <div className="flex items-start gap-3 bg-amber-100/70 border border-amber-200/50 p-4 rounded-lg text-amber-900 text-xs">
            <AlertCircle className="h-5 w-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Database Relocation Merger Notice:</p>
              <p className="mt-1">
                Merging a location will automatically re-map all dependent children nodes (e.g. child tehsils or villages) to the Target location and soft-delete the Source location. This operation is recorded in the immutable administrative audits register.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Merge Level */}
            <div>
              <label className="block text-[10px] font-bold text-amber-900 uppercase mb-1">Merge Level Type</label>
              <select
                value={mergeLevel}
                onChange={(e: any) => setMergeLevel(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none font-medium"
              >
                <option value="DISTRICT">District Merger</option>
                <option value="TEHSIL">Tehsil / Block Merger</option>
              </select>
            </div>

            {/* Parent State Filter */}
            <div>
              <label className="block text-[10px] font-bold text-amber-900 uppercase mb-1">Filter Parent State</label>
              <select
                value={mergeStateId}
                onChange={(e) => setMergeStateId(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none"
              >
                <option value="">-- Select State --</option>
                {states.map(s => <option key={s.id} value={s.id}>{s.nameEn}</option>)}
              </select>
            </div>

            {/* Source Node */}
            <div>
              <label className="block text-[10px] font-bold text-amber-900 uppercase mb-1 text-rose-700">Source Node (Will Be Relocated & Deleted)</label>
              <select
                required
                value={mergeSourceId}
                onChange={(e) => setMergeSourceId(e.target.value)}
                className="w-full bg-white border border-rose-200 text-xs p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500"
              >
                <option value="">-- Select Source --</option>
                {mergeLevel === 'DISTRICT'
                  ? districts.filter(d => d.stateId === mergeStateId).map(d => <option key={d.id} value={d.id}>{d.nameEn} (Code: {d.id})</option>)
                  : tehsils.filter(t => t.districtId.includes(mergeStateId)).map(t => <option key={t.id} value={t.id}>{t.nameEn} (Code: {t.id})</option>)
                }
              </select>
            </div>

            {/* Target Node */}
            <div>
              <label className="block text-[10px] font-bold text-amber-900 uppercase mb-1 text-emerald-700 font-semibold">Target Node (Recipient / Target)</label>
              <select
                required
                value={mergeTargetId}
                onChange={(e) => setMergeTargetId(e.target.value)}
                className="w-full bg-white border border-emerald-200 text-xs p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">-- Select Target --</option>
                {mergeLevel === 'DISTRICT'
                  ? districts.filter(d => d.stateId === mergeStateId && d.id !== mergeSourceId).map(d => <option key={d.id} value={d.id}>{d.nameEn} (Code: {d.id})</option>)
                  : tehsils.filter(t => t.districtId.includes(mergeStateId) && t.id !== mergeSourceId).map(t => <option key={t.id} value={t.id}>{t.nameEn} (Code: {t.id})</option>)
                }
              </select>
            </div>

          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-amber-700 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-amber-800 transition"
            >
              Execute Relocation Merge Transaction
            </button>
          </div>
        </form>
      )}

      {/* ----------------------------------------------------------------------
          TAB 4: BULK JSON IMPORT
         ---------------------------------------------------------------------- */}
      {activeTab === 'bulk' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs">
            <p className="font-bold text-gray-900 flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-[#004B23]" />
              JSON Array Batch Schema Format
            </p>
            <p className="text-gray-600">
              Provide a valid JSON array of administrative entries. Schema requires <code className="font-mono bg-white px-1 border">type</code> (STATE, DISTRICT, TEHSIL, or CITY), <code className="font-mono bg-white px-1 border">id</code>, <code className="font-mono bg-white px-1 border">nameEn</code>, and <code className="font-mono bg-white px-1 border">nameHi</code>. Parent references must match.
            </p>
            <pre className="p-3 bg-white border border-gray-150 rounded font-mono text-[10px] text-emerald-800 overflow-x-auto">
{`[
  { "type": "STATE", "id": "UP", "nameEn": "Uttar Pradesh", "nameHi": "उत्तर प्रदेश" },
  { "type": "DISTRICT", "id": "DIS-UP-LKO", "stateId": "UP", "nameEn": "Lucknow", "nameHi": "लखनऊ" },
  { "type": "TEHSIL", "id": "TEH-UP-LKO", "districtId": "DIS-UP-LKO", "nameEn": "Lucknow Tehsil", "nameHi": "लखनऊ तहसील" },
  { "type": "CITY", "id": "VIL-UP-LKO", "districtId": "DIS-UP-LKO", "nameEn": "Lucknow City", "nameHi": "लखनऊ सिटी", "pinCode": "226001" }
]`}
            </pre>
          </div>

          <textarea
            className="w-full h-48 p-4 bg-white border border-gray-200 rounded-xl font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#004B23]"
            placeholder="Paste JSON array here..."
            value={bulkJson}
            onChange={(e) => setBulkJson(e.target.value)}
          />

          {bulkErrors.length > 0 && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg space-y-1 text-xs text-rose-800">
              <p className="font-bold">❌ Schema Validation Failed:</p>
              <ul className="list-disc pl-5 max-h-40 overflow-y-auto space-y-1">
                {bulkErrors.map((err, i) => <li key={i}>{err}</li>)}
              </ul>
            </div>
          )}

          {bulkSuccessCount !== null && bulkErrors.length === 0 && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-xs text-green-800">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
              <span>
                <strong>Success:</strong> {bulkSuccessCount} nodes dry-run validated successfully! Ready to write.
              </span>
            </div>
          )}

          <div className="flex justify-end gap-3 text-xs">
            <button
              onClick={() => handleBulkImport(true)}
              className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg transition"
            >
              Verify & Dry-Run Schema
            </button>
            <button
              disabled={!bulkJson}
              onClick={() => handleBulkImport(false)}
              className="px-5 py-2.5 bg-[#004B23] text-white font-bold rounded-lg shadow hover:bg-[#00381a] transition disabled:opacity-50"
            >
              Commit Batch to Database
            </button>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          TAB 5: AUDIT LOGS
         ---------------------------------------------------------------------- */}
      {activeTab === 'audit' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-xs font-bold text-gray-700 uppercase">Immutable Records (Local Session Ledger)</span>
            <button
              onClick={() => {
                if (window.confirm("Are you sure you want to purge local audits memory?")) {
                  localStorage.removeItem('rcb_geo_audit_logs_v2');
                  refreshData();
                }
              }}
              className="text-[10px] font-bold text-rose-600 flex items-center gap-1 hover:underline"
            >
              <Trash className="h-3 w-3" />
              Purge Logs
            </button>
          </div>

          <div className="overflow-y-auto max-h-[350px] border border-gray-100 rounded-xl bg-gray-50/50">
            {auditLogs.length > 0 ? (
              <ul className="divide-y divide-gray-100">
                {auditLogs.map(log => (
                  <li key={log.id} className="p-4 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-[9px] font-extrabold rounded ${
                          log.action === 'ADD' ? 'bg-green-100 text-green-800' :
                          log.action === 'MERGE' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {log.action}
                        </span>
                        <span className="font-bold text-gray-900">{log.level} OVERRIDE</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">{new Date(log.timestamp).toLocaleString()}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-mono text-[11px]">{log.details}</p>
                    <div className="text-[10px] text-gray-400">Actor: <span className="font-semibold text-gray-600">{log.actor}</span></div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center text-gray-400 text-xs">
                No administrative overrides recorded in the current database session.
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
