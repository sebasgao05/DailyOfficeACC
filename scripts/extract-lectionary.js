/**
 * Script to extract the full lectionary table from the LOC 1928 docx
 * Parses the text extracted from the Word document
 */
const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, '../../temp_docx/full.txt'), 'utf8');

// The lectionary table starts at around position 14000 and extends to about 63000
// It's split into Morning/Evening sections for each liturgical period
// Format: Day\nPsalms\nFirst Lesson\nSecond Lesson (repeating pattern)

// Let's extract Epiphany weeks 2-6 and Septuagesima/Sexagesima/Quinquagesima
// Then Lent weeks 1-6, Holy Week, Easter weeks 1-7, Trinity weeks 1-25

// For now, let's get the Septuagesima through Easter section which is the most complex

const section = text.substring(14000, 63000);

// Split into morning and evening by finding the markers
// The pattern alternates: 
// "ORACION MATUTINA" header followed by Morning data
// "ORACION VESPERTINA" header followed by Evening data

// Let's use a simpler approach - manually map from what we've already verified in the context
// The existing lectionary.ts has Advent and Epiphany week 1 correctly mapped
// Let's add the remaining weeks

// For Epiphany 2-6, Septuagesima, Sexagesima, Quinquagesima, Lent 1-6, Easter
// I'll output a JSON that we can then format into TypeScript

// Parse from the raw text looking for patterns
// Days are: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado/Sabado
// Dominica markers: "Primera Dominica", "Segunda Dominica", etc.

// Instead of complex parsing, let me generate the data manually from what I can read
// in the extracted text. This is the most reliable approach for liturgical data.

console.log("Lectionary data extraction - generating TypeScript output");
console.log("Reading from positions 14000-63000 of full.txt");

// Let's output just the section lengths and key markers to verify structure
const markers = [
  "Primera Dominica",
  "Segunda Dominica", 
  "Tercera Dominica",
  "Cuarta Dominica",
  "Quinta Dominica",
  "Sexta Dominica",
  "Septuagésima",
  "Sexagésima",
  "Quincuagésima",
  "Miércoles de",
  "Primera Dominica\n    De Cuaresma",
  "Segunda Dominica\n    De Cuaresma",
  "Tercera Dominica\n    De Cuaresma",
  "Cuarta Dominica\n    De Cuaresma",
  "Quinta Dominica\n    De Cuaresma",
  "Dominica de Pasión",
  "Dominica de Ramos",
  "Lunes Santo",
  "Pascua de Resurreccion",
  "Primera Dominica\n    Después de Pascua",
  "Pentecostés",
  "Dominica de la Trinidad",
];

for (const m of markers) {
  let idx = section.indexOf(m);
  let count = 0;
  while (idx !== -1) {
    count++;
    idx = section.indexOf(m, idx + 1);
  }
  const first = section.indexOf(m);
  console.log(`"${m.replace(/\n/g, '\\n')}" - found ${count} times, first at offset ${first}`);
}

// Let's also extract a key section
const cuaresmaIdx = section.indexOf("Primera Dominica\n    De Cuaresma");
if (cuaresmaIdx > 0) {
  console.log("\n=== CUARESMA 1 START ===");
  console.log(section.substring(cuaresmaIdx, cuaresmaIdx + 300));
}
