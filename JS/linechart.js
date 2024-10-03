document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const startBtn = document.getElementById('startBtn'); // Haal de startknop op

  // Observer voor de secties
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const visibleSection = entry.target;

        const animatableElements = visibleSection.querySelectorAll('.dashboard-item, .question, .slakkenPopulatieChart, .counter');

        animatableElements.forEach(item => {
          item.classList.add('visible');
        });

        if (visibleSection.querySelector('#slakkenPopulatieChart')) {
          startSlakkenChartAnimation();
        }

        if (visibleSection.querySelector('#counter')) {
          startCounter();
        }

        // Stop observeren van deze sectie nadat animatie gestart is
        observer.unobserve(visibleSection);
      }
    });
  }, { threshold: 0.5 }); // Trigger wanneer 50% van de sectie zichtbaar is

  // Observing alle secties
  sections.forEach(section => {
    observer.observe(section);
  });

  // Functie voor de telleranimatie
  function startCounter() {
    let count = 0;
    const counterElement = document.getElementById("counter");
    const target = 140;
    const interval = setInterval(function() {
      if (count < target) {
        count++;
        counterElement.textContent = count;
      } else {
        clearInterval(interval);
      }
    }, 10);
  }

  // Functie om de Chart.js grafiek te initialiseren en animeren
  function startSlakkenChartAnimation() {
    const slakkenChartCanvas = document.getElementById('slakkenPopulatieChart').getContext('2d');
    const jaren = [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2024];
    const populatie = [100, 150, 180, 250, 300, 400, 550, 700];

    const slakkenPopulatieChart = new Chart(slakkenChartCanvas, {
      type: 'bar',
      data: {
        labels: jaren,
        datasets: [{
          label: 'Slakkenpopulatie',
          data: [], // Leeg beginnen
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
    });

    // Functie om de staven een voor een te tonen
    function updateChartStepByStep() {
      let i = 0;

      function addDataPoint() {
        if (i < populatie.length) {
          // Voeg de volgende populatie toe
          slakkenPopulatieChart.data.datasets[0].data.push(populatie[i]);
          slakkenPopulatieChart.update();
          i++;
          setTimeout(addDataPoint, 100); // Voeg elke 100 ms een nieuwe staaf toe
        }
      }
      addDataPoint();
    }

    // Start de animatie van de grafiek
    updateChartStepByStep();
  }

  // Event listener voor de startknop
  startBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Voorkom de standaard actie van de knop
    const targetSection = document.querySelector('#question'); // Zoek de doelsectie
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Voer de smooth scroll uit
  });
});
