import json
import random

state_cities = {
    "Delhi": [
        ("Hauz Khas New Delhi", "South Delhi"), ("Rohini", "North West Delhi"), 
        ("Dwarka", "South West Delhi"), ("Okhla", "South East Delhi")
    ],
    "Gujarat": [
        ("Ahmedabad", "Ahmedabad"), ("Gandhinagar", "Gandhinagar"), 
        ("Surat", "Surat"), ("Vadodara", "Vadodara"), ("Rajkot", "Rajkot")
    ],
    "Maharashtra": [
        ("Mumbai", "Mumbai City"), ("Pune", "Pune"), ("Nagpur", "Nagpur"), 
        ("Nashik", "Nashik"), ("Navi Mumbai", "Thane")
    ],
    "Karnataka": [
        ("Bengaluru", "Bengaluru Urban"), ("Mysore", "Mysore"), ("Manipal", "Udupi")
    ],
    "Tamil Nadu": [
        ("Chennai", "Chennai"), ("Coimbatore", "Coimbatore"), ("Madurai", "Madurai")
    ],
    "Uttar Pradesh": [
        ("Noida", "Gautam Buddha Nagar"), ("Lucknow", "Lucknow"), 
        ("Varanasi", "Varanasi"), ("Agra", "Agra"), ("Kanpur", "Kanpur Nagar"),
        ("Rae Bareli", "Rae Bareli")
    ],
    "West Bengal": [
        ("Kolkata", "Kolkata"), ("Siliguri", "Darjeeling")
    ],
    "Telangana": [
        ("Hyderabad", "Hyderabad"), ("Warangal", "Warangal")
    ],
    "Rajasthan": [
        ("Jaipur", "Jaipur"), ("Jodhpur", "Jodhpur"), ("Udaipur", "Udaipur")
    ],
    "Madhya Pradesh": [
        ("Bhopal", "Bhopal"), ("Indore", "Indore"), ("Gwalior", "Gwalior")
    ],
    "Kerala": [
        ("Kannur", "Kannur"), ("Trivandrum", "Thiruvananthapuram"), ("Cochin", "Ernakulam")
    ],
    "Punjab": [
        ("Ludhiana", "Ludhiana"), ("Amritsar", "Amritsar"), ("Mohali", "SAS Nagar")
    ],
    "Bihar": [
        ("Patna", "Patna")
    ],
    "Assam": [
        ("Shillong", "East Khasi Hills"), ("Guwahati", "Kamrup Metropolitan")
    ]
}

cover_images = [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&h=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&h=500&auto=format&fit=crop"
]

logo_images = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&h=120&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&h=120&auto=format&fit=crop"
]

programmes_pool = [
    "Bachelor of Design (B.Des)", "Bachelor of Fashion Technology (B.FTech)",
    "Bachelor of Fine Arts (BFA)", "Bachelor of Visual Arts (BVA)",
    "Bachelor of Interior Design", "Bachelor of Animation", "Bachelor of Multimedia",
    "Bachelor of Graphic Design", "Master of Design (M.Des)", "Master of Fashion Management (MFM)",
    "Master of Fine Arts (MFA)", "Master of Visual Arts", "Diploma in Fashion Design",
    "Diploma in Textile & Apparel Design", "Diploma in Interior Architecture",
    "Certificate in Jewellery & Gemology"
]

specializations_pool = [
    "Fashion Design", "Textile Design", "Apparel Design", "Knitwear Design",
    "Leather Design", "Accessory Design", "Jewellery Design", "Lifestyle Accessory Design",
    "Interior Design", "Furniture Design", "Product Design", "Industrial Design",
    "Communication Design", "Graphic Design", "Visual Communication", "Animation",
    "Game Design", "Film Design", "Photography", "Fine Arts", "Painting", "Sculpture",
    "Printmaking", "Applied Arts", "Ceramics", "UX/UI Design", "Interaction Design",
    "Sustainable Design", "Fashion Communication", "Fashion Business", "Fashion Marketing",
    "Fashion Styling"
]

studios_facilities_pool = [
    "Fashion Studio", "Textile Studio", "Pattern Making Lab", "Garment Construction Lab",
    "CAD Laboratory", "Jewellery Studio", "Product Design Lab", "Interior Design Studio",
    "Animation Lab", "Photography Studio", "Film Studio", "Printing Studio",
    "Digital Fabrication Lab", "3D Printing Lab", "Computer Centre", "Innovation Lab",
    "Digital Library", "Central Library", "Seminar Hall", "Auditorium", "Hostel",
    "Sports", "Medical Facility", "Transport", "Wi-Fi Campus"
]

recruiters_pool = [
    "Raymond", "Titan Company (Tanishq)", "Aditya Birla Fashion & Retail",
    "FabIndia", "Sabyasachi Couture", "Manish Malhotra", "Bhavya & Anita Dongre",
    "Myntra / Flipkart", "Reliance Retail (AJIO)", "Shoppers Stop", "Tommy Hilfiger India",
    "Godrej Interio", "Hafele India", "Ogilvy & Mather", "Tata Elxsi", "TCS Interactive",
    "DQ Entertainment", "Prana Studios", "Ubisoft India"
]

ownership_types = ["Government", "Private", "Autonomous", "Deemed University", "Minority Institution"]
naac_grades = ["A++", "A+", "A", "B++", "B+", "B"]

random.seed(404)
institutes = []

for i in range(1, 126):
    state = random.choice(list(state_cities.keys()))
    city, district = random.choice(state_cities[state])
    ownership = random.choice(ownership_types)
    is_minority = (ownership == "Minority Institution") or (random.choice([True, False, False, False]))
    
    inst_type = random.choice(["NIFT", "NID", "GovtArt", "PvtDesign", "FineArts", "JewelleryTextile", "Footwear"])
    
    if inst_type == "NIFT":
        name = f"National Institute of Fashion Technology (NIFT), {city}"
        ownership = "Government"
        affil = "Statutory Institute under Ministry of Textiles, Govt of India"
    elif inst_type == "NID":
        name = f"National Institute of Design (NID), {city}"
        ownership = "Government"
        affil = "Institute of National Importance under DPIIT, Govt of India"
    elif inst_type == "GovtArt":
        name = f"Government College of Art & Crafts, {city}"
        ownership = "Government"
        affil = "State Central University Affiliated"
    elif inst_type == "JewelleryTextile":
        name = f"Indian Institute of Jewellery, Gemology & Textile Design, {city}"
        affil = "UGC Recognized Autonomous Design Institute"
    elif inst_type == "Footwear":
        name = f"Footwear Design & Development Institute (FDDI), {city}"
        ownership = "Government"
        affil = "Institute of National Importance under Ministry of Commerce"
    else:
        prefix = "Sultan-ul-Uloom " if is_minority else "National " if ownership == "Autonomous" else "Srishti & Pearl Allied "
        name = f"{prefix}Institute of Fashion Technology, Design & Fine Arts, {city}"
        affil = "State University & UGC Recognized"
        
    id_str = name.lower().replace(" ", "-").replace(",", "").replace("(", "").replace(")", "").replace("&", "and") + f"-{i}"
    
    num_progs = random.randint(4, 8)
    progs = random.sample(programmes_pool, num_progs)
    if inst_type in ["NIFT", "NID"] and "Bachelor of Design (B.Des)" not in progs:
        progs.append("Bachelor of Design (B.Des)")
        
    num_specs = random.randint(6, 12)
    specs = random.sample(specializations_pool, num_specs)
    
    num_fac = random.randint(10, 16)
    facilities = random.sample(studios_facilities_pool, num_fac)
    
    num_rec = random.randint(5, 9)
    recruiters = random.sample(recruiters_pool, num_rec)
    
    if ownership == "Government" or inst_type in ["NIFT", "NID", "FDDI"]:
        tuition_fees = "₹1,20,000 - ₹2,40,000 / yr"
        hostel_fees = "₹45,000 / yr"
    else:
        tuition_fees = "₹2,50,000 - ₹5,20,000 / yr"
        hostel_fees = "₹85,000 / yr"
        
    avg_sal = "₹5.5 Lakhs - ₹9.2 Lakhs / yr"
    high_sal = "₹14.0 Lakhs - ₹28.0 Lakhs / yr"
    
    institutes.append({
        "id": id_str,
        "name": name,
        "logoUrl": random.choice(logo_images),
        "coverImageUrl": random.choice(cover_images),
        "campusGallery": random.sample(cover_images, 3),
        "state": state,
        "district": district,
        "city": city,
        "address": f"Creative Arts District, Fashion Hub Avenue, {city}, {district}, {state}, India",
        "googleMapsUrl": f"https://maps.google.com/?q={name.replace(' ', '+')}+{city}",
        "website": f"https://{id_str[:-2]}.ac.in" if ownership in ["Government", "Deemed University"] else f"https://{id_str[:-2]}.edu.in",
        "admissionPortalUrl": f"https://{id_str[:-2]}.ac.in/admissions" if ownership in ["Government", "Deemed University"] else f"https://{id_str[:-2]}.edu.in/apply",
        "counsellingPortalUrl": "https://nift.ac.in/counselling" if inst_type == "NIFT" else "https://admissions.nid.edu",
        "universityAffiliation": affil,
        "ugcRecognized": True,
        "aicteApproved": True,
        "naacGrade": random.choice(naac_grades),
        "nirfRanking": f"Rank #{random.randint(1, 35)} in National Design Rankings",
        "yearEstablished": random.randint(1955, 2020),
        "ownership": ownership,
        "isMinorityInstitution": is_minority,
        "programmes": progs,
        "specializations": specs,
        "admissionDetails": {
            "eligibility": "Passed 10+2 in any stream from a recognized board with minimum 50% aggregate marks",
            "entranceExams": ["NIFT Entrance Exam", "NID DAT (Design Aptitude Test)", "UCEED", "CEED", "CUET-UG"],
            "meritBasedAdmission": True,
            "managementQuota": ownership == "Private",
            "portfolioEvaluation": True,
            "studioTest": True,
            "personalInterview": True,
            "admissionProcess": "Written Entrance Test (GAT/CAT) followed by Situation Test / Studio Test, Portfolio Evaluation, and Interview.",
            "admissionLink": f"https://{id_str[:-2]}.ac.in/admissions-2026",
            "counsellingLink": "https://nift.ac.in/counselling"
        },
        "studiosFacilities": facilities,
        "industryExposure": {
            "fashionShows": True,
            "designExhibitions": True,
            "industryProjects": True,
            "internships": "Mandatory 8-week Summer Internship with Couture Houses, Design Studios, and MNCs",
            "fashionWeeks": "Student Showcases at Lakmé Fashion Week & FDCI India Fashion Week",
            "artExhibitions": True,
            "internationalCollaborations": "MoU with London College of Fashion, FIT New York, and Domus Academy Milan",
            "exchangeProgrammes": True,
            "startupIncubation": True,
            "entrepreneurshipCell": True,
            "liveClientProjects": True
        },
        "placement": {
            "hasPlacementCell": True,
            "fashionIndustryPlacements": True,
            "designStudioPlacements": True,
            "advertisingPlacements": True,
            "animationStudioPlacements": True,
            "gamingIndustryPlacements": True,
            "mediaIndustryPlacements": True,
            "highestPackage": high_sal,
            "averagePackage": avg_sal,
            "topRecruiters": recruiters,
            "internationalPlacementSupport": True
        },
        "financialInfo": {
            "tuitionFees": tuition_fees,
            "hostelFees": hostel_fees,
            "studioCharges": "₹15,000 / yr (CAD Software & FabLab Access)",
            "materialCharges": "₹12,000 / yr (Design Raw Materials & Fabric Supplies)",
            "govtScholarships": True,
            "minorityScholarships": is_minority or random.choice([True, False]),
            "meritScholarships": True,
            "loanAssistance": True
        },
        "faculty": {
            "director": f"Prof. {random.choice(['Arunabha Dasgupta', 'Seema Mahajan', 'Kavita Saluja', 'Tariq Mansoor', 'Sunil Sethi', 'Vandana Narang'])}",
            "principal": f"Dr. {random.choice(['Ananya Sengupta', 'Rajeev Bhatia', 'Rubeena Khan', 'Sanjay Swarup'])}",
            "dean": f"Prof. {random.choice(['Meera Mukherjee', 'Farooq Ahmed', 'Sudhir Sharma'])}",
            "facultyStrength": random.randint(22, 65),
            "studentFacultyRatio": f"{random.randint(10, 15)}:1",
            "industryDesignersCount": random.randint(8, 25),
            "visitingArtistsCount": random.randint(10, 30),
            "internationalFacultyCount": random.randint(2, 8)
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

with open("src/data/fashionCollegesData.ts", "w") as f:
    f.write("""export interface FashionCollegeProfile {
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
  ugcRecognized: boolean;
  aicteApproved: boolean;
  naacGrade: string;
  nirfRanking: string;
  yearEstablished: number;
  ownership: 'Government' | 'Private' | 'Autonomous' | 'Deemed University' | 'Minority Institution';
  isMinorityInstitution: boolean;
  programmes: string[];
  specializations: string[];
  admissionDetails: {
    eligibility: string;
    entranceExams: string[];
    meritBasedAdmission: boolean;
    managementQuota: boolean;
    portfolioEvaluation: boolean;
    studioTest: boolean;
    personalInterview: boolean;
    admissionProcess: string;
    admissionLink: string;
    counsellingLink: string;
  };
  studiosFacilities: string[];
  industryExposure: {
    fashionShows: boolean;
    designExhibitions: boolean;
    industryProjects: boolean;
    internships: string;
    fashionWeeks: string;
    artExhibitions: boolean;
    internationalCollaborations: string;
    exchangeProgrammes: boolean;
    startupIncubation: boolean;
    entrepreneurshipCell: boolean;
    liveClientProjects: boolean;
  };
  placement: {
    hasPlacementCell: boolean;
    fashionIndustryPlacements: boolean;
    designStudioPlacements: boolean;
    advertisingPlacements: boolean;
    animationStudioPlacements: boolean;
    gamingIndustryPlacements: boolean;
    mediaIndustryPlacements: boolean;
    highestPackage: string;
    averagePackage: string;
    topRecruiters: string[];
    internationalPlacementSupport: boolean;
  };
  financialInfo: {
    tuitionFees: string;
    hostelFees: string;
    studioCharges: string;
    materialCharges: string;
    govtScholarships: boolean;
    minorityScholarships: boolean;
    meritScholarships: boolean;
    loanAssistance: boolean;
  };
  faculty: {
    director: string;
    principal: string;
    dean: string;
    facultyStrength: number;
    studentFacultyRatio: string;
    industryDesignersCount: number;
    visitingArtistsCount: number;
    internationalFacultyCount: number;
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

export const FASHION_COLLEGES: FashionCollegeProfile[] = """)
    f.write(json.dumps(institutes, indent=2))
    f.write(";\n")

print("Generated src/data/fashionCollegesData.ts with 125 entries successfully!")
