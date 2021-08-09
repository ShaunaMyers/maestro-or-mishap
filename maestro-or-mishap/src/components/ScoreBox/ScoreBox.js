import { useState } from 'react';
import './ScoreBox.css';

const ScoreBox = ({ answerFeedback }) => {

    const [score, setScore] = useState(0);

    return(
        <div>
            <p>Score: {score}</p>
        </div>
    )
}

export default ScoreBox;