document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section')
  const startBtn = document.getElementById('startBtn') 

  const isMobile = window.innerWidth < 768
  
  const observerOptions = {
    threshold: isMobile ? 0.2 : 0.5
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const visibleSection = entry.target

        const animatableElements = visibleSection.querySelectorAll('.dashboard-item, .question, .slakkenPopulatieChart, .counter')

        animatableElements.forEach(item => {
          item.classList.add('visible')
        })

        if (visibleSection.querySelector('#slakkenPopulatieChart')) {
          startSlakkenChartAnimation()
        }

        if (visibleSection.querySelector('#counter')) {
          startCounter()
        }

        observer.unobserve(visibleSection)
      }
    })
  }, observerOptions)

  sections.forEach(section => {
    observer.observe(section)
  })

  function startCounter() {
    let count = 0
    const counterElement = document.getElementById("counter")
    const target = 140
    const interval = setInterval(function() {
      if (count < target) {
        count++
        counterElement.textContent = count
      } else {
        clearInterval(interval)
      }
    }, 10)
  }

  // Functie om de slakken populatie animatie te starten
  function startSlakkenChartAnimation() {
    const slakkenChartCanvas = document.getElementById('slakkenPopulatieChart').getContext('2d')
    const jaren = [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2024]
    const populatie = [100, 150, 180, 250, 300, 400, 550, 700]

    const slakkenPopulatieChart = new Chart(slakkenChartCanvas, {
      type: 'bar',
      data: {
        labels: jaren,
        datasets: [{
          label: 'Slakkenpopulatie',
          data: [], 
          borderColor: '#fdff6f',
          backgroundColor: '#fdff6f84',
          borderWidth: 2,
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Jaar',
              color: 'white',
            },
            ticks: {
              color: 'white'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Populatie (in duizendtallen)',
              color: 'white'
            },
            ticks: {
              color: 'white'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        }
      }
    })

    function updateChartStepByStep() {
      let i = 0

      function addDataPoint() {
        if (i < populatie.length) {
          slakkenPopulatieChart.data.datasets[0].data.push(populatie[i])
          slakkenPopulatieChart.update()
          i++
          setTimeout(addDataPoint, 100) 
        }
      }
      addDataPoint()
    }

    updateChartStepByStep()
  }

  startBtn.addEventListener('click', function (event) {
    event.preventDefault() 
    const targetSection = document.querySelector('#question')
    targetSection.scrollIntoView({ behavior: 'smooth' })
  })
})
