import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ questions }) => {

    const allQuestions = questions[0].results.map(question => {
        console.log('question', question)
        return <QuestionCard key={Math.random()} question={question.question} correctAnswer={question.correct_answer} incorrectAnswer={question.incorrect_answer} />
    })

    return (
        <section>
            {allQuestions}
        </section>
    )
}

export default QuestionContainer;