import React, { useContext } from "react";
import { ServiceMultiWeatherForecastContextProvider, ServiceMultiWeatherForecastContext } from '../WeatherServices/ServiceMultiWeatherForecastContext'

const MultiWeatherPage = () => {
    

    const { req, bodyRequest } = useContext(ServiceMultiWeatherForecastContext)

    const singleDay = Object.entries(bodyRequest).map(day => {
       return  new Date((day[1].dt) * 1000).toLocaleString()
    })


    return (
        <ServiceMultiWeatherForecastContextProvider>
            <button onClick={req}>Click</button>
            {bodyRequest && console.log(singleDay)}
        </ServiceMultiWeatherForecastContextProvider>
    )
}

export default MultiWeatherPage