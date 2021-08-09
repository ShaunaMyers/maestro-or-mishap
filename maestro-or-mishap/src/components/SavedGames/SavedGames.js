import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './SavedGames.css';

const SavedGames = ({finalScore}) => {

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
    
    
    return(
        <section className="saved-games-box">
            {allSavedGames}
            <Link to={'/'}>
                <button className="return-home-btn">Return Home</button>
            </Link>
        </section>
    )
}

export default SavedGames;