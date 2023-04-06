import React, { useContext, useEffect } from "react";
import { ServiceMultiWeatherForecastContextProvider, ServiceMultiWeatherForecastContext } from '../WeatherServices/ServiceMultiWeatherForecastContext'
import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'
import Swiper from '../../Swiper/Swiper'

 const MultiWeatherPage = props => {

    const { req, bodyRequest } = useContext(ServiceMultiWeatherForecastContext)

    const forecastDayArray = []

    const singleDay = Object.entries(bodyRequest).map(day => {

        const currentDay = new Date((day[1].dt) * 1000).toLocaleString()
        
        return (
            forecastDayArray.push(
                <div className="swiper-slide" key={day[1].dt}>
                    <WeatherInfoTemplate 
                        name={day[1].dt}
                        img={day[1]}
                        currentTime={day[1]}
                        currentDay={currentDay}
                        // date={day[1]}
                        // mainTemp={day[1]}
                        // mainFeelsLike={day[1]}
                        // tempUnit={day[1]}
                        // weather={day[1]}
                        // descLength={day[1]}
                        // desc={day[1]}
                        // humidity={day[1]}
                        // pressure={day[1]}
                        // sunrise={day[1]}
                        // sunset={day[1]}
                    />
                </div>
            ) 
        )
    })
    
    return (
        <ServiceMultiWeatherForecastContextProvider>
            <button onClick={req}>Click</button>
            <Swiper slideProps={forecastDayArray}/>
            {/* {forecastDayArray} */}
            {bodyRequest && console.log(forecastDayArray)}
        </ServiceMultiWeatherForecastContextProvider>
    )
}

export default MultiWeatherPage