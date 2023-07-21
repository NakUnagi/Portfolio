import React, { useRef } from "react";

const Card = ({icon, id, test}) => {

    const deckRef = useRef()
    const flipCard = () => {
        // if((deckRef.current.classList.contains('is-flipped')) && (deckRef.current.getAttribute('data-matching') === 'null')) {
        //     return false
        // }else{
            deckRef.current.classList.toggle('is-flipped')
        // }
      }

    return (
        <div ref={deckRef} className="card-wrapper" onClick={() => {flipCard()
             test()}} data-matching="null">
            <i className="custom-card card-back fa-solid fa-heart fa-2xl"></i>
            <i className={icon} data-custom-id={id}></i>
        </div>
    )

}

export default Card