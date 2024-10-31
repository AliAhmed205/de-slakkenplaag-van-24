import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ConclusieContainer = React.forwardRef(({ className }, ref) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const vorstCtx = canvasRef.current.getContext('2d');

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
        datasets: [
          {
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
            text: 'Afname van vorst sinds 2000',
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
      vorstChart.destroy();
    };
  }, []);

  return (
    <section ref={ref} className={`conclusie-container ${className}`}  aria-label="Conclusie over de slakkenplaag">
      <article>
        <h2><i className="fa-solid fa-check"></i> Feit</h2>
        <p>Tussen april en juli, vooral in <b>mei</b> en <b>juli</b>, zien we veel meer slakken door de regen en de
          zachte winters. In
          de winter slapen hun natuurlijke vijanden, zoals egels, waardoor slakken beter kunnen overleven en zich
          voortplanten. Hanneke Hietink vertelt hier meer over in de NOS-rapportage.</p>
        <audio src="/AUDIO/waaromzijnerzoveelslakken.mp3" controls aria-label="Audio over slakkenpopulatie"></audio>
        <article className="comparison-container">
          <canvas ref={canvasRef} width="800" height="400" aria-label="Grafiek van vorstdata en slakkenpopulatie"></canvas>
        </article>
      </article>
    </section>
  );
});

export default ConclusieContainer;
