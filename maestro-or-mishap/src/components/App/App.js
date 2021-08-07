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
      .then(data => setQuestions(data.results))
      .catch(error => console.log(error))
  }, [])

  return (
    <main className="App">
      <header className="App-header">
        <h1>Maestro or Mishap</h1>
      </header>
      <Route exact path='/' render={() => {
        console.log('first questions', questions)
        return(
          <Greeting />
        )
      }}/>
      <Route exact path='/question/:num' render={({ match }) => {
        let index = parseInt(match.params.num);
        console.log(typeof index, 'index')
        let foundQuestion = questions[index]
        console.log("FOUND", questions)
        return(
          // <p>this works for now</p>
          <QuestionContainer question={foundQuestion} currentIndex={index}/>
          )
      }}/>
    </main>
  );
}

export default App;
