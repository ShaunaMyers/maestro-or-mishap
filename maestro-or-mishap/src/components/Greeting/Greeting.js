import { Link } from 'react-router-dom';
import './Greeting.css';

const Greeting = () => {
    return(
        <section className="greeting-container">
            <h2>Welcome!</h2>
            <p>Please try your hand at our music trivia game and see if you are a music maestro!</p>
            <Link to='/question/0'><button className="start-game-btn">Start Game!</button></Link>
        </section>
    )
}

export default Greeting;