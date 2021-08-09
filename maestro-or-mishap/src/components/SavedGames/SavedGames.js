import { useState, useEffect } from "react";

const SavedGames = ({finalScore}) => {

    const [savedGames, setSavedGames] = useState([]);

    useEffect(() => {
        setSavedGames([...savedGames, {finalScore, date: Date.now()}])
    }, [])

    const allSavedGames = savedGames.map(game => {
        return (
        <div>
            <h4>Your game on {game.date}</h4>
            <p>Score: {formatDate(game.formatDate)}</p>
        </div>
        )
    })

    const formatDate = (date) => {
        return new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })
    }

    return(
        <section>
            {allSavedGames}
        </section>
    )
}

export default SavedGames;