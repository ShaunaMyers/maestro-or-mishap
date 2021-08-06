import React, { useEffect, useState } from 'react';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import QuestionContainer from '../QuestionContainer/QuestionContainer'
import './App.css';
import { fetchQuestions } from '../../apiCalls';
import Greeting from '../Greeting/Greeting';

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions() 
      // .then(data => console.log('setQuestions', data.results))
      .then(data => setQuestions(data.results))
      .catch(error => console.log(error))
  }, [])

  return (
    <main className="App">
      <header className="App-header">
        <h1>Maestro or Mishap</h1>
      </header>
      <Route exact path='/' render={() => {
        return(
          <Greeting/>
        )
      }}/>
      <Route exact path='/question' render={() => {
        return(
          <QuestionContainer questions={questions}/>
          )
      }}/>
    </main>
  );
}

export default App;
