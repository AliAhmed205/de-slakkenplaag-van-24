import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function startCounter() {
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

let slakkenPopulatieChart;

export function startSlakkenChartAnimation() {
  const slakkenChartCanvas = document.getElementById('slakkenPopulatieChart').getContext('2d');
  const jaren = [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2024];
  const populatie = [100, 150, 180, 250, 300, 400, 550, 700];

  if (slakkenPopulatieChart) {
    slakkenPopulatieChart.destroy(); 
  }

  // Create a new chart
  slakkenPopulatieChart = new Chart(slakkenChartCanvas, {
    type: 'bar',
    data: {
      labels: jaren,
      datasets: [{
        label: 'Slakkenpopulatie',
        data: [], // Initialize with an empty array
        borderColor: '#fdff6f',
        backgroundColor: '#fdff6f84',
        borderWidth: 2,
      }]
    },
    options: {
      scales: {
        x: {
          type: 'category',
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

  function updateChartStepByStep() {
    let i = 0;
    function addDataPoint() {
      if (i < populatie.length) {
        slakkenPopulatieChart.data.datasets[0].data.push(populatie[i]);
        slakkenPopulatieChart.update();
        i++;
        setTimeout(addDataPoint, 100);
      }
    }
    addDataPoint();
  }

  slakkenPopulatieChart.data.datasets[0].data = []; 
  updateChartStepByStep();
}
