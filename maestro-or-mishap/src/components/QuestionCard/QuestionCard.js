import { useState } from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({currentIndex, question, correctAnswer, incorrectAnswer}) => {
    console.log('current index', currentIndex)
    console.log('questionCard question', question)

    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    
    const formatIndex = () => {
        console.log('current Index plus 1', currentIndex + 1)
        // currentIndex < 12 ? setNextIndex(currentIndex + 1) : 
        // setGameOver(true)
        if (currentIndex < 12) {
            const indexSummed = (currentIndex + 1);
            console.log(indexSummed, 'index summed')
            setNextIndex(indexSummed)
            console.log('setNextIndex', setNextIndex)
        }
    }

    return(
        <article>
            <h2>{question}</h2>
            <p>{correctAnswer}</p>
            <p>{incorrectAnswer[0]}</p>
            <p>{incorrectAnswer[1]}</p>
            <p>{incorrectAnswer[2]}</p>
            {gameOver === false &&
            <Link to={`/question/${nextIndex}`}><button onClick={formatIndex}>Next Question</button></Link> 
            // : <Link to={`/question/${nextIndex}`}><button onClick={formatIndex}>Next Question</button></Link>
            }
            
        </article>
    )
}

export default QuestionCard;