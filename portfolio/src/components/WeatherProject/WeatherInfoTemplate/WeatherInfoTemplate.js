import React from "react";
import './weatherTemplate.scss'

const WeatherInfoTemplate = props => {
    const { 
        name, img, currentTime, date,
        mainTemp, tempUnit, mainFeelsLike, weather,
        descLength, desc, humidity, pressure, sunrise, 
        sunset
    } = props

    return (
        <div className="weather-info-container data">
            <p className="center-block">{mainTemp}<sup><sup><sub>{tempUnit}</sub></sup></sup></p>
            <h2>{name}<img src={img} alt="icon"/></h2>
            <p>Current time: {currentTime}</p>
            <p>Current date: {date}</p>
            <p>Perceptible temperature: {mainFeelsLike} {tempUnit}</p>
            <p>{weather}{descLength} {desc}</p>
            <p>Humidity: {humidity}%</p>
            <p>Pressure: {pressure} hPa</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
        </div>
    )

}

export default WeatherInfoTemplate