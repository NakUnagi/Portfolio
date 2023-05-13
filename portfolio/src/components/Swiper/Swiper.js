import React, { useEffect } from "react";
import './swiper.scss'

const Swiper = props => {

    const visibility = 'active'
    const prev = 'prev'
    const next = 'next'
    let slidesArray = []
    let slideToDisplay
    let nexIndex
    let lengthArr

    const startElement = () => document.querySelectorAll('.swiper-slide').forEach(el => {
        slidesArray.push(el)
        lengthArr = slidesArray.length - 1
        slideToDisplay = slidesArray[0]
        slideToDisplay.classList.add(visibility)
    })

    

const ShowSlide = activeElement => {
    activeElement.classList.add(visibility)
}

const ChangeSlide = type => {
    slideToDisplay.classList.remove(visibility)
    if ( type === 'next' ) {
        nexIndex += 1
        slideToDisplay = slidesArray[nexIndex]
        ShowSlide(slideToDisplay)
    }

    if ( type === 'prev' ) {
        nexIndex -= 1
        slideToDisplay = slidesArray[nexIndex]
        ShowSlide(slideToDisplay)
    }
    isLastElement()
}
const isLastElement = () => {
        if(nexIndex === lengthArr) {
            document.getElementById('next').disabled = true
        } else {
            document.getElementById('next').disabled = false
        }

        if ( nexIndex === 0 ) {
            document.getElementById('prev').disabled = true
        } else {
            document.getElementById('prev').disabled = false
        }
}
useEffect(() => {
    startElement()
    nexIndex = slidesArray.indexOf(slideToDisplay)
    isLastElement()

}, [props.slideProps])

useEffect(() => {
    slideToDisplay && slideToDisplay.classList.add(visibility)
}, [slideToDisplay])

    return (
        <>
            <div className="swiper-container">
                <div className="swiper-body">
                   <div className="slide">
                        {props.slideProps}
                   </div>
                </div>
                <div className="swiper-footer">
                    <button id="prev" onClick={() => ChangeSlide(prev)}> ← </button>
                    <button id="next" onClick={() => ChangeSlide(next)}> → </button>
                </div>
            </div>
        </>
    )

}

export default Swiper