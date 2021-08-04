import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchQuestions } from '../../apiCalls';

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions() 
      .then(data => setQuestions([data]))
      .catch(error => console.log(error))
  }, [])

  return (
    <main className="App">
      <header className="App-header">
        <h1>Maestro or Mishap</h1>
      </header>
      <section>
      </section>
    </main>
  );
}

export default App;
