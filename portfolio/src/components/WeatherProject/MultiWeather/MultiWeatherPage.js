import React, { useContext, useEffect } from "react";
import { ServiceGetWeatherContext } from '../WeatherServices/ServiceGetWeatherContext';
import { ServiceMultiWeatherForecastContextProvider, ServiceMultiWeatherForecastContext } from '../WeatherServices/ServiceMultiWeatherForecastContext'
import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'
import Swiper from '../../Swiper/Swiper'
import weatherInfo from '../weatherInfoJSON'


 const MultiWeatherPage = props => {
    const { 
        data, timeOfDay
    } = useContext(ServiceGetWeatherContext)

    const { req, bodyRequest } = useContext(ServiceMultiWeatherForecastContext)

    const forecastDayArray = []

    let img = ''
    let desc = ''
    weatherInfo.map(item => {
        if (data && data.weather[0].id === item.id) {
            desc = item.description
            if (((item.id === 800) || (item.id === 801) || (item.id === 802) || (item.id === 803)) && (timeOfDay === 'n')) {
                img = item.n
                return img
            } else {
                img = item.img
                return img
            }
        }
    } )

    const singleDay = Object.entries(bodyRequest).map(day => {

        const currentDay = new Date((day[1].dt) * 1000).toLocaleString()
        
        return (
            forecastDayArray.push(
                <div className="swiper-slide" key={day[1].dt}>
                    <WeatherInfoTemplate 
                        name={data.name}
                        img={img.slice(11)}
                        currentTime={day[1]}
                        currentDay={currentDay}
                        // date={day[1]}
                        // mainTemp={day[1]}
                        // mainFeelsLike={day[1]}
                        // tempUnit={day[1]}
                        // weather={}
                        weather={day[1].weather[0].main}
                        descLength={desc.length > 0 && ':'}
                        desc={desc}
                        // humidity={day[1]}
                        // pressure={day[1]}
                        // sunrise={day[1]}
                        // sunset={day[1]}
                    />
                    {console.log(day[1])}
                </div>
            ) 
        )
    })

    return (
        <ServiceMultiWeatherForecastContextProvider>
            <button onClick={req}>Click</button>
                <Swiper slideProps={forecastDayArray}/>
            {/* {bodyRequest && console.log(forecastDayArray)} */}
        </ServiceMultiWeatherForecastContextProvider>
    )
}

export default MultiWeatherPage