// ============================================================================
// ENTERPRISE GEOGRAPHIC MANAGEMENT SERVICE
// Centrally manages all lookups, validation, and administrative overrides
// for the cascading geographic hierarchy of the entire Republic of India.
// Supports offline local storage caching, search indexes, and audit logs.
// ============================================================================

import {
  Country, State, Division, District, SubDivision, Tehsil, Block, CityVillage,
  INITIAL_COUNTRIES, INITIAL_STATES, INITIAL_DIVISIONS, INITIAL_DISTRICTS,
  INITIAL_SUB_DIVISIONS, INITIAL_TEHSILS, INITIAL_BLOCKS, INITIAL_CITIES_VILLAGES
} from '../data/indiaGeographicMaster';

const GEOGRAPHIC_STORAGE_KEYS = {
  COUNTRIES: 'rcb_geo_countries_v2',
  STATES: 'rcb_geo_states_v2',
  DIVISIONS: 'rcb_geo_divisions_v2',
  DISTRICTS: 'rcb_geo_districts_v2',
  SUB_DIVISIONS: 'rcb_geo_sub_divisions_v2',
  TEHSILS: 'rcb_geo_tehsils_v2',
  BLOCKS: 'rcb_geo_blocks_v2',
  CITIES_VILLAGES: 'rcb_geo_cities_villages_v2',
  AUDIT_LOGS: 'rcb_geo_audit_logs_v2'
};

export interface GeoAuditLog {
  id: string;
  timestamp: string;
  action: 'ADD' | 'UPDATE' | 'MERGE' | 'DISABLE' | 'IMPORT';
  level: 'STATE' | 'DISTRICT' | 'TEHSIL' | 'CITY' | 'PIN';
  actor: string;
  details: string;
}

export class GeographicService {
  private static countries: Country[] = [];
  private static states: State[] = [];
  private static divisions: Division[] = [];
  private static districts: District[] = [];
  private static subDivisions: SubDivision[] = [];
  private static tehsils: Tehsil[] = [];
  private static blocks: Block[] = [];
  private static citiesVillages: CityVillage[] = [];
  private static auditLogs: GeoAuditLog[] = [];

  /**
   * Initializes the database from offline localStorage cache or seeds
   */
  static init() {
    if (this.countries.length > 0) return;

    this.countries = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.COUNTRIES, INITIAL_COUNTRIES);
    this.states = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.STATES, INITIAL_STATES);
    this.divisions = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.DIVISIONS, INITIAL_DIVISIONS);
    this.districts = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.DISTRICTS, INITIAL_DISTRICTS);
    this.subDivisions = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.SUB_DIVISIONS, INITIAL_SUB_DIVISIONS);
    this.tehsils = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.TEHSILS, INITIAL_TEHSILS);
    this.blocks = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.BLOCKS, INITIAL_BLOCKS);
    this.citiesVillages = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.CITIES_VILLAGES, INITIAL_CITIES_VILLAGES);
    this.auditLogs = this.loadFromStorage(GEOGRAPHIC_STORAGE_KEYS.AUDIT_LOGS, []);
  }

  private static loadFromStorage<T>(key: string, seed: T[]): T[] {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      }
      localStorage.setItem(key, JSON.stringify(seed));
      return seed;
    } catch (e) {
      console.warn(`Local storage reading failed for ${key}, using seed values.`, e);
      return seed;
    }
  }

  private static saveToStorage(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Failed to write to local storage key: ${key}`, e);
    }
  }

  // --------------------------------------------------------------------------
  // HIERARCHY QUERIES (Cascading Dropdowns)
  // --------------------------------------------------------------------------

  static getCountries(): Country[] {
    this.init();
    return this.countries.filter(c => c.isActive && !c.isDeleted);
  }

  static getStates(countryId = 'IND'): State[] {
    this.init();
    return this.states.filter(s => s.countryId === countryId && s.isActive && !s.isDeleted);
  }

  static getDivisions(stateId: string): Division[] {
    this.init();
    return this.divisions.filter(d => d.stateId === stateId && d.isActive && !d.isDeleted);
  }

  static getDistricts(stateId: string, divisionId?: string): District[] {
    this.init();
    return this.districts.filter(d => 
      d.stateId === stateId && 
      (!divisionId || d.divisionId === divisionId) && 
      d.isActive && 
      !d.isDeleted
    );
  }

  static getSubDivisions(districtId: string): SubDivision[] {
    this.init();
    return this.subDivisions.filter(sd => sd.districtId === districtId && sd.isActive && !sd.isDeleted);
  }

  static getTehsils(districtId: string, subDivisionId?: string): Tehsil[] {
    this.init();
    return this.tehsils.filter(t => 
      t.districtId === districtId && 
      (!subDivisionId || t.subDivisionId === subDivisionId) && 
      t.isActive && 
      !t.isDeleted
    );
  }

  static getBlocks(districtId: string): Block[] {
    this.init();
    return this.blocks.filter(b => b.districtId === districtId && b.isActive && !b.isDeleted);
  }

  static getCitiesVillages(districtId: string, tehsilId?: string, blockId?: string): CityVillage[] {
    this.init();
    return this.citiesVillages.filter(cv => 
      cv.districtId === districtId &&
      (!tehsilId || cv.tehsilId === tehsilId) &&
      (!blockId || cv.blockId === blockId) &&
      cv.isActive && 
      !cv.isDeleted
    );
  }

  // --------------------------------------------------------------------------
  // ADVANCED AUTOCOMPLETE & FUZZY SEARCH
  // --------------------------------------------------------------------------

  static searchLocation(query: string, limit = 20): CityVillage[] {
    this.init();
    if (!query) return [];
    const lowerQuery = query.toLowerCase().trim();

    return this.citiesVillages
      .filter(cv => {
        if (!cv.isActive || cv.isDeleted) return false;
        
        const nameEnMatch = cv.nameEn.toLowerCase().includes(lowerQuery);
        const nameHiMatch = cv.nameHi.includes(lowerQuery);
        const pinMatch = cv.pinCode.includes(lowerQuery);
        const codeMatch = cv.lgdCode?.toLowerCase().includes(lowerQuery) || false;
        
        const spellingMatch = cv.alternativeSpellings?.some(sp => 
          sp.toLowerCase().includes(lowerQuery)
        ) || false;

        return nameEnMatch || nameHiMatch || pinMatch || spellingMatch || codeMatch;
      })
      .slice(0, limit);
  }

  static findByPinCode(pinCode: string): CityVillage[] {
    this.init();
    if (!pinCode) return [];
    return this.citiesVillages.filter(cv => cv.pinCode === pinCode && cv.isActive && !cv.isDeleted);
  }

  // --------------------------------------------------------------------------
  // STRICT COMBINATION VALIDATION
  // --------------------------------------------------------------------------

  static validateCombination(stateId: string, districtId: string, tehsilId?: string, cityVillageId?: string): { isValid: boolean; reason?: string } {
    this.init();
    
    // 1. Verify District belongs to State
    const district = this.districts.find(d => d.id === districtId);
    if (!district || district.isDeleted || !district.isActive) {
      return { isValid: false, reason: 'District does not exist or is disabled.' };
    }
    if (district.stateId !== stateId) {
      const parentState = this.states.find(s => s.id === stateId);
      return { 
        isValid: false, 
        reason: `District '${district.nameEn}' belongs to state code '${district.stateId}', but parent State is specified as '${parentState?.nameEn || stateId}'.` 
      };
    }

    // 2. Verify Tehsil belongs to District
    if (tehsilId) {
      const tehsil = this.tehsils.find(t => t.id === tehsilId);
      if (!tehsil || tehsil.isDeleted || !tehsil.isActive) {
        return { isValid: false, reason: 'Tehsil does not exist or is disabled.' };
      }
      if (tehsil.districtId !== districtId) {
        return { isValid: false, reason: `Tehsil '${tehsil.nameEn}' does not belong to District '${district.nameEn}'.` };
      }
    }

    // 3. Verify City/Village belongs to District and Tehsil
    if (cityVillageId) {
      const cv = this.citiesVillages.find(c => c.id === cityVillageId);
      if (!cv || cv.isDeleted || !cv.isActive) {
        return { isValid: false, reason: 'City/Village does not exist or is disabled.' };
      }
      if (cv.districtId !== districtId) {
        return { isValid: false, reason: `City/Village '${cv.nameEn}' does not belong to District '${district.nameEn}'.` };
      }
      if (tehsilId && cv.tehsilId && cv.tehsilId !== tehsilId) {
        return { isValid: false, reason: `City/Village '${cv.nameEn}' does not belong to the selected Tehsil.` };
      }
    }

    return { isValid: true };
  }

  // --------------------------------------------------------------------------
  // ADMINISTRATIVE CONFIGURATION (Super Admin Overrides)
  // --------------------------------------------------------------------------

  static addState(state: Omit<State, 'countryId' | 'isActive' | 'isDeleted'>, actor: string): State {
    this.init();
    const newState: State = {
      ...state,
      countryId: 'IND',
      isActive: true,
      isDeleted: false
    };
    this.states.push(newState);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.STATES, this.states);
    this.logAudit(actor, 'ADD', 'STATE', `Added new State: ${newState.nameEn} (LGD: ${newState.lgdCode})`);
    return newState;
  }

  static addDistrict(district: Omit<District, 'isActive' | 'isDeleted'>, actor: string): District {
    this.init();
    const newDistrict: District = {
      ...district,
      isActive: true,
      isDeleted: false
    };
    this.districts.push(newDistrict);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.DISTRICTS, this.districts);
    this.logAudit(actor, 'ADD', 'DISTRICT', `Added new District: ${newDistrict.nameEn} under State: ${newDistrict.stateId}`);
    return newDistrict;
  }

  static addTehsil(tehsil: Omit<Tehsil, 'isActive' | 'isDeleted'>, actor: string): Tehsil {
    this.init();
    const newTehsil: Tehsil = {
      ...tehsil,
      isActive: true,
      isDeleted: false
    };
    this.tehsils.push(newTehsil);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.TEHSILS, this.tehsils);
    this.logAudit(actor, 'ADD', 'TEHSIL', `Added new Tehsil: ${newTehsil.nameEn} under District: ${newTehsil.districtId}`);
    return newTehsil;
  }

  static addCityVillage(cv: Omit<CityVillage, 'isActive' | 'isDeleted'>, actor: string): CityVillage {
    this.init();
    const newCv: CityVillage = {
      ...cv,
      isActive: true,
      isDeleted: false
    };
    this.citiesVillages.push(newCv);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.CITIES_VILLAGES, this.citiesVillages);
    this.logAudit(actor, 'ADD', 'CITY', `Added City/Village: ${newCv.nameEn} (PIN: ${newCv.pinCode})`);
    return newCv;
  }

  static updateState(id: string, updates: Partial<State>, actor: string) {
    this.init();
    this.states = this.states.map(s => s.id === id ? { ...s, ...updates } : s);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.STATES, this.states);
    this.logAudit(actor, 'UPDATE', 'STATE', `Updated state details for stateId: ${id}`);
  }

  static updateDistrict(id: string, updates: Partial<District>, actor: string) {
    this.init();
    this.districts = this.districts.map(d => d.id === id ? { ...d, ...updates } : d);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.DISTRICTS, this.districts);
    this.logAudit(actor, 'UPDATE', 'DISTRICT', `Updated district details for districtId: ${id}`);
  }

  static updateTehsil(id: string, updates: Partial<Tehsil>, actor: string) {
    this.init();
    this.tehsils = this.tehsils.map(t => t.id === id ? { ...t, ...updates } : t);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.TEHSILS, this.tehsils);
    this.logAudit(actor, 'UPDATE', 'TEHSIL', `Updated tehsil details for tehsilId: ${id}`);
  }

  static updateCityVillage(id: string, updates: Partial<CityVillage>, actor: string) {
    this.init();
    this.citiesVillages = this.citiesVillages.map(cv => cv.id === id ? { ...cv, ...updates } : cv);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.CITIES_VILLAGES, this.citiesVillages);
    this.logAudit(actor, 'UPDATE', 'CITY', `Updated city/village details for cityVillageId: ${id}`);
  }

  static mergeLocations(sourceId: string, targetId: string, level: 'DISTRICT' | 'TEHSIL' | 'CITY', actor: string) {
    this.init();
    if (level === 'DISTRICT') {
      const src = this.districts.find(d => d.id === sourceId);
      const tgt = this.districts.find(d => d.id === targetId);
      if (src && tgt) {
        // Reroute children
        this.tehsils = this.tehsils.map(t => t.districtId === sourceId ? { ...t, districtId: targetId } : t);
        this.citiesVillages = this.citiesVillages.map(c => c.districtId === sourceId ? { ...c, districtId: targetId } : c);
        // Soft delete source
        this.districts = this.districts.map(d => d.id === sourceId ? { ...d, isDeleted: true, isActive: false } : d);
        
        this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.TEHSILS, this.tehsils);
        this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.CITIES_VILLAGES, this.citiesVillages);
        this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.DISTRICTS, this.districts);
        this.logAudit(actor, 'MERGE', 'DISTRICT', `Merged District '${src.nameEn}' into '${tgt.nameEn}'. Relocated child Tehsils and Cities.`);
      }
    } else if (level === 'TEHSIL') {
      const src = this.tehsils.find(t => t.id === sourceId);
      const tgt = this.tehsils.find(t => t.id === targetId);
      if (src && tgt) {
        this.citiesVillages = this.citiesVillages.map(c => c.tehsilId === sourceId ? { ...c, tehsilId: targetId } : c);
        this.tehsils = this.tehsils.map(t => t.id === sourceId ? { ...t, isDeleted: true, isActive: false } : t);
        
        this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.CITIES_VILLAGES, this.citiesVillages);
        this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.TEHSILS, this.tehsils);
        this.logAudit(actor, 'MERGE', 'TEHSIL', `Merged Tehsil '${src.nameEn}' into '${tgt.nameEn}'. Relocated child Villages/Cities.`);
      }
    }
  }

  static disableLocation(id: string, level: 'STATE' | 'DISTRICT' | 'TEHSIL' | 'CITY', actor: string, disable = true) {
    this.init();
    const details = `${disable ? 'Disabled' : 'Enabled'} location code: ${id} at level: ${level}`;
    if (level === 'STATE') {
      this.states = this.states.map(s => s.id === id ? { ...s, isActive: !disable } : s);
      this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.STATES, this.states);
    } else if (level === 'DISTRICT') {
      this.districts = this.districts.map(d => d.id === id ? { ...d, isActive: !disable } : d);
      this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.DISTRICTS, this.districts);
    } else if (level === 'TEHSIL') {
      this.tehsils = this.tehsils.map(t => t.id === id ? { ...t, isActive: !disable } : t);
      this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.TEHSILS, this.tehsils);
    } else if (level === 'CITY') {
      this.citiesVillages = this.citiesVillages.map(cv => cv.id === id ? { ...cv, isActive: !disable } : cv);
      this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.CITIES_VILLAGES, this.citiesVillages);
    }
    this.logAudit(actor, 'DISABLE', level, details);
  }

  static getAuditLogs(): GeoAuditLog[] {
    this.init();
    return this.auditLogs;
  }

  private static logAudit(actor: string, action: GeoAuditLog['action'], level: GeoAuditLog['level'], details: string) {
    const log: GeoAuditLog = {
      id: 'GEO-AUD-' + Math.floor(100000 + Math.random() * 900000),
      timestamp: new Date().toISOString(),
      action,
      level,
      actor,
      details
    };
    this.auditLogs.unshift(log);
    this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.AUDIT_LOGS, this.auditLogs);
  }

  // --------------------------------------------------------------------------
  // BULK CSV/JSON IMPORT & VALIDATION WITH TRANSACTION ROLLBACK SUPPORT
  // --------------------------------------------------------------------------

  static bulkImportJson(jsonString: string, actor: string): { success: boolean; importedCount: number; errors: string[] } {
    this.init();
    const errors: string[] = [];
    let importedCount = 0;

    // Snapshot current database state for atomic rollback
    const originalStates = [...this.states];
    const originalDistricts = [...this.districts];
    const originalTehsils = [...this.tehsils];
    const originalCities = [...this.citiesVillages];

    try {
      const data = JSON.parse(jsonString);
      if (!Array.isArray(data)) {
        throw new Error('Root element is not a JSON array.');
      }

      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const rowNum = i + 1;

        if (!item.type) {
          errors.push(`Row ${rowNum}: Missing 'type' field (must be state/district/tehsil/city).`);
          continue;
        }

        const type = String(item.type).toUpperCase();
        if (type === 'STATE') {
          if (!item.id || !item.nameEn || !item.nameHi) {
            errors.push(`Row ${rowNum}: State is missing required fields (id, nameEn, nameHi).`);
            continue;
          }
          // Check duplicate
          if (this.states.some(s => s.id === item.id)) {
            errors.push(`Row ${rowNum}: Duplicate State ID detected: '${item.id}'.`);
            continue;
          }
          this.states.push({
            id: item.id,
            countryId: 'IND',
            nameEn: item.nameEn,
            nameHi: item.nameHi,
            lgdCode: item.lgdCode || 'N/A',
            isUt: !!item.isUt,
            isActive: true,
            isDeleted: false
          });
          importedCount++;
        } 
        else if (type === 'DISTRICT') {
          if (!item.id || !item.stateId || !item.nameEn || !item.nameHi) {
            errors.push(`Row ${rowNum}: District is missing required fields (id, stateId, nameEn, nameHi).`);
            continue;
          }
          if (!this.states.some(s => s.id === item.stateId)) {
            errors.push(`Row ${rowNum}: Referencing non-existent State ID: '${item.stateId}'.`);
            continue;
          }
          if (this.districts.some(d => d.id === item.id)) {
            errors.push(`Row ${rowNum}: Duplicate District ID detected: '${item.id}'.`);
            continue;
          }
          this.districts.push({
            id: item.id,
            stateId: item.stateId,
            divisionId: item.divisionId,
            nameEn: item.nameEn,
            nameHi: item.nameHi,
            lgdCode: item.lgdCode || 'N/A',
            isActive: true,
            isDeleted: false
          });
          importedCount++;
        }
        else if (type === 'TEHSIL') {
          if (!item.id || !item.districtId || !item.nameEn || !item.nameHi) {
            errors.push(`Row ${rowNum}: Tehsil is missing required fields (id, districtId, nameEn, nameHi).`);
            continue;
          }
          if (!this.districts.some(d => d.id === item.districtId)) {
            errors.push(`Row ${rowNum}: Referencing non-existent District ID: '${item.districtId}'.`);
            continue;
          }
          if (this.tehsils.some(t => t.id === item.id)) {
            errors.push(`Row ${rowNum}: Duplicate Tehsil ID detected: '${item.id}'.`);
            continue;
          }
          this.tehsils.push({
            id: item.id,
            districtId: item.districtId,
            nameEn: item.nameEn,
            nameHi: item.nameHi,
            lgdCode: item.lgdCode || 'N/A',
            isActive: true,
            isDeleted: false
          });
          importedCount++;
        }
        else if (type === 'CITY' || type === 'VILLAGE') {
          if (!item.id || !item.districtId || !item.nameEn || !item.nameHi || !item.pinCode) {
            errors.push(`Row ${rowNum}: City/Village is missing required fields (id, districtId, nameEn, nameHi, pinCode).`);
            continue;
          }
          if (!this.districts.some(d => d.id === item.districtId)) {
            errors.push(`Row ${rowNum}: Referencing non-existent District ID: '${item.districtId}'.`);
            continue;
          }
          if (this.citiesVillages.some(c => c.id === item.id)) {
            errors.push(`Row ${rowNum}: Duplicate City/Village ID detected: '${item.id}'.`);
            continue;
          }
          this.citiesVillages.push({
            id: item.id,
            districtId: item.districtId,
            tehsilId: item.tehsilId,
            nameEn: item.nameEn,
            nameHi: item.nameHi,
            pinCode: item.pinCode,
            isCity: type === 'CITY',
            lgdCode: item.lgdCode,
            isActive: true,
            isDeleted: false
          });
          importedCount++;
        } else {
          errors.push(`Row ${rowNum}: Unknown record type: '${item.type}'.`);
        }
      }

      // Rollback if there are block errors
      if (errors.length > 0) {
        this.states = originalStates;
        this.districts = originalDistricts;
        this.tehsils = originalTehsils;
        this.citiesVillages = originalCities;
        return { success: false, importedCount: 0, errors };
      }

      // Persist imports
      this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.STATES, this.states);
      this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.DISTRICTS, this.districts);
      this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.TEHSILS, this.tehsils);
      this.saveToStorage(GEOGRAPHIC_STORAGE_KEYS.CITIES_VILLAGES, this.citiesVillages);
      
      this.logAudit(actor, 'IMPORT', 'CITY', `Successfully imported ${importedCount} geographical assets from JSON file.`);
      return { success: true, importedCount, errors: [] };

    } catch (e: any) {
      // Complete exception rollback
      this.states = originalStates;
      this.districts = originalDistricts;
      this.tehsils = originalTehsils;
      this.citiesVillages = originalCities;
      return { success: false, importedCount: 0, errors: [`[PARSING EXCEPTION] Rollback executed. Detail: ${e.message || String(e)}`] };
    }
  }
}
