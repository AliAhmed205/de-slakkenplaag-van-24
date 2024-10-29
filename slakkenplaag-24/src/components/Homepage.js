import React from 'react';

const Homepage = () => {
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
      <h3 className="mobileText">Laten we het mysterie oplossen!</h3>
      <i id="arrowDown" className="fa-solid fa-arrow-down" aria-label="Scroll naar beneden"></i>
      <button id="startBtn" aria-label="Start het mysterie oplossen">
        <i className="fa-solid fa-magnifying-glass"></i> Los het mysterie op
      </button>
      <div className="slug-container" style={{ '--x': '.67' }} aria-label="Afbeelding van slakken-regen">
        <img src="/IMG/slug.png" alt="slakken-regen" />
      </div>
      <section className="plant-corner" aria-label="Afbeeldingen van bladeren">
        <img className="blad" src="/IMG/leaves.png" alt="Bladeren" />
        <img className="blad" src="/IMG/leaves.png" alt="Bladeren" />
        <img className="blad" src="/IMG/leaves.png" alt="Bladeren" />
        <img className="blad" src="/IMG/leaves.png" alt="Bladeren" />
      </section>
      <section className="rain-background" aria-label="Achtergrond afbeelding van regen"></section>
    </section>
  );
};

export default Homepage;
  