import { Route, NavLink, Switch, Link } from 'react-router-dom';

const Greeting = ({handleDisplayQuestion}) => {
    return(
        <section>
            <h2>Welcome!</h2>
            <p>Please try your hand at our music trivia game and see if you are a Maestro or if you land in Mishap!</p>
            {/* <button onClick={() => handleDisplayQuestion(0)}>Start Game!</button> */}
            <Link exact to='/question/0' activeClassName='greeting-btn-clicked' className='greeting-btn'>Start Game!</Link>
        </section>
    )
}

export default Greeting;