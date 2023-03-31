import React, { useContext } from 'react';
import { ServiceGetWeatherContextProvider } from '../WeatherServices/ServiceGetWeatherContext'
import { ServiceGetWetherMultiDaysForecastContext, ServiceGetWetherMultiDaysForecastProvider } from '../WeatherServices/ServiceGetWetherMultiDaysForecastContext'
import SearchCity from "./SearchCity";
import './weather.scss'

const WeatherPage = () => {
    
    const { test } = useContext(ServiceGetWetherMultiDaysForecastContext)

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
                <div>
                    {/* <ServiceGetWetherMultiDaysForecastProvider>
                        <div>
                            test {console.log(test)}
                        </div>
                    </ServiceGetWetherMultiDaysForecastProvider> */}
                </div>
           </div>
        </>
    )
}

export default WeatherPage