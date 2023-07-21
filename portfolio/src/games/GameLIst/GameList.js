import React from "react";
import { NavLink } from "react-router-dom";

import './GameList.scss'

const GameList = () => {

    return (
        <>
            <NavLink to='tic-tac-toe' className="game-nav-item">Tic Tac Toe</NavLink>
            <NavLink to='bird' className="game-nav-item">Bird</NavLink>
            <NavLink to='snake' className="game-nav-item">Snake</NavLink>
            <NavLink to='memory' className="game-nav-item">Memory</NavLink>
            <NavLink to='tetris'className="game-nav-item">Tetris</NavLink>
        </>
    )
}

export default GameList