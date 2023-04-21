import React, { useContext, useEffect, useState } from "react";
import { ServiceGetWeatherContext } from '../WeatherServices/ServiceGetWeatherContext';
import { ServiceMultiWeatherForecastContextProvider, ServiceMultiWeatherForecastContext } from '../WeatherServices/ServiceMultiWeatherForecastContext'
import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'
import Swiper from '../../Swiper/Swiper'
import weatherInfo from '../weatherInfoJSON'


 const MultiWeatherPage = props => {

    const { 
        data, selectValue, PM_AM, timeArray
    } = useContext(ServiceGetWeatherContext)

    const { req, bodyRequest, timeOfDay2 } = useContext(ServiceMultiWeatherForecastContext)

    const forecastDayArray = []

    let img = ''
    let desc = ''
    let multiForecast = false


    const singleDay = () =>{
        // debugger
        Object.entries(bodyRequest).map(day => {
            let currentDay = new Date((day[1].dt) * 1000).toLocaleString()
            const currentDay_YEAR = currentDay.slice(6,10)
            const currentDay_MONTH = currentDay.slice(3,5)
            const currentDay_DAY = currentDay.slice(0,2)
            multiForecast = true
    
                    weatherInfo.map(item => {
                        if (day && day[1].weather[0].id === item.id) {
                            desc = item.description
                            if (((item.id === 800) || (item.id === 801) || (item.id === 802) || (item.id === 803)) && (timeOfDay2[0] === 'n')) {
                                img = item.n
                                return img
                            } else {
                                img = item.img
                                return img
                            }
                        }
                    })
                    
            return (
                forecastDayArray.push(
                    <div className="swiper-slide" key={day[1].dt}>
                        <WeatherInfoTemplate 
                            name={data.name}
                            img={img.slice(11)}
                            currentTime={day[1]}
                            currentDay={currentDay}
                            selectValue={selectValue}
                            timeArray={timeArray}
                            PM_AM={PM_AM}
                            year={currentDay_YEAR} 
                            month={currentDay_MONTH}
                            day={currentDay_DAY}
                            mainTemp={Math.floor(day[1].main.temp)}
                            mainFeelsLike={Math.floor(day[1].main.feels_like)}
                            weather={day[1].weather[0].main}
                            descLength={desc.length > 0 && ':'}
                            desc={desc}
                            humidity={day[1].main.humidity}
                            pressure={day[1].main.pressure}
                            multiForecast={multiForecast}
                        />
                    </div>
                ) 
            )
        })
    }
    singleDay()
    useEffect(() => {
        singleDay()
    }, [bodyRequest])

    return (
        <ServiceMultiWeatherForecastContextProvider>
            <button id="multi" onClick={req}>stare</button>
                <Swiper slideProps={forecastDayArray}/>
        </ServiceMultiWeatherForecastContextProvider>
    )
}

export default MultiWeatherPage