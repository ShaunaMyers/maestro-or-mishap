import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './SavedGames.css';
import PropTypes from 'prop-types';

const SavedGames = ({finalScore, clearFinalScore}) => {

    const [savedGames, setSavedGames] = useState([]);

    useEffect(() => {
        setSavedGames([...savedGames, {finalScore, date: Date.now()}])
    }, [])

    const formatDate = (date) => {
        return new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })
    }

    const allSavedGames = savedGames.map(game => {
        return (
        <div>
            <h4>Your game on {formatDate(game.date)}</h4>
            <p>Score: {game.finalScore}</p>
        </div>
        )
    })
    
    const handleClearFinalScore = () => {
        clearFinalScore();
    }
    
    return(
        <section className="saved-games-box">
            {allSavedGames}
            <Link to={'/'}>
                <button onClick={handleClearFinalScore} className="return-home-btn">Return Home</button>
            </Link>
        </section>
    )
}

export default SavedGames;

SavedGames.propTypes = {
    savedGames: PropTypes.array,
    finalScore: PropTypes.number,
    clearFinalScore: PropTypes.func
}