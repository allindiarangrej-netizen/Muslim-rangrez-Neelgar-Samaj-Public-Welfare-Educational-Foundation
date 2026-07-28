import json

schools = []

# Template generator helper
def create_school(id_num, name, short_name, logo, cover, city, district, state, board, affil_no, school_code, udise, ownership, school_type, medium, est_year, class_range, streams, fees_annual, student_count, teacher_count, principal, phone, email, website, admission_link, erp_link, address, maps_link, minority_type, hostel_avail, transport_avail, smart_class, labs, sports, scholarship_info, description, board_results_10, board_results_12):
    return {
        "id": f"SCH-{id_num:04d}",
        "name": name,
        "shortName": short_name,
        "logo": logo,
        "coverImage": cover,
        "campusGallery": [
            cover,
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800"
        ],
        "state": state,
        "district": district,
        "city": city,
        "fullAddress": address,
        "googleMapsUrl": maps_link,
        "websiteUrl": website,
        "admissionPageUrl": admission_link,
        "erpLoginUrl": erp_link,
        "board": board, # CBSE, CISCE, State Board, IB, CAIE, NIOS
        "affiliationNo": affil_no,
        "schoolCode": school_code,
        "udiseCode": udise,
        "mediumOfInstruction": medium, # ["English"], ["English", "Hindi"], etc.
        "establishmentYear": est_year,
        "ownership": ownership, # Government, Private, Aided, Unaided, Minority Institution, Trust, Society
        "schoolType": school_type, # Play School, Pre-Nursery, Primary, Middle, High School, Senior Secondary, Kendriya Vidyalaya, Navodaya Vidyalaya, Sainik School, EMRS, PM SHRI, Minority, Residential, Day Boarding, Boarding, International, Private, Missionary, NGO
        "classesOffered": class_range, # e.g. ["Pre-Nursery", "Nursery", "LKG", "UKG", "Class 1", ..., "Class 12"]
        "streamsOffered": streams, # ["Science", "Commerce", "Arts", "Vocational", "Integrated Programmes"]
        "annualFee": fees_annual, # e.g. "₹2,400 - ₹5,000 / year" or "₹1,20,000 / year"
        "studentStrength": student_count,
        "teacherStrength": teacher_count,
        "studentTeacherRatio": f"{round(student_count / max(1, teacher_count))}:1",
        "principalName": principal,
        "contactPhone": phone,
        "contactEmail": email,
        "facilities": {
            "smartClassrooms": smart_class,
            "scienceLabs": labs,
            "computerLab": True,
            "roboticsLab": True if "International" in school_type or "Private" in school_type or "Residential" in school_type else False,
            "aiLab": True if "International" in school_type or "Private" in school_type else False,
            "stemLab": True,
            "mathematicsLab": True,
            "library": True,
            "digitalLibrary": True,
            "sportsGround": sports,
            "indoorSports": True,
            "swimmingPool": True if "Residential" in school_type or "International" in school_type or "Sainik" in school_type else False,
            "musicRoom": True,
            "danceRoom": True,
            "artRoom": True,
            "medicalRoom": True,
            "transport": transport_avail,
            "hostel": hostel_avail,
            "mess": hostel_avail,
            "cctv": True,
            "wifiCampus": True
        },
        "academics": {
            "boardResultsClass10": board_results_10,
            "boardResultsClass12": board_results_12,
            "topPerformers": ["National Science Olympiad Rank 1", "CBSE District Topper 98.6%", "NTSE Scholars"],
            "olympiadPerformance": "Gold Medals in IMO, NSO, IHO and KVPY Fellowships",
            "competitiveExamCoaching": "Integrated JEE Main / Advanced, NEET UG & CUET Preparation Wing",
            "languagesOffered": ["English", "Hindi", "Urdu", "Sanskrit", "French"],
            "activityClubs": ["Robotics & Coding Club", "Eco & Green Club", "Debating & Model UN Society", "Literary & Quiz Club", "Astronomy Club"]
        },
        "extracurricular": {
            "sports": ["Cricket", "Football", "Basketball", "Badminton", "Table Tennis", "Athletics", "Volleyball"],
            "ncc": True if "Government" in ownership or "Sainik" in school_type or "KV" in school_type or "High" in school_type else False,
            "scoutsAndGuides": True,
            "yoga": True,
            "martialArts": True,
            "music": True,
            "dance": True,
            "drama": True,
            "art": True,
            "debate": True,
            "quiz": True,
            "codingClub": True,
            "roboticsClub": True if "Private" in school_type or "International" in school_type else False,
            "entrepreneurshipClub": True,
            "environmentalClub": True
        },
        "admission": {
            "eligibility": "Based on age criteria & merit/entrance test as per board guidelines.",
            "ageCriteria": "Pre-Nursery: 3+ years | Class 1: 6+ years as of April 1st",
            "admissionProcess": "Online Registration -> Document Verification -> Aptitude Assessment / Interaction -> Fee Payment",
            "requiredDocuments": ["Birth Certificate", "Transfer Certificate (TC)", "Previous Marksheet", "Aadhar Card", "Category/Minority Certificate (if applicable)", "Passport Photos"],
            "feeStructure": f"Admission Fee: ₹5,000 | Annual Tuition Fee: {fees_annual} | Transport / Activity extra",
            "onlineAdmissionAvailable": True,
            "offlineAdmissionAvailable": True,
            "importantDates": "Application Opens: Nov 15 | Last Date: Jan 31 | Entrance Test: Feb 15 | Session Starts: April 1",
            "officialAdmissionLink": admission_link
        },
        "transportDetails": {
            "available": transport_avail,
            "gpsTracking": True if transport_avail else False,
            "busRoutes": "Covering all major city hubs and suburban routes",
            "pickupPoints": "Designated safe stop locations with female attendant",
            "charges": "₹1,200 - ₹3,500 / month based on distance" if transport_avail else "N/A"
        },
        "hostelDetails": {
            "available": hostel_avail,
            "boysHostel": hostel_avail,
            "girlsHostel": hostel_avail,
            "capacity": "250 - 800 Boarders" if hostel_avail else "N/A",
            "hostelFees": "₹65,000 - ₹1,80,000 / year (Inclusive of Mess & Laundry)" if hostel_avail else "N/A",
            "security": "24x7 Wardens, CCTV Surveillance, Bio-metric Access Control",
            "medicalSupport": "Resident Doctor & Resident Nursing Staff with Ambulance"
        },
        "safety": {
            "cctv": True,
            "fireSafety": "Certified Fire Fighting Systems & Sprinklers",
            "securityStaff": "24x7 Guard Personnel & Entry Gate Verification",
            "medicalFacility": "In-house Infirmary with Trained Nurse",
            "childProtectionPolicy": "Strict POCSO Guidelines & POSH Committee Complaint Box",
            "disasterManagement": "Regular Earthquake & Fire Drill Trainings"
        },
        "scholarships": scholarship_info,
        "parentsSection": {
            "admissionGuide": "Download official admission handbook from portal.",
            "feeInformation": f"Tuition & Activity Breakdown: {fees_annual}",
            "transportInformation": "GPS tracking app access provided to parents.",
            "uniformDetails": "Standard formal school uniform, PE kit, house t-shirt & blazer.",
            "bookList": "NCERT / Board Prescribed Books and Workbooks.",
            "schoolCalendar": "Annual Academic Calendar available online.",
            "holidayCalendar": "Gazetted Govt & Festivity Holidays observed.",
            "circulars": "E-circulars sent via SMS and School ERP app.",
            "ptmSchedule": "Quarterly Parent-Teacher Meeting on 2nd Saturdays."
        },
        "minorityInstitution": True if minority_type != "None" or "Minority" in ownership or "Minority" in school_type else False,
        "minorityType": minority_type, # Muslim, Christian, Sikh, Jain, Buddhist, Linguistic, None
        "description": description
    }

print("Generator script created.")
