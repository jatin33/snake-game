import React from 'react';
import './GameStatus.css';

function GameStatus(props) {
    return (
        <div className="gameStatus">
            <div className="label">{props.playerName}</div>
            <div className="label">{props.level}</div>
            <div className="label">{props.score}</div>
        </div>
    )
}

export default GameStatus;