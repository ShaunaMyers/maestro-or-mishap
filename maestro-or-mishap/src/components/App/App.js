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

  useEffect(() => {
    setError('')
    fetchQuestions() 
      .then(data => {
        setQuestions(restructureData(data.results))
      })
      .catch(() => {
        setError('Oops, problem loading game. Please refresh the page.')
      })
  }, [])

  const restructureData = (data) => {
    return data.map(oneQuestion => {
      return ({
      question: cleanData(oneQuestion.question), 
      correct_answer: cleanData(oneQuestion.correct_answer), 
      incorrect_answers: [
        cleanData(oneQuestion.incorrect_answers[0]), 
        cleanData(oneQuestion.incorrect_answers[1]), 
        cleanData(oneQuestion.incorrect_answers[2])]
    })
    
    })
  }

  const cleanData = (string) => {
        let re1 = /&quot;/gi;
        let re2 = /&#039;/gi;
        let re3 = /&amp;/gi;
        let re4 = /&ndash;/gi;
        let newstr1 = string.replace(re1, '"');
        let newstr2 = newstr1.replace(re2,"'");
        let newstr3 = newstr2.replace(re3, "&");
        let newstr4 = newstr3.replace(re4, "--")
        return newstr4; 
  }
 
  return (
    <main>
      <header className="app-header">
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
        console.log('match param', match.params)
          let index = parseInt(match.params.num);
          let foundQuestion = questions[index]
          console.log('found question', foundQuestion)
          return(
            <QuestionContainer question={foundQuestion} currentIndex={index}/>
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

