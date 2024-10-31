import React from 'react';

const ChoiceContainer = ({ scrollToFabelContainer, scrollToConclusieContainer }) => {
  return (
    <section className="choice-container" aria-label="Keuze tussen feit of fabel over de slakkenplaag">
      <img src="/IMG/question-mark.svg" alt="vraagteken" aria-label="Afbeelding van een vraagteken" />
      <h1>Was de slakkenplaag dus toch wel een feit of fabel?</h1>
      <div className="btn-container">
        <button type="button" onClick={scrollToConclusieContainer} aria-label="Kies Feit">Feit</button>
        <button type="button" onClick={scrollToFabelContainer} aria-label="Kies Fabel">Fabel</button>
      </div>
    </section>
  );
};

export default ChoiceContainer;
