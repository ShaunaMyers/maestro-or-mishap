import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({currentIndex, question, correctAnswer, incorrectAnswers}) => {
    console.log('current index', currentIndex)
    console.log('questionCard question', question)

    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    const [allAnswers, setAllAnswers] = useState([...incorrectAnswers, correctAnswer]);

    useEffect(() => {
        // setAllAnswers([...incorrectAnswers, correctAnswer])
        formatAnswers()
    }, [])

    const formatAnswers = () => {
        // setAllAnswers([...incorrectAnswers, correctAnswer])
        let mixedAnswers = []
        allAnswers.forEach(answer => {
            let randomItem = allAnswers[Math.floor(Math.random()*allAnswers.length)];
            console.log(randomItem, 'random item')
            mixedAnswers.push(randomItem)
        })
        setAllAnswers(mixedAnswers)
    }
    
    const formatIndex = () => {
        console.log('current Index plus 1', currentIndex + 1)
        if (currentIndex < 11) {
            const indexSummed = (currentIndex + 1);
            console.log(indexSummed, 'index summed')
            setNextIndex(indexSummed)
            console.log('setNextIndex', setNextIndex)
        } else {
            setNextIndex(11)
            setGameOver(true)
        }
    }

    return(
        <article>
            <h2>{question}</h2>
            <form>
                <div>
                    <input type="checkbox"/>
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
            {gameOver === false ?
            <Link to={`/question/${nextIndex}`}>
                <button onClick={() => {
                formatIndex()
                formatAnswers()
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