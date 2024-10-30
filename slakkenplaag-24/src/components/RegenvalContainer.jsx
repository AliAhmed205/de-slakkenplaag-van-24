import React, { useEffect } from "react";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const RegenvalContainer = () => {
  useEffect(() => {
    const labels = [
      '01/05', '02/05', '03/05', '04/05', '05/05',
      '06/05', '07/05', '08/05', '09/05', '10/05',
      '11/05', '12/05', '13/05', '14/05', '15/05',
      '16/05', '17/05', '18/05', '19/05', '20/05',
      '21/05', '22/05', '23/05', '24/05', '25/05',
      '26/05', '27/05', '28/05', '29/05', '30/05',
      '31/05'
    ];

    const temperatuurData = [
      19, 18, 11, 11, 12,
      14, 15, 13, 13, 16,
      17, 20, 19, 16, 16,
      16, 15, 17, 17, 15,
      17, 15, 15, 14, 15,
      15, 14, 14, 14, 14,
      15
    ];

    const neerslagData = [
      20, 15, 4, 5, null,
      null, null, null, null, null,
      null, null, null, 3, 8,
      null, 4, null, null, 5,
      23, 4, null, 7, 3,
      7, 6, 11, 16, null,
      3
    ];

    const neerslagDataClean = neerslagData.map((value) => value === null ? 0 : value);

    const configRain = {
      type: 'bar',
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
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Wat was de hoeveelheid neerslag in millimeters die in mei 2024 viel?',
            font: {
              size: 24,
              weight: 'bold',
              family: 'Kalam'
            },
            color: '#beff6f'
          },
          legend: {
            labels: {
              color: 'white'
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
              color: '#beff6f',
              font: {
                size: 16
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
                size: 16
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
    };

    const myChart = new Chart(
      document.getElementById('myrainChart'),
      configRain
    );

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <section className="regenval-container" aria-label="Informatie over regenval en slakken">
      <section className="regenval-text">
        <h2>Wat weten we nu?</h2>
        <p>Slakken komen het liefst tevoorschijn als het nat en vochtig
          is, wat meestal door regen wordt veroorzaakt. Om
          te bepalen hoe nat het in de maand mei was, moeten we terug
          in de tijd kijken en nagaan hoeveel millimeter
          neerslag er is gevallen en wat de gemiddelde temperatuur
          was. Het is belangrijk om te vermelden dat slakken
          ook niet van koud weer houden; de meeste slakken zijn al
          inactief bij temperaturen tussen de -5 en 5 graden.
          Bovendien kunnen ze ook niet goed omgaan met extreem warm
          weer.</p>
      </section>
      <div className="raining">
        <canvas id="myrainChart" aria-label="Grafiek van de regenval in mei"></canvas>
      </div>
    </section>
  );
}

export default RegenvalContainer;
