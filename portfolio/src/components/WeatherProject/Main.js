import { useState } from "react";
import { ServiceGetWeatherContextProvider } from './ServiceGetWeatherContext'
import SearchCity from "./SearchCity";

const MainWeather = () => {
    
    return (
        <>
           <ServiceGetWeatherContextProvider>
                <SearchCity />
           </ServiceGetWeatherContextProvider>
        </>
    )
}

export default MainWeather