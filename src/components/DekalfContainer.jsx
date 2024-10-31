import React, { useState } from "react";

const dayData = {
  1: {
    date: "26/09/2024",
    temperature: "15°C",
    precipitation: "14.4mm",
    slugs: 7,
  },
  2: {
    date: "30/09/2024",
    temperature: "8°C",
    precipitation: "13.5mm",
    slugs: 5,
  },
  3: {
    date: "01/10/2024",
    temperature: "12°C",
    precipitation: "6.1mm",
    slugs: 4,
  },
  4: {
    date: "02/10/2024",
    temperature: "12°C",
    precipitation: "2.6mm",
    slugs: 3,
  },
  5: {
    date: "03/10/2024",
    temperature: "6°C",
    precipitation: "0mm",
    slugs: 1,
  },
  6: {
    date: "04/10/2024",
    temperature: "5°C",
    precipitation: "0mm",
    slugs: 3,
  },
  7: {
    date: "07/10/2024",
    temperature: "14°C",
    precipitation: "0mm",
    slugs: 6,
  },
  8: {
    date: "08/10/2024",
    temperature: "15°C",
    precipitation: "3mm",
    slugs: 5,
  },
};

const markersData = {
  1: [
    {
      top: "90%",
      left: "46%",
      image: "/IMG/day-1/IMG_4216.png",
      type: "foto",
      description: "Het is vandaag 15°C",
    },
    {
      top: "60%",
      left: "60%",
      image: "/IMG/day-1/IMG_4198.png",
      type: "bevinding",
      description: "08:21 - Spaanse Wegslak",
    },
    {
      top: "66%",
      left: "60%",
      image: "/IMG/day-1/IMG_4196.png",
      type: "bevinding",
      description: "08:23 - Spaanse Wegslak",
    },
    {
      top: "45%",
      left: "60.5%",
      image: "/IMG/day-1/IMG_4200.png",
      type: "bevinding",
      description: "08:24 - Spaanse Wegslak",
    },
    {
      top: "50%",
      left: "62%",
      image: "/IMG/day-1/IMG_4210.png",
      type: "bevinding",
      description: "08:24 - Spaanse Wegslak",
    },
    {
      top: "55%",
      left: "60.5%",
      image: "/IMG/day-1/IMG_4202.png",
      type: "bevinding",
      description: "08:25 - Spaanse Wegslak",
    },
    {
      top: "52%",
      left: "62%",
      image: "/IMG/day-1/IMG_4203.png",
      type: "bevinding",
      description: "08:25 - Spaanse Wegslak",
    },
    {
      top: "49%",
      left: "60.5%",
      image: "/IMG/day-1/IMG_4204.png",
      type: "bevinding",
      description: "08:30 - Spaanse wegslak",
    },
  ],
  2: [
    {
      top: "53%",
      left: "60%",
      image: "/IMG/day-2/IMG_4240.png",
      type: "bevinding",
      description: "07:56 - Spaanse wegslak naast Carmen's bord.",
    },
    {
      top: "50%",
      left: "61%",
      image: "/IMG/day-2/IMG_4244-v1.png",
      type: "bevinding",
      description: "07:57 - Bruine Spaanse wegslak.",
    },
    {
      top: "46%",
      left: "60%",
      image: "/IMG/day-2/IMG_4245.png",
      type: "bevinding",
      description: "07:58 - Spaanse Wegslak.",
    },
    {
      top: "57%",
      left: "60%",
      image: "/IMG/day-2/IMG_4246.png",
      description: "08:00 - Spaanse wegslak naast een bloem.",
    },
    {
      top: "65%",
      left: "60%",
      image: "/IMG/day-2/IMG_4247.jpg",
      type: "bevinding",
      description: "07:59 - Spaanse Wegslak.",
    },
  ],
  3: [
    {
      top: "53%",
      left: "60%",
      image: "/IMG/day-3/IMG_4281.png",
      type: "bevinding",
      description: "08:04 - Korte bruine Spaanse Wegslak",
    },
    {
      top: "45%",
      left: "61%",
      image: "/IMG/day-3/IMG_4280.png",
      type: "bevinding",
      description: "08:01 - Bruine Spaanse Wegslak",
    },
    {
      top: "67%",
      left: "63%",
      image: "/IMG/day-3/IMG_4292.png",
      type: "bevinding",
      description: "08:29 - Grote Spaanse wegslak.",
    },
    {
      top: "55%",
      left: "61.5%",
      image: "/IMG/day-3/IMG_4282.png",
      type: "bevinding",
      description:
        "08:22 - Samen op de foto met Rob (Schooltuin Medewerker) en een Saanse wegslak.",
    },
    {
      top: "66%",
      left: "61.5%",
      image: "/IMG/day-3/IMG_4285.png",
      type: "foto",
    },
  ],
  4: [
    {
      top: "90%",
      left: "46%",
      image: "/IMG/day-4/IMG_4305.png",
      type: "foto",
      description: "Vandaag is het 12°C.",
    },
    {
      top: "66%",
      left: "61.5%",
      image: "/IMG/day-4/IMG_4307.png",
      type: "foto",
    },
    {
      top: "58%",
      left: "60%",
      image: "/IMG/day-4/IMG_4308.png",
      type: "bevinding",
      description: "08:00 - Spaanse wegslak",
    },
    {
      top: "50%",
      left: "60.5%",
      image: "/IMG/day-4/IMG_4309.png",
      type: "foto",
      description:
        "08:02 - Bladeren van een courgette plant die een beetje gegeten zijn.",
    },
    {
      top: "55%",
      left: "60.5%",
      image: "/IMG/day-4/IMG_4310.png",
      type: "bevinding",
      description: "08:03 - Een Spaanse wegslak tussen de plantjes.",
    },
    {
      top: "53%",
      left: "60%",
      image: "/IMG/day-4/IMG_4312.png",
      type: "bevinding",
      description: "08:10 - Spaanse wegslak",
    },
  ],
  5: [
    {
      top: "90%",
      left: "46%",
      image: "/IMG/day-5/IMG_4330.png",
      type: "foto",
      description: "Vandaag is het 6°C",
    },
    {
      top: "50%",
      left: "60.5%",
      image: "/IMG/day-5/IMG_4336.png",
      type: "foto",
      description: "De courgette plant, weinig verandering.",
    },
    {
      top: "60%",
      left: "61.5%",
      image: "/IMG/day-5/IMG_4334.png",
      type: "bevinding",
      description: "08:00 - Spaanse wegslak op een tak.",
    },
  ],
  6: [
    {
      top: "90%",
      left: "46%",
      image: "/IMG/day-6/IMG_4363.png",
      type: "foto",
      description: "Vandaag is het 5°C",
    },
    {
      top: "47%",
      left: "74%",
      image: "/IMG/day-6/IMG_4361.png",
      type: "bevinding",
      description: "07:55 - Spaanse wegslak",
    },
    {
      top: "45%",
      left: "60%",
      image: "/IMG/day-6/IMG_4359.png",
      type: "bevinding",
      description: "07:50 - Spaanse wegslak",
    },
    {
      top: "45%",
      left: "73%",
      image: "/IMG/day-6/IMG_4360.png",
      type: "bevinding",
      description: "07:52 - Spaanse wegslak",
    },
    {
      top: "48%",
      left: "71%",
      image: "/IMG/day-6/IMG_4362.png",
      type: "foto",
      description:
        "Nieuwe locatie, getoond door een medewerker van de schooltuin.",
    },
  ],
  7: [
    {
      top: "90%",
      left: "46%",
      image: "/IMG/day-7/IMG_4399.png",
      type: "foto",
      description: "Vandaag is het 14°C.",
    },
    {
      top: "66%",
      left: "61.5%",
      image: "/IMG/day-7/IMG_4407.png",
      type: "foto",
    },
    {
      top: "64%",
      left: "61%",
      image: "/IMG/day-7/IMG_4401.png",
      type: "bevinding",
      description: "08:18 - 2 Spaanse Wegslakken",
    },
    {
      top: "60%",
      left: "61%",
      image: "/IMG/day-7/IMG_4406.png",
      type: "bevinding",
      description: "08:20 - Een Spaanse wegslak",
    },
    {
      top: "46%",
      left: "74%",
      image: "/IMG/day-7/IMG_4404.png",
      type: "bevinding",
      description: "08:22 - Een lange Spaanse wegslak",
    },
    {
      top: "46%",
      left: "72%",
      image: "/IMG/day-7/IMG_4405.png",
      type: "bevinding",
      description: "08:24 - Spaanse Wegslak mama en baby",
    },
    {
      top: "43%",
      left: "71%",
      image: "/IMG/day-7/IMG_4403.png",
      type: "bevinding",
      description: "08:20 - Bruine Spaanse Wegslak",
    },
  ],
  8: [
    {
      top: "90%",
      left: "46%",
      image: "/IMG/day-8/IMG_4419.png",
      type: "foto",
      description: "Het is vandaag 15°C",
    },
    {
      top: "66%",
      left: "61.5%",
      image: "/IMG/day-8/IMG_4410.png",
      type: "foto",
    },
    {
      top: "50%",
      left: "60.5%",
      image: "/IMG/day-4/IMG_4411.png",
      type: "foto",
      description: "08:12 - Courgette plant status",
    },
    {
      top: "48%",
      left: "61%",
      image: "/IMG/day-8/IMG_4412.png",
      type: "bevinding",
      description: "08:16 - Spaanse Wegslak",
    },
    {
      top: "49%",
      left: "77%",
      image: "/IMG/day-8/IMG_4413.png",
      type: "bevinding",
      description: "08:16 - Spaanse Wegslak",
    },
    {
      top: "49%",
      left: "75%",
      image: "/IMG/day-8/IMG_4414.png",
      type: "bevinding",
      description: "08:16 - Spaanse Wegslak",
    },
    {
      top: "45%",
      left: "73%",
      image: "/IMG/day-8/IMG_4417.png",
      type: "bevinding",
      description: "08:16 - Spaanse Wegslak",
    },
    {
      top: "47%",
      left: "71%",
      image: "/IMG/day-8/IMG_4418.png",
      type: "bevinding",
      description: "08:16 - Spaanse Wegslak",
    },
  ],
};

const SchooltuinDeKalff = React.forwardRef((props, ref) => {
  const [activeDay, setActiveDay] = useState(1);
  const [popupData, setPopupData] = useState(null);

  const updateNavBar = (day) => {
    const data = dayData[day];
    return (
      <>
        <p>
          <i className="fa-solid fa-calendar-days"></i> Datum: {data.date}
        </p>
        <p>
          <i className="fa-solid fa-temperature-full"></i> Temperatuur:{" "}
          {data.temperature}
        </p>
        <p>
          <i className="fa-solid fa-cloud-rain"></i> Neerslag:{" "}
          {data.precipitation}
        </p>
        <p>
          <i className="fa-solid fa-magnifying-glass"></i> Aantal slakken:{" "}
          {data.slugs}
        </p>
      </>
    );
  };

  const addMarkers = () => {
    return markersData[activeDay].map((marker, index) => (
      <div
        key={index}
        className={`marker ${marker.type}`}
        style={{
          position: "absolute",
          top: marker.top,
          left: marker.left,
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
        }}
        onClick={() => openPopup(marker)}
      ></div>
    ));
  };

  const openPopup = (marker) => {
    setPopupData(marker);
    console.log("Pop-up geopend voor marker:", marker);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  const toggleMap = () => {
    document.querySelector(".kaart-container").classList.toggle("visible");
  };

  return (
    <section
      id="box-id"
      ref={ref}
      className="dekalf-container"
      aria-label="Informatie over Schooltuin De Kalff"
    >
      <article className="about-kalf">
        <h2>
          Waar in mijn buurt waren de gevolgen van de slakkenplaag het meest
          zichtbaar tijdens Mei?
        </h2>
        <p>
          Op <b>24 mei 2024</b> bracht het Jeugdjournaal een bezoek aan
          Schooltuin De Kalff in Amsterdam, waar de slakkenplaag in volle
          hevigheid woedde.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2pT3ffb_Um8?si=oR4BYCtFY0FUIf3b"
          title="YouTube video player"
          frameBorder="0"
          mute="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-label="YouTube video over de slakkenplaag"
        ></iframe>
        <h2>Hoe gaat het er nu aan toe?</h2>
        <p>
          Sinds 26 september is de schooltuin in totaal 10 dagen bezocht om te
          observeren of er veranderingen zijn opgetreden. Klik op een gekleurd
          punt voor details.
        </p>
        <button aria-label="Bekijk de kaart" onClick={toggleMap}>
          Bekijk de kaart
        </button>
      </article>

      <div
        className="kaart-container"
        aria-label="Kaart met huidige situatie in Schooltuin De Kalff"
      >
        <h2>
          Wat is de huidige situatie in Schooltuin De Kalff tijdens de herfst na
          de eerdere slakkenplaag?
        </h2>
        <div id="dayButtons" aria-label="Knoppen voor dagen">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setActiveDay(day)}
              aria-label={`Bekijk gegevens voor Dag ${day}`}
            >
              Dag {day}
            </button>
          ))}
        </div>
        <nav
          className="navbar"
          aria-label="Navigatie met gegevens over slakken"
        >
          {updateNavBar(activeDay)}
        </nav>
        <div
          className="kalf-container"
          id="kalfContainer"
          aria-label="Container voor slakkenwaarnemingen"
          style={{
            width: "43vw",
            height: "34vw",
            margin: "0 2.5rem 0 0",
            backgroundSize: "contain",
            backgroundPosition: "center",
            position: "relative",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url('/IMG/schooltuin-de-kalf.png')",
            borderRadius: "0 0 2rem 2rem",
          }}
        >
          {addMarkers()}
          {popupData && (
            <div
              id="popup"
              className="popup show"
              aria-label="Pop-up voor details over slakkenwaarnemingen"
              style={{
                position: "absolute",
                top: `calc(${popupData.top} - 20px)`,
                left: popupData.left,
                width: "30%",
                transform: "translate(-50%, -100%)",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                zIndex: 1000,
              }}
            >
              <span
                className="close"
                onClick={closePopup}
                aria-label="Sluit pop-up"
                style={{ cursor: "pointer" }}
              >
                &times;
              </span>
              <div id="popup-content">
                <h2>
                  {popupData.image.endsWith(".mp4")
                    ? "Video Bevinding"
                    : "Foto Bevinding"}
                </h2>
                <div id="popup-image" aria-label="Afbeelding in pop-up">
                  {popupData.image.endsWith(".mp4") ? (
                    <video
                      src={popupData.image}
                      controls
                      autoPlay
                      width="300"
                    ></video>
                  ) : (
                    <img
                      src={popupData.image}
                      alt={popupData.description}
                      width="300"
                    />
                  )}
                </div>
                <p>{popupData.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default SchooltuinDeKalff;
