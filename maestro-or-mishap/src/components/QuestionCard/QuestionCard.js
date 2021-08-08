import { useState} from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';

const QuestionCard = ({currentIndex, question, correctAnswer, allAnswers}) => {
   

    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    const [checked, setChecked] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState('');
    // const [answerEvaluated, setAnswerEvaluated] = useState(false);
    let shuffledAnswers;

    // const formatAnswers = () => {
  
    //     let unshuffled = allAnswers;
    
    //     shuffledAnswers = unshuffled
    //     .map((value) => ({ value, sort: Math.random() }))
    //     .sort((a, b) => a.sort - b.sort)
    //     .map(({ value }) => value)
    //     return shuffledAnswers[0]
    // }
    
    const formatIndex = () => {
        if (currentIndex < 11) {
            const indexSummed = (currentIndex + 1);
            setNextIndex(indexSummed)
        } else {
            setNextIndex(11)
            setGameOver(true)
        }
    }

    const handleClick = (answer) => {
        setChecked(!checked)
        setSelectedAnswer(answer);
    }

    return(
        <article>
            <h2>{question}</h2>
            <form>
                <div>
                    <input onChange={() => handleClick(allAnswers[0])} 
                    checked={checked}
                    value={selectedAnswer}
                    type="checkbox"/>
                    <p>{allAnswers[0]}</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>{allAnswers[1]}</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>{allAnswers[2]}</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <p>{allAnswers[3]}</p>
                </div>
            </form>
            {!gameOver ?
            <Link to={`/question/${nextIndex}`}>
                <button onClick={() => {
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