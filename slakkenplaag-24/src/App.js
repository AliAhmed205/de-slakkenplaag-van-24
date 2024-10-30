import React from 'react';
import Homepage from './components/Homepage.jsx';
import Question from './components/Question.jsx';
import RegenvalContainer from './components/RegenvalContainer.jsx';
import './App.css';
import './Homepage.css';
import './Question.css';
import './RegenvalContainer.css';
import "./main.js";

function App() {
  return (
    <main>
      <Homepage />
      <Question />
      <RegenvalContainer />
    </main>
  );
}

export default App;
