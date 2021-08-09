import { useState} from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';

const QuestionCard = ({currentIndex, question, correctAnswer, allAnswers}) => {
   

    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState('');
    const [timer, setTimer] = useState('');

    const checkResponse = () => {
        if (!answerFeedback) {
            setAnswerFeedback('Please select an answer.');
            setNextIndex(currentIndex);
            setTimer(setTimeout(() => setAnswerFeedback(''), 3000))
        } else {
            setAnswerFeedback('');
            formatIndex();
        }
    }

    const formatIndex = () => {
        if (currentIndex < 11) {
            const indexSummed = (currentIndex + 1);
            setNextIndex(indexSummed);
        } else {
            setNextIndex(11);
            setGameOver(true);
        }
    }


    const cleanData = (string) => {
        let re1 = /&quot;/gi;
        let re2 = /&#039;/gi;
        let newstr1 = string.replace(re1, '"');
        let newstr2 = newstr1.replace(re2,"'");
        return newstr2;  
    }

    const evaluateAnswer = (answer) => {
        if (answer !== correctAnswer) {
            setAnswerFeedback('Oooh, we\'re sorry! That\'s the wrong answer.');
            setTimer(setTimeout(() => setAnswerFeedback(''), 3000))
        } else {
            setAnswerFeedback('That is correct! What, are you some kind of genius?');
            setTimer(setTimeout(() => setAnswerFeedback(''), 3000))
        }
    }


    return(
        <article className="question-card">
            {answerFeedback && <p>{answerFeedback}</p>}
            <h3>{cleanData(question)}</h3>
            <form>
                <div>
                    <input 
                    onChange={() => evaluateAnswer(allAnswers[0])} 
                    type="checkbox"/>
                    <p>{cleanData(allAnswers[0])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => evaluateAnswer(allAnswers[1])} 
                    type="checkbox"/>
                    <p>{cleanData(allAnswers[1])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => evaluateAnswer(allAnswers[2])} 
                    type="checkbox"/>
                    <p>{cleanData(allAnswers[2])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => evaluateAnswer(allAnswers[3])} 
                    type="checkbox"/>
                    <p>{cleanData(allAnswers[3])}</p>
                </div>
            </form>
            {!gameOver ?
            <Link to={`/question/${nextIndex}`}>
                <button className="next-question-btn" onClick={() => {
                checkResponse()
                // formatIndex()
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