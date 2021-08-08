import { useState} from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';

const QuestionCard = ({currentIndex, question, correctAnswer, allAnswers}) => {
   

    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerFeedback, setAnswerFeedback] = useState('');
    // const [checked, setChecked] = useState(false)
    // const [answerEvaluated, setAnswerEvaluated] = useState(false);
    // let shuffledAnswers;

    
    const formatIndex = () => {
        if (currentIndex < 11) {
            const indexSummed = (currentIndex + 1);
            setNextIndex(indexSummed)
        } else {
            setNextIndex(11)
            setGameOver(true)
        }
    }

    const cleanData = (string) => {
        let re1 = /&quot;/gi;
        let re2 = /&#039;/gi;
        let newstr1 = string.replace(re1, '"')
        let newstr2 = newstr1.replace(re2,"'")
        return newstr2;  
    }

    const handleClick = (answer) => {
        // setChecked(!checked)
        setSelectedAnswer(answer);
        console.log(setSelectedAnswer, 'setSelectedAnswer')
        evaluateAnswer()
    }

    const evaluateAnswer = () => {
        selectedAnswer !== correctAnswer ? setAnswerFeedback('Oooh, we\'re sorry! That\'s the wrong answer.') :
        setAnswerFeedback('That is correct! What, are you some kind of genius?')
    }

    return(
        <article className="question-card">
            {answerFeedback && <p>{answerFeedback}</p>}
            <h3>{cleanData(question)}</h3>
            <form>
                <div>
                    <input 
                    onChange={() => handleClick(allAnswers[0])} 
                    value={selectedAnswer}
                    // checked={checked}
                    type="checkbox"/>
                    <p>{cleanData(allAnswers[0])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => handleClick(allAnswers[1])} 
                    value={selectedAnswer}
                    // checked={checked}
                    type="checkbox"/>
                    <p>{cleanData(allAnswers[1])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => handleClick(allAnswers[2])} 
                    value={selectedAnswer}
                    // checked={checked}
                    type="checkbox"/>
                    <p>{cleanData(allAnswers[2])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => handleClick(allAnswers[3])} 
                    value={selectedAnswer}
                    // checked={checked}
                    type="checkbox"/>
                    <p>{cleanData(allAnswers[3])}</p>
                </div>
            </form>
            {!gameOver ?
            <Link to={`/question/${nextIndex}`}>
                <button className="next-question-btn" onClick={() => {
                formatIndex()
                // formatAnswers()
                }}
            >Next Question</button></Link> :
            <Link to={'/'}>
                <p>Game Over</p>
                <button>Return Home</button>
            </Link>
            }
            
        </article>
    )
}

export default QuestionCard;