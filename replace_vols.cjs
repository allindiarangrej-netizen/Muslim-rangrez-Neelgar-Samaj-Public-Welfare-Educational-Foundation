const fs = require('fs');

let content = fs.readFileSync('./src/data/constitutionData.ts', 'utf8');

// The file has export const CONSTITUTION_DATA = [ ... ];
// Since it's TS, it's easier to manipulate as a string or use a regex to replace Volumes 1-4,
// But we might lose clauses if we just blindly overwrite.
// Wait, the user specifically says: "kindly add each parts of volume 1 , 2, 3, and 4 ( don't miss or loose ant parts of each volumes) as per above attached pdf files of volume 1, 2, 3, and 4."

// Let's just output the whole file contents so we can see what's in Volumes 1 to 4.
// But it's 1500 lines long. I've already dumped vol1.
