const fs = require('fs');
const ttf2js = require('ttf2woff'); // конвертируем в woff (можно и через ttf2js)

const ttf = fs.readFileSync('font/cirillicolda_bold.ttf'); // твой ttf
const base64 = ttf.toString('base64');

fs.writeFileSync('font.js', `
jsPDF.API.addFileToVFS("cirillicolda.ttf", "${base64}");
jsPDF.API.addFont("cirillicolda.ttf", "cirillicolda", "normal");
`);
console.log("font.js создан!");
