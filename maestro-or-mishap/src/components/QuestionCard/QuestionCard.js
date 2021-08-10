import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';
import ScoreBox from '../ScoreBox/ScoreBox';
import PropTypes from 'prop-types';
import SavedGames from '../SavedGames/SavedGames';

const QuestionCard = ({ currentIndex, question, correctAnswer, allAnswers }) => {


    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState('');
    const [timer, setTimer] = useState('');
    const [score, setScore] = useState(0);
    const [nextQuestionBtnDisabled, setNextQuestionBtnDisabled] = useState(true);
    const [finalScore, setFinalScore] = useState(0);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    const formatIndex = () => {
        if (currentIndex < 11) {
            let indexSummed = (currentIndex + 1);
            setNextIndex(indexSummed++);
        } else {
            setNextIndex(11);
            setGameOver(true);
        }
        clearCheckboxes();
    }


    const cleanData = (string) => {
        // 
        let re1 = /&quot;/gi;
        let re2 = /&#039;/gi;
        let re3 = /&amp;/gi;
        let newstr1 = string.replace(re1, '"');
        let newstr2 = newstr1.replace(re2,"'");
        let newstr3 = newstr2.replace(re3, "&");
        return newstr3;  
    }

    const evaluateAnswer = (answer, num) => {
        eval(`setChecked${num}(true)`);
        if (answer !== correctAnswer) {
            setAnswerFeedback('Oooh, we\'re sorry! That\'s the wrong answer.');
            calculateScore(false)
        } else {
            setAnswerFeedback('That is correct! What, are you some kind of genius?');
            calculateScore(true)
        }

        setTimer(setTimeout(() => {
            setNextQuestionBtnDisabled(false)
            setAnswerFeedback('')
        }, 3000))
        
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
        setFinalScore(score);
    }

    const clearFinalScore = () => {
        setFinalScore(0)
    }


    return(
        <article>
            {finalScore ? <SavedGames finalScore={finalScore} clearFinalScore={clearFinalScore}/> :
            <article className="question-card">
                <div className="score-save-box">
                    <ScoreBox score={score}/>
                    {gameOver && 
                        <button className="save-game-btn" onClick={handleFinalScore}>Save Game</button>
                    }
                </div>
                {answerFeedback && <p className="answer-feedback">{answerFeedback}</p>}
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
                    formatIndex();
                    }}
                    >Next Question</button>
                </Link> 
                :
                <div className="gameover-box">
                    <p className="gameover">Game Over</p>
                    <Link to={'/'}>
                        <button className="return-home-btn">Return Home</button>
                    </Link>
                </div>
                }
            </article>
            }
            
        </article>
    )
}

export default QuestionCard;

QuestionCard.propTypes = {
    gameOver: PropTypes.bool,
    nextIndex: PropTypes.number,
    answerFeedback: PropTypes.string,
    timer: PropTypes.string,
    score: PropTypes.number,
    nextQuestionBtnDisabled: PropTypes.bool,
    checked1: PropTypes.bool,
    checked2: PropTypes.bool,
    checked3: PropTypes.bool,
    checked4: PropTypes.bool,
    currentIndex: PropTypes.number,
    question: PropTypes.string,
    correctAnswer: PropTypes.string,
    allAnswers: PropTypes.array,
    addToFinalScore: PropTypes.func
  };