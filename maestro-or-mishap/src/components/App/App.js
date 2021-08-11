import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { fetchQuestions } from '../../apiCalls';
import './App.css';
import QuestionContainer from '../QuestionContainer/QuestionContainer'
import Greeting from '../Greeting/Greeting';
import PropTypes from 'prop-types';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('')
  const [finalScore, setFinalScore] = useState(0);
  // const [locatedQuestion, setLocatedQuestion] = useState({})

  useEffect(() => {
    setError('')
    fetchQuestions() 
      .then(data => setQuestions(data.results))
      .catch(() => {
        setError('Oops, problem loading game. Please refresh the page.')
      })
  }, [])

  // const addToFinalScore = (score) => {
  //   setFinalScore(score);
  // }

  const findQuestion = (index) => {
    console.log('index for sure', index)
    const matchingQuestion = questions[index];
    setLocatedQuestion(matchingQuestion);
  }
 
  return (
    <main className="App">
      <header className="App-header">
        <h1>Are you the Maestro?</h1>
      </header>
      <Route exact path='/' render={() => {
        return(
          <div>
            {error && <p>{error}</p>}
            <Greeting />
          </div>
        )
      }}/>
     <Route exact path='/question/:num' render={({ match }) => {
        let index = parseInt(match.params.num);
        let foundQuestion = questions[index]
        console.log('found question', foundQuestion)
        return(
          <QuestionContainer question={foundQuestion} currentIndex={index} addtoFinalScore={addToFinalScore} findQuestion={findQuestion}/>
          )
      }}/>
    </main>
  );
}

export default App;

App.propTypes = {
  questions: PropTypes.array,
  finalScore: PropTypes.number
}

