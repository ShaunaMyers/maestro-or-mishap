import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ question }) => {
    console.log('question???', question)

    // const allQuestions = questions.map(question => {
    //     console.log('questions results', questions[0].results)
    //     console.log('question', question)
    //     return <QuestionCard key={Math.random()} question={question.question} correctAnswer={question.correct_answer} incorrectAnswer={question.incorrect_answers} />
    // })

    return (
        <section>
            <QuestionCard 
            question={question.question} correctAnswer={question.correct_answer} incorrectAnswer={question.incorrect_answers} />
        </section>
    )
}

export default QuestionContainer;