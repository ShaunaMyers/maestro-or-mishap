

const QuestionCard = ({question, correctAnswer, incorrectAnswer}) => {
    return(
        <article>
            <h2>{question}</h2>
            <p>{correctAnswer}</p>
            <p>{incorrectAnswer[0]}</p>
            <p>{incorrectAnswer[1]}</p>
            <p>{incorrectAnswer[2]}</p>
        </article>
    )
}

export default QuestionCard;