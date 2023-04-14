import React, { useContext, useEffect } from "react";
import { WeatherInfoTemplateContext, WeatherInfoTemplateContextProvioder } from '../WeatherInfoTemplate/WeatherInfoTemplateContext'
import Clock from '../../Clock'
import './weatherTemplate.scss'
import weatherInfo from '../weatherInfoJSON'
import { ServiceGetWeatherContext, 
    ServiceGetWeatherContextProvider } from '../WeatherServices/ServiceGetWeatherContext';

const WeatherInfoTemplate = props => {

    const { 
        name, currentTime, date,
        mainTemp, mainFeelsLike, weather,
        descLength, humidity, pressure, sunrise, 
        sunset, currentDay
    } = props

    const { 
        timeOfDay, data,
    } = useContext(ServiceGetWeatherContext)

    const { tempUnitTransform, year, month, day, PM_AM, timeArray
    } = useContext(WeatherInfoTemplateContext)

    let img = ''
    let desc = ''
    weatherInfo.map(item => {
        if (data && data.weather[0].id === item.id) {
            desc = item.description
            if (((item.id === 800) || (item.id === 801) || (item.id === 802) || (item.id === 803)) && (timeOfDay === 'n')) {
                img = item.n
                img = img.slice(11)
                // return img
            } else {
                img = item.img
                img = img.slice(11)
                // return img
            }
        }
    } )

    // useEffect(() => {
    //     weatherInfo.map(item => {
    //         if (data && data.weather[0].id === item.id) {
    //             desc = item.description
    //             if (((item.id === 800) || (item.id === 801) || (item.id === 802) || (item.id === 803)) && (timeOfDay === 'n')) {
    //                 img = item.n
    //                 img = img.slice(11)
    //                 return img
    //             } else {
    //                 img = item.img
    //                 img = img.slice(11)
    //                 return img
    //             }
    //         }
    //     } )

    // }, [img, desc])
    
    return (
        <>
            <WeatherInfoTemplateContextProvioder>
                <div className="weather-info-container data">
                    <div className="d-flex flex-center-space-between">
                        <div>
                            <img src={img} alt="icon"/>
                        </div>
                        <div>
                            <Clock time={timeArray} PM_AM={PM_AM}/>/
                            {timeArray}
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
                            <p className="font-45 mr-0 font-600">{mainTemp}{tempUnitTransform}</p>
                        </div>
                        <div>
                            <em className="font-20">{weather}{descLength} {desc}</em>
                        </div>
                    </div>
                    <div className="font-18 body">
                        <div className="d-flex">
                            <p className="p-right-10 uppercase">Perceptible temperature:</p>
                            <em className="font-600">{mainFeelsLike} {tempUnitTransform}</em>
                        </div>
                        <div className="d-flex">
                            <p className="p-right-10 uppercase">Humidity:</p>
                            <em className="font-600">{humidity}%</em>
                        </div>
                        <div className="d-flex">
                            <p className="p-right-10 uppercase">Pressure:</p>
                            <em className="font-600">{pressure} hPa</em>
                        </div>
                        <div className="d-flex">
                            <p className="p-right-10 uppercase">Sunrise:</p>
                            <em className="font-600">{sunrise}</em>
                        </div>
                        <div className="d-flex">
                            <p className="p-right-10 uppercase">Sunset:</p>
                            <em className="font-600">{sunset}</em>
                        </div>
                    </div>
                </div>
            </WeatherInfoTemplateContextProvioder>
        </>
    )

}

export default WeatherInfoTemplate