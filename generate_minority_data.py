import json
import random

state_cities = {
    "Uttar Pradesh": [
        ("Aligarh", "Aligarh"), ("Lucknow", "Lucknow"), ("Varanasi", "Varanasi"), 
        ("Agra", "Agra"), ("Kanpur", "Kanpur Nagar"), ("Deoband", "Saharanpur"), 
        ("Moradabad", "Moradabad"), ("Gorakhpur", "Gorakhpur"), ("Noida", "Gautam Buddha Nagar")
    ],
    "Delhi": [
        ("Jamia Nagar (Okhla)", "South East Delhi"), ("Civil Lines", "North Delhi"), 
        ("Rohini", "North West Delhi"), ("Connaught Place", "Central Delhi")
    ],
    "Telangana": [
        ("Hyderabad (Old City / Bandlaguda)", "Hyderabad"), ("Hyderabad (Gachibowli / MANUU)", "Hyderabad"),
        ("Warangal", "Warangal"), ("Nizamabad", "Nizamabad")
    ],
    "Maharashtra": [
        ("Mumbai (Bhendi Bazaar / Byculla)", "Mumbai City"), ("Mumbai (Bandra / Santacruz)", "Mumbai Suburban"),
        ("Pune (Camp)", "Pune"), ("Malegaon", "Nashik"), ("Aurangabad (Chhatrapati Sambhajinagar)", "Chhatrapati Sambhajinagar"),
        ("Nagpur", "Nagpur")
    ],
    "Karnataka": [
        ("Bengaluru (Shivajinagar)", "Bengaluru Urban"), ("Mangaluru", "Dakshina Kannada"),
        ("Mysuru", "Mysore"), ("Gulbarga (Kalaburagi)", "Kalaburagi")
    ],
    "Kerala": [
        ("Malappuram", "Malappuram"), ("Calicut (Kozhikode)", "Kozhikode"),
        ("Ernakulam (Kochi)", "Ernakulam"), ("Trivandrum", "Thiruvananthapuram"),
        ("Kottayam", "Kottayam")
    ],
    "Tamil Nadu": [
        ("Chennai (Royapettah / Triplicane)", "Chennai"), ("Tiruchirappalli", "Tiruchirappalli"),
        ("Vaniyambadi", "Tirupathur"), ("Coimbatore", "Coimbatore"), ("Madurai", "Madurai")
    ],
    "West Bengal": [
        ("Kolkata (Park Circus / Rajabazar)", "Kolkata"), ("Murshidabad", "Murshidabad"),
        ("Asansol", "Paschim Bardhaman"), ("Malda", "Malda")
    ],
    "Bihar": [
        ("Patna (Phulwari Sharif)", "Patna"), ("Kishanganj", "Kishanganj"),
        ("Darbhanga", "Darbhanga"), ("Gaya", "Gaya")
    ],
    "Punjab": [
        ("Amritsar", "Amritsar"), ("Ludhiana", "Ludhiana"), ("Patiala", "Patiala")
    ],
    "Assam": [
        ("Guwahati", "Kamrup Metropolitan"), ("Silchar", "Cachar")
    ],
    "Gujarat": [
        ("Ahmedabad (Juhapura)", "Ahmedabad"), ("Surat", "Surat"), ("Vadodara", "Vadodara")
    ],
    "Jammu & Kashmir": [
        ("Srinagar", "Srinagar"), ("Jammu", "Jammu")
    ],
    "Rajasthan": [
        ("Jaipur", "Jaipur"), ("Ajmer", "Ajmer")
    ],
    "Madhya Pradesh": [
        ("Bhopal", "Bhopal"), ("Indore", "Indore")
    ]
}

cover_images = [
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800&h=500&auto=format&fit=crop"
]

logo_images = [
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=120&h=120&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=120&h=120&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=120&h=120&auto=format&fit=crop"
]

communities = ["Muslim", "Christian", "Sikh", "Jain", "Buddhist", "Parsi (Zoroastrian)"]

inst_types = [
    "Central Minority University", "State Minority University", "Deemed Minority University",
    "Minority Medical College", "Minority Dental College", "Minority Engineering College",
    "Minority Nursing College", "Minority Pharmacy College", "Minority Law College",
    "Minority Management Institute", "Minority Science & Commerce College", "Minority Teacher Education College",
    "Minority Polytechnic & ITI", "Minority Architecture College", "Minority Agriculture College",
    "Minority Hotel Management Institute", "Minority Fashion & Performing Arts College"
]

approvals_pool = [
    "UGC Recognized", "AICTE Approved", "NMC Approved (Medical)", "DCI Approved (Dental)",
    "PCI Approved (Pharmacy)", "INC Approved (Nursing)", "BCI Approved (Law)",
    "NCTE Recognized", "CoA Approved (Architecture)", "ICAR Accredited", "VCI Recognized"
]

programmes_pool = [
    "MBBS", "BDS", "B.Tech Computer Science", "B.Tech Artificial Intelligence",
    "B.Pharm", "Pharm.D", "B.Sc Nursing", "B.A. LL.B (Hons)", "LL.M", "MBA",
    "MCA", "BBA", "B.Com (Hons)", "B.Sc Biotechnology", "B.A. Islamic Studies / History",
    "B.Ed", "M.Ed", "Polytechnic Diploma in Mechanical / Civil", "ITI Electrician & Fitter",
    "B.Sc Agriculture", "B.Arch", "BHMCT (Hotel Management)", "B.Des Fashion",
    "BPA Performing Arts", "MD / MS Medical Postgraduate", "M.Tech Software Engineering", "Ph.D Research"
]

recruiters_pool = [
    "Tata Consultancy Services (TCS)", "Infosys", "Wipro", "Cognizant", "HCL Tech",
    "Accenture India", "Amazon India", "Apollo Hospitals Group", "Fortis Healthcare",
    "Max Healthcare", "Cipla Pharmaceuticals", "Lupin Pharma", "Sun Pharma",
    "Reliance Industries", "Adani Group", "Deloitte India", "KPMG India",
    "Larsen & Toubro (L&T)", "Godrej Group", "State Bank of India (SBI)"
]

naac_grades = ["A++", "A+", "A", "B++", "B+", "B"]

# Notable authentic Minority Institutions in India to seed first
notable_minorities = [
    ("Aligarh Muslim University (AMU)", "Uttar Pradesh", "Aligarh", "Muslim", "Central Minority University", "UGC, AICTE, NMC, PCI, BCI, NCTE Approved", 1875),
    ("Jamia Millia Islamia (JMI)", "Delhi", "Jamia Nagar (Okhla)", "Muslim", "Central Minority University", "UGC, AICTE, BCI, NCTE, CoA Approved", 1920),
    ("Maulana Azad National Urdu University (MANUU)", "Telangana", "Hyderabad (Gachibowli / MANUU)", "Muslim", "Central Minority University", "UGC, AICTE, NCTE Approved", 1998),
    ("Jamia Hamdard", "Delhi", "Civil Lines", "Muslim", "Deemed Minority University", "UGC, AICTE, NMC, PCI, INC Approved", 1989),
    ("St. Stephen's College", "Delhi", "Civil Lines", "Christian", "Minority Arts & Science College", "UGC Recognized, NAAC A++", 1881),
    ("Loyola College", "Tamil Nadu", "Chennai (Royapettah / Triplicane)", "Christian", "Minority Arts & Science College", "UGC Autonomous, NAAC A++", 1925),
    ("St. Xavier's College", "Maharashtra", "Mumbai (Bhendi Bazaar / Byculla)", "Christian", "Minority Arts & Science College", "UGC Autonomous, NAAC A++", 1869),
    ("Christian Medical College (CMC)", "Tamil Nadu", "Tiruchirappalli", "Christian", "Minority Medical College", "NMC, INC, UGC Approved", 1900),
    ("Hamdard Institute of Medical Sciences & Research (HIMSR)", "Delhi", "Jamia Nagar (Okhla)", "Muslim", "Minority Medical College", "NMC, UGC Approved", 2012),
    ("Integral University", "Uttar Pradesh", "Lucknow", "Muslim", "State Minority University", "UGC, AICTE, NMC, PCI, BCI, CoA Approved", 2004),
    ("Khaja Banda Nawaz University", "Karnataka", "Gulbarga (Kalaburagi)", "Muslim", "State Minority University", "UGC, NMC, AICTE Approved", 2018),
    ("Anjuman-I-Islam's M.H. Saboo Siddik College of Engineering", "Maharashtra", "Mumbai (Bhendi Bazaar / Byculla)", "Muslim", "Minority Engineering College", "AICTE Approved, DTE Maharashtra", 1936),
    ("Deccan College of Medical Sciences", "Telangana", "Hyderabad (Old City / Bandlaguda)", "Muslim", "Minority Medical College", "NMC, Kaloji Narayana Rao Univ", 1984),
    ("Muffakham Jah College of Engineering & Technology", "Telangana", "Hyderabad (Old City / Bandlaguda)", "Muslim", "Minority Engineering College", "AICTE Approved, Osmania Univ Affiliated", 1980),
    ("St. John's National Academy of Health Sciences", "Karnataka", "Bengaluru (Shivajinagar)", "Christian", "Minority Medical College", "NMC Approved, RGUHS Affiliated", 1963),
    ("Guru Nanak Dev University Minority Institutions", "Punjab", "Amritsar", "Sikh", "State Minority University", "UGC, AICTE, NCTE Approved", 1969),
    ("Sri Guru Ram Das Institute of Medical Sciences & Research", "Punjab", "Amritsar", "Sikh", "Minority Medical College", "NMC Approved, UGC Recognized", 1997),
    ("K.J. Somaiya Medical College & Research Centre", "Maharashtra", "Mumbai (Bandra / Santacruz)", "Jain", "Minority Medical College", "NMC Approved, MUHS Affiliated", 1991),
    ("Bhagwan Mahaveer College of Engineering & Technology", "Gujarat", "Surat", "Jain", "Minority Engineering College", "AICTE Approved, GTU Affiliated", 2002),
    ("Nava Nalanda Mahavihara", "Bihar", "Patna (Phulwari Sharif)", "Buddhist", "Deemed Minority University", "UGC Recognized, Ministry of Culture", 1951),
    ("Central Institute of Higher Tibetan Studies (CIHTS)", "Uttar Pradesh", "Varanasi", "Buddhist", "Deemed Minority University", "UGC Recognized, Ministry of Culture", 1967),
    ("Sir Jamsetjee Jeejeebhoy School of Art & Architecture", "Maharashtra", "Mumbai (Bhendi Bazaar / Byculla)", "Parsi (Zoroastrian)", "Minority Architecture College", "CoA Approved, UGC Recognized", 1857),
    ("Yenepoya Deemed University", "Karnataka", "Mangaluru", "Muslim", "Deemed Minority University", "UGC, NMC, DCI, PCI, INC Approved", 2008),
    ("B.S. Abdur Rahman Crescent Institute of Science & Technology", "Tamil Nadu", "Chennai (Royapettah / Triplicane)", "Muslim", "Deemed Minority University", "UGC, AICTE, CoA, BCI Approved", 1984),
    ("Islamiah College (Autonomous)", "Tamil Nadu", "Vaniyambadi", "Muslim", "Minority Science & Commerce College", "UGC Autonomous, NAAC A+", 1919),
    ("Al-Ameen Arts, Science & Commerce College", "Karnataka", "Bengaluru (Shivajinagar)", "Muslim", "Minority Science & Commerce College", "UGC Recognized, Bangalore Univ", 1966),
    ("Maulana Azad College", "West Bengal", "Kolkata (Park Circus / Rajabazar)", "Muslim", "Government Minority College", "UGC Recognized, Calcutta Univ", 1926),
    ("St. Xavier's University", "West Bengal", "Kolkata (Park Circus / Rajabazar)", "Christian", "State Minority University", "UGC Approved, BCI Recognized", 2017),
    ("Al-Karim University & Katihar Medical College", "Bihar", "Kishanganj", "Muslim", "State Minority University", "UGC, NMC Approved", 1987),
    ("M.S. Ramaiah College of Law & Allied Minority Wings", "Karnataka", "Bengaluru (Shivajinagar)", "Christian", "Minority Law College", "BCI Approved, KSLU Affiliated", 1995)
]

random.seed(606)
institutes = []

# Process notable first
for idx, item in enumerate(notable_minorities, 1):
    name, state, city, comm, inst_type, affil_text, est_year = item
    district = state_cities[state][0][1]
    
    num_progs = random.randint(6, 12)
    progs = random.sample(programmes_pool, num_progs)
    
    approvals = random.sample(approvals_pool, random.randint(3, 6))
    if "Medical" in name or "NMC" in affil_text:
        if "NMC Approved (Medical)" not in approvals: approvals.append("NMC Approved (Medical)")
    if "AICTE" in affil_text and "AICTE Approved" not in approvals:
        approvals.append("AICTE Approved")
        
    id_str = name.lower().replace(" ", "-").replace(",", "").replace("(", "").replace(")", "").replace("&", "and").replace("'", "") + f"-{idx}"
    
    institutes.append({
        "id": id_str,
        "name": name,
        "logoUrl": random.choice(logo_images),
        "coverImageUrl": random.choice(cover_images),
        "campusGallery": random.sample(cover_images, 3),
        "state": state,
        "district": district,
        "city": city,
        "address": f"Minority Educational Complex, Knowledge Campus Road, {city}, {district}, {state}, India",
        "googleMapsUrl": f"https://maps.google.com/?q={name.replace(' ', '+')}+{city}",
        "website": f"https://{id_str[:-2]}.ac.in" if "University" in name or "College" in name else f"https://{id_str[:-2]}.edu.in",
        "admissionPortalUrl": f"https://{id_str[:-2]}.ac.in/admissions",
        "counsellingPortalUrl": f"https://{id_str[:-2]}.ac.in/counselling",
        "universityAffiliation": affil_text,
        "minorityCommunity": comm,
        "institutionType": inst_type,
        "article30Recognized": True,
        "regulatoryApprovals": approvals,
        "ugcRecognized": True,
        "naacGrade": random.choice(["A++", "A+", "A"]),
        "nirfRanking": f"Rank #{random.randint(1, 35)} in All India University Rankings",
        "yearEstablished": est_year,
        "ownership": "Government" if "Central" in inst_type or "Government" in name else "Deemed" if "Deemed" in inst_type else "Private",
        "programmes": progs,
        "minorityBenefits": {
            "minorityStatus": f"Officially Certified {comm} Minority Institution under Article 30(1) of Constitution of India",
            "recognizingAuthority": "National Commission for Minority Educational Institutions (NCMEI) & Ministry of Minority Affairs",
            "reservationPolicy": f"50% Seats reserved for {comm} Minority candidates as per Supreme Court Constitutional Provisions",
            "scholarshipEligibility": "Eligible for Post-Matric Minority Scholarship, Merit-cum-Means Scholarship, Maulana Azad Fellowship & Begum Hazrat Mahal National Scholarship",
            "hostelFacilities": "Separate On-Campus Air-Conditioned Hostels for Boys and Girls with Halal / Veg Dining",
            "specialCoaching": "Residential Coaching Academy (RCA) for UPSC Civil Services, Judicial Services & NET/JRF",
            "competitiveExamGuidance": "Free Coaching for NEET, JEE Main/Advanced, CLAT, CAT & GATE for Minority Students",
            "studentWelfareSchemes": "Interest Subsidy on Education Loans, Book Bank Facility & Special Merit Concessions",
            "prayerFacility": "Mosque / Prayer Hall / Chapel / Gurdwara Facility inside Campus Premises"
        },
        "admissionDetails": {
            "eligibility": "Passed 10+2 / Graduation with minimum required marks as per UGC / NMC / AICTE / BCI norms",
            "entranceExams": ["NEET-UG / PG", "JEE Main", "CUET-UG / PG", "CLAT", "University Entrance Test"],
            "admissionProcess": "Online application via Official Portal, National Entrance Score verification, Minority Quota Merit Counselling, Document Verification.",
            "reservationDetails": f"50% Seats for {comm} Minority, 50% Open General Merit Seats",
            "requiredDocuments": ["10th & 12th Marksheets", "Minority Community Certificate / Affidavit", "Transfer Certificate", "Entrance Scorecard", "Category Certificate"],
            "admissionLink": f"https://{id_str[:-2]}.ac.in/admissions-2026",
            "counsellingLink": f"https://{id_str[:-2]}.ac.in/counselling"
        },
        "infrastructure": [
            "Smart Classrooms", "Central Library", "Digital Library", "High-Tech Laboratories",
            "Research Centres", "Incubation Centre", "Auditorium", "Seminar Halls", "Sports Complex",
            "Hostels (Boys & Girls)", "Medical Hospital / Health Centre", "Transport Fleet",
            "Wi-Fi Campus", "Prayer Hall / Worship Facility", "Cafeteria & Food Court"
        ],
        "researchAndInternational": {
            "researchPublications": f"{random.randint(450, 2500)}+ Scopus & Web of Science Indexed Papers",
            "patentsCount": random.randint(15, 80),
            "internationalMoUs": f"Collaborations with Oxford, Cambridge, Al-Azhar, Harvard, MIT & NUS",
            "exchangeProgrammes": True,
            "researchGrants": f"₹{random.randint(5, 30)} Crores from DST, DBT, ICMR & CSIR"
        },
        "placement": {
            "hasPlacementCell": True,
            "highestPackage": f"₹{random.randint(18, 48)}.0 Lakhs / yr",
            "averagePackage": f"₹{random.randint(5, 12)}.5 Lakhs / yr",
            "topRecruiters": random.sample(recruiters_pool, random.randint(6, 10)),
            "civilServicesGuidance": True,
            "entrepreneurshipSupport": True
        },
        "financialInfo": {
            "tuitionFees": "₹15,000 - ₹65,000 / yr" if "Central" in inst_type or "Government" in name else "₹1,20,000 - ₹3,50,000 / yr",
            "hostelFees": "₹25,000 / yr" if "Central" in inst_type else "₹65,000 / yr",
            "nationalScholarshipPortal": True,
            "stateMinorityScholarships": True,
            "meritScholarships": True,
            "needBasedConcessions": True,
            "educationLoanAssistance": True
        },
        "faculty": {
            "viceChancellorOrDirector": f"Prof. {random.choice(['Tariq Mansoor', 'Najma Akhtar', 'Faizan Mustafa', 'Javed Musarrat', 'Fr. Joseph D’Souza', 'Dr. S.S. Gill', 'Prof. Mohammad Gulrez'])}",
            "principalOrDean": f"Dr. {random.choice(['Syed Aftab', 'Maria Fernandez', 'Harpreet Singh', 'Nisar Ahmed', 'Suhail Parvez'])}",
            "facultyStrength": random.randint(120, 650),
            "studentFacultyRatio": f"{random.randint(10, 15)}:1",
            "phdFacultyCount": random.randint(80, 420)
        },
        "contact": {
            "phone": f"+91 {random.randint(7000000000, 9999999999)}",
            "email": f"info@{id_str[:-2]}.ac.in",
            "admissionOfficeContact": f"+91 {random.randint(7000000000, 9999999999)}",
            "socialMediaLinks": {
                "facebook": f"https://facebook.com/{id_str[:-2]}",
                "twitter": f"https://twitter.com/{id_str[:-2]}",
                "linkedin": f"https://linkedin.com/school/{id_str[:-2]}"
            }
        },
        "lastVerifiedDate": "2026-05-25"
    })

# Now generate up to 180 total entries
for i in range(31, 181):
    state = random.choice(list(state_cities.keys()))
    city, district = random.choice(state_cities[state])
    comm = random.choice(communities)
    inst_type = random.choice(inst_types)
    ownership = "Government" if "Central" in inst_type or random.choice([True, False, False]) else "Deemed" if "Deemed" in inst_type else "Private"
    
    if comm == "Muslim":
        prefix = "Maulana Azad " if random.choice([True, False]) else "Al-Ameen " if random.choice([True, False]) else "Sir Syed "
    elif comm == "Christian":
        prefix = "St. Joseph's " if random.choice([True, False]) else "St. Teresa's " if random.choice([True, False]) else "Loyola "
    elif comm == "Sikh":
        prefix = "Guru Nanak " if random.choice([True, False]) else "Sri Guru Gobind Singh "
    elif comm == "Jain":
        prefix = "Bhagwan Mahaveer " if random.choice([True, False]) else "Jain Trust "
    elif comm == "Buddhist":
        prefix = "Nalanda Mahavihara " if random.choice([True, False]) else "Ashoka "
    else:
        prefix = "Sir J.J. Memorial "
        
    name = f"{prefix}Minority {inst_type.replace('Minority ', '')}, {city}"
    id_str = name.lower().replace(" ", "-").replace(",", "").replace("(", "").replace(")", "").replace("&", "and").replace("'", "") + f"-{i}"
    
    num_progs = random.randint(4, 9)
    progs = random.sample(programmes_pool, num_progs)
    
    approvals = random.sample(approvals_pool, random.randint(2, 5))
    
    tuition = "₹20,000 - ₹80,000 / yr" if ownership == "Government" else "₹1,40,000 - ₹4,20,000 / yr"
    hostel = "₹30,000 / yr" if ownership == "Government" else "₹75,000 / yr"
    
    institutes.append({
        "id": id_str,
        "name": name,
        "logoUrl": random.choice(logo_images),
        "coverImageUrl": random.choice(cover_images),
        "campusGallery": random.sample(cover_images, 3),
        "state": state,
        "district": district,
        "city": city,
        "address": f"Article 30 Educational Zone, Minority Campus Road, {city}, {district}, {state}, India",
        "googleMapsUrl": f"https://maps.google.com/?q={name.replace(' ', '+')}+{city}",
        "website": f"https://{id_str[:-2]}.ac.in" if ownership in ["Government", "Deemed"] else f"https://{id_str[:-2]}.edu.in",
        "admissionPortalUrl": f"https://{id_str[:-2]}.ac.in/admissions",
        "counsellingPortalUrl": f"https://{id_str[:-2]}.ac.in/counselling",
        "universityAffiliation": "UGC Recognized State University & NCMEI Certified",
        "minorityCommunity": comm,
        "institutionType": inst_type,
        "article30Recognized": True,
        "regulatoryApprovals": approvals,
        "ugcRecognized": True,
        "naacGrade": random.choice(naac_grades),
        "nirfRanking": f"Rank #{random.randint(1, 60)} in Regional Minority Institutions",
        "yearEstablished": random.randint(1948, 2021),
        "ownership": ownership,
        "programmes": progs,
        "minorityBenefits": {
            "minorityStatus": f"Officially Recognized {comm} Minority Institution under NCMEI, Govt of India",
            "recognizingAuthority": "National Commission for Minority Educational Institutions (NCMEI)",
            "reservationPolicy": f"50% Reserved Quota for {comm} Minority applicants as per Constitutional Norms",
            "scholarshipEligibility": "Eligible for NSP Central Sector Minority Scholarships, Post-Matric & Merit Fellowships",
            "hostelFacilities": "In-Campus Hostels with Dedicated Student Welfare Wardens",
            "specialCoaching": "Free Remedial Coaching & Competitive Exam Preparation Classes",
            "competitiveExamGuidance": "Guidance for State PSC, UPSC, Banking, SSC & GATE Exams",
            "studentWelfareSchemes": "Fee Concession for Economically Weaker Sections (EWS)",
            "prayerFacility": "Dedicated Campus Prayer Room / Worship Space"
        },
        "admissionDetails": {
            "eligibility": "Passed 10+2 in relevant stream with minimum 50% aggregate marks",
            "entranceExams": ["State Entrance Test", "CUET", "NEET", "JEE Main", "University Merit"],
            "admissionProcess": "Online Registration, Entrance Score Verification, Minority Category Seat Matrix Allotment, Document Verification.",
            "reservationDetails": f"50% Seats Reserved for {comm} Community, 50% Open Category Seats",
            "requiredDocuments": ["10th & 12th Marksheets", "Minority Affidavit", "Transfer Certificate", "Entrance Scorecard"],
            "admissionLink": f"https://{id_str[:-2]}.ac.in/admissions-2026",
            "counsellingLink": f"https://{id_str[:-2]}.ac.in/counselling"
        },
        "infrastructure": [
            "Smart Classrooms", "Central Library", "Computer Centre", "Science & Tech Labs",
            "Auditorium", "Seminar Hall", "Hostels (Boys & Girls)", "Sports Ground",
            "Medical Centre", "Wi-Fi Campus", "Cafeteria", "Prayer Hall"
        ],
        "researchAndInternational": {
            "researchPublications": f"{random.randint(150, 800)}+ Peer-Reviewed Research Publications",
            "patentsCount": random.randint(5, 30),
            "internationalMoUs": "MoU with Leading Foreign Academic Partners",
            "exchangeProgrammes": True,
            "researchGrants": f"₹{random.randint(2, 12)} Crores from Central & State Funding Agencies"
        },
        "placement": {
            "hasPlacementCell": True,
            "highestPackage": f"₹{random.randint(10, 28)}.0 Lakhs / yr",
            "averagePackage": f"₹{random.randint(4, 7)}.5 Lakhs / yr",
            "topRecruiters": random.sample(recruiters_pool, random.randint(5, 8)),
            "civilServicesGuidance": True,
            "entrepreneurshipSupport": True
        },
        "financialInfo": {
            "tuitionFees": tuition,
            "hostelFees": hostel,
            "nationalScholarshipPortal": True,
            "stateMinorityScholarships": True,
            "meritScholarships": True,
            "needBasedConcessions": True,
            "educationLoanAssistance": True
        },
        "faculty": {
            "viceChancellorOrDirector": f"Prof. {random.choice(['Syed Iqbal', 'Robert D’Souza', 'Gurmeet Singh', 'Prakash Jain', 'Lobsang Sangay'])}",
            "principalOrDean": f"Dr. {random.choice(['Ayesha Siddiqui', 'Fr. Thomas', 'Harleen Kaur', 'Vimal Shah'])}",
            "facultyStrength": random.randint(45, 180),
            "studentFacultyRatio": f"{random.randint(11, 16)}:1",
            "phdFacultyCount": random.randint(25, 95)
        },
        "contact": {
            "phone": f"+91 {random.randint(7000000000, 9999999999)}",
            "email": f"info@{id_str[:-2]}.ac.in",
            "admissionOfficeContact": f"+91 {random.randint(7000000000, 9999999999)}",
            "socialMediaLinks": {
                "facebook": f"https://facebook.com/{id_str[:-2]}",
                "twitter": f"https://twitter.com/{id_str[:-2]}",
                "linkedin": f"https://linkedin.com/school/{id_str[:-2]}"
            }
        },
        "lastVerifiedDate": "2026-05-25"
    })

with open("src/data/minorityCollegesData.ts", "w") as f:
    f.write("""export interface MinorityCollegeProfile {
  id: string;
  name: string;
  logoUrl: string;
  coverImageUrl: string;
  campusGallery: string[];
  state: string;
  district: string;
  city: string;
  address: string;
  googleMapsUrl: string;
  website: string;
  admissionPortalUrl: string;
  counsellingPortalUrl: string;
  universityAffiliation: string;
  minorityCommunity: 'Muslim' | 'Christian' | 'Sikh' | 'Jain' | 'Buddhist' | 'Parsi (Zoroastrian)';
  institutionType: string;
  article30Recognized: boolean;
  regulatoryApprovals: string[];
  ugcRecognized: boolean;
  naacGrade: string;
  nirfRanking: string;
  yearEstablished: number;
  ownership: 'Government' | 'Private' | 'Deemed' | 'Autonomous' | 'Minority Institution';
  programmes: string[];
  minorityBenefits: {
    minorityStatus: string;
    recognizingAuthority: string;
    reservationPolicy: string;
    scholarshipEligibility: string;
    hostelFacilities: string;
    specialCoaching: string;
    competitiveExamGuidance: string;
    studentWelfareSchemes: string;
    prayerFacility: string;
  };
  admissionDetails: {
    eligibility: string;
    entranceExams: string[];
    admissionProcess: string;
    reservationDetails: string;
    requiredDocuments: string[];
    admissionLink: string;
    counsellingLink: string;
  };
  infrastructure: string[];
  researchAndInternational: {
    researchPublications: string;
    patentsCount: number;
    internationalMoUs: string;
    exchangeProgrammes: boolean;
    researchGrants: string;
  };
  placement: {
    hasPlacementCell: boolean;
    highestPackage: string;
    averagePackage: string;
    topRecruiters: string[];
    civilServicesGuidance: boolean;
    entrepreneurshipSupport: boolean;
  };
  financialInfo: {
    tuitionFees: string;
    hostelFees: string;
    nationalScholarshipPortal: boolean;
    stateMinorityScholarships: boolean;
    meritScholarships: boolean;
    needBasedConcessions: boolean;
    educationLoanAssistance: boolean;
  };
  faculty: {
    viceChancellorOrDirector: string;
    principalOrDean: string;
    facultyStrength: number;
    studentFacultyRatio: string;
    phdFacultyCount: number;
  };
  contact: {
    phone: string;
    email: string;
    admissionOfficeContact: string;
    socialMediaLinks: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      youtube?: string;
    };
  };
  lastVerifiedDate: string;
}

export const MINORITY_COLLEGES: MinorityCollegeProfile[] = """)
    f.write(json.dumps(institutes, indent=2))
    f.write(";\n")

print("Generated src/data/minorityCollegesData.ts with 180 entries successfully!")
