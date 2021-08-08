import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
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
        <h1>Are you the Maestro?</h1>
      </header>
      <Route exact path='/' render={() => {
        return(
          <Greeting />
        )
      }}/>
      <Route exact path='/question/:num' render={({ match }) => {
        let index = parseInt(match.params.num);
        let foundQuestion = questions[index]
        console.log("FOUND", questions)
        return(
          <QuestionContainer question={foundQuestion} currentIndex={index}/>
          )
      }}/>
    </main>
  );
}

export default App;
