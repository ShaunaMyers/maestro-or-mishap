import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ question }) => {

    return (
        <section>
            <QuestionCard 
            question={question.question} correctAnswer={question.correct_answer} incorrectAnswer={question.incorrect_answers} />
        </section>
    )
}

export default QuestionContainer;