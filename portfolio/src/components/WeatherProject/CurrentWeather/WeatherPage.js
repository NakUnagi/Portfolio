import { ServiceGetWeatherContextProvider } from './ServiceGetWeatherContext'
import SearchCity from "./SearchCity";
import './weather.scss'

const WeatherPage = () => {
    
    return (
        <>
            <div className="container">
            <div className="row d-lg-flex">
                <div className='col-lg-12'>
                   <div className='col-lg-6 d-block-center p-15-0 header-container'>
                        <h1>
                            Here you can check the current weather in the city you want to visit.
                        </h1>
                   </div>
                </div>
            </div>
                <ServiceGetWeatherContextProvider>
                    <SearchCity />
                </ServiceGetWeatherContextProvider>
           </div>
        </>
    )
}

export default WeatherPage