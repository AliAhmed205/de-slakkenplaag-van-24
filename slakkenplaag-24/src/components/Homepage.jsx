import React, { useEffect } from 'react'; 

const Homepage = () => {
  useEffect(() => {
    const handleDOMContentLoaded = () => {

      const startBtn = document.getElementById('startBtn');

      startBtn.addEventListener('click', function (event) {
        event.preventDefault() 
        const targetSection = document.querySelector('#question')
        targetSection.scrollIntoView({ behavior: 'smooth' })
      })

      if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
        document.body.classList.add('safari-browser');
      }

      for (let i = 0; i < 100; i++) {
        let slak = document.createElement("div");
        let slakImg = document.createElement("img");
        const homeSection = document.getElementsByClassName('homepage')[0];

        slakImg.src = "/IMG/slug.png"; 
        slak.appendChild(slakImg);

        let slakX = Math.random();
        let slakDelay = Math.random();
        let slakDuration = Math.random();

        slak.style.setProperty("--x", slakX);
        slak.style.setProperty("--delay", slakDelay);
        slak.style.setProperty("--dur", slakDuration);

        slak.onanimationend = removeSlak;

        if (homeSection) {
          homeSection.appendChild(slak);
        }
      }
    };

    function removeSlak(e) {
      e.target.remove();
    }

    handleDOMContentLoaded();

    return () => {
    };
  }, []); 

  return (
    <section id="homepage" className="homepage" aria-label="Homepage over de slakkenplaag van 2024">
      <h1>De 'slakkenplaag' van 2024</h1>
      <h2>Feit of Fabel?</h2>
      <p>
        In de lente van 2024 klaagden veel mensen in Nederland over een
        "slakkenplaag" door de plotselinge toename van
        slakken in tuinen en op gewassen. Maar was het werkelijk een
        plaag, of slechts een tijdelijk gevolg van het
        natte weer?
      </p>
      <i id="arrowDown" className="fa-solid fa-arrow-down" aria-label="Scroll naar beneden"></i>
      <button id="startBtn" aria-label="Start het mysterie oplossen">
        <i className="fa-solid fa-magnifying-glass"></i> Los het mysterie op
      </button>
      <div className="slugContainer" style={{ '--x': '.67' }} aria-label="Afbeelding van slakken-regen">
        <img src="/IMG/slug.png" alt="slakken-regen" />
      </div>
      <section className="plantCorner" aria-label="Afbeeldingen van bladeren">
        <img className="blad" src="/IMG/leaves.png" alt="Bladeren" />
        <img className="blad" src="/IMG/leaves.png" alt="Bladeren" />
        <img className="blad" src="/IMG/leaves.png" alt="Bladeren" />
        <img className="blad" src="/IMG/leaves.png" alt="Bladeren" />
      </section>
      <section 
        aria-label="Achtergrond afbeelding van regen" 
        style={{
          width: '100vw',
          height: '101vh',
          position: 'absolute',
          top: '-9px',
          zIndex: 0,
          backgroundImage: "url('/IMG/regen.gif')",
          opacity: 0.5,
          backgroundSize: 'contain',
          mixBlendMode: 'soft-light',
        }}
      ></section>
    </section>
  );
};

export default Homepage;
