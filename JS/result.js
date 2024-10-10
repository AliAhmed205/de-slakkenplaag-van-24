const chartElement = document.getElementById('observationsChart')
const vorstElement = document.getElementById('vorstChart')
const feitBtn = document.querySelector('.btn-container button:first-of-type')
const fabelBtn = document.querySelector('.btn-container button:nth-of-type(2)')
const conclusionEl = document.querySelector('.conclusie-container')
const fabelEl = document.querySelector('.fabel-container')

feitBtn.addEventListener('click', () => {
  fabelEl.classList.remove('show')
  
  conclusionEl.classList.add('show')
  conclusionEl.scrollIntoView({
    behavior: 'smooth'
  })
})

fabelBtn.addEventListener('click', () => {
  conclusionEl.classList.remove('show')
  
  fabelEl.classList.add('show')
  fabelEl.scrollIntoView({
    behavior: 'smooth'
  })
})


if (chartElement) {
  const obsCtx = chartElement.getContext('2d')
  const observationsChart = new Chart(obsCtx, {
    type: 'line',
    data: {
      labels: [
        '2009', '2010', '2011', '2012', '2013',
        '2014', '2015', '2016', '2017', '2018',
        '2019', '2020', '2021', '2022', '2023',
        '2024'
      ],
      datasets: [{
          label: 'Waarnemingen',
          data: [
            0, 0, 3, 6, 0,
            29, 27, 22, 25, 38,
            5, 14, 59, 29, 61,
            566
          ],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          tension: 0.4
        },
        {
          label: 'Individuen',
          data: [
            0, 0, 103, 12, 0,
            36, 554, 33, 37, 987,
            14, 30, 94, 639, 71,
            1261
          ],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          tension: 0.4
        },
        {
          label: 'Waarnemers',
          data: [
            0, 0, 2, 6, 0,
            11, 14, 18, 19, 22,
            5, 12, 51, 14, 56,
            478
          ],
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          fill: false,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Jaar',
            color: 'white'
          },
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Aantal',
            color: 'white'
          },
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        },
        title: {
          display: true,
          text: 'Toename van de Spaanse wegslak sinds 2009', // De titel van de grafiek
          font: {
            size: 20, // Grotere lettergrootte
            weight: 'normal', // Dikkere tekst
          },
          color: 'white' // Kleur van de titel
        }
      }
    }
  })
}

if (vorstElement) {
  const vorstCtx = vorstElement.getContext('2d')
  const vorstChart = new Chart(vorstCtx, {
    type: 'line',
    data: {
      labels: [
        '2000', '2001', '2002', '2003', '2004',
        '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014',
        '2015', '2016', '2017', '2018', '2019',
        '2020', '2021', '2022', '2023', '2024'
      ],
      datasets: [{
          label: 'Gemiddelde Temperatuur (°C)',
          data: [
            9.0, 9.1, 9.3, 9.2, 9.0,
            8.8, 9.4, 9.3, 9.6, 9.5,
            9.0, 9.1, 9.3, 9.2, 9.4,
            9.5, 9.6, 9.8, 10.0, 10.2,
            10.3, 10.5, 10.6, 10.7, 10.8
          ],
          borderColor: 'orangered',
          backgroundColor: 'orangered',
          fill: false,
          tension: 0.4
        },
        {
          label: 'Aantal Dagen met Vorst',
          data: [
            30, 25, 20, 22, 28,
            26, 18, 15, 10, 12,
            8, 6, 5, 7, 9,
            10, 8, 6, 4, 3,
            5, 3, 2, 1, 0
          ],
          borderColor: '#00fff7',
          backgroundColor: '#00fff7',
          fill: false,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Jaar',
            color: 'white'
          },
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Waarde',
            color: 'white'
          },
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        },
        title: {
          display: true,
          text: 'Afname van vorst sinds 2000', // De titel van de grafiek
          font: {
            size: 20, // Grotere lettergrootte
            weight: 'normal', // Dikkere tekst
          },
          color: 'white' // Kleur van de titel
        }
      }
    }
  })
}