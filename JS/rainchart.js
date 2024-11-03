const labels = [
  '01/05', '02/05', '03/05', '04/05', '05/05',
  '06/05', '07/05', '08/05', '09/05', '10/05',
  '11/05', '12/05', '13/05', '14/05', '15/05',
  '16/05', '17/05', '18/05', '19/05', '20/05',
  '21/05', '22/05', '23/05', '24/05', '25/05',
  '26/05', '27/05', '28/05', '29/05', '30/05',
  '31/05'
]

const temperatuurData = [
  19, 18, 11, 11, 12,
  14, 15, 13, 13, 16,
  17, 20, 19, 16, 16,
  16, 15, 17, 17, 15,
  17, 15, 15, 14, 15,
  15, 14, 14, 14, 14,
  15
]

const neerslagData = [
  20, 15, 4, 5, null,
  null, null, null, null, null,
  null, null, null, 3, 8,
  null, 4, null, null, 5,
  23, 4, null, 7, 3,
  7, 6, 11, 16, null,
  3
]

const neerslagDataClean = neerslagData.map((value) => value === null ? 0 : value)

// configRainuratie van de grafiek
const configRain = {
  type: 'bar', // Staafgrafiek voor neerslag
  data: {
      labels: labels,
      datasets: [
          {
              label: 'Hoeveelheid Neerslag (mm)',
              data: neerslagDataClean,
              backgroundColor: '#87cefa4e',
              borderColor: '#87cefa',
              borderWidth: 1,
              yAxisID: 'y',
              type: 'bar',
          },
          {
              label: 'Gem. Temperatuur (°C)',
              data: temperatuurData,
              fill: false,
              borderColor: 'rgba(255, 99, 132, 1)',
              tension: 0.1,
              yAxisID: 'y1',
              type: 'line',
          }
      ]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false, // Dit is belangrijk om het aspect ratio te negeren
      plugins: {
          title: {
              display: true,
              text: 'Wat was de hoeveelheid neerslag in millimeters die in mei 2024 viel?', // De titel van de grafiek
              font: {
                  size: 24, // Grotere lettergrootte
                  weight: 'bold', // Dikkere tekst
                  family: 'Kalam'
              },
              color: '#beff6f' // Kleur van de titel
          },
          legend: {
              labels: {
                  color: 'white' // Kleur van de labels voor neerslag en temperatuur
              }
          }
      },
      scales: {
          y: {
              beginAtZero: true,
              position: 'left',
              title: {
                  display: true,
                  text: 'Hoeveelheid Neerslag (mm)',
                  color: '#beff6f', // Kleur van de y-as titel
                  font: {
                      size: 16 // Grotere lettergrootte
                  }
              },
              ticks: {
                color: "#fff"
              }
          },
          y1: {
              beginAtZero: true,
              position: 'right',
              grid: {
                  drawOnChartArea: false
              },
              title: {
                  display: true,
                  text: 'Gem. Temperatuur (°C)',
                  color: '#beff6f', 
                  font: {
                      size: 16 // Grotere lettergrootte
                  }
              },
              ticks: {
                color: '#fff'
              }
          },
          x: {
            ticks: {
              color: "#fff"
            }
          }
      }
  }
}

// Creëer de grafiek
const myChart = new Chart(
  document.getElementById('myrainChart'),
  configRain
)
