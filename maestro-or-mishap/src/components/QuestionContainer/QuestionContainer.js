import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ question, index }) => {

    return (
        <section>
            <QuestionCard 
            index={index}
            question={question.question} 
            correctAnswer={question.correct_answer} 
            incorrectAnswer={question.incorrect_answers} />
        </section>
    )
}

export default QuestionContainer;