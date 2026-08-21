/**
 * Leccionario del LOC 1928
 * Datos extraídos de la Tabla de Salmos y Lecciones para el Año Cristiano
 */

export interface LectionaryReading {
  psalms: string;
  firstLesson: string;
  secondLesson: string;
}

export interface LectionaryDay {
  morning: LectionaryReading;
  evening: LectionaryReading;
}

// Day of week keys: 0=Domingo, 1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves, 5=Viernes, 6=Sábado

// ===== ADVIENTO =====
const advent: Record<string, Record<string, LectionaryDay>> = {
  "1": {
    "0": { morning: { psalms: "50", firstLesson: "Mal. 3:1-6 y 4:4-6", secondLesson: "Luc. 1:5-25" }, evening: { psalms: "48, 126", firstLesson: "Isa. 62", secondLesson: "Mat. 25:1-13" } },
    "1": { morning: { psalms: "1, 3", firstLesson: "Isa. 1:1-9", secondLesson: "Marc. 1:1-13" }, evening: { psalms: "4, 8", firstLesson: "Isa. 1:10-20", secondLesson: "Rev. 3:14" } },
    "2": { morning: { psalms: "7", firstLesson: "Isa. 1:21-28", secondLesson: "Marc. 1:14-28" }, evening: { psalms: "11, 12", firstLesson: "Isa. 2:1-5", secondLesson: "Rev. 4" } },
    "3": { morning: { psalms: "9", firstLesson: "Isa. 2:6-19", secondLesson: "Marc. 1:29-39" }, evening: { psalms: "15, 19", firstLesson: "Isa. 3:1-3, 8-15", secondLesson: "Rev. 5" } },
    "4": { morning: { psalms: "10", firstLesson: "Isa. 4:2", secondLesson: "Marc. 1:40" }, evening: { psalms: "24, 30", firstLesson: "Isa. 5:1-7", secondLesson: "Rev. 6:1-11" } },
    "5": { morning: { psalms: "22", firstLesson: "Isa. 5:8-29", secondLesson: "Marc. 2:1-12" }, evening: { psalms: "6, 13", firstLesson: "Isa. 6:1-11", secondLesson: "Rev. 7:1-4, 9-17" } },
    "6": { morning: { psalms: "28, 29", firstLesson: "Isa. 7:1-9", secondLesson: "Marc. 2:13-22" }, evening: { psalms: "27", firstLesson: "Isa. 7:10-20", secondLesson: "Rev. 10" } },
  },
  "2": {
    "0": { morning: { psalms: "25", firstLesson: "Isa. 52:1-10", secondLesson: "Luc. 1:26-56" }, evening: { psalms: "119:89-104", firstLesson: "Amós 3:1-8", secondLesson: "1 Tes. 2:1-13" } },
    "1": { morning: { psalms: "33", firstLesson: "Isa. 8:5-8, 11-20", secondLesson: "Marc. 2:23–3:6" }, evening: { psalms: "42, 43", firstLesson: "Isa. 9:8-17", secondLesson: "Rev. 11:15" } },
    "2": { morning: { psalms: "48", firstLesson: "Isa. 9:18–10:4", secondLesson: "Marc. 3:7-19" }, evening: { psalms: "46, 47", firstLesson: "Isa. 10:5-7, 13-21", secondLesson: "Rev. 12:1-12" } },
    "3": { morning: { psalms: "50", firstLesson: "Isa. 11:1-10", secondLesson: "Marc. 3:20ss" }, evening: { psalms: "49", firstLesson: "Isa. 12", secondLesson: "Rev. 13:1-10" } },
    "4": { morning: { psalms: "62, 63", firstLesson: "Isa. 13:1-5, 17-22", secondLesson: "Marc. 4:1-20" }, evening: { psalms: "66", firstLesson: "Isa. 13:6-15", secondLesson: "Rev. 14:1-13" } },
    "5": { morning: { psalms: "73", firstLesson: "Isa. 24:16b", secondLesson: "Marc. 4:21-29" }, evening: { psalms: "77", firstLesson: "Isa. 26:11-19", secondLesson: "Rev. 15" } },
    "6": { morning: { psalms: "80", firstLesson: "Isa. 28:1-13", secondLesson: "Marc. 4:30ss" }, evening: { psalms: "65", firstLesson: "Isa. 28:14-22", secondLesson: "Rev. 18:1-10" } },
  },
  "3": {
    "0": { morning: { psalms: "22:23, 99", firstLesson: "Jer. 1:4-10, 17-19", secondLesson: "Luc. 1:57" }, evening: { psalms: "132, 134", firstLesson: "Nahum 1:3-8, 15", secondLesson: "2 Cor. 9:7-23" } },
    "1": { morning: { psalms: "84", firstLesson: "Isa. 29:1-4, 9-14", secondLesson: "Marc. 5:1-20" }, evening: { psalms: "75, 76", firstLesson: "Isa. 30:18-26", secondLesson: "Rev. 18:11" } },
    "2": { morning: { psalms: "90", firstLesson: "Isa. 30:8-17", secondLesson: "Marc. 5:21" }, evening: { psalms: "91", firstLesson: "Isa. 23:16-22", secondLesson: "Rev. 19:1-16" } },
    "3": { morning: { psalms: "1, 15", firstLesson: "Jer. 23:9-15", secondLesson: "Luc. 12:35-48" }, evening: { psalms: "92", firstLesson: "Jer. 23:15-22", secondLesson: "Mat. 28:16" } },
    "4": { morning: { psalms: "96", firstLesson: "Isa. 32:1-4, 15-20", secondLesson: "Marc. 6:1-6" }, evening: { psalms: "93, 98", firstLesson: "Isa. 33:1-1", secondLesson: "Rev. 20:1-6" } },
    "5": { morning: { psalms: "40:1-13", firstLesson: "Jer. 23:23-32", secondLesson: "2 Cor. 5:5" }, evening: { psalms: "51", firstLesson: "Jer. 26:1-7, 10-15", secondLesson: "2 Tim. 3:14–4:8" } },
    "6": { morning: { psalms: "42, 43", firstLesson: "Mal. 2:1-9", secondLesson: "Mat. 9:35–10:15" }, evening: { psalms: "103", firstLesson: "Mal. 3:1-6", secondLesson: "Heb. 4:14–5:10" } },
  },
  "4": {
    "0": { morning: { psalms: "80", firstLesson: "Isa. 40:1-11", secondLesson: "Luc. 3:1-17" }, evening: { psalms: "33", firstLesson: "Isa. 40:12-18, 21-31", secondLesson: "1 Tes. 3:7" } },
    "1": { morning: { psalms: "116", firstLesson: "Isa. 33:13", secondLesson: "Luc. 1:5-25" }, evening: { psalms: "104", firstLesson: "Isa. 35", secondLesson: "Rev. 20:7" } },
    "2": { morning: { psalms: "130, 131", firstLesson: "Isa. 25:1-9", secondLesson: "Luc. 1:26-38" }, evening: { psalms: "114, 122", firstLesson: "Gen. 49:1-2, 8-10", secondLesson: "Rev. 21:1-8" } },
    "3": { morning: { psalms: "132", firstLesson: "Zac. 8:1-8, 20-23", secondLesson: "Luc. 1:39-45" }, evening: { psalms: "139", firstLesson: "Hag. 2:1-9", secondLesson: "Rev. 21:9" } },
    "4": { morning: { psalms: "144", firstLesson: "2 Sam. 7:18", secondLesson: "Luc. 1:46-56" }, evening: { psalms: "145", firstLesson: "Sof. 3:14", secondLesson: "Rev. 22:1-9" } },
    "5": { morning: { psalms: "147", firstLesson: "1 Sam. 2:1b-10", secondLesson: "Luc. 1:57-66" }, evening: { psalms: "148, 150", firstLesson: "Jer. 23:5-8", secondLesson: "Rev. 22:10" } },
    "6": { morning: { psalms: "50", firstLesson: "Bar. 4:36–5:9", secondLesson: "Luc. 1:67" }, evening: { psalms: "85", firstLesson: "Zac. 2:10", secondLesson: "Mat. 1:18" } },
  },
};

// ===== NAVIDAD =====
const christmas: Record<string, LectionaryDay> = {
  "natividad": { morning: { psalms: "89:1-29", firstLesson: "Isa. 9:2-7", secondLesson: "Luc. 2:1-20" }, evening: { psalms: "45", firstLesson: "Miqu. 4:1-5 y 5:2-4", secondLesson: "1 Juan 4:7-14" } },
  "esteban": { morning: { psalms: "118", firstLesson: "2 Crón. 24:17-22", secondLesson: "Hech. 6" }, evening: { psalms: "30, 31:1-5", firstLesson: "Sab. 4:7-15", secondLesson: "Hech. 7:59–8:8" } },
  "juan": { morning: { psalms: "23, 24", firstLesson: "Éxod. 33:12", secondLesson: "Juan 13:20-26" }, evening: { psalms: "97", firstLesson: "Isa. 6:1-8", secondLesson: "Rev. 1" } },
  "inocentes": { morning: { psalms: "8, 26", firstLesson: "Jer. 31:1-6, 15-16", secondLesson: "Mat. 18:1-14" }, evening: { psalms: "19, 126", firstLesson: "Isa. 54:1-13", secondLesson: "Marc. 10:13-16, 23-31" } },
};

// ===== EPIFANÍA =====
const epiphany: Record<string, Record<string, LectionaryDay>> = {
  "1": {
    "0": { morning: { psalms: "72, 97", firstLesson: "Isa. 60:1-9", secondLesson: "Mat. 2:1-12" }, evening: { psalms: "84, 122", firstLesson: "1 Sam. 1:21", secondLesson: "Mat. 18:1-14" } },
    "1": { morning: { psalms: "1, 3", firstLesson: "Prov. 1:7-19", secondLesson: "Efes. 1" }, evening: { psalms: "4, 8", firstLesson: "Eze. 1:2-6, 24-28", secondLesson: "Juan 1:1-18" } },
    "2": { morning: { psalms: "5", firstLesson: "Prov. 2:1-9", secondLesson: "Efes. 2:1-10" }, evening: { psalms: "11, 12", firstLesson: "Eze. 2", secondLesson: "Juan 1:19-34" } },
    "3": { morning: { psalms: "7", firstLesson: "Prov. 3:1-7, 11-12", secondLesson: "Efes. 2:11" }, evening: { psalms: "13, 14", firstLesson: "Eze. 3:4-14", secondLesson: "Juan 1:35" } },
    "4": { morning: { psalms: "9", firstLesson: "Prov. 3:13-20", secondLesson: "Efes. 3:1-13" }, evening: { psalms: "15, 21", firstLesson: "Eze. 3:16-21", secondLesson: "Juan 2:1-12" } },
    "5": { morning: { psalms: "10", firstLesson: "Prov. 3:27", secondLesson: "Efes. 3:14" }, evening: { psalms: "6, 26", firstLesson: "Eze. 7:10-15, 23-27", secondLesson: "Juan 2:13" } },
    "6": { morning: { psalms: "16", firstLesson: "Prov. 4:7-18", secondLesson: "Efes. 4:1-16" }, evening: { psalms: "27", firstLesson: "Eze. 11:14-20", secondLesson: "Juan 3:1-13" } },
  },
  "2": {
    "0": { morning: { psalms: "118", firstLesson: "Zac. 8:1-8, 20-23", secondLesson: "1 Cor. 12:12-31a" }, evening: { psalms: "102:15, 117", firstLesson: "Eze. 45:1-15", secondLesson: "Rom. 9:14-26" } },
    "1": { morning: { psalms: "17", firstLesson: "Prov. 4:20", secondLesson: "Efes. 4:17" }, evening: { psalms: "18:1-19", firstLesson: "Eze. 12:21", secondLesson: "Juan 3:14-21" } },
    "2": { morning: { psalms: "23, 24", firstLesson: "Prov. 6:12-19", secondLesson: "Efes. 5:1-14" }, evening: { psalms: "25", firstLesson: "Eze. 13:1-9", secondLesson: "Juan 3:22" } },
    "3": { morning: { psalms: "28", firstLesson: "Prov. 8:1-11", secondLesson: "Efes. 5:15" }, evening: { psalms: "31", firstLesson: "Eze. 14:1-11", secondLesson: "Juan 4:1-14" } },
    "4": { morning: { psalms: "30", firstLesson: "Prov. 8:12-20", secondLesson: "Efes. 6" }, evening: { psalms: "33", firstLesson: "Eze. 14:12-20", secondLesson: "Juan 4:15-26" } },
    "5": { morning: { psalms: "32", firstLesson: "Prov. 8:22-35", secondLesson: "Filip. 1:1-11" }, evening: { psalms: "40:1-13", firstLesson: "Eze. 18:1-4, 19-23", secondLesson: "Juan 4:27-42" } },
    "6": { morning: { psalms: "36", firstLesson: "Prov. 9:1-6, 13-18", secondLesson: "Filip. 1:12-26" }, evening: { psalms: "34", firstLesson: "Eze. 18:26", secondLesson: "Juan 4:43" } },
  },
  "3": {
    "0": { morning: { psalms: "42, 43", firstLesson: "Isa. 41:8-10, 17-20", secondLesson: "Juan 4:1-14" }, evening: { psalms: "27, 134", firstLesson: "Isa. 56:1-8", secondLesson: "Juan 2:13" } },
    "1": { morning: { psalms: "39", firstLesson: "Prov. 10:12-14, 18-21", secondLesson: "Filip. 1:27–2:11" }, evening: { psalms: "37:1-24", firstLesson: "Eze. 27:1-5, 26-36", secondLesson: "Juan 5:1-15" } },
    "2": { morning: { psalms: "41", firstLesson: "Prov. 10:22-29", secondLesson: "Filip. 2:12-18" }, evening: { psalms: "46, 47", firstLesson: "Eze. 33:1-9", secondLesson: "Juan 5:15-29" } },
    "3": { morning: { psalms: "44", firstLesson: "Prov. 11:9-14, 24-30", secondLesson: "Filip. 2:19" }, evening: { psalms: "49", firstLesson: "Eze. 33:10-20", secondLesson: "Juan 5:30" } },
    "4": { morning: { psalms: "45", firstLesson: "Prov. 14:26", secondLesson: "Filip. 3:1-16" }, evening: { psalms: "50", firstLesson: "Eze. 33:23", secondLesson: "Juan 6:1-14" } },
    "5": { morning: { psalms: "51", firstLesson: "Prov. 15:16-23, 27-29", secondLesson: "Filip. 3:17–4:3" }, evening: { psalms: "54, 57", firstLesson: "Eze. 34:1-10", secondLesson: "Juan 6:15-29" } },
    "6": { morning: { psalms: "55", firstLesson: "Prov. 16:25", secondLesson: "Filip. 4:4" }, evening: { psalms: "29, 99", firstLesson: "Eze. 34:11-16", secondLesson: "Juan 6:30-40" } },
  },
  "4": {
    "0": { morning: { psalms: "66", firstLesson: "Isa. 61", secondLesson: "Luc. 4:16-32" }, evening: { psalms: "145", firstLesson: "Isa. 45:20", secondLesson: "Rom. 10" } },
    "1": { morning: { psalms: "56, 60:1-5", firstLesson: "Prov. 20:9-12, 17-22", secondLesson: "Col. 1:1-17" }, evening: { psalms: "65", firstLesson: "Eze. 34:25", secondLesson: "Juan 6:41-59" } },
    "2": { morning: { psalms: "61, 62", firstLesson: "Prov. 21:21", secondLesson: "Col. 1:18–2:5" }, evening: { psalms: "71", firstLesson: "Eze. 36:22-28", secondLesson: "Juan 6:60" } },
    "3": { morning: { psalms: "63, 64", firstLesson: "Prov. 22:1-6, 17-25", secondLesson: "Col. 2:6-19" }, evening: { psalms: "72", firstLesson: "Eze. 37:1-14", secondLesson: "Juan 7:1-13" } },
    "4": { morning: { psalms: "68:1-19", firstLesson: "Prov. 23:20-21, 29-35", secondLesson: "Col. 2:20–3:11" }, evening: { psalms: "73", firstLesson: "Eze. 37:21b", secondLesson: "Juan 7:14-24" } },
    "5": { morning: { psalms: "69:1-21, 30-37", firstLesson: "Prov. 24:23", secondLesson: "Col. 3:12-17" }, evening: { psalms: "75, 76", firstLesson: "Eze. 39:21", secondLesson: "Juan 7:25-36" } },
    "6": { morning: { psalms: "77", firstLesson: "Prov. 25:11-15, 17-22", secondLesson: "Col. 3:18–4:6" }, evening: { psalms: "19, 67", firstLesson: "Eze. 43:1-9", secondLesson: "Juan 7:37" } },
  },
  "5": {
    "0": { morning: { psalms: "15, 85", firstLesson: "Rut 1:1-17", secondLesson: "Col. 3:5-11" }, evening: { psalms: "21, 22:23", firstLesson: "Joel 3:9-15", secondLesson: "Mat. 13:36-52" } },
    "1": { morning: { psalms: "79", firstLesson: "Prov. 26:17", secondLesson: "1 Ped. 1:1-12" }, evening: { psalms: "81", firstLesson: "Isa. 14:3-11", secondLesson: "1 Tes. 1" } },
    "2": { morning: { psalms: "82, 101", firstLesson: "Prov. 27:1-6, 10-12", secondLesson: "1 Ped. 1:13" }, evening: { psalms: "90", firstLesson: "Isa. 14:12-20", secondLesson: "1 Tes. 2:1-13" } },
    "3": { morning: { psalms: "86", firstLesson: "Prov. 28:1-13", secondLesson: "1 Ped. 2:1-10" }, evening: { psalms: "91", firstLesson: "Isa. 22:1-5, 12-14", secondLesson: "1 Tes. 2:17–3:13" } },
    "4": { morning: { psalms: "89:1-18", firstLesson: "Prov. 29:11-25", secondLesson: "1 Ped. 2:11-17" }, evening: { psalms: "94", firstLesson: "Isa. 24:1-6, 10-16a", secondLesson: "1 Tes. 4:1-12" } },
    "5": { morning: { psalms: "92", firstLesson: "Prov. 30:4-9", secondLesson: "1 Ped. 2:18" }, evening: { psalms: "102", firstLesson: "Isa. 31", secondLesson: "1 Tes. 4:13" } },
    "6": { morning: { psalms: "97", firstLesson: "Prov. 31:10", secondLesson: "1 Ped. 3:1-12" }, evening: { psalms: "84, 122", firstLesson: "Isa. 47:1, 7-15", secondLesson: "1 Tes. 5:1-11" } },
  },
  "6": {
    "0": { morning: { psalms: "75, 138", firstLesson: "Isa. 2:6-19", secondLesson: "Mat. 25:14-29" }, evening: { psalms: "9", firstLesson: "Gen. 19:1-3, 12-17, 24-28", secondLesson: "Luc. 17:20" } },
    "1": { morning: { psalms: "99, 100", firstLesson: "Lam. 1:1-6", secondLesson: "1 Ped. 3:13" }, evening: { psalms: "103", firstLesson: "Sab. 1:1-7", secondLesson: "1 Tes. 5:12" } },
    "2": { morning: { psalms: "107:1-16", firstLesson: "Lam. 1:15", secondLesson: "1 Ped. 4:1-6" }, evening: { psalms: "104", firstLesson: "Sab. 6:1-11", secondLesson: "2 Tes. 1" } },
    "3": { morning: { psalms: "111, 112", firstLesson: "Lam. 2:1-10", secondLesson: "1 Ped. 4:7-11" }, evening: { psalms: "105", firstLesson: "Sab. 6:12-21", secondLesson: "2 Tes. 2:1-12" } },
    "4": { morning: { psalms: "115", firstLesson: "Lam. 4:1-6, 9", secondLesson: "1 Ped. 4:12" }, evening: { psalms: "113, 124", firstLesson: "Sab. 7:7-14", secondLesson: "2 Tes. 2:13–3:5" } },
    "5": { morning: { psalms: "106", firstLesson: "Lam. 4:11-20", secondLesson: "1 Ped. 5:1-7" }, evening: { psalms: "116", firstLesson: "Sab. 7:15-22a", secondLesson: "2 Tes. 3:6" } },
    "6": { morning: { psalms: "118", firstLesson: "Lam. 5", secondLesson: "1 Ped. 5:8" }, evening: { psalms: "85, 134", firstLesson: "Sab. 7:22–8:1", secondLesson: "Judas" } },
  },
};

// ===== SEPTUAGÉSIMA / SEXAGÉSIMA / QUINCUAGÉSIMA =====
const preLent: Record<string, Record<string, LectionaryDay>> = {
  "septuagesima": {
    "0": { morning: { psalms: "20, 121", firstLesson: "Jos. 1:1-19", secondLesson: "2 Tim. 2:1-13" }, evening: { psalms: "144", firstLesson: "1 Mac. 2:49-64", secondLesson: "1 Tim. 6:11-19" } },
    "1": { morning: { psalms: "123, 127", firstLesson: "Gen. 1:1-19", secondLesson: "Marc. 6:7-13" }, evening: { psalms: "126, 128, 131", firstLesson: "Amós 7:1-8 y 8:1-3", secondLesson: "Gal. 1:1-10" } },
    "2": { morning: { psalms: "135", firstLesson: "Gen. 1:20–2:3", secondLesson: "Marc. 6:14-29" }, evening: { psalms: "129, 130", firstLesson: "Amós 1:1-5, 13–2:3", secondLesson: "Gal. 1:11" } },
    "3": { morning: { psalms: "137:1-6, 140", firstLesson: "Gen. 2:4-9, 16-25", secondLesson: "Marc. 6:30-44" }, evening: { psalms: "132", firstLesson: "Amós 2:6", secondLesson: "Gal. 2:1-10" } },
    "4": { morning: { psalms: "141", firstLesson: "Gen. 3", secondLesson: "Marc. 6:45" }, evening: { psalms: "139", firstLesson: "Amós 3", secondLesson: "Gal. 2:11" } },
    "5": { morning: { psalms: "143", firstLesson: "Gen. 4:1-16", secondLesson: "Marc. 7:1-13" }, evening: { psalms: "142, 146", firstLesson: "Amós 4:4", secondLesson: "Gal. 3:1-9" } },
    "6": { morning: { psalms: "149", firstLesson: "Gen. 6:5-8, 13-22", secondLesson: "Marc. 7:14-23" }, evening: { psalms: "148, 150", firstLesson: "Amós 5:1-13", secondLesson: "Gal. 3:10-18" } },
  },
  "sexagesima": {
    "0": { morning: { psalms: "71", firstLesson: "Isa. 50:4-10", secondLesson: "2 Cor. 12:1-12" }, evening: { psalms: "147", firstLesson: "Eclés. 11:1-6", secondLesson: "Juan 4:31-38" } },
    "1": { morning: { psalms: "2, 3", firstLesson: "Gen. 7:1, 7-10, 17-23", secondLesson: "Marc. 7:24" }, evening: { psalms: "4, 8", firstLesson: "Amós 5:14-24", secondLesson: "Gal. 3:19" } },
    "2": { morning: { psalms: "5", firstLesson: "Gen. 8:6", secondLesson: "Marc. 8:11-26" }, evening: { psalms: "11, 12", firstLesson: "Amós 6:1-8", secondLesson: "Gal. 4:1-11" } },
    "3": { morning: { psalms: "7", firstLesson: "Gen. 9:8-17", secondLesson: "Marc. 8:27–9:1" }, evening: { psalms: "13, 14", firstLesson: "Amós 8:4-12", secondLesson: "Gal. 4:12-20" } },
    "4": { morning: { psalms: "9", firstLesson: "Gen. 11:1-9", secondLesson: "Marc. 9:2-13" }, evening: { psalms: "17", firstLesson: "Amós 9:1-10", secondLesson: "Gal. 4:21" } },
    "5": { morning: { psalms: "22", firstLesson: "Gen. 11:27–12:8", secondLesson: "Marc. 9:14-29" }, evening: { psalms: "6, 26", firstLesson: "Amós 7:10", secondLesson: "Gal. 5:1-12" } },
    "6": { morning: { psalms: "16", firstLesson: "Gen. 13:2, 5-18", secondLesson: "Marc. 9:30-37" }, evening: { psalms: "93, 98", firstLesson: "Oseas 4:1-2, 6-10", secondLesson: "Gal. 5:13" } },
  },
  "quinquagesima": {
    "0": { morning: { psalms: "103", firstLesson: "Sab. 7:7-14", secondLesson: "Juan 15:1-17" }, evening: { psalms: "119:33-48", firstLesson: "Lev. 19:1-2, 9-18", secondLesson: "1 Juan 4" } },
    "1": { morning: { psalms: "18:1-19", firstLesson: "Gen. 18:1-16", secondLesson: "Marc. 9:38" }, evening: { psalms: "20, 21:1-6", firstLesson: "Oseas 5:10–6:6", secondLesson: "Gal. 6:1-10" } },
    "2": { morning: { psalms: "18:20-34", firstLesson: "Gen. 18:20", secondLesson: "Marc. 10:1-16" }, evening: { psalms: "25", firstLesson: "Oseas 11:1-4 y 13:5-16a", secondLesson: "Gal. 6:11" } },
  },
};

// ===== CUARESMA =====
const lent: Record<string, Record<string, LectionaryDay>> = {
  "1": {
    "0": { morning: { psalms: "50", firstLesson: "Isa. 58", secondLesson: "Mat. 6:1-18" }, evening: { psalms: "15, 92", firstLesson: "Jer. 17:5-14", secondLesson: "1 Cor. 10:1-13" } },
    "1": { morning: { psalms: "36", firstLesson: "Gen. 24:1-27", secondLesson: "1 Cor. 3:1-17" }, evening: { psalms: "42, 43", firstLesson: "Jer. 3:19", secondLesson: "Juan 9:1-23" } },
    "2": { morning: { psalms: "37:1-24", firstLesson: "Gen. 24:28-38, 49-51, 58-67", secondLesson: "1 Cor. 3:18–4:5" }, evening: { psalms: "46, 47", firstLesson: "Jer. 4:1-9", secondLesson: "Juan 9:24" } },
    "3": { morning: { psalms: "26", firstLesson: "Eze. 2", secondLesson: "Mat. 9:1-13" }, evening: { psalms: "4, 16", firstLesson: "Eze. 3:16", secondLesson: "2 Cor. 4" } },
    "4": { morning: { psalms: "37:26", firstLesson: "Gen. 25:28", secondLesson: "1 Cor. 4:6" }, evening: { psalms: "49", firstLesson: "Jer. 4:11-22", secondLesson: "Juan 10:1-10" } },
    "5": { morning: { psalms: "95, 84", firstLesson: "Eze. 34:1-16", secondLesson: "Mat. 10:24-33, 37-42" }, evening: { psalms: "77", firstLesson: "Eze. 37:1-14", secondLesson: "1 Tim. 4" } },
    "6": { morning: { psalms: "101", firstLesson: "Eze. 34:17-25, 30-31", secondLesson: "2 Tim. 2:1-15" }, evening: { psalms: "19, 23", firstLesson: "Eze. 37:21b", secondLesson: "1 Tim. 6:6" } },
  },
  "2": {
    "0": { morning: { psalms: "86, 142", firstLesson: "1 Reyes 8:37-43", secondLesson: "Col. 3:12-17" }, evening: { psalms: "26, 119:1-16", firstLesson: "2 Sam. 12:1-10, 13-14", secondLesson: "1 Cor. 6:9" } },
    "1": { morning: { psalms: "39", firstLesson: "Gen. 27:1-29", secondLesson: "1 Cor. 5" }, evening: { psalms: "50", firstLesson: "Jer. 4:23", secondLesson: "Juan 10:11-21" } },
    "2": { morning: { psalms: "41", firstLesson: "Gen. 27:30-40", secondLesson: "1 Cor. 6:1-11" }, evening: { psalms: "51", firstLesson: "Jer. 5:1-9", secondLesson: "Juan 10:22-38" } },
    "3": { morning: { psalms: "56", firstLesson: "Gen. 27:46–28:4, 10-22", secondLesson: "1 Cor. 6:12" }, evening: { psalms: "65, 67", firstLesson: "Jer. 5:10-19", secondLesson: "Juan 11:1-16" } },
    "4": { morning: { psalms: "62", firstLesson: "Gen. 29:1-13, 18-20", secondLesson: "1 Cor. 7:1-17" }, evening: { psalms: "66", firstLesson: "Jer. 5:20", secondLesson: "Juan 11:17-27" } },
    "5": { morning: { psalms: "95, 54, 61", firstLesson: "Gen. 32:22-31", secondLesson: "1 Cor. 8" }, evening: { psalms: "69:1-21, 29-36", firstLesson: "Jer. 6:1-8", secondLesson: "Juan 11:28-44" } },
    "6": { morning: { psalms: "63", firstLesson: "Gen. 35:1-7, 16-20", secondLesson: "1 Cor. 9:1-14" }, evening: { psalms: "72", firstLesson: "Jer. 6:9-21", secondLesson: "Juan 11:45" } },
  },
  "3": {
    "0": { morning: { psalms: "25", firstLesson: "Deut. 6:1-9, 20-25", secondLesson: "1 Cor. 3" }, evening: { psalms: "119:113-128, 143", firstLesson: "Amós 5:4-15", secondLesson: "Gal. 5:16-24" } },
    "1": { morning: { psalms: "68:1-19", firstLesson: "Gen. 37:3-28, 36", secondLesson: "1 Cor. 9:15" }, evening: { psalms: "71", firstLesson: "Jer. 7:1-15", secondLesson: "Marc. 10:17-31" } },
    "2": { morning: { psalms: "74", firstLesson: "Gen. 40", secondLesson: "1 Cor. 10:1-13" }, evening: { psalms: "73", firstLesson: "Jer. 7:21-29", secondLesson: "Marc. 10:32-45" } },
    "3": { morning: { psalms: "75, 76", firstLesson: "Gen. 41:1a, 8, 14-24", secondLesson: "1 Cor. 10:14-22" }, evening: { psalms: "77", firstLesson: "Jer. 8:4-13", secondLesson: "Marc. 10:46" } },
    "4": { morning: { psalms: "85", firstLesson: "Gen. 41:25-40", secondLesson: "1 Cor. 10:23–11:1" }, evening: { psalms: "80", firstLesson: "Jer. 9:2-16", secondLesson: "Marc. 11:12-26" } },
    "5": { morning: { psalms: "95, 79", firstLesson: "Gen. 42:1-26, 29a, 35-38", secondLesson: "1 Cor. 11:17" }, evening: { psalms: "86", firstLesson: "Jer. 9:17-24", secondLesson: "Marc. 12:1-12" } },
    "6": { morning: { psalms: "89:1-18", firstLesson: "Gen. 43:1-5, 11-16, 26-34", secondLesson: "1 Cor. 12:1-11" }, evening: { psalms: "103", firstLesson: "Jer. 10:1-13", secondLesson: "Marc. 12:13-17" } },
  },
  "4": {
    "0": { morning: { psalms: "147", firstLesson: "Éxod. 16:4-15", secondLesson: "Juan 6:27-40" }, evening: { psalms: "116", firstLesson: "Isa. 55", secondLesson: "Juan 6:41-51" } },
    "1": { morning: { psalms: "90", firstLesson: "Gen. 44", secondLesson: "1 Cor. 12:12-31a" }, evening: { psalms: "91", firstLesson: "Jer. 13:15", secondLesson: "Marc. 12:18-27" } },
    "2": { morning: { psalms: "93, 96", firstLesson: "Gen. 45", secondLesson: "1 Cor. 12:31b–13:13" }, evening: { psalms: "92", firstLesson: "Jer. 14:1-10", secondLesson: "Marc. 12:28-37" } },
    "3": { morning: { psalms: "94", firstLesson: "Gen. 47:29-31 y 48:8-20", secondLesson: "1 Cor. 14:1-12" }, evening: { psalms: "97, 98", firstLesson: "Jer. 15:1-9", secondLesson: "Marc. 12:38" } },
    "4": { morning: { psalms: "104", firstLesson: "Gen. 49:33–50:26", secondLesson: "1 Cor. 14:13-25" }, evening: { psalms: "99, 100", firstLesson: "Jer. 15:10", secondLesson: "Marc. 13:1-13" } },
    "5": { morning: { psalms: "95, 102", firstLesson: "Éxod. 1:8-14, 22", secondLesson: "1 Cor. 14:26" }, evening: { psalms: "107", firstLesson: "Jer. 16:5-13", secondLesson: "Marc. 13:14-23" } },
    "6": { morning: { psalms: "108:1-6, 112", firstLesson: "Éxod. 2:1-22", secondLesson: "1 Cor. 15:1-11" }, evening: { psalms: "118", firstLesson: "Jer. 17:5-14", secondLesson: "Marc. 13:24" } },
  },
  "5": {
    "0": { morning: { psalms: "51", firstLesson: "Isa. 10-20", secondLesson: "1 Ped. 4:12" }, evening: { psalms: "42, 43", firstLesson: "Oseas 6:1-6", secondLesson: "Heb. 10:1-25" } },
    "1": { morning: { psalms: "119:1-16", firstLesson: "Éxod. 3:1-15", secondLesson: "1 Cor. 15:12-19" }, evening: { psalms: "119:17-32, 117", firstLesson: "Jer. 20:7-13", secondLesson: "Juan 12:1-11" } },
    "2": { morning: { psalms: "123, 127", firstLesson: "Éxod. 4:10-18, 27-31", secondLesson: "1 Cor. 15:20-34" }, evening: { psalms: "120, 121, 122", firstLesson: "Jer. 22:10-23", secondLesson: "Juan 12:12-19" } },
    "3": { morning: { psalms: "128, 129", firstLesson: "Éxod. 5:1-9, 19–6:1", secondLesson: "1 Cor. 15:35-49" }, evening: { psalms: "132", firstLesson: "Jer. 28:1-2, 10-17", secondLesson: "Juan 12:20-33" } },
    "4": { morning: { psalms: "144", firstLesson: "Éxod. 11:1-8", secondLesson: "1 Cor. 15:50" }, evening: { psalms: "133, 134, 137:1-6", firstLesson: "Jer. 30:12-17, 23-24", secondLesson: "Juan 12:34-43" } },
    "5": { morning: { psalms: "95, 141:1-4, 146", firstLesson: "Éxod. 12:21-28", secondLesson: "1 Cor. 16:1-14" }, evening: { psalms: "139", firstLesson: "Jer. 32:36-42", secondLesson: "Juan 12:44" } },
    "6": { morning: { psalms: "147", firstLesson: "Éxod. 12:29-39, 42", secondLesson: "1 Cor. 16:15" }, evening: { psalms: "145", firstLesson: "Jer. 33:1-9, 14-16", secondLesson: "Juan 13:1-17" } },
  },
};

// ===== SEMANA SANTA =====
const holyWeek: Record<string, LectionaryDay> = {
  "0": { morning: { psalms: "24, 97", firstLesson: "Zac. 9:9-12", secondLesson: "Marc. 11:1-11" }, evening: { psalms: "130, 138", firstLesson: "Jer. 8:9-15, 18–9:1", secondLesson: "1 Cor. 1:17" } },
  "1": { morning: { psalms: "71", firstLesson: "Isa. 42:1-7", secondLesson: "Juan 14:1-14" }, evening: { psalms: "42, 43", firstLesson: "Lam. 1:7-12", secondLesson: "Juan 14:15" } },
  "2": { morning: { psalms: "6, 12", firstLesson: "Oseas 14", secondLesson: "Juan 15:1-16" }, evening: { psalms: "51", firstLesson: "Lam. 2:10, 13-19", secondLesson: "Juan 15:17" } },
  "3": { morning: { psalms: "94", firstLesson: "Zac. 12:9-10 y 13:1, 7-9", secondLesson: "Juan 16:1-15" }, evening: { psalms: "74", firstLesson: "Lam. 3:1, 14-33", secondLesson: "Juan 16:16" } },
  "4": { morning: { psalms: "116", firstLesson: "Jer. 31:31-34", secondLesson: "Juan 13:18" }, evening: { psalms: "142, 143", firstLesson: "Lam. 3:40-58", secondLesson: "Juan 17" } },
  "5": { morning: { psalms: "22, 40:1-13, 54", firstLesson: "Gen. 22:1-18 o Sab. 2:1, 12-24", secondLesson: "Juan 18" }, evening: { psalms: "69:1-21, 88", firstLesson: "Isa. 52:13–53:12", secondLesson: "1 Ped. 2:11" } },
  "6": { morning: { psalms: "14, 16", firstLesson: "Job 14:1-14", secondLesson: "Juan 19:38 o Heb. 4" }, evening: { psalms: "27", firstLesson: "Job 19:21-27a", secondLesson: "Rom. 6:3-11" } },
};

// ===== PASCUA =====
const easter: Record<string, Record<string, LectionaryDay>> = {
  "0": { // Easter week (0 = Easter Day, then Mon-Sat)
    "0": { morning: { psalms: "93, 111", firstLesson: "Isa. 25:1-9", secondLesson: "Mat. 28:1-10, 16-20" }, evening: { psalms: "98, 114", firstLesson: "Isa. 51:9-16", secondLesson: "Luc. 24:13-35" } },
    "1": { morning: { psalms: "2", firstLesson: "Isa. 61:1-3, 10-11", secondLesson: "Luc. 24:1-12" }, evening: { psalms: "103", firstLesson: "Éxod. 15:1-13", secondLesson: "Juan 20:1-10" } },
    "2": { morning: { psalms: "30", firstLesson: "Dan. 12:1-4, 13", secondLesson: "1 Tes. 4:13" }, evening: { psalms: "115", firstLesson: "Isa. 30:18-21", secondLesson: "Juan 20:11-18" } },
    "3": { morning: { psalms: "97, 99", firstLesson: "Miq. 7:7-9, 18-20", secondLesson: "1 Tim. 6:11-19" }, evening: { psalms: "148", firstLesson: "Isa. 26:12-16, 19", secondLesson: "Juan 20:19-23" } },
    "4": { morning: { psalms: "149, 150", firstLesson: "Eze. 37:1-14", secondLesson: "Filip. 3:7" }, evening: { psalms: "147", firstLesson: "Isa. 52:1-10", secondLesson: "Juan 20:24" } },
    "5": { morning: { psalms: "124, 125, 126", firstLesson: "Isa. 65:17", secondLesson: "Rev. 1:4-18" }, evening: { psalms: "110, 114", firstLesson: "Sof. 3:14", secondLesson: "Juan 21:1-14" } },
    "6": { morning: { psalms: "145", firstLesson: "Isa. 25:1-9", secondLesson: "Rev. 7:9" }, evening: { psalms: "18:1-19", firstLesson: "Jer. 31:10-14", secondLesson: "Juan 21:15" } },
  },
  "1": {
    "0": { morning: { psalms: "66", firstLesson: "Sab. 2:23–3:9", secondLesson: "Rom. 1:1-12" }, evening: { psalms: "33", firstLesson: "Sof. 3:14", secondLesson: "Juan 20:19" } },
    "1": { morning: { psalms: "1, 3", firstLesson: "Éxod. 13:3-16", secondLesson: "Heb. 1" }, evening: { psalms: "4, 11", firstLesson: "Isa. 40:1-11", secondLesson: "1 Ped. 1:1-12" } },
    "2": { morning: { psalms: "5", firstLesson: "Éxod. 13:17–14:4", secondLesson: "Heb. 2:1-8" }, evening: { psalms: "15, 24", firstLesson: "Isa. 40:12-17", secondLesson: "1 Ped. 1:13" } },
    "3": { morning: { psalms: "22:23", firstLesson: "Éxod. 14:5-14, 19-21, 24-28, 30", secondLesson: "Heb. 2:9" }, evening: { psalms: "25", firstLesson: "Isa. 40:18, 21-31", secondLesson: "1 Ped. 2:1-10" } },
    "4": { morning: { psalms: "28", firstLesson: "Éxod. 15:20", secondLesson: "Heb. 3" }, evening: { psalms: "29, 46", firstLesson: "Isa. 42:1-9", secondLesson: "1 Ped. 2:11-17" } },
    "5": { morning: { psalms: "40:1-13", firstLesson: "Éxod. 16:1-7, 13b-15", secondLesson: "Heb. 4:1-13" }, evening: { psalms: "39", firstLesson: "Isa. 42:10-17", secondLesson: "1 Ped. 2:18" } },
    "6": { morning: { psalms: "42, 43", firstLesson: "Éxod. 17:1-7", secondLesson: "Heb. 4:14–5:14" }, evening: { psalms: "93, 111", firstLesson: "Isa. 43:1-7", secondLesson: "1 Ped. 3:1-12" } },
  },
  "2": {
    "0": { morning: { psalms: "23, 146", firstLesson: "Isa. 40:1-11", secondLesson: "Juan 10:1-10" }, evening: { psalms: "145", firstLesson: "Eze. 34:11-16, 30-31", secondLesson: "Juan 21:1-19" } },
    "1": { morning: { psalms: "49", firstLesson: "Éxod. 17:8", secondLesson: "Heb. 6:1-12" }, evening: { psalms: "47, 48", firstLesson: "Isa. 43:8-13", secondLesson: "1 Ped. 3:13" } },
    "2": { morning: { psalms: "50", firstLesson: "Éxod. 18:1-12", secondLesson: "Heb. 6:13" }, evening: { psalms: "61, 62", firstLesson: "Isa. 43:15-21 y 44:1-3", secondLesson: "1 Ped. 4:1-6" } },
    "3": { morning: { psalms: "63", firstLesson: "Éxod. 18:13", secondLesson: "Heb. 7:1-11" }, evening: { psalms: "65", firstLesson: "Isa. 44:6-8, 21-23", secondLesson: "1 Ped. 4:7-11" } },
    "4": { morning: { psalms: "66", firstLesson: "Éxod. 19:1-7, 16-20", secondLesson: "Heb. 7:12" }, evening: { psalms: "71", firstLesson: "Isa. 44:9-20", secondLesson: "1 Ped. 4:12" } },
    "5": { morning: { psalms: "51", firstLesson: "Éxod. 20:1-21", secondLesson: "Heb. 8" }, evening: { psalms: "73", firstLesson: "Isa. 44:24–45:4", secondLesson: "1 Ped. 5:1-7" } },
    "6": { morning: { psalms: "72", firstLesson: "Éxod. 24:1-11, 16-18", secondLesson: "Heb. 9:1-14" }, evening: { psalms: "33", firstLesson: "Isa. 45:5-12, 15-19", secondLesson: "1 Ped. 5:8" } },
  },
  "3": {
    "0": { morning: { psalms: "36:5, 138", firstLesson: "2 Sam. 12:15b-23", secondLesson: "Juan 14:1-14" }, evening: { psalms: "68:1-20", firstLesson: "Isa. 16:12-16, 19", secondLesson: "2 Cor. 5" } },
    "1": { morning: { psalms: "85", firstLesson: "Éxod. 25:1-11, 17-22", secondLesson: "Heb. 9:15" }, evening: { psalms: "77", firstLesson: "Isa. 45:20", secondLesson: "Efes. 1:1-14" } },
    "2": { morning: { psalms: "86", firstLesson: "Éxod. 28:1-4, 29-38", secondLesson: "Heb. 10:1-14" }, evening: { psalms: "84, 117", firstLesson: "Isa. 46:3-4, 9-13", secondLesson: "Efes. 1:15" } },
    "3": { morning: { psalms: "89:1-18", firstLesson: "Éxod. 32:1-7, 15-20", secondLesson: "Heb. 10:15-25" }, evening: { psalms: "90", firstLesson: "Isa. 48:12-21", secondLesson: "Efes. 2:1-10" } },
    "4": { morning: { psalms: "91", firstLesson: "Éxod. 32:21-24, 30-34", secondLesson: "Heb. 10:26" }, evening: { psalms: "97, 98", firstLesson: "Isa. 49:1-12", secondLesson: "Efes. 2:11" } },
    "5": { morning: { psalms: "94", firstLesson: "Éxod. 33:7", secondLesson: "Heb. 11:1-16" }, evening: { psalms: "103", firstLesson: "Isa. 49:13-23", secondLesson: "Efes. 3:1-12" } },
    "6": { morning: { psalms: "99, 100", firstLesson: "Éxod. 34:1-10, 29-35", secondLesson: "Heb. 11:17-31" }, evening: { psalms: "23, 30", firstLesson: "Isa. 50:4-10", secondLesson: "Efes. 3:13" } },
  },
  "4": {
    "0": { morning: { psalms: "116", firstLesson: "Job 19:21-27a", secondLesson: "Juan 12:44" }, evening: { psalms: "18:1-20", firstLesson: "Dan. 12:1-4, 13", secondLesson: "1 Tes. 4:13" } },
    "1": { morning: { psalms: "110, 114", firstLesson: "Núm. 10:29", secondLesson: "Heb. 11:32" }, evening: { psalms: "111, 113", firstLesson: "Isa. 51:1-11", secondLesson: "Efes. 4:1-16" } },
    "2": { morning: { psalms: "124, 126", firstLesson: "Núm. 11:4-6, 10-15, 23, 31-32", secondLesson: "Heb. 12:1-17" }, evening: { psalms: "121, 122", firstLesson: "Isa. 51:12-16", secondLesson: "Efes. 4:17" } },
    "3": { morning: { psalms: "128, 129", firstLesson: "Núm. 12", secondLesson: "Heb. 12:18" }, evening: { psalms: "135", firstLesson: "Isa. 52:1-2, 7-12", secondLesson: "Efes. 5:1-14" } },
    "4": { morning: { psalms: "132", firstLesson: "Núm. 13:17-26, 30-33", secondLesson: "Heb. 13:1-8" }, evening: { psalms: "145", firstLesson: "Isa. 54:1-10", secondLesson: "Efes. 5:15" } },
    "5": { morning: { psalms: "143", firstLesson: "Núm. 14:1-10", secondLesson: "Heb. 13:9-16" }, evening: { psalms: "130, 138", firstLesson: "Isa. 54:11", secondLesson: "Efes. 6:1-9" } },
    "6": { morning: { psalms: "146, 149", firstLesson: "Núm. 14:11-25", secondLesson: "Heb. 13:17" }, evening: { psalms: "148, 150", firstLesson: "Isa. 55", secondLesson: "Efes. 6:10" } },
  },
  "5": {
    "0": { morning: { psalms: "65, 67", firstLesson: "Eze. 34:25", secondLesson: "Luc. 11:1-13" }, evening: { psalms: "147", firstLesson: "Isa. 48:12-21", secondLesson: "Rev. 5" } },
  },
};

// ===== ASCENSIÓN Y PENTECOSTÉS =====
const ascensionPentecost: Record<string, LectionaryDay> = {
  "ascension": { morning: { psalms: "96", firstLesson: "Dan. 7:9-10, 13-14", secondLesson: "Efes. 4:1-16" }, evening: { psalms: "24, 47", firstLesson: "Isa. 33:5-6, 17, 20-22", secondLesson: "Heb. 4:14–5:10" } },
  "pentecostes": { morning: { psalms: "68 o 18:1-19", firstLesson: "Sab. 1:1-7", secondLesson: "Juan 4:19-26" }, evening: { psalms: "104", firstLesson: "Sab. 7:22–8:1", secondLesson: "Rom. 8:12-18" } },
  "trinidad": { morning: { psalms: "29, 99", firstLesson: "Isa. 6:1-8", secondLesson: "1 Ped. 1:1-12" }, evening: { psalms: "98, 100", firstLesson: "Eclco. 43:1-12, 27-33", secondLesson: "Efes. 4:1-16" } },
};

// ===== TRINIDAD (semanas después de la Trinidad) =====
const trinity: Record<string, Record<string, LectionaryDay>> = {
  "1": {
    "0": { morning: { psalms: "73", firstLesson: "Jer. 23:23-32", secondLesson: "Mat. 7:13-14, 21-29" }, evening: { psalms: "119:33-48", firstLesson: "Deut. 30:11", secondLesson: "Juan 13:1-17, 34-35" } },
    "1": { morning: { psalms: "28", firstLesson: "Núm. 22:2-14", secondLesson: "Luc. 2:21-40" }, evening: { psalms: "31", firstLesson: "Esdras 5:1-2, 6-17", secondLesson: "Hech. 9:1-19" } },
    "2": { morning: { psalms: "32", firstLesson: "Núm. 22:15-21, 36-40", secondLesson: "Luc. 2:41" }, evening: { psalms: "33", firstLesson: "Esdras 6:1-12", secondLesson: "Hech. 9:20-31" } },
    "3": { morning: { psalms: "37:1-24", firstLesson: "Núm. 22:41–23:12", secondLesson: "Luc. 3:1-22" }, evening: { psalms: "34", firstLesson: "Esdras 6:13-18", secondLesson: "Hech. 9:32" } },
    "4": { morning: { psalms: "37:26", firstLesson: "Núm. 23:13-26", secondLesson: "Luc. 4:1-13" }, evening: { psalms: "39", firstLesson: "Zac. 7:8", secondLesson: "Hech. 10:1-23" } },
    "5": { morning: { psalms: "40:1-13", firstLesson: "Núm. 23:27–24:13, 25", secondLesson: "Luc. 4:14-30" }, evening: { psalms: "41, 54", firstLesson: "Zac. 8:1-13", secondLesson: "Hech. 10:24-33" } },
    "6": { morning: { psalms: "44", firstLesson: "Deut. 34", secondLesson: "Luc. 4:31-41" }, evening: { psalms: "46, 47", firstLesson: "Zac. 8:14", secondLesson: "Hech. 10:34" } },
  },
  "2": {
    "0": { morning: { psalms: "15, 19", firstLesson: "Job 31:13-28", secondLesson: "1 Cor. 13" }, evening: { psalms: "112, 113", firstLesson: "1 Sam. 20:1-7, 12-42", secondLesson: "1 Ped. 1:17" } },
    "1": { morning: { psalms: "48", firstLesson: "Jos. 1", secondLesson: "Luc. 4:42–5:11" }, evening: { psalms: "42, 43", firstLesson: "Esdras 7:1, 6-16, 25-28", secondLesson: "Hech. 11:1-18" } },
    "2": { morning: { psalms: "49", firstLesson: "Jos. 3:1-6, 13-17", secondLesson: "Luc. 5:12-26" }, evening: { psalms: "50", firstLesson: "Esdras 8:15a, 21-23", secondLesson: "Hech. 11:19" } },
    "3": { morning: { psalms: "57", firstLesson: "Jos. 4:1-8", secondLesson: "Luc. 5:27" }, evening: { psalms: "61, 62", firstLesson: "Neh. 1", secondLesson: "Hech. 12:1-24" } },
    "4": { morning: { psalms: "63", firstLesson: "Jos. 6:1-7, 11, 14-20", secondLesson: "Luc. 6:1-11" }, evening: { psalms: "65", firstLesson: "Neh. 2:1-8", secondLesson: "Hech. 12:25–13:12" } },
    "5": { morning: { psalms: "71", firstLesson: "Jos. 14:6", secondLesson: "Luc. 6:12-26" }, evening: { psalms: "77", firstLesson: "Neh. 2:9", secondLesson: "Hech. 13:13-25" } },
    "6": { morning: { psalms: "73", firstLesson: "Jos. 23:1-3, 11-16", secondLesson: "Luc. 6:27-38" }, evening: { psalms: "66", firstLesson: "Neh. 4:6", secondLesson: "Hech. 13:26-43" } },
  },
  "3": {
    "0": { morning: { psalms: "145", firstLesson: "Jer. 31:1-14", secondLesson: "Mat. 9:9-13" }, evening: { psalms: "32, 36:5", firstLesson: "Jer. 23:1-8", secondLesson: "Luc. 19:2-10" } },
    "1": { morning: { psalms: "86", firstLesson: "Jue. 5:1-18", secondLesson: "Luc. 6:39" }, evening: { psalms: "84, 85", firstLesson: "Neh. 5:1-13", secondLesson: "Hech. 13:44–14:7" } },
    "2": { morning: { psalms: "89:1-18", firstLesson: "Jue. 5:19", secondLesson: "Luc. 7:1-10" }, evening: { psalms: "90", firstLesson: "Neh. 8:1-3, 5-6, 9-12", secondLesson: "Hech. 14:8-18" } },
    "3": { morning: { psalms: "92", firstLesson: "Jue. 6:1, 11-16, 33-35", secondLesson: "Luc. 7:11-17" }, evening: { psalms: "104", firstLesson: "Neh. 9:5-15", secondLesson: "Hech. 14:19" } },
    "4": { morning: { psalms: "94", firstLesson: "Jue. 7:1-8", secondLesson: "Luc. 7:18-35" }, evening: { psalms: "111, 114", firstLesson: "Neh. 9:32", secondLesson: "Hech. 15:1-12" } },
    "5": { morning: { psalms: "102", firstLesson: "Jue. 7:16", secondLesson: "Luc. 7:36" }, evening: { psalms: "116", firstLesson: "Neh. 13:15-22", secondLesson: "Hech. 15:13-21" } },
    "6": { morning: { psalms: "107:1-16", firstLesson: "Jue. 10:17, 11:29-40", secondLesson: "Luc. 8:1-15" }, evening: { psalms: "93, 99", firstLesson: "1 Mac. 1:1, 7-25", secondLesson: "Hech. 15:22-35" } },
  },
  "4": {
    "0": { morning: { psalms: "91", firstLesson: "Lam. 3:22-33", secondLesson: "Mat. 10:24-39" }, evening: { psalms: "75, 82", firstLesson: "Deut. 32:1-4, 34-39", secondLesson: "Rom. 2:1-16" } },
    "1": { morning: { psalms: "119:49-64", firstLesson: "Jue. 13:2-14, 24", secondLesson: "Luc. 8:16-25" }, evening: { psalms: "139", firstLesson: "Prov. 27:1-6", secondLesson: "Hech. 15:36" } },
    "2": { morning: { psalms: "123, 124", firstLesson: "Jue. 16:4-14", secondLesson: "Luc. 8:26-39" }, evening: { psalms: "125, 126", firstLesson: "Prov. 27:7-17", secondLesson: "Hech. 16:1-15" } },
    "3": { morning: { psalms: "125, 138", firstLesson: "Jue. 16:15-22", secondLesson: "Luc. 8:40" }, evening: { psalms: "128, 129", firstLesson: "Prov. 27:18-27", secondLesson: "Hech. 16:16-34" } },
    "4": { morning: { psalms: "136", firstLesson: "Jue. 16:23", secondLesson: "Luc. 9:1-17" }, evening: { psalms: "132, 133", firstLesson: "Prov. 28:1-13", secondLesson: "Hech. 16:35" } },
    "5": { morning: { psalms: "142, 143", firstLesson: "Rut 1:1-14", secondLesson: "Luc. 9:18-27" }, evening: { psalms: "144", firstLesson: "Prov. 28:14-28", secondLesson: "Hech. 17:1-15" } },
    "6": { morning: { psalms: "147", firstLesson: "Rut 1:15", secondLesson: "Luc. 9:28-45" }, evening: { psalms: "148, 149, 150", firstLesson: "Prov. 29:1-14", secondLesson: "Hech. 17:16-34" } },
  },
  "5": {
    "0": { morning: { psalms: "62, 63", firstLesson: "Eclés. 2:1-11, 18-23", secondLesson: "Mat. 19:16" }, evening: { psalms: "34", firstLesson: "Prov. 15:1-10, 26", secondLesson: "Stgo. 3" } },
    "1": { morning: { psalms: "11, 12", firstLesson: "Rut 2:1-13", secondLesson: "Luc. 9:46" }, evening: { psalms: "13, 14", firstLesson: "Prov. 30:1-9", secondLesson: "Hech. 18:1-17" } },
    "2": { morning: { psalms: "17", firstLesson: "Rut 2:14", secondLesson: "Luc. 10:1-24" }, evening: { psalms: "18:1-20", firstLesson: "Prov. 30:10-23", secondLesson: "Hech. 18:18" } },
    "3": { morning: { psalms: "20, 21:1-6", firstLesson: "Rut 3:1-13", secondLesson: "Luc. 10:25-37" }, evening: { psalms: "22", firstLesson: "Prov. 30:24-33", secondLesson: "Hech. 19:1-20" } },
    "4": { morning: { psalms: "25", firstLesson: "Rut 4:1-8", secondLesson: "Luc. 10:38-11:13" }, evening: { psalms: "27", firstLesson: "Prov. 31:10-31", secondLesson: "Hech. 19:21-41" } },
    "5": { morning: { psalms: "26", firstLesson: "Rut 4:9-17", secondLesson: "Luc. 11:14-28" }, evening: { psalms: "28, 29", firstLesson: "Eclés. 1:1-11", secondLesson: "Hech. 20:1-16" } },
    "6": { morning: { psalms: "28", firstLesson: "1 Sam. 1:1-11", secondLesson: "Luc. 11:29-36" }, evening: { psalms: "30, 31", firstLesson: "Eclés. 1:12-18", secondLesson: "Hech. 20:17-38" } },
  },
  "6": {
    "0": { morning: { psalms: "85", firstLesson: "2 Sam. 19:16-23", secondLesson: "Mat. 5:38" }, evening: { psalms: "16, 111", firstLesson: "Isa. 57:13b-19", secondLesson: "2 Tim. 2:7-13" } },
    "1": { morning: { psalms: "39", firstLesson: "1 Sam. 1:12-20", secondLesson: "Luc. 11:37" }, evening: { psalms: "41, 42", firstLesson: "Eclés. 2:1-11", secondLesson: "Hech. 21:1-16" } },
    "2": { morning: { psalms: "45", firstLesson: "1 Sam. 1:21-28, 2:11", secondLesson: "Luc. 12:1-12" }, evening: { psalms: "46, 47", firstLesson: "Eclés. 2:12-26", secondLesson: "Hech. 21:17-36" } },
    "3": { morning: { psalms: "56", firstLesson: "1 Sam. 2:18-26", secondLesson: "Luc. 12:13-21" }, evening: { psalms: "57, 58", firstLesson: "Eclés. 3:1-15", secondLesson: "Hech. 21:37–22:21" } },
    "4": { morning: { psalms: "65", firstLesson: "1 Sam. 3:1-18", secondLesson: "Luc. 12:22-34" }, evening: { psalms: "66, 67", firstLesson: "Eclés. 3:16–4:3", secondLesson: "Hech. 22:22–23:11" } },
    "5": { morning: { psalms: "69:1-21, 29-36", firstLesson: "1 Sam. 4:1b-11", secondLesson: "Luc. 12:35-48" }, evening: { psalms: "70, 71", firstLesson: "Eclés. 4:4-16", secondLesson: "Hech. 23:12-35" } },
    "6": { morning: { psalms: "72", firstLesson: "1 Sam. 4:12", secondLesson: "Luc. 12:49" }, evening: { psalms: "73", firstLesson: "Eclés. 5:1-12", secondLesson: "Hech. 24:1-23" } },
  },
  "7": {
    "0": { morning: { psalms: "18:1-20", firstLesson: "Oseas 14", secondLesson: "Rom. 6:12-18" }, evening: { psalms: "133, 134, 138", firstLesson: "Eclco. 6:5-17", secondLesson: "Juan 15:12" } },
    "1": { morning: { psalms: "75, 76", firstLesson: "1 Sam. 8:4", secondLesson: "Luc. 13:1-9" }, evening: { psalms: "77", firstLesson: "Eclés. 5:13-20", secondLesson: "Hech. 24:24–25:12" } },
    "2": { morning: { psalms: "77", firstLesson: "1 Sam. 9:1-10", secondLesson: "Luc. 13:10-21" }, evening: { psalms: "78:1-20", firstLesson: "Eclés. 6:1-12", secondLesson: "Hech. 25:13" } },
    "3": { morning: { psalms: "80", firstLesson: "1 Sam. 9:11-21", secondLesson: "Luc. 13:22" }, evening: { psalms: "82, 83", firstLesson: "Eclés. 7:1-14", secondLesson: "Hech. 26:1-23" } },
    "4": { morning: { psalms: "85", firstLesson: "1 Sam. 9:22", secondLesson: "Luc. 14:1-14" }, evening: { psalms: "84", firstLesson: "Eclés. 7:15-29", secondLesson: "Hech. 26:24" } },
    "5": { morning: { psalms: "86", firstLesson: "1 Sam. 10:1-11", secondLesson: "Luc. 14:15-24" }, evening: { psalms: "88", firstLesson: "Eclés. 8:1-13", secondLesson: "Hech. 27:1-26" } },
    "6": { morning: { psalms: "90", firstLesson: "1 Sam. 10:17", secondLesson: "Luc. 14:25" }, evening: { psalms: "91", firstLesson: "Eclés. 8:14–9:10", secondLesson: "Hech. 27:27" } },
  },
  "8": {
    "0": { morning: { psalms: "119:33-48", firstLesson: "Eclco. 1:18-27", secondLesson: "Juan 7:14-23" }, evening: { psalms: "25", firstLesson: "Eclco. 6:22", secondLesson: "Luc. 10:38" } },
    "1": { morning: { psalms: "104", firstLesson: "1 Sam. 11:1-13", secondLesson: "Luc. 15:1-10" }, evening: { psalms: "105:1-22", firstLesson: "Eclés. 9:11-18", secondLesson: "Hech. 28:1-16" } },
    "2": { morning: { psalms: "111, 114", firstLesson: "1 Sam. 11:14-12:5", secondLesson: "Luc. 15:11" }, evening: { psalms: "112, 113", firstLesson: "Eclés. 10:1-11", secondLesson: "Hech. 28:17" } },
    "3": { morning: { psalms: "119:81-96", firstLesson: "1 Sam. 12:19", secondLesson: "Luc. 16:1-18" }, evening: { psalms: "119:97-112", firstLesson: "Eclés. 10:12-20", secondLesson: "Rom. 1:1-17" } },
    "4": { morning: { psalms: "128, 129", firstLesson: "1 Sam. 15:1-9", secondLesson: "Luc. 16:19" }, evening: { psalms: "130, 131", firstLesson: "Eclés. 11:1-8", secondLesson: "Rom. 1:18" } },
    "5": { morning: { psalms: "139", firstLesson: "1 Sam. 15:19-23", secondLesson: "Luc. 17:1-10" }, evening: { psalms: "140, 141", firstLesson: "Eclés. 11:9–12:8", secondLesson: "Rom. 2:1-16" } },
    "6": { morning: { psalms: "145", firstLesson: "1 Sam. 15:24-34", secondLesson: "Luc. 17:11-19" }, evening: { psalms: "146, 147", firstLesson: "Eclés. 12:9-14", secondLesson: "Rom. 2:17" } },
  },
  "9": {
    "0": { morning: { psalms: "115", firstLesson: "Eze. 14:1-11", secondLesson: "1 Tes. 4:1-12" }, evening: { psalms: "51", firstLesson: "Lam. 3:40-58", secondLesson: "Luc. 15:11" } },
    "1": { morning: { psalms: "2, 3", firstLesson: "1 Sam. 16:1-13", secondLesson: "Luc. 17:20" }, evening: { psalms: "4, 8", firstLesson: "1 Rey. 1:1-10", secondLesson: "Rom. 3:1-20" } },
    "2": { morning: { psalms: "5", firstLesson: "1 Sam. 16:14", secondLesson: "Luc. 18:1-14" }, evening: { psalms: "6, 7", firstLesson: "1 Rey. 1:11-31", secondLesson: "Rom. 3:21" } },
    "3": { morning: { psalms: "9", firstLesson: "1 Sam. 17:1-11", secondLesson: "Luc. 18:15-30" }, evening: { psalms: "10", firstLesson: "1 Rey. 1:32-40", secondLesson: "Rom. 4:1-12" } },
    "4": { morning: { psalms: "10", firstLesson: "1 Sam. 17:17-27", secondLesson: "Luc. 18:31" }, evening: { psalms: "15, 16", firstLesson: "1 Rey. 1:41-53", secondLesson: "Rom. 4:13" } },
    "5": { morning: { psalms: "22", firstLesson: "1 Sam. 17:28-40", secondLesson: "Luc. 19:1-10" }, evening: { psalms: "24, 25", firstLesson: "1 Rey. 2:1-12", secondLesson: "Rom. 5:1-11" } },
    "6": { morning: { psalms: "18:1-19", firstLesson: "1 Sam. 17:41-51", secondLesson: "Luc. 19:11-28" }, evening: { psalms: "19, 20", firstLesson: "1 Rey. 2:13-25", secondLesson: "Rom. 5:12" } },
  },
  "10": {
    "0": { morning: { psalms: "145", firstLesson: "Eclco. 1:1-10", secondLesson: "Juan 8:25-36" }, evening: { psalms: "42, 43", firstLesson: "Lam. 1:1-12", secondLesson: "Luc. 19:41" } },
    "1": { morning: { psalms: "40:1-13", firstLesson: "1 Sam. 18:1-9", secondLesson: "Luc. 19:29-40" }, evening: { psalms: "41", firstLesson: "1 Rey. 3:5-15", secondLesson: "Rom. 6:1-14" } },
    "2": { morning: { psalms: "41", firstLesson: "1 Sam. 20:1-7, 12-23", secondLesson: "Luc. 19:47-20:8" }, evening: { psalms: "44", firstLesson: "1 Rey. 3:16-28", secondLesson: "Rom. 6:15" } },
    "3": { morning: { psalms: "44", firstLesson: "1 Sam. 20:24-39", secondLesson: "Luc. 20:9-26" }, evening: { psalms: "49", firstLesson: "1 Rey. 4:29", secondLesson: "Rom. 7:1-12" } },
    "4": { morning: { psalms: "49", firstLesson: "1 Sam. 22:6", secondLesson: "Luc. 20:27-40" }, evening: { psalms: "50", firstLesson: "1 Rey. 5:1-12", secondLesson: "Rom. 7:13" } },
    "5": { morning: { psalms: "51", firstLesson: "1 Sam. 23:7-18", secondLesson: "Luc. 20:41-21:4" }, evening: { psalms: "56, 57", firstLesson: "1 Rey. 6:1-14", secondLesson: "Rom. 8:1-11" } },
    "6": { morning: { psalms: "66", firstLesson: "1 Sam. 28:3-19", secondLesson: "Luc. 21:5-19" }, evening: { psalms: "62, 63", firstLesson: "1 Rey. 6:23-30", secondLesson: "Rom. 8:12-17" } },
  },
  "11": {
    "0": { morning: { psalms: "124, 125", firstLesson: "Isa. 26:12-16, 19", secondLesson: "Rom. 8:26" }, evening: { psalms: "68 o 123, 142", firstLesson: "Eclco. 35:10-19", secondLesson: "Marc. 12:38" } },
    "1": { morning: { psalms: "71", firstLesson: "1 Sam. 31", secondLesson: "Luc. 21:20" }, evening: { psalms: "72", firstLesson: "1 Rey. 8:1-11", secondLesson: "Rom. 8:18-30" } },
    "2": { morning: { psalms: "73", firstLesson: "2 Sam. 1:1-16", secondLesson: "Luc. 22:1-13" }, evening: { psalms: "74", firstLesson: "1 Rey. 8:22-30", secondLesson: "Rom. 8:31" } },
    "3": { morning: { psalms: "87, 101", firstLesson: "2 Sam. 1:17", secondLesson: "Luc. 22:14-30" }, evening: { psalms: "89:1-18", firstLesson: "1 Rey. 8:54-61", secondLesson: "Rom. 9:1-18" } },
    "4": { morning: { psalms: "92", firstLesson: "2 Sam. 4:1, 5, 7-12", secondLesson: "Luc. 22:31-46" }, evening: { psalms: "93, 94", firstLesson: "1 Rey. 9:1-9", secondLesson: "Rom. 9:19" } },
    "5": { morning: { psalms: "94", firstLesson: "2 Sam. 5:1-10", secondLesson: "Luc. 22:47-62" }, evening: { psalms: "96, 97", firstLesson: "1 Rey. 10:1-13", secondLesson: "Rom. 10:1-13" } },
    "6": { morning: { psalms: "96", firstLesson: "2 Sam. 6:1-11", secondLesson: "Luc. 22:63-23:12" }, evening: { psalms: "98, 99", firstLesson: "1 Rey. 10:14-25", secondLesson: "Rom. 10:14" } },
  },
};

// 30-day psalm cycle from LOC 1928
function get30DayPsalms(day: number, period: "morning" | "evening"): string {
  const cycle: Record<string, { m: string; e: string }> = {
    "1": { m: "1, 2, 3, 4, 5", e: "6, 7, 8" },
    "2": { m: "9, 10, 11", e: "12, 13, 14" },
    "3": { m: "15, 16, 17", e: "18" },
    "4": { m: "19, 20, 21", e: "22, 23" },
    "5": { m: "24, 25, 26", e: "27, 28, 29" },
    "6": { m: "30, 31", e: "32, 33, 34" },
    "7": { m: "35, 36", e: "37" },
    "8": { m: "38, 39, 40", e: "41, 42, 43" },
    "9": { m: "44, 45, 46", e: "47, 48, 49" },
    "10": { m: "50, 51, 52", e: "53, 54, 55" },
    "11": { m: "56, 57, 58", e: "59, 60, 61" },
    "12": { m: "62, 63, 64", e: "65, 66, 67" },
    "13": { m: "68", e: "69, 70" },
    "14": { m: "71, 72", e: "73, 74" },
    "15": { m: "75, 76, 77", e: "78" },
    "16": { m: "79, 80, 81", e: "82, 83, 84, 85" },
    "17": { m: "86, 87, 88", e: "89" },
    "18": { m: "90, 91, 92", e: "93, 94" },
    "19": { m: "95, 96, 97", e: "98, 99, 100, 101" },
    "20": { m: "102, 103", e: "104" },
    "21": { m: "105", e: "106" },
    "22": { m: "107", e: "108, 109" },
    "23": { m: "110, 111, 112, 113", e: "114, 115" },
    "24": { m: "116, 117, 118", e: "119:1-32" },
    "25": { m: "119:33-72", e: "119:73-104" },
    "26": { m: "119:105-144", e: "119:145-176" },
    "27": { m: "120, 121, 122, 123, 124, 125", e: "126, 127, 128, 129, 130, 131" },
    "28": { m: "132, 133, 134, 135", e: "136, 137, 138" },
    "29": { m: "139, 140, 141", e: "142, 143" },
    "30": { m: "144, 145, 146", e: "147, 148, 149, 150" },
  };
  const d = day <= 30 ? day.toString() : "30";
  const entry = cycle[d];
  return period === "morning" ? entry.m : entry.e;
}

// ===== MAIN LOOKUP FUNCTION =====
export function getLectionary(date: Date): LectionaryDay {
  const year = date.getFullYear();
  const easterDate = calculateEaster(year);
  const adventStart = getAdventStart(year);
  const christmas25 = new Date(year, 11, 25);
  const daysDiff = daysBetween(date, easterDate);

  // ===== ADVIENTO =====
  if (date >= adventStart && date < christmas25) {
    const daysSinceAdvent = Math.floor((date.getTime() - adventStart.getTime()) / (1000 * 60 * 60 * 24));
    const week = Math.floor(daysSinceAdvent / 7) + 1;
    const dayOfWeek = date.getDay().toString();
    const weekData = advent[week.toString()];
    if (weekData && weekData[dayOfWeek]) {
      return weekData[dayOfWeek];
    }
  }

  // ===== NAVIDAD (25-28 dic) =====
  if (date.getMonth() === 11 && date.getDate() === 25) return christmas["natividad"];
  if (date.getMonth() === 11 && date.getDate() === 26) return christmas["esteban"];
  if (date.getMonth() === 11 && date.getDate() === 27) return christmas["juan"];
  if (date.getMonth() === 11 && date.getDate() === 28) return christmas["inocentes"];

  // ===== EPIFANÍA (semanas después de Epifanía) =====
  const epiphanyDate = new Date(year, 0, 6);
  if (date.getMonth() === 0 && date.getDate() >= 7) {
    // Calculate which Sunday after Epiphany
    const daysAfterEpiphany = daysBetween(date, epiphanyDate);
    const weekAfterEpiphany = Math.floor(daysAfterEpiphany / 7) + 1;
    const dayOfWeek = date.getDay().toString();
    if (weekAfterEpiphany <= 6) {
      const weekData = epiphany[weekAfterEpiphany.toString()];
      if (weekData && weekData[dayOfWeek]) {
        return weekData[dayOfWeek];
      }
    }
  }
  // Feb-March Epiphany continuation
  if (date.getMonth() >= 1 && daysDiff < -63) {
    const daysAfterEpiphany = daysBetween(date, epiphanyDate);
    const weekAfterEpiphany = Math.floor(daysAfterEpiphany / 7) + 1;
    const dayOfWeek = date.getDay().toString();
    if (weekAfterEpiphany <= 6) {
      const weekData = epiphany[weekAfterEpiphany.toString()];
      if (weekData && weekData[dayOfWeek]) {
        return weekData[dayOfWeek];
      }
    }
  }

  // ===== SEPTUAGÉSIMA (-63 a -56 days before Easter) =====
  if (daysDiff >= -63 && daysDiff < -56) {
    const dayOfWeek = date.getDay().toString();
    if (preLent["septuagesima"][dayOfWeek]) return preLent["septuagesima"][dayOfWeek];
  }

  // ===== SEXAGÉSIMA (-56 a -49) =====
  if (daysDiff >= -56 && daysDiff < -49) {
    const dayOfWeek = date.getDay().toString();
    if (preLent["sexagesima"][dayOfWeek]) return preLent["sexagesima"][dayOfWeek];
  }

  // ===== QUINCUAGÉSIMA (-49 a -46) =====
  if (daysDiff >= -49 && daysDiff < -46) {
    const dayOfWeek = date.getDay().toString();
    if (preLent["quinquagesima"][dayOfWeek]) return preLent["quinquagesima"][dayOfWeek];
  }

  // ===== CUARESMA (Ash Wednesday is -46, Lent 1 Sunday is -42) =====
  if (daysDiff >= -46 && daysDiff < -7) {
    // Ash Wednesday
    if (daysDiff === -46) {
      return {
        morning: { psalms: "32, 143", firstLesson: "Isa. 58:1-12", secondLesson: "Heb. 12:1-14" },
        evening: { psalms: "102, 130", firstLesson: "Jonás 3 y 4", secondLesson: "Luc. 15:10" },
      };
    }
    // Calculate Lent week (1-5)
    const daysIntoLent = daysDiff + 46; // 0 = Ash Wed
    const lentWeek = Math.floor((daysIntoLent + 3) / 7); // Week 1 starts at first Sunday
    const dayOfWeek = date.getDay().toString();
    if (lentWeek >= 1 && lentWeek <= 5) {
      const weekData = lent[lentWeek.toString()];
      if (weekData && weekData[dayOfWeek]) {
        return weekData[dayOfWeek];
      }
    }
  }

  // ===== SEMANA SANTA (-7 a -1) =====
  if (daysDiff >= -7 && daysDiff < 0) {
    const dayOfWeek = date.getDay().toString();
    if (holyWeek[dayOfWeek]) return holyWeek[dayOfWeek];
  }

  // ===== PASCUA (0 = Easter Day) =====
  if (daysDiff === 0) {
    return easter["0"]["0"];
  }

  // ===== TIEMPO PASCUAL (1-49 days after Easter) =====
  if (daysDiff > 0 && daysDiff < 50) {
    // Easter week (days 1-6)
    if (daysDiff <= 6) {
      const dayOfWeek = date.getDay().toString();
      if (easter["0"][dayOfWeek]) return easter["0"][dayOfWeek];
    }
    // Easter weeks 1-4
    const easterWeek = Math.floor((daysDiff - 1) / 7) + 1;
    const dayOfWeek = date.getDay().toString();
    if (easterWeek <= 4) {
      const weekData = easter[easterWeek.toString()];
      if (weekData && weekData[dayOfWeek]) {
        return weekData[dayOfWeek];
      }
    }
    // Week 5 (Rogation/Ascension area)
    if (easter["5"] && easter["5"][dayOfWeek]) {
      return easter["5"][dayOfWeek];
    }
    // Ascension Day (39 days after Easter)
    if (daysDiff === 39) return ascensionPentecost["ascension"];
  }

  // ===== PENTECOSTÉS (49 days after Easter) =====
  if (daysDiff === 49) return ascensionPentecost["pentecostes"];

  // ===== DOMINGO DE LA TRINIDAD (56 days after Easter) =====
  if (daysDiff === 56) return ascensionPentecost["trinidad"];

  // ===== TRINIDAD (after Trinity Sunday) =====
  if (daysDiff > 56) {
    const trinityWeek = Math.floor((daysDiff - 56) / 7);
    const dayOfWeek = date.getDay().toString();
    if (trinityWeek >= 1 && trinityWeek <= 11) {
      const weekData = trinity[trinityWeek.toString()];
      if (weekData && weekData[dayOfWeek]) {
        return weekData[dayOfWeek];
      }
    }
  }

  // ===== FALLBACK: 30-day psalm cycle =====
  const day = date.getDate();
  const morningPsalms = get30DayPsalms(day, "morning");
  const eveningPsalms = get30DayPsalms(day, "evening");

  return {
    morning: { psalms: morningPsalms, firstLesson: "Consultar Leccionario", secondLesson: "Consultar Leccionario" },
    evening: { psalms: eveningPsalms, firstLesson: "Consultar Leccionario", secondLesson: "Consultar Leccionario" },
  };
}

// ===== HELPER FUNCTIONS =====
function calculateEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day);
}

function getAdventStart(year: number): Date {
  const christmas = new Date(year, 11, 25);
  const dayOfWeek = christmas.getDay();
  const daysBack = dayOfWeek === 0 ? 28 : dayOfWeek + 21;
  return new Date(year, 11, 25 - daysBack);
}

function daysBetween(date: Date, reference: Date): number {
  const d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const d2 = new Date(reference.getFullYear(), reference.getMonth(), reference.getDate());
  return Math.round((d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24));
}
