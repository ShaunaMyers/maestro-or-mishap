import { Link } from 'react-router-dom';
import './Greeting.css';

const Greeting = () => {
    return(
        <section className="greeting-container">
            <h2>Welcome!</h2>
            <p>Try your hand out our music trivia game.</p>
            <p>Find out if you truly are The Maestro.</p>
            <Link to='/question/0'>
                <button className="start-game-btn">Start Game</button>
            </Link>
        </section>
    )
}

export default Greeting;