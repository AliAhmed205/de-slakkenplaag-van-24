const data = {
  labels: ['2022', '2023', '2024'],
  datasets: [{
    data: [100, 75, 125], // Aantal posts per jaar
    backgroundColor: [
      'rgba(230, 255, 89, .4)', // Kleur voor 2022
      'rgba(0, 255, 60, .4)', // Kleur voor 2023
      'rgba(0, 255, 119, .5)'  // Kleur voor 2024
    ],
    borderColor: [
      'rgba(230, 255, 89, 1)',
      'rgba(0, 255, 60, 1)',
      'rgba(0, 255, 119, 1)'
    ],
    borderWidth: 2 // Voeg een randbreedte toe voor betere zichtbaarheid
  }]
}

// Configuratie van de pie chart
const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    layout: {
      padding: {
        top: 0,    // Witruimte boven de pie chart
        bottom: 50, // Witruimte onder de pie chart
        left: 50,   // Witruimte links van de pie chart
        right: 50   // Witruimte rechts van de pie chart
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: {
            size: 20
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const total = dataset.data.reduce((a, b) => a + b, 0);
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const percentage = Math.round((currentValue / total) * 100);
            return `${tooltipItem.label}: ${percentage}% (${currentValue} posts)`;
          }
        }
      }
    },
  },
};

// Render de pie chart
const myPieChart = new Chart(
  document.getElementById('myPieChart'),
  config
)