import React, { createRef, Component } from "react";

import './Snake.scss'    

class Snake extends Component {

    state = {
        snake: [],
        snakeLength: 5,
        wallSize: 10,
        pause: true,
        foodX: 0,
        foodY: 0
    }

    snakeCanvas = createRef()
    moveX = 0
    moveY = 0

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
    StartGame = () => {
        this.makeSnake()

        setInterval(() => {
            this.clearCanvas()
            this.generateFood()
            this.checkColision()
            this.checkColisionWithFood()
            if(this.state.pause === false) {
                this.moveSnake()
            }
            this.drawSnake()
        }, 3500/50)
    }

    clearCanvas = () => {
        const context2D = this.snakeCanvas.current.getContext('2d')
        const canvaW = this.snakeCanvas.current.width
        const canvaH = this.snakeCanvas.current.height
        context2D.fillStyle = '#000000'
        context2D.fillRect(0, 0, canvaW, canvaH)
    }

    makeSnake = () => {
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

    drawSnake = () => {
        const context2D = this.snakeCanvas.current.getContext('2d')
        this.state.snake.forEach(el => {
            context2D.strokeStyle = 'red'
            context2D.lineWidth = 4
            context2D.lineJoin = 'bevel'
            context2D.strokeRect(el.x, el.y, this.state.wallSize, this.state.wallSize)
        })
    }    

    mechanicsOfMovement = (e) =>{
        if(this.state.pause) {
            this.setState({
                pause: false
            })
        }
        switch(e.keyCode) {
            case 37: //left
            case 65: //a
                this.moveX = -10
                this.moveY= 0
                break;
            case 38: // up
            case 87: // w
                this.moveX = 0;
                this.moveY = -10;
                break;  
            case 39: // right
            case 68: // d
                this.moveX = 10;
                this.moveY = 0;
                break;   
            case 40: // down
            case 83: // s
                this.moveX = 0;
                this.moveY = 10;
                break;
        }
    }

    moveSnake = () => {
        let mx =  this.state.snake[0].x + this.moveX
        let my =  this.state.snake[0].y + this.moveY
        this.state.snake.unshift({x: mx, y: my})
        this.state.snake.pop()
        this.drawSnake()
    }

    resetGame = () => {
        this.setState({
            pause: true,
            snake: []
        })
        this.clearCanvas()
        this.moveX = 0
        this.moveY = 0
        this.makeSnake()
        
        console.log(this.state.snake)
    }

    checkColision = () => {
        const {snake} = this.state
        const {width, height} = this.snakeCanvas.current
        if(snake[0].x > width || snake[0].x < 0 || snake[0].y > height || snake[0].y < 0) {
            this.resetGame()
        }
    }


    generateCoordinatesFood = () => {
        let newFoodX = Math.floor(Math.random() * this.snakeCanvas.current.width)
        newFoodX = newFoodX - newFoodX%10
        let newFoodY = Math.floor(Math.random() * this.snakeCanvas.current.height)
        newFoodY = newFoodY - newFoodY%10
        this.setState({
            foodX: newFoodX,
            foodY: newFoodY
        })
    }

    generateFood = () => {
        const {wallSize, foodX, foodY} = this.state
        const context2D = this.snakeCanvas.current.getContext('2d')
        context2D.fillStyle = '#ffffff'
        context2D.lineWidth = 3
        context2D.fillRect(foodX, foodY, wallSize, wallSize)
    }

    checkColisionWithFood = () => {
        const {snake, foodX, foodY} = this.state

        if(snake[0].x == foodX && snake[0].y == foodY) {
            snake.push(Object.assign({}, snake)) 
            this.generateCoordinatesFood()
        }
    }    

    componentDidMount() {
        document.body.style.setProperty('background', '#212529');
        this.StartGame()
        this.generateCoordinatesFood()
    }

    componentDidUpdate(){
        document.addEventListener('keydown', this.mechanicsOfMovement)
        if(this.state.pause === false) {
            this.moveSnake()
            
        }
        console.log(this.state.snake)

    }
}

export default Snake