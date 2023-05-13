import React, { useState } from 'react'

import './Arena.scss'

const TicTacToe = () => {
    document.body.style.setProperty('background', 'rgb(33 37 41)');

    const [winningVariants, setWiningVariants] = useState([ 
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ])
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [end, setEnd] = useState(false)

    const setPlayerValue = cell => {
        if (!end) {
            if (cell.target.innerHTML.trim() === "") {
                cell.target.innerHTML = currentPlayer
                checkWinner(cell.target.innerHTML, currentPlayer)
                setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
            }else {
                return
            }
        }
    }

    const checkWinner = (cell, player) => {
        for (let i = 0; i < winningVariants.length; i++) {
            let currentVariant = winningVariants[i]
            let index0 = currentVariant[0]
            let index1 = currentVariant[1]
            let index2 = currentVariant[2]
            let divCell = document.querySelectorAll(`[data-id]`)
            let div0 = divCell[index0].innerHTML
            let div1 = divCell[index1].innerHTML
            let div2 = divCell[index2].innerHTML

            if (div0 === cell && div1 === cell && div2 === cell) {
                finishGame(player)
            }
        }
    }


    const finishGame = player => {
        document.getElementById('winer').innerHTML = `Winner: ${player}`
        setEnd(true)
    }

    const resetGame = () => {
        setEnd(false)
        setCurrentPlayer('X')
        document.querySelectorAll('.cell').forEach(el => el.innerHTML = '')
        document.getElementById('winer').innerHTML = ''

    }

    return (
            <div className="row d-lg-flex">
                <div className='col-lg-12 txt-align-center'>
                    <p>Tic Tac Toe <span id='winer'></span></p>
                    <div className='arena-container'>
                        <div className='cell' data-id="0" onClick={setPlayerValue}></div>
                        <div className='cell' data-id="1" onClick={setPlayerValue}></div>
                        <div className='cell' data-id="2" onClick={setPlayerValue}></div>
                        <div className='cell' data-id="3" onClick={setPlayerValue}></div>
                        <div className='cell' data-id="4" onClick={setPlayerValue}></div>
                        <div className='cell' data-id="5" onClick={setPlayerValue}></div>
                        <div className='cell' data-id="6" onClick={setPlayerValue}></div>
                        <div className='cell' data-id="7" onClick={setPlayerValue}></div>
                        <div className='cell' data-id="8" onClick={setPlayerValue}></div>
                    </div>
                    <button onClick={resetGame}>Reset Game</button>
                </div>
            </div>
    )
}

export default TicTacToe