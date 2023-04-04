import React, { useEffect, useState } from "react";
import './swiper.scss'

const Swiper = () => {

    const [visibility, setVisibility] = useState('active')
    const [activeSlide, setActiveSlaid] = useState(null)
    const prev = 'prev'
    const next = 'next'
    let slidesArray = []

const setActive = () => {
    console.log('active')
    slidesArray = []
    document.querySelectorAll('.swiper-slide').forEach(el => {
        slidesArray.push(el)
        setActiveSlaid(slidesArray[0])
    })
}

const showFirstSlide = () => {
    console.log('show')
    setActive()
    activeSlide.classList.add(visibility)
}

const ShowSlide = activeElement => {
    setActive()
    activeElement.classList.add(visibility)
}

const ChangeSlide = type => {
    console.log('change')
    activeSlide.classList.remove(visibility)
    setActive()
    if ( type === 'next' ) {
        console.log('if')
        let nexIndex = slidesArray.indexOf(activeSlide) + 1
        setActiveSlaid(slidesArray[nexIndex])
        ShowSlide(activeSlide)

    }

}

useEffect(() => {
    setActive()
}, [])

    return (
        <>
            <div className="swiper-container">
                <div className="swiper-body">
                    <button onClick={showFirstSlide}>cc</button>
                    <div className={`swiper-slide`}>
                        <p>SLIDER1</p>
                    </div>
                    <div className={`swiper-slide `}>
                        <p>SLIDER2</p>
                    </div>
                    <div className={`swiper-slide `}>
                        <p>SLIDER3</p>
                    </div>
                    <div className={`swiper-slide `}>
                        <p>SLIDER4</p>
                    </div>
                </div>
                <div className="swiper-footer">
                    <button onClick={() => ChangeSlide(prev)}> ← </button>
                    <button onClick={() => ChangeSlide(next)}> → </button>
                </div>
            </div>
        </>
    )

}

export default Swiper