import React, { useContext } from "react";
import { ServiceMultiWeatherForecastContextProvider, ServiceMultiWeatherForecastContext } from '../WeatherServices/ServiceMultiWeatherForecastContext'

const MultiWeatherPage = () => {
    

    const { req, data2 } = useContext(ServiceMultiWeatherForecastContext)


    return (
        <ServiceMultiWeatherForecastContextProvider>
            <button onClick={req}>Click</button>
            {data2 && console.log(data2)}
        </ServiceMultiWeatherForecastContextProvider>
    )
}

export default MultiWeatherPage