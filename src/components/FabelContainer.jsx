import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const FabelContainer = React.forwardRef(({ className }, ref) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const obsCtx = canvasRef.current.getContext('2d');
  
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
            text: 'Toename van de Spaanse wegslak sinds 2009', 
            font: {
              size: 20,
              weight: 'normal',
            },
            color: 'white' 
          }
        }
      }
    });

    return () => {
      observationsChart.destroy();
    };
  }, []);

  return (
    <section ref={ref} className={`fabel-container ${className}`} aria-label="Uitleg waarom het een fabel is">
      <article>
        <h2><i className="fa-solid fa-x"></i> Fabel</h2>
        <p>Het is geen fabel. De slakkenpopulatie groeide in het voorjaar echt aanzienlijk door een combinatie van
          regen, zachte winters en het
          feit dat hun natuurlijke vijanden, zoals egels, in winterslaap zijn. Deze factoren zorgen ervoor dat slakken
          beter overleven en zich sneller kunnen voortplanten, wat leidt tot een grotere populatie. De invloed van
          klimaatverandering, zoals mildere winters, draagt verder bij aan dit fenomeen. Wetenschappelijk onderzoek en
          observaties ondersteunen deze verklaring.</p>
        <audio src="/AUDIO/waaromzijnerzoveelslakken.mp3" controls aria-label="Audio over slakkenpopulatie"></audio>
        <article className="comparison-container">
          <canvas ref={canvasRef} width="800" height="400" aria-label="Grafiek van observaties van slakken"></canvas>
        </article>
      </article>
    </section>
  );
});

export default FabelContainer;
