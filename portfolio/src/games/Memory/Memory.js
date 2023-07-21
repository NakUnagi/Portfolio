import React, { useEffect, useState } from 'react'
import Card from './Card'

import './Memory.scss'
const Memory = () => {

    const [points, setPoints] = useState(0)
    const [randomArray, setRandomArray] = useState([])
    const [card, setCard] = useState('fa-solid fa-house')  

    let iconsArray = [
      {
        index: 0,
        class: 'fa-solid fa-house',
        icon: 'hause'
      },
      {
        index: 1,
        class: 'fa-solid fa-fish',
        icon: 'fish'
      },
      {
        index: 2,
        class: 'fa-solid fa-otter',
        icon: 'otter'
      },
      {
        index: 3,
        class: 'fa-solid fa-jet-fighter-up',
        icon: 'jet'
      },
      {
        index: 4,
        class: 'fa-solid fa-frog',
        icon: 'frog'
      },
      {
        index: 5,
        class: 'fa-solid fa-solid fa-masks-theater',
        icon: 'mask'
      },
      {
        index: 6,
        class: 'fa-solid fa-palette',
        icon: 'palette'
      },
      {
        index: 7,
        class: 'fa-solid fa-ship',
        icon: 'ship'
      },
      {
        index: 8,
        class: 'fa-solid fa-house',
        icon: 'hause'
      },
      {
        index: 9,
        class: 'fa-solid fa-fish',
        icon: 'fish'
      },
      {
        index: 10,
        class: 'fa-solid fa-otter',
        icon: 'otter'
      },
      {
        index: 11,
        class: 'fa-solid fa-jet-fighter-up',
        icon: 'jet'
      },
      {
        index: 12,
        class: 'fa-solid fa-frog',
        icon: 'frog'
      },
      {
        index: 13,
        class: 'fa-solid fa-solid fa-masks-theater',
        icon: 'mask'
      },
      {
        index: 14,
        class: 'fa-solid fa-palette',
        icon: 'palette'
      },
      {
        index: 15,
        class: 'fa-solid fa-ship',
        icon: 'ship'
      }
    ]

    function shuffleArr (array){
      for (var i = array.length - 1; i > 0; i--) {
          var rand = Math.floor(Math.random() * (i + 1));
          [array[i], array[rand]] = [array[rand], array[i]]
      }
      return setRandomArray(array)
  }
  
    const randomIcon = randomArray.map(el => {
      return (
       <Card icon={el.class + ' custom-card card-front'} id={el.icon} key={el.icon + el.index}/>
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
          <span className="repeat">
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