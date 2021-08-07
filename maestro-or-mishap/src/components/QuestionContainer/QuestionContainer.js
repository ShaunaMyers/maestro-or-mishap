import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ question, index }) => {

    return (
        <section>
            <QuestionCard 
            index={index}
            question={question.question} 
            correctAnswer={question.correct_answer} 
            ncorrectAnswer={question.incorrect_answers} />
        </section>
    )
}

export default QuestionContainer;