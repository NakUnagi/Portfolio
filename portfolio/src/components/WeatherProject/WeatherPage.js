import { ServiceGetWeatherContextProvider } from './ServiceGetWeatherContext'
import SearchCity from "./SearchCity";

const WeatherPage = () => {
    
    return (
        <>
           <ServiceGetWeatherContextProvider>
                <SearchCity />
           </ServiceGetWeatherContextProvider>
        </>
    )
}

export default WeatherPage