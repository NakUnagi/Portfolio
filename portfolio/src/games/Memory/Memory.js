import React, { useEffect, useState } from 'react'
import Card from './Card'

import './Memory.scss'
const Memory = () => {

    const [points, setPoints] = useState(0)
    const [randomArray, setRandomArray] = useState([])  

    let iconsArray = [
      {
        index: 0,
        class: 'fa-solid fa-house fa-xl',
        icon: 'hause'
      },
      {
        index: 1,
        class: 'fa-solid fa-fish fa-xl',
        icon: 'fish'
      },
      {
        index: 2,
        class: 'fa-solid fa-otter fa-xl',
        icon: 'otter'
      },
      {
        index: 3,
        class: 'fa-solid fa-jet-fighter-up fa-xl',
        icon: 'jet'
      },
      {
        index: 4,
        class: 'fa-solid fa-frog fa-xl',
        icon: 'frog'
      },
      {
        index: 5,
        class: 'fa-solid fa-solid fa-masks-theater fa-xl',
        icon: 'mask'
      },
      {
        index: 6,
        class: 'fa-solid fa-palette fa-xl',
        icon: 'palette'
      },
      {
        index: 7,
        class: 'fa-solid fa-ship fa-xl',
        icon: 'ship'
      },
      {
        index: 8,
        class: 'fa-solid fa-house fa-xl',
        icon: 'hause'
      },
      {
        index: 9,
        class: 'fa-solid fa-fish fa-xl',
        icon: 'fish'
      },
      {
        index: 10,
        class: 'fa-solid fa-otter fa-xl',
        icon: 'otter'
      },
      {
        index: 11,
        class: 'fa-solid fa-jet-fighter-up fa-xl',
        icon: 'jet'
      },
      {
        index: 12,
        class: 'fa-solid fa-frog fa-xl',
        icon: 'frog'
      },
      {
        index: 13,
        class: 'fa-solid fa-solid fa-masks-theater fa-xl',
        icon: 'mask'
      },
      {
        index: 14,
        class: 'fa-solid fa-palette fa-xl',
        icon: 'palette'
      },
      {
        index: 15,
        class: 'fa-solid fa-ship fa-xl',
        icon: 'ship'
      }
    ]

    let cards = []

    const test = (icon) => {
      cards.push(icon)
      console.log(cards)
      if(cards.length === 2) {
          if(cards[0] === cards[1]) {
              const els = document.querySelectorAll('.is-flipped')
                  els.forEach(el => {
                      el.setAttribute('data-matching', true)
                  })
                  setPoints(points + 10)
              cards = []
          } else {
              cards = []
              setTimeout(() => {
                  const els = document.querySelectorAll('.is-flipped')
                  els.forEach(el => {
                    if(el.getAttribute('data-matching') === 'null') {
                      el.classList.remove('is-flipped')
                    }
                    setPoints(points - 1)
                  })
              }, 800)
          }
      }
    }
    function shuffleArr (array){
      for (var i = array.length - 1; i > 0; i--) {
          var rand = Math.floor(Math.random() * (i + 1));
          [array[i], array[rand]] = [array[rand], array[i]]
      }
      return setRandomArray(array)
  }

  const reset = () => {
    shuffleArr(iconsArray)
    cards = []
    setPoints(0)
    const els = document.querySelectorAll('.is-flipped')
      els.forEach(el => {
          el.setAttribute('data-matching', 'null')
          el.classList.remove('is-flipped')
      })
  }
  
    const randomIcon = randomArray.map((el) => {
      return (
       <Card test={() => test(el.icon)} icon={el.class + ' custom-card card-front'} id={el.icon} key={el.icon + el.index}/>
      )
   })

   

    useEffect(() => {
        document.body.style.setProperty('background', '#212529');
        shuffleArr(iconsArray)
       }, [])

    return (
      <div className='deck-container'>
        <div className='header'>
          <span className='points'>Points: {points}</span>
          <span className="repeat" onClick={reset}>
            <i className="fa fa-repeat"></i>
          </span>
        </div>
        <div className="deck">
            {randomIcon}
        </div>
      </div>
    )
}

export default Memory