import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({currentIndex, question, correctAnswer, allAnswers}) => {
    // console.log('current index', currentIndex)
    // console.log('questionCard question', question)

    const [gameOver, setGameOver] = useState(false);
    const [nextIndex, setNextIndex] = useState(0);
    // const [allAnswers, setAllAnswers] = useState([]);

    // useEffect(() => {
    //     console.log('Getting in here?')
    //     let unshuffled = [...incorrectAnswers, correctAnswer]
    
    //     let shuffled = unshuffled
    //     .map((value) => ({ value, sort: Math.random() }))
    //     .sort((a, b) => a.sort - b.sort)
    //     .map(({ value }) => value)
    //     setAllAnswers(shuffled)
    // }, [])

    // const formatAnswers = () => {
    //     // setAllAnswers([...incorrectAnswers, correctAnswer])
    //     // let mixedAnswers = []
    //     // let indexNumbers = [0, 1, 2, 3]

    //     // allAnswers.forEach(answer => {
    //     //     let randomIndex;
    //     //     if (indexNumbers.length > 1) {
    //     //         randomIndex = indexNumbers[Math.floor(Math.random()*indexNumbers.length)];
    //     //         console.log(randomIndex, 'random index #')
    //     //         indexNumbers.splice(randomIndex, 1)
    //     //         console.log(indexNumbers, 'index number array')
    //     //     } else {
    //     //         randomIndex = indexNumbers[0];
    //     //         console.log(randomIndex, 'last random index')
    //     //     }
    //     //     mixedAnswers.push(allAnswers[randomIndex])
    //     // })

    //     // setAllAnswers(mixedAnswers)
    //     console.log('Getting in here?')
    //     let unshuffled = [...incorrectAnswers, correctAnswer]
    
    //     let shuffled = unshuffled
    //     .map((value) => ({ value, sort: Math.random() }))
    //     .sort((a, b) => a.sort - b.sort)
    //     .map(({ value }) => value)
    //     setAllAnswers(shuffled)
    //     return allAnswers[0]
    // }
    
    const formatIndex = () => {
        // console.log('current Index plus 1', currentIndex + 1)
        if (currentIndex < 11) {
            const indexSummed = (currentIndex + 1);
            // console.log(indexSummed, 'index summed')
            setNextIndex(indexSummed)
            // console.log('setNextIndex', setNextIndex)
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