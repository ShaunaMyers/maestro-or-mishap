import { useState } from 'react';

const QuestionCard = ({index, question, correctAnswer, incorrectAnswer}) => {

    const [gameOver, setGameOver] = useState(false);
    
    const formatIndex = () => {
        index < 12 ? index + 1 : setGameStatus(true);
    }

    return(
        <article>
            <h2>{question}</h2>
            <p>{correctAnswer}</p>
            <p>{incorrectAnswer[0]}</p>
            <p>{incorrectAnswer[1]}</p>
            <p>{incorrectAnswer[2]}</p>
            <Link to={`/question/${index + 1}`}><button>Next Question</button></Link>
        </article>
    )
}

export default QuestionCard;