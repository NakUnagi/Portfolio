import React, { useContext } from "react";
import { ServiceGetWeatherContext, ServiceGetWeatherContextProvider } from './ServiceGetWeatherContext'
import DisplayIconWeather from './DisplayIconWeather'

const CityResult = () => {
    const { data, ikonID, timeOfDay } = useContext(ServiceGetWeatherContext)

    return (
        <>
            <ServiceGetWeatherContextProvider>
                {ikonID && <p>ikonID: {ikonID}</p>}
                <   br/>
                {timeOfDay && <p>timeOfday: {timeOfDay.slice(2,3)}</p>}
            </ServiceGetWeatherContextProvider>
            <DisplayIconWeather />
        </>
    )
}

export default CityResult