import React, { useEffect, useRef, useState } from "react";

const Card = ({icon, id}) => {

    // const [cards, setCards] = useState([])
    const deckRef = useRef()
    const cardRef = useRef()
    let cards = []
    const flipCard = () => {
        deckRef.current.classList.toggle('is-flipped')
        console.log(cards)
        if(cards.length > 1) {
            if(cards[0] === cards[1]) {
                deckRef.current.setAttribute('data-matching', true)
                console.log('if')
            } else {
                deckRef.current.classList.remove('is-flipped')
                console.log('ifelse')
            }
        }
      }
useEffect(() => {
    cards.push(cardRef.current.getAttribute('data-custom-id'))
},[])

    return (
        <div ref={deckRef} className="card-wrapper" onClick={flipCard} data-matching="">
            <i className="custom-card card-back"></i>
            <i ref={cardRef} className={icon} data-custom-id={id}></i>
        </div>
    )

}

export default Card