import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { fetchQuestions } from '../../apiCalls';
import './App.css';
import QuestionContainer from '../QuestionContainer/QuestionContainer'
import Greeting from '../Greeting/Greeting';
import SavedGames from '../SavedGames/SavedGames';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    fetchQuestions() 
      .then(data => setQuestions(data.results))
      .catch(error => console.log(error))
  }, [])

  const addToFinalScore = (score) => {
    setFinalScore(score);
  }

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
      <Route exact path='/saved_games' render={() => {
        return(
          <SavedGames quesions={questions} finalScore={finalScore}/>
        )
      }}/>
    </main>
  );
}

export default App;
