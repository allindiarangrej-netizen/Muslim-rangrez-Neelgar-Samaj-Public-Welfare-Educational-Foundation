import json
import re

print("Starting expansion script for medical colleges dataset...")

ts_file = "/src/data/medicalCollegesData.ts"

with open(ts_file, "r", encoding="utf-8") as f:
    text = f.read()

# Update InstitutionType definition to include AIIMS, AYUSH, Dental, Medical University
text = text.replace(
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

# Extract header before export const CURATED_MEDICAL_COLLEGES
split_key = "export const CURATED_MEDICAL_COLLEGES: CollegeProfile[] = ["
if split_key not in text:
    print("Error: Could not find array declaration.")
    exit(1)

header_code = text.split(split_key)[0]

# Let's parse the current JS/TS array using node or regex, or re-generate all 108 items cleanly!
print("Header extracted cleanly.")
