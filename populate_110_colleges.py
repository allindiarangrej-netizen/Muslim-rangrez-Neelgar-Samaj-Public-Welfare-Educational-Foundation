import json
import re

# Python script to load the existing header and append 110+ verified colleges in TS format

data_path = "/src/data/medicalCollegesData.ts"

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Update InstitutionType definition
old_inst_type = """export type InstitutionType = 
  | 'Government'
  | 'Private'
  | 'Minority'
  | 'Deemed University'
  | 'Autonomous';"""

new_inst_type = """export type InstitutionType = 
  | 'Government'
  | 'Private'
  | 'Minority'
  | 'Deemed University'
  | 'Autonomous'
  | 'AIIMS'
  | 'AYUSH'
  | 'Dental'
  | 'Medical University';"""

if old_inst_type in content:
    content = content.replace(old_inst_type, new_inst_type)

# Add missing optional fields to CollegeProfile interface if needed
if "city?:" not in content and "city:" not in content:
    content = content.replace("district: string;\n", "district: string;\n  city?: string;\n")
if "logoUrl?:" not in content:
    content = content.replace("name: string;\n", "name: string;\n  logoUrl?: string;\n  coverImageUrl?: string;\n")
if "offeredCourses?:" not in content:
    content = content.replace("course: MedicalCourse;\n", "course: MedicalCourse;\n  offeredCourses?: MedicalCourse[];\n")
if "accreditation?:" not in content:
    content = content.replace("regulatoryAuthority: RegulatoryAuthority;\n", "regulatoryAuthority: RegulatoryAuthority;\n  accreditation?: string;\n  nirfRanking?: string;\n")
if "placementInformation?:" not in content:
    content = content.replace("scholarshipInfo: string;\n", "scholarshipInfo: string;\n  placementInformation?: string;\n  entranceExam?: string;\n")
if "admissionPortalUrl?:" not in content:
    content = content.replace("admissionProcess: string;\n", "admissionProcess: string;\n  admissionPortalUrl?: string;\n")
if "campusGallery?:" not in content:
    content = content.replace("officialRegistrySearchUrl: string;\n", "officialRegistrySearchUrl: string;\n  campusGallery?: string[];\n  prospectusUrl?: string;\n  lastVerifiedDate?: string;\n")

# Find where CURATED_MEDICAL_COLLEGES starts
split_keyword = "export const CURATED_MEDICAL_COLLEGES: CollegeProfile[] = ["
if split_keyword in content:
    header_part = content.split(split_keyword)[0]
else:
    print("Error: CURATED_MEDICAL_COLLEGES not found!")
    exit(1)

print("Header parsed successfully.")
