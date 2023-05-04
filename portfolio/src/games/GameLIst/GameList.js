import React from "react";
import { NavLink } from "react-router-dom";

import './GameList.scss'

const GameList = () => {

    return (
        <>
            <NavLink to={`tic-tac-toe`} className="game-nav-item">Tic Tac Toe</NavLink>
        </>
    )
}

export default GameList