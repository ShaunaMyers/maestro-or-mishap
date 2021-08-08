import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ question, currentIndex }) => {
    console.log('question question', question)

    return (
        <section>
            <QuestionCard 
            currentIndex={currentIndex}
            question={question.question} 
            correctAnswer={question.correct_answer} 
            // incorrectAnswers={question.incorrect_answers} 
            allAnswers={[...question.incorrect_answers, question.correct_answer]}/>
        </section>
    )
}

export default QuestionContainer;