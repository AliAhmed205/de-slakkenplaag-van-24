import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const instagramPostsData = [
  1, 1, 2, 1, 2, 4, 1, 1,
  2, 3, 1, 3, 0, 0, 3,
  2, 5, 5, 3, 3, 3, 4, 5,
  4, 9, 5, 6, 4, 12, 4, 1
];

const instagramPhotos = [
  ['/IMG/insta-posts/MEI-1A.jpg'], // 1 mei
  ['/IMG/insta-posts/MEI-2A.jpg'], // 2 mei
  ['/IMG/insta-posts/MEI-3A.jpg', '/IMG/insta-posts/MEI-3B.jpg'], // 3 mei
  ['/IMG/insta-posts/MEI-4A.png'], // 4 mei
  ['/IMG/insta-posts/MEI-5A.jpg', '/IMG/insta-posts/MEI-5B.jpg'], // 5 mei
  ['/IMG/insta-posts/MEI-6A.png', '/IMG/insta-posts/MEI-6B.png', '/IMG/insta-posts/MEI-6C.png', '/IMG/insta-posts/MEI-6D.png'], // 6 mei
  ['/IMG/insta-posts/MEI-7.jpg'], // 7 mei
  ['/IMG/insta-posts/MEI-8.jpg'], // 8 mei
  ['/IMG/insta-posts/MEI-9A.png', '/IMG/insta-posts/MEI-9B.png'], // 9 mei
  ['/IMG/insta-posts/MEI-10C.png', '/IMG/insta-posts/MEI-10B.png', '/IMG/insta-posts/MEI-10A.jpg'], // 10 mei
  ['/IMG/insta-posts/MEI-11.jpg'], // 11 Mei
  ['/IMG/insta-posts/MEI-12A.jpg', '/IMG/insta-posts/MEI-12B.jpg', '/IMG/insta-posts/MEI-12C.jpg'], // 12 Mei
  [], // 13 Mei
  [], // 14 Mei
  ['/IMG/insta-posts/MEI-15A.jpg', '/IMG/insta-posts/MEI-15B.jpg', '/IMG/insta-posts/MEI-15C.jpg'], // 15 mei
  ['/IMG/insta-posts/16-mei.jpg', '/IMG/insta-posts/16a-mei.jpg'], // 16 mei
  ['/IMG/insta-posts/MEI-17A.jpg', '/IMG/insta-posts/MEI-17B.jpg', '/IMG/insta-posts/MEI-17C.jpg', '/IMG/insta-posts/MEI-17D.jpg', '/IMG/insta-posts/MEI-17E.jpg'], // 17 mei
  ['/IMG/insta-posts/MEI-18A.jpg', '/IMG/insta-posts/MEI-18B.jpg', '/IMG/insta-posts/MEI-18C.jpg', '/IMG/insta-posts/MEI-18D.jpg', '/IMG/insta-posts/MEI-18E.jpg'], // 18 mei
  ['/IMG/insta-posts/MEI-19C.jpg', '/IMG/insta-posts/MEI-19B.jpg', '/IMG/insta-posts/MEI-19A.jpg'], // 19 mei
  ['/IMG/insta-posts/MEI-20A.jpg', '/IMG/insta-posts/MEI-20B.jpg', '/IMG/insta-posts/MEI-20C.jpg'], // 20 Mei
  ['/IMG/insta-posts/MEI-21A.jpg', '/IMG/insta-posts/MEI-21B.jpg', '/IMG/insta-posts/MEI-21C.jpg'], // 21 Mei
  ['/IMG/insta-posts/MEI-22A.jpg', '/IMG/insta-posts/MEI-22B.jpg', '/IMG/insta-posts/MEI-22C.jpg', '/IMG/insta-posts/MEI-22D.jpg'], // 22 mei
  ['/IMG/insta-posts/MEI-23A.jpg', '/IMG/insta-posts/MEI-23B.jpg', '/IMG/insta-posts/MEI-23C.jpg', '/IMG/insta-posts/MEI-23D.jpg', '/IMG/insta-posts/MEI-23E.jpg'], // 23 mei
  ['/IMG/insta-posts/MEI-24A.jpg', '/IMG/insta-posts/MEI-24B.jpg', '/IMG/insta-posts/MEI-24C.jpg', '/IMG/insta-posts/MEI-24D.jpg'], // 24 mei
  ['/IMG/insta-posts/MEI-25A.jpg', '/IMG/insta-posts/MEI-25B.jpg', '/IMG/insta-posts/MEI-25C.jpg', '/IMG/insta-posts/MEI-25D.jpg', '/IMG/insta-posts/MEI-25E.jpg', '/IMG/insta-posts/MEI-25F.jpg', '/IMG/insta-posts/MEI-25G.jpg', '/IMG/insta-posts/MEI-25H.jpg', '/IMG/insta-posts/MEI-25I.jpg'], // 25 mei
  ['/IMG/insta-posts/MEI-26A.jpg', '/IMG/insta-posts/MEI-26B.jpg', '/IMG/insta-posts/MEI-26C.jpg', '/IMG/insta-posts/MEI-26D.jpg', '/IMG/insta-posts/MEI-26E.jpg'], // 26 mei
  ['/IMG/insta-posts/MEI-27A.jpg', '/IMG/insta-posts/MEI-27B.jpg', '/IMG/insta-posts/MEI-27C.jpg', '/IMG/insta-posts/MEI-27D.jpg', '/IMG/insta-posts/MEI-27E.jpg', '/IMG/insta-posts/MEI-27F.jpg'], // 27 mei
  ['/IMG/insta-posts/MEI-28A.jpg', '/IMG/insta-posts/MEI-28B.jpg', '/IMG/insta-posts/MEI-28C.jpg', '/IMG/insta-posts/MEI-28D.jpg'], // 28 mei
  ['/IMG/insta-posts/MEI-29A.jpg', '/IMG/insta-posts/MEI-29B.jpg', '/IMG/insta-posts/MEI-29C.jpg', '/IMG/insta-posts/MEI-29D.jpg', '/IMG/insta-posts/MEI-29E.jpg'], // 29 mei
  ['/IMG/insta-posts/MEI-30A.jpg', '/IMG/insta-posts/MEI-30B.jpg', '/IMG/insta-posts/MEI-30C.jpg', '/IMG/insta-posts/MEI-30D.jpg'], // 30 mei
  ['/IMG/insta-posts/MEI-31A.jpg'] // 31 mei
];

const SocialMediaContainer = () => {
  const chartReference = useRef(null);
  const photoContainerReference = useRef(null);
  const chartInstanceReference = useRef(null); // Reference for the chart instance

  useEffect(() => {
    const canvasElement = chartReference.current; // Store the current ref in a variable
    const contextInstagram = canvasElement.getContext('2d');

    chartInstanceReference.current = new Chart(contextInstagram, {
      type: 'bar', // Type of chart is bar
      data: {
        labels: Array.from({ length: 31 }, (_, index) => `${index + 1} mei`),
        datasets: [{
          label: 'Instagram Berichten',
          data: instagramPostsData,
          backgroundColor: 'rgba(190, 255, 111, 0.2)',
          borderColor: '#beff6f87',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true
          }
        },
        interaction: {
          mode: 'index',
          intersect: true
        }
      }
    });

    const handleMouseMove = (event) => {
      const chartInstance = chartInstanceReference.current;
      if (!chartInstance) return;

      const activePoints = chartInstance.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (activePoints.length) {
        const hoveredIndex = activePoints[0].index;
        showPhotos(hoveredIndex + 1);
      } else {
        photoContainerReference.current.innerHTML = '';
      }
    };

    canvasElement.addEventListener('mousemove', handleMouseMove); // Use the local variable here

    function showPhotos(day) {
      const photoContainer = photoContainerReference.current;
      photoContainer.innerHTML = '';

      if (day < 1 || day > instagramPhotos.length) {
        return;
      }

      const photosForDay = instagramPhotos[day - 1];
      for (let index = 0; index < photosForDay.length; index++) {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        photoDiv.innerHTML = `<img src="${photosForDay[index]}" alt="Foto ${index + 1}">`;
        photoContainer.appendChild(photoDiv);
      }
    }

    return () => {
      canvasElement.removeEventListener('mousemove', handleMouseMove); // Use the local variable in cleanup
      if (chartInstanceReference.current) {
        chartInstanceReference.current.destroy();
      }
    };
  }, []);

  return (
    <section className="social-media-container" aria-label="Informatie over social media en slakken">
      <h2>Resultaat op social media</h2>
      <p>Op <strong>Instagram</strong> zijn berichten verschenen over de regen, waarbij veel mensen foto's van slakken hebben
        gedeeld met in de beschrijving <strong>#slakkenplaag</strong>. Regen zorgt namelijk voor ideale omstandigheden voor slakken, wat resulteert in meer activiteit, zoals
        te zien is in de posts. <strong>Beweeg met de muis over de staven om de foto's te bekijken.</strong></p>
      <div id="photoContainer" aria-label="Container voor foto's van slakken" ref={photoContainerReference}></div>
      <div className="chart-container">
        <canvas ref={chartReference} id="myChartInsta" width="380" height="60" aria-label="Grafiek van Instagram posts over slakken"></canvas>
      </div>
    </section>
  );
};

export default SocialMediaContainer;