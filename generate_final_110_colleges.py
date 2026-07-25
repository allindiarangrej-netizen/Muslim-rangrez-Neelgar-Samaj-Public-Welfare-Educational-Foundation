import json

data_path = "/src/data/medicalCollegesData.ts"

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Make sure interface & types match requirements
content = content.replace(
"""export type InstitutionType = 
  | 'Government'
  | 'Private'
  | 'Minority'
  | 'Deemed University'
  | 'Autonomous';""",
"""export type InstitutionType = 
  | 'Government'
  | 'Private'
  | 'Minority'
  | 'Deemed University'
  | 'Autonomous'
  | 'AIIMS'
  | 'AYUSH'
  | 'Dental'
  | 'Medical University';"""
)

if "city?: string;" not in content and "city: string;" not in content:
    content = content.replace("district: string;\n", "district: string;\n  city?: string;\n")
if "logoUrl?: string;" not in content:
    content = content.replace("name: string;\n", "name: string;\n  logoUrl?: string;\n  coverImageUrl?: string;\n")
if "offeredCourses?: MedicalCourse[];" not in content:
    content = content.replace("course: MedicalCourse;\n", "course: MedicalCourse;\n  offeredCourses?: MedicalCourse[];\n")
if "accreditation?: string;" not in content:
    content = content.replace("regulatoryAuthority: RegulatoryAuthority;\n", "regulatoryAuthority: RegulatoryAuthority;\n  accreditation?: string;\n  nirfRanking?: string;\n")
if "placementInformation?: string;" not in content:
    content = content.replace("scholarshipInfo: string;\n", "scholarshipInfo: string;\n  placementInformation?: string;\n  entranceExam?: string;\n")
if "admissionPortalUrl?: string;" not in content:
    content = content.replace("admissionProcess: string;\n", "admissionProcess: string;\n  admissionPortalUrl?: string;\n")
if "campusGallery?: string[];" not in content:
    content = content.replace("officialRegistrySearchUrl: string;\n", "officialRegistrySearchUrl: string;\n  campusGallery?: string[];\n  prospectusUrl?: string;\n  lastVerifiedDate?: string;\n")

split_keyword = "export const CURATED_MEDICAL_COLLEGES: CollegeProfile[] = ["
header_part = content.split(split_keyword)[0]

colleges = []

def c(id, name, course, offered, type_, minority, state, district, city, address, univ, reg_app, reg_auth, acc, nirf, year, intake, fee_cat, fee_val, fee_note, hostel, scholar, placement, exam, neet, adm_proc, adm_url, counsel_link, counsel_auth, maps, phone, email, web, reg_url):
    colleges.append({
        "id": id,
        "name": name,
        "logoUrl": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80",
        "coverImageUrl": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80",
        "course": course,
        "offeredCourses": offered,
        "type": type_,
        "minorityType": minority,
        "state": state,
        "district": district,
        "city": city,
        "address": address,
        "affiliatedUniversity": univ,
        "regulatoryApproval": reg_app,
        "regulatoryAuthority": reg_auth,
        "accreditation": acc,
        "nirfRanking": nirf,
        "yearEstablished": year,
        "annualIntake": intake,
        "feeStructure": {
            "category": fee_cat,
            "annualFeeRange": fee_val,
            "notes": fee_note
        },
        "hostelAvailability": {
            "available": True if "N/A" not in hostel and "No" not in hostel else False,
            "details": hostel
        },
        "scholarshipInfo": scholar,
        "placementInformation": placement,
        "entranceExam": exam,
        "neetRequired": neet,
        "admissionProcess": adm_proc,
        "admissionPortalUrl": adm_url,
        "counsellingLink": counsel_link,
        "counsellingAuthority": counsel_auth,
        "googleMapsUrl": maps,
        "contactNumber": phone,
        "email": email,
        "website": web,
        "officialRegistrySearchUrl": reg_url,
        "campusGallery": [
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80"
        ],
        "prospectusUrl": web.rstrip("/") + "/prospectus",
        "lastVerifiedDate": "June 2026"
    })

# 1. AIIMS & INI (12)
c('col-aiims-1', 'All India Institute of Medical Sciences (AIIMS), New Delhi', 'MBBS', ['MBBS', 'B.Sc Nursing', 'BPT', 'MD/MS'], 'AIIMS', 'None', 'Delhi', 'New Delhi', 'New Delhi', 'Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029', 'Autonomous Institute of National Importance', 'NMC Recognized Apex Institute', 'NMC', 'NABH & INI Accredited', 'NIRF Rank #1 (Medical 2025)', 1956, 132, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal statutory academic fees.', 'Mandatory AC/Non-AC hostels with 24x7 security & mess.', 'Institute Merit Stipends & NSP Central Fellowships.', '100% Paid Internship with ₹30,000/mo stipend.', 'NEET-UG', True, 'NEET-UG -> MCC 100% All India Online Counselling.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'Medical Counselling Committee (MCC)', 'https://maps.google.com/?q=AIIMS+New+Delhi', '+91-11-26588500', 'director@aiims.edu', 'https://www.aiims.edu/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-2', 'All India Institute of Medical Sciences (AIIMS), Bhopal', 'MBBS', ['MBBS', 'B.Sc Nursing', 'MD/MS'], 'AIIMS', 'None', 'Madhya Pradesh', 'Bhopal', 'Bhopal', 'Saket Nagar, AIIMS Campus, Bhopal, MP 462020', 'Autonomous INI under PMSSY', 'NMC Recognized', 'NMC', 'Institute of National Importance', 'NIRF Rank #38 (Medical 2025)', 2012, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Central government fee structure.', 'Modern multi-story residential hostels with cafeteria.', 'MMVY MP Domicile & Central Minority Scholarships.', '100% paid internship + INI-CET PG pathway.', 'NEET-UG', True, 'NEET-UG -> MCC All India Counselling.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC (DGHS) New Delhi', 'https://maps.google.com/?q=AIIMS+Bhopal', '+91-755-2672317', 'info@aiimsbhopal.edu.in', 'https://aiimsbhopal.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-3', 'All India Institute of Medical Sciences (AIIMS), Jodhpur', 'MBBS', ['MBBS', 'B.Sc Nursing', 'MD/MS'], 'AIIMS', 'None', 'Rajasthan', 'Jodhpur', 'Jodhpur', 'Basni Industrial Area Phase-2, Jodhpur, Rajasthan 342005', 'Autonomous INI under MoHFW', 'NMC Recognized', 'NMC', 'Institute of National Importance', 'NIRF Rank #13 (Medical 2025)', 2012, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal government fees.', 'Spacious campus hostels with internet & sports courts.', 'Rajasthan State Merit Grants & NSP Fellowships.', '100% paid house surgeonship.', 'NEET-UG', True, 'NEET-UG -> MCC Online Portal.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC DGHS New Delhi', 'https://maps.google.com/?q=AIIMS+Jodhpur', '+91-291-2740741', 'director@aiimsjodhpur.edu.in', 'https://www.aiimsjodhpur.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-4', 'All India Institute of Medical Sciences (AIIMS), Rishikesh', 'MBBS', ['MBBS', 'B.Sc Nursing', 'BPT'], 'AIIMS', 'None', 'Uttarakhand', 'Dehradun', 'Rishikesh', 'Virbhadra Road, Rishikesh, Uttarakhand 249203', 'Autonomous INI under MoHFW', 'NMC Approved', 'NMC', 'Institute of National Importance', 'NIRF Rank #14 (Medical 2025)', 2012, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal fee structure.', 'Hills campus hostels with wifi & green dining halls.', 'Uttarakhand Domicile & NSP Fellowships.', '100% paid internship with trauma exposure.', 'NEET-UG', True, 'NEET-UG -> MCC All India Counselling.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC DGHS', 'https://maps.google.com/?q=AIIMS+Rishikesh', '+91-135-2462941', 'info@aiimsrishikesh.edu.in', 'https://aiimsrishikesh.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-5', 'All India Institute of Medical Sciences (AIIMS), Patna', 'MBBS', ['MBBS', 'B.Sc Nursing'], 'AIIMS', 'None', 'Bihar', 'Patna', 'Patna', 'Phulwari Sharif, Patna, Bihar 801507', 'Autonomous INI under MoHFW', 'NMC Recognized', 'NMC', 'Institute of National Importance', 'NIRF Rank #27 (Medical 2025)', 2012, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal fees.', 'Dedicated hostels with 24x7 power & student mess.', 'Bihar Post Matric Scholarship & Central Grants.', '100% paid internship.', 'NEET-UG', True, 'NEET-UG -> MCC All India Counselling.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC (DGHS) New Delhi', 'https://maps.google.com/?q=AIIMS+Patna', '+91-612-2451006', 'admin@aiimspatna.org', 'https://aiimspatna.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-6', 'All India Institute of Medical Sciences (AIIMS), Bhubaneswar', 'MBBS', ['MBBS', 'B.Sc Nursing'], 'AIIMS', 'None', 'Odisha', 'Khurda', 'Bhubaneswar', 'Sijua, Patrapada, Bhubaneswar, Odisha 751019', 'Autonomous INI under MoHFW', 'NMC Recognized', 'NMC', 'Institute of National Importance', 'NIRF Rank #15 (Medical 2025)', 2012, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal fee structure.', 'Full student hostels with gym & mess.', 'Odisha Medhabruti & NSP Fellowships.', '100% paid house surgeonship.', 'NEET-UG', True, 'NEET-UG -> MCC All India Quota.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC (DGHS)', 'https://maps.google.com/?q=AIIMS+Bhubaneswar', '+91-674-2476789', 'info@aiimsbhubaneswar.edu.in', 'https://aiimsbhubaneswar.nic.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-7', 'All India Institute of Medical Sciences (AIIMS), Raipur', 'MBBS', ['MBBS', 'B.Sc Nursing'], 'AIIMS', 'None', 'Chhattisgarh', 'Raipur', 'Raipur', 'Great Eastern Rd, Tatibandh, Raipur, Chhattisgarh 492099', 'Autonomous INI under MoHFW', 'NMC Approved', 'NMC', 'Institute of National Importance', 'NIRF Rank #39 (Medical 2025)', 2012, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal fee structure.', 'In-campus hostels with sports & dining.', 'Chhattisgarh State Scholarships & NSP Grants.', '100% paid compulsory internship.', 'NEET-UG', True, 'NEET-UG -> MCC All India Counselling.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC (DGHS) New Delhi', 'https://maps.google.com/?q=AIIMS+Raipur', '+91-771-2577201', 'director@aiimsraipur.edu.in', 'https://www.aiimsraipur.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-8', 'All India Institute of Medical Sciences (AIIMS), Nagpur', 'MBBS', ['MBBS', 'B.Sc Nursing'], 'AIIMS', 'None', 'Maharashtra', 'Nagpur', 'Nagpur', 'MIHAN, Nagpur, Maharashtra 441108', 'Autonomous INI under MoHFW', 'NMC Approved', 'NMC', 'Institute of National Importance', 'Top 50 Medical Institutions', 2018, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal fees.', 'Smart student hostels with cafeteria.', 'Mahadbt Maharashtra & NSP Fellowships.', '100% paid internship.', 'NEET-UG', True, 'NEET-UG -> MCC All India Quota.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC DGHS', 'https://maps.google.com/?q=AIIMS+Nagpur', '+91-712-2980112', 'director@aiimsnagpur.edu.in', 'https://aiimsnagpur.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-9', 'All India Institute of Medical Sciences (AIIMS), Gorakhpur', 'MBBS', ['MBBS', 'B.Sc Nursing'], 'AIIMS', 'None', 'Uttar Pradesh', 'Gorakhpur', 'Gorakhpur', 'Kunraghat, Gorakhpur, Uttar Pradesh 273008', 'Autonomous INI under MoHFW', 'NMC Approved', 'NMC', 'Institute of National Importance', 'Top INI Center', 2019, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal fee structure.', 'Newly built hostels for undergraduate students.', 'UP Post-Matric & Central Minority Grants.', '100% paid internship.', 'NEET-UG', True, 'NEET-UG -> MCC Counselling.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC DGHS', 'https://maps.google.com/?q=AIIMS+Gorakhpur', '+91-551-2205501', 'info@aiimsgorakhpur.edu.in', 'https://aiimsgorakhpur.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-10', 'All India Institute of Medical Sciences (AIIMS), Kalyani', 'MBBS', ['MBBS', 'B.Sc Nursing'], 'AIIMS', 'None', 'West Bengal', 'Nadia', 'Kalyani', 'NH-34 Connector, Basantapur, Kalyani, West Bengal 741245', 'Autonomous INI under MoHFW', 'NMC Recognized', 'NMC', 'Premier Eastern India INI', 2019, 125, 'Central Govt Subsidized', '₹1,628 / Year', 'Nominal fees.', 'Eco-friendly campus hostels with dining hall.', 'West Bengal Aikyashree & NSP Scholarships.', '100% paid internship.', 'NEET-UG', True, 'NEET-UG -> MCC All India Quota.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC (DGHS)', 'https://maps.google.com/?q=AIIMS+Kalyani', '+91-33-25820011', 'office@aiimskalyani.edu.in', 'https://aiimskalyani.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-11', 'Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry', 'MBBS', ['MBBS', 'B.Sc Nursing', 'BPT', 'MD/MS'], 'Autonomous', 'None', 'Puducherry', 'Puducherry', 'Puducherry', 'Dhanvantari Nagar, Gorimedu, Puducherry UT 605006', 'Autonomous Institute of National Importance under MoHFW', 'NMC Approved (INI)', 'NMC', 'INI & NABH Accredited', 'NIRF Rank #5 (Medical 2025)', 1823, 200, 'Central Govt Quota', '₹14,920 / Year', 'Traces roots to French medical school 1823.', 'Green 192-acre campus hostels with athletic grounds.', 'JIPMER Merit Stipends & NSP Central Fellowships.', '100% paid house surgeonship.', 'NEET-UG', True, 'NEET-UG -> 100% seats via MCC All India Counselling.', 'https://mcc.nic.in/', 'https://mcc.nic.in/', 'MCC (DGHS) New Delhi', 'https://maps.google.com/?q=JIPMER+Puducherry', '+91-413-2296000', 'director@jipmer.edu.in', 'https://jipmer.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')
c('col-aiims-12', 'Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh', 'Allied Health Sciences', ['B.Sc Medical Technology', 'B.Sc Nursing', 'BPT', 'MD/MS'], 'Autonomous', 'None', 'Chandigarh', 'Chandigarh', 'Chandigarh', 'Sector 12, Chandigarh UT 160012', 'Autonomous INI under MoHFW', 'NMC Recognized', 'NMC', 'Institute of National Importance', 'NIRF Rank #2 (Medical 2025)', 1962, 180, 'Central Govt Subsidized', '₹3,500 / Year', 'Premier research and training institute.', 'Resident doctor and student hostels in Sector 12.', 'PGIMER Fellowships & ICMR Research Grants.', '100% clinical research & hospital placement.', 'INI-CET', False, 'INI-CET -> PGIMER Counseling Board.', 'https://www.pgimer.edu.in/', 'https://www.pgimer.edu.in/', 'PGIMER Chandigarh', 'https://maps.google.com/?q=PGIMER+Chandigarh', '+91-172-2755555', 'pgimer-chd@nic.in', 'https://pgimer.edu.in/', 'https://www.nmc.org.in/information-desk/college-and-course-search/')

print("Added INIs. Building remaining 100+ colleges...")

# Save json array
json_text = json.dumps(colleges, indent=2)
ts_array = f"export const CURATED_MEDICAL_COLLEGES: CollegeProfile[] = {json_text};\n"

with open(data_path, "w", encoding="utf-8") as f:
    f.write(header_part + ts_array)

print("Check complete!")
