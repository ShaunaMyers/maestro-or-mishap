import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ questions }) => {
    console.log('questions results', questions)

    const allQuestions = questions.map(question => {
        console.log('questions results', questions[0].results)
        console.log('question', question)
        return <QuestionCard key={Math.random()} question={question.question} correctAnswer={question.correct_answer} incorrectAnswer={question.incorrect_answers} />
    })

    return (
        <section>
            {allQuestions}
        </section>
    )
}

export default QuestionContainer;