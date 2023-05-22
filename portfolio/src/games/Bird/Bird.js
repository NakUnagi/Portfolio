import React, { Component, createRef } from "react";

import './Bird.scss'

class Bird extends Component {

    state = {
        startX: 30,
        startY: 30,
        moveY: 35,
        gravity: 2,
        pipes: [],
        pipesGap: 150,
        score: 0,
        fps: 60,
        wrangPipe: false
    }

    birdCanvasRef = createRef()

    render() {
        return (
            <div className="bird-canvas-container">
                <canvas 
                ref={this.birdCanvasRef}
                height="500"
                width="500"
                id="bird-canvas"
                >
                
                </canvas>
            </div>
        )
    }

     birdImg = new Image()
     background = new Image()
     pipesTop = new Image()
     pipesBottom = new Image()
    
    startGame = () => {
        setInterval(this.updateGame, 1000 / this.state.fps)
    }

    checkCollision = () => {
        const {startY, startX, pipes} = this.state
        const birdWidth = this.birdImg.width
        const birdHeight = this.birdImg.height
        const pipesArray = [...pipes]
        //the duck touches the top edge
        if(startY < 0) {
            this.setState({
                startY: 0
            })
        }
        //the duck touches the bottom edge
        if(startY > this.birdCanvasRef.current.height - birdHeight) {
            this.moveUp()
        }
        //check collision with gaps
        pipesArray.forEach(pipe => {
            if(startX + birdWidth > pipe.top.topPosition && startX <= pipe.top.topPosition + pipe.top.width) {
               if(startY < pipe.top.height + pipe.top.bottBosition || startY + birdHeight >= pipe.bottom.bottBosition) {
                    this.restartGame()
               }
            }
            //Add points
            if(pipe.top.topPosition == -1){
                this.setState((prev) => ({
                    score: prev.score + 1
                }))
            }

            if(this.state.pipesGap === 120) {
                this.setState({
                    pipesGap: 120
                }) 
            }
        })
    }

    lvlGamePlus = () => {
        if(this.state.score > 0 && this.state.score % 2 === 0) {
            this.setState((prev) => ({
                pipesGap: prev.pipesGap - 1
            })) 
            console.log(this.state.pipesGap)
        }
    }

    restartGame = () => {
        this.setState({
            startY: 30,
            startX: 30,
            pipesGap: 150,
            score: 0,
            pipes: []
        })

        this.addPipe()
    }

    addPipe = () => {
        this.pipesTop.src = '/game_bird/images/pipeTop.png'
        this.pipesBottom.src = '/game_bird/images/pipeBottom.png'
        let x = this.birdCanvasRef.current.width
        let y = Math.floor(Math.random() * this.pipesTop.height) - this.pipesTop.height

        const newPipe = {
            top: {
                img: this.pipesTop,
                topPosition: x,
                bottBosition: y,
                width: this.pipesTop.width,
                height: this.pipesTop.height
            },
            bottom: {
                img: this.pipesBottom,
                topPosition: x,
                bottBosition: y + this.pipesTop.height + this.state.pipesGap,
                width: this.pipesBottom.width,
                height: this.pipesBottom.height
            }
        }

        if( newPipe.top.topPosition - newPipe.top.height > newPipe.bottom.bottBosition) {
            this.setState({
                wrangPipe: true
            })
            return
        }
            
        this.setState((prev) => ({
            pipes: [...prev.pipes, newPipe]
        }))
        console.log(this.state.pipes)

    }    

    displayText = () => {
        const context = this.birdCanvasRef.current.getContext('2d')
        context.font = "22px serif"
        context.fillStyle = "#ffffff"
        context.fillText(`SCORE: ${this.state.score}`, 20, 20)
    }

    drawPipes = () => {
        const context = this.birdCanvasRef.current.getContext('2d')
        const pipesToDraw = [...this.state.pipes]

        pipesToDraw.forEach(pipe => {
            context.drawImage(pipe.top.img, pipe.top.topPosition, pipe.top.bottBosition)
                pipe.top.topPosition--

                context.drawImage(pipe.bottom.img, pipe.bottom.topPosition, pipe.bottom.bottBosition)
                pipe.bottom.topPosition--

                if(pipe.top.topPosition == 200) {
                    this.addPipe()
                    setTimeout(this.lvlGamePlus, 1)
                }
        })
        
    }

    
    
    renderGame = () => {
        const context = this.birdCanvasRef.current.getContext('2d')
        this.background.src = '/game_bird/images/bg/1.png'
        this.birdImg.src = '/game_bird/images/bird.png'
    
        this.birdImg.onload = () => {
            context.drawImage(this.birdImg, this.state.startX, this.state.startY)
        };
    
        this.background.onload = () => {
            context.drawImage(this.background, 0, 0, 500, 700)   
        };        
    }
    
    gravityEffect = () => {
        this.setState((prevState) => ({
            startY: prevState.startY + 2
        }));
    }
    
    moveUp = () => {
        this.state.startY -= this.state.moveY
    }
    
    updateGame = () => {
        this.checkCollision()
        if(this.state.wrangPipe) {
            this.setState({
                wrangPipe: false
            })
            this.addPipe()
        }
        this.gravityEffect()
        this.renderGame()
        window.requestAnimationFrame(this.drawPipes)
        window.requestAnimationFrame(this.displayText)
    }
    
    componentDidMount = () =>{
        // document.body.style.setProperty('height', '100vh');
        document.body.style.setProperty('background', '#212529');
        this.startGame()
        this.addPipe()
        document.addEventListener('click', () => {
            this.moveUp()
        })
        
        document.addEventListener('keydown', (e) => {
            if(e.key === ' ') {
                this.moveUp()
            }
        })
    }
}





export default Bird