import React, { Component, createRef } from "react";

import './Bird.scss'

class Bird extends Component {

    state = {
        startX: 30,
        startY: 30,
        moveY: 40,
        gravity: 2,
        pipes: [],
        pipesGap: 50,
        score: 0
    }

    birdCanvasRef = createRef()

    render() {
        return (
            <div>
                <canvas 
                ref={this.birdCanvasRef}
                height="700"
                width="500"
                id="bird-canvas"
                >
                
                </canvas>
            </div>
        )
    }

    // const [startX, setStartX] = useState(30)
    // let [startY, setStartY] = useState(30)
    // let [moveY, setMoveY] = useState(40)
    // const [gravity, setGravity] = useState(2)
    // const [pipes, setPipes] = useState([])
    // const [pipesGap, setPipesGap] = useState(50)
    // const [score, setScore] = useState(0)

     birdImg = new Image()
     background = new Image()

    

    // click = () => {
    //     setScore(prev => prev + 1)
    // }
    
    startGame = () => {
        setInterval(this.updateGame(), 1000 / 60)
        this.gravityEffect()
    }
    
    
    renderGame = () => {
        const context = this.birdCanvasRef.current.getContext('2d')
        console.log(context)
        this.background.src = '/game_bird/images/bg/1.png'
        this.birdImg.src = '/game_bird/images/bird.png'
    
        this.birdImg.onload = () => {
            context.drawImage(this.birdImg, this.state.startX, this.state.startY)
        };
    
        this.background.onload = () => {
            context.drawImage(this.background, 0, 0, 500, 700)
            context.font = "22px serif"
            context.fillStyle = "#ffffff"
            context.fillText(`SCORE: ${this.state.score}`, 20, 20)
    
        };

    }
    
    gravityEffect = () => {
        this.setState((prevState) => ({
            startY: prevState.startY + 2
        })); 
        // this.setState({
        //     startY: this.state.startY + 2
        // }); 
    }
    
    moveUp = () => {
        this.state.startY -= this.state.moveY
    }
    
    updateGame = () => {
        // this.gravityEffect()
        this.renderGame()
    }

    componentDidUpdate = () => {
        // setInterval(this.updateGame(), 1000 / 60)
        // this.setState((prevState) => ({
        //     startY: prevState.startY + 2
        // })); 

    }
    
    componentDidMount = () =>{
        this.startGame()
    }
}

// document.addEventListener('click', () => {
//     moveUp()
// })

// document.addEventListener('keydown', (e) => {
//     if(e.key === ' ') {
//         moveUp()
//     }
// })



export default Bird