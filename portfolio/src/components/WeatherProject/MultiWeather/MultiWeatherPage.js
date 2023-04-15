import React, { useContext, useEffect } from "react";
import { ServiceGetWeatherContext } from '../WeatherServices/ServiceGetWeatherContext';
import { ServiceMultiWeatherForecastContextProvider, ServiceMultiWeatherForecastContext } from '../WeatherServices/ServiceMultiWeatherForecastContext'
import WeatherInfoTemplate from '../WeatherInfoTemplate/WeatherInfoTemplate'
import Swiper from '../../Swiper/Swiper'
import weatherInfo from '../weatherInfoJSON'
 const MultiWeatherPage = props => {
    const { 
        data, selectValue
    } = useContext(ServiceGetWeatherContext)

    const { req, bodyRequest, timeOfDay2 } = useContext(ServiceMultiWeatherForecastContext)

    const forecastDayArray = []

    let img = ''
    let desc = ''


    const singleDay = () =>{
        Object.entries(bodyRequest).map(day => {
            const currentDay = new Date((day[1].dt) * 1000).toLocaleString()
    
                // for (let i = 0; timeOfDay2 == i ; i++) {
                    weatherInfo.map(item => {
                        if (day && day[1].weather[0].id === item.id) {
                            desc = item.description
                            if (((item.id === 800) || (item.id === 801) || (item.id === 802) || (item.id === 803)) && (timeOfDay2[0] === 'n')) {
                                img = item.n
                                return img
                            } else {
                                img = item.img
                                return img
                            }
                        }
                    })
                // }
            
            return (
                forecastDayArray.push(
                    <div className="swiper-slide" key={day[1].dt}>
                        <WeatherInfoTemplate 
                            name={data.name}
                            img={img.slice(11)}
                            currentTime={day[1]}
                            currentDay={currentDay}
                            selectValue={selectValue}
                            // date={day[1]}
                            mainTemp={Math.floor(day[1].main.temp)}
                            mainFeelsLike={Math.floor(day[1].main.feels_like)}
                            // tempUnit={day[1]}
                            weather={day[1].weather[0].main}
                            descLength={desc.length > 0 && ':'}
                            desc={desc}
                            // humidity={day[1]}
                            // pressure={day[1]}
                            // sunrise={day[1]}
                            // sunset={day[1]}
                        />
                    </div>
                ) 
            )
        })
    }
    singleDay()
    useEffect(() => {
        singleDay()
    }, [bodyRequest])

    return (
        <ServiceMultiWeatherForecastContextProvider>
            <button id="multi" onClick={req}>Click</button>
                <Swiper slideProps={forecastDayArray}/>
        </ServiceMultiWeatherForecastContextProvider>
    )
}

export default MultiWeatherPage