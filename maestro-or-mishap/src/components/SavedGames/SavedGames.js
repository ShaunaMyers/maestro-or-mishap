import { useEffect } from "react";

const SavedGames = ({questions, finalScore}) => {

    const [savedGames, setSavedGames] = useState([]);

    useEffect(() => {
        setSavedGames([...savedGames, {allQuestions: questions, finalScore, date: Date.now()}])
    }, [])

    return(
        <section>
            <h4>Your Final Score</h4>
            <p>Date: {calculateDate}</p>
        </section>
    )
}

export default SavedGames;