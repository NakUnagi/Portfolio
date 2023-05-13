import React from "react";
import Clock from '../../Clock'
import './weatherTemplate.scss'

const WeatherInfoTemplate = props => {
    
    const { 
        name, img, desc, multiForecast,
        mainTemp, mainFeelsLike, weather,
        descLength, humidity, pressure, sunrise, 
        sunset, currentDay, selectValue, PM_AM, 
        timeArray, year, month, day,
    } = props

    const tempUnit = () => {
        if (selectValue === '') {
            return <span>&#8490;</span>
        } else if (selectValue === '&units=imperial') {
            return <span>&#x2109;</span>
        } else if (selectValue === '&units=metric') {
            return <span>&#x2103;</span>
        }
    }
    let tempUnitTransform = tempUnit().props.children !== 'K' ? <sup>{tempUnit()}</sup> :  tempUnit()


    return (
        <>
                <div className="weather-info-container data">
                    <div className="d-flex flex-center-space-between">
                        <div>
                            <img src={img} alt="icon"/>
                        </div>
                        <div>
                            <Clock time={timeArray} PM_AM={PM_AM}/>
                            {/* {timeArray}{PM_AM}
                            {console.log(timeArray)} */}
                        </div>
                    </div>
                    <div className="d-block text-center mr-bott-25">
                        <div>
                            <h2 className="font-45 mr-0 uppercase">{name}</h2>
                        </div>
                        <div className="d-block font-20">
                            <em>{currentDay}</em>
                            <br/>
                            <em className="font-600">{day}/{month}/{year}</em>
                        </div>
                        <div>
                            {/* <p>{selectValue}</p> */}
                            <p className="font-45 mr-0 font-600">{mainTemp}{tempUnitTransform}</p>
                        </div>
                        <div>
                            <em className="font-20 nowrap">{weather}{descLength} {desc}</em>
                        </div>
                    </div>
                    <div className="font-18 body">
                        <div className="d-flex">
                            <p className="p-right-10 uppercase">Perceptible temperature:</p>
                            <em className="font-600">{mainFeelsLike}{tempUnitTransform}</em>
                        </div>
                        <div className="d-flex">
                            <p className="p-right-10 uppercase">Humidity:</p>
                            <em className="font-600">{humidity}%</em>
                        </div>
                        <div className="d-flex">
                            <p className="p-right-10 uppercase">Pressure:</p>
                            <em className="font-600">{pressure} hPa</em>
                        </div>
                        {!multiForecast ? 
                            <>
                                 <div className="d-flex">
                                    <p className="p-right-10 uppercase">Sunrise:</p>
                                    <em className="font-600">{sunrise}</em>
                                </div>
                                <div className="d-flex">
                                    <p className="p-right-10 uppercase">Sunset:</p>
                                    <em className="font-600">{sunset}</em>
                                </div>
                            </>
                        : 
                        null}
                    </div>
                </div>
        </>
    )

}

export default WeatherInfoTemplate