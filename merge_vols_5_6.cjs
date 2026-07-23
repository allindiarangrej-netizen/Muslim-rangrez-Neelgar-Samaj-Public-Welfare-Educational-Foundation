const fs = require('fs');
const { CONSTITUTION_DATA } = require('./compiled_data.cjs');
const newVolumes = require('./newVolumes56.json');

// Expand newVolumes to the full schema with clauses
const expandedNewVolumes = newVolumes.map(vol => {
  return {
    ...vol,
    parts: vol.parts.map(part => {
      return {
        ...part,
        chapters: part.chapters.map(ch => {
          return {
            ...ch,
            clauses: []
          };
        })
      };
    })
  };
});

const mergedData = [...CONSTITUTION_DATA, ...expandedNewVolumes];

let tsContent = `export interface Clause {
  id: string;
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

export const CONSTITUTION_DATA: ConstitutionVolume[] = ${JSON.stringify(mergedData, null, 2)};
`;

fs.writeFileSync('./src/data/constitutionData.ts', tsContent);
console.log('Successfully merged and updated constitutionData.ts');
