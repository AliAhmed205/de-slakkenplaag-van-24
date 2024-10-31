import React, { useRef, useState, useEffect } from 'react';
import Homepage from './components/Homepage.jsx';
import Question from './components/Question.jsx';
import RelationalContainer from './components/RelationalContainer.jsx';
import RegenvalContainer from './components/RegenvalContainer.jsx';
import DekalfContainer from './components/DekalfContainer.jsx';
import SocialMediaContainer from './components/SocialMediaContainer.jsx';
import Nederland from './components/Nederland.jsx';
import ChoiceContainer from './components/ChoiceContainer.jsx';
import ConclusieContainer from './components/ConclusieContainer.jsx';
import FabelContainer from './components/FabelContainer.jsx';

import './App.css';
import './Homepage.css';
import './Nederland.css';
import './Question.css';
import './RegenvalContainer.css';
import './SocialMedia.css';
import './Relational.css';
import './DeKalf.css';
import './ChoiceContainer.css';
import './Conclusie.css';

function App() {
  const relationalContainerRef = useRef(null);
  const dekalfContainerRef = useRef(null);
  const conclusieContainerRef = useRef(null);
  const fabelContainerRef = useRef(null);

  const [userChoice, setUserChoice] = useState(null);

  const scrollToConclusieContainer = () => {
    setUserChoice('feiten'); 
  };

  const scrollToFabelContainer = () => {
    setUserChoice('fabel'); 
  };

  useEffect(() => {
    if (userChoice === 'feiten') {
      if (conclusieContainerRef.current) {
        conclusieContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (userChoice === 'fabel') {
      if (fabelContainerRef.current) {
        fabelContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      <></>
    }
  }, [userChoice]);

  return (
    <main>
      <Homepage />
      <Question />
      <RegenvalContainer />
      <SocialMediaContainer />
      <RelationalContainer ref={relationalContainerRef} />
      <Nederland 
        scrollToRelationalContainer={() => relationalContainerRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToDekalfContainer={() => dekalfContainerRef.current.scrollIntoView({ behavior: 'smooth' })}
      />
      <DekalfContainer ref={dekalfContainerRef} />

      <ChoiceContainer 
        scrollToFabelContainer={scrollToFabelContainer} 
        scrollToConclusieContainer={scrollToConclusieContainer} 
      />
      
      {userChoice === 'feiten' ? (
        <ConclusieContainer ref={conclusieContainerRef} className="show" />
      ) : (
        userChoice === 'fabel' ? (
          <FabelContainer ref={fabelContainerRef} className="show" />
        ) : (
          <></>
        )
      )}
    </main>
  );
}

export default App;
