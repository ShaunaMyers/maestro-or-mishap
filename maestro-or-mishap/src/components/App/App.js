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
        // console.log(restructureData(data.results), 'restr data')
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

  //       console.log('data coming in', data)
  //       // an array 
  //         // a key of question    a string
  //         // a key of correct_answer    a string
  //         // a key of incorrect_answers    an array

  //       // iterate over array 
  //       // at each element clean question
          // clean correct_answer
          // destructure incorrect_answers

        // const cleanedData

        // 74&ndash;
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

