// ============================================================================
// GLOBAL ENTERPRISE SEARCH ENGINE FOR RANGREZ COMMUNITY BHARAT PORTAL
// Searches across Members, Families, Jobs, Scholarships, Hospitals, Blood Donors,
// Colleges, Gallery, Documents, News, Resolutions, Committees, Events, Publications.
// ============================================================================

import { DBService } from './dbService';
import { initialDistricts } from '../data/nationalDirectory';
import { STREAM_CATEGORIES, PROFESSIONAL_COLLEGES_LIST } from '../data/professionalCollegesData';
import { EXAMS } from '../data/careerData';
import { Language } from '../types';

export interface SearchResultItem {
  id: string;
  type: string;
  category: 'Members' | 'Families' | 'Jobs' | 'Scholarships' | 'Hospitals' | 'Blood Donors' | 'Colleges' | 'Gallery' | 'Documents' | 'News' | 'Resolutions' | 'Committees' | 'Events' | 'Publications' | 'General';
  title: string;
  subtitle: string;
  detail: string;
  targetTab: string;
  badgeColor: string;
  relevanceScore: number;
}

export class SearchEngine {
  /**
   * Executes a multi-domain search with bilingual relevance matching
   */
  static search(query: string, lang: Language = 'hi'): SearchResultItem[] {
    if (!query || !query.trim()) return [];
    
    const q = query.trim().toLowerCase();
    const db = DBService.getDB();
    const results: SearchResultItem[] = [];

    // 1. Search Members
    if (db.members) {
      db.members.forEach(m => {
        if (!m.isDeleted && (m.nameEn.toLowerCase().includes(q) || m.nameHi.toLowerCase().includes(q) || m.district.toLowerCase().includes(q) || m.occupation.toLowerCase().includes(q))) {
          results.push({
            id: m.id,
            type: lang === 'en' ? 'Verified Member' : 'सत्यापित सदस्य',
            category: 'Members',
            title: lang === 'en' ? m.nameEn : m.nameHi,
            subtitle: `${m.occupation} • ${m.district}, ${m.state}`,
            detail: lang === 'en' ? `Member ID: ${m.memberId} | Blood: ${m.bloodGroup}` : `सदस्य आईडी: ${m.memberId} | रक्त समूह: ${m.bloodGroup}`,
            targetTab: 'portal',
            badgeColor: 'bg-emerald-100 text-emerald-800',
            relevanceScore: m.nameEn.toLowerCase() === q ? 100 : 80
          });
        }
      });
    }

    // 2. Search Families
    if (db.families) {
      db.families.forEach(f => {
        if (!f.isDeleted && (f.headOfFamilyEn.toLowerCase().includes(q) || f.headOfFamilyHi.toLowerCase().includes(q) || f.district.toLowerCase().includes(q))) {
          results.push({
            id: f.id,
            type: lang === 'en' ? 'Family Census' : 'पारिवारिक जनगणना',
            category: 'Families',
            title: lang === 'en' ? f.headOfFamilyEn : f.headOfFamilyHi,
            subtitle: `${f.district}, ${f.state}`,
            detail: lang === 'en' ? `Total Members: ${f.totalMembersCount} | ID: ${f.familyId}` : `कुल सदस्य: ${f.totalMembersCount} | आईडी: ${f.familyId}`,
            targetTab: 'membership-census',
            badgeColor: 'bg-blue-100 text-blue-800',
            relevanceScore: 75
          });
        }
      });
    }

    // 3. Search Jobs
    if (db.jobs) {
      db.jobs.forEach((j: any) => {
        if (j.titleEn.toLowerCase().includes(q) || j.titleHi.toLowerCase().includes(q) || j.companyEn.toLowerCase().includes(q) || j.locationEn.toLowerCase().includes(q)) {
          results.push({
            id: j.id,
            type: lang === 'en' ? `Job (${j.type})` : `नौकरी (${j.type})`,
            category: 'Jobs',
            title: lang === 'en' ? j.titleEn : j.titleHi,
            subtitle: lang === 'en' ? `${j.companyEn} • ${j.locationEn}` : `${j.companyHi} • ${j.locationHi}`,
            detail: lang === 'en' ? `Salary: ${j.salaryEn}` : `वेतन: ${j.salaryHi}`,
            targetTab: 'jobs-careers',
            badgeColor: 'bg-purple-100 text-purple-800',
            relevanceScore: 85
          });
        }
      });
    }

    // 4. Search Scholarships & Schemes
    if (db.scholarships) {
      db.scholarships.forEach((s: any) => {
        if (s.nameEn.toLowerCase().includes(q) || s.nameHi.toLowerCase().includes(q) || s.categoryEn.toLowerCase().includes(q)) {
          results.push({
            id: s.id,
            type: lang === 'en' ? 'Govt Scheme / Scholarship' : 'सरकारी योजना / छात्रवृत्ति',
            category: 'Scholarships',
            title: lang === 'en' ? s.nameEn : s.nameHi,
            subtitle: lang === 'en' ? s.categoryEn : s.categoryHi,
            detail: lang === 'en' ? `Benefits: ${s.benefitsEn.substring(0, 60)}...` : `लाभ: ${s.benefitsHi.substring(0, 60)}...`,
            targetTab: 'schemes',
            badgeColor: 'bg-amber-100 text-amber-800',
            relevanceScore: 85
          });
        }
      });
    }

    // 5. Search Hospitals
    if (db.hospitals) {
      db.hospitals.forEach(h => {
        if (!h.isDeleted && (h.nameEn.toLowerCase().includes(q) || h.nameHi.toLowerCase().includes(q) || h.city.toLowerCase().includes(q) || h.specialties.some(sp => sp.toLowerCase().includes(q)))) {
          results.push({
            id: h.id,
            type: lang === 'en' ? 'Empanelled Hospital' : 'पैनल अस्पताल',
            category: 'Hospitals',
            title: lang === 'en' ? h.nameEn : h.nameHi,
            subtitle: `${h.city}, ${h.state} • Ph: ${h.contactPhone}`,
            detail: lang === 'en' ? h.discountOffered : h.discountOffered,
            targetTab: 'welfare-hospital',
            badgeColor: 'bg-rose-100 text-rose-800',
            relevanceScore: 80
          });
        }
      });
    }

    // 6. Search Blood Donors & Blood Banks
    if (db.bloodDonors) {
      db.bloodDonors.forEach((bd: any) => {
        if (bd.nameEn.toLowerCase().includes(q) || bd.nameHi.toLowerCase().includes(q) || bd.bloodGroup.toLowerCase() === q || bd.districtEn.toLowerCase().includes(q)) {
          results.push({
            id: bd.id,
            type: lang === 'en' ? `Blood Donor (${bd.bloodGroup})` : `रक्तदाता (${bd.bloodGroup})`,
            category: 'Blood Donors',
            title: lang === 'en' ? bd.nameEn : bd.nameHi,
            subtitle: lang === 'en' ? `${bd.districtEn} • Ph: ${bd.phone}` : `${bd.districtHi} • फोन: ${bd.phone}`,
            detail: lang === 'en' ? `Status: ${bd.isAvailable ? 'Available Now' : 'Currently Unavailable'}` : `स्थिति: ${bd.isAvailable ? 'उपलब्ध' : 'अनुपलब्ध'}`,
            targetTab: 'welfare-blood-donors',
            badgeColor: 'bg-red-100 text-red-800',
            relevanceScore: bd.bloodGroup.toLowerCase() === q ? 95 : 75
          });
        }
      });
    }

    // 7. Search Colleges & Streams
    STREAM_CATEGORIES.forEach((c: any) => {
      if (c.titleEn.toLowerCase().includes(q) || c.titleHi.toLowerCase().includes(q) || c.descriptionEn.toLowerCase().includes(q)) {
        results.push({
          id: c.id,
          type: lang === 'en' ? 'College Stream / Directory' : 'कॉलेज निर्देशिका',
          category: 'Colleges',
          title: lang === 'en' ? c.titleEn : c.titleHi,
          subtitle: lang === 'en' ? `Courses: ${c.courses.slice(0, 3).join(', ')}` : `कोर्स: ${c.courses.slice(0, 3).join(', ')}`,
          detail: lang === 'en' ? c.descriptionEn.substring(0, 70) + '...' : c.descriptionHi.substring(0, 70) + '...',
          targetTab: 'professional-colleges',
          badgeColor: 'bg-indigo-100 text-indigo-800',
          relevanceScore: 80
        });
      }
    });

    PROFESSIONAL_COLLEGES_LIST.forEach((col: any) => {
      if (col.name.toLowerCase().includes(q) || col.city.toLowerCase().includes(q) || col.state.toLowerCase().includes(q) || col.streamNameEn.toLowerCase().includes(q)) {
        results.push({
          id: col.id,
          type: lang === 'en' ? `College (${col.streamNameEn})` : `कॉलेज (${col.streamNameHi})`,
          category: 'Colleges',
          title: col.name,
          subtitle: `${col.city}, ${col.state} • ${col.ownership}`,
          detail: lang === 'en' ? `Affiliated: ${col.affiliatedUniversity}` : `संबद्धता: ${col.affiliatedUniversity}`,
          targetTab: 'professional-colleges',
          badgeColor: 'bg-blue-100 text-blue-800',
          relevanceScore: col.name.toLowerCase().includes(q) ? 95 : 75
        });
      }
    });

    // 8. Search News & Publications
    if (db.media) {
      db.media.forEach((n: any) => {
        if (n.titleEn.toLowerCase().includes(q) || n.titleHi.toLowerCase().includes(q) || n.excerptEn.toLowerCase().includes(q)) {
          results.push({
            id: n.id,
            type: lang === 'en' ? 'News & Media' : 'समाचार एवं अपडेट',
            category: 'News',
            title: lang === 'en' ? n.titleEn : n.titleHi,
            subtitle: lang === 'en' ? `Published: ${n.date} | ${n.categoryEn}` : `प्रकाशित: ${n.date} | ${n.categoryHi}`,
            detail: lang === 'en' ? n.excerptEn : n.excerptHi,
            targetTab: 'media-news',
            badgeColor: 'bg-cyan-100 text-cyan-800',
            relevanceScore: 70
          });
        }
      });
    }

    // 9. Search Mahapanchayat Resolutions
    if (db.mahapanchayatResolutions) {
      db.mahapanchayatResolutions.forEach(r => {
        if (!r.isDeleted && (r.titleEn.toLowerCase().includes(q) || r.titleHi.toLowerCase().includes(q) || r.resolutionNumber.toLowerCase().includes(q) || r.category.toLowerCase().includes(q))) {
          results.push({
            id: r.id,
            type: lang === 'en' ? `Resolution (${r.status})` : `प्रस्ताव (${r.status})`,
            category: 'Resolutions',
            title: lang === 'en' ? r.titleEn : r.titleHi,
            subtitle: `Ref: ${r.resolutionNumber} • Date: ${r.datePassed}`,
            detail: lang === 'en' ? r.descriptionEn.substring(0, 80) + '...' : r.descriptionHi.substring(0, 80) + '...',
            targetTab: 'mahapanchayat-resolutions',
            badgeColor: 'bg-yellow-100 text-yellow-800',
            relevanceScore: 90
          });
        }
      });
    }

    // 10. Search Committees & Regional Chapters
    if (db.committees) {
      db.committees.forEach(c => {
        if (!c.isDeleted && (c.committeeNameEn.toLowerCase().includes(q) || c.committeeNameHi.toLowerCase().includes(q) || c.presidentName.toLowerCase().includes(q) || c.state.toLowerCase().includes(q))) {
          results.push({
            id: c.id,
            type: lang === 'en' ? `Committee (${c.level})` : `समिति (${c.level})`,
            category: 'Committees',
            title: lang === 'en' ? c.committeeNameEn : c.committeeNameHi,
            subtitle: lang === 'en' ? `President: ${c.presidentName} • ${c.state}` : `अध्यक्ष: ${c.presidentName} • ${c.state}`,
            detail: lang === 'en' ? `Members: ${c.totalMembers} | Status: ${c.status}` : `सदस्य: ${c.totalMembers} | स्थिति: ${c.status}`,
            targetTab: 'mahapanchayat-committees',
            badgeColor: 'bg-teal-100 text-teal-800',
            relevanceScore: 85
          });
        }
      });
    }

    // 11. Search Events
    initialDistricts.forEach(d => {
      if (d.nameEn.toLowerCase().includes(q) || d.nameHi.toLowerCase().includes(q) || d.presidentEn.toLowerCase().includes(q)) {
        results.push({
          id: d.id,
          type: lang === 'en' ? 'Regional Chapter' : 'क्षेत्रीय समिति',
          category: 'Committees',
          title: lang === 'en' ? d.nameEn : d.nameHi,
          subtitle: lang === 'en' ? `President: ${d.presidentEn}` : `अध्यक्ष: ${d.presidentHi}`,
          detail: lang === 'en' ? `Families: ${d.familiesCount} • Members: ${d.membersCount}` : `परिवार: ${d.familiesCount} • सदस्य: ${d.membersCount}`,
          targetTab: 'areas',
          badgeColor: 'bg-emerald-100 text-emerald-800',
          relevanceScore: 75
        });
      }
    });

    // Sort by relevance score descending
    results.sort((a, b) => b.relevanceScore - a.relevanceScore);
    return results;
  }
}
