import React, { useEffect, useRef } from "react"; 
import { startCounter, startSlakkenChartAnimation } from "../charts/dashboard";

const Question = () => {
  const chartAnimationStarted = useRef(false); 

  useEffect(() => {
    startCounter(); 
  }, []); 

  useEffect(() => {
    if (!chartAnimationStarted.current) { 
      startSlakkenChartAnimation();
      chartAnimationStarted.current = true; 
    }
  }, []); 

  return (
    <section
      id="question"
      className="dashboard-container"
      aria-label="Dashboard met informatie over slakken in Nederland"
    >
      <h1>Slakken in Nederland</h1>
      <div className="dashboard">
        <div className="dashboard-item item-1">
        <svg aria-label="slak-illustratie" id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.9 248.73">
            <path className="slak-icon"
              d="M361.29,120.47c1.49-9.9,2.81-19.83,4.52-29.69,1.73-9.93,3.92-19.78,5.78-29.7.6-3.22.62-6.55,1.24-9.76.46-2.36.88-5.17,2.4-6.75,1.23-1.28,4.29-1.78,6.09-1.22,1.25.39,2.09,3.11,2.47,4.92.27,1.27-.08,3.28-.95,4.09-9.86,9.12-7.23,21.78-9.03,32.97-1.71,10.62-1.36,21.57-1.92,32.37.78.06,1.55.13,2.33.19.29-5.24.59-10.48.87-15.52,7,5.8,14.06,10.83,20.03,16.94,3.2,3.28,4.43,8.44,6.7,12.67,2.06,3.83,3.59,8.35,6.65,11.15,4.98,4.56,11.12,7.82,16.54,11.93,2.27,1.72,3.95,4.22,5.9,6.36-.59.8-1.19,1.6-1.78,2.4-2.64-1.58-5.43-2.96-7.88-4.79-4.88-3.67-9.38-7.87-14.41-11.32-4.4-3.03-8.06-1.2-11.1,2.88-4.8,6.43-10.48,12.29-14.65,19.09-6,9.79-12.03,19.79-16.21,30.42-15.68,39.87-64.77,59.85-104.82,42.18-17.82-7.87-35.88-9.88-54.96-5.31-14.34,3.44-28.68,3.56-43.49.15-8.83-2.03-19.36-1.51-27.95,1.36-15.71,5.25-30.46,4.5-45.26-1.5-10.13-4.11-20.35-6.29-31.34-5.59-9.74.62-18.75-2.42-27.05-7.48-7.22-4.4-14.46-8.79-21.57-13.37-2.22-1.43-4.34-3.22-6.04-5.24-4.22-5.02-2.75-9.74,3.49-11.96.58-.21,1.19-.52,1.78-.5,16.59.72,29.83-8.6,44.15-14.68,2.65-1.13,5.3-2.38,8.08-3.1,7.8-2.02,14.4-2.03,21.33,4.54,15.52,14.71,33.85,22.12,55.51,14.17,10.94-4.01,18.21-12.46,24.99-21.48,1.19-1.59,4-3.45,5.53-3.07,16.85,4.17,33.72,1.29,50.57.59,26.56-1.09,52.21-7.66,78.01-13.23,6.77-1.46,12.71-4.01,13.82-12.08.12-.9.78-1.99,1.52-2.49,13.2-8.91,19.9-22.77,27.52-35.92.52-.89.78-2,1.46-2.71,9.97-10.41,10.04-23.16,9.47-36.44-.49-11.5.69-23.07.45-34.59-.13-6.24-1.7-12.44-2.56-18.67-.31-2.21-1.41-5-.48-6.52,1.51-2.48,4.38-4.13,6.67-6.14,1.42,2.61,4.7,6.03,3.97,7.71-5.8,13.34-.34,26.51-.21,39.71.08,8.04.53,16.08.82,24.12.08,2.06-.41,4.39.38,6.13,5.79,12.66,2.73,25.48,1.07,38.3-.13,1-.1,2.02-.15,3.04.56.16,1.13.31,1.69.47Z" />
            <path className="slak-icon"
              d="M166.01,165.16c10.67-25.67,13.7-50.76,8.94-76.56-3.11-16.88-9.35-32.52-21.43-45.21-23.36-24.54-57.02-21.56-75.23,6.98-5.39,8.45-9.33,17.83-15.13,26.33,2.56-6.19,4.63-12.64,7.75-18.53C95.37,12,142.22-8.96,193.1,3.58c36.25,8.93,66.52,27.26,86.57,59.36,13.55,21.68,22.88,45.24,23.49,71.43.05,2.24.39,4.54,1.03,6.69,1.79,6.05.67,9.07-5.39,10.44-17.7,4-35.34,8.81-53.28,11.06-21.45,2.69-43.18,3.22-64.8,4.34-4.58.24-9.23-1.04-14.71-1.73Z" />
            <path className="slak-icon"
              d="M77.19,59.12c7.83-15.46,18.78-27.42,37.25-28.43,19.76-1.08,34,8.99,44,24.99,14.68,23.48,17.59,49.48,13.41,76.28-1.61,10.28-4.37,20.64-8.36,30.24-12.63,30.42-44.59,39.66-71.4,20.53-25.73-18.36-35.3-44.63-34.25-75.4.1-3.05.72-6.08,2.04-9.18.36,3.77.68,7.55,1.1,11.31,1.05,9.39,3.83,18.15,9.94,25.57,9.92,12.02,25.61,13.14,37.17,2.71,18.31-16.51,21.88-55.99,6.85-75.53-7.95-10.34-19.01-12.9-30.8-7.05-2.38,1.18-4.63,2.63-6.94,3.96Z" />
            <path className="slak-icon"
              d="M87.46,71.84q-2.92-5.49-12.76-6.28c6.33-7.19,13.65-10.5,22.47-10.42,8.98.08,14.28,5.88,18.12,13,9.61,17.86,6.21,48.29-6.83,63.78-10.84,12.87-27.29,12.42-36.33-1.78-4.04-6.34-5.93-14.05-7.82-22.02,5.26,3.86,10.14,5.84,15.79,2.81,6.44-3.45,10.22-9.05,11.35-16.07,1.3-8.1,1.98-16.32-4.16-23.19l.17.17Z" />
            <path className="slak-icon"
              d="M87.29,71.67c.79,5.63,2.18,11.25,2.21,16.89.04,6.99-2.44,13.4-8.12,18.01-5.65,4.57-10.91,3.43-14.26-2.9-4.6-8.69-2.56-23.77,4.18-30.85,5.07-5.33,10.51-5.66,16.16-.98,0,0-.16-.16-.16-.16Z" />
          </svg>
          <h1 id="counter" aria-label="Aantal slaksoorten">
            0
          </h1>
          <h2>soorten</h2>
          <p>In Nederland hebben we ongeveer 140 slaksoorten</p>
        </div>
        <div className="dashboard-item item-2">
          <h2>Toename van de Slakkenpopulatie (1990 - 2024)</h2>
          <canvas
            id="slakkenPopulatieChart"
            width="700"
            height="270"
            aria-label="Grafiek van de slakkenpopulatie"
          ></canvas>
        </div>

        <div className="dashboard-item item-3">
          <h2>Geografische Spreiding</h2>
          <p>
            In Nederland hebben we 3 specifieke types slak, die in verschillende
            vormen, kleuren en soorten komen.
          </p>
          <h3>Legenda</h3> 
          <ul>
            <li>
              <div aria-label="Zeeslak"></div>Zeeslak
            </li>
            <li>
              <div aria-label="Landslak"></div>Landslak
            </li>
            <li>
              <div aria-label="Luchtademendeslak"></div>Luchtademendeslak
            </li>
          </ul>
        </div>
        <div className="dashboard-item item-4">
          <h2>Slakken en hun Habitat</h2>
          <p>
            Slakken gedijen het best in omgevingen waar <span>regen</span> zorgt
            voor vocht en schaduw. Je kunt ze ook in jouw tuin vinden waar ze
            zachte planten, maar soms gewassen van mensen eten.
          </p>
          <i
            className="fa-solid fa-cloud-rain"
            aria-label="Symbool voor regen"
          ></i>
          <img
            src="/IMG/slak.png"
            alt="slak"
            className="slak-png"
            aria-label="Afbeelding van een slak"
          />
          <img
            src="/IMG/grass.png"
            alt="gras"
            aria-label="Afbeelding van gras"
          />
        </div>
        <div
          className="dashboard-item item-6"
          style={{
            gridColumn: "span 3",
            gridRow: "span 4",
            backgroundImage: "url('/IMG/1343307.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Question;
