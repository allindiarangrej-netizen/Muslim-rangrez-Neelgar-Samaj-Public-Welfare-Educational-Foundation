export interface Clause {
  id: string;
  titleEn?: string;
  titleHi?: string;
  textEn: string;
  textHi: string;
  textUr?: string;
  title?: {
    en: string;
    hi: string;
    ur?: string;
  };
}

export interface Chapter {
  chapterNo: number;
  titleEn: string;
  titleHi: string;
  titleUr?: string;
  summaryEn?: string;
  summaryHi?: string;
  clauses: Clause[];
}

export interface Part {
  partNo: string;
  titleEn: string;
  titleHi: string;
  titleUr?: string;
  chapters: Chapter[];
}

export interface ConstitutionVolume {
  volumeNo: number;
  titleEn: string;
  titleHi: string;
  titleUr?: string;
  parts: Part[];
}

export const CONSTITUTION_DATA: ConstitutionVolume[] = [
  {
    "volumeNo": 1,
    "titleEn": "Volume 1: Constitution & Bye-Laws (Registration Edition)",
    "titleHi": "खंड 1: संविधान एवं उपविधियाँ (पंजीकरण संस्करण)",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Preliminary Provisions (प्रारम्भिक उपबंध)",
        "titleHi": "भाग 1: प्रारम्भिक उपबंध",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Name, Registered Office & Jurisdiction",
            "titleHi": "नाम, पंजीकृत कार्यालय एवं कार्यक्षेत्र",
            "summaryEn": "Defines the official registered name of the society, registered headquarters, branch office rules, and geographical area of operations across India.",
            "summaryHi": "संस्था के आधिकारिक पंजीकृत नाम, पंजीकृत मुख्यालय, शाखा कार्यालय नियमों और भारत भर में भौगोलिक कार्यक्षेत्र को परिभाषित करता है।",
            "clauses": [
              {
                "id": "v1_c1_1.1",
                "titleEn": "1.1 Name of the Society",
                "titleHi": "1.1 संस्था का नाम",
                "textEn": "The name of the Society shall be 'Muslim Rangrez (Neelgar) Samaj Public Welfare & Educational Society' (hereinafter referred to as the 'Society').",
                "textHi": "इस संस्था का नाम 'मस्लिम रंगरेज़ (नीलगर) समाज पब्लिक वेलफेयर एंड एजुकेशनल सोसाइटी' (इसके बाद 'संस्था' के रूप में संदर्भित) होगा।"
              },
              {
                "id": "v1_c1_1.2",
                "titleEn": "1.2 Legal Nature & Status",
                "titleHi": "1.2 विधिक स्वरूप",
                "textEn": "The Society shall be a registered, non-profit, non-political, voluntary, social, educational, and welfare-oriented institution governed under applicable Indian laws.",
                "textHi": "यह संस्था एक पंजीकृत, गैर-लाभकारी (Not-for-Profit), गैर-राजनीतिक, स्वैच्छिक, सामाजिक, शैक्षणिक एवं जनकल्याणकारी संस्था होगी, जिसका संचालन लागू भारतीय कानूनों के अनुसार किया जाएगा।"
              },
              {
                "id": "v1_c1_1.3",
                "titleEn": "1.3 Registered Office",
                "titleHi": "1.3 पंजीकृत मुख्य कार्यालय",
                "textEn": "The registered head office of the Society shall be situated in India at a place designated by the Executive Committee or National Executive.",
                "textHi": "संस्था का पंजीकृत मुख्य कार्यालय भारत में उस स्थान पर होगा जिसे प्रथम कार्यकारिणी अथवा तत्पश्चात राष्ट्रीय कार्यकारिणी द्वारा विधिवत प्रस्ताव पारित कर निर्धारित किया जाए।"
              },
              {
                "id": "v1_c1_1.4",
                "titleEn": "1.4 Branch Offices",
                "titleHi": "1.4 शाखा कार्यालय",
                "textEn": "The Society may establish branches, regional offices, or local units at state, district, city, or village levels across India.",
                "textHi": "संस्था आवश्यकता के अनुसार भारत के किसी भी राज्य, संघ राज्य क्षेत्र, जिला, नगर अथवा ग्राम स्तर पर अपनी शाखाएँ, क्षेत्रीय कार्यालय या इकाइयाँ स्थापित कर सकेगी।"
              },
              {
                "id": "v1_c1_1.5",
                "titleEn": "1.5 Area of Operation",
                "titleHi": "1.5 कार्यक्षेत्र",
                "textEn": "The area of operation of the Society shall extend to the entire territory of India and can establish transparent collaborations with non-resident Indian community channels.",
                "textHi": "संस्था का कार्यक्षेत्र सम्पूर्ण भारत होगा। संस्था अपने उद्देश्यों की पूर्ति हेतु प्रवासी भारतीय समुदाय, प्रवासी मुस्लिम रंगरेज़ (नीलगर) समाज तथा अंतर्राष्ट्रीय सहयोग मंचों के साथ वैध एवं पारदर्शी सहयोग स्थापित कर सकेगी।"
              },
              {
                "id": "v1_c1_1.6",
                "titleEn": "1.6 Official Language",
                "titleHi": "1.6 आधिकारिक भाषा",
                "textEn": "The official language of the Society shall be Hindi. Official English translations can be generated and utilized as required for legal compliance.",
                "textHi": "संस्था की आधिकारिक भाषा हिन्दी होगी। आवश्यकतानुसार अंग्रेजी अथवा अन्य भाषाओं में अधिकृत अनुवाद तैयार किए जा सकते हैं।"
              }
            ]
          },
          {
            "chapterNo": 2,
            "titleEn": "Nature & Constitutional Status",
            "titleHi": "संस्था की प्रकृति एवं संवैधानिक स्थिति",
            "summaryEn": "Specifies the non-profit model, non-political commitment, inclusive framework, and adherence to the Constitution of India.",
            "summaryHi": "गैर-लाभकारी मॉडल, राजनीतिक तटस्थता, समावेशी ढांचे और भारत के संविधान के प्रति निष्ठा को स्पष्ट करता है।",
            "clauses": [
              {
                "id": "v1_c2_2.1",
                "titleEn": "2.1 Public Welfare Character",
                "titleHi": "2.1 संस्था की प्रकृति",
                "textEn": "The Society is established purely for social welfare, education, healthcare, and humanitarian advancement of the community and the public at large.",
                "textHi": "संस्था पूर्णतः सामाजिक, शैक्षणिक, सांस्कृतिक, जनकल्याणकारी एवं मानव सेवा के उद्देश्य से कार्य करेगी। संस्था का उद्देश्य किसी व्यक्ति, समूह अथवा पदाधिकारी को निजी लाभ पहुँचाना नहीं, बल्कि समाज एवं सार्वजनिक हित में कार्य करना होगा।"
              },
              {
                "id": "v1_c2_2.2",
                "titleEn": "2.2 Non-Profit Nature of Income & Assets",
                "titleHi": "2.2 गैर-लाभकारी स्वरूप",
                "textEn": "All income and properties of the Society shall be utilized solely for promoting its constitutional objectives. No part thereof shall be distributed as profit, dividend, or personal gain to any member.",
                "textHi": "संस्था की समस्त आय, संपत्ति एवं संसाधनों का उपयोग केवल उसके संवैधानिक उद्देश्यों की पूर्ति हेतु किया जाएगा। संस्था की आय अथवा संपत्ति का कोई भाग किसी सदस्य, संस्थापक अथवा पदाधिकारी को व्यक्तिगत लाभ के रूप में वितरित नहीं किया जाएगा।"
              },
              {
                "id": "v1_c2_2.3",
                "titleEn": "2.3 Political Neutrality",
                "titleHi": "2.3 राजनीतिक निष्पक्षता",
                "textEn": "The Society shall maintain absolute political neutrality. It shall not function as an arm of any political party or use its platform for partisan propaganda.",
                "textHi": "संस्था किसी राजनीतिक दल की शाखा, सहयोगी इकाई अथवा चुनावी मंच के रूप में कार्य नहीं करेगी। संस्था सदस्यों के व्यक्तिगत लोकतांत्रिक अधिकारों का सम्मान करेगी, किन्तु संस्था के नाम या संसाधनों का उपयोग राजनीतिक दल के प्रचार के लिए नहीं किया जाएगा।"
              },
              {
                "id": "v1_c2_2.4",
                "titleEn": "2.4 Equality & Inclusive Fraternity",
                "titleHi": "2.4 समानता एवं समावेशन",
                "textEn": "The Society treats every human being with dignity and equality, in line with constitutional values of fraternity, justice, and non-discrimination.",
                "textHi": "संस्था प्रत्येक व्यक्ति के साथ सम्मान, समानता एवं गरिमा का व्यवहार करेगी। संस्था की गतिविधियाँ भारतीय संविधान में निहित समानता, न्याय एवं बंधुत्व की भावना तथा लागू कानूनों के अनुरूप संचालित होंगी।"
              }
            ]
          },
          {
            "chapterNo": 3,
            "titleEn": "Aims & Objectives",
            "titleHi": "संस्था के उद्देश्य",
            "summaryEn": "Detailed layout of the core mission including Educational advancement, Social reforms, Women's development, and Financial independence.",
            "summaryHi": "शैक्षणिक उन्नति, सामाजिक सुधार, महिला विकास और आर्थिक स्वतंत्रता सहित मूल मिशन का विस्तृत विवरण।",
            "clauses": [
              {
                "id": "v1_c3_3.1",
                "titleEn": "3.1 Core General Objectives",
                "titleHi": "3.1 मुख्य उद्देश्य",
                "textEn": "To work for the academic, social, economic, moral, and physical development of the Muslim Rangrez (Neelgar) community and broader society.",
                "textHi": "संस्था का मुख्य उद्देश्य मुस्लिम रंगरेज़ (नीलगर) समाज सहित व्यापक समाज के शैक्षणिक, सामाजिक, आर्थिक, नैतिक एवं मानवीय विकास के लिए कार्य करना है।"
              },
              {
                "id": "v1_c3_3.2",
                "titleEn": "3.2 Educational Advancement Goals",
                "titleHi": "3.2 शैक्षणिक उद्देश्य",
                "textEn": "To promote literacy, establish schools, coaching institutes, libraries, and vocational training centers, and provide educational scholarships.",
                "textHi": "शिक्षा को प्रोत्साहित करना; छात्रवृत्ति एवं शैक्षणिक सहायता उपलब्ध कराना; पुस्तकालय, अध्ययन केन्द्र, कोचिंग केन्द्र एवं अन्य शैक्षणिक गतिविधियों का संचालन करना तथा करियर मार्गदर्शन को बढ़ावा देना।"
              },
              {
                "id": "v1_c3_3.3",
                "titleEn": "3.3 Social Reform & Anti-Dowry Campaign",
                "titleHi": "3.3 सामाजिक सुधार",
                "textEn": "To campaign against substance abuse, promote marital simplicity, eradicate social evils, and foster social harmony.",
                "textHi": "नशामुक्ति अभियान, फिजूलखर्ची उन्मूलन, शिक्षा जागरूकता, सामाजिक सद्भाव, वैवाहिक सादगी, नैतिक मूल्यों के प्रचार तथा जनहितकारी अभियानों का संचालन करना।"
              },
              {
                "id": "v1_c3_3.4",
                "titleEn": "3.4 Women, Youth & Child Development",
                "titleHi": "3.4 महिला एवं बाल विकास",
                "textEn": "To empower women through training centers, skill development schemes, and protect child safety and rights.",
                "textHi": "महिलाओं एवं बच्चों के सम्मान, शिक्षा, स्वास्थ्य, सुरक्षा, आत्मनिर्भरता एवं सामाजिक सशक्तीकरण हेतु कार्यक्रम संचालित करना।"
              }
            ]
          },
          {
            "chapterNo": 4,
            "titleEn": "Core Principles",
            "titleHi": "संस्था के मूल सिद्धांत",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 5,
            "titleEn": "Motto and Core Values (संस्था का आदर्श वाक्य एवं मूल्य)",
            "titleHi": "संस्था का आदर्श वाक्य एवं मूल्य",
            "summaryEn": "Defines the official motto and the detailed conceptual meaning of its core elements: Unity, Education, and Reformative Thinking.",
            "summaryHi": "संस्था के आधिकारिक आदर्श वाक्य और इसके प्रमुख तत्वों: एकता (इत्तिहाद), तालीम और इस्लाही सोच के वैचारिक अर्थ को परिभाषित करता है।",
            "clauses": [
              {
                "id": "v1_c5_5.1",
                "titleEn": "5.1 Official Motto",
                "titleHi": "5.1 आधिकारिक आदर्श वाक्य",
                "textEn": "The official Motto of the Society shall be: 'Freedom from evils and baseless rituals, moving towards education and knowledge, progress in both faith and the world is our objective.' (बुराइयों और बेबुनियाद रस्मों से नज़ात, तालीम और इल्म की ओर रुख़, दीन व दुनिया दोनों में तरक्की हमारा मक़सद।)",
                "textHi": "संस्था का आधिकारिक आदर्श वाक्य होगा— 'बुराइयों और बेबुनियाद रस्मों से नज़ात, तालीम और इल्म की ओर रुख़, दीन व दुनिया दोनों में तरक्की हमारा मक़सद।'"
              },
              {
                "id": "v1_c5_5.2",
                "titleEn": "5.2 Core Values",
                "titleHi": "5.2 प्रमुख मूल्य",
                "textEn": "The core values of the Society are: Unity (Ittehad) • Education (Taalim) • Reformative Thinking (Islahi Soch).",
                "textHi": "संस्था के प्रमुख मूल्य हैं: एकता (इत्तिहाद) • तालीम • इस्लाही सोच।"
              }
            ]
          },
          {
            "chapterNo": 6,
            "titleEn": "Mission Statement",
            "titleHi": "संस्था का ध्येय वाक्य",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Core Principles & Philosophy (मूल सिद्धांत)",
        "titleHi": "भाग 2: मूल सिद्धांत एवं दर्शन",
        "chapters": [
          {
            "chapterNo": 4,
            "titleEn": "Society's Core Principles (संस्था के मूल सिद्धांत)",
            "titleHi": "संस्था के मूल सिद्धांत",
            "summaryEn": "Explains Sincerity (Ikhlas), Integrity (Amanatdari), Justice (Insaf), Mutual Consultation (Mashwara), and Accountability.",
            "summaryHi": "इख़्लास (ईमानदारी), अमानतदारी (सत्यनिष्ठा), इंसाफ़ (न्याय), मशवरा (परामर्श) और जवाबदेही की व्याख्या करता है।",
            "clauses": [
              {
                "id": "v1_c4_4.2",
                "titleEn": "4.2 Sincerity (Ikhlas)",
                "titleHi": "4.2 इख़्लास (Sincerity)",
                "textEn": "Every member and officer-bearer must perform their service with absolute sincerity, prioritizing public welfare and community progress over personal fame or greed.",
                "textHi": "संस्था का प्रत्येक सदस्य एवं पदाधिकारी समाज सेवा, शिक्षा एवं जनकल्याण के कार्यों को निष्ठा, ईमानदारी तथा सद्भावना के साथ करेगा। व्यक्तिगत प्रसिद्धि या निजी लाभ की अपेक्षा संस्था एवं समाज के हित को प्राथमिकता दी जाएगी।"
              },
              {
                "id": "v1_c4_4.3",
                "titleEn": "4.3 Integrity & Public Trust (Amanatdari)",
                "titleHi": "4.3 अमानतदारी (Integrity)",
                "textEn": "Office-bearers shall act as trustees of the community's assets, funds, and records, ensuring zero leakage and transparent disclosures.",
                "textHi": "संस्था के प्रत्येक पदाधिकारी एवं सदस्य पर संस्था की प्रतिष्ठा, संपत्ति, अभिलेख, वित्तीय संसाधनों एवं सार्वजनिक विश्वास की रक्षा का दायित्व होगा। सभी निर्णय सत्यनिष्ठा, निष्पक्षता एवं उत्तरदायित्व के साथ लिए जाएँगे।"
              },
              {
                "id": "v1_c4_4.4",
                "titleEn": "4.4 Justice & Equity (Insaf)",
                "titleHi": "4.4 इंसाफ़ (Justice)",
                "textEn": "The Society shall treat every member equally, ensuring natural justice in disputes, inquiries, and welfare allocations.",
                "textHi": "संस्था के प्रत्येक सदस्य के साथ निष्पक्ष, सम्मानजनक एवं न्यायसंगत व्यवहार किया जाएगा। किसी भी विवाद, अनुशासनात्मक कार्रवाई अथवा प्रशासनिक निर्णय में प्राकृतिक न्याय (Natural Justice) के सिद्धांतों का पालन किया जाएगा।"
              },
              {
                "id": "v1_c4_4.5",
                "titleEn": "4.5 Mutual Consultation (Mashwara)",
                "titleHi": "4.5 मशवरा (Consultation)",
                "textEn": "All major strategic, financial, and organizational decisions must be taken via democratic and consultative consensus.",
                "textHi": "संस्था लोकतांत्रिक एवं परामर्श आधारित निर्णय प्रणाली का पालन करेगी। महत्वपूर्ण विषयों पर संबंधित समिति, कार्यकारिणी अथवा महासभा के साथ विचार-विमर्श कर निर्णय लिया जाएगा।"
              }
            ]
          },
          {
            "chapterNo": 5,
            "titleEn": "Motto and Core Values (संस्था का आदर्श वाक्य एवं मूल्य)",
            "titleHi": "संस्था का आदर्श वाक्य एवं मूल्य",
            "summaryEn": "Defines the official motto and the detailed conceptual meaning of its core elements: Unity, Education, and Reformative Thinking.",
            "summaryHi": "संस्था के आधिकारिक आदर्श वाक्य और इसके प्रमुख तत्वों: एकता (इत्तिहाद), तालीम और इस्लाही सोच के वैचारिक अर्थ को परिभाषित करता है।",
            "clauses": [
              {
                "id": "v1_c5_5.1",
                "titleEn": "5.1 Official Motto",
                "titleHi": "5.1 आधिकारिक आदर्श वाक्य",
                "textEn": "The official Motto of the Society shall be: 'Freedom from evils and baseless rituals, moving towards education and knowledge, progress in both faith and the world is our objective.' (बुराइयों और बेबुनियाद रस्मों से नज़ात, तालीम और इल्म की ओर रुख़, दीन व दुनिया दोनों में तरक्की हमारा मक़सद।)",
                "textHi": "संस्था का आधिकारिक आदर्श वाक्य होगा— 'बुराइयों और बेबुनियाद रस्मों से नज़ात, तालीम और इल्म की ओर रुख़, दीन व दुनिया दोनों में तरक्की हमारा मक़सद।'"
              },
              {
                "id": "v1_c5_5.2",
                "titleEn": "5.2 Core Values",
                "titleHi": "5.2 प्रमुख मूल्य",
                "textEn": "The core values of the Society are: Unity (Ittehad) • Education (Taalim) • Reformative Thinking (Islahi Soch).",
                "textHi": "संस्था के प्रमुख मूल्य हैं: एकता (इत्तिहाद) • तालीम • इस्लाही सोच।"
              }
            ]
          },
          {
            "chapterNo": 7,
            "titleEn": "Founders",
            "titleHi": "संस्थापक",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 8,
            "titleEn": "Chief Patrons",
            "titleHi": "मुख्य संरक्षक",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 9,
            "titleEn": "Founders Council",
            "titleHi": "संस्थापक परिषद",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 10,
            "titleEn": "Advisory Board",
            "titleHi": "सलाहकार बोर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "General Body & Membership Governance",
        "titleHi": "भाग 3: महासभा एवं सदस्यता शासन",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "The General Body",
            "titleHi": "महासभा",
            "summaryEn": "Constitutes the supreme democratic platform of the society. Regulates voting rights, approvals of audits, and national executive elections.",
            "summaryHi": "संस्था के सर्वोच्च लोकतांत्रिक मंच का गठन करता है। मतदान अधिकारों, ऑडिट की स्वीकृति और राष्ट्रीय कार्यकारिणी चुनावों को नियंत्रित करता है।",
            "clauses": [
              {
                "id": "v1_c11_11.1",
                "titleEn": "11.1 Supreme Democratic Authority",
                "titleHi": "11.1 सर्वोच्च निकाय",
                "textEn": "The General Body (Mahasabha) shall be the supreme governing, policy-making, and final approving authority of the Society.",
                "textHi": "महासभा संस्था की सर्वोच्च लोकतांत्रिक एवं नीति-निर्धारण करने वाली निकाय होगी।"
              },
              {
                "id": "v1_c11_11.2",
                "titleEn": "11.2 General Body Composition",
                "titleHi": "11.2 संरचना",
                "textEn": "The General Body shall comprise all registered, active, and valid members of the Society who have cleared their membership dues.",
                "textHi": "महासभा में संविधान के अनुसार स्वीकृत सभी सक्रिय एवं वैध सदस्य सम्मिलित होंगे।"
              },
              {
                "id": "v1_c11_11.3",
                "titleEn": "11.3 Core Powers & Jurisdiction",
                "titleHi": "11.3 अधिकार व कार्य",
                "textEn": "The General Body is empowered to: 1. Elect the National Executive Council. 2. Approve audited balance sheets. 3. Pass constitutional amendments with a 2/3rd majority.",
                "textHi": "महासभा को निम्नलिखित अधिकार प्राप्त होंगे: 1. संविधान को स्वीकृत एवं संशोधित करना। 2. राष्ट्रीय कार्यकारिणी का निर्वाचन करना। 3. वार्षिक प्रतिवेदन एवं लेखा-प्रतिवेदन पर विचार करना व बजट का अनुमोदन करना।"
              }
            ]
          },
          {
            "chapterNo": 12,
            "titleEn": "Membership",
            "titleHi": "सदस्यता",
            "summaryEn": "Defines who can become a member, membership tiers (Founder, Life, Annual, Student, Honorary), and approval workflows.",
            "summaryHi": "सदस्य बनने की पात्रता, सदस्यता के स्तर (संस्थापक, आजीवन, वार्षिक, छात्र, मानद) और स्वीकृति प्रक्रियाओं को परिभाषित करता है।",
            "clauses": [
              {
                "id": "v1_c12_12.1",
                "titleEn": "12.1 Eligibility for Joining",
                "titleHi": "12.1 सदस्यता का उद्देश्य",
                "textEn": "Membership is open to any individual from the community who accepts the constitutional by-laws, maintains moral character, and clears the registration process.",
                "textHi": "संस्था की सदस्यता उन व्यक्तियों के लिए उपलब्ध होगी जो संस्था के उद्देश्यों, संविधान एवं आचार संहिता का पालन करने के इच्छुक हों।"
              },
              {
                "id": "v1_c12_12.2",
                "titleEn": "12.2 Standard Membership Classes",
                "titleHi": "12.2 सदस्यता की श्रेणियाँ",
                "textEn": "The Society offers membership under the following categories:\n1. Founder Members\n2. Life Members\n3. Annual Members\n4. Women & Youth Wing Members\n5. Student & Volunteer Members\n6. Honorary Members (for distinguished personalities)",
                "textHi": "संस्था निम्नलिखित प्रकार की सदस्यता प्रदान कर सकेगी:\n1. संस्थापक सदस्य\n2. आजीवन सदस्य\n3. वार्षिक सदस्य\n4. महिला सदस्य\n5. युवा सदस्य\n6. छात्र / सहयोगी सदस्य\n7. मानद सदस्य (Honorary Member)"
              }
            ]
          },
          {
            "chapterNo": 13,
            "titleEn": "Rights of Members",
            "titleHi": "सदस्य के अधिकार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 14,
            "titleEn": "Duties of Members",
            "titleHi": "सदस्य के कर्तव्य",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 15,
            "titleEn": "Termination, Suspension & Resignation",
            "titleHi": "सदस्यता समाप्ति, निलंबन एवं त्यागपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 16,
            "titleEn": "National Executive Committee",
            "titleHi": "राष्ट्रीय कार्यकारिणी",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 17,
            "titleEn": "National Office Bearers",
            "titleHi": "राष्ट्रीय पदाधिकारी",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 18,
            "titleEn": "National President",
            "titleHi": "राष्ट्रीय अध्यक्ष",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 19,
            "titleEn": "General Secretary",
            "titleHi": "महासचिव",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 20,
            "titleEn": "Treasurer",
            "titleHi": "कोषाध्यक्ष",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "State, District, Tehsil & Local Unit Structural Organization",
        "titleHi": "राज्य, जिला, तहसील एवं स्थानीय संगठनात्मक संरचना",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "State Unit",
            "titleHi": "राज्य इकाई",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 22,
            "titleEn": "District Unit",
            "titleHi": "जिला इकाई",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 23,
            "titleEn": "Tehsil & Block Unit",
            "titleHi": "तहसील एवं ब्लॉक इकाई",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 24,
            "titleEn": "City & Village Unit",
            "titleHi": "नगर एवं ग्राम इकाई",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 25,
            "titleEn": "Local Office Bearers",
            "titleHi": "स्थानीय पदाधिकारी",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 26,
            "titleEn": "Tenure",
            "titleHi": "कार्यकाल",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 27,
            "titleEn": "Vacancies & Interim Appointments",
            "titleHi": "रिक्तियाँ एवं अंतरिम नियुक्तियाँ",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 28,
            "titleEn": "Committees & Cells",
            "titleHi": "समितियाँ एवं प्रकोष्ठ",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 29,
            "titleEn": "Coordination & Reporting",
            "titleHi": "समन्वय एवं रिपोर्टिंग",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 30,
            "titleEn": "Organizational Discipline & Accountability",
            "titleHi": "संगठनात्मक अनुशासन एवं उत्तरदायित्व",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Election Governance",
        "titleHi": "निर्वाचन व्यवस्था",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Election Commission",
            "titleHi": "निर्वाचन आयोग",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 32,
            "titleEn": "Core Principles of Election",
            "titleHi": "चुनाव के मूल सिद्धांत",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 33,
            "titleEn": "Election Schedule & Notification",
            "titleHi": "चुनाव कार्यक्रम एवं अधिसूचना",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 34,
            "titleEn": "Nomination Process",
            "titleHi": "नामांकन प्रक्रिया",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 35,
            "titleEn": "Candidate Eligibility & Disqualification",
            "titleHi": "प्रत्याशी की पात्रता एवं अयोग्यता",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 36,
            "titleEn": "Withdrawal & Campaign",
            "titleHi": "नाम वापसी एवं चुनाव प्रचार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 37,
            "titleEn": "Voting Procedure",
            "titleHi": "मतदान प्रक्रिया",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 38,
            "titleEn": "Counting & Declaration of Results",
            "titleHi": "मतगणना एवं परिणाम घोषणा",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 39,
            "titleEn": "Repolling & Re-election",
            "titleHi": "पुनर्मतदान एवं पुनर्निर्वाचन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 40,
            "titleEn": "Election Petition & Dispute Resolution",
            "titleHi": "चुनाव याचिका एवं विवाद निवारण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Meetings & Administrative Procedures",
        "titleHi": "बैठकें एवं प्रशासनिक कार्यप्रणाली",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Types of Meetings",
            "titleHi": "बैठकों के प्रकार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 42,
            "titleEn": "Notice & Agenda",
            "titleHi": "बैठक की सूचना एवं कार्यसूची",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 43,
            "titleEn": "Quorum & Meeting Conduct",
            "titleHi": "गणपूर्ति एवं बैठक संचालन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 44,
            "titleEn": "Decision-Making & Resolutions",
            "titleHi": "निर्णय प्रक्रिया एवं प्रस्ताव",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 45,
            "titleEn": "Minutes of Meetings",
            "titleHi": "कार्यवृत्त",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 46,
            "titleEn": "Digital & Hybrid Meetings",
            "titleHi": "डिजिटल एवं हाइब्रिड बैठकें",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 47,
            "titleEn": "Records Management",
            "titleHi": "अभिलेख प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 48,
            "titleEn": "Official Seal & Authentication",
            "titleHi": "आधिकारिक मुहर एवं प्रमाणीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 49,
            "titleEn": "Official Correspondence & Communication",
            "titleHi": "आधिकारिक पत्राचार एवं संचार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 50,
            "titleEn": "Information, Confidentiality & Record Inspection",
            "titleHi": "सूचना, गोपनीयता एवं अभिलेख निरीक्षण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Financial Management & Funds",
        "titleHi": "वित्तीय प्रबंधन एवं निधि",
        "chapters": [
          {
            "chapterNo": 51,
            "titleEn": "Financial Principles",
            "titleHi": "वित्तीय सिद्धांत",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 52,
            "titleEn": "Funds of the Society",
            "titleHi": "संस्था की निधियाँ",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 53,
            "titleEn": "Bank Accounts & Financial Operations",
            "titleHi": "बैंक खाते एवं वित्तीय संचालन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 54,
            "titleEn": "Annual Budget & Financial Planning",
            "titleHi": "वार्षिक बजट एवं वित्तीय योजना",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 55,
            "titleEn": "Accounting System & Financial Records",
            "titleHi": "लेखांकन प्रणाली एवं वित्तीय अभिलेख",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 56,
            "titleEn": "Expenditure Approval & Payment Process",
            "titleHi": "व्यय स्वीकृति, भुगतान प्रक्रिया एवं वित्तीय अधिकार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 57,
            "titleEn": "Internal & Statutory Audit",
            "titleHi": "आंतरिक एवं वैधानिक लेखापरीक्षण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 58,
            "titleEn": "Financial Transparency & Compliance",
            "titleHi": "वित्तीय पारदर्शिता एवं अनुपालन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 59,
            "titleEn": "Asset & Investment Management",
            "titleHi": "संपत्ति एवं निवेश प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 60,
            "titleEn": "Financial Misconduct & Risk Management",
            "titleHi": "वित्तीय अनियमितता, उत्तरदायित्व एवं जोखिम प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Code of Conduct & Ethical Governance",
        "titleHi": "आचार संहिता एवं नैतिक प्रशासन",
        "chapters": [
          {
            "chapterNo": 61,
            "titleEn": "Code of Conduct",
            "titleHi": "आचार संहिता",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 62,
            "titleEn": "Ethical Standards for Office Bearers",
            "titleHi": "नैतिक मानक एवं पदाधिकारियों का आचरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 63,
            "titleEn": "Equal Opportunity & Safe Environment",
            "titleHi": "समान अवसर, सम्मान एवं सुरक्षित कार्य वातावरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 64,
            "titleEn": "Disciplinary Proceedings",
            "titleHi": "अनुशासनात्मक कार्यवाही",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 65,
            "titleEn": "Grievance Redressal",
            "titleHi": "शिकायत निवारण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 66,
            "titleEn": "Appeals & Review",
            "titleHi": "अपील एवं पुनर्विचार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 67,
            "titleEn": "Conflict of Interest",
            "titleHi": "हितों का टकराव",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 68,
            "titleEn": "Anti-Corruption & Anti-Bribery Policy",
            "titleHi": "भ्रष्टाचार-निरोध एवं रिश्वत-विरोधी नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 69,
            "titleEn": "Whistleblower Protection",
            "titleHi": "व्हिसलब्लोअर संरक्षण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 70,
            "titleEn": "Non-Retaliation & Ethics Compliance",
            "titleHi": "प्रतिशोध-निषेध एवं नैतिक अनुपालन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Constitutional Amendments, Bye-Laws & Legal Provisions",
        "titleHi": "संविधान संशोधन, उपविधियाँ एवं विधिक प्रावधान",
        "chapters": [
          {
            "chapterNo": 71,
            "titleEn": "Amendment of the Constitution",
            "titleHi": "संविधान संशोधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 72,
            "titleEn": "Bye-Laws, Rules & Policies",
            "titleHi": "उपविधियाँ, नियम एवं नीतियाँ",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 73,
            "titleEn": "Legal Compliance & Interpretation",
            "titleHi": "विधिक अनुपालन एवं व्याख्या",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 74,
            "titleEn": "Dissolution of the Society",
            "titleHi": "संस्था का विघटन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 75,
            "titleEn": "Merger & Reorganization",
            "titleHi": "विलय, पुनर्गठन एवं संरचनात्मक परिवर्तन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 76,
            "titleEn": "Disposal of Assets & Succession",
            "titleHi": "संपत्तियों का निस्तारण एवं उत्तराधिकार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 77,
            "titleEn": "Transitional Provisions",
            "titleHi": "संक्रमणकालीन प्रावधान",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 78,
            "titleEn": "Miscellaneous Provisions",
            "titleHi": "विविध प्रावधान",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 79,
            "titleEn": "Saving Clauses & Legal Protection",
            "titleHi": "बचाव प्रावधान एवं विधिक संरक्षण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 80,
            "titleEn": "Schedules, Annexures & Final Declaration",
            "titleHi": "संविधान का अंग, अनुसूचियाँ एवं अंतिम घोषणा",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 2,
    "titleEn": "Volume 2: SOPs, Rules & Policies",
    "titleHi": "खंड 2: नियमावली एवं मानक संचालन प्रक्रियाएँ (SOPs)",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Membership SOPs & Procedures (सदस्यता नियमावली)",
        "titleHi": "भाग 1: सदस्यता नियमावली",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Membership Rules",
            "titleHi": "सदस्यता नियम",
            "summaryEn": "Sets out the exact operational parameters for identifying, validating, and onboarding community members, establishing rights and obligations.",
            "summaryHi": "समुदाय के सदस्यों की पहचान करने, सत्यापित करने और उन्हें शामिल करने के लिए सटीक परिचालन मापदंड निर्धारित करता है।",
            "clauses": [
              {
                "id": "v2_c1_1.1",
                "titleEn": "1.1 Operational Objective",
                "titleHi": "1.1 नियमावली का उद्देश्य",
                "textEn": "These membership SOPs regulate the step-by-step registration, dues clearing, renewal, suspension, and restoration of members in harmony with Volume 1.",
                "textHi": "यह नियमावली संस्था में सदस्यता के प्रवेश, शुल्क भुगतान, नवीनीकरण, निलंबन और बहाली की चरणबद्ध प्रक्रिया को व्यवस्थित करती है।"
              },
              {
                "id": "v2_c1_1.2",
                "titleEn": "1.2 Strict Eligibility Criteria",
                "titleHi": "1.2 पात्रता की शर्तें",
                "textEn": "Applicants must formally accept the aims of the Society, promise in writing to abide by the anti-dowry code, submit verified identity proofs, and clear the registration fee.",
                "textHi": "आवेदक को संस्था के उद्देश्यों को स्वीकार करना होगा, संविधान एवं नीतियों के पालन की लिखित प्रतिज्ञा करनी होगी तथा पहचान व पते का प्रमाण प्रस्तुत करना होगा।"
              }
            ]
          },
          {
            "chapterNo": 2,
            "titleEn": "Membership Registration Procedure",
            "titleHi": "सदस्यता पंजीकरण प्रक्रिया",
            "summaryEn": "Outlines the verification process, document collection, allocation of Unique Membership ID, and digital register entries.",
            "summaryHi": "सत्यापन प्रक्रिया, दस्तावेज़ संग्रह, विशिष्ट सदस्यता आईडी के आवंटन और डिजिटल रजिस्टर प्रविष्टि की रूपरेखा तैयार करता है।",
            "clauses": [
              {
                "id": "v2_c2_2.1",
                "titleEn": "2.1 Application Submission",
                "titleHi": "2.1 आवेदन प्रक्रिया",
                "textEn": "Every applicant must submit the standard bilingual membership form, along with a recent photograph, government-issued ID proof, and contact details.",
                "textHi": "प्रत्येक आवेदक को निर्धारित आवेदन पत्र के साथ फोटो, आधार/सरकारी पहचान पत्र तथा निर्धारित सदस्यता शुल्क रसीद संलग्न करनी होगी।"
              },
              {
                "id": "v2_c2_2.2",
                "titleEn": "2.2 Multi-Tier Verification Panel",
                "titleHi": "2.2 सत्यापन प्रक्रिया",
                "textEn": "The district or local membership committee is fully authorized to verify the credentials and background of the applicant before forwarding for executive approval.",
                "textHi": "स्थानीय अथवा जिला सदस्यता समिति आवेदक द्वारा प्रदान किए गए विवरणों और पृष्ठभूमि की जांच कर अपनी संस्तुति कार्यकारिणी को भेजेगी।"
              },
              {
                "id": "v2_c2_2.4",
                "titleEn": "2.4 Allocation of Unique Membership ID",
                "titleHi": "2.4 विशिष्ट सदस्यता क्रमांक",
                "textEn": "Upon successful onboarding, every member is issued a digital membership card containing a Unique Membership ID (UMID) and entered into the master digital register.",
                "textHi": "सफलतापूर्वक पंजीकरण होने पर सदस्य को एक अनूठा सदस्यता पहचान पत्र (ID Card) तथा विशिष्ट सदस्यता क्रमांक आवंटित किया जाएगा।"
              }
            ]
          },
          {
            "chapterNo": 3,
            "titleEn": "Membership Renewal",
            "titleHi": "सदस्यता नवीनीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 4,
            "titleEn": "Membership Suspension & Cancellation",
            "titleHi": "सदस्यता निलंबन एवं रद्दीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 5,
            "titleEn": "Membership Register & Records",
            "titleHi": "सदस्यता रजिस्टर एवं रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Election Rules",
        "titleHi": "चुनाव नियम",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Election Rules",
            "titleHi": "चुनाव नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 7,
            "titleEn": "Electoral Roll",
            "titleHi": "मतदाता सूची",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 8,
            "titleEn": "Nomination Procedure",
            "titleHi": "नामांकन प्रक्रिया",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 9,
            "titleEn": "Voting Procedure",
            "titleHi": "मतदान प्रक्रिया",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 10,
            "titleEn": "Counting & Declaration of Results",
            "titleHi": "मतगणना एवं परिणाम की घोषणा",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Financial Rules",
        "titleHi": "वित्तीय नियम",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Financial Management Rules",
            "titleHi": "वित्तीय प्रबंधन नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 12,
            "titleEn": "Budget Rules",
            "titleHi": "बजट नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 13,
            "titleEn": "Accounting Rules",
            "titleHi": "लेखांकन नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 14,
            "titleEn": "Banking Rules",
            "titleHi": "बैंकिंग नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 15,
            "titleEn": "Audit Rules",
            "titleHi": "लेखापरीक्षा नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Human Resource & Service Rules",
        "titleHi": "मानव संसाधन एवं सेवा नियम",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Appointment Rules",
            "titleHi": "नियुक्ति नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 17,
            "titleEn": "Employee Service Rules",
            "titleHi": "कर्मचारी सेवा नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 18,
            "titleEn": "Volunteer Management",
            "titleHi": "स्वयंसेवक प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 19,
            "titleEn": "Performance Evaluation",
            "titleHi": "प्रदर्शन मूल्यांकन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 20,
            "titleEn": "Leave & Discipline Rules",
            "titleHi": "अवकाश एवं अनुशासन नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Meetings & Office Administration Rules",
        "titleHi": "बैठकें एवं कार्यालय प्रशासन नियम",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Office Administration",
            "titleHi": "कार्यालय प्रशासन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 22,
            "titleEn": "Meeting SOP",
            "titleHi": "बैठक SOP",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 23,
            "titleEn": "Record Management",
            "titleHi": "रिकॉर्ड प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 24,
            "titleEn": "Official Communication",
            "titleHi": "आधिकारिक संचार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 25,
            "titleEn": "Digital Governance",
            "titleHi": "डिजिटल शासन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Committees SOP",
        "titleHi": "समितियों के लिए SOP",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Executive Committee SOP",
            "titleHi": "कार्यकारिणी समिति SOP",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 27,
            "titleEn": "Finance Committee SOP",
            "titleHi": "वित्त समिति SOP",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 28,
            "titleEn": "Education Committee SOP",
            "titleHi": "शिक्षा समिति SOP",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 29,
            "titleEn": "Welfare Committee SOP",
            "titleHi": "कल्याण समिति SOP",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 30,
            "titleEn": "Women & Youth Committee SOP",
            "titleHi": "महिला एवं युवा समिति SOP",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Project & Programme Management",
        "titleHi": "परियोजना एवं कार्यक्रम प्रबंधन",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Project Planning",
            "titleHi": "परियोजना योजना",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 32,
            "titleEn": "Project Approval",
            "titleHi": "परियोजना अनुमोदन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 33,
            "titleEn": "Project Monitoring",
            "titleHi": "परियोजना निगरानी",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 34,
            "titleEn": "Project Evaluation",
            "titleHi": "परियोजना मूल्यांकन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 35,
            "titleEn": "Project Closure",
            "titleHi": "परियोजना समापन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Procurement & Asset Rules",
        "titleHi": "खरीद एवं संपत्ति नियम",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Procurement Rules",
            "titleHi": "खरीद नियम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 37,
            "titleEn": "Purchase Procedure",
            "titleHi": "क्रय प्रक्रिया",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 38,
            "titleEn": "Inventory Management",
            "titleHi": "इन्वेंटरी प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 39,
            "titleEn": "Asset Verification",
            "titleHi": "संपत्ति सत्यापन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 40,
            "titleEn": "Disposal of Assets",
            "titleHi": "संपत्तियों का निपटान",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Information Technology Policy",
        "titleHi": "सूचना प्रौद्योगिकी नीति",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Website Management Policy",
            "titleHi": "वेबसाइट प्रबंधन नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 42,
            "titleEn": "Data Privacy Policy",
            "titleHi": "डेटा गोपनीयता नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 43,
            "titleEn": "Cyber Security Policy",
            "titleHi": "साइबर सुरक्षा नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 44,
            "titleEn": "Social Media Policy",
            "titleHi": "सोशल मीडिया नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 45,
            "titleEn": "Digital Document Policy",
            "titleHi": "डिजिटल दस्तावेज़ नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Community Welfare & Scholarship SOPs (सामुदायिक कल्याण)",
        "titleHi": "भाग 10: सामुदायिक कल्याण नीतियां",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Education Assistance Policy",
            "titleHi": "शिक्षा सहायता नीति",
            "summaryEn": "Standard operating procedures for managing educational grants, merit scholarships, coaching support, and digital learning assets.",
            "summaryHi": "शैक्षणिक अनुदान, योग्यता छात्रवृत्ति, कोचिंग सहायता और डिजिटल शिक्षण संपत्तियों के प्रबंधन के लिए मानक संचालन प्रक्रियाएं।",
            "clauses": [
              {
                "id": "v2_c46_46.1",
                "titleEn": "46.1 Objective of the Scholarship Scheme",
                "titleHi": "46.1 छात्रवृत्ति का उद्देश्य",
                "textEn": "To ensure that no community student drops out due to lack of financial funds. Grants will prioritize orphans, single-parent children, and lower-income groups.",
                "textHi": "संस्था का लक्ष्य समाज के प्रत्येक जरूरतमंद छात्र को उच्च शिक्षा, तकनीकी शिक्षा और स्कूली शिक्षा के लिए छात्रवृत्ति प्रदान कर शून्य-ड्रॉपआउट दर सुनिश्चित करना है।"
              },
              {
                "id": "v2_c46_46.4",
                "titleEn": "46.4 Standard Selection Criteria",
                "titleHi": "46.4 चयन प्रक्रिया",
                "textEn": "Grants are allocated transparently based on academic scorecards, certified family income statements, and verified social backgrounds.",
                "textHi": "लाभार्थियों का चयन पूर्णतः पारदर्शी तरीके से उनकी शैक्षणिक योग्यता, पारिवारिक आय स्तर तथा वास्तविक आवश्यकता के आधार पर किया जाएगा।"
              }
            ]
          },
          {
            "chapterNo": 47,
            "titleEn": "Scholarship Policy",
            "titleHi": "छात्रवृत्ति नीति",
            "summaryEn": "Sets rules for immediate medical financial aid, critical surgeries, natural disaster relief, and volunteer mobilization.",
            "summaryHi": "तत्काल चिकित्सा वित्तीय सहायता, गंभीर सर्जरी, प्राकृतिक आपदा राहत और स्वयंसेवी लामबंदी के नियम निर्धारित करता है।",
            "clauses": [
              {
                "id": "v2_c47_47.1",
                "titleEn": "47.1 Medical Emergency Fund Scope",
                "titleHi": "47.1 आपातकालीन चिकित्सा कोष",
                "textEn": "Provides structured financial assistance to individuals suffering from critical illnesses, helping link them with government panels like Ayushman Bharat.",
                "textHi": "गंभीर बीमारियों, सर्जरी या चिकित्सा दुर्घटनाओं की स्थिति में पीड़ित परिवारों को त्वरित आर्थिक सहायता एवं सरकारी स्वास्थ्य योजनाओं का लाभ प्रदान किया जाएगा।"
              },
              {
                "id": "v2_c47_47.2",
                "titleEn": "47.2 Disaster Relief SOP",
                "titleHi": "47.2 आपदा राहत नियमावली",
                "textEn": "Regulates immediate distribution of essential relief materials, food kits, clothing, and shelter assistance to affected regions under verified audit trails.",
                "textHi": "प्राकृतिक आपदा या संकट के समय त्वरित रूप से राहत सामग्री, भोजन, वस्त्र एवं पुनर्वास सहायता का वितरण पारदर्शी वित्तीय ऑडिट के अधीन किया जाएगा।"
              }
            ]
          },
          {
            "chapterNo": 48,
            "titleEn": "Medical Assistance Policy",
            "titleHi": "चिकित्सा सहायता नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 49,
            "titleEn": "Emergency Relief Policy",
            "titleHi": "आपातकालीन राहत नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 50,
            "titleEn": "Marriage Assistance Policy",
            "titleHi": "विवाह सहायता नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-11",
        "titleEn": "Legal & Compliance Policies",
        "titleHi": "विधिक एवं अनुपालन नीतियां",
        "chapters": [
          {
            "chapterNo": 51,
            "titleEn": "RTI & Transparency Guidelines",
            "titleHi": "आरटीआई एवं पारदर्शिता दिशा-निर्देश",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 52,
            "titleEn": "Anti-Corruption Policy",
            "titleHi": "भ्रष्टाचार-निरोध नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 53,
            "titleEn": "Conflict of Interest Policy",
            "titleHi": "हितों का टकराव नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 54,
            "titleEn": "Whistleblower Policy",
            "titleHi": "व्हिसलब्लोअर नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 55,
            "titleEn": "Legal Compliance Policy",
            "titleHi": "विधिक अनुपालन नीति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-12",
        "titleEn": "Forms & Registers",
        "titleHi": "प्रपत्र एवं रजिस्टर",
        "chapters": [
          {
            "chapterNo": 56,
            "titleEn": "Membership Forms",
            "titleHi": "सदस्यता प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 57,
            "titleEn": "Election Forms",
            "titleHi": "चुनाव प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 58,
            "titleEn": "Financial Forms",
            "titleHi": "वित्तीय प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 59,
            "titleEn": "Administrative Registers",
            "titleHi": "प्रशासनिक रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 60,
            "titleEn": "Official Templates",
            "titleHi": "आधिकारिक टेम्प्लेट",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-13",
        "titleEn": "Annexures",
        "titleHi": "अनुसूचियां",
        "chapters": []
      }
    ]
  },
  {
    "volumeNo": 3,
    "titleEn": "Volume 3: Operational Manuals, Implementation Guidelines & Best Practices",
    "titleHi": "खंड 3: संचालन नियमावली एवं कार्यान्वयन दिशानिर्देश",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Office Administration Manual",
        "titleHi": "कार्यालय प्रशासन नियमावली",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Office Setup & Administration",
            "titleHi": "कार्यालय स्थापना एवं प्रशासन",
            "summaryEn": "Procedures for setting up and managing society offices.",
            "summaryHi": "संस्था के कार्यालयों की स्थापना एवं प्रबंधन की प्रक्रिया।",
            "clauses": [
              {
                "id": "v3_c1_1.1",
                "titleEn": "1.1 Purpose",
                "titleHi": "1.1 उद्देश्य",
                "textEn": "This Manual establishes uniform operational procedures for the administration and day-to-day functioning of the Society's National Office, State Offices, District Offices, Local Units and any other authorized offices.",
                "textHi": "यह मैनुअल संस्था के राष्ट्रीय कार्यालय, राज्य कार्यालयों, जिला कार्यालयों, स्थानीय इकाइयों और किसी भी अन्य अधिकृत कार्यालयों के प्रशासन और दिन-प्रतिदिन के कामकाज के लिए समान संचालन प्रक्रियाएं स्थापित करता है।"
              },
              {
                "id": "v3_c1_1.4",
                "titleEn": "1.4 Office Infrastructure",
                "titleHi": "1.4 कार्यालय आधारभूत संरचना",
                "textEn": "Each office should, as far as practicable, maintain an Office Signboard, Reception Area, Administrative Workspace, Meeting Room, Secure Record Room, and essential equipment.",
                "textHi": "प्रत्येक कार्यालय को जहाँ तक संभव हो, एक कार्यालय साइनबोर्ड, स्वागत क्षेत्र, प्रशासनिक कार्यक्षेत्र, बैठक कक्ष, सुरक्षित रिकॉर्ड कक्ष और आवश्यक उपकरण बनाए रखने चाहिए।"
              }
            ]
          },
          {
            "chapterNo": 2,
            "titleEn": "Reception & Visitor Management",
            "titleHi": "स्वागत एवं आगंतुक प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 3,
            "titleEn": "File & Record Handling",
            "titleHi": "फ़ाइल एवं रिकॉर्ड प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 4,
            "titleEn": "Office Discipline",
            "titleHi": "कार्यालय अनुशासन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 5,
            "titleEn": "Daily Office Operations",
            "titleHi": "दैनिक कार्यालय संचालन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Membership & Community Services Manual",
        "titleHi": "सदस्यता एवं सामुदायिक सेवा नियमावली",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Member Registration Procedure",
            "titleHi": "सदस्य पंजीकरण प्रक्रिया",
            "summaryEn": "Guidelines for processing membership applications.",
            "summaryHi": "सदस्यता आवेदनों को संसाधित करने के दिशानिर्देश।",
            "clauses": [
              {
                "id": "v3_c6_6.3",
                "titleEn": "6.3 Registration Procedure",
                "titleHi": "6.3 पंजीकरण प्रक्रिया",
                "textEn": "The Membership Officer shall ordinarily receive the application, verify completeness of documents, assign an application reference number, acknowledge receipt, and forward the application for verification.",
                "textHi": "सदस्यता अधिकारी आमतौर पर आवेदन प्राप्त करेगा, दस्तावेजों की पूर्णता की पुष्टि करेगा, आवेदन संदर्भ संख्या निर्दिष्ट करेगा, पावती देगा और सत्यापन के लिए आवेदन अग्रेषित करेगा।"
              }
            ]
          },
          {
            "chapterNo": 7,
            "titleEn": "Member Verification Process",
            "titleHi": "सदस्य सत्यापन प्रक्रिया",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 8,
            "titleEn": "Membership Renewal",
            "titleHi": "सदस्यता नवीनीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 9,
            "titleEn": "Digital Membership Management",
            "titleHi": "डिजिटल सदस्यता प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 10,
            "titleEn": "Community Help Desk",
            "titleHi": "सामुदायिक सहायता डेस्क",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Event & Programme Management Manual",
        "titleHi": "कार्यक्रम एवं आयोजन प्रबंधन नियमावली",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Event Planning",
            "titleHi": "कार्यक्रम योजना",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 12,
            "titleEn": "Seminar & Conference Management",
            "titleHi": "संगोष्ठी एवं सम्मेलन प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 13,
            "titleEn": "Mahapanchayat Management",
            "titleHi": "महापंचायत प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 14,
            "titleEn": "Volunteer Coordination",
            "titleHi": "स्वयंसेवक समन्वय",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 15,
            "titleEn": "Post-Event Reporting",
            "titleHi": "आयोजन पश्चात रिपोर्टिंग",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Education & Welfare Operations Manual",
        "titleHi": "शिक्षा एवं कल्याण संचालन नियमावली",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Scholarship Processing",
            "titleHi": "छात्रवृत्ति प्रसंस्करण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 17,
            "titleEn": "Educational Guidance",
            "titleHi": "शैक्षणिक मार्गदर्शन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 18,
            "titleEn": "Welfare Assistance",
            "titleHi": "कल्याण सहायता",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 19,
            "titleEn": "Medical Assistance",
            "titleHi": "चिकित्सा सहायता",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 20,
            "titleEn": "Beneficiary Monitoring",
            "titleHi": "लाभार्थी निगरानी",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Finance Operations Manual",
        "titleHi": "वित्त संचालन नियमावली",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Daily Cash Handling",
            "titleHi": "दैनिक नकद प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 22,
            "titleEn": "Donation Collection",
            "titleHi": "दान संग्रह",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 23,
            "titleEn": "Banking Procedures",
            "titleHi": "बैंकिंग प्रक्रियाएं",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 24,
            "titleEn": "Expense Processing",
            "titleHi": "व्यय प्रसंस्करण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 25,
            "titleEn": "Financial Documentation",
            "titleHi": "वित्तीय प्रलेखन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Human Resource & Volunteer Manual",
        "titleHi": "मानव संसाधन एवं स्वयंसेवक नियमावली",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Volunteer Management",
            "titleHi": "स्वयंसेवक प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 27,
            "titleEn": "Employee Orientation",
            "titleHi": "कर्मचारी अभिविन्यास",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 28,
            "titleEn": "Training Programme",
            "titleHi": "प्रशिक्षण कार्यक्रम",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 29,
            "titleEn": "Performance Review",
            "titleHi": "प्रदर्शन समीक्षा",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 30,
            "titleEn": "Code of Conduct Implementation",
            "titleHi": "आचार संहिता कार्यान्वयन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Digital Platform & IT Operations Manual",
        "titleHi": "डिजिटल प्लेटफॉर्म एवं आईटी संचालन नियमावली",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Website Administration",
            "titleHi": "वेबसाइट प्रशासन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 32,
            "titleEn": "Member Portal Operations",
            "titleHi": "सदस्य पोर्टल संचालन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 33,
            "titleEn": "Social Media Management",
            "titleHi": "सोशल मीडिया प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 34,
            "titleEn": "Digital Security Practices",
            "titleHi": "डिजिटल सुरक्षा प्रथाएं",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 35,
            "titleEn": "Data Backup Procedures",
            "titleHi": "डेटा बैकअप प्रक्रियाएं",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Public Relations & Media Manual",
        "titleHi": "जनसंपर्क एवं मीडिया नियमावली",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Public Communication",
            "titleHi": "सार्वजनिक संचार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 37,
            "titleEn": "Press Releases",
            "titleHi": "प्रेस विज्ञप्ति",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 38,
            "titleEn": "Media Interaction",
            "titleHi": "मीडिया इंटरेक्शन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 39,
            "titleEn": "Branding Guidelines",
            "titleHi": "ब्रांडिंग दिशानिर्देश",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 40,
            "titleEn": "Crisis Communication",
            "titleHi": "संकट संचार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Monitoring, Evaluation & Quality Manual",
        "titleHi": "निगरानी, मूल्यांकन एवं गुणवत्ता नियमावली",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Internal Monitoring",
            "titleHi": "आंतरिक निगरानी",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 42,
            "titleEn": "Programme Evaluation",
            "titleHi": "कार्यक्रम मूल्यांकन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 43,
            "titleEn": "KPI Measurement",
            "titleHi": "केपीआई मापन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 44,
            "titleEn": "Feedback Management",
            "titleHi": "फीडबैक प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 45,
            "titleEn": "Continuous Improvement",
            "titleHi": "निरंतर सुधार",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Emergency Response, Disaster Management & Business Continuity Manual",
        "titleHi": "आपातकालीन प्रतिक्रिया, आपदा प्रबंधन एवं व्यापार निरंतरता नियमावली",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Emergency Response",
            "titleHi": "आपातकालीन प्रतिक्रिया",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 47,
            "titleEn": "Disaster Relief Operations",
            "titleHi": "आपदा राहत संचालन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 48,
            "titleEn": "Medical Emergency Coordination",
            "titleHi": "चिकित्सा आपातकालीन समन्वय",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 49,
            "titleEn": "Business Continuity Planning",
            "titleHi": "व्यापार निरंतरता योजना",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 50,
            "titleEn": "Post-Emergency Recovery",
            "titleHi": "आपातकाल के बाद की रिकवरी",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 4,
    "titleEn": "Volume 4: Administrative Forms, Registers, Templates & Specimen Documents",
    "titleHi": "खंड 4: प्रशासनिक प्रपत्र, रजिस्टर एवं टेम्पलेट्स",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Governance Forms & Office Administration",
        "titleHi": "शासन प्रपत्र एवं कार्यालय प्रशासन",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Office Bearer Appointment Forms",
            "titleHi": "पदाधिकारी नियुक्ति प्रपत्र",
            "summaryEn": "Standardized forms for appointment of office bearers.",
            "summaryHi": "पदाधिकारियों की नियुक्ति के लिए मानकीकृत प्रपत्र।",
            "clauses": [
              {
                "id": "v4_c1_1.2",
                "titleEn": "1.2 Standard Forms",
                "titleHi": "1.2 मानक प्रपत्र",
                "textEn": "The following specimen forms shall be maintained: Form-1A: Office Bearer Appointment Order, Form-1B: Acceptance of Appointment, Form-1C: Declaration of Eligibility, Form-1D: Oath of Office, Form-1E: Assumption of Charge Report.",
                "textHi": "निम्नलिखित नमूना प्रपत्र बनाए रखे जाएंगे: फॉर्म-1A: पदाधिकारी नियुक्ति आदेश, फॉर्म-1B: नियुक्ति की स्वीकृति, फॉर्म-1C: पात्रता की घोषणा, फॉर्म-1D: पद की शपथ, फॉर्म-1E: पदभार ग्रहण रिपोर्ट।"
              }
            ]
          },
          {
            "chapterNo": 2,
            "titleEn": "Committee Constitution Forms",
            "titleHi": "समिति गठन प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 3,
            "titleEn": "Joining, Resignation & Handover-Takeover Forms",
            "titleHi": "जॉइनिंग, इस्तीफा और कार्यभार सौंपने के प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 4,
            "titleEn": "Office Registers & Administrative Records",
            "titleHi": "कार्यालय रजिस्टर और प्रशासनिक रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 5,
            "titleEn": "Official Correspondence & Authority Letters",
            "titleHi": "आधिकारिक पत्राचार एवं अधिकार पत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Membership, Community Registration & Beneficiary Forms",
        "titleHi": "सदस्यता एवं लाभार्थी प्रपत्र",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Membership Application & Registration Forms",
            "titleHi": "सदस्यता आवेदन एवं पंजीकरण प्रपत्र",
            "summaryEn": "Templates for membership applications and records.",
            "summaryHi": "सदस्यता आवेदनों और रिकॉर्ड के लिए टेम्पलेट्स।",
            "clauses": [
              {
                "id": "v4_c6_6.2",
                "titleEn": "6.2 Standard Forms",
                "titleHi": "6.2 मानक प्रपत्र",
                "textEn": "The Society shall maintain the following specimen forms: Form-6A: Membership Application Form, Form-6B: Membership Verification Form, Form-6C: Membership Approval Form, Form-6D: Membership Renewal Form, Form-6E: Membership Cancellation Record.",
                "textHi": "संस्था निम्नलिखित नमूना प्रपत्रों का रखरखाव करेगी: फॉर्म-6A: सदस्यता आवेदन पत्र, फॉर्म-6B: सदस्यता सत्यापन प्रपत्र, फॉर्म-6C: सदस्यता अनुमोदन प्रपत्र, फॉर्म-6D: सदस्यता नवीनीकरण प्रपत्र, फॉर्म-6E: सदस्यता रद्दीकरण रिकॉर्ड।"
              }
            ]
          },
          {
            "chapterNo": 7,
            "titleEn": "Family Registration & Community Database Forms",
            "titleHi": "पारिवारिक पंजीकरण और सामुदायिक डेटाबेस प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 8,
            "titleEn": "Volunteer Registration & Community Participation Records",
            "titleHi": "स्वयंसेवक पंजीकरण और सामुदायिक भागीदारी रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 9,
            "titleEn": "Beneficiary Registration & Welfare Assistance Forms",
            "titleHi": "लाभार्थी पंजीकरण और कल्याण सहायता प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 10,
            "titleEn": "Complaints, Suggestions & Community Feedback Forms",
            "titleHi": "शिकायतें, सुझाव और सामुदायिक प्रतिक्रिया प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Meetings, Elections & Governance Documentation",
        "titleHi": "बैठकें, चुनाव एवं शासन दस्तावेज़ीकरण",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Meeting Notices, Agendas & Attendance Forms",
            "titleHi": "बैठक सूचनाएं, एजेंडा एवं उपस्थिति प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 12,
            "titleEn": "Minutes, Resolutions & Decision Registers",
            "titleHi": "कार्यवृत्त, प्रस्ताव एवं निर्णय रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 13,
            "titleEn": "Election, Nomination & Voting Documentation",
            "titleHi": "चुनाव, नामांकन और मतदान दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 14,
            "titleEn": "Governance Registers & Statutory Records",
            "titleHi": "गवर्नेंस रजिस्टर और वैधानिक रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 15,
            "titleEn": "Official Governance Templates & Administrative Checklists",
            "titleHi": "आधिकारिक शासन टेम्प्लेट और प्रशासनिक चेकलिस्ट",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Finance Forms, Accounting Registers & Asset Documentation",
        "titleHi": "वित्त प्रपत्र, लेखांकन रजिस्टर और परिसंपत्ति दस्तावेज़ीकरण",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Receipt, Payment & Voucher Forms",
            "titleHi": "रसीद, भुगतान और वाउचर फॉर्म",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 17,
            "titleEn": "Accounting Books & Financial Registers",
            "titleHi": "लेखांकन पुस्तकें और वित्तीय रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 18,
            "titleEn": "Donations, Grants & Budget Documentation",
            "titleHi": "दान, अनुदान और बजट दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 19,
            "titleEn": "Asset, Inventory & Stock Registers",
            "titleHi": "संपत्ति, इन्वेंटरी और स्टॉक रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 20,
            "titleEn": "Audit Documentation & Financial Control Templates",
            "titleHi": "लेखापरीक्षा दस्तावेज़ीकरण और वित्तीय नियंत्रण टेम्प्लेट",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Human Resource, Employment & Volunteer Documentation",
        "titleHi": "मानव संसाधन, रोजगार और स्वयंसेवक दस्तावेज़ीकरण",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Recruitment, Appointment & Employment Forms",
            "titleHi": "भर्ती, नियुक्ति और रोजगार प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 22,
            "titleEn": "Attendance, Leave & Service Records",
            "titleHi": "उपस्थिति, अवकाश और सेवा रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 23,
            "titleEn": "Performance Evaluation, Training & Development Records",
            "titleHi": "प्रदर्शन मूल्यांकन, प्रशिक्षण और विकास रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 24,
            "titleEn": "Volunteer Administration & Service Documentation",
            "titleHi": "स्वयंसेवक प्रशासन और सेवा दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 25,
            "titleEn": "Separation, Exit Documentation & Human Resource Registers",
            "titleHi": "अलगाव, निकास दस्तावेज़ीकरण और मानव संसाधन रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Education, Scholarship & Welfare Documentation",
        "titleHi": "शिक्षा, छात्रवृत्ति और कल्याण दस्तावेज़ीकरण",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Scholarship & Educational Assistance Forms",
            "titleHi": "छात्रवृत्ति और शैक्षिक सहायता प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 27,
            "titleEn": "Student Records & Career Counselling Documentation",
            "titleHi": "छात्र रिकॉर्ड और करियर परामर्श दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 28,
            "titleEn": "Welfare Assessment & Medical Assistance Documentation",
            "titleHi": "कल्याण मूल्यांकन और चिकित्सा सहायता दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 29,
            "titleEn": "Relief Distribution & Beneficiary Management Records",
            "titleHi": "राहत वितरण एवं लाभार्थी प्रबंधन रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 30,
            "titleEn": "Programme Monitoring & Educational Welfare Registers",
            "titleHi": "कार्यक्रम निगरानी और शैक्षिक कल्याण रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Digital Systems, Information Technology & Data Management Documentation",
        "titleHi": "डिजिटल सिस्टम, सूचना प्रौद्योगिकी और डेटा प्रबंधन दस्तावेज़ीकरण",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Website Administration & Digital Platform Forms",
            "titleHi": "वेबसाइट प्रशासन और डिजिटल प्लेटफॉर्म फॉर्म",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 32,
            "titleEn": "User Account, Identity & Access Management Documentation",
            "titleHi": "उपयोगकर्ता खाता, पहचान और पहुंच प्रबंधन दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 33,
            "titleEn": "Information Management & Data Governance Records",
            "titleHi": "सूचना प्रबंधन और डेटा गवर्नेंस रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 34,
            "titleEn": "Cybersecurity, Backup & IT Incident Documentation",
            "titleHi": "साइबर सुरक्षा, बैकअप और आईटी घटना दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 35,
            "titleEn": "Digital Asset Management & Information Technology Registers",
            "titleHi": "डिजिटल संपत्ति प्रबंधन और सूचना प्रौद्योगिकी रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Media, Public Relations, Publications & Communication Documentation",
        "titleHi": "मीडिया, जनसंपर्क, प्रकाशन और संचार दस्तावेज़ीकरण",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Press Releases & Media Communication Forms",
            "titleHi": "प्रेस विज्ञप्ति और मीडिया संचार प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 37,
            "titleEn": "Social Media & Digital Communication Documentation",
            "titleHi": "सोशल मीडिया और डिजिटल संचार दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 38,
            "titleEn": "Publications, Branding & Intellectual Property Documentation",
            "titleHi": "प्रकाशन, ब्रांडिंग और बौद्धिक संपदा दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 39,
            "titleEn": "Public Relations, Event Media & Photography Documentation",
            "titleHi": "जनसंपर्क, कार्यक्रम मीडिया और फोटोग्राफी दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 40,
            "titleEn": "Public Feedback, Communication Registers & Outreach Records",
            "titleHi": "सार्वजनिक प्रतिक्रिया, संचार रजिस्टर और आउटरीच रिकॉर्ड",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Monitoring, Audit, Compliance & Quality Assurance Documentation",
        "titleHi": "निगरानी, लेखापरीक्षा, अनुपालन एवं गुणवत्ता आश्वासन दस्तावेज़ीकरण",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Monitoring, Inspection & Evaluation Forms",
            "titleHi": "निगरानी, निरीक्षण एवं मूल्यांकन प्रपत्र",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 42,
            "titleEn": "Compliance Verification & Legal Documentation",
            "titleHi": "अनुपालन सत्यापन एवं कानूनी दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 43,
            "titleEn": "Internal Audit & Financial Review Documentation",
            "titleHi": "आंतरिक लेखा परीक्षा एवं वित्तीय समीक्षा दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 44,
            "titleEn": "Risk Management & Corrective Action Documentation",
            "titleHi": "जोखिम प्रबंधन और सुधारात्मक कार्रवाई दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 45,
            "titleEn": "Quality Assurance, Performance Review & Governance Registers",
            "titleHi": "गुणवत्ता आश्वासन, प्रदर्शन समीक्षा और शासन रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Emergency Management, Legal Records & Miscellaneous Documentation",
        "titleHi": "आपातकालीन प्रबंधन, कानूनी रिकॉर्ड एवं विविध दस्तावेज़ीकरण",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Emergency Response & Incident Documentation",
            "titleHi": "आपातकालीन प्रतिक्रिया और घटना दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 47,
            "titleEn": "Legal Records, Litigation & Insurance Documentation",
            "titleHi": "कानूनी रिकॉर्ड, मुकदमेबाजी और बीमा दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 48,
            "titleEn": "Visitor, Security & Property Management Documentation",
            "titleHi": "आगंतुक, सुरक्षा और संपत्ति प्रबंधन दस्तावेज़ीकरण",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 49,
            "titleEn": "Miscellaneous Administrative Forms & Registers",
            "titleHi": "विविध प्रशासनिक प्रपत्र और रजिस्टर",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          },
          {
            "chapterNo": 50,
            "titleEn": "Master Index, Document Control & Records Management",
            "titleHi": "मास्टर इंडेक्स, दस्तावेज़ नियंत्रण और रिकॉर्ड्स प्रबंधन",
            "summaryEn": "",
            "summaryHi": "",
            "clauses": []
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 5,
    "titleEn": "Volume 5: Programmes, Projects, Community Development & Implementation Framework",
    "titleHi": "खंड 5: कार्यक्रम, परियोजनाएं एवं सामुदायिक विकास रूपरेखा",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Programme Planning, Project Identification & Approval",
        "titleHi": "कार्यक्रम योजना एवं अनुमोदन",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Strategic Programme Planning",
            "titleHi": "रणनीतिक कार्यक्रम योजना",
            "summaryEn": "Framework for strategic planning of society programs.",
            "summaryHi": "संस्था के कार्यक्रमों की रणनीतिक योजना की रूपरेखा।",
            "clauses": [
              {
                "id": "v5_c1_1.2",
                "titleEn": "1.2 Strategic Planning Principles",
                "titleHi": "1.2 रणनीतिक योजना सिद्धांत",
                "textEn": "Programme planning shall be guided by alignment with the Constitution, community participation, transparency, accountability, and financial sustainability.",
                "textHi": "कार्यक्रम की योजना संविधान के साथ संरेखण, सामुदायिक भागीदारी, पारदर्शिता, जवाबदेही और वित्तीय स्थिरता द्वारा निर्देशित होगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Education, Scholarship & Skill Development Programmes",
        "titleHi": "शिक्षा एवं कौशल विकास कार्यक्रम",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Educational Support Programmes",
            "titleHi": "शैक्षणिक सहायता कार्यक्रम",
            "summaryEn": "Initiatives to improve access to quality education.",
            "summaryHi": "गुणवत्तापूर्ण शिक्षा तक पहुंच में सुधार की पहल।",
            "clauses": [
              {
                "id": "v5_c6_6.2",
                "titleEn": "6.2 Educational Assistance",
                "titleHi": "6.2 शैक्षणिक सहायता",
                "textEn": "Educational programmes may include school education support, higher education assistance, coaching and tutorial support, and digital learning facilities.",
                "textHi": "शैक्षणिक कार्यक्रमों में स्कूली शिक्षा सहायता, उच्च शिक्षा सहायता, कोचिंग और ट्यूटोरियल सहायता, और डिजिटल शिक्षण सुविधाएं शामिल हो सकती हैं।"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 6,
    "titleEn": "Volume 6: Administrative Reference, Compliance & Organisational Resources Manual",
    "titleHi": "खंड 6: प्रशासनिक संदर्भ एवं अनुपालन नियमावली",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Legal Compliance & Statutory Reference",
        "titleHi": "कानूनी अनुपालन एवं वैधानिक संदर्भ",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Applicable Laws & Regulatory Framework",
            "titleHi": "लागू कानून एवं नियामक ढांचा",
            "summaryEn": "Framework governing the legal obligations of the society.",
            "summaryHi": "संस्था के कानूनी दायित्वों को नियंत्रित करने वाला ढांचा।",
            "clauses": [
              {
                "id": "v6_c1_1.3",
                "titleEn": "1.3 Compliance Principles",
                "titleHi": "1.3 अनुपालन सिद्धांत",
                "textEn": "The Society shall conduct its affairs in accordance with the principles of legality, transparency, accountability, integrity, and good governance.",
                "textHi": "संस्था अपने कार्यों का संचालन वैधता, पारदर्शिता, जवाबदेही, सत्यनिष्ठा और सुशासन के सिद्धांतों के अनुसार करेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Financial & Accounting Reference",
        "titleHi": "वित्तीय एवं लेखा संदर्भ",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Accounting Standards & Financial Administration",
            "titleHi": "लेखा मानक एवं वित्तीय प्रशासन",
            "summaryEn": "Principles and standards for financial administration.",
            "summaryHi": "वित्तीय प्रशासन के सिद्धांत और मानक।",
            "clauses": [
              {
                "id": "v6_c6_6.4",
                "titleEn": "6.4 Books of Account",
                "titleHi": "6.4 लेखा पुस्तकें",
                "textEn": "The Society shall maintain, where applicable: Cash Book, Bank Book, General Ledger, Journal Register, Receipt Register, and Payment Register.",
                "textHi": "संस्था, जहां लागू हो, निम्नलिखित का रखरखाव करेगी: नकद बही, बैंक बही, सामान्य खाता बही, जर्नल रजिस्टर, रसीद रजिस्टर और भुगतान रजिस्टर।"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 7,
    "titleEn": "Volume 7: Standard Operating Procedures (SOPs), Work Instructions & Process Manual",
    "titleHi": "खंड 7: मानक संचालन प्रक्रियाएं (SOPs), कार्य निर्देश एवं प्रक्रिया नियमावली",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Governance & Administration SOPs",
        "titleHi": "शासन एवं प्रशासन एसओपी",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Governing Body Operations SOP",
            "titleHi": "शासी निकाय संचालन एसओपी",
            "summaryEn": "Procedures for the administration and decision-making of the Governing Body.",
            "summaryHi": "शासी निकाय के प्रशासन और निर्णय लेने की प्रक्रियाएं।",
            "clauses": [
              {
                "id": "v7_c1_1.1",
                "titleEn": "1.1 Purpose",
                "titleHi": "1.1 उद्देश्य",
                "textEn": "This SOP establishes the uniform process for the administration, functioning and decision-making of the Governing Body.",
                "textHi": "यह एसओपी शासी निकाय के प्रशासन, कामकाज और निर्णय लेने के लिए समान प्रक्रिया स्थापित करता है।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Membership & Community Services SOPs",
        "titleHi": "सदस्यता एवं सामुदायिक सेवा एसओपी",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Membership Registration SOP",
            "titleHi": "सदस्यता पंजीकरण एसओपी",
            "summaryEn": "Uniform process for registration, admission and maintenance of membership.",
            "summaryHi": "सदस्यता के पंजीकरण, प्रवेश और रखरखाव के लिए समान प्रक्रिया।",
            "clauses": [
              {
                "id": "v7_c6_6.4",
                "titleEn": "6.4 Standard Operating Procedure",
                "titleHi": "6.4 मानक संचालन प्रक्रिया",
                "textEn": "Step 1: Receive Membership Application. Step 2: Register Application in the Membership Register. Step 3: Verify eligibility and supporting documents.",
                "textHi": "चरण 1: सदस्यता आवेदन प्राप्त करें। चरण 2: सदस्यता रजिस्टर में आवेदन पंजीकृत करें। चरण 3: पात्रता और सहायक दस्तावेजों का सत्यापन करें।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Financial Operations SOPs",
        "titleHi": "वित्तीय संचालन एसओपी",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Receipts & Payments SOP",
            "titleHi": "रसीदें एवं भुगतान एसओपी",
            "summaryEn": "Uniform procedures for receiving, recording, authorising and disbursing funds.",
            "summaryHi": "धन प्राप्त करने, रिकॉर्ड करने, अधिकृत करने और वितरित करने के लिए समान प्रक्रियाएं।",
            "clauses": [
              {
                "id": "v7_c11_11.3",
                "titleEn": "11.3 Objectives",
                "titleHi": "11.3 उद्देश्य",
                "textEn": "Financial transactions shall be properly authorised, accurately recorded, fully supported by documentary evidence, and comply with applicable laws.",
                "textHi": "वित्तीय लेनदेन ठीक से अधिकृत, सटीक रूप से रिकॉर्ड किए गए, दस्तावेजी साक्ष्य द्वारा पूरी तरह से समर्थित होंगे, और लागू कानूनों का अनुपालन करेंगे।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Human Resource SOPs",
        "titleHi": "मानव संसाधन एसओपी",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Recruitment & Selection SOP",
            "titleHi": "भर्ती एवं चयन एसओपी",
            "summaryEn": "Transparent, fair and merit-based process for recruitment.",
            "summaryHi": "भर्ती के लिए पारदर्शी, निष्पक्ष और योग्यता आधारित प्रक्रिया।",
            "clauses": [
              {
                "id": "v7_c16_16.3",
                "titleEn": "16.3 Objectives",
                "titleHi": "16.3 उद्देश्य",
                "textEn": "Recruitment shall ensure equal opportunity, select competent personnel, and promote transparency.",
                "textHi": "भर्ती समान अवसर सुनिश्चित करेगी, सक्षम कर्मियों का चयन करेगी, और पारदर्शिता को बढ़ावा देगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Programme Implementation SOPs",
        "titleHi": "कार्यक्रम कार्यान्वयन एसओपी",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Project Planning & Approval SOP",
            "titleHi": "परियोजना योजना एवं अनुमोदन एसओपी",
            "summaryEn": "Systematic process for planning, evaluating, approving and initiating programmes.",
            "summaryHi": "कार्यक्रमों की योजना बनाने, मूल्यांकन करने, अनुमोदन करने और शुरू करने की व्यवस्थित प्रक्रिया।",
            "clauses": [
              {
                "id": "v7_c21_21.3",
                "titleEn": "21.3 Objectives",
                "titleHi": "21.3 उद्देश्य",
                "textEn": "Project planning shall align with the Society's Vision and Mission, and address identified community needs.",
                "textHi": "परियोजना योजना संस्था की दृष्टि और मिशन के अनुरूप होगी, और समुदाय की जरूरतों को संबोधित करेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Communication & Public Relations SOPs",
        "titleHi": "संचार एवं जनसंपर्क एसओपी",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Official Correspondence SOP",
            "titleHi": "आधिकारिक पत्राचार एसओपी",
            "summaryEn": "Uniform procedures for official communications.",
            "summaryHi": "आधिकारिक संचार के लिए समान प्रक्रियाएं।",
            "clauses": [
              {
                "id": "v7_c26_26.2",
                "titleEn": "26.2 Scope",
                "titleHi": "26.2 कार्यक्षेत्र",
                "textEn": "This SOP applies to Official Letters, Notices, Circulars, Office Orders, Memoranda, E-mail Communications, Certificates, and Official Invitations.",
                "textHi": "यह एसओपी आधिकारिक पत्र, नोटिस, परिपत्र, कार्यालय आदेश, ज्ञापन, ई-मेल संचार, प्रमाण पत्र और आधिकारिक निमंत्रण पर लागू होता है।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Information Technology & Digital Governance SOPs",
        "titleHi": "सूचना प्रौद्योगिकी एवं डिजिटल गवर्नेंस एसओपी",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "User Account & Access Management SOP",
            "titleHi": "उपयोगकर्ता खाता एवं पहुँच प्रबंधन एसओपी",
            "summaryEn": "Procedures for creation, modification, monitoring and removal of user accounts.",
            "summaryHi": "उपयोगकर्ता खातों के निर्माण, संशोधन, निगरानी और हटाने की प्रक्रियाएं।",
            "clauses": [
              {
                "id": "v7_c31_31.3",
                "titleEn": "31.3 Objectives",
                "titleHi": "31.3 उद्देश्य",
                "textEn": "Access management shall protect organisational information and ensure authorised access only.",
                "textHi": "पहुँच प्रबंधन संगठनात्मक जानकारी की रक्षा करेगा और केवल अधिकृत पहुँच सुनिश्चित करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Risk Management, Safety & Emergency Response SOPs",
        "titleHi": "जोखिम प्रबंधन, सुरक्षा एवं आपातकालीन प्रतिक्रिया एसओपी",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Enterprise Risk Register & Risk Management Framework",
            "titleHi": "उद्यम जोखिम रजिस्टर एवं जोखिम प्रबंधन ढांचा",
            "summaryEn": "Structured process for identifying, assessing, controlling, and monitoring organisational risks.",
            "summaryHi": "संगठनात्मक जोखिमों की पहचान, मूल्यांकन, नियंत्रण और निगरानी के लिए संरचित प्रक्रिया।",
            "clauses": [
              {
                "id": "v7_c36_36.2",
                "titleEn": "36.2 Objectives",
                "titleHi": "36.2 उद्देश्य",
                "textEn": "The Society shall identify, assess, manage and monitor risks in order to protect organisational assets, safeguard beneficiaries, and ensure operational continuity.",
                "textHi": "संस्था संगठनात्मक संपत्तियों की सुरक्षा, लाभार्थियों की सुरक्षा, और परिचालन निरंतरता सुनिश्चित करने के लिए जोखिमों की पहचान, मूल्यांकन, प्रबंधन और निगरानी करेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Monitoring, Audit & Compliance SOPs",
        "titleHi": "निगरानी, लेखा परीक्षा एवं अनुपालन एसओपी",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Internal Monitoring & Performance Review SOP",
            "titleHi": "आंतरिक निगरानी एवं प्रदर्शन समीक्षा एसओपी",
            "summaryEn": "Systematic process for monitoring organisational activities and evaluating operational performance.",
            "summaryHi": "संगठनात्मक गतिविधियों की निगरानी और परिचालन प्रदर्शन के मूल्यांकन के लिए व्यवस्थित प्रक्रिया।",
            "clauses": [
              {
                "id": "v7_c41_41.3",
                "titleEn": "41.3 Objectives",
                "titleHi": "41.3 उद्देश्य",
                "textEn": "Internal monitoring shall measure organisational performance, ensure achievement of approved objectives, and identify operational gaps.",
                "textHi": "आंतरिक निगरानी संगठनात्मक प्रदर्शन को मापेगी, स्वीकृत उद्देश्यों की उपलब्धि सुनिश्चित करेगी, और परिचालन अंतराल की पहचान करेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Continuous Improvement & Institutional Excellence SOPs",
        "titleHi": "निरंतर सुधार एवं संस्थागत उत्कृष्टता एसओपी",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Strategic Planning & Organisational Development SOP",
            "titleHi": "रणनीतिक योजना एवं संगठनात्मक विकास एसओपी",
            "summaryEn": "Procedures for strategic planning, organisational development and long-term institutional growth.",
            "summaryHi": "रणनीतिक योजना, संगठनात्मक विकास और दीर्घकालिक संस्थागत विकास की प्रक्रियाएं।",
            "clauses": [
              {
                "id": "v7_c46_46.3",
                "titleEn": "46.3 Objectives",
                "titleHi": "46.3 उद्देश्य",
                "textEn": "Strategic planning shall define long-term direction, promote sustainable growth, and align programmes with organisational objectives.",
                "textHi": "रणनीतिक योजना दीर्घकालिक दिशा को परिभाषित करेगी, स्थायी विकास को बढ़ावा देगी, और कार्यक्रमों को संगठनात्मक उद्देश्यों के साथ संरेखित करेगी।"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 8,
    "titleEn": "Volume 8: Handbooks, Guidelines, Toolkits & Operational Reference Manual",
    "titleHi": "खंड 8: हैंडबुक, दिशानिर्देश, टूलकिट एवं परिचालन संदर्भ नियमावली",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Governance Handbook",
        "titleHi": "शासन हैंडबुक",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Roles & Responsibilities Handbook",
            "titleHi": "भूमिकाएं एवं जिम्मेदारियां हैंडबुक",
            "summaryEn": "Clear understanding of the duties, powers, and accountability of every individual.",
            "summaryHi": "प्रत्येक व्यक्ति के कर्तव्यों, शक्तियों और जवाबदेही की स्पष्ट समझ।",
            "clauses": [
              {
                "id": "v8_c1_1.3",
                "titleEn": "1.3 Guiding Principles",
                "titleHi": "1.3 मार्गदर्शक सिद्धांत",
                "textEn": "Every individual shall act honestly and ethically, serve the interests of the Society, respect the Constitution, and avoid conflicts of interest.",
                "textHi": "प्रत्येक व्यक्ति ईमानदारी और नैतिकता से कार्य करेगा, संस्था के हितों की सेवा करेगा, संविधान का सम्मान करेगा, और हितों के टकराव से बचेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Administrative Handbook",
        "titleHi": "प्रशासनिक हैंडबुक",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Office Administration Handbook",
            "titleHi": "कार्यालय प्रशासन हैंडबुक",
            "summaryEn": "Practical guidance for efficient, transparent and professional office administration.",
            "summaryHi": "कुशल, पारदर्शी और पेशेवर कार्यालय प्रशासन के लिए व्यावहारिक मार्गदर्शन।",
            "clauses": [
              {
                "id": "v8_c6_6.3",
                "titleEn": "6.3 Administrative Objectives",
                "titleHi": "6.3 प्रशासनिक उद्देश्य",
                "textEn": "Office administration shall promote efficiency, maintain professionalism, ensure accountability, and protect organisational assets.",
                "textHi": "कार्यालय प्रशासन दक्षता को बढ़ावा देगा, व्यावसायिकता बनाए रखेगा, जवाबदेही सुनिश्चित करेगा, और संगठनात्मक संपत्ति की रक्षा करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Financial Handbook",
        "titleHi": "वित्तीय हैंडबुक",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Treasurer's Handbook",
            "titleHi": "कोषाध्यक्ष की हैंडबुक",
            "summaryEn": "Practical guidance for the Treasurer in safeguarding financial integrity, accountability and sustainability.",
            "summaryHi": "वित्तीय अखंडता, जवाबदेही और स्थिरता की रक्षा में कोषाध्यक्ष के लिए व्यावहारिक मार्गदर्शन।",
            "clauses": [
              {
                "id": "v8_c11_11.3",
                "titleEn": "11.3 Principal Responsibilities",
                "titleHi": "11.3 प्रमुख जिम्मेदारियां",
                "textEn": "The Treasurer shall supervise financial administration, safeguard Society funds, ensure accurate accounting, and monitor budgets.",
                "textHi": "कोषाध्यक्ष वित्तीय प्रशासन का पर्यवेक्षण करेगा, संस्था के धन की रक्षा करेगा, सटीक लेखांकन सुनिश्चित करेगा, और बजट की निगरानी करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Human Resource & Volunteer Handbook",
        "titleHi": "मानव संसाधन एवं स्वयंसेवक हैंडबुक",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Employee Handbook",
            "titleHi": "कर्मचारी हैंडबुक",
            "summaryEn": "Guidance for employees regarding their rights, responsibilities, professional conduct and employment expectations.",
            "summaryHi": "कर्मचारियों को उनके अधिकारों, जिम्मेदारियों, व्यावसायिक आचरण और रोजगार की अपेक्षाओं के संबंध में मार्गदर्शन।",
            "clauses": [
              {
                "id": "v8_c16_16.4",
                "titleEn": "16.4 Employee Responsibilities",
                "titleHi": "16.4 कर्मचारी की जिम्मेदारियां",
                "textEn": "Every employee shall perform assigned duties diligently, observe office discipline, protect Society property, and maintain confidentiality.",
                "textHi": "प्रत्येक कर्मचारी सौंपे गए कर्तव्यों का लगन से पालन करेगा, कार्यालय अनुशासन का पालन करेगा, संस्था की संपत्ति की रक्षा करेगा, और गोपनीयता बनाए रखेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Community Development Handbook",
        "titleHi": "सामुदायिक विकास हैंडबुक",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Community Engagement Handbook",
            "titleHi": "सामुदायिक सहभागिता हैंडबुक",
            "summaryEn": "Practical guidance for strengthening community participation, fostering inclusive engagement and promoting collaborative relationships.",
            "summaryHi": "सामुदायिक भागीदारी को मजबूत करने, समावेशी जुड़ाव को बढ़ावा देने और सहयोगात्मक संबंधों को बढ़ावा देने के लिए व्यावहारिक मार्गदर्शन।",
            "clauses": [
              {
                "id": "v8_c21_21.3",
                "titleEn": "21.3 Objectives",
                "titleHi": "21.3 उद्देश्य",
                "textEn": "Community engagement shall encourage active participation, promote social harmony, strengthen community ownership, and improve public confidence.",
                "textHi": "सामुदायिक जुड़ाव सक्रिय भागीदारी को प्रोत्साहित करेगा, सामाजिक सद्भाव को बढ़ावा देगा, सामुदायिक स्वामित्व को मजबूत करेगा, और सार्वजनिक विश्वास में सुधार करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Communication & Media Handbook",
        "titleHi": "संचार एवं मीडिया हैंडबुक",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Public Relations Handbook",
            "titleHi": "जनसंपर्क हैंडबुक",
            "summaryEn": "Practical guidance for managing the public image, reputation and stakeholder relationships of the Society.",
            "summaryHi": "संस्था की सार्वजनिक छवि, प्रतिष्ठा और हितधारक संबंधों के प्रबंधन के लिए व्यावहारिक मार्गदर्शन।",
            "clauses": [
              {
                "id": "v8_c26_26.3",
                "titleEn": "26.3 Objectives",
                "titleHi": "26.3 उद्देश्य",
                "textEn": "Public relations activities shall promote public confidence, build community trust, strengthen institutional reputation, and communicate organisational achievements.",
                "textHi": "जनसंपर्क गतिविधियां सार्वजनिक विश्वास को बढ़ावा देंगी, सामुदायिक विश्वास का निर्माण करेंगी, संस्थागत प्रतिष्ठा को मजबूत करेंगी, और संगठनात्मक उपलब्धियों का संचार करेंगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Digital Governance Handbook",
        "titleHi": "डिजिटल गवर्नेंस हैंडबुक",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Website Administration Handbook",
            "titleHi": "वेबसाइट प्रशासन हैंडबुक",
            "summaryEn": "Practical guidance for the administration, operation, maintenance and continuous improvement of the official website.",
            "summaryHi": "आधिकारिक वेबसाइट के प्रशासन, संचालन, रखरखाव और निरंतर सुधार के लिए व्यावहारिक मार्गदर्शन।",
            "clauses": [
              {
                "id": "v8_c31_31.3",
                "titleEn": "31.3 Objectives",
                "titleHi": "31.3 उद्देश्य",
                "textEn": "Website administration shall maintain website availability, ensure accurate content, protect organisational data, and improve accessibility.",
                "textHi": "वेबसाइट प्रशासन वेबसाइट की उपलब्धता बनाए रखेगा, सटीक सामग्री सुनिश्चित करेगा, संगठनात्मक डेटा की रक्षा करेगा, और पहुंच में सुधार करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Legal, Compliance & Governance Handbook",
        "titleHi": "कानूनी, अनुपालन एवं शासन हैंडबुक",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Legal Compliance Handbook",
            "titleHi": "कानूनी अनुपालन हैंडबुक",
            "summaryEn": "Practical guidance for ensuring that the Society conducts all of its activities in compliance with applicable laws and statutory requirements.",
            "summaryHi": "यह सुनिश्चित करने के लिए व्यावहारिक मार्गदर्शन कि संस्था अपनी सभी गतिविधियों को लागू कानूनों और वैधानिक आवश्यकताओं के अनुपालन में संचालित करती है।",
            "clauses": [
              {
                "id": "v8_c36_36.3",
                "titleEn": "36.3 Objectives",
                "titleHi": "36.3 उद्देश्य",
                "textEn": "Legal compliance shall promote lawful governance, protect organisational credibility, minimise legal risk, and support accountability.",
                "textHi": "कानूनी अनुपालन वैध शासन को बढ़ावा देगा, संगठनात्मक विश्वसनीयता की रक्षा करेगा, कानूनी जोखिम को कम करेगा, और जवाबदेही का समर्थन करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Quality, Risk & Institutional Excellence Handbook",
        "titleHi": "गुणवत्ता, जोखिम एवं संस्थागत उत्कृष्टता हैंडबुक",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Quality Management Handbook",
            "titleHi": "गुणवत्ता प्रबंधन हैंडबुक",
            "summaryEn": "Practical guidance for implementing and maintaining an effective quality management framework.",
            "summaryHi": "प्रभावी गुणवत्ता प्रबंधन ढांचे को लागू करने और बनाए रखने के लिए व्यावहारिक मार्गदर्शन।",
            "clauses": [
              {
                "id": "v8_c41_41.3",
                "titleEn": "41.3 Quality Objectives",
                "titleHi": "41.3 गुणवत्ता उद्देश्य",
                "textEn": "The Society shall endeavour to deliver quality services, improve operational efficiency, and enhance stakeholder satisfaction.",
                "textHi": "संस्था गुणवत्तापूर्ण सेवाएं प्रदान करने, परिचालन दक्षता में सुधार करने और हितधारक संतुष्टि बढ़ाने का प्रयास करेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Operational Toolkits & Quick Reference Guides",
        "titleHi": "परिचालन टूलकिट एवं त्वरित संदर्भ मार्गदर्शिका",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Governance Toolkit",
            "titleHi": "शासन टूलकिट",
            "summaryEn": "Practical governance resources to assist the Governing Body, Committees and Office-Bearers.",
            "summaryHi": "शासी निकाय, समितियों और पदाधिकारियों की सहायता के लिए व्यावहारिक शासन संसाधन।",
            "clauses": [
              {
                "id": "v8_c46_46.3",
                "titleEn": "46.3 Governing Body Meeting Checklist",
                "titleHi": "46.3 शासी निकाय बैठक चेकलिस्ट",
                "textEn": "Before every meeting, verify: Meeting Notice issued, Agenda approved, Previous Minutes circulated, Supporting documents attached, Quorum requirements confirmed.",
                "textHi": "प्रत्येक बैठक से पहले सत्यापित करें: बैठक सूचना जारी की गई, एजेंडा स्वीकृत किया गया, पिछले कार्यवृत्त परिचालित किए गए, सहायक दस्तावेज संलग्न किए गए, कोरम आवश्यकताओं की पुष्टि की गई।"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 9,
    "titleEn": "Volume 9: Training, Orientation, Capacity Building & Leadership Development Manual",
    "titleHi": "खंड 9: प्रशिक्षण, अभिविन्यास, क्षमता निर्माण एवं नेतृत्व विकास नियमावली",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Organisational Orientation Manual",
        "titleHi": "संगठनात्मक अभिविन्यास नियमावली",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "New Member Orientation Manual",
            "titleHi": "नए सदस्य अभिविन्यास नियमावली",
            "summaryEn": "Structured orientation programme for newly admitted members.",
            "summaryHi": "नव प्रवेशित सदस्यों के लिए संरचित अभिविन्यास कार्यक्रम।",
            "clauses": [
              {
                "id": "v9_c1_1.3",
                "titleEn": "1.3 Objectives",
                "titleHi": "1.3 उद्देश्य",
                "textEn": "The orientation programme shall introduce the Society, explain membership rights, promote values, and encourage active participation.",
                "textHi": "अभिविन्यास कार्यक्रम संस्था का परिचय देगा, सदस्यता अधिकारों की व्याख्या करेगा, मूल्यों को बढ़ावा देगा, और सक्रिय भागीदारी को प्रोत्साहित करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Leadership Development Manual",
        "titleHi": "नेतृत्व विकास नियमावली",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Leadership Development Programme",
            "titleHi": "नेतृत्व विकास कार्यक्रम",
            "summaryEn": "Framework for identifying, developing and strengthening leadership capacity.",
            "summaryHi": "नेतृत्व क्षमता की पहचान, विकास और सुदृढ़ीकरण के लिए रूपरेखा।",
            "clauses": [
              {
                "id": "v9_c6_6.4",
                "titleEn": "6.4 Leadership Competencies",
                "titleHi": "6.4 नेतृत्व क्षमताएं",
                "textEn": "Every leader should demonstrate Integrity, Vision, Accountability, Professionalism, Communication Skills, and Decision-Making Ability.",
                "textHi": "प्रत्येक नेता को सत्यनिष्ठा, दूरदर्शिता, जवाबदेही, व्यावसायिकता, संचार कौशल और निर्णय लेने की क्षमता का प्रदर्शन करना चाहिए।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Training & Capacity Building Manual",
        "titleHi": "प्रशिक्षण एवं क्षमता निर्माण नियमावली",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Annual Training Framework",
            "titleHi": "वार्षिक प्रशिक्षण ढांचा",
            "summaryEn": "Annual framework for planning, organising and reviewing training programmes.",
            "summaryHi": "प्रशिक्षण कार्यक्रमों की योजना, आयोजन और समीक्षा के लिए वार्षिक ढांचा।",
            "clauses": [
              {
                "id": "v9_c11_11.4",
                "titleEn": "11.4 Annual Training Plan",
                "titleHi": "11.4 वार्षिक प्रशिक्षण योजना",
                "textEn": "The annual plan should include Training Calendar, Target Participants, Training Objectives, Budget Allocation, and Evaluation Process.",
                "textHi": "वार्षिक योजना में प्रशिक्षण कैलेंडर, लक्षित प्रतिभागी, प्रशिक्षण उद्देश्य, बजट आवंटन और मूल्यांकन प्रक्रिया शामिल होनी चाहिए।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Communication & Facilitation Skills Manual",
        "titleHi": "संचार एवं सुविधा कौशल नियमावली",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Public Speaking Handbook",
            "titleHi": "सार्वजनिक भाषण हैंडबुक",
            "summaryEn": "Standards and practical guidance for effective public speaking.",
            "summaryHi": "प्रभावी सार्वजनिक भाषण के लिए मानक और व्यावहारिक मार्गदर्शन।",
            "clauses": [
              {
                "id": "v9_c16_16.4",
                "titleEn": "16.4 Public Speaking Principles",
                "titleHi": "16.4 सार्वजनिक भाषण सिद्धांत",
                "textEn": "Every speaker shall prepare thoroughly, speak truthfully, use respectful language, and present verified information.",
                "textHi": "प्रत्येक वक्ता पूरी तैयारी करेगा, सत्य बोलेगा, सम्मानजनक भाषा का उपयोग करेगा, और सत्यापित जानकारी प्रस्तुत करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Project & Programme Management Manual",
        "titleHi": "परियोजना एवं कार्यक्रम प्रबंधन नियमावली",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Project Planning Toolkit",
            "titleHi": "परियोजना योजना टूलकिट",
            "summaryEn": "Structured framework for planning projects and programmes.",
            "summaryHi": "परियोजनाओं और कार्यक्रमों की योजना बनाने के लिए संरचित ढांचा।",
            "clauses": [
              {
                "id": "v9_c21_21.4",
                "titleEn": "21.4 Project Planning Components",
                "titleHi": "21.4 परियोजना योजना के घटक",
                "textEn": "Every project plan should include Project Title, Background, Objectives, Scope, Target Beneficiaries, Activities, Timeline, and Budget.",
                "textHi": "प्रत्येक परियोजना योजना में परियोजना का शीर्षक, पृष्ठभूमि, उद्देश्य, कार्यक्षेत्र, लक्षित लाभार्थी, गतिविधियां, समयरेखा और बजट शामिल होना चाहिए।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Digital Skills & Technology Manual",
        "titleHi": "डिजिटल कौशल एवं प्रौद्योगिकी नियमावली",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Digital Literacy Handbook",
            "titleHi": "डिजिटल साक्षरता हैंडबुक",
            "summaryEn": "Framework for developing digital literacy among members and employees.",
            "summaryHi": "सदस्यों और कर्मचारियों के बीच डिजिटल साक्षरता विकसित करने की रूपरेखा।",
            "clauses": [
              {
                "id": "v9_c26_26.3",
                "titleEn": "26.3 Objectives",
                "titleHi": "26.3 उद्देश्य",
                "textEn": "Digital literacy shall improve digital competency, promote responsible technology use, and increase organisational efficiency.",
                "textHi": "डिजिटल साक्षरता डिजिटल क्षमता में सुधार करेगी, जिम्मेदार प्रौद्योगिकी उपयोग को बढ़ावा देगी, और संगठनात्मक दक्षता बढ़ाएगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Financial & Administrative Skills Manual",
        "titleHi": "वित्तीय एवं प्रशासनिक कौशल नियमावली",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Basic Accounting Handbook",
            "titleHi": "बुनियादी लेखांकन हैंडबुक",
            "summaryEn": "Fundamental accounting knowledge and financial administration practices.",
            "summaryHi": "मौलिक लेखांकन ज्ञान और वित्तीय प्रशासन प्रथाएं।",
            "clauses": [
              {
                "id": "v9_c31_31.5",
                "titleEn": "31.5 Accounting Procedures",
                "titleHi": "31.5 लेखांकन प्रक्रियाएं",
                "textEn": "Record financial transactions promptly, verify supporting documents, and classify transactions correctly.",
                "textHi": "वित्तीय लेनदेन को तुरंत रिकॉर्ड करें, सहायक दस्तावेजों को सत्यापित करें, और लेनदेन को सही ढंग से वर्गीकृत करें।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Community Leadership & Social Development Manual",
        "titleHi": "सामुदायिक नेतृत्व एवं सामाजिक विकास नियमावली",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Community Leadership Handbook",
            "titleHi": "सामुदायिक नेतृत्व हैंडबुक",
            "summaryEn": "Framework for developing capable, ethical and service-oriented community leaders.",
            "summaryHi": "सक्षम, नैतिक और सेवा-उन्मुख सामुदायिक नेताओं को विकसित करने के लिए रूपरेखा।",
            "clauses": [
              {
                "id": "v9_c36_36.4",
                "titleEn": "36.4 Leadership Responsibilities",
                "titleHi": "36.4 नेतृत्व की जिम्मेदारियां",
                "textEn": "Community leaders shall represent the Society responsibly, encourage community participation, and resolve local issues constructively.",
                "textHi": "सामुदायिक नेता जिम्मेदारी से संस्था का प्रतिनिधित्व करेंगे, सामुदायिक भागीदारी को प्रोत्साहित करेंगे, और स्थानीय मुद्दों को रचनात्मक रूप से हल करेंगे।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Quality Management, Risk & Organisational Excellence Manual",
        "titleHi": "गुणवत्ता प्रबंधन, जोखिम एवं संगठनात्मक उत्कृष्टता नियमावली",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Quality Management System (QMS) Handbook",
            "titleHi": "गुणवत्ता प्रबंधन प्रणाली (QMS) हैंडबुक",
            "summaryEn": "Framework for consistent, efficient and high-quality governance and administration.",
            "summaryHi": "लगातार, कुशल और उच्च गुणवत्ता वाले शासन और प्रशासन के लिए रूपरेखा।",
            "clauses": [
              {
                "id": "v9_c41_41.3",
                "titleEn": "41.3 Objectives",
                "titleHi": "41.3 उद्देश्य",
                "textEn": "The Quality Management System shall improve organisational performance, standardise work processes, and enhance member satisfaction.",
                "textHi": "गुणवत्ता प्रबंधन प्रणाली संगठनात्मक प्रदर्शन में सुधार करेगी, कार्य प्रक्रियाओं को मानकीकृत करेगी, और सदस्य संतुष्टि को बढ़ाएगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Assessment, Certification & Continuous Professional Development Manual",
        "titleHi": "मूल्यांकन, प्रमाणन एवं सतत व्यावसायिक विकास नियमावली",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Learning Assessment & Competency Evaluation Handbook",
            "titleHi": "अधिगम मूल्यांकन एवं योग्यता मूल्यांकन हैंडबुक",
            "summaryEn": "Uniform system for assessing knowledge and practical skills.",
            "summaryHi": "ज्ञान और व्यावहारिक कौशल के मूल्यांकन के लिए समान प्रणाली।",
            "clauses": [
              {
                "id": "v9_c46_46.5",
                "titleEn": "46.5 Assessment Process",
                "titleHi": "46.5 मूल्यांकन प्रक्रिया",
                "textEn": "Define competency requirements, select appropriate assessment methods, and conduct assessments fairly.",
                "textHi": "योग्यता आवश्यकताओं को परिभाषित करें, उपयुक्त मूल्यांकन विधियों का चयन करें, और निष्पक्ष रूप से मूल्यांकन करें।"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 10,
    "titleEn": "Volume 10: Emergency Management, Business Continuity, Security & Crisis Response Manual",
    "titleHi": "खंड 10: आपातकालीन प्रबंधन, व्यापार निरंतरता, सुरक्षा एवं संकट प्रतिक्रिया नियमावली",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Emergency Preparedness Manual",
        "titleHi": "आपातकालीन तैयारी नियमावली",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Emergency Management Framework",
            "titleHi": "आपातकालीन प्रबंधन ढांचा",
            "summaryEn": "Principles and procedures for preparing, responding to, and recovering from emergencies.",
            "summaryHi": "आपात स्थितियों की तैयारी, प्रतिक्रिया और पुनर्प्राप्ति के लिए सिद्धांत और प्रक्रियाएं।",
            "clauses": [
              {
                "id": "v10_c1_1.3",
                "titleEn": "1.3 Objectives",
                "titleHi": "1.3 उद्देश्य",
                "textEn": "Emergency management shall protect human life, safeguard organisational assets, minimise disruption, and ensure rapid response.",
                "textHi": "आपातकालीन प्रबंधन मानव जीवन की रक्षा करेगा, संगठनात्मक संपत्तियों की सुरक्षा करेगा, व्यवधान को कम करेगा, और त्वरित प्रतिक्रिया सुनिश्चित करेगा।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Disaster Management Manual",
        "titleHi": "आपदा प्रबंधन नियमावली",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Natural Disaster Preparedness Handbook",
            "titleHi": "प्राकृतिक आपदा तैयारी हैंडबुक",
            "summaryEn": "Policies and procedures for responding effectively to natural disasters.",
            "summaryHi": "प्राकृतिक आपदाओं का प्रभावी ढंग से जवाब देने के लिए नीतियां और प्रक्रियाएं।",
            "clauses": [
              {
                "id": "v10_c6_6.4",
                "titleEn": "6.4 Preparedness Measures",
                "titleHi": "6.4 तैयारी के उपाय",
                "textEn": "The Society shall conduct hazard assessments, develop emergency plans, and maintain emergency supplies.",
                "textHi": "संस्था खतरे का आकलन करेगी, आपातकालीन योजनाएं विकसित करेगी, और आपातकालीन आपूर्ति बनाए रखेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Business Continuity & Disaster Recovery Manual",
        "titleHi": "व्यापार निरंतरता एवं आपदा पुनर्प्राप्ति नियमावली",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Business Continuity Planning (BCP) Handbook",
            "titleHi": "व्यापार निरंतरता योजना (BCP) हैंडबुक",
            "summaryEn": "Framework to ensure critical functions continue during and after disruptive incidents.",
            "summaryHi": "विघटनकारी घटनाओं के दौरान और बाद में महत्वपूर्ण कार्यों को जारी रखने के लिए रूपरेखा।",
            "clauses": [
              {
                "id": "v10_c11_11.5",
                "titleEn": "11.5 Business Continuity Planning Process",
                "titleHi": "11.5 व्यापार निरंतरता योजना प्रक्रिया",
                "textEn": "Identify critical organisational functions, conduct a Business Impact Analysis, and identify continuity strategies.",
                "textHi": "महत्वपूर्ण संगठनात्मक कार्यों की पहचान करें, व्यापार प्रभाव विश्लेषण करें, और निरंतरता रणनीतियों की पहचान करें।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Security Management Manual",
        "titleHi": "सुरक्षा प्रबंधन नियमावली",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Physical Security Management Handbook",
            "titleHi": "भौतिक सुरक्षा प्रबंधन हैंडबुक",
            "summaryEn": "Framework for protecting physical premises, facilities, personnel and assets.",
            "summaryHi": "भौतिक परिसर, सुविधाओं, कर्मियों और संपत्तियों की सुरक्षा के लिए रूपरेखा।",
            "clauses": [
              {
                "id": "v10_c16_16.4",
                "titleEn": "16.4 Physical Security Measures",
                "titleHi": "16.4 भौतिक सुरक्षा उपाय",
                "textEn": "The Society shall implement secure entry and exit points, appropriate locks, adequate lighting, and periodic security inspections.",
                "textHi": "संस्था सुरक्षित प्रवेश और निकास बिंदु, उपयुक्त ताले, पर्याप्त प्रकाश व्यवस्था और आवधिक सुरक्षा निरीक्षण लागू करेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Crisis Management Manual",
        "titleHi": "संकट प्रबंधन नियमावली",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Crisis Leadership & Command Handbook",
            "titleHi": "संकट नेतृत्व एवं कमान हैंडबुक",
            "summaryEn": "Leadership structure and decision-making framework for managing organisational crises.",
            "summaryHi": "संगठनात्मक संकटों के प्रबंधन के लिए नेतृत्व संरचना और निर्णय लेने की रूपरेखा।",
            "clauses": [
              {
                "id": "v10_c21_21.4",
                "titleEn": "21.4 Crisis Leadership Principles",
                "titleHi": "21.4 संकट नेतृत्व सिद्धांत",
                "textEn": "The Society shall ensure calm and decisive leadership, ethical decision-making, timely communication, and transparency.",
                "textHi": "संस्था शांत और निर्णायक नेतृत्व, नैतिक निर्णय लेने, समय पर संचार और पारदर्शिता सुनिश्चित करेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Health, Safety & Welfare Manual",
        "titleHi": "स्वास्थ्य, सुरक्षा एवं कल्याण नियमावली",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Occupational Health & Safety (OHS) Handbook",
            "titleHi": "व्यावसायिक स्वास्थ्य एवं सुरक्षा (OHS) हैंडबुक",
            "summaryEn": "Framework to provide a safe, healthy and secure working environment.",
            "summaryHi": "सुरक्षित और स्वस्थ कार्य वातावरण प्रदान करने की रूपरेखा।",
            "clauses": [
              {
                "id": "v10_c26_26.4",
                "titleEn": "26.4 OHS Responsibilities",
                "titleHi": "26.4 OHS जिम्मेदारियां",
                "textEn": "The Society shall identify workplace hazards, assess risks, implement control measures, and provide safety training.",
                "textHi": "संस्था कार्यस्थल के खतरों की पहचान करेगी, जोखिमों का आकलन करेगी, नियंत्रण उपायों को लागू करेगी, और सुरक्षा प्रशिक्षण प्रदान करेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Cyber Incident & Information Security Response Manual",
        "titleHi": "साइबर घटना एवं सूचना सुरक्षा प्रतिक्रिया नियमावली",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Cyber Incident Response Handbook",
            "titleHi": "साइबर घटना प्रतिक्रिया हैंडबुक",
            "summaryEn": "Framework for detecting, reporting, responding to and recovering from cyber incidents.",
            "summaryHi": "साइबर घटनाओं का पता लगाने, रिपोर्ट करने, प्रतिक्रिया देने और पुनर्प्राप्त करने की रूपरेखा।",
            "clauses": [
              {
                "id": "v10_c31_31.5",
                "titleEn": "31.5 Cyber Incident Response Process",
                "titleHi": "31.5 साइबर घटना प्रतिक्रिया प्रक्रिया",
                "textEn": "Identify the incident, report immediately, contain affected systems, assess impact, and commence recovery activities.",
                "textHi": "घटना की पहचान करें, तुरंत रिपोर्ट करें, प्रभावित प्रणालियों को शामिल करें, प्रभाव का आकलन करें, और पुनर्प्राप्ति गतिविधियां शुरू करें।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Community Emergency Operations Manual",
        "titleHi": "सामुदायिक आपातकालीन संचालन नियमावली",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Community Emergency Volunteer Management Handbook",
            "titleHi": "सामुदायिक आपातकालीन स्वयंसेवक प्रबंधन हैंडबुक",
            "summaryEn": "Framework for mobilisation, coordination and supervision of emergency volunteers.",
            "summaryHi": "आपातकालीन स्वयंसेवकों के जुटाव, समन्वय और पर्यवेक्षण के लिए रूपरेखा।",
            "clauses": [
              {
                "id": "v10_c36_36.4",
                "titleEn": "36.4 Volunteer Management Principles",
                "titleHi": "36.4 स्वयंसेवक प्रबंधन सिद्धांत",
                "textEn": "The Society shall register volunteers, assign duties according to competence, provide safety instructions, and maintain supervision.",
                "textHi": "संस्था स्वयंसेवकों को पंजीकृत करेगी, क्षमता के अनुसार कर्तव्य सौंपेगी, सुरक्षा निर्देश प्रदान करेगी, और पर्यवेक्षण बनाए रखेगी।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Monitoring, Audit & Continual Improvement Manual",
        "titleHi": "निगरानी, लेखा परीक्षा एवं निरंतर सुधार नियमावली",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Emergency Performance Monitoring Handbook",
            "titleHi": "आपातकालीन प्रदर्शन निगरानी हैंडबुक",
            "summaryEn": "Systematic framework for monitoring the effectiveness of emergency management.",
            "summaryHi": "आपातकालीन प्रबंधन की प्रभावशीलता की निगरानी के लिए व्यवस्थित रूपरेखा।",
            "clauses": [
              {
                "id": "v10_c41_41.4",
                "titleEn": "41.4 Performance Indicators",
                "titleHi": "41.4 प्रदर्शन संकेतक",
                "textEn": "Monitoring may include Emergency Response Time, Resource Availability, Incident Resolution Time, and Volunteer Participation.",
                "textHi": "निगरानी में आपातकालीन प्रतिक्रिया समय, संसाधन उपलब्धता, घटना समाधान समय और स्वयंसेवक भागीदारी शामिल हो सकती है।"
              }
            ]
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Annexures, Forms, Registers & Emergency Templates",
        "titleHi": "अनुबंध, प्रपत्र, रजिस्टर एवं आपातकालीन टेम्पलेट्स",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Standard Emergency Forms Handbook",
            "titleHi": "मानक आपातकालीन प्रपत्र हैंडबुक",
            "summaryEn": "Uniform forms to ensure all emergency management activities are documented.",
            "summaryHi": "यह सुनिश्चित करने के लिए समान प्रपत्र कि सभी आपातकालीन प्रबंधन गतिविधियों का दस्तावेजीकरण किया गया है।",
            "clauses": [
              {
                "id": "v10_c46_46.3",
                "titleEn": "46.3 Standard Emergency Forms",
                "titleHi": "46.3 मानक आपातकालीन प्रपत्र",
                "textEn": "The Society may prescribe forms like Emergency Incident Report Form, Emergency Notification Form, and Damage Assessment Form.",
                "textHi": "संस्था आपातकालीन घटना रिपोर्ट फॉर्म, आपातकालीन अधिसूचना फॉर्म और क्षति मूल्यांकन फॉर्म जैसे प्रपत्र निर्धारित कर सकती है।"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 5,
    "titleEn": "Volume 5: Programmes, Projects, Community Development & Implementation Framework",
    "titleHi": "खंड 5: कार्यक्रम, परियोजनाएं एवं सामुदायिक विकास रूपरेखा",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Programme Planning, Project Identification & Approval",
        "titleHi": "कार्यक्रम योजना, परियोजना पहचान एवं अनुमोदन",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Strategic Programme Planning",
            "titleHi": "रणनीतिक कार्यक्रम योजना",
            "clauses": []
          },
          {
            "chapterNo": 2,
            "titleEn": "Community Needs Assessment & Baseline Surveys",
            "titleHi": "सामुदायिक आवश्यकता आकलन एवं आधारभूत सर्वेक्षण",
            "clauses": []
          },
          {
            "chapterNo": 3,
            "titleEn": "Project Identification, Concept Notes & Feasibility Studies",
            "titleHi": "परियोजना पहचान, संकल्पना नोट एवं व्यवहार्यता अध्ययन",
            "clauses": []
          },
          {
            "chapterNo": 4,
            "titleEn": "Programme Approval, Budgeting & Resource Allocation",
            "titleHi": "कार्यक्रम अनुमोदन, बजट एवं संसाधन आवंटन",
            "clauses": []
          },
          {
            "chapterNo": 5,
            "titleEn": "Annual Action Plans, Operational Calendars & Implementation Schedules",
            "titleHi": "वार्षिक कार्य योजनाएं, संचालन कैलेंडर एवं कार्यान्वयन अनुसूचियां",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Education, Scholarship & Skill Development Programmes",
        "titleHi": "शिक्षा, छात्रवृत्ति एवं कौशल विकास कार्यक्रम",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Educational Support Programmes",
            "titleHi": "शैक्षिक सहायता कार्यक्रम",
            "clauses": []
          },
          {
            "chapterNo": 7,
            "titleEn": "Scholarship Management",
            "titleHi": "छात्रवृत्ति प्रबंधन",
            "clauses": []
          },
          {
            "chapterNo": 8,
            "titleEn": "Career Guidance, Competitive Examination & Professional Development",
            "titleHi": "करियर मार्गदर्शन, प्रतियोगी परीक्षा एवं व्यावसायिक विकास",
            "clauses": []
          },
          {
            "chapterNo": 9,
            "titleEn": "Skill Development, Vocational Training & Entrepreneurship",
            "titleHi": "कौशल विकास, व्यावसायिक प्रशिक्षण एवं उद्यमिता",
            "clauses": []
          },
          {
            "chapterNo": 10,
            "titleEn": "Digital Literacy, Research & Innovation Programmes",
            "titleHi": "डिजिटल साक्षरता, अनुसंधान एवं नवाचार कार्यक्रम",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Health, Welfare & Humanitarian Assistance",
        "titleHi": "स्वास्थ्य, कल्याण एवं मानवीय सहायता",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Medical Assistance Programmes",
            "titleHi": "चिकित्सा सहायता कार्यक्रम",
            "clauses": []
          },
          {
            "chapterNo": 12,
            "titleEn": "Emergency Relief & Disaster Assistance",
            "titleHi": "आपातकालीन राहत एवं आपदा सहायता",
            "clauses": []
          },
          {
            "chapterNo": 13,
            "titleEn": "Food Security, Poverty Alleviation & Community Support",
            "titleHi": "खाद्य सुरक्षा, गरीबी उन्मूलन एवं सामुदायिक सहायता",
            "clauses": []
          },
          {
            "chapterNo": 14,
            "titleEn": "Women, Children, Elderly & Persons with Disabilities Welfare",
            "titleHi": "महिला, बाल, वृद्ध एवं विकलांग कल्याण",
            "clauses": []
          },
          {
            "chapterNo": 15,
            "titleEn": "Psychosocial Support, Counselling & Community Well-being",
            "titleHi": "मनोसामाजिक सहायता, परामर्श एवं सामुदायिक कल्याण",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Religious, Social Reform & Community Development",
        "titleHi": "धार्मिक, सामाजिक सुधार एवं सामुदायिक विकास",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Islamic Education & Religious Awareness Programmes",
            "titleHi": "इस्लामिक शिक्षा एवं धार्मिक जागरूकता कार्यक्रम",
            "clauses": []
          },
          {
            "chapterNo": 17,
            "titleEn": "Community Reform Campaigns",
            "titleHi": "सामुदायिक सुधार अभियान",
            "clauses": []
          },
          {
            "chapterNo": 18,
            "titleEn": "Marriage Reform & Family Welfare Initiatives",
            "titleHi": "विवाह सुधार एवं परिवार कल्याण पहल",
            "clauses": []
          },
          {
            "chapterNo": 19,
            "titleEn": "Youth Leadership & Character Development",
            "titleHi": "युवा नेतृत्व एवं चरित्र विकास",
            "clauses": []
          },
          {
            "chapterNo": 20,
            "titleEn": "Community Unity, Social Harmony & Civic Engagement",
            "titleHi": "सामुदायिक एकता, सामाजिक सद्भाव एवं नागरिक जुड़ाव",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Economic Empowerment & Sustainable Development",
        "titleHi": "आर्थिक सशक्तिकरण एवं सतत विकास",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Employment Generation Initiatives",
            "titleHi": "रोजगार सृजन पहल",
            "clauses": []
          },
          {
            "chapterNo": 22,
            "titleEn": "Business Development & Entrepreneurship Support",
            "titleHi": "व्यवसाय विकास एवं उद्यमिता सहायता",
            "clauses": []
          },
          {
            "chapterNo": 23,
            "titleEn": "Women's Economic Empowerment",
            "titleHi": "महिला आर्थिक सशक्तिकरण",
            "clauses": []
          },
          {
            "chapterNo": 24,
            "titleEn": "Financial Literacy & Self-Reliance Programmes",
            "titleHi": "वित्तीय साक्षरता एवं आत्मनिर्भरता कार्यक्रम",
            "clauses": []
          },
          {
            "chapterNo": 25,
            "titleEn": "Sustainable Community Development Projects",
            "titleHi": "सतत सामुदायिक विकास परियोजनाएं",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Environment, Public Infrastructure & Community Services",
        "titleHi": "पर्यावरण, सार्वजनिक बुनियादी ढांचा एवं सामुदायिक सेवाएं",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Environmental Protection Programmes",
            "titleHi": "पर्यावरण संरक्षण कार्यक्रम",
            "clauses": []
          },
          {
            "chapterNo": 27,
            "titleEn": "Water Conservation & Sanitation",
            "titleHi": "जल संरक्षण एवं स्वच्छता",
            "clauses": []
          },
          {
            "chapterNo": 28,
            "titleEn": "Tree Plantation & Climate Awareness",
            "titleHi": "वृक्षारोपण एवं जलवायु जागरूकता",
            "clauses": []
          },
          {
            "chapterNo": 29,
            "titleEn": "Community Infrastructure Development",
            "titleHi": "सामुदायिक बुनियादी ढांचा विकास",
            "clauses": []
          },
          {
            "chapterNo": 30,
            "titleEn": "Public Utility & Civic Improvement Projects",
            "titleHi": "सार्वजनिक उपयोगिता एवं नागरिक सुधार परियोजनाएं",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Project Management, Procurement & Resource Utilization",
        "titleHi": "परियोजना प्रबंधन, खरीद एवं संसाधन उपयोग",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Project Management Framework",
            "titleHi": "परियोजना प्रबंधन रूपरेखा",
            "clauses": []
          },
          {
            "chapterNo": 32,
            "titleEn": "Procurement & Vendor Management",
            "titleHi": "खरीद एवं विक्रेता प्रबंधन",
            "clauses": []
          },
          {
            "chapterNo": 33,
            "titleEn": "Asset Utilization & Logistics",
            "titleHi": "संपत्ति उपयोग एवं रसद",
            "clauses": []
          },
          {
            "chapterNo": 34,
            "titleEn": "Volunteer Deployment & Workforce Coordination",
            "titleHi": "स्वयंसेवक तैनाती एवं कार्यबल समन्वय",
            "clauses": []
          },
          {
            "chapterNo": 35,
            "titleEn": "Project Closure & Handover Procedures",
            "titleHi": "परियोजना समापन एवं कार्यभार सौंपने की प्रक्रिया",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Monitoring, Evaluation, Research & Impact Assessment",
        "titleHi": "निगरानी, मूल्यांकन, अनुसंधान एवं प्रभाव आकलन",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Monitoring Framework",
            "titleHi": "निगरानी रूपरेखा",
            "clauses": []
          },
          {
            "chapterNo": 37,
            "titleEn": "Performance Indicators & Key Performance Metrics",
            "titleHi": "प्रदर्शन संकेतक एवं प्रमुख प्रदर्शन मेट्रिक्स",
            "clauses": []
          },
          {
            "chapterNo": 38,
            "titleEn": "Research, Surveys & Data Collection",
            "titleHi": "अनुसंधान, सर्वेक्षण एवं डेटा संग्रह",
            "clauses": []
          },
          {
            "chapterNo": 39,
            "titleEn": "Impact Assessment & Outcome Evaluation",
            "titleHi": "प्रभाव आकलन एवं परिणाम मूल्यांकन",
            "clauses": []
          },
          {
            "chapterNo": 40,
            "titleEn": "Lessons Learned & Continuous Improvement",
            "titleHi": "सीखे गए सबक एवं निरंतर सुधार",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Partnerships, Fundraising & External Relations",
        "titleHi": "साझेदारी, धन उगाहना एवं बाहरी संबंध",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Strategic Partnerships & Institutional Collaboration",
            "titleHi": "रणनीतिक साझेदारी एवं संस्थागत सहयोग",
            "clauses": []
          },
          {
            "chapterNo": 42,
            "titleEn": "Fundraising & Resource Mobilisation",
            "titleHi": "धन उगाहना एवं संसाधन जुटाना",
            "clauses": []
          },
          {
            "chapterNo": 43,
            "titleEn": "Donor Relations & Grant Management",
            "titleHi": "दाता संबंध एवं अनुदान प्रबंधन",
            "clauses": []
          },
          {
            "chapterNo": 44,
            "titleEn": "Government, CSR & External Stakeholder Relations",
            "titleHi": "सरकार, सीएसआर एवं बाहरी हितधारक संबंध",
            "clauses": []
          },
          {
            "chapterNo": 45,
            "titleEn": "National & International Cooperation",
            "titleHi": "राष्ट्रीय एवं अंतर्राष्ट्रीय सहयोग",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Programme Sustainability, Innovation & Future Development",
        "titleHi": "कार्यक्रम स्थिरता, नवाचार एवं भविष्य का विकास",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Institutional Sustainability",
            "titleHi": "संस्थागत स्थिरता",
            "clauses": []
          },
          {
            "chapterNo": 47,
            "titleEn": "Innovation & Digital Transformation",
            "titleHi": "नवाचार एवं डिजिटल परिवर्तन",
            "clauses": []
          },
          {
            "chapterNo": 48,
            "titleEn": "Knowledge Management & Organisational Learning",
            "titleHi": "ज्ञान प्रबंधन एवं संगठनात्मक शिक्षा",
            "clauses": []
          },
          {
            "chapterNo": 49,
            "titleEn": "Future Strategic Planning & Organisational Growth",
            "titleHi": "भविष्य की रणनीतिक योजना एवं संगठनात्मक विकास",
            "clauses": []
          },
          {
            "chapterNo": 50,
            "titleEn": "Legacy, Institutional Excellence & Long-Term Vision",
            "titleHi": "विरासत, संस्थागत उत्कृष्टता एवं दीर्घकालिक दृष्टिकोण",
            "clauses": []
          }
        ]
      }
    ]
  },
  {
    "volumeNo": 6,
    "titleEn": "Volume 6: Administrative Reference, Compliance & Organisational Resources Manual",
    "titleHi": "खंड 6: प्रशासनिक संदर्भ, अनुपालन एवं संगठनात्मक संसाधन नियमावली",
    "parts": [
      {
        "partNo": "Part-1",
        "titleEn": "Legal Compliance & Statutory Reference",
        "titleHi": "विधिक अनुपालन एवं वैधानिक संदर्भ",
        "chapters": [
          {
            "chapterNo": 1,
            "titleEn": "Applicable Laws & Regulatory Framework",
            "titleHi": "लागू कानून एवं विनियामक ढांचा",
            "clauses": []
          },
          {
            "chapterNo": 2,
            "titleEn": "Society Registration Compliance",
            "titleHi": "संस्था पंजीकरण अनुपालन",
            "clauses": []
          },
          {
            "chapterNo": 3,
            "titleEn": "Tax Registration & Regulatory Compliance",
            "titleHi": "कर पंजीकरण एवं विनियामक अनुपालन",
            "clauses": []
          },
          {
            "chapterNo": 4,
            "titleEn": "Donations, Tax Benefits & Grant Compliance",
            "titleHi": "दान, कर लाभ एवं अनुदान अनुपालन",
            "clauses": []
          },
          {
            "chapterNo": 5,
            "titleEn": "Annual Compliance Calendar & Statutory Reporting",
            "titleHi": "वार्षिक अनुपालन कैलेंडर एवं वैधानिक रिपोर्टिंग",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-2",
        "titleEn": "Financial & Accounting Reference",
        "titleHi": "वित्तीय एवं लेखांकन संदर्भ",
        "chapters": [
          {
            "chapterNo": 6,
            "titleEn": "Accounting Standards & Financial Administration",
            "titleHi": "लेखांकन मानक एवं वित्तीय प्रशासन",
            "clauses": []
          },
          {
            "chapterNo": 7,
            "titleEn": "Financial Statements & Reporting",
            "titleHi": "वित्तीय विवरण एवं रिपोर्टिंग",
            "clauses": []
          },
          {
            "chapterNo": 8,
            "titleEn": "Budget Planning & Financial Control",
            "titleHi": "बजट योजना एवं वित्तीय नियंत्रण",
            "clauses": []
          },
          {
            "chapterNo": 9,
            "titleEn": "Internal Financial Controls",
            "titleHi": "आंतरिक वित्तीय नियंत्रण",
            "clauses": []
          },
          {
            "chapterNo": 10,
            "titleEn": "Audit Readiness & Financial Compliance",
            "titleHi": "लेखापरीक्षा तत्परता एवं वित्तीय अनुपालन",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-3",
        "titleEn": "Human Resource & Volunteer Administration",
        "titleHi": "मानव संसाधन एवं स्वयंसेवक प्रशासन",
        "chapters": [
          {
            "chapterNo": 11,
            "titleEn": "Human Resource Administration",
            "titleHi": "मानव संसाधन प्रशासन",
            "clauses": []
          },
          {
            "chapterNo": 12,
            "titleEn": "Volunteer Administration & Capacity Building",
            "titleHi": "स्वयंसेवक प्रशासन एवं क्षमता निर्माण",
            "clauses": []
          },
          {
            "chapterNo": 13,
            "titleEn": "Recruitment, Appointment & Personnel Documentation",
            "titleHi": "भर्ती, नियुक्ति एवं कार्मिक दस्तावेज़ीकरण",
            "clauses": []
          },
          {
            "chapterNo": 14,
            "titleEn": "Employee Welfare, Performance & Professional Development",
            "titleHi": "कर्मचारी कल्याण, प्रदर्शन एवं व्यावसायिक विकास",
            "clauses": []
          },
          {
            "chapterNo": 15,
            "titleEn": "Separation, Exit & Post-Service Administration",
            "titleHi": "अलगाव, निकास एवं सेवा-पश्चात प्रशासन",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-4",
        "titleEn": "Office Administration & Record Management",
        "titleHi": "कार्यालय प्रशासन एवं रिकॉर्ड प्रबंधन",
        "chapters": [
          {
            "chapterNo": 16,
            "titleEn": "Office Administration Standards",
            "titleHi": "कार्यालय प्रशासन मानक",
            "clauses": []
          },
          {
            "chapterNo": 17,
            "titleEn": "Records Retention & Document Preservation",
            "titleHi": "रिकॉर्ड प्रतिधारण एवं दस्तावेज़ संरक्षण",
            "clauses": []
          },
          {
            "chapterNo": 18,
            "titleEn": "File Classification & Document Control",
            "titleHi": "फ़ाइल वर्गीकरण एवं दस्तावेज़ नियंत्रण",
            "clauses": []
          },
          {
            "chapterNo": 19,
            "titleEn": "Digital Records & Archiving",
            "titleHi": "डिजिटल रिकॉर्ड एवं संग्रह",
            "clauses": []
          },
          {
            "chapterNo": 20,
            "titleEn": "Asset Register & Inventory Administration",
            "titleHi": "संपत्ति रजिस्टर एवं इन्वेंटरी प्रशासन",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-5",
        "titleEn": "Governance Reference & Committee Resources",
        "titleHi": "शासन संदर्भ एवं समिति संसाधन",
        "chapters": [
          {
            "chapterNo": 21,
            "titleEn": "Governance Structure & Committee Administration",
            "titleHi": "शासन संरचना एवं समिति प्रशासन",
            "clauses": []
          },
          {
            "chapterNo": 22,
            "titleEn": "Meeting Administration & Documentation Standards",
            "titleHi": "बैठक प्रशासन एवं दस्तावेज़ीकरण मानक",
            "clauses": []
          },
          {
            "chapterNo": 23,
            "titleEn": "Resolution Register & Decision Management",
            "titleHi": "प्रस्ताव रजिस्टर एवं निर्णय प्रबंधन",
            "clauses": []
          },
          {
            "chapterNo": 24,
            "titleEn": "Delegation of Authority Matrix",
            "titleHi": "प्राधिकार का प्रत्यायोजन मैट्रिक्स",
            "clauses": []
          },
          {
            "chapterNo": 25,
            "titleEn": "Governance Compliance & Institutional Accountability",
            "titleHi": "शासन अनुपालन एवं संस्थागत जवाबदेही",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-6",
        "titleEn": "Communication & Public Relations",
        "titleHi": "संचार एवं जनसंपर्क",
        "chapters": [
          {
            "chapterNo": 26,
            "titleEn": "Official Correspondence & Communication Standards",
            "titleHi": "आधिकारिक पत्राचार एवं संचार मानक",
            "clauses": []
          },
          {
            "chapterNo": 27,
            "titleEn": "Media Relations & Public Information",
            "titleHi": "मीडिया संबंध एवं सार्वजनिक जानकारी",
            "clauses": []
          },
          {
            "chapterNo": 28,
            "titleEn": "Website & Digital Communication Standards",
            "titleHi": "वेबसाइट एवं डिजिटल संचार मानक",
            "clauses": []
          },
          {
            "chapterNo": 29,
            "titleEn": "Social Media Administration",
            "titleHi": "सोशल मीडिया प्रशासन",
            "clauses": []
          },
          {
            "chapterNo": 30,
            "titleEn": "Public Relations, Branding & Institutional Identity",
            "titleHi": "जनसंपर्क, ब्रांडिंग एवं संस्थागत पहचान",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-7",
        "titleEn": "Information Technology & Cyber Governance",
        "titleHi": "सूचना प्रौद्योगिकी एवं साइबर शासन",
        "chapters": [
          {
            "chapterNo": 31,
            "titleEn": "Information Technology Administration",
            "titleHi": "सूचना प्रौद्योगिकी प्रशासन",
            "clauses": []
          },
          {
            "chapterNo": 32,
            "titleEn": "Information Security & Data Protection",
            "titleHi": "सूचना सुरक्षा एवं डेटा संरक्षण",
            "clauses": []
          },
          {
            "chapterNo": 33,
            "titleEn": "Cybersecurity Framework",
            "titleHi": "साइबर सुरक्षा रूपरेखा",
            "clauses": []
          },
          {
            "chapterNo": 34,
            "titleEn": "Backup, Disaster Recovery & Business Continuity",
            "titleHi": "बैकअप, आपदा रिकवरी एवं व्यापार निरंतरता",
            "clauses": []
          },
          {
            "chapterNo": 35,
            "titleEn": "Digital Infrastructure Management",
            "titleHi": "डिजिटल बुनियादी ढांचा प्रबंधन",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-8",
        "titleEn": "Risk, Safety & Emergency Preparedness",
        "titleHi": "जोखिम, सुरक्षा एवं आपातकालीन तैयारी",
        "chapters": [
          {
            "chapterNo": 36,
            "titleEn": "Enterprise Risk Register & Risk Management Framework",
            "titleHi": "एंटरप्राइज जोखिम रजिस्टर एवं जोखिम प्रबंधन रूपरेखा",
            "clauses": []
          },
          {
            "chapterNo": 37,
            "titleEn": "Emergency Response & Disaster Preparedness",
            "titleHi": "आपातकालीन प्रतिक्रिया एवं आपदा तैयारी",
            "clauses": []
          },
          {
            "chapterNo": 38,
            "titleEn": "Occupational Health, Safety & Welfare",
            "titleHi": "व्यावसायिक स्वास्थ्य, सुरक्षा एवं कल्याण",
            "clauses": []
          },
          {
            "chapterNo": 39,
            "titleEn": "Business Continuity Planning",
            "titleHi": "व्यापार निरंतरता योजना",
            "clauses": []
          },
          {
            "chapterNo": 40,
            "titleEn": "Crisis Management Framework",
            "titleHi": "संकट प्रबंधन रूपरेखा",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-9",
        "titleEn": "Templates, Registers & Specimen Documents",
        "titleHi": "टेम्प्लेट, रजिस्टर एवं नमूना दस्तावेज़",
        "chapters": [
          {
            "chapterNo": 41,
            "titleEn": "Administrative Registers",
            "titleHi": "प्रशासनिक रजिस्टर",
            "clauses": []
          },
          {
            "chapterNo": 42,
            "titleEn": "Standard Administrative Forms",
            "titleHi": "मानक प्रशासनिक प्रपत्र",
            "clauses": []
          },
          {
            "chapterNo": 43,
            "titleEn": "Specimen Letters, Notices & Official Communications",
            "titleHi": "नमूना पत्र, सूचनाएं एवं आधिकारिक संचार",
            "clauses": []
          },
          {
            "chapterNo": 44,
            "titleEn": "Agreements, Memoranda & Contract Templates",
            "titleHi": "समझौते, ज्ञापन एवं अनुबंध टेम्प्लेट",
            "clauses": []
          },
          {
            "chapterNo": 45,
            "titleEn": "Certificates & Official Formats",
            "titleHi": "प्रमाणपत्र एवं आधिकारिक प्रारूप",
            "clauses": []
          }
        ]
      },
      {
        "partNo": "Part-10",
        "titleEn": "Organisational Reference & Future Development",
        "titleHi": "संगठनात्मक संदर्भ एवं भविष्य का विकास",
        "chapters": [
          {
            "chapterNo": 46,
            "titleEn": "Organisational Glossary & Reference Terminology",
            "titleHi": "संगठनात्मक शब्दावली एवं संदर्भ शब्दावली",
            "clauses": []
          },
          {
            "chapterNo": 47,
            "titleEn": "Legal, Regulatory & Administrative Reference Guide",
            "titleHi": "विधिक, विनियामक एवं प्रशासनिक संदर्भ मार्गदर्शिका",
            "clauses": []
          },
          {
            "chapterNo": 48,
            "titleEn": "Best Practices, Benchmarking & Institutional Excellence",
            "titleHi": "सर्वोत्तम प्रथाएं, बेंचमार्किंग एवं संस्थागत उत्कृष्टता",
            "clauses": []
          },
          {
            "chapterNo": 49,
            "titleEn": "Future Administrative Development & Strategic Modernisation",
            "titleHi": "भविष्य का प्रशासनिक विकास एवं रणनीतिक आधुनिकीकरण",
            "clauses": []
          },
          {
            "chapterNo": 50,
            "titleEn": "Final Administrative Reference & Closing Provisions",
            "titleHi": "अंतिम प्रशासनिक संदर्भ एवं समापन प्रावधान",
            "clauses": []
          }
        ]
      }
    ]
  }
];
