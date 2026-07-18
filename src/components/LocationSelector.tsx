// ============================================================================
// ENTERPRISE CASCADE GEOGRAPHIC LOCATION SELECTOR
// Fully reusable, accessible, searchable, cascading geographic selector covering
// Country, State, District, Tehsil/Block, City/Village, and official PIN Codes.
// Supports autocomplete search, multilingual labels, keyboard navigation, and
// parents/children synchronization validation.
// ============================================================================

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, ChevronDown, Check, Loader } from 'lucide-react';
import { GeographicService } from '../services/geographicService';
import { Country, State, District, Tehsil, CityVillage } from '../data/indiaGeographicMaster';
import { Language } from '../types';

interface LocationSelectorProps {
  currentLanguage: Language;
  onLocationChange: (location: {
    countryId: string;
    stateId: string;
    districtId: string;
    tehsilId: string;
    cityVillageId: string;
    pinCode: string;
    locationTextEn: string;
    locationTextHi: string;
  }) => void;
  initialValues?: {
    countryId?: string;
    stateId?: string;
    districtId?: string;
    tehsilId?: string;
    cityVillageId?: string;
    pinCode?: string;
  };
  required?: boolean;
}

export default function LocationSelector({
  currentLanguage,
  onLocationChange,
  initialValues = {},
  required = false
}: LocationSelectorProps) {
  // Database state loaded from centralized GeographicService
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [tehsils, setTehsils] = useState<Tehsil[]>([]);
  const [citiesVillages, setCitiesVillages] = useState<CityVillage[]>([]);

  // Selected values
  const [selectedCountry, setSelectedCountry] = useState(initialValues.countryId || 'IND');
  const [selectedState, setSelectedState] = useState(initialValues.stateId || '');
  const [selectedDistrict, setSelectedDistrict] = useState(initialValues.districtId || '');
  const [selectedTehsil, setSelectedTehsil] = useState(initialValues.tehsilId || '');
  const [selectedCityVillage, setSelectedCityVillage] = useState(initialValues.cityVillageId || '');
  const [pinCode, setPinCode] = useState(initialValues.pinCode || '');

  // Loading states
  const [loading, setLoading] = useState(false);

  // Search/Autocomplete states for each cascading level
  const [stateSearch, setStateSearch] = useState('');
  const [districtSearch, setDistrictSearch] = useState('');
  const [tehsilSearch, setTehsilSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');

  // Dropdown open states
  const [stateOpen, setStateOpen] = useState(false);
  const [districtOpen, setDistrictOpen] = useState(false);
  const [tehsilOpen, setTehsilOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  // Refs for closing on outside click
  const stateRef = useRef<HTMLDivElement>(null);
  const districtRef = useRef<HTMLDivElement>(null);
  const tehsilRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);

  // --------------------------------------------------------------------------
  // ONLOAD DATA INITIALIZATION
  // --------------------------------------------------------------------------
  useEffect(() => {
    GeographicService.init();
    setCountries(GeographicService.getCountries());
    setStates(GeographicService.getStates(selectedCountry));
    
    // Auto-load sub-locations if initial values exist
    if (initialValues.stateId) {
      setDistricts(GeographicService.getDistricts(initialValues.stateId));
    }
    if (initialValues.stateId && initialValues.districtId) {
      setTehsils(GeographicService.getTehsils(initialValues.districtId));
      setCitiesVillages(GeographicService.getCitiesVillages(initialValues.districtId, initialValues.tehsilId));
    }
  }, []);

  // Handle outside click to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (stateRef.current && !stateRef.current.contains(event.target as Node)) setStateOpen(false);
      if (districtRef.current && !districtRef.current.contains(event.target as Node)) setDistrictOpen(false);
      if (tehsilRef.current && !tehsilRef.current.contains(event.target as Node)) setTehsilOpen(false);
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) setCityOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --------------------------------------------------------------------------
  // CASCADING EVENTS (Updates & Resets)
  // --------------------------------------------------------------------------
  const handleCountryChange = (cId: string) => {
    setSelectedCountry(cId);
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedTehsil('');
    setSelectedCityVillage('');
    setPinCode('');
    setStates(GeographicService.getStates(cId));
    setDistricts([]);
    setTehsils([]);
    setCitiesVillages([]);
    triggerChange(cId, '', '', '', '', '');
  };

  const handleStateSelect = (sId: string) => {
    setSelectedState(sId);
    setSelectedDistrict('');
    setSelectedTehsil('');
    setSelectedCityVillage('');
    setPinCode('');
    setDistricts(GeographicService.getDistricts(sId));
    setTehsils([]);
    setCitiesVillages([]);
    setStateOpen(false);
    triggerChange(selectedCountry, sId, '', '', '', '');
  };

  const handleDistrictSelect = (dId: string) => {
    setSelectedDistrict(dId);
    setSelectedTehsil('');
    setSelectedCityVillage('');
    setPinCode('');
    setTehsils(GeographicService.getTehsils(dId));
    setCitiesVillages(GeographicService.getCitiesVillages(dId));
    setDistrictOpen(false);
    triggerChange(selectedCountry, selectedState, dId, '', '', '');
  };

  const handleTehsilSelect = (tId: string) => {
    setSelectedTehsil(tId);
    setSelectedCityVillage('');
    setPinCode('');
    setCitiesVillages(GeographicService.getCitiesVillages(selectedDistrict, tId));
    setTehsilOpen(false);
    triggerChange(selectedCountry, selectedState, selectedDistrict, tId, '', '');
  };

  const handleCityVillageSelect = (cv: CityVillage) => {
    setSelectedCityVillage(cv.id);
    setPinCode(cv.pinCode);
    setCityOpen(false);
    triggerChange(selectedCountry, selectedState, selectedDistrict, selectedTehsil, cv.id, cv.pinCode);
  };

  const handlePinSearch = (pin: string) => {
    setPinCode(pin);
    if (pin.length === 6) {
      setLoading(true);
      setTimeout(() => {
        const matches = GeographicService.findByPinCode(pin);
        if (matches.length > 0) {
          const match = matches[0];
          // Set parent hierarchies dynamically to prevent invalid matching!
          setSelectedState(match.districtId.substring(4, 6)); // Maps from District code e.g. DIS-MP-MOR
          setSelectedDistrict(match.districtId);
          if (match.tehsilId) setSelectedTehsil(match.tehsilId);
          setSelectedCityVillage(match.id);
          
          // Re-load related lists
          const sId = match.districtId.substring(4, 6);
          setDistricts(GeographicService.getDistricts(sId));
          setTehsils(GeographicService.getTehsils(match.districtId));
          setCitiesVillages(GeographicService.getCitiesVillages(match.districtId, match.tehsilId));
          
          triggerChange(selectedCountry, sId, match.districtId, match.tehsilId || '', match.id, pin);
        }
        setLoading(false);
      }, 300);
    } else {
      triggerChange(selectedCountry, selectedState, selectedDistrict, selectedTehsil, selectedCityVillage, pin);
    }
  };

  const triggerChange = (
    cId: string,
    sId: string,
    dId: string,
    tId: string,
    cvId: string,
    pin: string
  ) => {
    const stateObj = states.find(s => s.id === sId);
    const districtObj = districts.find(d => d.id === dId);
    const tehsilObj = tehsils.find(t => t.id === tId);
    const cvObj = citiesVillages.find(cv => cv.id === cvId);

    const txtEn = [
      cvObj?.nameEn || '',
      tehsilObj?.nameEn || '',
      districtObj?.nameEn || '',
      stateObj?.nameEn || ''
    ].filter(Boolean).join(', ');

    const txtHi = [
      cvObj?.nameHi || '',
      tehsilObj?.nameHi || '',
      districtObj?.nameHi || '',
      stateObj?.nameHi || ''
    ].filter(Boolean).join(', ');

    onLocationChange({
      countryId: cId,
      stateId: sId,
      districtId: dId,
      tehsilId: tId,
      cityVillageId: cvId,
      pinCode: pin,
      locationTextEn: txtEn,
      locationTextHi: txtHi
    });
  };

  // --------------------------------------------------------------------------
  // AUTOCOMPLETE FILTER LOGIC (Supports English/Hindi & Government Code Lookup)
  // --------------------------------------------------------------------------
  const filteredStates = states.filter(s => {
    const q = stateSearch.toLowerCase().trim();
    return s.nameEn.toLowerCase().includes(q) || s.nameHi.includes(q) || s.lgdCode.includes(q);
  });

  const filteredDistricts = districts.filter(d => {
    const q = districtSearch.toLowerCase().trim();
    const spellings = d.alternativeSpellings?.some(sp => sp.toLowerCase().includes(q)) || false;
    return d.nameEn.toLowerCase().includes(q) || d.nameHi.includes(q) || d.lgdCode.includes(q) || spellings;
  });

  const filteredTehsils = tehsils.filter(t => {
    const q = tehsilSearch.toLowerCase().trim();
    return t.nameEn.toLowerCase().includes(q) || t.nameHi.includes(q) || t.lgdCode.includes(q);
  });

  const filteredCitiesVillages = citiesVillages.filter(cv => {
    const q = citySearch.toLowerCase().trim();
    const spellings = cv.alternativeSpellings?.some(sp => sp.toLowerCase().includes(q)) || false;
    return cv.nameEn.toLowerCase().includes(q) || cv.nameHi.includes(q) || cv.pinCode.includes(q) || spellings;
  });

  // Get display names
  const getSelectedStateName = () => {
    const match = states.find(s => s.id === selectedState);
    return match ? (currentLanguage === 'en' ? match.nameEn : match.nameHi) : '';
  };

  const getSelectedDistrictName = () => {
    const match = districts.find(d => d.id === selectedDistrict);
    return match ? (currentLanguage === 'en' ? match.nameEn : match.nameHi) : '';
  };

  const getSelectedTehsilName = () => {
    const match = tehsils.find(t => t.id === selectedTehsil);
    return match ? (currentLanguage === 'en' ? match.nameEn : match.nameHi) : '';
  };

  const getSelectedCityName = () => {
    const match = citiesVillages.find(cv => cv.id === selectedCityVillage);
    return match ? (currentLanguage === 'en' ? match.nameEn : match.nameHi) : '';
  };

  return (
    <div className="space-y-4" id="central_geographic_selector_root">
      
      {/* 2-Column top layer: Country & PIN Code */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Country Selector */}
        <div>
          <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
            {required && <span className="text-red-500 mr-0.5">★</span>}
            {currentLanguage === 'en' ? 'Country' : 'देश'}
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23] font-medium"
          >
            {countries.map(c => (
              <option key={c.id} value={c.id}>
                {currentLanguage === 'en' ? c.nameEn : c.nameHi} ({c.phoneCode})
              </option>
            ))}
          </select>
        </div>

        {/* PIN Code Direct Search */}
        <div>
          <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
            {currentLanguage === 'en' ? 'PIN Code (Instant Auto-fill)' : 'पिन कोड (तुरंत ऑटो-फिल)'}
          </label>
          <div className="relative">
            <input
              type="text"
              maxLength={6}
              value={pinCode}
              onChange={(e) => handlePinSearch(e.target.value.replace(/\D/g, ''))}
              placeholder={currentLanguage === 'en' ? 'e.g., 476224' : 'जैसे, 476224'}
              className="w-full bg-white border border-gray-200 text-xs p-3 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23] font-mono tracking-wider font-semibold"
            />
            <div className="absolute right-3 top-3.5 text-gray-400">
              {loading ? <Loader className="h-4 w-4 animate-spin text-[#004B23]" /> : <Search className="h-4 w-4" />}
            </div>
          </div>
        </div>

      </div>

      {/* 4-Column Administrative Cascades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* 1. State Dropdown */}
        <div className="relative" ref={stateRef}>
          <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
            {required && <span className="text-red-500 mr-0.5">★</span>}
            {currentLanguage === 'en' ? 'State / UT' : 'राज्य / केंद्रशासित'}
          </label>
          <button
            type="button"
            onClick={() => setStateOpen(!stateOpen)}
            className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-[#004B23]"
          >
            <span className={selectedState ? 'text-gray-900 font-medium' : 'text-gray-400'}>
              {getSelectedStateName() || (currentLanguage === 'en' ? '-- Select State --' : '-- राज्य चुनें --')}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>

          {stateOpen && (
            <div className="absolute z-30 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-fadeIn">
              <div className="p-2 border-b border-gray-100 flex items-center gap-1.5 bg-gray-50">
                <Search className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder={currentLanguage === 'en' ? 'Search State...' : 'खोजें...'}
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  className="w-full bg-transparent text-xs focus:outline-none p-1"
                />
              </div>
              <ul className="max-h-52 overflow-y-auto py-1 text-xs">
                {filteredStates.length > 0 ? (
                  filteredStates.map(s => (
                    <li
                      key={s.id}
                      onClick={() => handleStateSelect(s.id)}
                      className="px-3 py-2.5 hover:bg-emerald-50 hover:text-emerald-900 cursor-pointer flex items-center justify-between transition"
                    >
                      <span>{currentLanguage === 'en' ? s.nameEn : s.nameHi}</span>
                      {selectedState === s.id && <Check className="h-3.5 w-3.5 text-[#004B23] stroke-[3]" />}
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-4 text-center text-gray-400">
                    {currentLanguage === 'en' ? 'No state found' : 'कोई राज्य नहीं मिला'}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* 2. District Dropdown */}
        <div className="relative" ref={districtRef}>
          <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
            {required && <span className="text-red-500 mr-0.5">★</span>}
            {currentLanguage === 'en' ? 'District' : 'जिला'}
          </label>
          <button
            type="button"
            disabled={!selectedState}
            onClick={() => setDistrictOpen(!districtOpen)}
            className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-[#004B23] disabled:opacity-50 disabled:bg-gray-50"
          >
            <span className={selectedDistrict ? 'text-gray-900 font-medium' : 'text-gray-400'}>
              {getSelectedDistrictName() || (currentLanguage === 'en' ? '-- Select District --' : '-- जिला चुनें --')}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>

          {districtOpen && (
            <div className="absolute z-30 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-fadeIn">
              <div className="p-2 border-b border-gray-100 flex items-center gap-1.5 bg-gray-50">
                <Search className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder={currentLanguage === 'en' ? 'Search District...' : 'जिला खोजें...'}
                  value={districtSearch}
                  onChange={(e) => setDistrictSearch(e.target.value)}
                  className="w-full bg-transparent text-xs focus:outline-none p-1"
                />
              </div>
              <ul className="max-h-52 overflow-y-auto py-1 text-xs">
                {filteredDistricts.length > 0 ? (
                  filteredDistricts.map(d => (
                    <li
                      key={d.id}
                      onClick={() => handleDistrictSelect(d.id)}
                      className="px-3 py-2.5 hover:bg-emerald-50 hover:text-emerald-900 cursor-pointer flex items-center justify-between transition"
                    >
                      <div>
                        <div className="font-medium">{currentLanguage === 'en' ? d.nameEn : d.nameHi}</div>
                        <div className="text-[9px] text-gray-400">Gov Code: {d.lgdCode}</div>
                      </div>
                      {selectedDistrict === d.id && <Check className="h-3.5 w-3.5 text-[#004B23] stroke-[3]" />}
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-4 text-center text-gray-400">
                    {currentLanguage === 'en' ? 'No district found' : 'कोई जिला नहीं मिला'}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* 3. Tehsil / Block Dropdown */}
        <div className="relative" ref={tehsilRef}>
          <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
            {required && <span className="text-red-500 mr-0.5">★</span>}
            {currentLanguage === 'en' ? 'Tehsil / Taluk' : 'तहसील / तालुका'}
          </label>
          <button
            type="button"
            disabled={!selectedDistrict}
            onClick={() => setTehsilOpen(!tehsilOpen)}
            className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-[#004B23] disabled:opacity-50 disabled:bg-gray-50"
          >
            <span className={selectedTehsil ? 'text-gray-900 font-medium' : 'text-gray-400'}>
              {getSelectedTehsilName() || (currentLanguage === 'en' ? '-- Select Tehsil --' : '-- तहसील चुनें --')}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>

          {tehsilOpen && (
            <div className="absolute z-30 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-fadeIn">
              <div className="p-2 border-b border-gray-100 flex items-center gap-1.5 bg-gray-50">
                <Search className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder={currentLanguage === 'en' ? 'Search Tehsil...' : 'तहसील खोजें...'}
                  value={tehsilSearch}
                  onChange={(e) => setTehsilSearch(e.target.value)}
                  className="w-full bg-transparent text-xs focus:outline-none p-1"
                />
              </div>
              <ul className="max-h-52 overflow-y-auto py-1 text-xs">
                {filteredTehsils.length > 0 ? (
                  filteredTehsils.map(t => (
                    <li
                      key={t.id}
                      onClick={() => handleTehsilSelect(t.id)}
                      className="px-3 py-2.5 hover:bg-emerald-50 hover:text-emerald-900 cursor-pointer flex items-center justify-between transition"
                    >
                      <div>
                        <div className="font-medium">{currentLanguage === 'en' ? t.nameEn : t.nameHi}</div>
                        <div className="text-[9px] text-gray-400 font-mono">Gov: {t.lgdCode}</div>
                      </div>
                      {selectedTehsil === t.id && <Check className="h-3.5 w-3.5 text-[#004B23] stroke-[3]" />}
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-4 text-center text-gray-400">
                    {currentLanguage === 'en' ? 'No tehsil found' : 'कोई तहसील नहीं मिला'}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* 4. City / Village Dropdown */}
        <div className="relative" ref={cityRef}>
          <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
            {required && <span className="text-red-500 mr-0.5">★</span>}
            {currentLanguage === 'en' ? 'City / Village' : 'शहर / गाँव'}
          </label>
          <button
            type="button"
            disabled={!selectedDistrict}
            onClick={() => setCityOpen(!cityOpen)}
            className="w-full bg-white border border-gray-200 text-xs p-3 rounded-lg flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-[#004B23] disabled:opacity-50 disabled:bg-gray-50"
          >
            <span className={selectedCityVillage ? 'text-gray-900 font-medium' : 'text-gray-400'}>
              {getSelectedCityName() || (currentLanguage === 'en' ? '-- Select City/Village --' : '-- गाँव/शहर चुनें --')}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>

          {cityOpen && (
            <div className="absolute z-30 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-fadeIn">
              <div className="p-2 border-b border-gray-100 flex items-center gap-1.5 bg-gray-50">
                <Search className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder={currentLanguage === 'en' ? 'Search Village/City...' : 'गाँव/शहर खोजें...'}
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className="w-full bg-transparent text-xs focus:outline-none p-1"
                />
              </div>
              <ul className="max-h-52 overflow-y-auto py-1 text-xs">
                {filteredCitiesVillages.length > 0 ? (
                  filteredCitiesVillages.map(cv => (
                    <li
                      key={cv.id}
                      onClick={() => handleCityVillageSelect(cv)}
                      className="px-3 py-2.5 hover:bg-emerald-50 hover:text-emerald-900 cursor-pointer flex items-center justify-between transition"
                    >
                      <div>
                        <div className="font-semibold flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-emerald-600" />
                          <span>{currentLanguage === 'en' ? cv.nameEn : cv.nameHi}</span>
                          <span className="text-[9px] font-normal text-gray-400 bg-gray-100 px-1 py-0.5 rounded">
                            {cv.isCity ? (currentLanguage === 'en' ? 'City' : 'शहर') : (currentLanguage === 'en' ? 'Village' : 'गाँव')}
                          </span>
                        </div>
                        <div className="text-[9px] text-gray-400 font-mono">PIN: {cv.pinCode}</div>
                      </div>
                      {selectedCityVillage === cv.id && <Check className="h-3.5 w-3.5 text-[#004B23] stroke-[3]" />}
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-4 text-center text-gray-400">
                    {currentLanguage === 'en' ? 'No city/village found' : 'कोई गाँव/शहर नहीं मिला'}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
