
export interface LocationState {
  id: string;
  nameEn: string;
  nameHi: string;
}

export interface LocationDistrict {
  id: string;
  stateId: string;
  nameEn: string;
  nameHi: string;
}

export interface LocationTehsil {
  id: string;
  districtId: string;
  nameEn: string;
  nameHi: string;
}

export const INDIAN_STATES: LocationState[] = [
  { id: 'MP', nameEn: 'Madhya Pradesh', nameHi: 'मध्य प्रदेश' },
  { id: 'RJ', nameEn: 'Rajasthan', nameHi: 'राजस्थान' },
  { id: 'UP', nameEn: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश' },
  { id: 'DL', nameEn: 'Delhi', nameHi: 'दिल्ली' },
  { id: 'MH', nameEn: 'Maharashtra', nameHi: 'महाराष्ट्र' },
  { id: 'GJ', nameEn: 'Gujarat', nameHi: 'गुजरात' },
  { id: 'HR', nameEn: 'Haryana', nameHi: 'हरियाणा' },
];

export const DISTRICTS: LocationDistrict[] = [
  // Madhya Pradesh
  { id: 'MP01', stateId: 'MP', nameEn: 'Morena', nameHi: 'मुरैना' },
  { id: 'MP02', stateId: 'MP', nameEn: 'Gwalior', nameHi: 'ग्वालियर' },
  { id: 'MP03', stateId: 'MP', nameEn: 'Bhopal', nameHi: 'भोपाल' },
  { id: 'MP04', stateId: 'MP', nameEn: 'Indore', nameHi: 'इंदौर' },
  { id: 'MP05', stateId: 'MP', nameEn: 'Jabalpur', nameHi: 'जबलपुर' },
  
  // Rajasthan
  { id: 'RJ01', stateId: 'RJ', nameEn: 'Dholpur', nameHi: 'धौलपुर' },
  { id: 'RJ02', stateId: 'RJ', nameEn: 'Jaipur', nameHi: 'जयपुर' },
  { id: 'RJ03', stateId: 'RJ', nameEn: 'Kota', nameHi: 'कोटा' },
  { id: 'RJ04', stateId: 'RJ', nameEn: 'Ajmer', nameHi: 'अजमेर' },
  
  // Uttar Pradesh
  { id: 'UP01', stateId: 'UP', nameEn: 'Agra', nameHi: 'आगरा' },
  { id: 'UP02', stateId: 'UP', nameEn: 'Lucknow', nameHi: 'लखनऊ' },
  { id: 'UP03', stateId: 'UP', nameEn: 'Kanpur', nameHi: 'कानपुर' },
  { id: 'UP04', stateId: 'UP', nameEn: 'Aligarh', nameHi: 'अलीगढ़' },
];

export const TEHSILS: LocationTehsil[] = [
  // Morena
  { id: 'T01', districtId: 'MP01', nameEn: 'Morena City', nameHi: 'मुरैना नगर' },
  { id: 'T02', districtId: 'MP01', nameEn: 'Ambah', nameHi: 'अम्बाह' },
  { id: 'T03', districtId: 'MP01', nameEn: 'Porsa', nameHi: 'पोरसा' },
  { id: 'T04', districtId: 'MP01', nameEn: 'Joura', nameHi: 'जौरा' },
  { id: 'T05', districtId: 'MP01', nameEn: 'Kailaras', nameHi: 'कैलारस' },
  { id: 'T06', districtId: 'MP01', nameEn: 'Sabalgarh', nameHi: 'सबलगढ़' },
  
  // Gwalior
  { id: 'T07', districtId: 'MP02', nameEn: 'Gwalior City', nameHi: 'ग्वालियर नगर' },
  { id: 'T08', districtId: 'MP02', nameEn: 'Dabra', nameHi: 'डबरा' },
  { id: 'T09', districtId: 'MP02', nameEn: 'Bhitarwar', nameHi: 'भितरवार' },
  
  // Dholpur
  { id: 'T10', districtId: 'RJ01', nameEn: 'Dholpur City', nameHi: 'धौलपुर नगर' },
  { id: 'T11', districtId: 'RJ01', nameEn: 'Bari', nameHi: 'बाड़ी' },
  { id: 'T12', districtId: 'RJ01', nameEn: 'Rajakhera', nameHi: 'राजाखेड़ा' },
];
