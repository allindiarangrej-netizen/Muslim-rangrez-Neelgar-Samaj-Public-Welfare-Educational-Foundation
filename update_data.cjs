const fs = require('fs');

// Read the file
let content = fs.readFileSync('./src/data/constitutionData.ts', 'utf8');

// Convert export const to const to allow eval
let evalContent = content.replace('export const CONSTITUTION_DATA', 'const CONSTITUTION_DATA');
evalContent += '\nmodule.exports = CONSTITUTION_DATA;\n';

fs.writeFileSync('./temp_data.js', evalContent);
