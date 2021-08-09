import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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
        <section>
            {allSavedGames}
            <Link to={'/'}>
                <button>Return Home</button>
            </Link>
        </section>
    )
}

export default SavedGames;