import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionContainer = ({ question, currentIndex }) => {
    console.log('questionContainer quest.', question)

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
            allAnswers={formatAnswers()}/>
        </section>
    )
}

export default QuestionContainer;