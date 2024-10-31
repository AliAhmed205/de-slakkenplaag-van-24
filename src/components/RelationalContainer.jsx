import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const RelationalContainer = React.forwardRef((props, ref) => {
  const canvasRef = useRef(null); 

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    
    const data = {
      labels: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      datasets: [{
          label: 'Waarnemingen per Maand',
          data: [6, 45, 51, 93, 97, 37, 120, 69, 43, 3, 0, 0], // Bijgewerkte gegevens
          backgroundColor: 'rgba(190, 255, 111, 0.38)', // Doorzichtig groen
          borderColor: 'rgba(190, 255, 111)', // Donkerder groen voor de rand
          borderWidth: 2,
          fill: true // Dit zorgt ervoor dat het gebied wordt gevuld
      }]
    };

    const config = {
      type: 'line', // Type 'line' met fill voor area chart
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Spaanse wegslak Waarnemingen per Maand',
            color: 'white' // Witte kleur voor de titel
          },
          legend: {
            display: true,
            labels: {
              color: 'white' // Witte kleur voor de legenda labels
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Maanden',
              color: 'white' // Witte kleur voor de x-as titel
            },
            ticks: {
              color: 'white' // Witte kleur voor de x-as labels
            }
          },
          y: {
            title: {
              display: true,
              text: 'Aantal Waarnemingen',
              color: 'white' // Witte kleur voor de y-as titel
            },
            ticks: {
              color: 'white' // Witte kleur voor de y-as labels
            },
            beginAtZero: true // Begin altijd bij 0
          }
        }
      }
    };

    const chart = new Chart(ctx, config);

    return () => chart.destroy();
  }, []);

  return (
    <section ref={ref} id="relation-id" className="relational-container" aria-label="Informatie over slakkensoorten op Instagram">
      <div className="relation-img">
        <h2>Wat valt op aan de slakkensoort op de Instagram-foto's met de hashtag #slakkenplaag?</h2>
        <img src="/IMG/relational-diagram.png" alt="Relational diagram van slakken" aria-label="Diagram van slakkensoorten" />
      </div>
      <div className="relation-about">
        <h2>Arion Vulgaris</h2>
        <p>De Arion vulgaris, beter bekend als de Spaanse wegslak of de grote bruine wegslak, is een soort van slijmnaakslak die veel voorkomt in delen van Europa, met een concentratie in Zuid-Europa.</p>
        <img src="/IMG/slug-transparent.png" alt="Spaanse Naakteslak" aria-label="Afbeelding van de Spaanse naakteslak" />
        <p>Aan de hand van de foto's kan er vastgesteld worden dat de Spaanse wegslak het meest voorkwam in mei. Hoe zit het met de maanden ervoor, of juist de maanden erna? Hieronder zie je het aantal waarnemingen per maand tot oktober 2024.</p>
        <div className="areachart">
          <canvas ref={canvasRef} aria-label="Grafiek van waarnemingen van slakken per maand"></canvas>
        </div>
      </div>
    </section>
  );
});

export default RelationalContainer;
