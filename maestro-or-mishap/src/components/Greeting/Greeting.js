
const Greeting = ({handleDisplayQuestion}) => {
    return(
        <section>
            <h2>Welcome!</h2>
            <p>Please try your hand at our music trivia game and see if you are a Maestro or if you land in Mishap!</p>
            <button onClick={() => handleDisplayQuestion(0)}>Start Game!</button>
        </section>
    )
}

export default Greeting;