import React, { useEffect, useState } from 'react';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import QuestionContainer from '../QuestionContainer/QuestionContainer'
import './App.css';
import { fetchQuestions } from '../../apiCalls';
import Greeting from '../Greeting/Greeting';

const App = () => {
  const [questions, setQuestions] = useState([]);
  // const [currentQuestion, setCurrentQuestion] = useState({});

  useEffect(() => {
    fetchQuestions() 
      // .then(data => console.log('setQuestions', data.results))
      .then(data => setQuestions(data.results))
      .catch(error => console.log(error))
  }, [])

  // const handleDisplayQuestion = (index) => {
  //   // When user clicks Greeting button this func fires
  //     // Pass in an index number
  //   // We start with question at index num in questions array
  //   setCurrentQuestion(questions[index])
  //   // .then(console.log('curr quest', currentQuestion))
  //   console.log('curr quest', currentQuestion)
  //   // So, we pass that question into our QuestionContainer
  //   // From there, it displays that question through QuestionCard
  //   // Need to have a button on questionCard to click to get to the next question
  // }

  return (
    <main className="App">
      <header className="App-header">
        <h1>Maestro or Mishap</h1>
      </header>
      <Route exact path='/' render={() => {
        return(
          <Greeting />
        )
      }}/>
      <Route exact path='/question/:num' render={({ match }) => {
        let index = match.params.num;
        let foundQuestion = questions[index]
        return(
          <QuestionContainer question={foundQuestion}/>
          )
      }}/>
    </main>
  );
}

export default App;
