const words = [
  { text: "Wat eten slakken", size: 50 }, // Hoofdtitel
  { text: "Sla", size: 30 },
  { text: "Komkommer", size: 25 },
  { text: "Spinazie", size: 25 },
  { text: "Wortel", size: 20 },
  { text: "Courgette", size: 20 },
  { text: "Paprika", size: 20 },
  { text: "Broccoli", size: 15 },
  { text: "Boerenkool", size: 15 },
  { text: "Venkel", size: 15 },
  { text: "Knoflook", size: 10 },
  { text: "Uien", size: 10 },
  { text: "Peulen", size: 10 },
  { text: "Snijbiet", size: 10 },
  { text: "Aardbeien", size: 30 },
  { text: "Perziken", size: 25 },
  { text: "Kiwi", size: 20 },
  { text: "Bananen", size: 20 },
  { text: "Appels", size: 15 },
  { text: "Peren", size: 15 },
  { text: "Druiven", size: 15 },
  { text: "Kersen", size: 10 },
  { text: "Abrikozen", size: 10 },
  { text: "Ananas", size: 10 },
  { text: "Frambozen", size: 10 }
]

// Word cloud genereren
WordCloud(document.getElementById('wordCloud'), {
  list: words.map(word => [word.text, word.size]), // Woorden en hun grootte
  gridSize: 18, // Grootte van het raster
  weightFactor: 10, // Factor voor de grootte van de woorden
  color: () => '#' + Math.floor(Math.random() * 16777215).toString(16), // Willekeurige kleuren
  backgroundColor: '#f0f0f0', // Achtergrondkleur
  rotateRatio: 0.5, // Hoeveelheid rotatie
  rotationSteps: 2, // Aantal stappen voor rotatie
  shape: 'circle', // Vorm van de word cloud
  ellipticity: 1, // Ellipticiteit van de vormen
})