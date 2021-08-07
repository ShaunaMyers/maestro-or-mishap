import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ question, currentIndex }) => {
    console.log('question question', question)

    return (
        <section>
            <QuestionCard 
            currentIndex={currentIndex}
            question={question.question} 
            correctAnswer={question.correct_answer} 
            incorrectAnswer={question.incorrect_answers} />
        </section>
    )
}

export default QuestionContainer;