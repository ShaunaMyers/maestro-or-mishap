import React, { useState } from 'react';
import './App.css';
import { fetchQuestions } from '../../apiCalls';

const App = () => {
  const [questions, setQuestions] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <p>hello</p>
      </header>
    </div>
  );
}

export default App;
