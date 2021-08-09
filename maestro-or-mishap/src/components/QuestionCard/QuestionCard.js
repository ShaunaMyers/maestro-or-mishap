import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';
import ScoreBox from '../ScoreBox/ScoreBox';

const QuestionCard = ({currentIndex, question, correctAnswer, allAnswers, addToFinalScore}) => {
   
    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState('');
    const [timer, setTimer] = useState('');
    const [score, setScore] = useState(0);
    const [nextQuestionBtnDisabled, setNextQuestionBtnDisabled] = useState(true);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    // useEffect(() => {
    //     setQuestion1(question1);
    // }, [question1])

    const formatIndex = () => {
        if (currentIndex < 11) {
            const indexSummed = (currentIndex + 1);
            setNextIndex(indexSummed); // ++
        } else {
            setNextIndex(11);
            setGameOver(true);
        }
        clearCheckboxes();
    }


    const cleanData = (string) => {
        // &amp;
        let re1 = /&quot;/gi;
        let re2 = /&#039;/gi;
        let newstr1 = string.replace(re1, '"');
        let newstr2 = newstr1.replace(re2,"'");
        return newstr2;  
    }

    const evaluateAnswer = (answer, num) => {
        eval(`setChecked${num}(true)`);
        if (answer !== correctAnswer) {
            setAnswerFeedback('Oooh, we\'re sorry! That\'s the wrong answer.');
            setTimer(setTimeout(() => {
                setNextQuestionBtnDisabled(false)
                setAnswerFeedback('')
                // formatIndex();
                console.log('question 1', question)
            }, 3000))
            
            calculateScore(false)
        } else {
            setNextQuestionBtnDisabled(false);
            setAnswerFeedback('That is correct! What, are you some kind of genius?');
            setTimer(setTimeout(() => {
                setNextQuestionBtnDisabled(false)
                setAnswerFeedback('')
                // formatIndex();
                // clearCheckboxes();
            }, 3000))
            calculateScore(true)
        }
    }

    const clearCheckboxes = () => {
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
    }

    const calculateScore = (answer) => {
        let currentScore = score;
        if (!answer) {
            const decreaseScore = currentScore - 10;
            setScore(decreaseScore);
        } else {
            const incrementScore = currentScore + 10;
            setScore(incrementScore);
        } 
    }

    const handleFinalScore = () => {
        addToFinalScore(score);
    }


    return(
        <article className="question-card">
            <ScoreBox score={score}/>
            {gameOver && 
            <Link to={'/saved_games'}>
                <button onClick={handleFinalScore}>Save Game</button>
            </Link>
            }
            {answerFeedback && <p>{answerFeedback}</p>}
            <h3>{cleanData(question)}</h3>
            <form>
                <div>
                    <input 
                    onChange={() => {
                        evaluateAnswer(allAnswers[0], 1)
                    }} 
                    type="checkbox"
                    checked={checked1}
                    />
                    <p>{cleanData(allAnswers[0])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => evaluateAnswer(allAnswers[1], 2)} 
                    type="checkbox"
                    checked={checked2}
                    />
                    <p>{cleanData(allAnswers[1])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => evaluateAnswer(allAnswers[2], 3)} 
                    type="checkbox"
                    checked={checked3}
                    />
                    <p>{cleanData(allAnswers[2])}</p>
                </div>
                <div>
                    <input 
                    onChange={() => evaluateAnswer(allAnswers[3], 4)} 
                    type="checkbox"
                    checked={checked4}
                    />
                    <p>{cleanData(allAnswers[3])}</p>
                </div>
            </form>
            {!gameOver ?
            <Link to={`/question/${nextIndex}`}>
                <button disabled={nextQuestionBtnDisabled}className="next-question-btn" onClick={() => {
                // checkResponse()
                // evaluateAnswer();
                formatIndex();
                }}
                >Next Question</button>
            </Link> 
            :
            <div>
                <p>Game Over</p>
                <Link to={'/'}>
                    <button>Return Home</button>
                </Link>
            </div>
            }
            
        </article>
    )
}

export default QuestionCard;