import React, { createRef, Component } from "react";

import './Snake.scss'    

class Snake extends Component {

    state = {
        snake: [],
        snakeLength: 5,
        wallSize: 10
    }

    snakeCanvas = createRef()

    render() {
        return (
            <div className="snake-canvas-container">
                <canvas
                    ref = {this.snakeCanvas}
                    id='canvSnake'
                    width='1200'
                    height='600'
                >
    
                </canvas>
            </div>
        )
    }

    clearCanvas = () => {
        const context2D = this.snakeCanvas.current.getContext('2d')
        const canvaW = this.snakeCanvas.current.width
        const canvaH = this.snakeCanvas.current.height
        context2D.fillStyle = '#000000'
        context2D.fillRect(0, 0, canvaW, canvaH)
    }

    makeSnake = () => {
        console.log('początek')
        let canvaX = this.snakeCanvas.current.width
        let canvaH = this.snakeCanvas.current.height
        for(let i=0; i < this.state.snakeLength; i++){
            let x = canvaX/2 + i*this.state.wallSize
            let y = canvaH/2
            this.setState((prev) => ({
                snake: [...prev.snake, {x:x, y:y} ]
            }))
        }
    }

    StartGame = () => {
        this.makeSnake()

        setInterval(() => {
            this.clearCanvas()
        }, 1000/60)
    }

    componentDidMount() {
        document.body.style.setProperty('background', '#212529');
        this.StartGame()
    }

    componentDidUpdate(){
        console.log(this.state.snake)

    }
}

export default Snake