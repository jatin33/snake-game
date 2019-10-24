import React, { Component } from 'react';
import { RIGHT } from '../../utils/directions';
import './Game.css';
import { ROW, COL } from '../../utils/dimensions';
import Cell from './Cell/Cell';
import GameStatus from './GameStatus/GameStatus';
import { gems } from '../../utils/gems';
import { compareObject } from '../../utils/helperMethods';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: [],
            snake: {
                head: {},
                tail: []
            },
            food: {},
            direction: RIGHT,
            gameEnds: false
        }
    }

    gameLapse() {
        // updates game's state every 300 ms
        // and repaint grid using 
    }

    checkIfGameEnds() {
        // checks for snake has hit the wall or any of its parts
        // updates the gameEnds in state
    }

    repaintGrid(changedGrid) { // pass updated state variable
        let { grid } = this.state;
        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                grid.push({ row, col });
            }
        }
        this.setState({ grid: grid });
    }

    getRandomCell() {
        // to place gem into randomly selected cell
        return {
            row: Math.floor(Math.random() * ROW),
            col: Math.floor(Math.random() * COL)
        }
    }

    placeGemOnGrid() {
        // select gem from objects
        const { grid } = this.state;
        const gemsArray = Object.keys(gems);
        const randomGemIndex = Math.floor(Object.keys(gems).length * Math.random());
        const randomGem = gems[gemsArray[randomGemIndex]];
        const randomCell = this.getRandomCell();
        const randomCellId = grid.findIndex((element) => compareObject(randomCell, element));
        grid[randomCellId] = { ...grid[randomCellId], randomGem };
        this.setState({ grid: grid });
    }

    updateSnakeDirection() {
        // passed to window event listener
        // checks for which key has been pressed an updates the state accordingly
    }

    componentDidMount() {
        // set game timers here
        // add event listeners to window here
        this.repaintGrid();
        this.placeGemOnGrid();
    }


    componentWillUnmount() {
        // clear game timers here
        // detach event listeners from window here
    }

    render() {
        return (
            <div className="gamearea">
                <GameStatus playerName={"Name : Jatin"} level={"Level : 1"} score={"Score : 0"} />
                <div className="board">
                    {this.state.grid.map((cell) => {
                        return <Cell key={`${cell.row}+${cell.col}`} gem={cell.randomGem} />
                    })}
                </div>
            </div>
        )
    }
}


export default Game;