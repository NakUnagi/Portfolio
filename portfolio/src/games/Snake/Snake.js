import React, { useState, createRef, useEffect } from "react";

import './Snake.scss'
const Snake = () => {

    const snakeCanvas = createRef()
    useEffect(() => {
        document.body.style.setProperty('background', '#212529');
    }, [])

    return (
        <div className="snake-canvas-container">
            <canvas
                ref = {snakeCanvas}
                id='canvSnake'
                width='700'
                height='700'
            >

            </canvas>
        </div>
    )
    
}

export default Snake