const fs = require('fs');
const { CONSTITUTION_DATA } = require('./compiled_data.cjs');
const newVolumes = JSON.parse(fs.readFileSync('./newVolumes.json', 'utf8'));

for (const newVol of newVolumes) {
  const existingVol = CONSTITUTION_DATA.find(v => v.volumeNo === newVol.volumeNo);
  if (existingVol) {
    for (const newPart of newVol.parts) {
      let existingPart = existingVol.parts.find(p => p.partNo === newPart.partNo);
      if (!existingPart) {
        existingPart = { ...newPart, chapters: [] };
        existingVol.parts.push(existingPart);
      }
      for (const newChapter of newPart.chapters) {
        let existingChapter = existingPart.chapters.find(c => c.chapterNo === newChapter.chapterNo);
        if (!existingChapter) {
          existingPart.chapters.push({
            chapterNo: newChapter.chapterNo,
            titleEn: newChapter.titleEn,
            titleHi: newChapter.titleHi,
            summaryEn: "",
            summaryHi: "",
            clauses: []
          });
        } else {
          existingChapter.titleEn = newChapter.titleEn;
          existingChapter.titleHi = newChapter.titleHi;
        }
      }
      // sort chapters
      existingPart.chapters.sort((a, b) => a.chapterNo - b.chapterNo);
    }
    // sort parts
    existingVol.parts.sort((a, b) => {
      const getNum = p => parseInt(p.partNo.replace(/[^0-9]/g, ''), 10) || 0;
      return getNum(a) - getNum(b);
    });
  }
}

// Ensure the parts order is correct. Wait, partNo format varies e.g. "Part-2A-1" vs "Part-2".
// Actually, string sort is fine except 10 should come after 9.

let out = `export interface Clause {
  id: string;
  titleEn: string;
  titleHi: string;
  textEn: string;
  textHi: string;
}

export interface Chapter {
  chapterNo: number;
  titleEn: string;
  titleHi: string;
  summaryEn: string;
  summaryHi: string;
  clauses: Clause[];
}

export interface Part {
  partNo: string;
  titleEn: string;
  titleHi: string;
  chapters: Chapter[];
}

export interface ConstitutionVolume {
  volumeNo: number;
  titleEn: string;
  titleHi: string;
  parts: Part[];
}

export const CONSTITUTION_DATA: ConstitutionVolume[] = ` + JSON.stringify(CONSTITUTION_DATA, null, 2) + `;\n`;

fs.writeFileSync('./src/data/constitutionData.ts', out);
