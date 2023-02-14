//ecris mois un script pour extraire du text d'un fichier pdf
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

// Path: script.js
//ecris mois un script pour extraire du text d'un fichier pdf
const pdfjsLib = require('pdfjs-dist');

// Charger le fichier PDF
const loadingTask = pdfjsLib.getDocument('./assets/monpdf.pdf');
console.log(loadingTask,'loadingTask');

loadingTask.promise.then(function(pdf) {
  // Récupérer la première page du document PDF
  return pdf.getPage(1);
}).then(function(page) {
  // Extraire le texte de la page
  return page.getTextContent();
}).then(function(textContent) {
  // Concaténer le texte de toutes les lignes pour obtenir le texte complet de la page
  const text = textContent.items.map(item => item.str).join(' ');
  console.log(text,'je suis la ');
});


// Charger le fichier PDF
// const file = fs.readFileSync('./assets/monpdf.pdf');
// console.log(file,'file'
// );
// let pdfDoc = null;

// async function loadPdf() {
//   pdfDoc = await PDFDocument.load(file);
//   console.log(pdfDoc,'pdfDoc');
//   console.log(pdfDoc,'pdfDoc');
//   // Extraire le texte de chaque page du document
//   const pages = pdfDoc.copyPages();
//   const texts = [];
//   for (const page of pages) {
//     const content = page.extractTextContent();
//     const text = content.items.map(item => item.str).join('');
//     texts.push(text);
//   }
//   const text = texts.join(' ');
//   console.log(text);
// }
// loadPdf();

// // const pdfDoc = await PDFDocument.load(file);

// // Concaténer le texte de toutes les pages pour obtenir le texte complet du document




