const fs = require('fs');

const vol5 = {
  volumeNo: 5,
  titleEn: "Volume 5: Programmes, Projects, Community Development & Implementation Framework",
  titleHi: "खंड 5: कार्यक्रम, परियोजनाएं एवं सामुदायिक विकास रूपरेखा",
  parts: [
    {
      partNo: "Part-1",
      titleEn: "Programme Planning, Project Identification & Approval",
      titleHi: "कार्यक्रम योजना, परियोजना पहचान एवं अनुमोदन",
      chapters: [
        { chapterNo: 1, titleEn: "Strategic Programme Planning", titleHi: "रणनीतिक कार्यक्रम योजना" },
        { chapterNo: 2, titleEn: "Community Needs Assessment & Baseline Surveys", titleHi: "सामुदायिक आवश्यकता आकलन एवं आधारभूत सर्वेक्षण" },
        { chapterNo: 3, titleEn: "Project Identification, Concept Notes & Feasibility Studies", titleHi: "परियोजना पहचान, संकल्पना नोट एवं व्यवहार्यता अध्ययन" },
        { chapterNo: 4, titleEn: "Programme Approval, Budgeting & Resource Allocation", titleHi: "कार्यक्रम अनुमोदन, बजट एवं संसाधन आवंटन" },
        { chapterNo: 5, titleEn: "Annual Action Plans, Operational Calendars & Implementation Schedules", titleHi: "वार्षिक कार्य योजनाएं, संचालन कैलेंडर एवं कार्यान्वयन अनुसूचियां" }
      ]
    },
    {
      partNo: "Part-2",
      titleEn: "Education, Scholarship & Skill Development Programmes",
      titleHi: "शिक्षा, छात्रवृत्ति एवं कौशल विकास कार्यक्रम",
      chapters: [
        { chapterNo: 6, titleEn: "Educational Support Programmes", titleHi: "शैक्षिक सहायता कार्यक्रम" },
        { chapterNo: 7, titleEn: "Scholarship Management", titleHi: "छात्रवृत्ति प्रबंधन" },
        { chapterNo: 8, titleEn: "Career Guidance, Competitive Examination & Professional Development", titleHi: "करियर मार्गदर्शन, प्रतियोगी परीक्षा एवं व्यावसायिक विकास" },
        { chapterNo: 9, titleEn: "Skill Development, Vocational Training & Entrepreneurship", titleHi: "कौशल विकास, व्यावसायिक प्रशिक्षण एवं उद्यमिता" },
        { chapterNo: 10, titleEn: "Digital Literacy, Research & Innovation Programmes", titleHi: "डिजिटल साक्षरता, अनुसंधान एवं नवाचार कार्यक्रम" }
      ]
    },
    {
      partNo: "Part-3",
      titleEn: "Health, Welfare & Humanitarian Assistance",
      titleHi: "स्वास्थ्य, कल्याण एवं मानवीय सहायता",
      chapters: [
        { chapterNo: 11, titleEn: "Medical Assistance Programmes", titleHi: "चिकित्सा सहायता कार्यक्रम" },
        { chapterNo: 12, titleEn: "Emergency Relief & Disaster Assistance", titleHi: "आपातकालीन राहत एवं आपदा सहायता" },
        { chapterNo: 13, titleEn: "Food Security, Poverty Alleviation & Community Support", titleHi: "खाद्य सुरक्षा, गरीबी उन्मूलन एवं सामुदायिक सहायता" },
        { chapterNo: 14, titleEn: "Women, Children, Elderly & Persons with Disabilities Welfare", titleHi: "महिला, बाल, वृद्ध एवं विकलांग कल्याण" },
        { chapterNo: 15, titleEn: "Psychosocial Support, Counselling & Community Well-being", titleHi: "मनोसामाजिक सहायता, परामर्श एवं सामुदायिक कल्याण" }
      ]
    },
    {
      partNo: "Part-4",
      titleEn: "Religious, Social Reform & Community Development",
      titleHi: "धार्मिक, सामाजिक सुधार एवं सामुदायिक विकास",
      chapters: [
        { chapterNo: 16, titleEn: "Islamic Education & Religious Awareness Programmes", titleHi: "इस्लामिक शिक्षा एवं धार्मिक जागरूकता कार्यक्रम" },
        { chapterNo: 17, titleEn: "Community Reform Campaigns", titleHi: "सामुदायिक सुधार अभियान" },
        { chapterNo: 18, titleEn: "Marriage Reform & Family Welfare Initiatives", titleHi: "विवाह सुधार एवं परिवार कल्याण पहल" },
        { chapterNo: 19, titleEn: "Youth Leadership & Character Development", titleHi: "युवा नेतृत्व एवं चरित्र विकास" },
        { chapterNo: 20, titleEn: "Community Unity, Social Harmony & Civic Engagement", titleHi: "सामुदायिक एकता, सामाजिक सद्भाव एवं नागरिक जुड़ाव" }
      ]
    },
    {
      partNo: "Part-5",
      titleEn: "Economic Empowerment & Sustainable Development",
      titleHi: "आर्थिक सशक्तिकरण एवं सतत विकास",
      chapters: [
        { chapterNo: 21, titleEn: "Employment Generation Initiatives", titleHi: "रोजगार सृजन पहल" },
        { chapterNo: 22, titleEn: "Business Development & Entrepreneurship Support", titleHi: "व्यवसाय विकास एवं उद्यमिता सहायता" },
        { chapterNo: 23, titleEn: "Women's Economic Empowerment", titleHi: "महिला आर्थिक सशक्तिकरण" },
        { chapterNo: 24, titleEn: "Financial Literacy & Self-Reliance Programmes", titleHi: "वित्तीय साक्षरता एवं आत्मनिर्भरता कार्यक्रम" },
        { chapterNo: 25, titleEn: "Sustainable Community Development Projects", titleHi: "सतत सामुदायिक विकास परियोजनाएं" }
      ]
    },
    {
      partNo: "Part-6",
      titleEn: "Environment, Public Infrastructure & Community Services",
      titleHi: "पर्यावरण, सार्वजनिक बुनियादी ढांचा एवं सामुदायिक सेवाएं",
      chapters: [
        { chapterNo: 26, titleEn: "Environmental Protection Programmes", titleHi: "पर्यावरण संरक्षण कार्यक्रम" },
        { chapterNo: 27, titleEn: "Water Conservation & Sanitation", titleHi: "जल संरक्षण एवं स्वच्छता" },
        { chapterNo: 28, titleEn: "Tree Plantation & Climate Awareness", titleHi: "वृक्षारोपण एवं जलवायु जागरूकता" },
        { chapterNo: 29, titleEn: "Community Infrastructure Development", titleHi: "सामुदायिक बुनियादी ढांचा विकास" },
        { chapterNo: 30, titleEn: "Public Utility & Civic Improvement Projects", titleHi: "सार्वजनिक उपयोगिता एवं नागरिक सुधार परियोजनाएं" }
      ]
    },
    {
      partNo: "Part-7",
      titleEn: "Project Management, Procurement & Resource Utilization",
      titleHi: "परियोजना प्रबंधन, खरीद एवं संसाधन उपयोग",
      chapters: [
        { chapterNo: 31, titleEn: "Project Management Framework", titleHi: "परियोजना प्रबंधन रूपरेखा" },
        { chapterNo: 32, titleEn: "Procurement & Vendor Management", titleHi: "खरीद एवं विक्रेता प्रबंधन" },
        { chapterNo: 33, titleEn: "Asset Utilization & Logistics", titleHi: "संपत्ति उपयोग एवं रसद" },
        { chapterNo: 34, titleEn: "Volunteer Deployment & Workforce Coordination", titleHi: "स्वयंसेवक तैनाती एवं कार्यबल समन्वय" },
        { chapterNo: 35, titleEn: "Project Closure & Handover Procedures", titleHi: "परियोजना समापन एवं कार्यभार सौंपने की प्रक्रिया" }
      ]
    },
    {
      partNo: "Part-8",
      titleEn: "Monitoring, Evaluation, Research & Impact Assessment",
      titleHi: "निगरानी, मूल्यांकन, अनुसंधान एवं प्रभाव आकलन",
      chapters: [
        { chapterNo: 36, titleEn: "Monitoring Framework", titleHi: "निगरानी रूपरेखा" },
        { chapterNo: 37, titleEn: "Performance Indicators & Key Performance Metrics", titleHi: "प्रदर्शन संकेतक एवं प्रमुख प्रदर्शन मेट्रिक्स" },
        { chapterNo: 38, titleEn: "Research, Surveys & Data Collection", titleHi: "अनुसंधान, सर्वेक्षण एवं डेटा संग्रह" },
        { chapterNo: 39, titleEn: "Impact Assessment & Outcome Evaluation", titleHi: "प्रभाव आकलन एवं परिणाम मूल्यांकन" },
        { chapterNo: 40, titleEn: "Lessons Learned & Continuous Improvement", titleHi: "सीखे गए सबक एवं निरंतर सुधार" }
      ]
    },
    {
      partNo: "Part-9",
      titleEn: "Partnerships, Fundraising & External Relations",
      titleHi: "साझेदारी, धन उगाहना एवं बाहरी संबंध",
      chapters: [
        { chapterNo: 41, titleEn: "Strategic Partnerships & Institutional Collaboration", titleHi: "रणनीतिक साझेदारी एवं संस्थागत सहयोग" },
        { chapterNo: 42, titleEn: "Fundraising & Resource Mobilisation", titleHi: "धन उगाहना एवं संसाधन जुटाना" },
        { chapterNo: 43, titleEn: "Donor Relations & Grant Management", titleHi: "दाता संबंध एवं अनुदान प्रबंधन" },
        { chapterNo: 44, titleEn: "Government, CSR & External Stakeholder Relations", titleHi: "सरकार, सीएसआर एवं बाहरी हितधारक संबंध" },
        { chapterNo: 45, titleEn: "National & International Cooperation", titleHi: "राष्ट्रीय एवं अंतर्राष्ट्रीय सहयोग" }
      ]
    },
    {
      partNo: "Part-10",
      titleEn: "Programme Sustainability, Innovation & Future Development",
      titleHi: "कार्यक्रम स्थिरता, नवाचार एवं भविष्य का विकास",
      chapters: [
        { chapterNo: 46, titleEn: "Institutional Sustainability", titleHi: "संस्थागत स्थिरता" },
        { chapterNo: 47, titleEn: "Innovation & Digital Transformation", titleHi: "नवाचार एवं डिजिटल परिवर्तन" },
        { chapterNo: 48, titleEn: "Knowledge Management & Organisational Learning", titleHi: "ज्ञान प्रबंधन एवं संगठनात्मक शिक्षा" },
        { chapterNo: 49, titleEn: "Future Strategic Planning & Organisational Growth", titleHi: "भविष्य की रणनीतिक योजना एवं संगठनात्मक विकास" },
        { chapterNo: 50, titleEn: "Legacy, Institutional Excellence & Long-Term Vision", titleHi: "विरासत, संस्थागत उत्कृष्टता एवं दीर्घकालिक दृष्टिकोण" }
      ]
    }
  ]
};

const vol6 = {
  volumeNo: 6,
  titleEn: "Volume 6: Administrative Reference, Compliance & Organisational Resources Manual",
  titleHi: "खंड 6: प्रशासनिक संदर्भ, अनुपालन एवं संगठनात्मक संसाधन नियमावली",
  parts: [
    {
      partNo: "Part-1",
      titleEn: "Legal Compliance & Statutory Reference",
      titleHi: "विधिक अनुपालन एवं वैधानिक संदर्भ",
      chapters: [
        { chapterNo: 1, titleEn: "Applicable Laws & Regulatory Framework", titleHi: "लागू कानून एवं विनियामक ढांचा" },
        { chapterNo: 2, titleEn: "Society Registration Compliance", titleHi: "संस्था पंजीकरण अनुपालन" },
        { chapterNo: 3, titleEn: "Tax Registration & Regulatory Compliance", titleHi: "कर पंजीकरण एवं विनियामक अनुपालन" },
        { chapterNo: 4, titleEn: "Donations, Tax Benefits & Grant Compliance", titleHi: "दान, कर लाभ एवं अनुदान अनुपालन" },
        { chapterNo: 5, titleEn: "Annual Compliance Calendar & Statutory Reporting", titleHi: "वार्षिक अनुपालन कैलेंडर एवं वैधानिक रिपोर्टिंग" }
      ]
    },
    {
      partNo: "Part-2",
      titleEn: "Financial & Accounting Reference",
      titleHi: "वित्तीय एवं लेखांकन संदर्भ",
      chapters: [
        { chapterNo: 6, titleEn: "Accounting Standards & Financial Administration", titleHi: "लेखांकन मानक एवं वित्तीय प्रशासन" },
        { chapterNo: 7, titleEn: "Financial Statements & Reporting", titleHi: "वित्तीय विवरण एवं रिपोर्टिंग" },
        { chapterNo: 8, titleEn: "Budget Planning & Financial Control", titleHi: "बजट योजना एवं वित्तीय नियंत्रण" },
        { chapterNo: 9, titleEn: "Internal Financial Controls", titleHi: "आंतरिक वित्तीय नियंत्रण" },
        { chapterNo: 10, titleEn: "Audit Readiness & Financial Compliance", titleHi: "लेखापरीक्षा तत्परता एवं वित्तीय अनुपालन" }
      ]
    },
    {
      partNo: "Part-3",
      titleEn: "Human Resource & Volunteer Administration",
      titleHi: "मानव संसाधन एवं स्वयंसेवक प्रशासन",
      chapters: [
        { chapterNo: 11, titleEn: "Human Resource Administration", titleHi: "मानव संसाधन प्रशासन" },
        { chapterNo: 12, titleEn: "Volunteer Administration & Capacity Building", titleHi: "स्वयंसेवक प्रशासन एवं क्षमता निर्माण" },
        { chapterNo: 13, titleEn: "Recruitment, Appointment & Personnel Documentation", titleHi: "भर्ती, नियुक्ति एवं कार्मिक दस्तावेज़ीकरण" },
        { chapterNo: 14, titleEn: "Employee Welfare, Performance & Professional Development", titleHi: "कर्मचारी कल्याण, प्रदर्शन एवं व्यावसायिक विकास" },
        { chapterNo: 15, titleEn: "Separation, Exit & Post-Service Administration", titleHi: "अलगाव, निकास एवं सेवा-पश्चात प्रशासन" }
      ]
    },
    {
      partNo: "Part-4",
      titleEn: "Office Administration & Record Management",
      titleHi: "कार्यालय प्रशासन एवं रिकॉर्ड प्रबंधन",
      chapters: [
        { chapterNo: 16, titleEn: "Office Administration Standards", titleHi: "कार्यालय प्रशासन मानक" },
        { chapterNo: 17, titleEn: "Records Retention & Document Preservation", titleHi: "रिकॉर्ड प्रतिधारण एवं दस्तावेज़ संरक्षण" },
        { chapterNo: 18, titleEn: "File Classification & Document Control", titleHi: "फ़ाइल वर्गीकरण एवं दस्तावेज़ नियंत्रण" },
        { chapterNo: 19, titleEn: "Digital Records & Archiving", titleHi: "डिजिटल रिकॉर्ड एवं संग्रह" },
        { chapterNo: 20, titleEn: "Asset Register & Inventory Administration", titleHi: "संपत्ति रजिस्टर एवं इन्वेंटरी प्रशासन" }
      ]
    },
    {
      partNo: "Part-5",
      titleEn: "Governance Reference & Committee Resources",
      titleHi: "शासन संदर्भ एवं समिति संसाधन",
      chapters: [
        { chapterNo: 21, titleEn: "Governance Structure & Committee Administration", titleHi: "शासन संरचना एवं समिति प्रशासन" },
        { chapterNo: 22, titleEn: "Meeting Administration & Documentation Standards", titleHi: "बैठक प्रशासन एवं दस्तावेज़ीकरण मानक" },
        { chapterNo: 23, titleEn: "Resolution Register & Decision Management", titleHi: "प्रस्ताव रजिस्टर एवं निर्णय प्रबंधन" },
        { chapterNo: 24, titleEn: "Delegation of Authority Matrix", titleHi: "प्राधिकार का प्रत्यायोजन मैट्रिक्स" },
        { chapterNo: 25, titleEn: "Governance Compliance & Institutional Accountability", titleHi: "शासन अनुपालन एवं संस्थागत जवाबदेही" }
      ]
    },
    {
      partNo: "Part-6",
      titleEn: "Communication & Public Relations",
      titleHi: "संचार एवं जनसंपर्क",
      chapters: [
        { chapterNo: 26, titleEn: "Official Correspondence & Communication Standards", titleHi: "आधिकारिक पत्राचार एवं संचार मानक" },
        { chapterNo: 27, titleEn: "Media Relations & Public Information", titleHi: "मीडिया संबंध एवं सार्वजनिक जानकारी" },
        { chapterNo: 28, titleEn: "Website & Digital Communication Standards", titleHi: "वेबसाइट एवं डिजिटल संचार मानक" },
        { chapterNo: 29, titleEn: "Social Media Administration", titleHi: "सोशल मीडिया प्रशासन" },
        { chapterNo: 30, titleEn: "Public Relations, Branding & Institutional Identity", titleHi: "जनसंपर्क, ब्रांडिंग एवं संस्थागत पहचान" }
      ]
    },
    {
      partNo: "Part-7",
      titleEn: "Information Technology & Cyber Governance",
      titleHi: "सूचना प्रौद्योगिकी एवं साइबर शासन",
      chapters: [
        { chapterNo: 31, titleEn: "Information Technology Administration", titleHi: "सूचना प्रौद्योगिकी प्रशासन" },
        { chapterNo: 32, titleEn: "Information Security & Data Protection", titleHi: "सूचना सुरक्षा एवं डेटा संरक्षण" },
        { chapterNo: 33, titleEn: "Cybersecurity Framework", titleHi: "साइबर सुरक्षा रूपरेखा" },
        { chapterNo: 34, titleEn: "Backup, Disaster Recovery & Business Continuity", titleHi: "बैकअप, आपदा रिकवरी एवं व्यापार निरंतरता" },
        { chapterNo: 35, titleEn: "Digital Infrastructure Management", titleHi: "डिजिटल बुनियादी ढांचा प्रबंधन" }
      ]
    },
    {
      partNo: "Part-8",
      titleEn: "Risk, Safety & Emergency Preparedness",
      titleHi: "जोखिम, सुरक्षा एवं आपातकालीन तैयारी",
      chapters: [
        { chapterNo: 36, titleEn: "Enterprise Risk Register & Risk Management Framework", titleHi: "एंटरप्राइज जोखिम रजिस्टर एवं जोखिम प्रबंधन रूपरेखा" },
        { chapterNo: 37, titleEn: "Emergency Response & Disaster Preparedness", titleHi: "आपातकालीन प्रतिक्रिया एवं आपदा तैयारी" },
        { chapterNo: 38, titleEn: "Occupational Health, Safety & Welfare", titleHi: "व्यावसायिक स्वास्थ्य, सुरक्षा एवं कल्याण" },
        { chapterNo: 39, titleEn: "Business Continuity Planning", titleHi: "व्यापार निरंतरता योजना" },
        { chapterNo: 40, titleEn: "Crisis Management Framework", titleHi: "संकट प्रबंधन रूपरेखा" }
      ]
    },
    {
      partNo: "Part-9",
      titleEn: "Templates, Registers & Specimen Documents",
      titleHi: "टेम्प्लेट, रजिस्टर एवं नमूना दस्तावेज़",
      chapters: [
        { chapterNo: 41, titleEn: "Administrative Registers", titleHi: "प्रशासनिक रजिस्टर" },
        { chapterNo: 42, titleEn: "Standard Administrative Forms", titleHi: "मानक प्रशासनिक प्रपत्र" },
        { chapterNo: 43, titleEn: "Specimen Letters, Notices & Official Communications", titleHi: "नमूना पत्र, सूचनाएं एवं आधिकारिक संचार" },
        { chapterNo: 44, titleEn: "Agreements, Memoranda & Contract Templates", titleHi: "समझौते, ज्ञापन एवं अनुबंध टेम्प्लेट" },
        { chapterNo: 45, titleEn: "Certificates & Official Formats", titleHi: "प्रमाणपत्र एवं आधिकारिक प्रारूप" }
      ]
    },
    {
      partNo: "Part-10",
      titleEn: "Organisational Reference & Future Development",
      titleHi: "संगठनात्मक संदर्भ एवं भविष्य का विकास",
      chapters: [
        { chapterNo: 46, titleEn: "Organisational Glossary & Reference Terminology", titleHi: "संगठनात्मक शब्दावली एवं संदर्भ शब्दावली" },
        { chapterNo: 47, titleEn: "Legal, Regulatory & Administrative Reference Guide", titleHi: "विधिक, विनियामक एवं प्रशासनिक संदर्भ मार्गदर्शिका" },
        { chapterNo: 48, titleEn: "Best Practices, Benchmarking & Institutional Excellence", titleHi: "सर्वोत्तम प्रथाएं, बेंचमार्किंग एवं संस्थागत उत्कृष्टता" },
        { chapterNo: 49, titleEn: "Future Administrative Development & Strategic Modernisation", titleHi: "भविष्य का प्रशासनिक विकास एवं रणनीतिक आधुनिकीकरण" },
        { chapterNo: 50, titleEn: "Final Administrative Reference & Closing Provisions", titleHi: "अंतिम प्रशासनिक संदर्भ एवं समापन प्रावधान" }
      ]
    }
  ]
};

const newVolumes = [vol5, vol6];
fs.writeFileSync('newVolumes56.json', JSON.stringify(newVolumes, null, 2));
