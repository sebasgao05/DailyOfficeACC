const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, '../../temp_docx/full.txt'), 'utf8');

// Find the collects section (starts around 205000)
const startIdx = text.indexOf('Primera dominica de Adviento');
console.log('Collects start at:', startIdx);

// We'll extract by looking for "Colecta." + "Epístola." + "Evangelio." patterns
const collectRegex = /((?:Primera|Segunda|Tercera|Cuarta|Quinta|Sexta|Séptima|Octava|Novena|Décima|Undécima|Duodécima|Decimotercera|Decimocuarta|Decimoquinta|Decimosexta|Decimoséptima|Decimoctava|Decimonovena|Vigésima|Vigésimo primera|Vigésimo segunda|Vigésimo tercera|Vigésimo cuarta|Vigésimo quinta)[^\n]*?(?:dominica|Dominica|Domingo)[^C]*?)Colecta\./gi;

// Simpler approach: split by "dominica" or feast names
const entries = [];
const section = text.substring(startIdx, startIdx + 80000); // ~80K chars covers all collects

// Find all Colecta/Epístola/Evangelio blocks
const blocks = section.split(/(?=(?:Primera|Segunda|Tercera|Cuarta|Quinta|Sexta|Séptima|Octava|Novena|Décima|Undécima|Duodécima|Decimotercera|Decimocuarta|Decimoquinta|El Nacimiento|La Epifanía|Miércoles de Ceniza|Domingo de Ramos|Viernes Santo|Pascua de Resurrección|La Ascensión|Pentecostés|Dominica de la Trinidad|La Transfiguración|Todos los Santos|San|Santo|Santa)[\s])/);

for (const block of blocks) {
  if (block.length < 50) continue;
  
  // Extract title (first line before "Colecta.")
  const colIdx = block.indexOf('Colecta.');
  if (colIdx === -1) continue;
  
  const title = block.substring(0, colIdx).trim().replace(/Estación de [^\n]*/g, '').trim();
  if (!title || title.length > 200) continue;
  
  // Extract collect text
  const epIdx = block.indexOf('Epístola.');
  const collectText = epIdx !== -1 
    ? block.substring(colIdx + 8, epIdx).trim()
    : block.substring(colIdx + 8, colIdx + 500).trim();
  
  // Extract epistle
  let epistleRef = '';
  let epistleText = '';
  if (epIdx !== -1) {
    const evIdx = block.indexOf('Evangelio.');
    const epSection = block.substring(epIdx + 9, evIdx !== -1 ? evIdx : epIdx + 2000);
    const refMatch = epSection.match(/^([^.]+\.\s*\d+[^.]*\.)/);
    epistleRef = refMatch ? refMatch[1].trim() : '';
    epistleText = epSection.substring(epistleRef.length).trim();
    if (epistleText.length > 1500) epistleText = epistleText.substring(0, 1500);
  }
  
  // Extract gospel
  let gospelRef = '';
  let gospelText = '';
  const evIdx = block.indexOf('Evangelio.');
  if (evIdx !== -1) {
    const evSection = block.substring(evIdx + 10, evIdx + 2000);
    const refMatch = evSection.match(/^([^.]+\.\s*\d+[^.]*\.)/);
    gospelRef = refMatch ? refMatch[1].trim() : '';
    gospelText = evSection.substring(gospelRef.length).trim();
    // Cut at next section boundary
    const nextSec = gospelText.search(/(?:Primera|Segunda|Tercera|Cuarta|Quinta|Sexta|Séptima|Octava|Novena|Décima|Undécima|El Nacimiento|La Epifanía|Miércoles|Domingo de Ramos|Viernes Santo|Pascua|La Ascensión|Pentecostés|Dominica de la Trinidad|Estación)/);
    if (nextSec > 100) gospelText = gospelText.substring(0, nextSec);
    if (gospelText.length > 1500) gospelText = gospelText.substring(0, 1500);
  }
  
  if (collectText.length > 20) {
    entries.push({
      title: title.replace(/\n/g, ' ').substring(0, 100),
      collect: collectText.substring(0, 800),
      epistleRef,
      epistleText: epistleText.substring(0, 1200),
      gospelRef,
      gospelText: gospelText.substring(0, 1200),
    });
  }
}

console.log(`Extracted ${entries.length} collects`);
entries.slice(0, 5).forEach(e => console.log(`- ${e.title}`));

// Write as TypeScript data
let ts = `export interface CollectEntry {\n  title: string;\n  collect: string;\n  epistleRef: string;\n  epistleText: string;\n  gospelRef: string;\n  gospelText: string;\n}\n\nexport const collects: CollectEntry[] = [\n`;

for (const e of entries) {
  ts += `  {\n`;
  ts += `    title: ${JSON.stringify(e.title)},\n`;
  ts += `    collect: ${JSON.stringify(e.collect)},\n`;
  ts += `    epistleRef: ${JSON.stringify(e.epistleRef)},\n`;
  ts += `    epistleText: ${JSON.stringify(e.epistleText)},\n`;
  ts += `    gospelRef: ${JSON.stringify(e.gospelRef)},\n`;
  ts += `    gospelText: ${JSON.stringify(e.gospelText)},\n`;
  ts += `  },\n`;
}
ts += `];\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/collects.ts'), ts, 'utf8');
console.log('Written to src/data/collects.ts');
