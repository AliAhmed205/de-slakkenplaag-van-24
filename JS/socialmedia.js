const instagramPostsData = [
  1, 1, 2,
  1, 2, 4, 1, 1,
  2, 3, 1, 3, 0, 0, 3,
  2, 5, 5, 3, 3, 3, 4, 5,
  4, 9, 5, 6, 4, 12, 4, 1
]

const instagramPhotos = [
  ['./IMG/insta-posts/MEI-1A.jpg'], // 1 mei
  ['./IMG/insta-posts/MEI-2A.jpg'], // 2 mei
  ['./IMG/insta-posts/MEI-3A.jpg', './IMG/insta-posts/MEI-3B.jpg'], // 3 mei
  ['./IMG/insta-posts/MEI-4A.png'], // 4 mei
  ['./IMG/insta-posts/MEI-5A.jpg', './IMG/insta-posts/MEI-5B.jpg'], // 4 mei
  ['./IMG/insta-posts/MEI-6A.png', './IMG/insta-posts/MEI-6B.png', './IMG/insta-posts/MEI-6C.png', './IMG/insta-posts/MEI-6D.png', ], // 6 mei
  ['./IMG/insta-posts/MEI-7.jpg'], // 7 mei
  ['./IMG/insta-posts/MEI-8.jpg'], // 8 mei
  ['./IMG/insta-posts/MEI-9A.png', './IMG/insta-posts/MEI-9B.png'], // 9 mei
  ['./IMG/insta-posts/MEI-10C.png', './IMG/insta-posts/MEI-10B.png', './IMG/insta-posts/MEI-10A.jpg'], // 10 mei
  ['./IMG/insta-posts/MEI-11.jpg'], // 11 Mei
  ['./IMG/insta-posts/MEI-12A.jpg', './IMG/insta-posts/MEI-12B.jpg', './IMG/insta-posts/MEI-12C.jpg'], // 12 Mei
  [], // 13 Mei
  [], // 14 Mei
  ['./IMG/insta-posts/MEI-15A.jpg', './IMG/insta-posts/MEI-15B.jpg', './IMG/insta-posts/MEI-15C.jpg'], // 15 mei
  ['./IMG/insta-posts/16-mei.jpg', './IMG/insta-posts/16a-mei.jpg'], // 16 mei
  ['./IMG/insta-posts/MEI-17A.jpg', './IMG/insta-posts/MEI-17B.jpg', './IMG/insta-posts/MEI-17C.jpg', './IMG/insta-posts/MEI-17D.jpg', './IMG/insta-posts/MEI-17E.jpg', ],
  ['./IMG/insta-posts/MEI-18A.jpg', './IMG/insta-posts/MEI-18B.jpg', './IMG/insta-posts/MEI-18C.jpg', './IMG/insta-posts/MEI-18D.jpg', './IMG/insta-posts/MEI-18E.jpg', ],
  ['./IMG/insta-posts/MEI-19C.jpg', './IMG/insta-posts/MEI-19B.jpg', './IMG/insta-posts/MEI-19A.jpg'], // 19 mei
  ['./IMG/insta-posts/MEI-20A.jpg', './IMG/insta-posts/MEI-20B.jpg', './IMG/insta-posts/MEI-20C.jpg'], // 20 Mei
  ['./IMG/insta-posts/MEI-21A.jpg', './IMG/insta-posts/MEI-21B.jpg', './IMG/insta-posts/MEI-21C.jpg'], // 21 Mei
  ['./IMG/insta-posts/MEI-22A.jpg', './IMG/insta-posts/MEI-22B.jpg', './IMG/insta-posts/MEI-22C.jpg', './IMG/insta-posts/MEI-22D.jpg'], // 22 mei
  ['./IMG/insta-posts/MEI-23A.jpg', './IMG/insta-posts/MEI-23B.jpg', './IMG/insta-posts/MEI-23C.jpg', './IMG/insta-posts/MEI-23D.jpg', './IMG/insta-posts/MEI-23E.jpg'], // 23 mei
  ['./IMG/insta-posts/MEI-24A.jpg', './IMG/insta-posts/MEI-24B.jpg', './IMG/insta-posts/MEI-24C.jpg', './IMG/insta-posts/MEI-24D.jpg'], // 24 mei
  ['./IMG/insta-posts/MEI-25A.jpg', './IMG/insta-posts/MEI-25B.jpg', './IMG/insta-posts/MEI-25C.jpg', './IMG/insta-posts/MEI-25D.jpg', './IMG/insta-posts/MEI-25E.jpg', './IMG/insta-posts/MEI-25F.jpg', './IMG/insta-posts/MEI-25G.jpg', './IMG/insta-posts/MEI-25H.jpg', './IMG/insta-posts/MEI-25I.jpg'], // 25 mei
  ['./IMG/insta-posts/MEI-26A.jpg', './IMG/insta-posts/MEI-26B.jpg', './IMG/insta-posts/MEI-26C.jpg', './IMG/insta-posts/MEI-26D.jpg', './IMG/insta-posts/MEI-26E.jpg'], // 23 mei
  ['./IMG/insta-posts/MEI-27A.jpg', './IMG/insta-posts/MEI-27B.jpg', './IMG/insta-posts/MEI-27C.jpg', './IMG/insta-posts/MEI-27D.jpg', './IMG/insta-posts/MEI-27E.jpg', './IMG/insta-posts/MEI-27F.jpg', ],
  ['./IMG/insta-posts/MEI-28A.jpg', './IMG/insta-posts/MEI-28B.jpg', './IMG/insta-posts/MEI-28C.jpg', './IMG/insta-posts/MEI-28D.jpg'], // 22 mei
  ['./IMG/insta-posts/MEI-29A.jpg', './IMG/insta-posts/MEI-29B.jpg', './IMG/insta-posts/MEI-29C.jpg', './IMG/insta-posts/MEI-29D.jpg', './IMG/insta-posts/MEI-29E.jpg'], // 22 mei
  ['./IMG/insta-posts/MEI-30A.jpg','./IMG/insta-posts/MEI-30B.jpg','./IMG/insta-posts/MEI-30C.jpg','./IMG/insta-posts/MEI-30D.jpg', ], // 30 mei
  ['./IMG/insta-posts/MEI-31A.jpg']
]

const ctxInsta = document.getElementById('myChartInsta').getContext('2d')

const myChartInsta = new Chart(ctxInsta, {
  type: 'bar',
  data: {
    labels: Array.from({ length: 31 }, (_, i) => `${i + 1} mei`), // Labels van 1 tot 31
    datasets: [{
      label: 'Instagram Posts',
      data: instagramPostsData,
      backgroundColor: '#beff6f87', // Standaard kleur van de staven
      hoverBackgroundColor: '#beff6f', // Kleur bij hover
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Kleur van de Y-as labels
        },
      },
      x: {
        ticks: {
          color: 'white', // Kleur van de X-as labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Kleur van de dataset labels
        },
      },
    },
    hover: {
      onHover: function (event, activeElements) {
        if (activeElements.length) {
          const hoveredIndex = activeElements[0].index
          myChartInsta.data.datasets[0].backgroundColor = myChartInsta.data.datasets[0].data.map((_, index) => {
            return index === hoveredIndex ? '#beff6f87' : 'rgba(190, 255, 111, 0.2)' // Hovered: normale kleur, overig: lage opacity
          })
        } else {
          myChartInsta.data.datasets[0].backgroundColor = '#beff6f87' // Reset naar standaard kleur
        }
        myChartInsta.update() // Grafiek updaten
      }
    }
  },
})

myChartInsta.canvas.addEventListener('mousemove', function (event) {
  const activePoints = myChartInsta.getElementsAtEventForMode(event, 'nearest', {
    intersect: false
  }, true)
  if (activePoints.length) {
    const hoveredIndex = activePoints[0].index // Het index van de aangeklikte staaf
    displayPhotos(hoveredIndex + 1) // Voeg +1 toe voor de juiste dag
  }
})

function displayPhotos(day) {
  const photoContainer = document.getElementById('photoContainer')
  photoContainer.innerHTML = '' // Maak de container leeg

  const photosForDay = instagramPhotos[day - 1] // Foto's gebaseerd op Instagram data
  for (let i = 0; i < photosForDay.length; i++) {
    const photo = document.createElement('div')
    photo.className = 'photo'

    photo.innerHTML = `<img src="${photosForDay[i]}" alt="Foto ${i + 1}">`
    photoContainer.appendChild(photo)
  }
}

function highlightFirstBar() {
  const hoveredIndex = 0 // Index voor 1 mei
  myChartInsta.data.datasets[0].backgroundColor = myChartInsta.data.datasets[0].data.map((_, index) => {
    return index === hoveredIndex ? '#beff6f87' : 'rgba(190, 255, 111, 0.2)'
  })
  myChartInsta.update() // Grafiek updaten
}

displayPhotos(1)
highlightFirstBar()