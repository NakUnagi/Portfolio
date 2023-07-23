import React, { useEffect, useRef, useState } from "react";

import './Tetris.scss'

const Tetris = () => {

    const [canvasHeight, setCanvasHeight] = useState()
    const [canvasWidth, setCanvasWidth] = useState()
    const [context, setContext] = useState()
    const [NUMROWS, setNUMROWS] = useState()
    const [NUMCOLS, setNUMCOLS] = useState()
    const [blocksJson, setBlocks] = useState()
    // const [blockX, setBlockX] = useState(240)
    // const [blockY, setBlockY] = useState(20)
    const [activeBlock, setActiveBlock] = useState()
    const [nextVariant, setNextVariant] = useState()

    const canvasRef = useRef()
    const squareSize = 20
    let blockX = 240
    let blockY = 20
    let edgeColorBoard = []
    
// Reusable functions
    const drowRect = (x, y, width, height, color) => {
        context.strokeStyle = color
        context.strokeRect(x, y, width, height)
    }
    const drowFillRect = (x, y, width, height, color) => {
        context.fillStyle = color
        context.fillRect(x, y, width, height)
    }

    const setRowsAndCols = () => {
        setNUMROWS(Math.floor(canvasWidth / squareSize))
        setNUMCOLS(Math.floor(canvasHeight / squareSize))
    }

    const setCanvasContext = (canvas) => {
        setContext(canvas.current.getContext('2d'))
    }

    const getCanvasWidth = (canvas) => {
        setCanvasWidth(canvas.current.width)
    }
    const getCanvasHeight = (canvas) => {
        setCanvasHeight(canvas.current.height)
    }

// Drow Edges on the board

    const setEdgeBoard = () => {
        for(let i=0; i < NUMROWS; i++) {
            edgeColorBoard[i] = []
            for(let j=0; j < NUMCOLS; j++) {
                edgeColorBoard[i][j] = '#2979bf'
            }
        }
    }

    const drowEdge = () => {
        edgeColorBoard.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                drowRect(rowIndex*squareSize, colIndex*squareSize, squareSize, squareSize, edgeColorBoard[rowIndex][colIndex])
                drowFillRect(rowIndex*squareSize, colIndex*squareSize, squareSize, squareSize, '#f0f8ff')
            })
        }) 
    }

//Drow blocks

const getBlocks = async() => {
    await loadBlocks('/game_tetris/block.json')
}

const loadBlocks = async(file) => {
    const data = await fetch(file)
    const jsonData = await data.json()

    if (!jsonData.blocks) {
        console.log("Fail in load blocks");
        return;
    }else{
        setBlocks(jsonData.blocks)
    }
}

const setRandomVariant = () => {
    if(blocksJson) {
        const variant = Math.floor(Math.random() * blocksJson.length)
        setActiveBlock(blocksJson[variant].variants[0])
    }
}

const drowVariant = () => {
    if(activeBlock) {
        activeBlock.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if(col) {
                    // console.log(`row to ${row}`)
                    drowFillRect(rowIndex*squareSize+blockX, colIndex*squareSize+blockY, squareSize, squareSize, '#886cd5')
                }
            })
        })
    }
}

//Block move
const keyDetect = (e) => {
    switch(e.keyCode) {
        case 40:
        case 83:
            moveDown()
            break;
        case 39:
        case 68:
            moveRight()
            break;
        case 37:
        case 65:
            moveLeft()
            break;
        // case 188:
        //     prevPatern()
        //     break;
        // case 199:
        //     nextPatern()
        //     break;
    }
}

const moveDown = () => {
    blockY += 20
    drowEdge()
    drowVariant()
}

const moveLeft = () => {
    blockX -= 20
    drowEdge()
    drowVariant()
}

const moveRight = () => {
    blockX += 20
    drowEdge()
    drowVariant()
}

    

    useEffect(() => {
        document.body.style.setProperty('background', '#212529');
        document.addEventListener('keydown', keyDetect)
        getCanvasWidth(canvasRef)
        getCanvasHeight(canvasRef)
        setCanvasContext(canvasRef)
        setRowsAndCols()
        setEdgeBoard()
        drowEdge()
        getBlocks()
    }, [canvasHeight, canvasWidth, context, NUMROWS, NUMCOLS])

    useEffect(() => {
        document.addEventListener('keydown', keyDetect)
        setRandomVariant()
        drowVariant()
    }, [blocksJson ])
    return(
        <canvas ref={canvasRef} width="400px" height="700"></canvas>
    )

}

export default Tetris