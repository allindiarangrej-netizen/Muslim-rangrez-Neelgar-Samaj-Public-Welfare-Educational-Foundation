const fs = require('fs');

const vol1 = {
  volumeNo: 1,
  titleEn: "Volume 1: Constitution & Bye-Laws (Registration Edition)",
  titleHi: "खंड 1: संविधान एवं उपविधियाँ",
  parts: [
    {
      partNo: "Part-1",
      titleEn: "Preliminary Provisions & Core Principles",
      titleHi: "प्रारम्भिक उपबंध एवं मूल सिद्धांत",
      chapters: [
        { chapterNo: 1, titleEn: "Name, Registered Office & Jurisdiction", titleHi: "नाम, पंजीकृत कार्यालय एवं कार्यक्षेत्र" },
        { chapterNo: 2, titleEn: "Nature & Constitutional Status", titleHi: "संस्था की प्रकृति एवं संवैधानिक स्थिति" },
        { chapterNo: 3, titleEn: "Aims & Objectives", titleHi: "संस्था के उद्देश्य" },
        { chapterNo: 4, titleEn: "Core Principles", titleHi: "संस्था के मूल सिद्धांत" },
        { chapterNo: 5, titleEn: "Motto of the Society", titleHi: "संस्था का आदर्श वाक्य" },
        { chapterNo: 6, titleEn: "Mission Statement", titleHi: "संस्था का ध्येय वाक्य" }
      ]
    },
    {
      partNo: "Part-2",
      titleEn: "Founders & Chief Patrons",
      titleHi: "संस्थापक एवं मुख्य संरक्षक",
      chapters: [
        { chapterNo: 7, titleEn: "Founders", titleHi: "संस्थापक" },
        { chapterNo: 8, titleEn: "Chief Patrons", titleHi: "मुख्य संरक्षक" },
        { chapterNo: 9, titleEn: "Founders Council", titleHi: "संस्थापक परिषद" },
        { chapterNo: 10, titleEn: "Advisory Board", titleHi: "सलाहकार बोर्ड" }
      ]
    },
    {
      partNo: "Part-3",
      titleEn: "General Body & Membership Governance",
      titleHi: "महासभा एवं सदस्यता शासन",
      chapters: [
        { chapterNo: 11, titleEn: "The General Body", titleHi: "महासभा" },
        { chapterNo: 12, titleEn: "Membership", titleHi: "सदस्यता" },
        { chapterNo: 13, titleEn: "Rights of Members", titleHi: "सदस्य के अधिकार" },
        { chapterNo: 14, titleEn: "Duties of Members", titleHi: "सदस्य के कर्तव्य" },
        { chapterNo: 15, titleEn: "Termination, Suspension & Resignation", titleHi: "सदस्यता समाप्ति, निलंबन एवं त्यागपत्र" },
        { chapterNo: 16, titleEn: "National Executive Committee", titleHi: "राष्ट्रीय कार्यकारिणी" },
        { chapterNo: 17, titleEn: "National Office Bearers", titleHi: "राष्ट्रीय पदाधिकारी" },
        { chapterNo: 18, titleEn: "National President", titleHi: "राष्ट्रीय अध्यक्ष" },
        { chapterNo: 19, titleEn: "General Secretary", titleHi: "महासचिव" },
        { chapterNo: 20, titleEn: "Treasurer", titleHi: "कोषाध्यक्ष" }
      ]
    },
    {
      partNo: "Part-4",
      titleEn: "State, District, Tehsil & Local Unit Structural Organization",
      titleHi: "राज्य, जिला, तहसील एवं स्थानीय संगठनात्मक संरचना",
      chapters: [
        { chapterNo: 21, titleEn: "State Unit", titleHi: "राज्य इकाई" },
        { chapterNo: 22, titleEn: "District Unit", titleHi: "जिला इकाई" },
        { chapterNo: 23, titleEn: "Tehsil & Block Unit", titleHi: "तहसील एवं ब्लॉक इकाई" },
        { chapterNo: 24, titleEn: "City & Village Unit", titleHi: "नगर एवं ग्राम इकाई" },
        { chapterNo: 25, titleEn: "Local Office Bearers", titleHi: "स्थानीय पदाधिकारी" },
        { chapterNo: 26, titleEn: "Tenure", titleHi: "कार्यकाल" },
        { chapterNo: 27, titleEn: "Vacancies & Interim Appointments", titleHi: "रिक्तियाँ एवं अंतरिम नियुक्तियाँ" },
        { chapterNo: 28, titleEn: "Committees & Cells", titleHi: "समितियाँ एवं प्रकोष्ठ" },
        { chapterNo: 29, titleEn: "Coordination & Reporting", titleHi: "समन्वय एवं रिपोर्टिंग" },
        { chapterNo: 30, titleEn: "Organizational Discipline & Accountability", titleHi: "संगठनात्मक अनुशासन एवं उत्तरदायित्व" }
      ]
    },
    {
      partNo: "Part-5",
      titleEn: "Election Governance",
      titleHi: "निर्वाचन व्यवस्था",
      chapters: [
        { chapterNo: 31, titleEn: "Election Commission", titleHi: "निर्वाचन आयोग" },
        { chapterNo: 32, titleEn: "Core Principles of Election", titleHi: "चुनाव के मूल सिद्धांत" },
        { chapterNo: 33, titleEn: "Election Schedule & Notification", titleHi: "चुनाव कार्यक्रम एवं अधिसूचना" },
        { chapterNo: 34, titleEn: "Nomination Process", titleHi: "नामांकन प्रक्रिया" },
        { chapterNo: 35, titleEn: "Candidate Eligibility & Disqualification", titleHi: "प्रत्याशी की पात्रता एवं अयोग्यता" },
        { chapterNo: 36, titleEn: "Withdrawal & Campaign", titleHi: "नाम वापसी एवं चुनाव प्रचार" },
        { chapterNo: 37, titleEn: "Voting Procedure", titleHi: "मतदान प्रक्रिया" },
        { chapterNo: 38, titleEn: "Counting & Declaration of Results", titleHi: "मतगणना एवं परिणाम घोषणा" },
        { chapterNo: 39, titleEn: "Repolling & Re-election", titleHi: "पुनर्मतदान एवं पुनर्निर्वाचन" },
        { chapterNo: 40, titleEn: "Election Petition & Dispute Resolution", titleHi: "चुनाव याचिका एवं विवाद निवारण" }
      ]
    },
    {
      partNo: "Part-6",
      titleEn: "Meetings & Administrative Procedures",
      titleHi: "बैठकें एवं प्रशासनिक कार्यप्रणाली",
      chapters: [
        { chapterNo: 41, titleEn: "Types of Meetings", titleHi: "बैठकों के प्रकार" },
        { chapterNo: 42, titleEn: "Notice & Agenda", titleHi: "बैठक की सूचना एवं कार्यसूची" },
        { chapterNo: 43, titleEn: "Quorum & Meeting Conduct", titleHi: "गणपूर्ति एवं बैठक संचालन" },
        { chapterNo: 44, titleEn: "Decision-Making & Resolutions", titleHi: "निर्णय प्रक्रिया एवं प्रस्ताव" },
        { chapterNo: 45, titleEn: "Minutes of Meetings", titleHi: "कार्यवृत्त" },
        { chapterNo: 46, titleEn: "Digital & Hybrid Meetings", titleHi: "डिजिटल एवं हाइब्रिड बैठकें" },
        { chapterNo: 47, titleEn: "Records Management", titleHi: "अभिलेख प्रबंधन" },
        { chapterNo: 48, titleEn: "Official Seal & Authentication", titleHi: "आधिकारिक मुहर एवं प्रमाणीकरण" },
        { chapterNo: 49, titleEn: "Official Correspondence & Communication", titleHi: "आधिकारिक पत्राचार एवं संचार" },
        { chapterNo: 50, titleEn: "Information, Confidentiality & Record Inspection", titleHi: "सूचना, गोपनीयता एवं अभिलेख निरीक्षण" }
      ]
    },
    {
      partNo: "Part-7",
      titleEn: "Financial Management & Funds",
      titleHi: "वित्तीय प्रबंधन एवं निधि",
      chapters: [
        { chapterNo: 51, titleEn: "Financial Principles", titleHi: "वित्तीय सिद्धांत" },
        { chapterNo: 52, titleEn: "Funds of the Society", titleHi: "संस्था की निधियाँ" },
        { chapterNo: 53, titleEn: "Bank Accounts & Financial Operations", titleHi: "बैंक खाते एवं वित्तीय संचालन" },
        { chapterNo: 54, titleEn: "Annual Budget & Financial Planning", titleHi: "वार्षिक बजट एवं वित्तीय योजना" },
        { chapterNo: 55, titleEn: "Accounting System & Financial Records", titleHi: "लेखांकन प्रणाली एवं वित्तीय अभिलेख" },
        { chapterNo: 56, titleEn: "Expenditure Approval & Payment Process", titleHi: "व्यय स्वीकृति, भुगतान प्रक्रिया एवं वित्तीय अधिकार" },
        { chapterNo: 57, titleEn: "Internal & Statutory Audit", titleHi: "आंतरिक एवं वैधानिक लेखापरीक्षण" },
        { chapterNo: 58, titleEn: "Financial Transparency & Compliance", titleHi: "वित्तीय पारदर्शिता एवं अनुपालन" },
        { chapterNo: 59, titleEn: "Asset & Investment Management", titleHi: "संपत्ति एवं निवेश प्रबंधन" },
        { chapterNo: 60, titleEn: "Financial Misconduct & Risk Management", titleHi: "वित्तीय अनियमितता, उत्तरदायित्व एवं जोखिम प्रबंधन" }
      ]
    },
    {
      partNo: "Part-8",
      titleEn: "Code of Conduct & Ethical Governance",
      titleHi: "आचार संहिता एवं नैतिक प्रशासन",
      chapters: [
        { chapterNo: 61, titleEn: "Code of Conduct", titleHi: "आचार संहिता" },
        { chapterNo: 62, titleEn: "Ethical Standards for Office Bearers", titleHi: "नैतिक मानक एवं पदाधिकारियों का आचरण" },
        { chapterNo: 63, titleEn: "Equal Opportunity & Safe Environment", titleHi: "समान अवसर, सम्मान एवं सुरक्षित कार्य वातावरण" },
        { chapterNo: 64, titleEn: "Disciplinary Proceedings", titleHi: "अनुशासनात्मक कार्यवाही" },
        { chapterNo: 65, titleEn: "Grievance Redressal", titleHi: "शिकायत निवारण" },
        { chapterNo: 66, titleEn: "Appeals & Review", titleHi: "अपील एवं पुनर्विचार" },
        { chapterNo: 67, titleEn: "Conflict of Interest", titleHi: "हितों का टकराव" },
        { chapterNo: 68, titleEn: "Anti-Corruption & Anti-Bribery Policy", titleHi: "भ्रष्टाचार-निरोध एवं रिश्वत-विरोधी नीति" },
        { chapterNo: 69, titleEn: "Whistleblower Protection", titleHi: "व्हिसलब्लोअर संरक्षण" },
        { chapterNo: 70, titleEn: "Non-Retaliation & Ethics Compliance", titleHi: "प्रतिशोध-निषेध एवं नैतिक अनुपालन" }
      ]
    },
    {
      partNo: "Part-9",
      titleEn: "Constitutional Amendments, Bye-Laws & Legal Provisions",
      titleHi: "संविधान संशोधन, उपविधियाँ एवं विधिक प्रावधान",
      chapters: [
        { chapterNo: 71, titleEn: "Amendment of the Constitution", titleHi: "संविधान संशोधन" },
        { chapterNo: 72, titleEn: "Bye-Laws, Rules & Policies", titleHi: "उपविधियाँ, नियम एवं नीतियाँ" },
        { chapterNo: 73, titleEn: "Legal Compliance & Interpretation", titleHi: "विधिक अनुपालन एवं व्याख्या" },
        { chapterNo: 74, titleEn: "Dissolution of the Society", titleHi: "संस्था का विघटन" },
        { chapterNo: 75, titleEn: "Merger & Reorganization", titleHi: "विलय, पुनर्गठन एवं संरचनात्मक परिवर्तन" },
        { chapterNo: 76, titleEn: "Disposal of Assets & Succession", titleHi: "संपत्तियों का निस्तारण एवं उत्तराधिकार" },
        { chapterNo: 77, titleEn: "Transitional Provisions", titleHi: "संक्रमणकालीन प्रावधान" },
        { chapterNo: 78, titleEn: "Miscellaneous Provisions", titleHi: "विविध प्रावधान" },
        { chapterNo: 79, titleEn: "Saving Clauses & Legal Protection", titleHi: "बचाव प्रावधान एवं विधिक संरक्षण" },
        { chapterNo: 80, titleEn: "Schedules, Annexures & Final Declaration", titleHi: "संविधान का अंग, अनुसूचियाँ एवं अंतिम घोषणा" }
      ]
    }
  ]
};

const vol2 = {
  volumeNo: 2,
  titleEn: "Volume 2: Rules, Regulations, Policies & Standard Operating Procedures (SOPs)",
  titleHi: "खंड 2: नियम, विनियम, नीतियां एवं मानक संचालन प्रक्रियाएं (SOPs)",
  parts: [
    {
      partNo: "Part-1",
      titleEn: "Membership Rules",
      titleHi: "सदस्यता नियम",
      chapters: [
        { chapterNo: 1, titleEn: "Membership Rules", titleHi: "सदस्यता नियम" },
        { chapterNo: 2, titleEn: "Membership Registration Procedure", titleHi: "सदस्यता पंजीकरण प्रक्रिया" },
        { chapterNo: 3, titleEn: "Membership Renewal", titleHi: "सदस्यता नवीनीकरण" },
        { chapterNo: 4, titleEn: "Membership Suspension & Cancellation", titleHi: "सदस्यता निलंबन एवं रद्दीकरण" },
        { chapterNo: 5, titleEn: "Membership Register & Records", titleHi: "सदस्यता रजिस्टर एवं रिकॉर्ड" }
      ]
    },
    {
      partNo: "Part-2",
      titleEn: "Election Rules",
      titleHi: "चुनाव नियम",
      chapters: [
        { chapterNo: 6, titleEn: "Election Rules", titleHi: "चुनाव नियम" },
        { chapterNo: 7, titleEn: "Electoral Roll", titleHi: "मतदाता सूची" },
        { chapterNo: 8, titleEn: "Nomination Procedure", titleHi: "नामांकन प्रक्रिया" },
        { chapterNo: 9, titleEn: "Voting Procedure", titleHi: "मतदान प्रक्रिया" },
        { chapterNo: 10, titleEn: "Counting & Declaration of Results", titleHi: "मतगणना एवं परिणाम की घोषणा" }
      ]
    },
    {
      partNo: "Part-3",
      titleEn: "Financial Rules",
      titleHi: "वित्तीय नियम",
      chapters: [
        { chapterNo: 11, titleEn: "Financial Management Rules", titleHi: "वित्तीय प्रबंधन नियम" },
        { chapterNo: 12, titleEn: "Budget Rules", titleHi: "बजट नियम" },
        { chapterNo: 13, titleEn: "Accounting Rules", titleHi: "लेखांकन नियम" },
        { chapterNo: 14, titleEn: "Banking Rules", titleHi: "बैंकिंग नियम" },
        { chapterNo: 15, titleEn: "Audit Rules", titleHi: "लेखापरीक्षा नियम" }
      ]
    },
    {
      partNo: "Part-4",
      titleEn: "Human Resource & Service Rules",
      titleHi: "मानव संसाधन एवं सेवा नियम",
      chapters: [
        { chapterNo: 16, titleEn: "Appointment Rules", titleHi: "नियुक्ति नियम" },
        { chapterNo: 17, titleEn: "Employee Service Rules", titleHi: "कर्मचारी सेवा नियम" },
        { chapterNo: 18, titleEn: "Volunteer Management", titleHi: "स्वयंसेवक प्रबंधन" },
        { chapterNo: 19, titleEn: "Performance Evaluation", titleHi: "प्रदर्शन मूल्यांकन" },
        { chapterNo: 20, titleEn: "Leave & Discipline Rules", titleHi: "अवकाश एवं अनुशासन नियम" }
      ]
    },
    {
      partNo: "Part-5",
      titleEn: "Meetings & Office Administration Rules",
      titleHi: "बैठकें एवं कार्यालय प्रशासन नियम",
      chapters: [
        { chapterNo: 21, titleEn: "Office Administration", titleHi: "कार्यालय प्रशासन" },
        { chapterNo: 22, titleEn: "Meeting SOP", titleHi: "बैठक SOP" },
        { chapterNo: 23, titleEn: "Record Management", titleHi: "रिकॉर्ड प्रबंधन" },
        { chapterNo: 24, titleEn: "Official Communication", titleHi: "आधिकारिक संचार" },
        { chapterNo: 25, titleEn: "Digital Governance", titleHi: "डिजिटल शासन" }
      ]
    },
    {
      partNo: "Part-6",
      titleEn: "Committees SOP",
      titleHi: "समितियों के लिए SOP",
      chapters: [
        { chapterNo: 26, titleEn: "Executive Committee SOP", titleHi: "कार्यकारिणी समिति SOP" },
        { chapterNo: 27, titleEn: "Finance Committee SOP", titleHi: "वित्त समिति SOP" },
        { chapterNo: 28, titleEn: "Education Committee SOP", titleHi: "शिक्षा समिति SOP" },
        { chapterNo: 29, titleEn: "Welfare Committee SOP", titleHi: "कल्याण समिति SOP" },
        { chapterNo: 30, titleEn: "Women & Youth Committee SOP", titleHi: "महिला एवं युवा समिति SOP" }
      ]
    },
    {
      partNo: "Part-7",
      titleEn: "Project & Programme Management",
      titleHi: "परियोजना एवं कार्यक्रम प्रबंधन",
      chapters: [
        { chapterNo: 31, titleEn: "Project Planning", titleHi: "परियोजना योजना" },
        { chapterNo: 32, titleEn: "Project Approval", titleHi: "परियोजना अनुमोदन" },
        { chapterNo: 33, titleEn: "Project Monitoring", titleHi: "परियोजना निगरानी" },
        { chapterNo: 34, titleEn: "Project Evaluation", titleHi: "परियोजना मूल्यांकन" },
        { chapterNo: 35, titleEn: "Project Closure", titleHi: "परियोजना समापन" }
      ]
    },
    {
      partNo: "Part-8",
      titleEn: "Procurement & Asset Rules",
      titleHi: "खरीद एवं संपत्ति नियम",
      chapters: [
        { chapterNo: 36, titleEn: "Procurement Rules", titleHi: "खरीद नियम" },
        { chapterNo: 37, titleEn: "Purchase Procedure", titleHi: "क्रय प्रक्रिया" },
        { chapterNo: 38, titleEn: "Inventory Management", titleHi: "इन्वेंटरी प्रबंधन" },
        { chapterNo: 39, titleEn: "Asset Verification", titleHi: "संपत्ति सत्यापन" },
        { chapterNo: 40, titleEn: "Disposal of Assets", titleHi: "संपत्तियों का निपटान" }
      ]
    },
    {
      partNo: "Part-9",
      titleEn: "Information Technology Policy",
      titleHi: "सूचना प्रौद्योगिकी नीति",
      chapters: [
        { chapterNo: 41, titleEn: "Website Management Policy", titleHi: "वेबसाइट प्रबंधन नीति" },
        { chapterNo: 42, titleEn: "Data Privacy Policy", titleHi: "डेटा गोपनीयता नीति" },
        { chapterNo: 43, titleEn: "Cyber Security Policy", titleHi: "साइबर सुरक्षा नीति" },
        { chapterNo: 44, titleEn: "Social Media Policy", titleHi: "सोशल मीडिया नीति" },
        { chapterNo: 45, titleEn: "Digital Document Policy", titleHi: "डिजिटल दस्तावेज़ नीति" }
      ]
    },
    {
      partNo: "Part-10",
      titleEn: "Community Welfare Policies",
      titleHi: "सामुदायिक कल्याण नीतियां",
      chapters: [
        { chapterNo: 46, titleEn: "Education Assistance Policy", titleHi: "शिक्षा सहायता नीति" },
        { chapterNo: 47, titleEn: "Scholarship Policy", titleHi: "छात्रवृत्ति नीति" },
        { chapterNo: 48, titleEn: "Medical Assistance Policy", titleHi: "चिकित्सा सहायता नीति" },
        { chapterNo: 49, titleEn: "Emergency Relief Policy", titleHi: "आपातकालीन राहत नीति" },
        { chapterNo: 50, titleEn: "Marriage Assistance Policy", titleHi: "विवाह सहायता नीति" }
      ]
    },
    {
      partNo: "Part-11",
      titleEn: "Legal & Compliance Policies",
      titleHi: "विधिक एवं अनुपालन नीतियां",
      chapters: [
        { chapterNo: 51, titleEn: "RTI & Transparency Guidelines", titleHi: "आरटीआई एवं पारदर्शिता दिशा-निर्देश" },
        { chapterNo: 52, titleEn: "Anti-Corruption Policy", titleHi: "भ्रष्टाचार-निरोध नीति" },
        { chapterNo: 53, titleEn: "Conflict of Interest Policy", titleHi: "हितों का टकराव नीति" },
        { chapterNo: 54, titleEn: "Whistleblower Policy", titleHi: "व्हिसलब्लोअर नीति" },
        { chapterNo: 55, titleEn: "Legal Compliance Policy", titleHi: "विधिक अनुपालन नीति" }
      ]
    },
    {
      partNo: "Part-12",
      titleEn: "Forms & Registers",
      titleHi: "प्रपत्र एवं रजिस्टर",
      chapters: [
        { chapterNo: 56, titleEn: "Membership Forms", titleHi: "सदस्यता प्रपत्र" },
        { chapterNo: 57, titleEn: "Election Forms", titleHi: "चुनाव प्रपत्र" },
        { chapterNo: 58, titleEn: "Financial Forms", titleHi: "वित्तीय प्रपत्र" },
        { chapterNo: 59, titleEn: "Administrative Registers", titleHi: "प्रशासनिक रजिस्टर" },
        { chapterNo: 60, titleEn: "Official Templates", titleHi: "आधिकारिक टेम्प्लेट" }
      ]
    },
    {
      partNo: "Part-13",
      titleEn: "Annexures",
      titleHi: "अनुसूचियां",
      chapters: []
    }
  ]
};

const vol3 = {
  volumeNo: 3,
  titleEn: "Volume 3: Operational Manuals, Implementation Guidelines & Best Practices",
  titleHi: "खंड 3: संचालन नियमावली, कार्यान्वयन दिशानिर्देश एवं सर्वोत्तम प्रथाएं",
  parts: [
    {
      partNo: "Part-1",
      titleEn: "Office Administration Manual",
      titleHi: "कार्यालय प्रशासन नियमावली",
      chapters: [
        { chapterNo: 1, titleEn: "Office Setup & Administration", titleHi: "कार्यालय स्थापना एवं प्रशासन" },
        { chapterNo: 2, titleEn: "Reception & Visitor Management", titleHi: "स्वागत एवं आगंतुक प्रबंधन" },
        { chapterNo: 3, titleEn: "File & Record Handling", titleHi: "फ़ाइल एवं रिकॉर्ड प्रबंधन" },
        { chapterNo: 4, titleEn: "Office Discipline", titleHi: "कार्यालय अनुशासन" },
        { chapterNo: 5, titleEn: "Daily Office Operations", titleHi: "दैनिक कार्यालय संचालन" }
      ]
    },
    {
      partNo: "Part-2",
      titleEn: "Membership & Community Services Manual",
      titleHi: "सदस्यता एवं सामुदायिक सेवाएं नियमावली",
      chapters: [
        { chapterNo: 6, titleEn: "Member Registration Procedure", titleHi: "सदस्य पंजीकरण प्रक्रिया" },
        { chapterNo: 7, titleEn: "Member Verification Process", titleHi: "सदस्य सत्यापन प्रक्रिया" },
        { chapterNo: 8, titleEn: "Membership Renewal", titleHi: "सदस्यता नवीनीकरण" },
        { chapterNo: 9, titleEn: "Digital Membership Management", titleHi: "डिजिटल सदस्यता प्रबंधन" },
        { chapterNo: 10, titleEn: "Community Help Desk", titleHi: "सामुदायिक सहायता डेस्क" }
      ]
    },
    {
      partNo: "Part-3",
      titleEn: "Event & Programme Management Manual",
      titleHi: "कार्यक्रम एवं आयोजन प्रबंधन नियमावली",
      chapters: [
        { chapterNo: 11, titleEn: "Event Planning", titleHi: "कार्यक्रम योजना" },
        { chapterNo: 12, titleEn: "Seminar & Conference Management", titleHi: "संगोष्ठी एवं सम्मेलन प्रबंधन" },
        { chapterNo: 13, titleEn: "Mahapanchayat Management", titleHi: "महापंचायत प्रबंधन" },
        { chapterNo: 14, titleEn: "Volunteer Coordination", titleHi: "स्वयंसेवक समन्वय" },
        { chapterNo: 15, titleEn: "Post-Event Reporting", titleHi: "आयोजन पश्चात रिपोर्टिंग" }
      ]
    },
    {
      partNo: "Part-4",
      titleEn: "Education & Welfare Operations Manual",
      titleHi: "शिक्षा एवं कल्याण संचालन नियमावली",
      chapters: [
        { chapterNo: 16, titleEn: "Scholarship Processing", titleHi: "छात्रवृत्ति प्रसंस्करण" },
        { chapterNo: 17, titleEn: "Educational Guidance", titleHi: "शैक्षणिक मार्गदर्शन" },
        { chapterNo: 18, titleEn: "Welfare Assistance", titleHi: "कल्याण सहायता" },
        { chapterNo: 19, titleEn: "Medical Assistance", titleHi: "चिकित्सा सहायता" },
        { chapterNo: 20, titleEn: "Beneficiary Monitoring", titleHi: "लाभार्थी निगरानी" }
      ]
    },
    {
      partNo: "Part-5",
      titleEn: "Finance Operations Manual",
      titleHi: "वित्त संचालन नियमावली",
      chapters: [
        { chapterNo: 21, titleEn: "Daily Cash Handling", titleHi: "दैनिक नकद प्रबंधन" },
        { chapterNo: 22, titleEn: "Donation Collection", titleHi: "दान संग्रह" },
        { chapterNo: 23, titleEn: "Banking Procedures", titleHi: "बैंकिंग प्रक्रियाएं" },
        { chapterNo: 24, titleEn: "Expense Processing", titleHi: "व्यय प्रसंस्करण" },
        { chapterNo: 25, titleEn: "Financial Documentation", titleHi: "वित्तीय प्रलेखन" }
      ]
    },
    {
      partNo: "Part-6",
      titleEn: "Human Resource & Volunteer Manual",
      titleHi: "मानव संसाधन एवं स्वयंसेवक नियमावली",
      chapters: [
        { chapterNo: 26, titleEn: "Volunteer Management", titleHi: "स्वयंसेवक प्रबंधन" },
        { chapterNo: 27, titleEn: "Employee Orientation", titleHi: "कर्मचारी अभिविन्यास" },
        { chapterNo: 28, titleEn: "Training Programme", titleHi: "प्रशिक्षण कार्यक्रम" },
        { chapterNo: 29, titleEn: "Performance Review", titleHi: "प्रदर्शन समीक्षा" },
        { chapterNo: 30, titleEn: "Code of Conduct Implementation", titleHi: "आचार संहिता कार्यान्वयन" }
      ]
    },
    {
      partNo: "Part-7",
      titleEn: "Digital Platform & IT Operations Manual",
      titleHi: "डिजिटल प्लेटफॉर्म एवं आईटी संचालन नियमावली",
      chapters: [
        { chapterNo: 31, titleEn: "Website Administration", titleHi: "वेबसाइट प्रशासन" },
        { chapterNo: 32, titleEn: "Member Portal Operations", titleHi: "सदस्य पोर्टल संचालन" },
        { chapterNo: 33, titleEn: "Social Media Management", titleHi: "सोशल मीडिया प्रबंधन" },
        { chapterNo: 34, titleEn: "Digital Security Practices", titleHi: "डिजिटल सुरक्षा प्रथाएं" },
        { chapterNo: 35, titleEn: "Data Backup Procedures", titleHi: "डेटा बैकअप प्रक्रियाएं" }
      ]
    },
    {
      partNo: "Part-8",
      titleEn: "Public Relations & Media Manual",
      titleHi: "जनसंपर्क एवं मीडिया नियमावली",
      chapters: [
        { chapterNo: 36, titleEn: "Public Communication", titleHi: "सार्वजनिक संचार" },
        { chapterNo: 37, titleEn: "Press Releases", titleHi: "प्रेस विज्ञप्ति" },
        { chapterNo: 38, titleEn: "Media Interaction", titleHi: "मीडिया इंटरेक्शन" },
        { chapterNo: 39, titleEn: "Branding Guidelines", titleHi: "ब्रांडिंग दिशानिर्देश" },
        { chapterNo: 40, titleEn: "Crisis Communication", titleHi: "संकट संचार" }
      ]
    },
    {
      partNo: "Part-9",
      titleEn: "Monitoring, Evaluation & Quality Manual",
      titleHi: "निगरानी, मूल्यांकन एवं गुणवत्ता नियमावली",
      chapters: [
        { chapterNo: 41, titleEn: "Internal Monitoring", titleHi: "आंतरिक निगरानी" },
        { chapterNo: 42, titleEn: "Programme Evaluation", titleHi: "कार्यक्रम मूल्यांकन" },
        { chapterNo: 43, titleEn: "KPI Measurement", titleHi: "केपीआई मापन" },
        { chapterNo: 44, titleEn: "Feedback Management", titleHi: "फीडबैक प्रबंधन" },
        { chapterNo: 45, titleEn: "Continuous Improvement", titleHi: "निरंतर सुधार" }
      ]
    },
    {
      partNo: "Part-10",
      titleEn: "Emergency Response, Disaster Management & Business Continuity Manual",
      titleHi: "आपातकालीन प्रतिक्रिया, आपदा प्रबंधन एवं व्यापार निरंतरता नियमावली",
      chapters: [
        { chapterNo: 46, titleEn: "Emergency Response", titleHi: "आपातकालीन प्रतिक्रिया" },
        { chapterNo: 47, titleEn: "Disaster Relief Operations", titleHi: "आपदा राहत संचालन" },
        { chapterNo: 48, titleEn: "Medical Emergency Coordination", titleHi: "चिकित्सा आपातकालीन समन्वय" },
        { chapterNo: 49, titleEn: "Business Continuity Planning", titleHi: "व्यापार निरंतरता योजना" },
        { chapterNo: 50, titleEn: "Post-Emergency Recovery", titleHi: "आपातकाल के बाद की रिकवरी" }
      ]
    }
  ]
};

const vol4 = {
  volumeNo: 4,
  titleEn: "Volume 4: Administrative Forms, Registers, Templates & Specimen Documents",
  titleHi: "खंड 4: प्रशासनिक प्रपत्र, रजिस्टर, टेम्प्लेट एवं नमूना दस्तावेज़",
  parts: [
    {
      partNo: "Part-1",
      titleEn: "Governance Forms & Office Administration",
      titleHi: "गवर्नेंस फॉर्म और कार्यालय प्रशासन",
      chapters: [
        { chapterNo: 1, titleEn: "Office Bearer Appointment Forms", titleHi: "पदाधिकारी नियुक्ति प्रपत्र" },
        { chapterNo: 2, titleEn: "Committee Constitution Forms", titleHi: "समिति गठन प्रपत्र" },
        { chapterNo: 3, titleEn: "Joining, Resignation & Handover-Takeover Forms", titleHi: "जॉइनिंग, इस्तीफा और कार्यभार सौंपने के प्रपत्र" },
        { chapterNo: 4, titleEn: "Office Registers & Administrative Records", titleHi: "कार्यालय रजिस्टर और प्रशासनिक रिकॉर्ड" },
        { chapterNo: 5, titleEn: "Official Correspondence & Authority Letters", titleHi: "आधिकारिक पत्राचार एवं अधिकार पत्र" }
      ]
    },
    {
      partNo: "Part-2",
      titleEn: "Membership & Community Records",
      titleHi: "सदस्यता और सामुदायिक रिकॉर्ड",
      chapters: [
        { chapterNo: 6, titleEn: "Membership Application & Registration Forms", titleHi: "सदस्यता आवेदन एवं पंजीकरण प्रपत्र" },
        { chapterNo: 7, titleEn: "Family Registration & Community Database Forms", titleHi: "पारिवारिक पंजीकरण और सामुदायिक डेटाबेस प्रपत्र" },
        { chapterNo: 8, titleEn: "Volunteer Registration & Community Participation Records", titleHi: "स्वयंसेवक पंजीकरण और सामुदायिक भागीदारी रिकॉर्ड" },
        { chapterNo: 9, titleEn: "Beneficiary Registration & Welfare Assistance Forms", titleHi: "लाभार्थी पंजीकरण और कल्याण सहायता प्रपत्र" },
        { chapterNo: 10, titleEn: "Complaints, Suggestions & Community Feedback Forms", titleHi: "शिकायतें, सुझाव और सामुदायिक प्रतिक्रिया प्रपत्र" }
      ]
    },
    {
      partNo: "Part-3",
      titleEn: "Meetings, Elections & Governance Documentation",
      titleHi: "बैठकें, चुनाव एवं शासन दस्तावेज़ीकरण",
      chapters: [
        { chapterNo: 11, titleEn: "Meeting Notices, Agendas & Attendance Forms", titleHi: "बैठक सूचनाएं, एजेंडा एवं उपस्थिति प्रपत्र" },
        { chapterNo: 12, titleEn: "Minutes, Resolutions & Decision Registers", titleHi: "कार्यवृत्त, प्रस्ताव एवं निर्णय रजिस्टर" },
        { chapterNo: 13, titleEn: "Election, Nomination & Voting Documentation", titleHi: "चुनाव, नामांकन और मतदान दस्तावेज़ीकरण" },
        { chapterNo: 14, titleEn: "Governance Registers & Statutory Records", titleHi: "गवर्नेंस रजिस्टर और वैधानिक रिकॉर्ड" },
        { chapterNo: 15, titleEn: "Official Governance Templates & Administrative Checklists", titleHi: "आधिकारिक शासन टेम्प्लेट और प्रशासनिक चेकलिस्ट" }
      ]
    },
    {
      partNo: "Part-4",
      titleEn: "Finance Forms, Accounting Registers & Asset Documentation",
      titleHi: "वित्त प्रपत्र, लेखांकन रजिस्टर और परिसंपत्ति दस्तावेज़ीकरण",
      chapters: [
        { chapterNo: 16, titleEn: "Receipt, Payment & Voucher Forms", titleHi: "रसीद, भुगतान और वाउचर फॉर्म" },
        { chapterNo: 17, titleEn: "Accounting Books & Financial Registers", titleHi: "लेखांकन पुस्तकें और वित्तीय रजिस्टर" },
        { chapterNo: 18, titleEn: "Donations, Grants & Budget Documentation", titleHi: "दान, अनुदान और बजट दस्तावेज़ीकरण" },
        { chapterNo: 19, titleEn: "Asset, Inventory & Stock Registers", titleHi: "संपत्ति, इन्वेंटरी और स्टॉक रजिस्टर" },
        { chapterNo: 20, titleEn: "Audit Documentation & Financial Control Templates", titleHi: "लेखापरीक्षा दस्तावेज़ीकरण और वित्तीय नियंत्रण टेम्प्लेट" }
      ]
    },
    {
      partNo: "Part-5",
      titleEn: "Human Resource, Employment & Volunteer Documentation",
      titleHi: "मानव संसाधन, रोजगार और स्वयंसेवक दस्तावेज़ीकरण",
      chapters: [
        { chapterNo: 21, titleEn: "Recruitment, Appointment & Employment Forms", titleHi: "भर्ती, नियुक्ति और रोजगार प्रपत्र" },
        { chapterNo: 22, titleEn: "Attendance, Leave & Service Records", titleHi: "उपस्थिति, अवकाश और सेवा रिकॉर्ड" },
        { chapterNo: 23, titleEn: "Performance Evaluation, Training & Development Records", titleHi: "प्रदर्शन मूल्यांकन, प्रशिक्षण और विकास रिकॉर्ड" },
        { chapterNo: 24, titleEn: "Volunteer Administration & Service Documentation", titleHi: "स्वयंसेवक प्रशासन और सेवा दस्तावेज़ीकरण" },
        { chapterNo: 25, titleEn: "Separation, Exit Documentation & Human Resource Registers", titleHi: "अलगाव, निकास दस्तावेज़ीकरण और मानव संसाधन रजिस्टर" }
      ]
    },
    {
      partNo: "Part-6",
      titleEn: "Education, Scholarship & Welfare Documentation",
      titleHi: "शिक्षा, छात्रवृत्ति और कल्याण दस्तावेज़ीकरण",
      chapters: [
        { chapterNo: 26, titleEn: "Scholarship & Educational Assistance Forms", titleHi: "छात्रवृत्ति और शैक्षिक सहायता प्रपत्र" },
        { chapterNo: 27, titleEn: "Student Records & Career Counselling Documentation", titleHi: "छात्र रिकॉर्ड और करियर परामर्श दस्तावेज़ीकरण" },
        { chapterNo: 28, titleEn: "Welfare Assessment & Medical Assistance Documentation", titleHi: "कल्याण मूल्यांकन और चिकित्सा सहायता दस्तावेज़ीकरण" },
        { chapterNo: 29, titleEn: "Relief Distribution & Beneficiary Management Records", titleHi: "राहत वितरण एवं लाभार्थी प्रबंधन रिकॉर्ड" },
        { chapterNo: 30, titleEn: "Programme Monitoring & Educational Welfare Registers", titleHi: "कार्यक्रम निगरानी और शैक्षिक कल्याण रजिस्टर" }
      ]
    },
    {
      partNo: "Part-7",
      titleEn: "Digital Systems, Information Technology & Data Management Documentation",
      titleHi: "डिजिटल सिस्टम, सूचना प्रौद्योगिकी और डेटा प्रबंधन दस्तावेज़ीकरण",
      chapters: [
        { chapterNo: 31, titleEn: "Website Administration & Digital Platform Forms", titleHi: "वेबसाइट प्रशासन और डिजिटल प्लेटफॉर्म फॉर्म" },
        { chapterNo: 32, titleEn: "User Account, Identity & Access Management Documentation", titleHi: "उपयोगकर्ता खाता, पहचान और पहुंच प्रबंधन दस्तावेज़ीकरण" },
        { chapterNo: 33, titleEn: "Information Management & Data Governance Records", titleHi: "सूचना प्रबंधन और डेटा गवर्नेंस रिकॉर्ड" },
        { chapterNo: 34, titleEn: "Cybersecurity, Backup & IT Incident Documentation", titleHi: "साइबर सुरक्षा, बैकअप और आईटी घटना दस्तावेज़ीकरण" },
        { chapterNo: 35, titleEn: "Digital Asset Management & Information Technology Registers", titleHi: "डिजिटल संपत्ति प्रबंधन और सूचना प्रौद्योगिकी रजिस्टर" }
      ]
    },
    {
      partNo: "Part-8",
      titleEn: "Media, Public Relations, Publications & Communication Documentation",
      titleHi: "मीडिया, जनसंपर्क, प्रकाशन और संचार दस्तावेज़ीकरण",
      chapters: [
        { chapterNo: 36, titleEn: "Press Releases & Media Communication Forms", titleHi: "प्रेस विज्ञप्ति और मीडिया संचार प्रपत्र" },
        { chapterNo: 37, titleEn: "Social Media & Digital Communication Documentation", titleHi: "सोशल मीडिया और डिजिटल संचार दस्तावेज़ीकरण" },
        { chapterNo: 38, titleEn: "Publications, Branding & Intellectual Property Documentation", titleHi: "प्रकाशन, ब्रांडिंग और बौद्धिक संपदा दस्तावेज़ीकरण" },
        { chapterNo: 39, titleEn: "Public Relations, Event Media & Photography Documentation", titleHi: "जनसंपर्क, कार्यक्रम मीडिया और फोटोग्राफी दस्तावेज़ीकरण" },
        { chapterNo: 40, titleEn: "Public Feedback, Communication Registers & Outreach Records", titleHi: "सार्वजनिक प्रतिक्रिया, संचार रजिस्टर और आउटरीच रिकॉर्ड" }
      ]
    },
    {
      partNo: "Part-9",
      titleEn: "Monitoring, Audit, Compliance & Quality Assurance Documentation",
      titleHi: "निगरानी, लेखापरीक्षा, अनुपालन एवं गुणवत्ता आश्वासन दस्तावेज़ीकरण",
      chapters: [
        { chapterNo: 41, titleEn: "Monitoring, Inspection & Evaluation Forms", titleHi: "निगरानी, निरीक्षण एवं मूल्यांकन प्रपत्र" },
        { chapterNo: 42, titleEn: "Compliance Verification & Legal Documentation", titleHi: "अनुपालन सत्यापन एवं कानूनी दस्तावेज़ीकरण" },
        { chapterNo: 43, titleEn: "Internal Audit & Financial Review Documentation", titleHi: "आंतरिक लेखा परीक्षा एवं वित्तीय समीक्षा दस्तावेज़ीकरण" },
        { chapterNo: 44, titleEn: "Risk Management & Corrective Action Documentation", titleHi: "जोखिम प्रबंधन और सुधारात्मक कार्रवाई दस्तावेज़ीकरण" },
        { chapterNo: 45, titleEn: "Quality Assurance, Performance Review & Governance Registers", titleHi: "गुणवत्ता आश्वासन, प्रदर्शन समीक्षा और शासन रजिस्टर" }
      ]
    },
    {
      partNo: "Part-10",
      titleEn: "Emergency Management, Legal Records & Miscellaneous Documentation",
      titleHi: "आपातकालीन प्रबंधन, कानूनी रिकॉर्ड एवं विविध दस्तावेज़ीकरण",
      chapters: [
        { chapterNo: 46, titleEn: "Emergency Response & Incident Documentation", titleHi: "आपातकालीन प्रतिक्रिया और घटना दस्तावेज़ीकरण" },
        { chapterNo: 47, titleEn: "Legal Records, Litigation & Insurance Documentation", titleHi: "कानूनी रिकॉर्ड, मुकदमेबाजी और बीमा दस्तावेज़ीकरण" },
        { chapterNo: 48, titleEn: "Visitor, Security & Property Management Documentation", titleHi: "आगंतुक, सुरक्षा और संपत्ति प्रबंधन दस्तावेज़ीकरण" },
        { chapterNo: 49, titleEn: "Miscellaneous Administrative Forms & Registers", titleHi: "विविध प्रशासनिक प्रपत्र और रजिस्टर" },
        { chapterNo: 50, titleEn: "Master Index, Document Control & Records Management", titleHi: "मास्टर इंडेक्स, दस्तावेज़ नियंत्रण और रिकॉर्ड्स प्रबंधन" }
      ]
    }
  ]
};

const newVolumes = [vol1, vol2, vol3, vol4];
fs.writeFileSync('newVolumes.json', JSON.stringify(newVolumes, null, 2));
