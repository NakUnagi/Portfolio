import React, { useContext } from "react";
import { ServiceMultiWeatherForecastContextProvider, ServiceMultiWeatherForecastContext } from '../WeatherServices/ServiceMultiWeatherForecastContext'
import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'

const MultiWeatherPage = (props) => {
    

    const { req, bodyRequest } = useContext(ServiceMultiWeatherForecastContext)

    let forecastDayArray = []

    const singleDay = Object.entries(bodyRequest).map(day => {
        
        return (
            forecastDayArray.push(
                <div key={day[1].dt}>
                    <WeatherInfoTemplate 
                        name={day[1].name}
                        img={day[1]}
                        currentTime={day[1]}
                        currentDay={day[1]}
                        date={day[1]}
                        mainTemp={day[1]}
                        mainFeelsLike={day[1]}
                        tempUnit={day[1]}
                        weather={day[1]}
                        descLength={day[1]}
                        desc={day[1]}
                        humidity={day[1]}
                        pressure={day[1]}
                        sunrise={day[1]}
                        sunset={day[1]}
                    />
                </div>
            ) 
        )
    //    new Date((day[1].dt) * 1000).toLocaleString()
    })


    return (
        <ServiceMultiWeatherForecastContextProvider>
            <button onClick={req}>Click</button>
            {singleDay}
            {bodyRequest && console.log(forecastDayArray)}
        </ServiceMultiWeatherForecastContextProvider>
    )
}

export default MultiWeatherPage