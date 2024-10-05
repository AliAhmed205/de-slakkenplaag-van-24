// const rainfallData = [20, 15, 4, 5, 0,
//   0, 0, 0, 0, 0,
//   0, 0, 0, 3, 8,
//   0, 4, 0, 0, 5,
//   23, 4, 0, 7, 3,
//   7, 6, 11, 16, 0,
//   3];

// const instagramPostsData = [1, 1, 2,
//   1, 2, 4, 1, 1,
//   2, 3, 1, 3, 0, 0, 3,
//   2, 5, 5, 3, 3, 3, 4, 5,
//   4, 9, 5, 6, 4, 12, 4, 1
// ];

// const instagramPhotos = [
//   ['./IMG/insta-posts/MEI-1A.jpg'], // 1 mei
//   ['./IMG/insta-posts/MEI-2A.jpg'], // 1 mei
//   ['./IMG/insta-posts/MEI-3A.jpg', './IMG/insta-posts/MEI-3B.jpg'], // 3 mei
//   [], // 4 mei
//   [], // 5 mei
//   [], // 6 mei
//   [], // 7 mei
//   [], // 8 mei
//   [], // 9 mei
//   ['./IMG/insta-posts/10-mei.jpg'], // 10 mei
//   [], [], [], [], [], // 11 - 15 mei
//   ['./IMG/insta-posts/16-mei.jpg', './IMG/insta-posts/16a-mei.jpg'], // 16 mei
//   [], ['./IMG/insta-posts/18-mei.jpg'], // 18 mei
//   ['./IMG/insta-posts/19-mei.jpg'], // 19 mei
//   [],
//   [],
//    ['./IMG/insta-posts/22-mei.jpg', './IMG/insta-posts/22a-mei.jpg'], // 22 mei
//   ['./IMG/insta-posts/23-mei.jpg'], // 23 mei
//   ['./IMG/insta-posts/24-mei.jpg', './IMG/insta-posts/24a-mei.jpg'], // 24 mei
//   ['./IMG/insta-posts/25-mei.jpg'], // 25 mei
//   ['./IMG/insta-posts/26-mei.jpg', './IMG/insta-posts/26a-mei.jpg', './IMG/insta-posts/26b-mei.jpg', './IMG/insta-posts/26c-mei.jpg'], // 26 mei
//   [], ['./IMG/insta-posts/28-mei.jpg'], // 28 mei
//   ['./IMG/insta-posts/29-mei.jpg', './IMG/insta-posts/29a-mei.jpg', './IMG/insta-posts/29c-mei.jpg', './IMG/insta-posts/22a-mei.jpg', './IMG/insta-posts/1-mei.jpg', './IMG/insta-posts/3-mei.jpg', './IMG/insta-posts/29-mei.jpg', './IMG/insta-posts/29a-mei.jpg', './IMG/insta-posts/29b-mei.jpg'], // 29 mei
//   ['./IMG/insta-posts/30-mei.jpg'], // 30 mei
//   [], // 31 mei (leeg)
// ];

// const ctxInsta = document.getElementById('myChartInsta').getContext('2d');
// const ctxRain = document.getElementById('myChartRain').getContext('2d');

// // Grafiek voor Instagram Posts
// const myChartInsta = new Chart(ctxInsta, {
//   type: 'bar',
//   data: {
//     labels: Array.from({ length: 31 }, (_, i) => `${i + 1} mei`), // Labels van 1 tot 31
//     datasets: [{
//       label: 'Instagram Posts',
//       data: instagramPostsData,
//       backgroundColor: '#beff6f87',
//     }],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: 'white', // Kleur van de Y-as labels
//         },
//       },
//       x: {
//         ticks: {
//           color: 'white', // Kleur van de X-as labels
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         labels: {
//           color: 'white', // Kleur van de dataset labels
//         },
//       },
//     },
//   },
// });

// const myChartRain = new Chart(ctxRain, {
//   type: 'bar',
//   data: {
//     labels: Array.from({ length: 31 }, (_, i) => `${i + 1} mei`), // Labels van 1 tot 31
//     datasets: [{
//       label: 'Regenval (mm)',
//       data: rainfallData,
//       backgroundColor: 'rgba(75, 192, 192, 0.5)',
//     }],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: 'white', // Kleur van de Y-as labels
//         },
//       },
//       x: {
//         ticks: {
//           color: 'white', // Kleur van de X-as labels
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         labels: {
//           color: 'white', // Kleur van de dataset labels
//         },
//       },
//     },
//   },
// });


// // Interactiviteit toevoegen voor de Instagram Posts grafiek
// myChartInsta.canvas.addEventListener('mousemove', function (event) {
//   const activePoints = myChartInsta.getElementsAtEventForMode(event, 'nearest', { intersect: false }, true);
//   if (activePoints.length) {
//     const hoveredIndex = activePoints[0].index; // Het index van de aangeklikte staaf
//     displayPhotos(hoveredIndex + 1); // Voeg +1 toe voor de juiste dag
//   }
// });

// function displayPhotos(day) {
//   const photoContainer = document.getElementById('photoContainer');
//   photoContainer.innerHTML = ''; // Maak de container leeg

//   // Foto's voor de geselecteerde dag weergeven
//   const photosForDay = instagramPhotos[day - 1]; // Foto's gebaseerd op Instagram data
//   for (let i = 0; i < photosForDay.length; i++) {
//     const photo = document.createElement('div');
//     photo.className = 'photo';

//     // Laad de echte afbeelding uit de insta-posts map
//     photo.innerHTML = `<img src="${photosForDay[i]}" alt="Foto ${i + 1}">`;
//     photoContainer.appendChild(photo);
//   }
// }