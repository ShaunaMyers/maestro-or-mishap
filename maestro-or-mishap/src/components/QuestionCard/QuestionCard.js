import { useState } from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({currentIndex, question, correctAnswer, incorrectAnswer}) => {
    console.log('incorrect answer', incorrectAnswer)

    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    
    const formatIndex = () => {
        if (currentIndex < 12) {
            const indexSum = currentIndex + 1;
            setNextIndex(indexSum);
            // return nextIndex;
        } else {
            setGameOver(true);
        }
    }

    return(
        <article>
            <h2>{question}</h2>
            <p>{correctAnswer}</p>
            <p>{incorrectAnswer[0]}</p>
            <p>{incorrectAnswer[1]}</p>
            <p>{incorrectAnswer[2]}</p>
            <Link to={`/question/${nextIndex}`}><button onClick={formatIndex}>Next Question</button></Link>
        </article>
    )
}

export default QuestionCard;