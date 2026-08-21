// Script to extract Psalms from LOC1928 text
const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, '../../temp_docx/full.txt'), 'utf8');

// Find the psalter section (starts around position 595000)
const psalmStart = text.indexOf('Salmo 1. Beatus vir', 590000);
console.log('Psalter starts at:', psalmStart);

// Extract psalms by splitting on "Salmo X." pattern
const psalmRegex = /Salmo (\d+)\. ([^.]+?)\./g;
const matches = [];
let match;
let startPos = psalmStart;

while ((match = psalmRegex.exec(text.substring(startPos))) !== null) {
  matches.push({
    number: parseInt(match[1]),
    latinTitle: match[2].trim(),
    position: startPos + match.index,
    afterTitle: startPos + match.index + match[0].length,
  });
}

console.log(`Found ${matches.length} psalms`);

// Extract verses for each psalm
const psalms = [];
for (let i = 0; i < matches.length; i++) {
  const current = matches[i];
  const nextPos = i < matches.length - 1 ? matches[i + 1].position : current.position + 10000;
  
  // Get text between this psalm title and next psalm
  let psalmText = text.substring(current.afterTitle, nextPos);
  
  // Remove Gloria Patri
  const gloriaIdx = psalmText.indexOf('Gloria al Padre');
  if (gloriaIdx !== -1) {
    psalmText = psalmText.substring(0, gloriaIdx);
  }
  
  // Remove liturgical markers
  psalmText = psalmText.replace(/¶[^¶]*/g, '');
  psalmText = psalmText.replace(/El Día [^S]*/g, '');
  
  // Split into verses by number pattern
  const verseRegex = /(\d+)\s+/g;
  const verses = [];
  let vMatch;
  const versePositions = [];
  
  while ((vMatch = verseRegex.exec(psalmText)) !== null) {
    // Only accept if the number is at the start or preceded by a period/space
    const before = psalmText[vMatch.index - 1];
    if (vMatch.index === 0 || before === '.' || before === ')' || before === ' ' || before === '*') {
      versePositions.push({ num: parseInt(vMatch[1]), pos: vMatch.index });
    }
  }
  
  // Extract verse text between positions  
  for (let j = 0; j < versePositions.length; j++) {
    const vStart = versePositions[j].pos;
    const vEnd = j < versePositions.length - 1 ? versePositions[j + 1].pos : psalmText.length;
    let verseText = psalmText.substring(vStart, vEnd).trim();
    // Clean up
    verseText = verseText.replace(/\s+/g, ' ').trim();
    if (verseText.length > 5) { // Skip empty/trivial
      verses.push(verseText);
    }
  }
  
  if (verses.length > 0 || current.number <= 10) {
    psalms.push({
      number: current.number,
      latinTitle: current.latinTitle,
      verses: verses,
    });
  }
}

// Generate TypeScript
let ts = `export interface Psalm {
  number: number;
  latinTitle: string;
  verses: string[];
}

export const psalms: Psalm[] = [\n`;

for (const psalm of psalms) {
  ts += `  {\n`;
  ts += `    number: ${psalm.number},\n`;
  ts += `    latinTitle: ${JSON.stringify(psalm.latinTitle)},\n`;
  ts += `    verses: [\n`;
  for (const verse of psalm.verses) {
    ts += `      ${JSON.stringify(verse)},\n`;
  }
  ts += `    ],\n`;
  ts += `  },\n`;
}

ts += `];\n`;

const outPath = path.join(__dirname, '../src/data/psalms.ts');
fs.writeFileSync(outPath, ts, 'utf8');
console.log(`Written ${psalms.length} psalms to ${outPath}`);
console.log('First 5 psalms verse counts:', psalms.slice(0, 5).map(p => `Ps ${p.number}: ${p.verses.length}`));
