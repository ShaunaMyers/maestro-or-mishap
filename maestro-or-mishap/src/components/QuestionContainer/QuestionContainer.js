import QuestionCard from '../QuestionCard/QuestionCard';
import PropTypes from 'prop-types';

const QuestionContainer = ({ question, currentIndex, addToFinalScore }) => {

    const formatAnswers = () => {
        const unshuffled = [...question.incorrect_answers, question.correct_answer];
    
        const shuffled = unshuffled
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        return shuffled;
    }

    return (
        <section>
            <QuestionCard 
            currentIndex={currentIndex}
            question={question.question} 
            correctAnswer={question.correct_answer} 
            allAnswers={formatAnswers()}
            addToFinalScore={addToFinalScore}
            />
        </section>
    )
}

export default QuestionContainer;

QuestionContainer.propTypes = {
    question: PropTypes.string,
    currentIndex: PropTypes.number,
    addToFinalScore: PropTypes.func,
  }