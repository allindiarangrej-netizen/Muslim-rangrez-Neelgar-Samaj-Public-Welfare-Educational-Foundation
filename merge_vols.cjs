const fs = require('fs');

// We have temp_data.js that we can't easily eval because of typescript types.
// Let's remove the TS types from constitutionData.ts to parse it, then merge.

let tsCode = fs.readFileSync('./src/data/constitutionData.ts', 'utf8');

// Strip out TS types to make it eval-able
let jsCode = tsCode.replace(/export interface [^}]+}/g, '');
jsCode = jsCode.replace(/export const CONSTITUTION_DATA: ConstitutionVolume\[\] =/g, 'const CONSTITUTION_DATA =');
jsCode += '\nmodule.exports = { CONSTITUTION_DATA };\n';

fs.writeFileSync('./temp_eval.cjs', jsCode);
