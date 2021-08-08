import { Link } from 'react-router-dom';
import './Greeting.css';

const Greeting = ({handleDisplayQuestion}) => {
    return(
        <section>
            <h2>Welcome!</h2>
            <p>Please try your hand at our music trivia game and see if you are a music maestro!</p>
            {/* <button onClick={() => handleDisplayQuestion(0)}>Start Game!</button> */}
            <Link to='/question/0'><button>Start Game!</button></Link>
        </section>
    )
}

export default Greeting;